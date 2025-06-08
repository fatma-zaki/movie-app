"use client";

import { useEffect } from 'react';
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux';
import { fetchNowPlayingMovies } from '../../redux/slices/slice';
import { toggleWishlist } from '@/redux/slices/watchListSlice';

export default function Movies() {
  const dispatch = useDispatch();
  const { movies, status, error } = useSelector((state) => state.movies);
  const wishlist = useSelector((state) => state.wishlist.items);

  useEffect(() => {
    dispatch(fetchNowPlayingMovies());
  }, [dispatch]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Now Playing</h1>

      {status === 'loading' && <p>Loading movies...</p>}
      {status === 'failed' && <p>Error: {error}</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map((movie) => {
          const isInWishlist = wishlist.some((item) => item.id === movie.id);
          return (
            <div key={movie.id} className="bg-gray-100 p-2 rounded shadow">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-auto rounded"
              />
              <h2 className="mt-2 text-center font-semibold text-sm">{movie.title}</h2>
              
                {isInWishlist ?
                <Image src="/3d-yellow-heart.png" alt=""
                width={24} height={24}
                onClick={() => dispatch(toggleWishlist(movie))}
                className={` ${
                  isInWishlist ? '' : 'bg-gray-500'
                }`}
              />
              :
                 <Image src='/like-heart.png' className='cursor-pointer' alt='' width={24} height={24} onClick={() => dispatch(toggleWishlist(movie))} />
                 }
            
            </div>
          );
        })}
      </div>
    </div>
  );
}
