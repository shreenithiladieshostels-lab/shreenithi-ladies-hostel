import { motion } from "framer-motion";
import {
  FaSnowflake,
  FaBath,
  FaCouch,
  FaUtensils,
  FaWifi,
  FaTint,
  FaParking,
  FaTshirt,
  FaBroom,
  FaShieldAlt,
  FaVideo,
  FaNewspaper,
  FaFire,
  FaUserShield,
  FaBed,
  FaFemale,
} from "react-icons/fa";

const facilities = [
  { icon: <FaSnowflake />, title: "AC & Non-AC Rooms", desc: "Temperature controlled rooms for your comfort" },
  { icon: <FaBed />, title: "Well Maintained Rooms", desc: "Comfortable rooms with individual cupboards" },
  { icon: <FaBath />, title: "Attached Bathrooms", desc: "Private bathrooms with hot water" },
  { icon: <FaCouch />, title: "Well Ventilated", desc: "Airy rooms with natural light" },
  { icon: <FaUtensils />, title: "Hygienic Veg Food", desc: "Fresh homely vegetarian meals daily" },
  { icon: <FaFire />, title: "E-Stove Facility", desc: "Self-catering option available" },
  { icon: <FaTint />, title: "Purified Water 24hrs", desc: "RO purified drinking water" },
  { icon: <FaWifi />, title: "WiFi Internet", desc: "High-speed wireless connectivity" },
  { icon: <FaTshirt />, title: "Washing Machine", desc: "Shared laundry facilities" },
  { icon: <FaBroom />, title: "Housekeeping", desc: "Regular cleaning & maintenance" },
  { icon: <FaParking />, title: "Parking", desc: "Space for 2 & 4 wheelers" },
  { icon: <FaShieldAlt />, title: "24 Hour Security", desc: "Round-the-clock protection" },
  { icon: <FaVideo />, title: "CCTV Surveillance", desc: "Complete premises monitoring" },
  { icon: <FaUserShield />, title: "Hostel Warden", desc: "Dedicated staff for vigilance" },
  { icon: <FaFemale />, title: "Daily Rent Option", desc: "Short-stay for female guests" },
];

export default function Facilities() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-18"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-accent mt-3">
            Our Facilities
          </h2>
          <p className="text-gray-medium mt-4 max-w-2xl mx-auto text-base sm:text-lg">
            Everything you need for a comfortable and safe stay, all under one roof.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {facilities.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="bg-gray-light rounded-xl p-5 sm:p-6 flex flex-col items-center text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary text-lg mb-3.5 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                {f.icon}
              </div>
              <h3 className="font-semibold text-sm text-accent mb-1">{f.title}</h3>
              <p className="text-[11px] text-gray-medium leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
