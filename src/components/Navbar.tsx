import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sprout, ShoppingBasket, LayoutDashboard, UserCog, Users } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'bg-green-50 text-green-600' : 'text-gray-700';
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Sprout className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-green-600">Maan-Meal</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/marketplace" 
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium hover:text-green-600 hover:bg-green-50 transition-colors ${isActive('/marketplace')}`}>
              <ShoppingBasket className="h-5 w-5" />
              <span>Marketplace</span>
            </Link>
            <Link to="/seller-dashboard"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium hover:text-green-600 hover:bg-green-50 transition-colors ${isActive('/seller-dashboard')}`}>
              <LayoutDashboard className="h-5 w-5" />
              <span>Seller Dashboard</span>
            </Link>
            <Link to="/admin-dashboard"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium hover:text-green-600 hover:bg-green-50 transition-colors ${isActive('/admin-dashboard')}`}>
              <UserCog className="h-5 w-5" />
              <span>Admin</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;