import React from 'react';
import { Star, MapPin, DollarSign } from 'lucide-react';
import { SearchResult } from '../types';

interface SearchResultsProps {
  results: SearchResult[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  // Sample data for demonstration
  const sampleResults: SearchResult[] = [
    {
      id: '1',
      name: 'La Maison D\'Or',
      cuisine: 'French',
      priceRange: 3,
      rating: 4.8,
      distance: 2.5,
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070',
      features: ['Outdoor Seating', 'Wine List'],
      availableTimes: ['18:00', '18:30', '19:00', '19:30']
    },
    {
      id: '2',
      name: 'Sakura Sushi',
      cuisine: 'Japanese',
      priceRange: 2,
      rating: 4.6,
      distance: 1.8,
      image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070',
      features: ['Private Room', 'BYOB'],
      availableTimes: ['17:30', '18:00', '20:00', '20:30']
    }
  ];

  const displayResults = results.length > 0 ? results : sampleResults;

  return (
    <div className="space-y-6">
      {displayResults.map((result) => (
        <div key={result.id} className="bg-white rounded-lg shadow overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3">
              <img
                src={result.image}
                alt={result.name}
                className="w-full h-48 md:h-full object-cover"
              />
            </div>
            
            <div className="p-6 md:w-2/3">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">{result.name}</h3>
                  <p className="text-gray-600">{result.cuisine}</p>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-1" />
                  <span className="font-semibold">{result.rating}</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {result.distance} km away
                </div>
                <div className="flex items-center">
                  <DollarSign className="w-4 h-4 mr-1" />
                  {'$'.repeat(result.priceRange)}
                </div>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {result.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-1 bg-gray-100 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Available Times</h4>
                <div className="flex flex-wrap gap-2">
                  {result.availableTimes.map((time) => (
                    <button
                      key={time}
                      className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;