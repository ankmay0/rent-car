import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/parallax';
import './Crausel.css'; // Ensure this path is correct

// const slides = [
//   {
//     title: 'Rubby Store',
//     heading: 'Ring Solitaire Princess',
//     text: 'Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.',
//     image: '/slide-img-1.jpg', // Ensure these images are optimized
//   },
//   {
//     title: 'New Collection 2025',
//     heading: 'Beautiful Earrings',
//     text: 'Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.',
//     image: '/slide-img-2.jpg', // Ensure these images are optimized
//   },
// ];

const slides = [
{
  title: 'Smart Rides',
  heading: 'Compact Cars for City Travel',
  text: 'Perfect for navigating Ranchi’s busy streets – fuel-efficient, easy to park, and budget-friendly.',
  image: '/slide-img-1.jpg',
},
{
  title: 'Power Drives',
  heading: 'SUVs for Family & Adventure',
  text: 'Spacious and powerful – ideal for road trips, family outings, and Jharkhand’s diverse terrain.',
  image: '/slide-img-2.jpg',
},
{
  title: 'Business Class',
  heading: 'Premium Cars for Corporate Needs',
  text: 'Arrive in style with our executive cars – comfort, class, and reliability for professionals.',
  image: '/slide-img-3.jpg',
},
{
  title: 'Local Connect',
  heading: 'Affordable Rentals for Daily Use',
  text: 'Flexible pricing and dependable service – your go-to solution for daily commutes in Ranchi.',
  image: '/slide-img-4.jpg',
}
];




export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative overflow-hidden">
      {/* This div seems to be for a top decorative black shape if .clip-path-banner::after targets it */}
      {/* If it's just for the ::after, it could be combined with the section or be more clearly named */}
      <div className="absolute inset-0 z-[-1] clip-path-banner bg-black"></div>

      <Swiper
        modules={[Autoplay, Pagination, EffectFade, Parallax]}
        effect="fade"
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        speed={1000}
        parallax={true}
        className="w-full h-[30vh] sm:h-[70vh] md:h-[80vh] lg:h-[80vh]" // Responsive height
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-full flex items-center justify-start px-4 sm:px-8 md:px-16 lg:px-28 overflow-hidden" // Responsive padding
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              data-swiper-parallax="-20%" // Parallax effect
            >
              {/* Overlay for text readability */}
              <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-0" />

              <div
                className="relative z-10 text-gray-900 max-w-3xl" // Max width for content
                // Base font size for context, individual elements override
                style={{
                  fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                }}
              >
                {/* Title */}
                <h4
                  className={`font-montserrat text-red-600 font-semibold uppercase tracking-wide transition-opacity duration-700 ease-out
                    ${activeIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                    sm:text-sm md:text-base lg:text-lg
                    text-left sm:text-left
                    px-0 sm:px-0
                  `}
                  style={{
                    transitionDelay: activeIndex === index ? '300ms' : '0ms',
                    fontSize: 'clamp(0.875rem, 1.2vw, 1.125rem)',
                    lineHeight: '1.3',
                    marginBottom: '0.25rem',
                  }}
                >
                  {slide.title}
                </h4>
                
                {/* Heading */}
                <h2
                  className={`font-montserrat font-bold leading-tight mt-2 mb-0 transition-opacity duration-700 ease-out
                    ${activeIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{
                    transitionDelay: activeIndex === index ? '500ms' : '0ms',
                    fontSize: 'clamp(1.2rem, 5vw, 5rem)', // Fluid font size (e.g., 32px min, scales with 5% of viewport width, max 80px)
                    lineHeight: '1.1',
                  }}
                >
                  {slide.heading}
                </h2>

                {/* Paragraph */}
                <p
                  className={`font-merriweather italic mb-2 leading-relaxed transition-opacity duration-700 ease-out
                    ${activeIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{
                    transitionDelay: activeIndex === index ? '700ms' : '0ms',
                    fontSize: 'clamp(0.675rem, 1.2vw, 1.125rem)', // Fluid font size
                    maxWidth: '480px', // Caps paragraph width for readability
                  }}
                >
                  {slide.text}
                </p>

                {/* Button */}
                  <a
                    href="/shop"
                    className={`inline-block  border border-red-600 text-red-600 hover:bg-red-600 hover:text-white hover:border-red-700 font-semibold rounded-full shadow-md transition-all duration-300
                      ${activeIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                      px-2 sm:px-3 md:px-4
                      py-1 sm:py-1.5 md:py-2
                      text-[0.7rem] sm:text-sm md:text-base
                      text-center whitespace-nowrap
                      w-full max-w-[100px]
                    `}
                    style={{
                      transitionDelay: activeIndex === index ? '900ms' : '0ms',
                      fontSize: 'clamp(0.85rem, 0.8vw + 0.2rem, 0.95rem)',
                    }}

                  >
                    Shop Now
                  </a>





              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}