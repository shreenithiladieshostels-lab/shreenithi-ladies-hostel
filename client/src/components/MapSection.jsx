import { motion } from "framer-motion";

export default function MapSection() {
  return (
    <section className="py-16 sm:py-20 bg-gray-light">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Find Us
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mt-2">
            Our Location
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-md"
        >
          <iframe
            title="Shreenithi Ladies Hostel Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.638027342345!2d80.2576954!3d13.058697299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52662e37363747%3A0x108b8e045c9d9ef3!2sShreenithi%20Ladies%20Hostel!5e0!3m2!1sen!2sin!4v1773723057323!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[300px] sm:h-[400px] lg:h-[450px]"
          />
        </motion.div>

        <div className="text-center mt-6">
          <a
            href="https://maps.app.goo.gl/HXLwvb1uimWmciib6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Open in Google Maps →
          </a>
        </div>
      </div>
    </section>
  );
}
