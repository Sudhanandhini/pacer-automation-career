import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import logo10 from "../assets/10.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const offerings = [
    { label: 'Infrastructure Management', to: '/infrastructure-management' },
    { label: 'Cloud Solutions', to: '/cloud-solutions' },
    { label: 'Network & Security Solutions', to: '/network-security' },
    { label: 'User Computing', to: '/user-computing' },
    { label: 'Implementation & Migration', to: '/implementation-migration' },
    { label: 'Consulting Services', to: '/consulting-services' },
    {label:'AI', to:'/ai'},
    {label:'CyberSecurity', to:'/cyber-security'}
  ];

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className={`text-2xl font-bold transition-colors ${
            isScrolled ? 'text-secondary' : 'text-black'
          }`}>
            <img src={logo10} alt='logo' width="70%" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className={`transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-primary' : 'text-black hover:text-primary'
            }`}>
              Home
            </Link>
             <Link to="/about" className={`transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-primary' : 'text-black hover:text-primary'
            }`}>
              About Us
            </Link> 
            
            {/* Our Offering Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowSubmenu(true)}
              onMouseLeave={() => setShowSubmenu(false)}
            >
              <button className={`transition-colors flex items-center gap-1 ${
                isScrolled ? 'text-gray-700 hover:text-primary' : 'text-black hover:text-primary'
              }`}>
                Our Offering
                <FiChevronDown className={`transition-transform ${showSubmenu ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {showSubmenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white shadow-lg rounded-md py-2"
                  >
                    {offerings.map((item, index) => (
                      <Link
                        key={index}
                        to={item.to}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-black transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div> 

            <Link to="/alliance" className={`transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-primary' : 'text-black hover:text-primary'
            }`}>
              Alliance
            </Link>
            <Link to="/career1" className={`transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-primary' : 'text-black hover:text-primary'
            }`}>
              Career
            </Link> 
            <Link to="/contact" className={`transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-primary' : 'text-black hover:text-primary'
            }`}>
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden text-2xl ${
              isScrolled ? 'text-secondary' : 'text-white'
            }`}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4"
            >
              <div className="flex flex-col space-y-4">
                <Link to="/" className={`transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary'
                }`} onClick={() => setIsOpen(false)}>
                  Home
                </Link>
                <Link to="/about" className={`transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary'
                }`} onClick={() => setIsOpen(false)}>
                  About Us
                </Link>
                
                <div>
                  <button
                    onClick={() => setShowSubmenu(!showSubmenu)}
                    className={`transition-colors flex items-center gap-1 w-full ${
                      isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary'
                    }`}
                  >
                    Our Offering
                    <FiChevronDown className={`transition-transform ${showSubmenu ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {showSubmenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {offerings.map((item, index) => (
                        <Link
                          key={index}
                          to={item.to}
                          className={`block text-sm transition-colors ${
                            isScrolled ? 'text-gray-600 hover:text-primary' : 'text-gray-200 hover:text-primary'
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link to="/alliance" className={`transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary'
                }`} onClick={() => setIsOpen(false)}>
                  Alliance
                </Link>
                <Link to="/career" className={`transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary'
                }`} onClick={() => setIsOpen(false)}>
                  Career
                </Link>
                <Link to="/contact" className={`transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary'
                }`} onClick={() => setIsOpen(false)}>
                  Contact Us
                </Link>
                
                <Link to="/contact" className="btn-primary text-center" onClick={() => setIsOpen(false)}>
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
