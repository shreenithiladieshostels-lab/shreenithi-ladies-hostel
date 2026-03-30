import { motion } from "framer-motion";
import { FaShieldAlt, FaHome, FaBriefcase, FaHeartbeat } from "react-icons/fa";

import featureSecurity from "../assets/feature1.png";
import featureComfort from "../assets/feature2.jpeg";
import featureAmenities from "../assets/feature3.jpeg";
const features = [
  {
    icon: <FaShieldAlt />,
    title: "Uncompromised Security",
    description:
      "Your safety is our top priority. With 24/7 CCTV surveillance, dedicated hostel wardens, secure gated entry, and round-the-clock security staff, we ensure a safe environment for every resident.",
    highlights: ["24/7 CCTV Surveillance", "Dedicated Warden", "Secure Entry Gates"],
    image: featureSecurity,
  },
  {
    icon: <FaHome />,
    title: "Homely Warmth & Comfort",
    description:
      "We believe a hostel should feel like home. Enjoy freshly cooked vegetarian meals, well-Maintained rooms with individual cupboards, attached bathrooms, and common areas designed for relaxation.",
    highlights: ["Homely Vegetarian Food", "Maintained Rooms", "Clean & Hygienic"],
    image: featureComfort,
  },
  {
    icon: <FaBriefcase />,
    title: "Ideal for Professionals & Students",
    description:
      "Strategically located on Mount Road near Thousand Lights Metro, Greems Road, Anna Salai, and Teynampet. Perfect for working women and students with easy access to IT corridors, colleges, and commercial centers across Chennai.",
    highlights: ["Near IT Corridors", "Close to Colleges", "Metro & Bus Connectivity"],
    image: "/images/metro.png",
  },
  {
    icon: <FaHeartbeat />,
    title: "Complete Amenities & Wellness",
    description:
      "From high-speed WiFi and washing machines to purified drinking water and electronic stove facilities, we provide everything you need for comfortable daily living under one roof.",
    highlights: ["Free WiFi", "Purified Water", "Laundry Facilities"],
    image: featureAmenities,
  },
];

export default function FeatureShowcase() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-accent mt-3 leading-tight">
            What Makes Shreenithi Special
          </h2>
          <p className="text-gray-medium mt-4 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Since 2000, we've been offering a safe, affordable, and comfortable
            home away from home for women in Chennai.
          </p>
        </motion.div>

        {/* Feature Items - Alternating Layout */}
        <div className="space-y-20 sm:space-y-28">
          {features.map((feature, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  isReversed ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`${isReversed ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      loading="lazy"
                      className="w-full h-[300px] sm:h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Accent overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-accent/30 to-transparent" />
                    {/* Icon badge */}
                    <div className="absolute top-5 left-5 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary text-lg shadow-lg">
                      {feature.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`${isReversed ? "lg:order-1" : "lg:order-2"}`}
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-accent mb-4 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-medium text-base sm:text-lg leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {feature.highlights.map((h, hi) => (
                      <span
                        key={hi}
                        className="inline-flex items-center gap-2 bg-primary/5 text-accent text-sm font-medium px-4 py-2 rounded-full border border-primary/10"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
