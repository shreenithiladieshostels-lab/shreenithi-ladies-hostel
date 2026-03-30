import { motion } from "framer-motion";
import AnimatedNumber from "./AnimatedNumber";

const examples = [
  {
    title: "Basic Number",
    value: 100,
    duration: 2,
  },
  {
    title: "With Prefix",
    value: 4500,
    prefix: "₹",
    duration: 2,
    separator: true,
  },
  {
    title: "With Suffix", 
    value: 25,
    suffix: "+",
    duration: 1.5,
  },
  {
    title: "Rating Style",
    value: 4.8,
    suffix: "★",
    duration: 2,
  },
  {
    title: "Large Number",
    value: 50000,
    separator: true,
    duration: 3,
  },
  {
    title: "Percentage",
    value: 95,
    suffix: "%",
    duration: 2,
  },
];

export default function AnimatedNumberDemo() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Animated Numbers Demo
          </h2>
          <p className="text-gray-600">
            Watch the numbers animate when they come into view
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-md text-center"
            >
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                {example.title}
              </h3>
              <div className="text-4xl font-bold text-primary">
                <AnimatedNumber
                  value={example.value}
                  prefix={example.prefix || ""}
                  suffix={example.suffix || ""}
                  duration={example.duration}
                  separator={example.separator || false}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-white rounded-lg p-6 shadow-md"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Features
          </h3>
          <ul className="text-gray-600 space-y-2 text-sm">
            <li>• <strong>Viewport trigger:</strong> Animation starts when number comes into view</li>
            <li>• <strong>Customizable duration:</strong> Control animation speed</li>
            <li>• <strong>Prefix & Suffix:</strong> Add currency symbols, units, or ratings</li>
            <li>• <strong>Number formatting:</strong> Optional comma separators for large numbers</li>
            <li>• <strong>Smooth easing:</strong> Uses easeOutQuart for natural animation</li>
            <li>• <strong>Performance optimized:</strong> Uses requestAnimationFrame</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}