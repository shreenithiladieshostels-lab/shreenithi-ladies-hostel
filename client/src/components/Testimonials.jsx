import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaStar,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
  FaGoogle,
  FaExternalLinkAlt,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaPen,
} from "react-icons/fa";

const reviews = [
  {
    name: "Harishma R",
    initial: "H",
    color: "bg-rose-500",
    rating: 5,
    timeAgo: "4 months ago",
    text: "This women's hostel truly felt like a second home. The rooms were neat, the surroundings were safe, and the staff treated everyone with care. I felt comfortable, secure, and relaxed throughout my stay. I'm really happy with the experience and would definitely recommend it to other women looking for a safe and supportive place.",
    link: "https://maps.app.goo.gl/BaevUb2vFg4Lekmj6",
    highlight: "Felt like a second home",
  },
  {
    name: "Shenu Shahana",
    initial: "S",
    color: "bg-blue-500",
    rating: 5,
    timeAgo: "6 years ago",
    text: "Safe and secured. Healthy food. I can say it is one of the best. Because I can feel safe and very free mind to stay here. It is located near to Thousand Lights metro station. So for travelling it is very easy to be here. All time there are securities at the main entrance. The staffs and warden are so friendly. For working womens and students it is good. The room rent is affordable.",
    link: "https://maps.app.goo.gl/QAU9V5qAqt36EgN86",
    highlight: "Safe and secured",
  },
  {
    name: "Priyanka Vijayakumar",
    initial: "P",
    color: "bg-violet-500",
    rating: 5,
    timeAgo: "6 years ago",
    text: "This hostel is absolutely superb. The staffs are friendly & helpful. Rooms are cleaned daily & spacious. Its really a nice place to stay. Actually one of the best place we stayed. The kitchen is always clean & good equipped. The rooms are really neat and clean. I stayed in 3 sharing. Excellent budget hostel.",
    link: "https://maps.app.goo.gl/YtVZNkxzTuhstSos6",
    highlight: "Absolutely superb",
  },
  {
    name: "Sriswathika Murugan",
    initial: "S",
    color: "bg-emerald-500",
    rating: 5,
    timeAgo: "3 years ago",
    text: "This is a really good place to stay. The metro is very close for easy transport. People here treat you well and the food is also really good. Rooms are cleaned everyday. Very reasonable rent and totally worth the money.",
    link: "https://maps.app.goo.gl/3xsi83QvHo9NeomT7",
    highlight: "Totally worth the money",
    subRatings: { Rooms: 4, Service: 5, Location: 5 },
  },
  {
    name: "Mano Sachu",
    initial: "M",
    color: "bg-amber-500",
    rating: 5,
    timeAgo: "2 years ago",
    text: "My sister studied there and the food was good. The stay is also good and comfortable. It was one of the affordable and good places that I have seen.",
    link: "https://maps.app.goo.gl/EZ3GMuD16Kr8UqL29",
    highlight: "Affordable and good",
  },
];

