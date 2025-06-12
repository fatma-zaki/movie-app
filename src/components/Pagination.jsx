'use client';

export default function Pagination({ currentPage, totalPages = 10, onPageChange }) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center gap-2 mt-8">
      {pageNumbers.map((num) => (
        <button
          key={num}
          onClick={() => onPageChange(num)}
          className={`px-4 py-2 rounded-md text-sm font-medium ${
            num === currentPage
              ? 'bg-yellow-400 text-black'
              : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
          }`}
        >
          {num}
        </button>
      ))}
    </div>
  );
}
