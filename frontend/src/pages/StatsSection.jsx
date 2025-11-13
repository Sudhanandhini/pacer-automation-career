import React, { useEffect, useRef, useState } from 'react';
import { motion, animate, useInView } from 'framer-motion';

/**
 * Usage:
 * 1. Replace your existing stats section with <StatsSection />
 * 2. Adjust the `stats` array below as needed.
 */

const StatsSection = () => {
  const stats = [
    { number: 1989, suffix: '', label: 'Year we were founded' },
    { number: 5000000, suffix: '+', label: 'Happy users' },     // use full number for animation; we'll format
    { number: 100, suffix: '+', label: 'Enterprise clients served' },
    { number: 35, suffix: '+', label: 'Years of Expertise' }
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div
          ref={containerRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center max-w-6xl mx-auto"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="flex flex-col items-center justify-center"
            >
              <AnimatedCounter
                value={stat.number}
                suffix={stat.suffix}
                duration={1.6}
                className="text-4xl md:text-5xl font-bold"
                color="#1E3A8A"
                start={isInView}
              />
              <p className="text-gray-600 mt-2 text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/** AnimatedCounter
 * Props:
 *  - value: target number (use full integer like 5000000 for 5M)
 *  - suffix: string appended (e.g. '+', 'M+', '')
 *  - duration: seconds to animate
 *  - className: CSS classes for the number
 *  - color: text color
 *  - start: boolean to begin animation (when section is in view)
 */
const AnimatedCounter = ({ value = 0, suffix = '', duration = 1.5, className = '', color = '#000', start = false }) => {
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!start || startedRef.current) return;
    startedRef.current = true;

    // animate from 0 to value (framer-motion)
    const controls = animate(0, value, {
      duration,
      ease: 'easeOut',
      onUpdate(v) {
        // smooth integer display; format large numbers
        setCount(Math.floor(v));
      }
    });

    return () => controls.stop();
  }, [start, value, duration]);

  // optional formatting: display 5000000 as 5M, else comma-separated
  const formatNumber = (n) => {
    if (n >= 1000000) return (n / 1000000).toFixed(n % 1000000 === 0 ? 0 : 1) + 'M';
    if (n >= 1000) return n.toLocaleString();
    return String(n);
  };

  return (
    <h3 className={className} style={{ color }}>
      {formatNumber(count)}
      {suffix}
    </h3>
  );
};

export default StatsSection;
