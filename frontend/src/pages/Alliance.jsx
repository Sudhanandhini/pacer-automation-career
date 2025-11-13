import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  ChevronRight,
  Users,
  Target,
  Lightbulb,
  Shield,
  Globe,
  Award,
} from "lucide-react";
import home from "../assets/home.png"; // ✅ update this path to your actual image
import LogoSlider from './LogoSlider';

const Alliance = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const partners = [
    { name: "Microsoft", logo: "🔷" },
    { name: "AWS", logo: "☁️" },
    { name: "Oracle", logo: "🔴" },
    { name: "IBM", logo: "💙" },
    { name: "SAP", logo: "🔶" },
    { name: "Cisco", logo: "🌐" },
  ];

  const benefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Strategic Partnerships",
      description:
        "Collaborate with industry-leading technology providers to deliver comprehensive solutions",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Market Expansion",
      description:
        "Access new markets and customer segments through our extensive partner network",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation Hub",
      description:
        "Leverage cutting-edge technologies and joint R&D initiatives",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trusted Ecosystem",
      description:
        "Join a vetted network of reliable partners with proven track records",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Expand your business footprint across international markets",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certified Excellence",
      description:
        "Access training, certifications, and best practices from industry leaders",
    },
  ];

  const processSteps = [
    { step: 1, title: "Application", desc: "Submit your partnership application" },
    { step: 2, title: "Evaluation", desc: "Our team reviews your capabilities" },
    { step: 3, title: "Agreement", desc: "Finalize partnership terms" },
    { step: 4, title: "Onboarding", desc: "Complete training and integration" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1E3A8A]">
                Strategic Alliance Program
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                To provide the best of breed products and technology platforms
                to our customers, we have forged strong partnerships with
                technology leaders. This helps us to provide cutting-edge
                solutions that meet our customers’ changing business
                requirements.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Security, and Hardware. Pacer Automation Private Limited has
                been awarded as the Top Corporate Partner in India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className=" text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-all transform hover:scale-105" 
style={{backgroundColor:'#00BFA5'}}>
                  <a href="/contact">Become a Partner <ChevronRight className="inline ml-2" /></a>
                </button>
               
              </div>
            </motion.div>

            {/* Right image */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img src={home} alt="Alliance" className="w-full rounded-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      {/* <section id="partners" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-dark mb-4">
              Our Technology Partners
            </h3>
            <p className="text-xl text-gray-600">
              Collaborating with industry leaders to deliver excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="group">
                <div className="bg-gray-50 rounded-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-primary hover:text-white">
                  <div className="text-4xl mb-4 text-center">{partner.logo}</div>
                  <h4 className="text-center font-semibold group-hover:text-white">
                    {partner.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-[#1E3A8A] mb-4">
              Alliance Benefits
            </h3>
            <p className="text-xl text-gray-600">
              Unlock opportunities through strategic partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <div className="text-[#00BFA5] mb-4 group-hover:text-[#1E3A8A] transition-colors">
                    {benefit.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-dark mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      {/* <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-dark mb-4">
              Partnership Process
            </h3>
            <p className="text-xl text-gray-600">
              Simple steps to join our alliance network
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

              {processSteps.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                    }`}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                      <h4 className="text-xl font-semibold text-dark mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold z-10">
                    {item.step}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
      
      <LogoSlider />

      {/* CTA Section */}
   
    </div>
  );
};

export default Alliance;
