import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

export default function EnquireNow() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      {/* WhatsApp button - Primary */}
      <a
        href="https://wa.me/919444871115?text=Hi, I would like to know more about Shreenithi Ladies Hostel"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-all hover:scale-110 animate-pulse"
        aria-label="WhatsApp us"
      >
        <FaWhatsapp className="text-lg" />
      </a>
      
      {/* Phone button - Secondary */}
      <a
        href="tel:+919884446317"
        className="w-12 h-12 bg-primary hover:bg-primary-dark text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/30 transition-all hover:scale-110"
        aria-label="Call us"
      >
        <FaPhone className="text-sm transform scale-x-[-1]" />
      </a>
    </div>
  );
}
