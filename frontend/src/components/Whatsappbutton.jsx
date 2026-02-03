import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  // WhatsApp configuration
  const phoneNumber = '919742823131'; // Replace with your WhatsApp number (country code + number, no + or spaces)
  const defaultMessage = 'Hello! I would like to know more about your IT solutions and services.';
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-50"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg whitespace-nowrap"
            >
              <div className="font-semibold">Chat with us on WhatsApp</div>
              <div className="text-sm text-gray-600">We're here to help!</div>
              {/* Arrow */}
              <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-3 h-3 bg-white"></div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleWhatsAppClick}
          className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-2 shadow-2xl transition-colors relative group"
          aria-label="Chat on WhatsApp"
        >
          {/* Pulse Animation */}
          <span className="absolute inset-0 rounded-full bg-[#25D366]  opacity-75"></span>
          
          {/* Icon */}
          <FaWhatsapp className="text-4xl relative z-10" />
        </motion.button>

        {/* Notification Badge (Optional) */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center z-20"
        >
          1
        </motion.div>
      </motion.div>
    </>
  );
};

export default WhatsAppButton;