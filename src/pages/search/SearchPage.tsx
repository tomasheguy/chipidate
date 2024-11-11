import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../../components/Navbar';
import SearchFilters from './components/SearchFilters';
import SearchResults from './components/SearchResults';
import { SearchResult } from './types';
import { FilterState } from './types';

const SearchPage = () => {
  const { t } = useTranslation();
  const [filters, setFilters] = useState<FilterState>({
    cuisine: [],
    priceRange: [],
    rating: 0,
    distance: 10,
    date: '',
    time: '',
    guests: 2,
    features: [],
    sortBy: 'recommended'
  });

  const [results, setResults] = useState<SearchResult[]>([]);

  const handleSearch = (newFilters: FilterState) => {
    setFilters(newFilters);
    // In a real app, this would make an API call with the filters
    // For now, we'll just update the state
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">{t('search.title')}</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <SearchFilters filters={filters} onFilterChange={handleSearch} />
          </div>
          
          <div className="lg:col-span-3">
            <SearchResults results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;