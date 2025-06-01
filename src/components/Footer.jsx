import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* About Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-sm leading-relaxed text-gray-300">
              Snatchers offers exquisite handcrafted pieces made with love and care. Discover timeless elegance and sparkle every day.
            </p>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-gray-100 transition">Contact Us</a></li>
              <li><a href="/shipping" className="hover:text-gray-100 transition">Shipping & Returns</a></li>
              <li><a href="/faq" className="hover:text-gray-100 transition">FAQs</a></li>
              <li><a href="/warranty" className="hover:text-gray-100 transition">Warranty</a></li>
            </ul>
          </div>
{/* 
          Quick Links */}
          {/* <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/collections" className="hover:text-gray-100 transition">Collections</a></li>
              <li><a href="/new-arrivals" className="hover:text-gray-100 transition">New Arrivals</a></li>
              <li><a href="/sale" className="hover:text-gray-100 transition">Sale</a></li>
              <li><a href="/gift-cards" className="hover:text-gray-100 transition">Gift Cards</a></li>
            </ul>
          </div> */}

          {/* Newsletter & Social */}
          <div>
            {/* <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-md text-black focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white text-black font-semibold rounded-md px-5 py-2 hover:bg-gray-200 transition"
              >
                Subscribe
              </button>
            </form> */}

            <div className="mt-6 flex space-x-5 text-white">
              <a href="https://facebook.com" aria-label="Facebook" className="hover:text-gray-400 transition">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 10-11.63 9.87v-6.99h-2.8v-2.88h2.8V9.41c0-2.76 1.64-4.29 4.16-4.29 1.2 0 2.46.22 2.46.22v2.7h-1.38c-1.36 0-1.79.85-1.79 1.72v2.07h3.04l-.49 2.88h-2.55v6.99A10 10 0 0022 12z" />
                </svg>
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="hover:text-gray-400 transition">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm4.5-3a1 1 0 110 2 1 1 0 010-2z" />
                </svg>
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="hover:text-gray-400 transition">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.34-1.6.57-2.46.67a4.3 4.3 0 001.88-2.37 8.5 8.5 0 01-2.7 1.04 4.27 4.27 0 00-7.28 3.9A12.1 12.1 0 013 5.1a4.27 4.27 0 001.32 5.7 4.22 4.22 0 01-1.93-.53v.05a4.27 4.27 0 003.42 4.19 4.28 4.28 0 01-1.92.07 4.27 4.27 0 003.98 2.96A8.56 8.56 0 012 19.54 12.07 12.07 0 008.29 21c7.54 0 11.67-6.25 11.67-11.67 0-.18 0-.35-.01-.52A8.32 8.32 0 0022.46 6z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Snatchers. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
