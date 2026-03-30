import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaBuilding } from "react-icons/fa";

const branches = [
  {
    name: "Mylapore Branch",
    description: "Near Luz Corner & Royapettah High Road.",
    address: "No.26/1, Royapettah High Road, Mylapore, Chennai",
    areas: [
      "Luz Corner (0.4 km)",
      "Nungambakkam (0.7 km)",
      "Royapettah (1.5 km)",
      "Teynampet (2 km)",
      "Saidapet (5 km)",
      "T-Nagar (5 km)",
    ],
    facilities: [
      "Spencers Plaza, Express Avenue (2 km)",
      "City Centre, Acropolis, Sanskrit College (0.3 km)",
      "Marina Beach (0.5 km)",
      "Sathyam Cinemas (0.6 km)",
      "Kapaleeswar Temple (0.6 km)",
    ],
  },
  {
    name: "Mount Road Branch",
    description: "Central Chennai location with easy access.",
    address: "No.7, Thanjavur Street (Opp. LIC/Mont), Mount Road, Chennai-600 002",
    areas: [
      "Nungambakkam (0.5 km)",
      "Gopalapuram (0.5 km)",
      "Egmore (1.5 km)",
      "Teynampet (2 km)",
      "Saidapet (5 km)",
      "T-Nagar (5 km)",
    ],
    facilities: [
      "Spencers Plaza (0.1 km)",
      "Express Avenue (0.5 km)",
      "LIC, Shanthi Theatre (0.2 km)",
      "Sathyam Cinemas, Mohan Diabetes (0.1 km)",
      "Apollo Hospitals, HCL (0.2 km)",
    ],
  },
  {
    name: "Pallikaranai Branch",
    tagline: "Limited to 10 people per 3-BHK flat. Homely food included!",
    description: "Peaceful residential location.",
    address: "10, Senkalani Amman Street, Narayanapuram, Pallikaranai, Chennai",
    areas: [
      "Velachery (1 km)",
      "Medavakkam (1 km)",
      "OMR/IT Highway (4 km)",
      "Thorappakkam (6 km)",
      "Sholinganallur (7 km)",
    ],
    facilities: [
      "Major IT companies on OMR (3 km)",
      "Cognizant, Velachery (0.7 km)",
      "Balaji Dental College (0.3 km)",
      "Jerusalem College of Engg. (1 km)",
    ],
  },
];

export default function Branches() {
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
            Our Locations
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-accent mt-3">
            Branch Locations
          </h2>
          <p className="text-gray-medium mt-4 max-w-2xl mx-auto text-base sm:text-lg">
            Three convenient locations across Chennai — call us for accommodation at any branch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {branches.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col bg-white"
            >
              {/* Header */}
              <div className="bg-accent p-6 text-white">
                <FaMapMarkerAlt className="text-primary text-lg mb-2" />
                <h3 className="text-lg font-bold">{b.name}</h3>
                <p className="text-white/60 text-sm mt-1">{b.description}</p>
                {b.tagline && (
                  <p className="text-primary text-xs font-semibold mt-3 bg-white/10 px-3 py-1.5 rounded-lg inline-block">
                    {b.tagline}
                  </p>
                )}
              </div>

              {/* Address */}
              <div className="px-6 pt-5">
                <div className="flex items-start gap-2.5 text-sm text-gray-medium">
                  <FaMapMarkerAlt className="text-primary text-xs mt-1 shrink-0" />
                  <span>{b.address}</span>
                </div>
              </div>

              {/* Areas */}
              <div className="px-6 pt-4">
                <p className="text-[10px] uppercase tracking-widest text-gray-medium font-semibold mb-2.5">
                  Areas Nearby
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {b.areas.map((area, j) => (
                    <span
                      key={j}
                      className="bg-gray-light text-accent text-[11px] font-medium px-2.5 py-1 rounded-full"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Facilities */}
              <div className="px-6 pt-4 pb-5 flex-1">
                <p className="text-[10px] uppercase tracking-widest text-gray-medium font-semibold mb-2.5">
                  Nearby Landmarks
                </p>
                <ul className="space-y-2">
                  {b.facilities.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-accent/80">
                      <FaBuilding className="text-primary text-[10px] mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="px-6 pb-6">
                <a
                  href="tel:+919884446317"
                  className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-lg transition-all text-sm"
                >
                  <FaPhone className="text-xs" />
                  Call: +91 98844 46317
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
