import { motion } from 'framer-motion';
import {
  FiServer,
  FiCheckCircle,
  FiShield,
  FiZap,
  FiTrendingUp,
  FiLayers,
  FiDatabase,
  FiSettings,
  FiCpu
} from 'react-icons/fi';
import { MdOutlineDataset, MdNetworkCheck, MdOutlineElectricBolt } from 'react-icons/md';
import heroImage from '../assets/infrastructure.jpg';
import solutionImage from '../assets/implementation.jpg';

const DatacenterSolution = () => {
  const services = [
    {
      icon: <FiSettings className="text-4xl" />,
      title: "Datacenter Design & Build",
      description:
        "End-to-end planning and construction of scalable, resilient datacenters — from site selection and physical layout to structured cabling and commissioning.",
      features: [
        "Physical Layout & Floor Planning",
        "Structured Cabling Design",
        "Power & Cooling Architecture",
        "Commissioning & Handover"
      ],
      color: '#00BFA5'
    },
    {
      icon: <FiServer className="text-4xl" />,
      title: "Server & Storage Infrastructure",
      description:
        "Deployment and management of enterprise-grade server and storage platforms to ensure high availability and optimal performance.",
      features: [
        "Rack & Blade Server Deployment",
        "SAN / NAS Storage Systems",
        "High Availability Clustering",
        "Capacity Planning & Monitoring"
      ],
      color: '#1E3A8A'
    },
    {
      icon: <FiLayers className="text-4xl" />,
      title: "Virtualization Solutions",
      description:
        "Maximize resource utilization and reduce hardware costs with industry-leading virtualization platforms managed by certified engineers.",
      features: [
        "VMware vSphere / vCenter",
        "Microsoft Hyper-V",
        "KVM & Open-source Platforms",
        "Virtual Desktop Infrastructure (VDI)"
      ],
      color: '#00BFA5'
    },
    {
      icon: <MdNetworkCheck className="text-4xl" />,
      title: "Datacenter Networking",
      description:
        "Design and management of high-throughput datacenter networks with redundant switching fabric, load balancers, and integrated security.",
      features: [
        "Core / Distribution / Access Switching",
        "Load Balancing & Traffic Management",
        "Firewall & DMZ Architecture",
        "SDN & Network Automation"
      ],
      color: '#1E3A8A'
    },
    {
      icon: <MdOutlineElectricBolt className="text-4xl" />,
      title: "Power & Cooling Management",
      description:
        "Ensure continuous uptime with intelligent power distribution and precision cooling systems designed for maximum energy efficiency.",
      features: [
        "UPS & Generator Systems",
        "PDU Monitoring & Management",
        "Precision Air Conditioning",
        "Power Usage Effectiveness (PUE) Optimization"
      ],
      color: '#00BFA5'
    },
    {
      icon: <FiDatabase className="text-4xl" />,
      title: "Datacenter Migration & Consolidation",
      description:
        "Zero-disruption migrations and consolidation strategies that modernize your datacenter footprint while protecting business continuity.",
      features: [
        "Workload Assessment & Planning",
        "Live Migration with Zero Downtime",
        "Data Center Consolidation",
        "Post-migration Validation"
      ],
      color: '#1E3A8A'
    }
  ];

  const benefits = [
    "End-to-end datacenter lifecycle management — design, build, operate, and optimize",
    "Proven expertise in Tier I–IV datacenter deployments",
    "Vendor-agnostic approach for best-fit, cost-effective solutions",
    "24/7 remote monitoring and Network Operations Center (NOC) support",
    "Compliance with TIA-942, ISO/IEC 27001 and Uptime Institute standards",
    "Cost optimization through server consolidation and virtualization",
    "Rapid deployment with minimal business disruption",
    "Dedicated certified engineers — both on-site and on-call"
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
              <span
                className="font-semibold text-sm uppercase tracking-wide mb-4 inline-block"
                style={{ color: '#00BFA5' }}
              >
                Our Offering
              </span>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                style={{ color: '#1E3A8A' }}
              >
                Datacenter Solution
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Build, manage and modernize your datacenter with confidence. Pacer Automation delivers
                end-to-end datacenter solutions — from physical infrastructure design to virtualization,
                networking, and 24/7 operations — engineered for reliability, security, and scale.
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
                alt="Datacenter Solution"
                className="w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <span
              className="font-semibold text-sm uppercase tracking-wide mb-4 inline-block"
              style={{ color: '#00BFA5' }}
            >
              The Challenge
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#1E3A8A' }}>
              Modern Datacenters Demand More
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Today's organizations face unprecedented demands on their datacenter infrastructure —
              exponential data growth, always-on availability expectations, tightening security and compliance
              requirements, and the pressure to reduce costs while scaling capacity. Managing these competing
              priorities with limited internal resources is a critical challenge for businesses of all sizes.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Aging hardware, siloed management tools, inefficient cooling, and fragmented vendor relationships
              further increase operational risk and cost. Pacer Automation provides a single, accountable partner
              to design, build, and run your datacenter — so your team can focus on business outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Pacer Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span
                className="font-semibold text-sm uppercase tracking-wide mb-4 inline-block"
                style={{ color: '#00BFA5' }}
              >
                Our Solution
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#1E3A8A' }}>
                Why Choose Pacer Automation?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Pacer Automation brings deep engineering expertise and a vendor-agnostic approach to every
                datacenter engagement. Whether you are building a new facility, consolidating existing assets,
                or migrating to a modern platform, our certified team delivers measurable results at optimized cost.
              </p>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1E3A8A' }}>
                Key Benefits:
              </h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FiCheckCircle
                      className="flex-shrink-0 mt-1"
                      style={{ color: '#00BFA5' }}
                    />
                    <p className="text-gray-600">{benefit}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={solutionImage}
                alt="Datacenter Solution"
                className="w-full rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span
              className="font-semibold text-sm uppercase tracking-wide mb-4 inline-block"
              style={{ color: '#00BFA5' }}
            >
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1E3A8A' }}>
              Our Datacenter Services
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Comprehensive datacenter services designed to deliver reliability, security, and scalability
              across your entire infrastructure lifecycle
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto auto-rows-fr">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 h-full flex flex-col"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6 flex-shrink-0 group-hover:scale-110 transition-all"
                  style={{ backgroundColor: service.color, color: 'white' }}
                >
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#1E3A8A' }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <FiCheckCircle
                          className="flex-shrink-0 mt-1"
                          style={{ color: '#00BFA5' }}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DatacenterSolution;
