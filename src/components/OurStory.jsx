import React from 'react';

const OurStory = () => {
  return (
    <section id="our-story" className="py-[90px] px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Side Image */}
          <div className="w-full lg:w-1/2">
            <div className="overflow-hidden rounded-md shadow-lg">
              <img
                src="https://www.palmonas.com/cdn/shop/files/STORE_-ABOUT_US_af186df3-7cd2-4600-8c6a-d10ebe13bc25.webp?v=1724675509" // Make sure this image exists in your public folder
                alt="Our Story"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Side Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2
              style={{
                fontFamily: "'Italiana', serif",
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 'bold',
                lineHeight: 1.1,
              }}
              className="mb-4"
            >
              Our Story
            </h2>

            <p
              className="text-gray-700 italic mb-6 font-serif"
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              }}
            >
              Born from a passion for elegance and timeless beauty, our jewelry brand blends heritage with modern artistry. Each piece tells a story — handcrafted to perfection using only the finest materials.
            </p>

            <p
              className="text-gray-600 mb-6"
              style={{
                fontSize: 'clamp(0.95rem, 1.7vw, 1.1rem)',
              }}
            >
              Whether it’s the shimmer of a diamond or the charm of handcrafted silver, our collections are crafted to celebrate your moments — big or small. Join us on this sparkling journey of grace, craftsmanship, and tradition.
            </p>

            <a
              href="/about"
              className="inline-block px-6 py-3 border border-red-600 text-red-600 font-medium rounded hover:bg-red-600 hover:text-white transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
