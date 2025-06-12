'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNowPlayingMovies } from '../../redux/slices/slice'
import { toggleWishlist } from '@/redux/slices/watchListSlice'
import Link from 'next/link'
import Pagination from '@/components/Pagination'

export default function Movies () {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch()
  const { movies, status, error } = useSelector(state => state.movies)
  const wishlist = useSelector(state => state.wishlist.items)


console.log(movies)
  useEffect(() => {
    dispatch(fetchNowPlayingMovies())
  }, [dispatch])


useEffect(() => {
  dispatch(fetchNowPlayingMovies(page));
}, [dispatch, page]);
 
useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}, [page]);

  return (
    <div className='p-4 mt-40'>
      <h1 className='text-2xl font-bold mb-4'>Now Playing</h1>

      {status === 'loading' && <p>Loading movies...</p>}
      {status === 'failed' && <p>Error: {error}</p>}

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
        {movies.map(movie => {
          const isInWishlist = wishlist.some(item => item.id === movie.id)
          return (
            <div key={movie.id} className="bg-gray-100 min-w-50 p-2 rounded shadow">
  <Link href={`/movie/${movie.id}`}>
    <img
      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
      alt={movie.title}
      className="w-full h-auto rounded"
    />
  </Link>

  <div className="flex justify-between mt-2">
    <div className="flex flex-col gap-2">
      <h2 className="text-sm font-semibold">{movie.title}</h2>
      <p className="text-xs text-gray-500">{movie.release_date}</p>
    </div>

    <div className="p-2">
      {isInWishlist ? (
        <Image
          src="/3d-yellow-heart.png"
          alt="Remove from wishlist"
          width={35}
          height={35}
          onClick={() => dispatch(toggleWishlist(movie))}
          className="cursor-pointer"
        />
      ) : (
        <Image
          src="/like-heart.png"
          alt="Add to wishlist"
          width={24}
          height={24}
          onClick={() => dispatch(toggleWishlist(movie))}
          className="cursor-pointer mt-2"
        />
      )}
    </div>
  </div>
</div>

          )
        })}
      </div>
      <div className="flex justify-center gap-4 mt-8">
  {/* <button
    disabled={page === 1}
    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
    className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
  >
    Previous
  </button>
  <button
    onClick={() => setPage((prev) => prev + 1)}
    className="px-4 py-2 bg-yellow-400 rounded"
  >
    Next
  </button> */}
  <Pagination currentPage={page} totalPages={10} onPageChange={setPage} />
</div>

    </div>
  )
}
