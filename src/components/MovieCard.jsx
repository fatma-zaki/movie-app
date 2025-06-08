'use client';

import { useDispatch, useSelector } from 'react-redux';
import { toggleWishlist } from '@/redux/slices/watchListSlice';
import Image from 'next/image';

export default function MovieCard({ movie }) {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);
  const isInWishlist = wishlist.some((item) => item.id === movie.id);

  const handleToggle = () => {
    dispatch(toggleWishlist(movie));
  };

  const renderStars = (rating) => {
    const stars = Math.round(rating / 2); // TMDB rating is out of 10, so we convert to 5
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i}>
        {i < stars ? '★' : '☆'}
      </span>
    ));
  };

  return (
    <div className="flex bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.01]">
      {/* Poster */}
      <div className="w-[150px] flex-shrink-0">
        <Image
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : '/placeholder.jpg'
          }
          alt={movie.title}
          width={150}
          height={225}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col justify-between w-full">
        <div className="flex justify-between items-start">
          <h2 className="text-lg font-bold leading-tight">{movie.title}</h2>
          <button onClick={handleToggle} className="ml-2">
            <Image
              src={isInWishlist ? '/heartyellow.jpg' : '/outline-heart.jpg'}
              alt="Wishlist"
              width={24}
              height={24}
            />
          </button>
        </div>

        {/* Rating Stars */}
        <div className="mt-1 text-yellow-500 text-sm">
          {renderStars(movie.vote_average || 0)}
        </div>

        <p className="text-sm text-gray-500 mt-1">
          {movie.release_date} • 👁️ {movie.vote_count}
        </p>

        <p className="text-sm mt-2 text-gray-700 line-clamp-3">
          {movie.overview?.length > 120
            ? movie.overview.slice(0, 120) + '...'
            : movie.overview}
        </p>
      </div>
    </div>
  );
}