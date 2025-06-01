import React, { useState } from 'react';
import { FaSearch, FaShoppingBag, FaTrashAlt, FaUser, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-8 xl:top-8 sm:top-10 left-0 w-full bg-white shadow-md z-40">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/logo-black.png"
              alt="Logo"
              className="h-10 w-auto max-w-full"
            />
          </a>

          {/* Gambler Button */}
          <button
            className="lg:hidden text-2xl text-gray-700 z-40 transition-transform duration-300 transform hover:scale-110"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <FaTimes className="transition duration-300 opacity-100 scale-100" />
            ) : (
              <FaBars className="transition duration-300 opacity-100 scale-100" />
            )}
          </button>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex space-x-8 text-gray-700 text-sm font-medium">
            <a href="/" className="hover:text-indigo-600">Home</a>
            <a href="/shop" className="hover:text-indigo-600">Economy Cars</a>
            <a href="/mens" className="hover:text-indigo-600">SUVs</a>
            <a href="/womens" className="hover:text-indigo-600">Sedans</a>
            <a href="/about" className="hover:text-indigo-600">Contact Us</a>
          </nav>

          {/* Icons */}
          <div className="hidden lg:flex items-center space-x-6 text-gray-600">
            {/* <button className="hover:text-indigo-600">
              <FaSearch />
            </button> */}

            <div className="relative group">
              {/* <button className="relative hover:text-indigo-600">
                <FaShoppingBag />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">3</span>
              </button> */}
              <div className="absolute right-0 mt-3 w-80 bg-white border shadow-lg p-4 hidden group-hover:block z-50">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="flex items-center space-x-4 mb-4">
                    <img src={`/assets/img/product-${i + 1}.jpg`} alt="Product" className="w-12 h-12 object-cover" />
                    <div>
                      <h2 className="text-sm font-medium">Product Name {i + 1}</h2>
                      <p className="text-sm text-gray-600">{3 - i} × ₹{(i + 1) * 50}</p>
                    </div>
                    <button>
                      <FaTrashAlt className="text-red-500" />
                    </button>
                  </div>
                ))}
                <a href="/checkout.html" className="block w-full text-center bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
                  Checkout
                </a>
              </div>
            </div>

            <a href="/profile" className="hover:text-indigo-600">
              <FaUser />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Background Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>
    
      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-lg font-semibold text-gray-800">Menu</span>
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <FaTimes className="text-gray-700 text-xl transition-transform duration-300 transform hover:rotate-90" />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4 text-gray-700 text-sm font-medium">
          <a href="/" className="hover:text-indigo-600">Home</a>
          <a href="/shop" className="hover:text-indigo-600">Economy Cars</a>
          <a href="/mens" className="hover:text-indigo-600">SUVs</a>
          <a href="/womens" className="hover:text-indigo-600">Sedans</a>
          <a href="/blog" className="hover:text-indigo-600">Blog</a>
          <a href="/about" className="hover:text-indigo-600">Contact Us</a>
          <div className="flex items-center space-x-4 pt-4 border-t">
            {/* <button className="hover:text-indigo-600">
              <FaSearch />
            </button>
            <button className="hover:text-indigo-600">
              <FaShoppingBag />
            </button> */}
            <a href="/profile" className="hover:text-indigo-600">
              <FaUser />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
