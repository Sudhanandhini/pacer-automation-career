import { motion } from 'framer-motion';
import {
  FiServer,
  FiCheckCircle,
  FiShield,
  FiZap,
  FiLayers,
  FiDatabase,
  FiSettings,
  FiCpu,
  FiLock,
  FiShare2
} from 'react-icons/fi';
import { MdNetworkCheck, MdStorage, MdCloud } from 'react-icons/md';
import heroImage from '../assets/infrastructure.jpg';
import solutionImage from '../assets/implementation.jpg';

const DatacenterSolution = () => {
  const infrastructureServices = [
    {
      icon: <FiServer className="text-4xl" />,
      title: "Server Consolidation Solutions",
      description:
        "Reduce hardware sprawl and operational costs by consolidating physical servers into a streamlined, high-performance environment aligned with your business workloads.",
      features: [
        "Physical-to-Virtual (P2V) Migration",
        "Workload Assessment & Right-sizing",
        "Rack Optimization & Decommissioning",
        "Performance & Capacity Planning"
      ],
      color: '#00BFA5'
    },
    {
      icon: <FiLayers className="text-4xl" />,
      title: "Virtualization Solutions",
      description:
        "Maximize resource utilization and agility with industry-leading virtualization platforms, enabling faster provisioning and simplified management across your datacenter.",
      features: [
        "VMware vSphere / vCenter",
        "Microsoft Hyper-V",
        "KVM & Open-source Hypervisors",
        "Virtual Desktop Infrastructure (VDI)"
      ],
      color: '#1E3A8A'
    },
    {
      icon: <FiCpu className="text-4xl" />,
      title: "Hyper-converged Solutions",
      description:
        "Simplify datacenter operations with hyper-converged infrastructure that integrates compute, storage, and networking into a single, scalable platform.",
      features: [
        "VMware vSAN & Nutanix HCI",
        "Simplified Lifecycle Management",
        "Scale-out Architecture",
        "Unified Management Dashboard"
      ],
      color: '#00BFA5'
    },
    {
      icon: <MdCloud className="text-4xl" />,
      title: "Private Cloud",
      description:
        "Build a dedicated, secure private cloud environment that delivers the flexibility of public cloud with the control and compliance of on-premises infrastructure.",
      features: [
        "OpenStack & VMware Cloud Foundation",
        "Self-service Provisioning Portal",
        "Multi-tenancy & Resource Pooling",
        "Security & Compliance Controls"
      ],
      color: '#1E3A8A'
    },
    {
      icon: <FiZap className="text-4xl" />,
      title: "High-Performance Computing Solutions",
      description:
        "Deliver the raw compute power required for intensive workloads — AI/ML, simulation, rendering, and analytics — with purpose-built HPC infrastructure.",
      features: [
        "GPU-accelerated Compute Nodes",
        "High-speed InfiniBand / RDMA Networking",
        "Parallel Workload Scheduling",
        "HPC Cluster Design & Deployment"
      ],
      color: '#00BFA5'
    },
    {
      icon: <FiSettings className="text-4xl" />,
      title: "Datacentre Management Solutions",
      description:
        "Gain complete visibility and control over your datacenter with intelligent management tools covering power, cooling, assets, and operations.",
      features: [
        "DCIM (Datacenter Infrastructure Management)",
        "Remote Monitoring & NOC Support",
        "Asset & Capacity Management",
        "Incident & Change Management"
      ],
      color: '#1E3A8A'
    }
  ];

  const storageServices = [
    {
      icon: <FiDatabase className="text-4xl" />,
      title: "Storage for Enterprise Applications",
      description:
        "Purpose-built storage platforms designed to meet the demanding performance, availability, and scalability requirements of mission-critical enterprise applications.",
      features: [
        "Oracle, SAP & SQL Workload Optimization",
        "Tier-1 Block & File Storage",
        "High Availability & Failover",
        "Dedicated SLA-backed Performance"
      ],
      color: '#00BFA5'
    },
    {
      icon: <MdStorage className="text-4xl" />,
      title: "File and Object Storage Solutions",
      description:
        "Scalable unstructured data storage for files, media, backups, and cloud-native workloads — designed for massive capacity and long-term retention.",
      features: [
        "NAS & Scale-out File Systems",
        "S3-compatible Object Storage",
        "Multi-protocol Access (NFS, SMB, S3)",
        "Policy-based Data Tiering"
      ],
      color: '#1E3A8A'
    },
    {
      icon: <FiZap className="text-4xl" />,
      title: "High-Performance Storage Solutions",
      description:
        "All-flash and hybrid storage arrays engineered for ultra-low latency and maximum throughput, supporting the most demanding database and analytics workloads.",
      features: [
        "All-flash NVMe Arrays",
        "Hybrid Flash & Spinning Disk",
        "Sub-millisecond Latency",
        "Inline Deduplication & Compression"
      ],
      color: '#00BFA5'
    },
    {
      icon: <MdNetworkCheck className="text-4xl" />,
      title: "Storage Networking",
      description:
        "Design and deploy high-speed storage networks that ensure reliable, low-latency connectivity between servers and storage across your datacenter fabric.",
      features: [
        "Fibre Channel (FC) SAN",
        "iSCSI & FCoE Networking",
        "Storage Fabric Zoning & Management",
        "End-to-end Performance Optimization"
      ],
      color: '#1E3A8A'
    },
    {
      icon: <FiShield className="text-4xl" />,
      title: "Data Protection — Backup and DR",
      description:
        "Comprehensive data protection strategy covering backup, replication, and disaster recovery to ensure business continuity and meet RPO/RTO objectives.",
      features: [
        "Automated Backup & Scheduling",
        "Offsite & Cloud Replication",
        "Disaster Recovery Planning & Drills",
        "Ransomware-resilient Immutable Backups"
      ],
      color: '#00BFA5'
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
                Productive and scalable IT infrastructure is the backbone for any business setup. Pacer offers
                services in the niche areas of enterprise-wide infrastructure needs — building the right
                infrastructure by assessing customer applications, performance requirements, and business
                requirements diligently.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact" className="btn-primary">
                  GET STARTED
                </a>
                <a href="#infrastructure" className="btn-secondary">
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
                Our Approach
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#1E3A8A' }}>
                Enterprise-wide Infrastructure Built for Growth
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The needs for growth and consolidation and the possibility of redundant resources for a business
                requires a dynamic, stable, reliable, and manageable IT solution. Pacer brings deep expertise in
                engineering the right infrastructure matched precisely to your workloads and business goals.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                The growth of data in today's time is unprecedented. Within data centers, it is the data itself
                that grows by leaps and bounds, leading to constant challenges in storage and retrieval across
                the enterprise. Our solutions are designed to tackle this head-on.
              </p>
              {/* <div className="space-y-3">
                {[
                  "Assess customer applications and performance requirements diligently",
                  "Design infrastructure aligned with real business needs",
                  "Deploy software and engineering solutions at optimized cost",
                  "Ensure dynamic, stable, reliable, and manageable IT environments"
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <FiCheckCircle className="flex-shrink-0 mt-1" style={{ color: '#00BFA5' }} />
                    <p className="text-gray-600">{point}</p>
                  </div>
                ))}
              </div> */}
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
                alt="Datacenter infrastructure"
                className="w-full rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Infrastructure Solutions Section */}
      <section id="infrastructure" className="py-20 bg-gray-50">
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
              Software & Engineering Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1E3A8A' }}>
              Infrastructure Solutions & Services
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We envision and deploy the following software and engineering solutions to build
              the right infrastructure for your enterprise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto auto-rows-fr">
            {infrastructureServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
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
                        <FiCheckCircle className="flex-shrink-0 mt-1" style={{ color: '#00BFA5' }} />
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

      {/* Data Storage Section Intro */}
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
              Data Storage & Availability
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#1E3A8A' }}>
              Solving the Data Growth Challenge
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              The growth of data in today's time is unprecedented. Within data centers, it is the data itself
              that grows by leaps and bounds, leading to constant challenges in storage and retrieval across
              the enterprise. We provide the following solutions around data storage and availability.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto auto-rows-fr">
            {storageServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 h-full flex flex-col"
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
                        <FiCheckCircle className="flex-shrink-0 mt-1" style={{ color: '#00BFA5' }} />
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
