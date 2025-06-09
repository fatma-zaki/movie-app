'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { toggleWishlist } from '@/redux/slices/watchListSlice';
import MovieCard from '@/components/MovieCard';

const API_KEY = '5091181a365237d10571ebee61bf12ed';

export default function MovieDetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);

  const isInWishlist = wishlist.some((item) => item.id === parseInt(id));

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const [movieRes, recsRes] = await Promise.all([
          axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`),
          axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`),
        ]);
        setMovie(movieRes.data);
        setRecommendations(recsRes.data.results || []);
      } catch (err) {
        console.error('Failed to fetch movie details:', err);
      }
    };

    fetchDetails();
  }, [id]);

  if (!movie) return <p className="p-8">Loading movie details...</p>;

  return (
    <div className="px-4 py-8 max-w-6xl mx-auto text-gray-800">
      {/* Main Info */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="w-full md:w-[300px] rounded-xl shadow-lg"
        />

        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h1 className="text-4xl font-bold">{movie.title}</h1>
            <button
              onClick={() => dispatch(toggleWishlist(movie))}
              className="text-2xl"
              title="Toggle Wishlist"
            >
              {isInWishlist ? '💛' : '🤍'}
            </button>
          </div>

          <p className="text-sm text-gray-500 mb-1">{movie.release_date}</p>
          <p className="text-yellow-500 text-lg mb-2">⭐ {movie.vote_average} ({movie.vote_count} votes)</p>
          <p className="mb-4">{movie.overview}</p>

          {/* Genres */}
          <div className="flex flex-wrap gap-2 mb-4">
            {movie.genres.map((genre) => (
              <span key={genre.id} className="bg-yellow-300 text-black px-3 py-1 rounded-full text-sm font-medium">
                {genre.name}
              </span>
            ))}
          </div>

          {/* Details */}
          <div className="mb-4">
            <p><span className="font-semibold">Duration:</span> {movie.runtime} min</p>
            <p><span className="font-semibold">Language:</span> {movie.original_language.toUpperCase()}</p>
          </div>

          {/* Company & Website */}
          <div className="flex items-center gap-4 flex-wrap mt-4">
            {movie.production_companies?.map((company) => (
              company.logo_path && (
                <img
                  key={company.id}
                  src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                  alt={company.name}
                  className="h-8 object-contain"
                />
              )
            ))}

            {movie.homepage && (
              <a
                href={movie.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-yellow-400 rounded-full font-semibold text-sm hover:bg-yellow-500"
              >
                Website
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Recommendations</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {recommendations.map((rec) => (
            <MovieCard key={rec.id} movie={rec} />
          ))}
        </div>
      </div>
    </div>
  );
}
