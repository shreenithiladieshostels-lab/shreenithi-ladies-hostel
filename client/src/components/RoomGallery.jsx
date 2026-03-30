import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaBed,
  FaSnowflake,
  FaBath,
  FaArrowRight,
  FaStar,
  FaShieldAlt,
  FaUtensils,
} from "react-icons/fa";

const featured = [
  {
    name: "Shared Rooms",
    range: "₹6,800 – ₹7,500",
    sharing: "5 – 10 Sharing",
    icon: <FaBed />,
    features: ["Homely food included", "WiFi & TV", "Parking available"],
    accent: "from-emerald-500 to-teal-600",
    shadow: "shadow-emerald-200",
  },
  {
    name: "Semi-Private",
    range: "₹7,300 – ₹10,000",
    sharing: "3 – 4 Sharing",
    icon: <FaShieldAlt />,
    features: ["AC & Non-AC options", "Attached bathroom", "Individual cupboard"],
    accent: "from-primary to-orange-600",
    shadow: "shadow-primary/20",
    popular: true,
  },
  {
    name: "Premium Private",
    range: "₹8,800 – ₹14,500",
    sharing: "2 Sharing",
    icon: <FaStar />,
    features: ["AC rooms available", "Maximum privacy", "Attached bathroom"],
    accent: "from-violet-500 to-purple-700",
    shadow: "shadow-violet-200",
  },
];

const trustPoints = [
  { value: "24+", label: "Years Trusted", icon: <FaShieldAlt /> },
  { value: "4000+", label: "Happy Residents", icon: <FaStar /> },
  { value: "3×", label: "Meals Daily", icon: <FaUtensils /> },
  { value: "24/7", label: "CCTV & Security", icon: <FaShieldAlt /> },
];

export default function RoomGallery() {
  return (
    <section className="py-20 sm:py-28 bg-gray-light">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Our Rooms
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-accent mt-3 leading-tight">
            Find Your Perfect Stay
          </h2>
          <p className="text-gray-medium mt-4 max-w-xl mx-auto">
            Flexible accommodation plans starting from ₹6,800/month — pick what suits you best.
          </p>
        </motion.div>

        {/* Featured Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {featured.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative bg-white rounded-2xl overflow-hidden border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                item.popular
                  ? "border-primary shadow-lg"
                  : "border-gray-100 hover:border-primary/20"
              }`}
            >
              {item.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
                  Most Chosen
                </div>
              )}

              {/* Gradient header */}
              <div
                className={`bg-gradient-to-r ${item.accent} px-6 py-8 text-white`}
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 text-xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                <p className="text-white/70 text-sm">{item.sharing}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-5">
                  <p className="text-[11px] text-gray-medium uppercase tracking-wider mb-1">
                    Monthly rent
                  </p>
                  <p className="text-2xl font-black text-accent">{item.range}</p>
                  <p className="text-[10px] text-gray-medium">+ EB charges</p>
                </div>

                <ul className="space-y-2.5 mb-6">
                  {item.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm text-accent/80">
                      <div className="w-5 h-5 rounded-full bg-green-50 text-green-500 flex items-center justify-center shrink-0">
                        <FaBath className="text-[8px]" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/rooms"
                  className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    item.popular
                      ? "bg-primary text-white hover:bg-primary-dark"
                      : "bg-gray-100 text-accent hover:bg-primary hover:text-white"
                  }`}
                >
                  View Options
                  <FaArrowRight className="text-[10px]" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {trustPoints.map((tp, i) => (
            <div
              key={i}
              className="bg-white rounded-xl py-5 px-4 text-center border border-gray-100 hover:border-primary/20 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3 text-sm">
                {tp.icon}
              </div>
              <p className="text-2xl font-black text-accent">{tp.value}</p>
              <p className="text-[11px] text-gray-medium uppercase tracking-wider mt-1">
                {tp.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/rooms"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 text-sm"
          >
            View All Rooms & Pricing
            <FaArrowRight className="text-xs" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
