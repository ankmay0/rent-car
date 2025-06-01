import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../UI/ProductCard";
import products from "../Data/ProductData.js";
import { motion } from "framer-motion";


const Womens = () => {
  const navigate = useNavigate();

  // Filter women's products
  const womensProducts = products.filter((product) => product.category === "women");

  const handleAddToCart = (product) => {
    alert(`Added "${product.title}" to cart!`);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading design left unchanged */}
			<div className="relative w-full mb-8">
				<img
					src="/womens.jpg"
					alt="Women's Collection"
					className="w-full h-48 sm:h-64 md:h-80 lg:h-[28rem] xl:h-[32rem] object-cover object-center shadow-md"
				/>
				<div className="absolute inset-0 flex flex-col justify-center items-center bg-black/30">
					{/* Title */}
					<motion.h1
						initial={{ opacity: 0, y: -30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						className="text-3xl sm:text-4xl lg:text-5xl mb-2 text-center text-white font-medium drop-shadow-lg"
						style={{ fontFamily: "'Italiana', serif" }}
					>
						Explore Our Women's Collection
					</motion.h1>

					{/* Description */}
					<motion.p
						initial={{ opacity: 0, y: 5 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3 }}
						className="text-center text-sm sm:text-base text-gray-200 italic mb-2 sm:mb-4 drop-shadow"
					>
						Embrace Elegance and Femininity.
					</motion.p>

					{/* Decorative Line */}
					<img
						src="./title-line.png"
						alt="Decorative underline"
						className="h-4 sm:h-6 md:h-8 lg:h-10 max-w-full object-contain mb-2"
					/>
				</div>
			</div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {womensProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.images?.[0]}   // use first image from images array
              title={product.title}
              price={product.price}
              rating={product.rating}
              badgeText={product.badgeText}
              badgeClass={product.badgeClass}
              onAddToCart={() => handleAddToCart(product)}
              onClick={() => navigate(`/product/${product.id}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Womens;
