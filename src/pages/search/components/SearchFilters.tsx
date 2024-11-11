import React from 'react';
import { useTranslation } from 'react-i18next';
import { FilterState } from '../types';
import { Sliders } from 'lucide-react';

interface SearchFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ filters, onFilterChange }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center mb-6">
        <Sliders className="w-5 h-5 mr-2" />
        <h2 className="text-lg font-semibold">{t('search.filters.title')}</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('search.filters.date')}
          </label>
          <input
            type="date"
            value={filters.date}
            onChange={(e) => onFilterChange({ ...filters, date: e.target.value })}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('search.filters.time')}
          </label>
          <input
            type="time"
            value={filters.time}
            onChange={(e) => onFilterChange({ ...filters, time: e.target.value })}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('search.filters.guests')}
          </label>
          <input
            type="number"
            min="1"
            value={filters.guests}
            onChange={(e) => onFilterChange({ ...filters, guests: parseInt(e.target.value) })}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('search.filters.sort.label')}
          </label>
          <select
            value={filters.sortBy}
            onChange={(e) => onFilterChange({ ...filters, sortBy: e.target.value as FilterState['sortBy'] })}
            className="w-full p-2 border rounded-md"
          >
            <option value="recommended">{t('search.filters.sort.recommended')}</option>
            <option value="rating">{t('search.filters.sort.rating')}</option>
            <option value="price">{t('search.filters.sort.price')}</option>
            <option value="distance">{t('search.filters.sort.distance')}</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;