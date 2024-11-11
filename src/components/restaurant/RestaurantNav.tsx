import React from 'react';
import { LayoutGrid, Calendar, UtensilsCrossed, Settings, LogOut, Home } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher';

const RestaurantNav = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const navItems = [
    { icon: <LayoutGrid className="w-5 h-5" />, path: '/restaurant', label: t('restaurant.dashboard.title') },
    { icon: <Calendar className="w-5 h-5" />, path: '/restaurant/availability', label: t('restaurant.availability.title') },
    { icon: <UtensilsCrossed className="w-5 h-5" />, path: '/restaurant/menus', label: t('restaurant.menus.title') },
    { icon: <Settings className="w-5 h-5" />, path: '/restaurant/settings', label: t('restaurant.settings.title') }
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-xl font-bold text-gray-800">
              {t('brand')}
            </Link>
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              <Home className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center text-gray-600 hover:text-gray-900 ${
                  location.pathname === item.path ? 'text-blue-600' : ''
                }`}
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              <button 
                onClick={handleLogout}
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <LogOut className="w-5 h-5" />
                <span className="ml-2">{t('nav.signOut')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default RestaurantNav;