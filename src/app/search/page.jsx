import SearchPageContent from './../../components/SearchPageContent';
import { Suspense } from 'react';

export default function SearchPageWrapper() {
  return (
    <Suspense fallback={<p className="p-8">Loading search page...</p>}>
      <SearchPageContent />
    </Suspense>
  );
}
