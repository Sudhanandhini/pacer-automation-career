import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiUsers, FiZap, FiShield, FiHeadphones } from 'react-icons/fi';
import { MdDevices } from 'react-icons/md';
import home1 from "../assets/home.png";
import home2 from "../assets/infrastructure.jpg";
import home3 from "../assets/usercomputing.jpg";
import home4 from "../assets/consulting-service.jpg";
import home51 from "../assets/network-security.jpg";
import home6 from "../assets/implementation.jpg";
import home7 from "../assets/cloud-solutions.jpg";
import circle1 from "../assets/circle1.png";
import AboutCompanySection from './AboutCompanySection';
import LogoSlider from './LogoSlider';



const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const testimonials = [
    {
      text: "They are a lot of platforms out there - and I can't even begin to think of some of them, but what I like most about Pacer is it's ease of use.",
      name: "Tom Jones",
      role: "Marketing Director",
      image: "/api/placeholder/60/60"
    },
    {
      text: "We now take requests the old fashioned way and do work. Interesting, no such luck with Pacer. They do an amazing job!",
      name: "Jane Harrison",
      role: "Product Manager",
      image: "/api/placeholder/60/60"
    },
    {
      text: "Whoever was the tool that did the planning at home, for me this was my new go to place. It's easy, quick and the tech is very quick.",
      name: "Rick Adair",
      role: "CEO",
      image: "/api/placeholder/60/60"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-12 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.h1
                variants={fadeInUp}
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight"
                style={{ color: '#1E3A8A' }}
              >Pacer Automation

              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-gray-600 mb-8 leading-relaxed"
              >In today's competitive business environment, organizations, irrespective of their size, are dependent on IT to run their core  business efficiently.
                With a wide range of vendors and  ever-changing technologies, businesses are often faced with  many choices while deploying...
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-4"
              >
                <Link to="/contact" className="btn-primary">
                  GET STARTED
                </Link>
                <Link to="/about" className="btn-secondary">
                  LEARN MORE
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src={home1}
                  alt="Team Collaboration"
                  className="w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <AboutCompanySection />

      {/* Powerful Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">OUR OFFERING</h2>
            <p className="section-subtitle">
              We provide Technical expertise and practical advice required to deliver optimal performance, reliability, security, and access to the IT infrastructure.
            </p>
          </motion.div>

          <div className="space-y-24">
            {/* Feature 1 - Quick Setup */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center relative"
            >
              {/* Circle Background - Right Side */}
              <div className="absolute -translate-y-1/2 w-96 h-96 opacity-70 pointer-events-none hidden lg:block"
                style={{ right: "-24%", transform: "rotate(270deg)" }}>
                <img src={circle1} alt="" className="w-full h-full object-contain" />
              </div>

              <div className="relative z-10">
                <img
                  src={home2}
                  alt="Quick Setup"
                  className="w-full"
                />
              </div>

              <div className="relative z-10">
                <span className="font-semibold text-sm uppercase tracking-wide" style={{ color: '#e53935' }}>
                  SMART IT SOLUTIONS
                </span>
                <h3 className="text-3xl font-bold mt-2 mb-4" style={{ color: '#1E3A8A' }}>
                  Infrastructure Management Services
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Ensure the seamless operation, security, and scalability of an organization's IT environment. IMS covers the proactive management of servers, networks, storage, data centers, and cloud systems to minimize downtime and enhance performance.
                </p>
                <Link to="/infrastructure-management" className="btn-primary">
                  View More
                </Link>
                {/* <a
                  href="#"
                  className="inline-flex items-center gap-2 font-semibold py-3 px-8 rounded-md transition-all hover:shadow-lg"
                  style={{ backgroundColor: '#00BFA5', color: 'white' }}
                >
                  View More
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a> */}
              </div>


            </motion.div>

            {/* Feature 2 - Collaboration */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center relative"
            >
              {/* Circle Background - Left Side */}
              <div className="absolute -translate-y-1/2 w-96 h-96 opacity-70 pointer-events-none hidden lg:block"
                style={{ left: "-23%", transform: "rotate(90deg)" }}>
                <img src={circle1} alt="" className="w-full h-full object-contain" />
              </div>

              <div className="md:order-2 relative z-10">
                <img
                  src={home51}
                  alt="Collaboration"
                  className="w-full"
                />
              </div>
              {/* Networking and Security Solutions */}
              <div className="relative z-10 mb-10">
                <span className="font-semibold text-sm uppercase tracking-wide" style={{ color: '#e53935' }}>
                  SECURE NETWORKS
                </span>
                <h3 className="text-3xl font-bold mt-2 mb-4" style={{ color: '#1E3A8A' }}>
                  Networking and Security Solutions
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Design, deploy and monitor resilient networks with layered security. We protect data and users through firewalls, VPNs, IDS/IPS and continual threat monitoring to keep your business safe and online.
                </p>
                 <Link to="/network-security" className="btn-primary">
                  View More
                </Link>
                {/* <a
                  href="#"
                  className="inline-flex items-center gap-2 font-semibold py-3 px-8 rounded-md transition-all hover:shadow-lg"
                  style={{ backgroundColor: '#00BFA5', color: 'white' }}
                >
                  View More
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a> */}
              </div>
            </motion.div>

            {/* Feature 3 - All Devices */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center relative"
            >
              {/* Circle Background - Right Side */}
              <div className="absolute -translate-y-1/2 w-96 h-96 opacity-70 pointer-events-none hidden lg:block"
                style={{ right: "-24%", transform: "rotate(270deg)" }}>
                <img src={circle1} alt="" className="w-full h-full object-contain" />
              </div>

              <div className="relative z-10">
                <img
                  src={home3}
                  alt="All Devices"
                  className="w-full"
                />
              </div>
              {/* User Computing */}
              <div className="relative z-10 mb-10">
                <span className="font-semibold text-sm uppercase tracking-wide" style={{ color: '#e53935' }}>
                  END-USER EXPERIENCE
                </span>
                <h3 className="text-3xl font-bold mt-2 mb-4" style={{ color: '#1E3A8A' }}>
                  User Computing
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Deliver modern, secure and productive endpoints—laptops, desktops and mobile—managed centrally with patching, ITSM integration and user support to maximize workforce productivity.
                </p>
                 <Link to="/user-computing" className="btn-primary">
                  View More
                </Link>
                {/* <a
                  href="#"
                  className="inline-flex items-center gap-2 font-semibold py-3 px-8 rounded-md transition-all hover:shadow-lg"
                  style={{ backgroundColor: '#00BFA5', color: 'white' }}
                >
                  View More
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a> */}
              </div>
            </motion.div>

            {/* Feature 4 - Support */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center relative"
            >
              {/* Circle Background - Left Side */}
              <div className="absolute -translate-y-1/2 w-96 h-96 opacity-70 pointer-events-none hidden lg:block"
                style={{ left: "-23%", transform: "rotate(90deg)" }}>
                <img src={circle1} alt="" className="w-full h-full object-contain" />
              </div>

              <div className="md:order-2 relative z-10">
                <img
                  src={home4}
                  alt="Support"
                  className="w-full"
                />
              </div>
              {/* Consulting Services */}
              <div className="relative z-10 mb-10">
                <span className="font-semibold text-sm uppercase tracking-wide" style={{ color: '#e53935' }}>
                  STRATEGIC ADVISORY
                </span>
                <h3 className="text-3xl font-bold mt-2 mb-4" style={{ color: '#1E3A8A' }}>
                  Consulting Services
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Expert IT consulting to align technology with business goals—assessments, roadmaps and cost-optimization plans that reduce risk and accelerate digital transformation.
                </p>
                 <Link to="/consulting-services" className="btn-primary">
                  View More
                </Link>
                {/* <a
                  href="#"
                  className="inline-flex items-center gap-2 font-semibold py-3 px-8 rounded-md transition-all hover:shadow-lg"
                  style={{ backgroundColor: '#00BFA5', color: 'white' }}
                >
                  View More
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a> */}
              </div>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center relative"
            >
              {/* Circle Background - Right Side */}
              <div className="absolute -translate-y-1/2 w-96 h-96 opacity-70 pointer-events-none hidden lg:block"
                style={{ right: "-24%", transform: "rotate(270deg)" }}>
                <img src={circle1} alt="" className="w-full h-full object-contain" />
              </div>

              <div className="relative z-10">
                <img
                  src={home7}
                  alt="All Devices"
                  className="w-full"
                />
              </div>
              <div className="relative z-10 mb-10">
                <span className="font-semibold text-sm uppercase tracking-wide" style={{ color: '#e53935' }}>
                  CLOUD-FIRST
                </span>
                <h3 className="text-3xl font-bold mt-2 mb-4" style={{ color: '#1E3A8A' }}>
                  Cloud Solutions
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Migrate, modernize and manage cloud workloads across public, private and hybrid environments for scalability, cost control and improved agility.
                </p>
                  <Link to="/cloud-solutions" className="btn-primary">
                  View More
                </Link>
                {/* <a
                  href="#"
                  className="inline-flex items-center gap-2 font-semibold py-3 px-8 rounded-md transition-all hover:shadow-lg"
                  style={{ backgroundColor: '#00BFA5', color: 'white' }}
                >
                  View More
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a> */}
              </div>
            </motion.div>



            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center relative"
            >
              {/* Circle Background - Left Side */}
              <div className="absolute -translate-y-1/2 w-96 h-96 opacity-70 pointer-events-none hidden lg:block"
                style={{ left: "-23%", transform: "rotate(90deg)" }}>
                <img src={circle1} alt="" className="w-full h-full object-contain" />
              </div>

              <div className="md:order-2 relative z-10">
                <img
                  src={home6}
                  alt="Support"
                  className="w-full"
                />
              </div>
              {/* Implementation And Migration Services */}
              <div className="relative z-10 mb-10">
                <span className="font-semibold text-sm uppercase tracking-wide" style={{ color: '#e53935' }}>
                  FAST & SECURE
                </span>
                <h3 className="text-3xl font-bold mt-2 mb-4" style={{ color: '#1E3A8A' }}>
                  Implementation And Migration Services
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  End-to-end implementation and migration services with minimal disruption—planning, testing and cutover support to ensure smooth transitions and measurable outcomes.
                </p>
                  <Link to="/implementation-migration" className="btn-primary">
                  View More
                </Link>
                {/* <a
                  href="#"
                  className="inline-flex items-center gap-2 font-semibold py-3 px-8 rounded-md transition-all hover:shadow-lg"
                  style={{ backgroundColor: '#00BFA5', color: 'white' }}
                >
                  View More
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">What customers are saying</h2>
            <p className="section-subtitle">
              We've had the opportunity to work with some great customers over the years, so why don't you take it from them, and hear their delight.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div>
                    <p className="font-semibold" style={{ color: '#1E3A8A' }}>{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-16" style={{ backgroundColor: '#00BFA5' }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Level up your productivity
              </h2>
              <p className="text-lg opacity-90">
                Get started using our best features.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="font-semibold py-3 px-8 rounded-md transition-all text-white" style={{ backgroundColor: '#1E3A8A' }}>
                GET STARTED
              </Link>
              <Link to="/contact" className="border-2 border-white text-white hover:bg-white font-semibold py-3 px-8 rounded-md transition-all" style={{ '--hover-color': '#00BFA5' }}>
                REQUEST DEMO
              </Link>
            </div>
          </motion.div>
        </div>
      </section> */}

      <LogoSlider />
    </div>
  );
};

export default Home;