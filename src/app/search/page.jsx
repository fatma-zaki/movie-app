'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import MovieCard from '@/components/MovieCard';
import axios from 'axios';
import SearchInput from '../../components/SearchInput'

const API_KEY = '5091181a365237d10571ebee61bf12ed'; // Replace with env var later

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query');
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) return;

      setStatus('loading');

      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
        );
        setResults(res.data.results || []);
        setStatus('succeeded');
      } catch (error) {
        console.error('Error fetching search results:', error);
        setStatus('failed');
      }
    };

    fetchResults();
  }, [query]);

  return (
    <div className="p-8">
    < SearchInput/>
      <h1 className="text-xl font-bold mb-4">Search results for "{query}"</h1>

      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p className="text-red-500">Failed to fetch results.</p>}
      {status === 'succeeded' && results.length === 0 && <p>No results found.</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
