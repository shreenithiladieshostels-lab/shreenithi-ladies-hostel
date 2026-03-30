import { motion } from "framer-motion";
import AnimatedNumber from "./AnimatedNumber";

const stats = [
  { value: 24, suffix: "+", label: "Years of Trust" },
  { value: 4000, suffix: "+", label: "Happy Residents" },
  { value: 1, suffix: "", label: "Location in Chennai" },
  { value: 4, suffix: "★", label: "Average Rating" },
];

export default function StatsStrip() {
  return (
    <section className="bg-accent py-14 sm:py-16">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold text-primary leading-none">
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  duration={2.5}
                  className="text-primary"
                />
              </div>
              <div className="text-white/60 text-sm sm:text-base mt-2 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
