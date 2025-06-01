import React from 'react';

const categories = [
  { id: 1, name: 'Swift Desire', image: '/product-1.jpg' },
  { id: 2, name: 'Eritiga', image: '/product-2.jpg' },
  { id: 3, name: 'Audi', image: '/product-3.jpg' },
  { id: 4, name: 'Scorpio', image: '/product-4.jpg' },
];

const CategoryCarousel = () => {
  return (
    <div className="w-screen max-w-8xl py-12 px-1 sm:px-10 lg:px-32">
      <div className="flex sm:grid sm:grid-cols-4 gap-10 overflow-x-auto sm:overflow-visible scrollbar-hide">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="flex flex-col items-center min-w-[7rem] sm:min-w-0"
          >
            <div className="w-30 h-30 md:w-48 md:h-48 lg:w-60 lg:h-60 rounded-full overflow-hidden border-4 border-gray-300 shadow-2xl">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p
              className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold text-gray-900 text-center"
              style={{ fontFamily: "'Italiana', serif" }}
            >
              {cat.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCarousel;
