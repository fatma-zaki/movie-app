'use client';

import { useDispatch, useSelector } from 'react-redux';
import { toggleWishlist } from '@/redux/slices/watchListSlice';
import Image from 'next/image'
export default function MovieCard({ movie }) {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);
  const isInWishlist = wishlist.some((item) => item.id === movie.id);

  return (
    <div className="bg-gray-100 p-2 rounded shadow">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-auto rounded"
      />
      <h2 className="mt-2 text-center font-semibold text-sm">{movie.title}</h2>
      <button
        onClick={() => dispatch(toggleWishlist(movie))}
        className={`mt-2 px-4 py-1 text-white rounded ${
          isInWishlist ? 'bg-red-500' : 'bg-gray-500'
        }`}
      >
        {isInWishlist ? 'Remove from Wishlist' : <image src='/like-heart.png' alt=''/>}
      </button>
    </div>
  );
}
