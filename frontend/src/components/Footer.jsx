import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import ContactModal from '../pages/Contactmodal';

const Footer = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <footer className="relative bg-[#2b3544] text-white mt-32">
        {/* CTA Section - Half Above Footer */}
        <div className="absolute -top-32 left-0 right-0 px-4">
          <div className="container mx-auto">
            <div className="bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl px-8 py-4 sm:py-10 md:py-12 lg:py-16 shadow-2xl">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    Level up your productivity
                  </h2>
                  <p className="text-white text-lg">
                    Get started today and improve your workflow.
                  </p>
                </div>
                <div className="flex gap-4 mt-6 md:mt-0">
                  <button 
                    onClick={() => setIsContactModalOpen(true)}
                    className="px-8 py-3 bg-blue-900 hover:bg-blue-800 text-white rounded-full font-semibold transition-colors"
                  >
                    GET STARTED
                  </button>
                  {/* <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-teal-500 text-white rounded-full font-semibold transition-colors">
                    REQUEST DEMO
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer - Add top padding to accommodate CTA */}
        <div className="container mx-auto px-4 pt-40 pb-12">
          {/* Footer Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Us */}
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-gray-400 text-sm leading-relaxed" style={{fontSize: "14px"}}>
                Pacer Automation is a leading System Integrator providing enterprise-class IT solutions and services. We specialize in delivering comprehensive infrastructure solutions that drive business success.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MdEmail className="text-teal-500 text-xl mt-1" />
                  <div>
                    <a href="mailto:solutions@pacerautomation.com" className="text-gray-400 text-sm hover:text-teal-500 transition-colors">
                      solutions@pacerautomation.com 
                      
                    </a><br />
                     {/* <a href="mailto:supportcenter@pacerautomation.com" className="text-gray-400 text-sm hover:text-teal-500 transition-colors">
                      
                      supportcenter@pacerautomation.com 
                    </a> */}
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MdPhone className="text-teal-500 text-xl mt-1" />
                  <div>
                    <p className="text-gray-400 text-sm" style={{fontSize: "14px"}}>+91 97428 23131</p>
                    <p className="text-gray-400 text-sm" style={{fontSize: "14px"}}>080 4973 4119</p>
                   
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MdLocationOn className="text-teal-500 text-xl mt-1" />
                  <div>
                    <p className=" text-gray-400 text-sm" style={{fontSize: "14px"}}>No. 33/5, First Floor, <br />Mount Kailash Building, <br/>
  Meanee Avenue Road <br/>(Above HDFC Bank)
  Ulsoor, <br/>Bangalore-560 042, INDIA
  </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Posts */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-4">
                <div>
                  <Link to="/" className="text-sm hover:text-teal-500 transition-colors text-gray-400">
                   Home
                  </Link>
                  
                </div>
             
                <div>
                  <Link to="/about" className="text-sm hover:text-teal-500 transition-colors text-gray-400">
                    About Us
                  </Link>
                  
                </div>
                
                <div>
                  <Link to="/offerings" className="text-sm hover:text-teal-500 transition-colors text-gray-400">
                    Offerings
                  </Link>
                  
                </div>
                  {/* <div>
                  <Link to="/alliance" className="text-sm hover:text-teal-500 transition-colors text-gray-400">
                    Alliance
                  </Link>
                  
                </div> */}
                  <div>
                  <Link to="/career" className="text-sm hover:text-teal-500 transition-colors text-gray-400">
                    Career
                  </Link>
                  
                </div> 
                
                <div>
                  <Link to="/contact" className="text-sm hover:text-teal-500 transition-colors text-gray-400">
                   Contact Us
                  </Link>
                  
                </div>
              </div>
            </div>

            {/* Be Social */}
            <div>
              <h3 className="text-xl font-bold mb-4">Be Social</h3>
              <p className="text-gray-400 text-sm mb-4" style={{fontSize: "14px"}}>
                Connect with us on social media to stay updated with our latest solutions and services.
              </p>
              <div className="flex gap-3">
                {/* <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-teal-500 rounded-full flex items-center justify-center transition-colors">
                  <FaFacebookF />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-teal-500 rounded-full flex items-center justify-center transition-colors">
                  <FaTwitter />
                </a> */}
                <a href="https://www.linkedin.com/company/pacer-automation-pvt-ltd---hp-partner/?originalSubdomain=in"  target="_blank"
                className="w-10 h-10 bg-gray-700 hover:bg-teal-500 rounded-full flex items-center justify-center transition-colors">
                  <FaLinkedinIn />
                </a>
                {/* <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-teal-500 rounded-full flex items-center justify-center transition-colors">
                  <FaInstagram />
                </a> */}
              </div>
              
              {/* Payments Accepted */}
             {/* <div className="mt-6">
                <p className="text-sm font-semibold mb-3">Payments Accepted</p>
                <div className="flex gap-2">
                  <span className="border border-gray-600 px-3 py-1 text-xs rounded">PayPal</span>
                  <span className="border border-gray-600 px-3 py-1 text-xs rounded">Visa</span>
                  <span className="border border-gray-600 px-3 py-1 text-xs rounded">MasterCard</span>
                </div>
              </div>  */}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm" style={{fontSize: "11px"}}>
                All Rights Reserved by Pacer Automation
              </p>
              
              {/* <div className="flex gap-4 mt-4 md:mt-0">
                <Link to="/privacy" className="text-gray-400 text-sm hover:text-teal-500 transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-400 text-sm hover:text-teal-500 transition-colors">
                  Terms of Service
                </Link>
              </div> */}
              <p className="text-gray-400 text-sm" style={{fontSize: "11px"}}>
                Developed by <a href="https://sunsys.in" className="hover:text-teal-500 transition-colors">Sunsys Technologies</a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
};

export default Footer;