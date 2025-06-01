import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import products from "../Data/ProductData";  // adjust path if needed
import ProductCard from "../UI/ProductCard";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const CategoryShop = () => {
  const navigate = useNavigate();
  const query = useQuery();

  // Get category or occasion from URL query
  const occasion = query.get("occasion");
  const category = query.get("category");

  // Filter products by category or occasion
  const filteredProducts = products.filter((product) => {
    if (category) {
      return product.category === category;
    }
    if (occasion) {
      return product.occasion && product.occasion.includes(occasion);
    }
    return true; // fallback - show all if no filter
  });

  // Determine heading text
  let headingText = "Shop";

  if (category) {
    headingText = category === "men" ? "Shop For Men" : category === "women" ? "Shop For Women" : `Shop For ${category}`;
  } else if (occasion) {
    // Capitalize occasion label nicely
    headingText = `Shop For ${occasion.charAt(0).toUpperCase() + occasion.slice(1)}`;
  }

  const handleAddToCart = (product) => {
    alert(`Added "${product.title}" to cart!`);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <h1
          className="text-3xl sm:text-4xl lg:text-6xl mb-5 text-center text-gray-800 font-medium"
          style={{ fontFamily: "'Italiana', serif" }}
        >
          {headingText}
        </h1>

        <div className="flex justify-center items-center mb-4 sm:mb-6">
          <img
            src="./title-line.png"
            alt="Decorative underline"
            className="h-4 sm:h-6 md:h-8 lg:h-10 max-w-full object-contain"
          />
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.images[0]}  // show first image
                title={product.title}
                price={product.price}
                rating={product.rating}
                badgeText={product.badgeText}
                badgeClass={product.badgeClass}
                onAddToCart={() => handleAddToCart(product)}
                onClick={() => navigate(`/product/${product.id}`)}
              />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">No products found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CategoryShop;
