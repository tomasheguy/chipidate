export interface FilterState {
  cuisine: string[];
  priceRange: number[];
  rating: number;
  distance: number;
  date: string;
  time: string;
  guests: number;
  features: string[];
  sortBy: 'recommended' | 'rating' | 'price' | 'distance';
}

export interface SearchResult {
  id: string;
  name: string;
  cuisine: string;
  priceRange: number;
  rating: number;
  distance: number;
  image: string;
  features: string[];
  availableTimes: string[];
}