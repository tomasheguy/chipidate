import React from 'react';
import RestaurantNav from '../../components/restaurant/RestaurantNav';
import { useAuth } from '../../contexts/AuthContext';
import { Mail, Phone, MapPin, Globe, Camera } from 'lucide-react';

const RestaurantSettings = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <RestaurantNav />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Restaurant Settings</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Basic Information */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-6">Basic Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Restaurant Name
                  </label>
                  <input
                    type="text"
                    defaultValue={user?.restaurantName}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    rows={4}
                    className="w-full p-2 border rounded-md"
                    placeholder="Describe your restaurant..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cuisine Type
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="e.g., Italian, French, Contemporary"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-gray-400 mr-2" />
                  <input
                    type="email"
                    defaultValue={user?.email}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-gray-400 mr-2" />
                  <input
                    type="tel"
                    className="w-full p-2 border rounded-md"
                    placeholder="Phone number"
                  />
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Address"
                  />
                </div>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 text-gray-400 mr-2" />
                  <input
                    type="url"
                    className="w-full p-2 border rounded-md"
                    placeholder="Website"
                  />
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-6">Operating Hours</h2>
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                <div key={day} className="flex items-center justify-between py-2">
                  <span className="w-32">{day}</span>
                  <div className="flex items-center space-x-4">
                    <input type="time" className="p-2 border rounded-md" />
                    <span>to</span>
                    <input type="time" className="p-2 border rounded-md" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photos and Media */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-6">Photos</h2>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <div className="text-sm text-gray-600">
                    <label className="cursor-pointer text-blue-600 hover:text-blue-500">
                      Upload photos
                      <input type="file" className="hidden" accept="image/*" multiple />
                    </label>
                    <p className="mt-1">or drag and drop</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-6">Save Changes</h2>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Save Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantSettings;