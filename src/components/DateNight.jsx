import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../UI/ProductCard";
import products from "../Data/ProductData.js";
import { AnimatePresence, motion } from "framer-motion";

const DateNight = () => {
  const [activeTab, setActiveTab] = useState("SUVs");
  const navigate = useNavigate();

  const tabOccasionMap = {
    "Economy Cars": "economy",
    "SUVs": "suv",
    "Sedans": "sedan",
    "Luxury Cars": "luxury",
  };


  const filteredProducts = products
    .filter((p) => p.occasion.includes(tabOccasionMap[activeTab]))
    .slice(0, 4);

  const descriptions = {
    "Economy Cars": "Budget-friendly and fuel-efficient rides, perfect for daily city travel.",
    "SUVs": "Spacious and powerful vehicles for road trips and rugged terrains.",
    "Sedans": "Smooth and stylish cars ideal for business or comfortable long drives.",
    "Luxury Cars": "Premium vehicles offering top-tier comfort, performance, and style.",
  };


  const handleAddToCart = (product) => alert(`Added "${product.title}" to cart!`);
  const handleWishlist = (product) => alert(`Added "${product.title}" to wishlist!`);
  const handleCompare = (product) => alert(`Added "${product.title}" to compare!`);

  return (
    <div className="date-night-products max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <motion.h1
        key={activeTab + "-title"}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-3xl sm:text-4xl lg:text-5xl mb-2 text-center text-gray-800 font-medium"
        style={{ fontFamily: "'Italiana', serif" }}
      >
        {activeTab} 
      </motion.h1>

      <motion.p
        key={activeTab + "-desc"}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-center text-sm sm:text-base text-gray-500  mb-6 sm:mb-8"
      >
        {descriptions[activeTab]}
      </motion.p>

      <div className="flex justify-center items-center mb-4 sm:mb-6">
        <img
          src="./title-line.png"
          alt="Decorative underline"
          className="h-4 sm:h-6 md:h-8 lg:h-10 max-w-full object-contain"
        />
      </div>

      <div className="flex overflow-x-auto whitespace-nowrap justify-center items-center gap-0 mb-6 px-0 scrollbar-hide">
        {["Economy Cars", "SUVs", "Sedans", "Luxury Cars"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className= {`px-3 py-1 border-b-2  transition text-xs sm:text-2xl md:text-3xl font-medium flex-shrink-0 ${
              activeTab === tab
                ? "border-red-600 text-red-600"
                : "border-transparent text-gray-500 hover:text-red-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>


      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab + "-products"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
              className="cursor-pointer"
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter') navigate(`/product/${product.id}`);
              }}
            >
              <ProductCard
                image={product.images[0]}
                title={product.title}
                price={`$${product.price}`}
                rating={product.rating}
                onAddToCart={(e) => {
                  e.stopPropagation();
                  handleAddToCart(product);
                }}
                onWishlist={(e) => {
                  e.stopPropagation();
                  handleWishlist(product);
                }}
                onCompare={(e) => {
                  e.stopPropagation();
                  handleCompare(product);
                }}
              />
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default DateNight;
