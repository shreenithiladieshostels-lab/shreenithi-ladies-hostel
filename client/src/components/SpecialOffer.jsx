import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function SpecialOffer() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="w-full max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-36 h-36 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <div className="inline-block bg-white text-primary font-extrabold text-4xl sm:text-5xl px-8 py-4 rounded-xl shadow-lg mb-5">
              10% OFF
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              First Month Rent Discount
            </h3>
            <p className="text-white/80 mb-2">
              Take a printout of this page and show it during registration
            </p>
            <p className="text-white/60 text-sm mb-6">
              Available only for a minimum stay of 2 months · Limited period offer
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-8 py-3.5 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Claim This Offer
              <span>→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
