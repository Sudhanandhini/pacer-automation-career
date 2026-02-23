import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Offerings from './pages/Offerings';
import Alliance from './pages/Alliance';
import Career from './pages/Career';
import NetworkSecuritySolutions from './pages/NetworkSecuritySolutions';
import UserComputing from './pages/UserComputing';
import ImplementationMigration from './pages/ImplementationMigration';
import InfrastructureManagement from './pages/InfrastructureManagement';
import ConsultingServices from './pages/ConsultingServices';
import CloudSolutions from './pages/CloudSolutions';
import AI from "./pages/AI";
import CyberSecurity from './pages/CyberSecurity';
import DatacenterSolution from './pages/DatacenterSolution';
import Career1 from './pages/Career1';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

import WhatsAppButton from './components/Whatsappbutton';
import ScrollToTop from './components/Scrolltotop';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">

  <ScrollToTop />

        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/offerings" element={<Offerings />} />
            <Route path="/alliance" element={<Alliance />} />
            {/* <Route path="/career" element={<Career />} /> */}
            <Route path="/network-security" element={<NetworkSecuritySolutions />} />
            <Route path="/user-computing" element={<UserComputing />} />
            <Route path="/consulting-services" element={<ConsultingServices />} />
            <Route path="/implementation-migration" element={<ImplementationMigration />} />
            <Route path="/infrastructure-management" element={<InfrastructureManagement />} />
            <Route path="/cloud-solutions" element={<CloudSolutions />} />
            {/* <Route path="/ai" element={<AI />} /> */}
            <Route path="/cyber-security" element={< CyberSecurity />} />
            <Route path="/datacenter-solution" element={<DatacenterSolution />} />
            <Route path="/career" element={<Career />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/career1" element={<Career1 />} />
          </Routes>
        </main>
        <Footer />

         <WhatsAppButton /> 
      </div>
    </Router>
  );
}

export default App;
