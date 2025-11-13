import { motion } from 'framer-motion';
import { FiCheckCircle, FiUsers, FiTrendingUp, FiAward } from 'react-icons/fi';
import OurOffering from './OurOffering';
import home1 from "../assets/home.png"
import home2 from "../assets/SaaS-2.png"  
import home3 from "../assets/SaaS-3.png"
import home4 from "../assets/SaaS-4.png"
import home5 from "../assets/SaaS-5.png"
import StatsSection from './StatsSection';
import TeamSection from "./TeamSection"

const About = () => {
  const stats = [
    { year: '1989', label: 'Year we were founded' },
    { number: '5M', label: 'Happy users' },
    { number: '100+', label: 'Enterprise clients served' }
  
  ];

  const values = [
    {
      icon: <FiCheckCircle className="text-3xl" />,
      title: 'Authenticity',
      description: 'We are real, human and honest. Our words and actions are totally clear, a commited to others.'
    },
    {
      icon: <FiUsers className="text-3xl" />,
      title: 'Togetherness',
      description: 'We believe that we are most powerful together. We work towards one goal and one strategy.'
    },
    {
      icon: <FiAward className="text-3xl" />,
      title: 'Gratitude',
      description: 'We know that we are fortunate to work for an industry who believe in their promise.'
    },
    {
      icon: <FiCheckCircle className="text-3xl" />,
      title: 'Transparency',
      description: 'We are open and clear. Share all pros and cons. We want positive and negative opinions.'
    },
    {
      icon: <FiTrendingUp className="text-3xl" />,
      title: 'Innovation',
      description: 'We continuously embrace new ideas and insights. These serve to what we need now.'
    },
    {
      icon: <FiUsers className="text-3xl" />,
      title: 'Service',
      description: 'We embrace passion and care. What matters. What do customers love and hate. Understand insights.'
    }
  ];

  const leadership = [
    {
      name: 'Sheryl Graham',
      role: 'Chief Executive Officer',
      description: 'We are passionate about the field of Business consultancy. And that business is all about people and relationships. Understanding businesses and their people.',
      image: home1,
      social: { twitter: '#', linkedin: '#' }
    },
    {
      name: 'Chris Anderson',
      role: 'Chief Product Officer',
      description: "I'm a team project manager in charge of technology. I am an enthusiast and a generalist. I'm a person who enjoys new technology; someone who likes to be on the bleeding edge.",
      image: home2,
      social: { twitter: '#', linkedin: '#' }
    },
    {
      name: 'Susan Cox',
      role: 'Chief Marketing Officer',
      description: "Susan is VP of Global, at one point she was known for changing client satisfaction rates rapidly. She's definitely confident they will get on top of helping.",
      image: home3,
      social: { twitter: '#', linkedin: '#' }
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1E3A8A' }}>
                About Us
              </h1>
              {/* <p className="text-lg text-gray-600 leading-relaxed">
               Over the years, we have perfected the art of providing IT infrastructure solutions that incorporate the most suitable IT Solutions with best practices.
              </p> */}
              <p className="text-lg text-gray-600 leading-relaxed">
            At Pacer Automation, we are committed to excellence in delivering innovative IT infrastructure solutions since 1989. Backed by decades of expertise, our skilled team ensures seamless, secure, and reliable systems tailored to every client’s needs. Driven by integrity, continuous learning, and a passion for service, we empower organizations to achieve lasting value and success through technology.
              </p>
              {/* <p className="text-lg text-gray-600 leading-relaxed">
              Backed by strong technical expertise, and seasoned practical experience, we deliver optimal performance, reliability, security, and access to IT infrastructure that delivers business value.
              </p> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src={home4}
                alt="About Us" 
                className="w-full rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#1E3A8A' }}>
                We're building the modern infrastructure
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Over the years, we have perfected the art of providing IT infrastructure solutions that incorporate the most suitable IT Solutions with best practices.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Pacer Automation Private Limited established in 1989 with a vision to provide professional IT infrastructure solutions & services to different verticals. Over the years, we have perfected the art of providing IT infrastructure solutions that incorporate the most suitable IT Solutions with best practices.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Backed by strong technical expertise, and seasoned practical experience, we deliver optimal performance, reliability, security, and access to IT infrastructure that delivers business value.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 rounded-lg"
              style={{ background: 'linear-gradient(to bottom right, rgba(0, 191, 165, 0.05), rgba(0, 191, 165, 0.1))' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={home5} 
                  alt="About Icon" 
                  className="w-24 h-24"
                />
                <h3 className="text-2xl font-bold" style={{ color: '#1E3A8A' }}>ABOUT US</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                We collaborate directly, administrate and empower local teams. We help evolving channels, and new capital markets on the big data. We deliver transformative service and tool presentations to deliver outstanding ROI.
              </p>
              <h4 className="font-semibold mb-2" style={{ color: '#1E3A8A' }}>Our approach</h4>
              <p className="text-gray-600 leading-relaxed">
                We understand the complexity and challenges of deploying and scaling the ever-changing IT landscape. We help our customers starting from planning to execution to the realization of ROI.
              </p>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Stats Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#1E3A8A' }}>
                  {stat.year || stat.number}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
      <StatsSection />

      {/* Results Oriented Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src={home1} 
                alt="Results" 
                className="w-full rounded-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <span className="font-semibold text-sm uppercase tracking-wide" style={{ color: '#00BFA5' }}>
                OUR APPROACH
              </span>
              <h3 className="text-3xl font-bold mt-2 mb-4" style={{ color: '#1E3A8A' }}>
                Results oriented
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Let's cut to the core of optimized IT solutions. Think of it simply in action rather than as an entity. No power users to wait. We want speed.
              </p>
              <button className="btn-primary">
                READ MORE MORE
              </button>
            </motion.div>

           
          </div>
        </div>
      </section> */}

      {/* Great People Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:order-2"
            >
              <img 
                src={home2} 
                alt="Team" 
                className="w-full rounded-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:order-1"
            >
              <span className="font-semibold text-sm uppercase tracking-wide" style={{ color: '#00BFA5' }}>
                OUR BIGGEST ASSET
              </span>
              <h3 className="text-3xl font-bold mt-2 mb-4" style={{ color: '#1E3A8A' }}>
                What's our secret? Great people.
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our work is driven and built through shared beliefs of hard work, and dedication. And that starts right at team level. We work as a team. We grow together.
              </p>
              <button className="btn-primary">
                MEET THE TEAM
              </button>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our values</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: 'rgba(0, 191, 165, 0.1)', color: '#00BFA5' }}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1E3A8A' }}>
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* <OurOffering /> */}

      {/* Trusted By Section */}
      {/* <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-bold" style={{ color: '#1E3A8A' }}>TRUSTED BY</h3>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-12">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: item * 0.1 }}
                viewport={{ once: true }}
                className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center"
              >
                <span className="text-gray-400 text-4xl">⊕</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Leadership Section */}
     

      <TeamSection />

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
            <h2 className="text-white text-2xl md:text-3xl font-bold">
              Ready to take your startup to the next level?
            </h2>
            <button className="border-2 border-white text-white hover:bg-white font-semibold py-3 px-8 rounded-md transition-all"
              style={{ '--hover-color': '#00BFA5' }}
              onMouseEnter={(e) => e.target.style.color = '#00BFA5'}
              onMouseLeave={(e) => e.target.style.color = 'white'}
            >
              CONTACT US
            </button>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default About;