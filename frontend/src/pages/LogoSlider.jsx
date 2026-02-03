import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logo1 from "../assets/1.jpg";
import logo2 from "../assets/2.png";
import logo3 from "../assets/3.png";
import logo4 from "../assets/4.png";
import logo5 from "../assets/5.png";
import logo6 from "../assets/6.png";
import logo7 from "../assets/7.png";
import logo8 from "../assets/8.png";
import logo9 from "../assets/9.png";

import logo11 from "../assets/11.jpg";
import logo12 from "../assets/12.jpg";

const LogoSliderWithControls = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8, logo9,  logo11, logo12
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + 1 >= logos.length - slidesToShow + 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? logos.length - slidesToShow : prev - 1
    );
  };

  // Auto-play
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [slidesToShow]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#1E3A8A' }}>
            Aligned with industry-leading technology partner 
          </h3>
          <p className="text-gray-600">
            We're proud to work with industry leaders
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Slider */}
          <div className="overflow-hidden px-12">
            <motion.div
              className="flex items-center gap-8"
              animate={{
                x: `-${(currentIndex * 100) / slidesToShow}%`
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
            >
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
                  style={{ 
                    width: `calc(${100 / slidesToShow}% - ${(slidesToShow - 1) * 32 / slidesToShow}px)`,
                    minHeight: '150px'
                  }}
                >
                  <img 
                    src={logo} 
                    alt={`Partner ${index + 1}`}
                    className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:shadow-xl transition-all z-10"
            style={{ color: '#00BFA5' }}
          >
            <FiChevronLeft className="text-xl" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:shadow-xl transition-all z-10"
            style={{ color: '#00BFA5' }}
          >
            <FiChevronRight className="text-xl" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: logos.length - slidesToShow + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? 'w-8' : 'w-2 bg-gray-300'
              }`}
              style={index === currentIndex ? { backgroundColor: '#00BFA5' } : {}}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSliderWithControls;