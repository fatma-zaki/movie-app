'use client';

import { useSelector } from 'react-redux';
import MovieCard from '@/components/MovieCard';
import Link from 'next/link';
import Image from 'next/image';

export default function Watch() {
  const wishlist = useSelector((state) => state.wishlist.items);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Watch list</h1>

      {wishlist.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center mt-20">
          <Image
            src="/heart-empty.svg" 
            alt="No movies"
            width={100}
            height={100}
            className="mb-4 opacity-50"
          />
          <p className="text-lg text-gray-500 mb-4">No Movies in watch list</p>
          <Link href="/">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded">
              Back to home
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {wishlist.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}