function StarRating({ rating, size = "text-sm" }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <FaStar
          key={i}
          className={`${size} ${i < rating ? "text-yellow-400" : "text-gray-200"}`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const r = reviews[current];

  return (
    <section className="py-20 sm:py-28 bg-gray-light overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Real Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-accent mt-3 leading-tight">
            Trusted by Thousands of Women
          </h2>
          <p className="text-gray-medium mt-3 max-w-lg mx-auto text-sm">
            Genuine feedback from our residents on Google Maps
          </p>
        </motion.div>

        {/* Google rating badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-6 mb-12"
        >
          <div className="flex items-center gap-3 bg-white rounded-full px-5 py-2.5 shadow-sm border border-gray-100">
            <FaGoogle className="text-lg text-[#4285F4]" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-accent">4</span>
              <div>
                <StarRating rating={5} size="text-xs" />
                <p className="text-[10px] text-gray-medium mt-0.5">Google Reviews</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main review card */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              {/* Highlight quote strip */}
              <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 px-8 py-3 border-b border-primary/10">
                <p className="text-primary font-semibold text-sm text-center italic">
                  &ldquo;{r.highlight}&rdquo;
                </p>
              </div>

              <div className="p-8 sm:p-10">
                {/* Reviewer info row */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div
                      className={`w-12 h-12 rounded-full ${r.color} flex items-center justify-center text-white font-bold text-lg shrink-0`}
                    >
                      {r.initial}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-accent">{r.name}</h4>
                        <FaGoogle className="text-xs text-[#4285F4]" />
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <StarRating rating={r.rating} size="text-xs" />
                        <span className="text-xs text-gray-400">{r.timeAgo}</span>
                      </div>
                    </div>
                  </div>
                  <a
                    href={r.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:flex items-center gap-1.5 text-[11px] text-gray-400 hover:text-primary transition-colors shrink-0"
                  >
                    <FaExternalLinkAlt />
                    View on Google
                  </a>
                </div>

                {/* Quote */}
                <div className="relative">
                  <FaQuoteLeft className="absolute -top-1 -left-1 text-primary/8 text-3xl" />
                  <p className="text-accent/85 leading-relaxed pl-8 text-[15px]">
                    {r.text}
                  </p>
                </div>

                {/* Sub-ratings (if available) */}
                {r.subRatings && (
                  <div className="flex items-center gap-4 mt-6 pt-5 border-t border-gray-100">
                    {Object.entries(r.subRatings).map(([key, val]) => (
                      <div
                        key={key}
                        className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-1.5"
                      >
                        <span className="text-[11px] text-gray-medium uppercase tracking-wider">
                          {key}
                        </span>
                        <div className="flex gap-0.5">
                          {Array.from({ length: 5 }, (_, i) => (
                            <FaStar
                              key={i}
                              className={`text-[8px] ${
                                i < val ? "text-yellow-400" : "text-gray-200"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Mobile Google link */}
                <a
                  href={r.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:hidden flex items-center justify-center gap-1.5 text-xs text-primary mt-6 pt-4 border-t border-gray-100"
                >
                  <FaGoogle className="text-xs" />
                  View original review on Google Maps
                  <FaExternalLinkAlt className="text-[9px]" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-medium hover:text-primary hover:border-primary transition-colors shadow-sm"
              aria-label="Previous review"
            >
              <FaChevronLeft className="text-sm" />
            </button>

            {/* Review mini-avatars + dots */}
            <div className="flex items-center gap-3">
              {reviews.map((rev, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 ${
                    current === i
                      ? "scale-110"
                      : "opacity-50 hover:opacity-80"
                  }`}
                  aria-label={`Review by ${rev.name}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full ${rev.color} flex items-center justify-center text-white text-xs font-bold ${
                      current === i
                        ? "ring-2 ring-primary ring-offset-2"
                        : ""
                    }`}
                  >
                    {rev.initial}
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-medium hover:text-primary hover:border-primary transition-colors shadow-sm"
              aria-label="Next review"
            >
              <FaChevronRight className="text-sm" />
            </button>
          </div>
        </div>

        {/* Bottom trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-6 mt-12 text-xs text-gray-400"
        >
          <div className="flex items-center gap-1.5">
            <FaShieldAlt className="text-green-500" />
            <span>All reviews verified on Google</span>
          </div>
          <span className="hidden sm:inline text-gray-200">|</span>
          <div className="flex items-center gap-1.5">
            <FaMapMarkerAlt className="text-primary" />
            <span>Thousand Lights, Mount Road, Chennai</span>
          </div>
          <span className="hidden sm:inline text-gray-200">|</span>
          <a
            href="https://search.google.com/local/writereview?placeid=ChIJRzc2Ny5mUjoR856dXASOixA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-primary hover:underline"
          >
            <FaGoogle />
            See all reviews on Google Maps
            <FaExternalLinkAlt className="text-[9px]" />
          </a>
        </motion.div>

        {/* Write Review CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-8"
        >
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-xl p-6 border border-primary/10">
            <h3 className="text-lg font-bold text-accent mb-2">Share Your Experience</h3>
            <p className="text-gray-medium text-sm mb-4">
              Help other women find their perfect stay by sharing your review
            </p>
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJRzc2Ny5mUjoR856dXASOixA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 text-sm"
            >
              <FaPen className="text-xs" />
              Write a Review on Google
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
