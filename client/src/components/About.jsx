import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import AnimatedNumber from "./AnimatedNumber";

const highlights = [
  "Highly reputed hostel since 2000",
  "Noted for neatness & maintenance",
  "Various accommodation plans",
  "Ideal for working women & students",
  "Premium location on Mount Road",
  "Transparent pricing — no hidden charges",
];

export default function About() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/hostel.png"
                alt="Shreenithi Ladies Hostel Building"
                loading="lazy"
                className="w-full h-[350px] sm:h-[440px] object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-primary text-white rounded-xl px-6 py-4 shadow-xl shadow-primary/20">
              <div className="text-3xl font-extrabold leading-none">
                <AnimatedNumber 
                  value={24} 
                  suffix="+" 
                  duration={2} 
                  className="text-white"
                />
              </div>
              <div className="text-sm font-medium text-white/80 mt-1">Years of Trust</div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-accent mt-3 mb-6 leading-tight">
              Welcome to Shreenithi Ladies Hostel
            </h2>
            <p className="text-gray-medium text-base sm:text-lg leading-relaxed mb-5">
              Established in 2000, Shreenithi Ladies Hostel has grown as a pioneer
              ladies hostel in Chennai. We are accommodating more than 4000 women
              as on date. Thousands of girls have benefitted from our hostel since 2000.
            </p>
            <p className="text-gray-medium leading-relaxed mb-8">
              Our hostel is noted for its neatness and maintenance with various
              accommodation plans. Ideal for working women &amp; students, our hostel
              is located in the heart of Mount Road, one of Chennai's most prestigious locations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <FaCheckCircle className="text-primary text-sm shrink-0" />
                  <span className="text-sm font-medium text-accent">{item}</span>
                </div>
              ))}
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-4">
              <div className="bg-gray-light rounded-xl px-5 py-3">
                <div className="text-xs text-gray-medium uppercase tracking-wider font-semibold mb-1">Rate</div>
                <div className="text-sm font-bold text-accent">₹4,999 – ₹9,999/month</div>
              </div>
              <div className="bg-gray-light rounded-xl px-5 py-3">
                <div className="text-xs text-gray-medium uppercase tracking-wider font-semibold mb-1">Room Types</div>
                <div className="text-sm font-bold text-accent">2, 3, 4 & 7 Sharing</div>
              </div>
              <div className="bg-gray-light rounded-xl px-5 py-3">
                <div className="text-xs text-gray-medium uppercase tracking-wider font-semibold mb-1">For</div>
                <div className="text-sm font-bold text-accent">Women & Students</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
