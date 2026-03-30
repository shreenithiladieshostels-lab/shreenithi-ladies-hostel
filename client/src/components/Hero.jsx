import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    image: "/images/room.png",
    mobileImage: "/images/mobile_room.png",
    title: "Chennai's Most Trusted Ladies Hostel Since 2000.",
    subtitle: "Now with premium location on Mount Road.",
    cta: { text: "Explore Rooms & Pricing", link: "/rooms" },
  },
  {
    image: "/images/furnished.png",
    mobileImage: "/images/mobile_furnished.png",
    title: "Furnished & Air-Conditioned Rooms.",
    subtitle: "Starting from ₹6,800/month with homely food included.",
    cta: { text: "View Room Types", link: "/rooms" },
  },
  {
    image: "/images/home.png",
    mobileImage: "/images/mobile_home.png",
    title: "A Home Away From Home.",
    subtitle: "Safe, clean, and comfortable accommodation for working women & students.",
    cta: { text: "Learn More", link: "/about" },
  },
  {
    image: "/images/location-hero.png",
    mobileImage: "/images/mobile_location-hero.png",
    title: "Premium Location on Mount Road.",
    subtitle: "Near Thousand Lights, Anna Salai & Teynampet — near IT hubs, colleges & hospitals.",
    cta: { text: "View Facilities", link: "/facilities" },
  },
  {
    image: "/images/living.png",
    mobileImage: "/images/mobile_living.png",
    title: "Comfortable Living, Affordable Pricing.",
    subtitle: "Individual cupboards, attached bathrooms, WiFi, CCTV & 24/7 security.",
    cta: { text: "Contact Us", link: "/contact" },
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const slide = slides[current];

  const getMobileObjectPosition = () => {
    const positions = [
      'center 20%', // room.png
      'center 30%', // furnished.png  
      'center 25%', // home.png
      'center 35%', // location-hero.png
      'center 30%'  // living.png
    ];
    return positions[current];
  };

  return (
    <section className="relative h-[100dvh] min-h-[500px] max-h-[900px] sm:min-h-[600px] overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div className="w-full h-full relative overflow-hidden">
            <img
              src={isMobile ? slide.mobileImage : slide.image}
              alt=""
              className="w-full h-full object-cover"
              style={{
                objectPosition: isMobile ? getMobileObjectPosition() : 'center'
              }}
            />
          </div>
          {/* Dark overlay - stronger on mobile for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/40 sm:from-black/80 sm:via-black/40 sm:to-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 flex items-end z-10">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 pb-16 sm:pb-24 lg:pb-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="max-w-3xl"
            >
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.15] mb-3 sm:mb-4">
                {slide.title}
              </h1>
              <p className="text-white/75 text-sm sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl leading-relaxed">
                {slide.subtitle}
              </p>
              <Link
                to={slide.cta.link}
                className="inline-flex items-center gap-2.5 bg-primary hover:bg-primary-dark text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 text-sm sm:text-base"
              >
                {slide.cta.text}
                <span className="text-lg">→</span>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="text-xs sm:text-sm" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
        aria-label="Next slide"
      >
        <FaChevronRight className="text-xs sm:text-sm" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-[2px] sm:h-[3px] rounded-full transition-all duration-500 ${
              current === i ? "w-8 sm:w-10 bg-primary" : "w-4 sm:w-5 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
