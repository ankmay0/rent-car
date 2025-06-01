import React from "react";

const ProductCard = ({
  image,
  title,
  price,
  rating,
  onAddToCart,
  badgeText,
  badgeClass = "bg-black",
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="relative bg-gray-50 p-2.5 sm:p-5 overflow-hidden group cursor-pointer
                 transition-shadow duration-400 ease-in-out
                 hover:shadow-[0_10px_30px_rgba(0,0,0,0.15),0_15px_40px_rgba(0,0,0,0.1)] rounded-xl"
    >
      {/* Pinkish hover overlay */}
      <div
        className="absolute inset-0 bg-pink-500 bg-opacity-10
                   scale-x-0 origin-center transition-transform duration-500
                   ease-cubic-bezier(0.4, 0, 0.2, 1) group-hover:scale-x-100 pointer-events-none z-[10]"
        style={{ transformOrigin: "center" }}
      ></div>

      {/* Badge rotated 90 degrees on left */}
      {badgeText && (
        <div
          className={`absolute z-10 top-2 left-1 rotate-90 text-white italic px-2 py-0.5 text-[7px] sm:text-[10px] font-serif ${badgeClass} clip-polygon`}
          style={{
            clipPath:
              "polygon(100% 0%, 85% 50%, 100% 100%, 0 100%, 0% 50%, 0 0)",
            fontFamily: "'Droid Serif', serif",
          }}
        >
          {badgeText.toUpperCase()}
        </div>
      )}

      {/* Product image */}
      <div className="mb-2.5 sm:mb-3 product-thumb overflow-hidden rounded-md">
        <img
          src={image}
          alt={title}
          className="w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Product details */}
      <div className="product-details relative z-10">
        <h2
          className="text-[8px] sm:text-[10px] font-normal uppercase font-montserrat mb-0.5
                     group-hover:text-pink-600 transition-colors duration-400 ease-in-out"
        >
          <a href="#">{title}</a>
        </h2>

        {/* Rating stars - hidden on small */}
        <div className="text-yellow-400 text-xs sm:text-sm mb-1 hidden sm:block">
          {Array.from({ length: 5 }).map((_, i) => (
            <i
              key={i}
              className={`fa fa-star ${
                i < rating ? "opacity-100" : "opacity-30"
              } transition-opacity duration-400 ease-in-out`}
            ></i>
          ))}
        </div>

        <span className="block text-black font-semibold text-sm sm:text-base mb-2">
          ${price}
        </span>

        {/* Add to cart button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart();
          }}
          className="border border-red-600 text-red-600 uppercase text-xs font-semibold py-1 px-3 rounded hover:bg-red-600 hover:text-white transition-colors duration-300 mx-auto block"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
