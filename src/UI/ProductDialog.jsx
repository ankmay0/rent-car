import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";
import products from "../Data/ProductData.js"; // Your product data source

const renderStars = (rating) => {
  const maxStars = 5;
  const filledStars = Math.round(rating);
  const stars = [];

  for (let i = 1; i <= maxStars; i++) {
    stars.push(
      <span key={i} className="text-yellow-500 text-xl">
        {i <= filledStars ? "★" : "☆"}
      </span>
    );
  }
  return stars;
};

const ProductDialog = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id.toString() === productId);
    setProduct(foundProduct);
  }, [productId]);

  if (!product) return <div className="p-12 text-center text-lg">Product not found</div>;

  return (
    <div className="min-h-screen bg-white p-12 max-w-7xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="text-red-600 font-semibold mb-8 focus:outline-none focus:ring-2 focus:ring-red-600 rounded"
        aria-label="Go back"
      >
        &larr; Back to Products
      </button>

      <div className="flex flex-col lg:flex-row gap-14">
        {/* Images */}
        <div className="w-full lg:w-1/2">
          <Swiper
            style={{ width: "100%", height: "520px" }} // a bit larger but balanced height
            spaceBetween={20}                        // more spacing between slides
            navigation
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            modules={[Thumbs, Navigation]}
          >
            {product.images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={img}
                  alt={`Product image ${idx + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={16}
            slidesPerView={5}
            freeMode
            watchSlidesProgress
            modules={[Thumbs]}
            className="mt-6"
          >
            {product.images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-28 object-cover rounded-md cursor-pointer border border-gray-300 hover:border-red-500 transition"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Details */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start">
          <h2
            id="product-title"
            className="text-4xl sm:text-5xl font-semibold mb-6 text-red-600"
            style={{ fontFamily: "'Italiana', serif" }}
          >
            {product.title}
          </h2>

          <p className="mb-4 text-2xl font-semibold text-gray-900">
            Price: ${product.price.toFixed(2)}
          </p>

          <div className="mb-8 flex items-center space-x-2" aria-label={`Rating: ${product.rating} out of 5`}>
            {renderStars(product.rating)}
          </div>

          <p
            id="product-description"
            className="mb-8 text-gray-700 text-lg leading-relaxed"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 7,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {product.description}
          </p>

          {product.badgeText && (
        <span
        className={`inline-block max-w-fit px-5 py-3 text-md font-medium text-white rounded-md ${product.badgeClass} select-none`}
        >
        {product.badgeText}
        </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDialog;
