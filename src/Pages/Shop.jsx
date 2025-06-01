import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../UI/ProductCard";
import products from "../Data/ProductData.js";

const Shop = () => {
  const placeholderImg = "https://redthread.uoregon.edu/files/original/affd16fd5264cab9197da4cd1a996f820e601ee4.png";

  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    alert(`Added "${product.title}" to cart!`);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ... Your title and decorative line */}

        <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.images && product.images.length > 0 ? product.images[0] : placeholderImg}
              title={product.title}
              price={product.price}
              rating={product.rating}
              badgeText={product.badgeText}
              badgeClass={product.badgeClass}
              onAddToCart={() => handleAddToCart(product)}
              onClick={() => navigate(`/product/${product.id}`)} // Navigate to product page
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
