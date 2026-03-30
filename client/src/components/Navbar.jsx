import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaPhone } from "react-icons/fa";
import { useAnnouncementBar } from "./AnnouncementBar";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Facilities", path: "/facilities" },
  { name: "Rooms & Pricing", path: "/rooms" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { isVisible: announcementVisible } = useAnnouncementBar();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isActive = (path) => location.pathname === path;

  // Transparent on home hero, solid on scroll or other pages
  const isTransparent = isHome && !scrolled;

  return (
    <nav
      style={{ top: announcementVisible ? "40px" : "0px" }}
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
        isTransparent
          ? "bg-transparent py-4"
          : "bg-white shadow-[0_1px_20px_rgba(0,0,0,0.08)] py-2"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 flex items-center justify-between h-14 lg:h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
          <div className="w-16 h-8 rounded-lg overflow-hidden shadow-md">
            <img 
              src="./images/favicon.png" 
              alt="Shreenithi Ladies Hostel Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span
              className={`text-lg font-bold leading-tight tracking-tight transition-colors duration-300 ${
                isTransparent ? "text-white" : "text-accent"
              }`}
            >
              Shreenithi
            </span>
            <span
              className={`text-[10px] font-medium uppercase tracking-widest leading-none transition-colors duration-300 ${
                isTransparent ? "text-white/60" : "text-gray-medium"
              }`}
            >
              Ladies Hostel
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap ${
                isActive(link.path)
                  ? isTransparent
                    ? "text-white bg-white/15"
                    : "text-primary bg-primary/5"
                  : isTransparent
                  ? "text-white/80 hover:text-white hover:bg-white/10"
                  : "text-accent/70 hover:text-accent hover:bg-gray-50"
              }`}
            >
              {link.name}
              {isActive(link.path) && (
                <motion.div
                  layoutId="nav-indicator"
                  className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full ${
                    isTransparent ? "bg-white" : "bg-primary"
                  }`}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className={`inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 ${
              isTransparent
                ? "bg-white text-accent hover:bg-primary hover:text-white"
                : "bg-primary text-white hover:bg-primary-dark"
            }`}
          >
            Enquire Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden text-2xl p-2 rounded-lg transition-colors ${
            isTransparent
              ? "text-white hover:bg-white/10"
              : "text-accent hover:bg-gray-50"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="px-5 py-4 flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`font-medium transition-all py-3 px-4 rounded-xl text-sm ${
                    isActive(link.path)
                      ? "text-primary bg-primary/5 font-semibold"
                      : "text-accent/80 hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3 mt-2 border-t border-gray-100">
                <a
                  href="tel:+919884446317"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-all"
                >
                  <FaPhone className="text-xs" />
                  +91 98844 46317
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
