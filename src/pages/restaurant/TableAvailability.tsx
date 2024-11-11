import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar as CalendarIcon, Plus, Upload, Trash2, Edit } from 'lucide-react';
import RestaurantNav from '../../components/restaurant/RestaurantNav';
import Calendar from '../../components/restaurant/Calendar';
import TableList from '../../components/restaurant/TableList';
import TableForm from '../../components/restaurant/TableForm';
import FileImport from '../../components/restaurant/FileImport';
import ImportGuide from '../../components/restaurant/ImportGuide';
import { Table } from '../../types';
import { useRestaurant } from '../../contexts/RestaurantContext';

const TableAvailability = () => {
  const { t } = useTranslation();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [showImport, setShowImport] = useState(false);
  const [showTableForm, setShowTableForm] = useState(false);
  const [editingTable, setEditingTable] = useState<Table | undefined>();
  const { tables, availability, addTable, deleteTable } = useRestaurant();

  return (
    <div className="min-h-screen bg-gray-50">
      <RestaurantNav />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">{t('restaurant.availability.title')}</h1>
          <div className="flex space-x-4">
            <button
              onClick={() => setShowImport(true)}
              className="bg-white text-gray-600 px-4 py-2 rounded-md border hover:bg-gray-50 flex items-center"
            >
              <Upload className="w-5 h-5 mr-2" />
              {t('restaurant.availability.importTables')}
            </button>
            <button
              onClick={() => {
                setEditingTable(undefined);
                setShowTableForm(true);
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center"
            >
              <Plus className="w-5 h-5 mr-2" />
              {t('restaurant.availability.addTable')}
            </button>
          </div>
        </div>

        {showImport && (
          <div className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FileImport
              onFileSelect={handleFileImport}
              accept=".json,.csv,.xlsx"
              description={t('restaurant.availability.importTables')}
            />
            <ImportGuide type="table" />
          </div>
        )}

        {showTableForm && (
          <div className="mb-8">
            <TableForm 
              onClose={() => {
                setShowTableForm(false);
                setEditingTable(undefined);
              }}
              editTable={editingTable}
            />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-6">
              <Calendar 
                selectedDate={selectedDate}
                onDateSelect={setSelectedDate}
                availability={availability}
              />
            </div>

            <div className="mt-8 bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-6">{t('restaurant.availability.title')}</h2>
              <div className="space-y-4">
                {tables.map((table) => (
                  <div key={table.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold">{table.name}</h3>
                        <p className="text-sm text-gray-600">
                          {table.minDiners}-{table.maxDiners} {t('search.guests')} • {t(`restaurant.availability.locations.${table.location}`)}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEditTable(table)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-md"
                        >
                          <Edit className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDeleteTable(table.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-md"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableAvailability;