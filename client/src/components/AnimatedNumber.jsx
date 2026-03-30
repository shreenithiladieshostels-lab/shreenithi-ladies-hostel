import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/**
 * AnimatedNumber - A reusable component for animating numbers
 * @param {number} value - The target number to animate to
 * @param {number} duration - Animation duration in seconds (default: 2)
 * @param {string} suffix - Optional suffix to display after the number (e.g., "+", "★")
 * @param {string} prefix - Optional prefix to display before the number (e.g., "₹", "$")
 * @param {boolean} separator - Whether to add comma separators (default: false)
 * @param {string} className - Additional CSS classes
 */
export default function AnimatedNumber({
  value,
  duration = 2,
  suffix = "",
  prefix = "",
  separator = false,
  className = "",
  ...props
}) {
  const [currentValue, setCurrentValue] = useState(0);
  const ref = useRef();
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    const startValue = 0;
    const endValue = value;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentNum = startValue + (endValue - startValue) * easeOutQuart;
      
      setCurrentValue(Math.floor(currentNum));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCurrentValue(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  const formatNumber = (num) => {
    if (separator) {
      return num.toLocaleString();
    }
    return num.toString();
  };

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      {...props}
    >
      {prefix}{formatNumber(currentValue)}{suffix}
    </motion.span>
  );
}