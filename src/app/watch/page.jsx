'use client';
import { useSelector } from 'react-redux';
import MovieCard from '@/components/MovieCard';

export default function Watch() {
  const wishlist = useSelector((state) => state.wishlist.items);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {wishlist.length === 0 ? (
          <p>No movies in wishlist</p>
        ) : (
          wishlist.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        )}
      </div>
    </div>
  );
}
