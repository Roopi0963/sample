import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBasket, Store, UserCog } from 'lucide-react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Maan-Meal</h1>
        <p className="text-xl text-gray-600">Connecting farmers and consumers for fresher produce</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Marketplace Card */}
        <Link to="/marketplace" className="group">
          <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <ShoppingBasket className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Marketplace</h2>
            <p className="text-gray-600 text-center">Browse and purchase fresh produce directly from local farmers</p>
          </div>
        </Link>

        {/* Seller Dashboard Card */}
        <Link to="/seller-dashboard" className="group">
          <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Store className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Seller Dashboard</h2>
            <p className="text-gray-600 text-center">Manage your products and track your sales as a farmer</p>
          </div>
        </Link>

        {/* Admin Dashboard Card */}
        <Link to="/admin-dashboard" className="group">
          <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <UserCog className="h-8 w-8 text-purple-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Admin Dashboard</h2>
            <p className="text-gray-600 text-center">Monitor and manage the platform's operations</p>
          </div>
        </Link>
      </div>

      <div className="mt-16 bg-white rounded-xl shadow-lg p-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Why Choose FreshConnect?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Fresh Products</h3>
            <p className="text-gray-600">Direct from local farmers to your table</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Support Local</h3>
            <p className="text-gray-600">Help local farmers thrive</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Quality Assured</h3>
            <p className="text-gray-600">Verified sellers and quality products</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;