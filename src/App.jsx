import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';

// Development Pages
import SoftwareDevelopmentMainPage from './pages/SoftwareDevelopmentMainPage';
import AIAgenticDevelopmentPage from './pages/AIAgenticDevelopmentPage';
import CustomSoftwareDevelopmentPage from './pages/CustomSoftwareDevelopmentPage';
import ERPCRMDevelopmentPage from './pages/ERPCRMDevelopmentPage';
import WhatsAppBusinessMarketingPage from './pages/WhatsAppBusinessMarketingPage';

// Service & Product Pages - centralized imports
import {
  CyberSecurityPage,
  TelecomConsultingPage,
  EGovernanceConsultingPage,
  ManagementBusinessConsultingPage,
  HRTalentConsultingPage,
  SalesGrowthConsultingPage,
  DronesAdvancedPage,
  SaasPlatformsPage,
} from './pages/ServicePages';

// Other Pages
import {
  PlatformPage,
  IndustriesPage,
  ConsultingPage,
  ResourcesPage,
  ProductsPage,
} from './pages/OtherPages';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/platform" element={<PlatformPage />} />
              <Route path="/industries" element={<IndustriesPage />} />
              <Route path="/consulting" element={<ConsultingPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/admin-login" element={<AdminLoginPage />} />
              <Route path="/admin-dashboard" element={<AdminDashboardPage />} />

              {/* Product Pages */}
              <Route path="/products/drones" element={<DronesAdvancedPage />} />
              <Route path="/products/botminds" element={<SaasPlatformsPage />} />

              {/* Next-Gen Solutions Pages */}
              <Route path="/development" element={<SoftwareDevelopmentMainPage />} />
              <Route path="/development/ai-agentic" element={<AIAgenticDevelopmentPage />} />
              <Route path="/development/custom-software" element={<CustomSoftwareDevelopmentPage />} />
              <Route path="/development/erp-crm" element={<ERPCRMDevelopmentPage />} />

              {/* Service Detail Pages */}
              <Route path="/services/sales-growth-consulting" element={<SalesGrowthConsultingPage />} />
              <Route path="/services/management-consulting" element={<ManagementBusinessConsultingPage />} />
              <Route path="/services/business-consulting" element={<ManagementBusinessConsultingPage />} />
              <Route path="/services/hr-consulting" element={<HRTalentConsultingPage />} />
              <Route path="/services/whatsapp-marketing" element={<WhatsAppBusinessMarketingPage />} />
              <Route path="/services/cyber-security" element={<CyberSecurityPage />} />
              <Route path="/services/telecom-consulting" element={<TelecomConsultingPage />} />
              <Route path="/services/e-governance-consulting" element={<EGovernanceConsultingPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
