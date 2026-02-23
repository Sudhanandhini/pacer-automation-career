import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import awsLogo from "../assets/client/aws.png";
import azureLogo from "../assets/client/azure.png";
import checkPointLogo from "../assets/client/check-point.png";
import crowdstrikeLogo from "../assets/client/crowdstrike.png";
import cyberarkLogo from "../assets/client/cyberark.png";
import dellLogo from "../assets/client/dell.png";
import fortinetLogo from "../assets/client/fortinet.png";
import hpLogo from "../assets/client/hp.png";
import hpeJuniperLogo from "../assets/client/hpe-juniper.png";
import hpeLogo from "../assets/client/hpe.png";
import lenovoLogo from "../assets/client/lenovo.png";
import manageengineLogo from "../assets/client/manageengine.png";
import motadataLogo from "../assets/client/motadata.png";
import netskopeLogo from "../assets/client/netskope.png";
import paloaltoLogo from "../assets/client/paloalto.png";
import solarWindsLogo from "../assets/client/solar-winds.png";
import sophosLogo from "../assets/client/sophos.png";
import trellixLogo from "../assets/client/trellix.png";
import trendMicroLogo from "../assets/client/trend-micro.png";

const LogoSliderWithControls = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const logos = [
    awsLogo,
    azureLogo,
    checkPointLogo,
    crowdstrikeLogo,
    cyberarkLogo,
    dellLogo,
    fortinetLogo,
    hpLogo,
    hpeJuniperLogo,
    hpeLogo,
    lenovoLogo,
    manageengineLogo,
    motadataLogo,
    netskopeLogo,
    paloaltoLogo,
    solarWindsLogo,
    sophosLogo,
    trellixLogo,
    trendMicroLogo
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
                    height: '150px'
                  }}
                >
                  <img 
                    src={logo} 
                    alt={`Partner ${index + 1}`}
                    className="h-16 w-auto max-w-full object-contain grayscale hover:grayscale-0 transition-all"
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
