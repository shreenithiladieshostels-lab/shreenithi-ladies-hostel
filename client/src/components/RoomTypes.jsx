import { motion } from "framer-motion";
import {
  FaBed,
  FaSnowflake,
  FaBath,
  FaUtensils,
  FaWifi,
  FaTv,
  FaParking,
  FaWhatsapp,
  FaCheck,
  FaFireAlt,
  FaStar,
  FaShieldAlt,
} from "react-icons/fa";

const rooms = [
  {
    name: "10 Sharing",
    subtitle: "With Attached Bathroom",
    price: 6800,
    beds: 10,
    ac: false,
    bathroom: "attached",
    tag: "Best Value",
    tagColor: "bg-emerald-500",
    accent: "from-emerald-500 to-teal-600",
    icon: <FaBed />,
    highlights: ["Food", "TV", "WiFi", "Parking"],
  },
  {
    name: "10 Sharing A/C",
    subtitle: "Common Bathroom · Air Conditioned",
    price: 7500,
    beds: 10,
    ac: true,
    bathroom: "common",
    tag: null,
    accent: "from-blue-500 to-cyan-600",
    icon: <FaSnowflake />,
    highlights: ["Food", "A/C", "TV", "WiFi", "Parking"],
  },
  {
    name: "7 Sharing",
    subtitle: "With Attached Bathroom",
    price: 6800,
    beds: 7,
    ac: false,
    bathroom: "attached",
    tag: null,
    accent: "from-green-500 to-emerald-600",
    icon: <FaBed />,
    highlights: ["Food", "TV", "WiFi", "Parking"],
  },
  {
    name: "5 Sharing",
    subtitle: "Common Bathroom",
    price: 6800,
    beds: 5,
    ac: false,
    bathroom: "common",
    tag: null,
    accent: "from-indigo-500 to-blue-600",
    icon: <FaBed />,
    highlights: ["Food", "TV", "WiFi", "Parking"],
  },
  {
    name: "4 Sharing A/C",
    subtitle: "Common Bathroom · Air Conditioned",
    price: 8500,
    beds: 4,
    ac: true,
    bathroom: "common",
    tag: "Popular",
    tagColor: "bg-primary",
    accent: "from-primary to-orange-600",
    icon: <FaSnowflake />,
    highlights: ["Food", "A/C", "TV", "WiFi", "Parking"],
  },
  {
    name: "3 Sharing",
    subtitle: "With Attached Bathroom",
    price: 8800,
    beds: 3,
    ac: false,
    bathroom: "attached",
    tag: null,
    accent: "from-purple-500 to-indigo-600",
    icon: <FaBath />,
    highlights: ["Food", "TV", "WiFi", "Parking"],
  },
  {
    name: "3 Sharing",
    subtitle: "Without Bathroom",
    price: 7300,
    beds: 3,
    ac: false,
    bathroom: "none",
    tag: "Budget",
    tagColor: "bg-amber-500",
    accent: "from-amber-500 to-orange-600",
    icon: <FaBed />,
    highlights: ["Food", "TV", "WiFi", "Parking"],
  },
  {
    name: "3 Sharing A/C",
    subtitle: "With Bathroom · Air Conditioned",
    price: 10000,
    beds: 3,
    ac: true,
    bathroom: "attached",
    tag: null,
    accent: "from-rose-500 to-pink-600",
    icon: <FaSnowflake />,
    highlights: ["Food", "A/C", "Bath", "TV", "WiFi", "Parking"],
  },
  {
    name: "2 Sharing",
    subtitle: "With Attached Bathroom",
    price: 8800,
    beds: 2,
    ac: false,
    bathroom: "attached",
    tag: null,
    accent: "from-teal-500 to-cyan-600",
    icon: <FaShieldAlt />,
    highlights: ["Food", "Bath", "TV", "WiFi"],
  },
  {
    name: "2 Sharing A/C",
    subtitle: "Premium · Air Conditioned",
    price: 14500,
    beds: 2,
    ac: true,
    bathroom: "attached",
    tag: "Premium",
    tagColor: "bg-violet-600",
    accent: "from-violet-500 to-purple-700",
    icon: <FaStar />,
    highlights: ["Food", "A/C", "Bath", "TV", "WiFi"],
  },
];

const allAmenities = [
  { icon: <FaUtensils />, label: "Hygienic Veg Food" },
  { icon: <FaBath />, label: "Hot Water" },
  { icon: <FaWifi />, label: "WiFi Internet" },
  { icon: <FaTv />, label: "TV Room" },
  { icon: <FaParking />, label: "2 & 4 Wheeler Parking" },
  { icon: <FaFireAlt />, label: "E-Stove Facility" },
  { icon: <FaCheck />, label: "Individual Cupboard" },
  { icon: <FaCheck />, label: "Washing Machine" },
];

/* Tiny bed icon row to visually show capacity */
function BedIndicator({ count }) {
  const show = Math.min(count, 10);
  return (
    <div className="flex flex-wrap gap-1 items-center">
      {Array.from({ length: show }).map((_, i) => (
        <FaBed key={i} className="text-primary/50 text-[11px]" />
      ))}
    </div>
  );
}

export default function RoomTypes() {
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
            Accommodation
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-accent mt-3">
            Choose Your Room
          </h2>
          <p className="text-gray-medium mt-4 max-w-2xl mx-auto text-base sm:text-lg">
            From budget-friendly shared rooms to premium private accommodations — find the perfect fit for your lifestyle.
          </p>
        </motion.div>

        {/* Room Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-16">
          {rooms.map((room, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              className={`relative rounded-2xl bg-white border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group overflow-hidden ${
                room.tag === "Popular"
                  ? "border-primary shadow-lg shadow-primary/10"
                  : room.tag === "Premium"
                  ? "border-violet-300 shadow-lg shadow-violet-100"
                  : "border-gray-100 hover:border-primary/30"
              }`}
            >
              {/* Tag badge */}
              {room.tag && (
                <div
                  className={`absolute top-0 right-0 ${room.tagColor} text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider z-10`}
                >
                  {room.tag}
                </div>
              )}

              {/* Gradient header */}
              <div
                className={`bg-gradient-to-r ${room.accent} px-5 py-6 text-white`}
              >
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 text-lg">
                  {room.icon}
                </div>
                <h3 className="text-lg font-bold mb-1">{room.name}</h3>
                <p className="text-white/70 text-xs">{room.subtitle}</p>
                <div className="mt-3">
                  <BedIndicator count={room.beds} />
                </div>
              </div>

              {/* Price */}
              <div className="px-5 pt-5 pb-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-accent tracking-tight">
                    ₹{room.price.toLocaleString("en-IN")}
                  </span>
                  <span className="text-gray-medium text-xs font-medium">/mo</span>
                </div>
                <p className="text-[10px] text-gray-medium mt-0.5">+ EB (₹14.01/unit)</p>
              </div>

              {/* Facility pills */}
              <div className="px-5 pb-4 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {room.highlights.map((h, j) => (
                    <span
                      key={j}
                      className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-gray-100 text-accent/70"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="px-5 pb-5">
                <a
                  href={`https://wa.me/919444871115?text=${encodeURIComponent(`Hi, I'm interested in the ${room.name} room (₹${room.price.toLocaleString("en-IN")}/mo) at Shreenithi Ladies Hostel.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    room.tag === "Popular"
                      ? "bg-primary text-white hover:bg-primary-dark shadow-md shadow-primary/20"
                      : room.tag === "Premium"
                      ? "bg-violet-600 text-white hover:bg-violet-700 shadow-md shadow-violet-200"
                      : "bg-gray-100 text-accent hover:bg-primary hover:text-white"
                  }`}
                >
                  <FaWhatsapp className="text-base" />
                  Enquire Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Included amenities strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-accent rounded-2xl p-8 sm:p-10"
        >
          <h3 className="text-xl font-bold text-white text-center mb-8">
            Included With Every Room
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {allAmenities.map((a, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/10 text-primary flex items-center justify-center shrink-0">
                  {a.icon}
                </div>
                <span className="text-white/80 text-sm font-medium">{a.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Fees summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          <div className="bg-white rounded-xl p-6 text-center border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-red-50 text-red-500 flex items-center justify-center mx-auto mb-3">
              <FaCheck className="text-lg" />
            </div>
            <p className="text-xs text-gray-600 uppercase tracking-wider mb-2 font-semibold">Maintenance</p>
            <p className="text-3xl font-black text-accent mb-1">₹1,500</p>
            <p className="text-xs text-gray-500">Fixed · Non-refundable</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-green-50 text-green-500 flex items-center justify-center mx-auto mb-3">
              <FaCheck className="text-lg" />
            </div>
            <p className="text-xs text-gray-600 uppercase tracking-wider mb-2 font-semibold">Caution Deposit</p>
            <p className="text-3xl font-black text-accent mb-1">₹2,000</p>
            <p className="text-xs text-gray-500">Refundable · Within 30 days</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mx-auto mb-3">
              <FaFireAlt className="text-lg" />
            </div>
            <p className="text-xs text-gray-600 uppercase tracking-wider mb-2 font-semibold">EB Charges</p>
            <p className="text-3xl font-black text-accent mb-1">₹14.01</p>
            <p className="text-xs text-gray-500">Per unit · Shared among tenants</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
