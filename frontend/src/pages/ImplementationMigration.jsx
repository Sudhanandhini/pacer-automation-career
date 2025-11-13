import { motion } from 'framer-motion';
import { FiServer, FiShield, FiTrendingUp, FiRefreshCw, FiUpload, FiMapPin, FiCheckCircle, FiClock, FiAward, FiTarget } from 'react-icons/fi';
import { MdComputer, MdSecurity } from 'react-icons/md';
import heroImage from '../assets/implementation.jpg'; // Add your hero image

const ImplementationMigration = () => {
    const services = [
        {
            icon: <MdComputer className="text-4xl" />,
            title: "OS and Platform Implementation",
            subtitle: "Windows Stack",
            description: "Expert implementation of operating systems and platforms with focus on Windows-based environments.",
            features: [
                "Windows Server Deployment",
                "Active Directory Setup",
                "Group Policy Configuration",
                "System Optimization"
            ]
        },
        {
            icon: <MdSecurity className="text-4xl" />,
            title: "Networking and Security Stack",
            description: "Comprehensive implementation of network infrastructure and security solutions.",
            features: [
                "Network Architecture Setup",
                "Firewall Configuration",
                "Security Policy Implementation",
                "Access Control Management"
            ]
        },
        {
            icon: <FiTrendingUp className="text-4xl" />,
            title: "Enhanced and Improved Services Rollout",
            description: "Strategic deployment of enhanced services to improve operational efficiency.",
            features: [
                "Service Enhancement Planning",
                "Phased Rollout Strategy",
                "Performance Optimization",
                "User Training & Support"
            ]
        },
        {
            icon: <FiRefreshCw className="text-4xl" />,
            title: "Technology Refresh",
            description: "Systematic technology refresh to keep your infrastructure current and efficient.",
            features: [
                "Hardware Upgrade Planning",
                "Technology Assessment",
                "Seamless Transition",
                "Legacy System Migration"
            ]
        },
        {
            icon: <FiUpload className="text-4xl" />,
            title: "Version Upgrades",
            subtitle: "Operating Systems and Applications",
            description: "Smooth version upgrades for operating systems and applications with minimal disruption.",
            features: [
                "Compatibility Assessment",
                "Testing & Validation",
                "Rollback Planning",
                "Post-Upgrade Support"
            ]
        },
        {
            icon: <FiMapPin className="text-4xl" />,
            title: "Datacenter Relocation Services",
            description: "Expert datacenter relocation services ensuring business continuity throughout the move.",
            features: [
                "Relocation Planning",
                "Risk Assessment",
                "Minimal Downtime Strategy",
                "Post-Move Validation"
            ]
        }
    ];

    const whyChooseUs = [
        {
            icon: <FiAward className="text-3xl" />,
            title: "Expert Team",
            description: "Right expertise with experience and proven best practices for effective IT service implementation"
        },
        {
            icon: <FiClock className="text-3xl" />,
            title: "Minimal Downtime",
            description: "Thorough processes and practices to execute activities with minimal impact and downtime"
        },
        {
            icon: <FiTarget className="text-3xl" />,
            title: "Desired Outcomes",
            description: "Efficient implementation to produce desired outcomes in a timely manner"
        }
    ];

    const processSteps = [
        { id: 1, short: 'UNDERSTAND', title: 'Understand', desc: 'Gather requirements, stakeholder interviews, and current-state analysis.' },
        { id: 2, short: 'BUILD', title: 'Build', desc: 'Design architecture, provision resources and build the solution components.' },
        { id: 3, short: 'PLAN', title: 'Plan', desc: 'Create detailed rollout, testing and cutover plans with timelines and owners.' },
        { id: 4, short: 'TEST', title: 'Test', desc: 'Perform integration, performance and user acceptance testing in staged environments.' },
        { id: 5, short: 'EXECUTE', title: 'Execute', desc: 'Phased implementation and migration with monitoring and rollback strategies.' },
        { id: 6, short: 'ROLL OUT', title: 'Roll Out', desc: 'Final cutover, handover, training and stabilization with ongoing support.' }
    ];

    const challenges = [
        {
            title: "Incomplete Requirements",
            description: "Missing or unclear requirements can derail design and timelines — early discovery reduces rework."
        },
        {
            title: "Infrastructure Readiness",
            description: "Ensuring environments, capacity and security controls are ready before deployment."
        },
        {
            title: "Poor Change Coordination",
            description: "Lack of coordinated change control leads to unexpected downtime or conflicts."
        },
        {
            title: "Insufficient Testing",
            description: "Inadequate test coverage or environment parity causes issues in production."
        },
        {
            title: "User Adoption & Training",
            description: "Users must be trained and prepared – otherwise benefits are delayed and incidents rise."
        },
        {
            title: "Post-rollout Stabilization",
            description: "Unplanned issues after rollout need a well-defined support and rollback plan to minimize impact."
        }
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 md:py-28">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="font-semibold text-sm uppercase tracking-wide mb-4 inline-block" style={{ color: '#00BFA5' }}>
                                Our Offering
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: '#1E3A8A' }}>
                                Implementation & Migration Services
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Expert implementation and migration services with minimal downtime. We combine right expertise, experience, and proven best practices to deliver desired outcomes efficiently.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="/contact" className="btn-primary">
                                    GET STARTED
                                </a>
                                <a href="#services" className="btn-secondary">
                                    VIEW SERVICES
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <img
                                src={heroImage}
                                alt="Implementation & Migration"
                                className="w-full"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Challenges Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center mb-16"
                    >
                        <span className="font-semibold text-sm uppercase tracking-wide mb-4 inline-block" style={{ color: '#00BFA5' }}>
                            Understanding The Challenge
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#1E3A8A' }}>
                            The Implementation Challenge
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Acquiring right technology is one challenge and implementing the same with efficiency and to produce the desired out come in timely manner is another challenge. To effectively implement any IT Services, we require right expertise with experience and process with best practices.
                            Periodical changes in the IT infrastructure due to change in business requirements, change in technology, capacity scaling, performance improvement, improved service offering, relocation is common and necessary. These changes have to carried out with utmost care with minimal impact and downtime.
                            We at pacer understand this requirement thoroughly and we have built expertise over time with thorough process and practices to execute these activities with minimal impact and downtime.

                        </p>
                    </motion.div>

                    {/* <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 border-l-4"
                style={{ borderColor: '#00BFA5' }}
              >
                <h3 className="text-lg font-bold mb-2" style={{ color: '#1E3A8A' }}>
                  {challenge.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {challenge.description}
                </p>
              </motion.div>
            ))}
          </div> */}
                </div>
            </section>

            {/* Why Choose Us Section */}
            {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-semibold text-sm uppercase tracking-wide mb-4 inline-block" style={{ color: '#00BFA5' }}>
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#1E3A8A' }}>
              Why Choose Pacer?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We understand these requirements thoroughly and have built expertise over time with thorough processes and practices to execute activities with minimal impact and downtime.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-all"
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: '#00BFA5', color: 'white' }}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1E3A8A' }}>
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

            {/* Process Section */}


            {/* Our Approach — 6 step process */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-10"
                    >
                        <span className="font-semibold text-sm uppercase tracking-wide inline-block mb-3" style={{ color: '#00BFA5' }}>
                            Our Approach
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#1E3A8A' }}>
                            Proven Process & Best Practices
                        </h2>
                        <p className="text-gray-600 mt-4">
                            A structured six-step delivery model to reduce risk, accelerate outcomes and ensure business continuity.
                        </p>
                    </motion.div>

                    {/* Steps (horizontal on lg, scrollable on small screens) */}
                    <div className="mb-12">
                        <div className="hidden lg:flex items-center justify-between max-w-6xl mx-auto">
                            {/* Render connectors + steps to visually match the circular design */}
                            {processSteps.map((step, i) => (
                                <div key={step.id} className="flex-1 flex flex-col items-center text-center px-4">
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: i * 0.08 }}
                                        viewport={{ once: true }}
                                        className="relative"
                                    >
                                        <div
                                            className="w-24 h-24 rounded-full flex items-center justify-center shadow-md"
                                            style={{ background: '#fff', border: '6px solid rgba(0,0,0,0.06)' }}
                                        >
                                            <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: ['#00BFA5', '#1E3A8A', '#00BFA5', '#1E3A8A', '#00BFA5', '#1E3A8A'][i], color: 'white' }}>
                                                <span className="font-bold text-sm">{String(step.id).padStart(2, '0')}</span>
                                            </div>
                                        </div>

                                        {/* connector line to next item (except last) */}
                                        {i < processSteps.length - 1 && (
                                            <div className="absolute top-1/2 right-[-50%] w-[100%] h-0.5 bg-dashed opacity-40" style={{ width: '200%' }}>
                                                {/* purely decorative; container controls spacing */}
                                            </div>
                                        )}
                                    </motion.div>

                                    <h4 className="mt-4 text-sm font-bold" style={{ color: '#1E3A8A' }}>{step.title}</h4>
                                    <p className="text-xs text-gray-600 mt-1 max-w-[10rem]">{step.desc}</p>
                                    <div className="mt-2 text-[10px] font-semibold text-gray-500">{step.short}</div>
                                </div>
                            ))}
                        </div>

                        {/* Mobile: horizontally scrollable steps */}
                        <div className="lg:hidden">
                            <div className="flex gap-6 overflow-x-auto px-2 py-4">
                                {processSteps.map((step, i) => (
                                    <motion.div
                                        key={step.id}
                                        initial={{ opacity: 0, y: 8 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: i * 0.06 }}
                                        viewport={{ once: true }}
                                        className="min-w-[180px] flex-shrink-0 bg-white rounded-xl p-4 shadow-sm text-center"
                                    >
                                        <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: ['#00BFA5', '#6B46C1', '#F59E0B', '#EA6B3C', '#8B5CF6', '#2733F6'][i], color: 'white' }}>
                                            <span className="font-bold text-sm">{String(step.id).padStart(2, '0')}</span>
                                        </div>
                                        <h5 className="font-bold text-sm" style={{ color: '#1E3A8A' }}>{step.title}</h5>
                                        <p className="text-xs text-gray-600 mt-1">{step.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Two-column: process details + challenges */}
                    {/* <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
                        <div>
                            <h3 className="text-xl font-bold mb-4" style={{ color: '#1E3A8A' }}>Process Details</h3>
                            <div className="space-y-4">
                                {processSteps.map((s, idx) => (
                                    <motion.div
                                        key={s.id}
                                        initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: idx * 0.06 }}
                                        viewport={{ once: true }}
                                        className="flex gap-4"
                                    >
                                        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: ['#00BFA5', '#6B46C1', '#F59E0B', '#EA6B3C', '#8B5CF6', '#2733F6'][idx], color: 'white' }}>
                                            {s.id}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold" style={{ color: '#1E3A8A' }}>{s.title}</h4>
                                            <p className="text-sm text-gray-600">{s.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-4" style={{ color: '#1E3A8A' }}>Common Challenges & Mitigation</h3>
                            <div className="space-y-4">
                                {challenges.map((c, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: i * 0.06 }}
                                        viewport={{ once: true }}
                                        className="bg-gray-50 rounded-lg p-4"
                                    >
                                        <h4 className="font-semibold" style={{ color: '#1E3A8A' }}>{c.title}</h4>
                                        <p className="text-sm text-gray-600">{c.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>


            {/* Services Section */}
            <section id="services" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1E3A8A' }}>
                            Our Services
                        </h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                            Comprehensive implementation and migration services tailored to your needs
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
                            >
                                <div
                                    className="w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-all"
                                    style={{ backgroundColor: index % 2 === 0 ? '#00BFA5' : '#1E3A8A', color: 'white' }}
                                >
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2" style={{ color: '#1E3A8A' }}>
                                    {service.title}
                                </h3>
                                {service.subtitle && (
                                    <p className="text-sm mb-3" style={{ color: '#00BFA5' }}>
                                        {service.subtitle}
                                    </p>
                                )}
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    {service.description}
                                </p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                            <FiCheckCircle className="flex-shrink-0" style={{ color: '#00BFA5' }} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Benefits Section */}
            {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#1E3A8A' }}>
              Key Benefits
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: <FiClock />, title: "Minimal Downtime", desc: "Strategic execution to minimize business disruption" },
              { icon: <FiCheckCircle />, title: "Quality Assurance", desc: "Rigorous testing and validation processes" },
              { icon: <FiAward />, title: "Best Practices", desc: "Industry-proven methodologies and standards" },
              { icon: <FiTarget />, title: "Timely Delivery", desc: "On-schedule completion with desired outcomes" }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"
                  style={{ backgroundColor: '#00BFA5', color: 'white' }}
                >
                  {benefit.icon}
                </div>
                <h4 className="font-bold mb-2" style={{ color: '#1E3A8A' }}>{benefit.title}</h4>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}


        </div>
    );
};

export default ImplementationMigration;