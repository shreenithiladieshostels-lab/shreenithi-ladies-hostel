import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaPlayCircle, FaArrowRight } from "react-icons/fa";

export default function VideoTour() {
  return (
    <section className="py-20 sm:py-28 bg-gray-light">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Virtual Tour
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-accent mt-3 leading-tight">
            Take a 50-Second Hostel Walkthrough
          </h2>
          <p className="text-gray-medium mt-4 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            A quick look at our rooms, safety setup, and daily living spaces before your visit.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden shadow-xl border border-black/5 bg-black"
        >
          <video
            className="w-full h-[260px] sm:h-[420px] lg:h-[520px] object-cover"
            controls
            playsInline
            preload="metadata"
            poster="/images/hostel.png"
          >
            <source src="/video/roomvideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="pointer-events-none absolute top-4 left-4 inline-flex items-center gap-2 bg-black/60 text-white text-xs font-semibold px-3 py-2 rounded-lg backdrop-blur-sm">
            <FaPlayCircle className="text-primary" />
            50-Second Tour
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mt-8"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 text-sm"
          >
            Schedule a Visit
            <FaArrowRight className="text-xs" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
