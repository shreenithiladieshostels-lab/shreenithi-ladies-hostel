import { Link } from "react-router-dom";
import { FaPhone, FaMapMarkerAlt, FaHeart, FaEnvelope, FaChevronRight } from "react-icons/fa";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Facilities", path: "/facilities" },
  { name: "Rooms & Pricing", path: "/rooms" },
  { name: "Contact", path: "/contact" },
];

const location = {
  name: "Mount Road Location",
  address: "No.7, Rangoon Street, Mount Road, Chennai-600006",
  nearby: "Near Thousand Lights, Anna Salai & Teynampet"
};

export default function Footer() {
  return (
    <footer className="bg-accent text-white">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-base">S</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-tight">Shreenithi</h3>
                <p className="text-white/40 text-[10px] uppercase tracking-widest">Ladies Hostel</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Safe &amp; Comfortable Stay for Women. Established in 2000,
              providing reliable accommodation in Chennai for more than 25 years.
            </p>
            <a
              href="tel:+919884446317"
              className="inline-flex items-center gap-2 bg-primary/15 hover:bg-primary/25 text-primary text-sm font-medium px-4 py-2.5 rounded-lg transition-colors"
            >
              <FaPhone className="text-xs" />
              +91 98844 46317
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-5 text-white">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-white/50 hover:text-primary transition-colors text-sm group"
                  >
                    <FaChevronRight className="text-[8px] text-primary/50 group-hover:text-primary transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-5 text-white">Our Location</h4>
            <div className="space-y-4">
              <p className="flex items-center gap-2 text-white/80 text-sm font-semibold">
                <FaMapMarkerAlt className="text-primary text-xs shrink-0" />
                {location.name}
              </p>
              <p className="text-white/60 text-xs ml-5 leading-relaxed">{location.address}</p>
              <p className="text-white/40 text-xs ml-5 italic">{location.nearby}</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-5 text-white">Contact Info</h4>
            <div className="space-y-3">
              <a href="tel:+919884446317" className="flex items-center gap-2.5 text-white/50 hover:text-primary transition-colors text-sm">
                <FaPhone className="text-primary text-xs" />
                +91 98844 46317
              </a>
              <a href="tel:+919841620753" className="flex items-center gap-2.5 text-white/50 hover:text-primary transition-colors text-sm">
                <FaPhone className="text-primary text-xs" />
                +91 98416 20753
              </a>
              <a href="mailto:shreenithihostels@gmail.com" className="flex items-center gap-2.5 text-white/50 hover:text-primary transition-colors text-sm">
                <FaEnvelope className="text-primary text-xs" />
                shreenithihostels@gmail.com
              </a>
              <p className="flex items-start gap-2.5 text-white/50 text-sm">
                <FaMapMarkerAlt className="text-primary text-xs mt-1 shrink-0" />
                Chennai, Tamil Nadu, India
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.08]">
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-5 flex items-center justify-center">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Shreenithi Ladies Hostel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
