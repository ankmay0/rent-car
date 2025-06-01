import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const categoriesLarge = [
  { img: "/women-cat.jpg", alt: "Sedan", label: "Sedan Cars", link: "/womens" },
  { img: "/men-cat.jpg", alt: "SUVs", label: "SUVs", link: "/mens" },
];

const categoriesSmall = [
  { img: "/jewellery-cat.jpg", alt: "Gen Z", label: "Luxary", link: "/shop" },
  { img: "/women-cat2.jpg", alt: "Minimalist", label: "Weekend getaways", link: "/mens" },
  { img: "/watch-cat.jpg", alt: "Vintage", label: "Long Drives", link: "/womens" },
  { img: "/suit-cat.jpg", alt: "Solo Trips", label: "Solo Trips", link: "/shop" },
];

const CategoryItem = ({ img, alt, label, link }) => (
  <div className="single-cat-item">
    <Link to={link}>
      <figure className="category-thumb rounded-3xl overflow-hidden"> {/* added rounded-lg and overflow-hidden here */}
        <img
          src={img}
          alt={alt}
          className="w-full h-auto object-cover rounded-5xl transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        <figcaption className="category-name">
          <span>{label}</span>
        </figcaption>
      </figure>
    </Link>
  </div>
);


export default function Category() {
  return (
    <div className="ruby-container mt-8 mx-auto px-4 max-w-screen-xl">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-3xl sm:text-4xl lg:text-8xl mb-2 text-center text-gray-800 font-medium"
        style={{ fontFamily: "'Italiana', serif" }}
      >
        Find Your Vibe
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-center text-sm sm:text-base text-gray-500 italic mb-6 sm:mb-8"
      >
        Pick a Car That Feels Like You
      </motion.p>

      <div className="flex justify-center items-center mb-4 sm:mb-6">
        <img
          src="./title-line.png"
          alt="Decorative underline"
          className="h-4 sm:h-6 md:h-8 lg:h-10 max-w-full object-contain"
        />
      </div>

      <div className="row flex flex-wrap -mx-3">
        <div className="col-lg-6 w-full lg:w-1/2 mt-4 px-3 mb-6 lg:mb-0">
          <div className="large-size-cate">
            <div className="row flex flex-wrap -mx-3">
              {categoriesLarge.map(({ img, alt, label, link }, i) => (
                <div
                  key={i}
                  className={`col-sm-6 w-1/2 px-3 ${i === 0 ? "mb-4 lg:mb-0" : ""}`}
                >
                  <CategoryItem img={img} alt={alt} label={label} link={link}  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-lg-6 w-full lg:w-1/2 px-3">
          <div className="small-size-cate mt-0 lg:mt-0">
            <div className="row flex flex-wrap -mx-3">
              {categoriesSmall.map(({ img, alt, label, link }, i) => (
                <div key={i} className="col-sm-6 w-1/2 px-3 mt-0">
                  <CategoryItem img={img} alt={alt} label={label} link={link} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
