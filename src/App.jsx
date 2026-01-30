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
import SoftwareDevelopmentPage from './pages/SoftwareDevelopmentPage';
import SalesGrowthConsultingPage from './pages/SalesGrowthConsultingPage';
import ManagementBusinessConsultingPage from './pages/ManagementBusinessConsultingPage';
import HRTalentConsultingPage from './pages/HRTalentConsultingPage';
import SaasPlatformsPage from './pages/SaasPlatformsPage';
import DronesAdvancedPage from './pages/DronesAdvancedPage';

// Service Pages
import {
  DigitalMarketingPage,
  CyberSecurityPage,
  ITConsultingPage,
  ManagementConsultingPage,
  BusinessConsultingPage,
  HRConsultingPage,
  TelecomConsultingPage,
  EGovernanceConsultingPage,
  MarketResearchPage,
  WhatsAppMarketingPage,
} from './pages/ServicePages';

// Other Pages
import {
  PlatformPage,
  IndustriesPage,
  ConsultingPage,
  ResourcesPage,
  ProductsPage,
  DronesPage,
  BotMindsPage,
  CareersPage,
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

              {/* Product Pages */}
              <Route path="/products/drones" element={<DronesAdvancedPage />} />
              <Route path="/products/botminds" element={<SaasPlatformsPage />} />

              {/* Service Detail Pages */}
              <Route path="/services/sales-growth-consulting" element={<SalesGrowthConsultingPage />} />
              <Route path="/services/management-consulting" element={<ManagementBusinessConsultingPage />} />
              <Route path="/services/business-consulting" element={<ManagementBusinessConsultingPage />} />
              <Route path="/services/hr-consulting" element={<HRTalentConsultingPage />} />
              <Route path="/services/saas-platforms" element={<SaasPlatformsPage />} />
              <Route path="/services/software-development" element={<SoftwareDevelopmentPage />} />
              <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
              <Route path="/services/cyber-security" element={<CyberSecurityPage />} />
              <Route path="/services/it-consulting" element={<ITConsultingPage />} />
              <Route path="/services/telecom-consulting" element={<TelecomConsultingPage />} />
              <Route path="/services/e-governance-consulting" element={<EGovernanceConsultingPage />} />
              <Route path="/services/market-research" element={<MarketResearchPage />} />
              <Route path="/services/whatsapp-marketing" element={<WhatsAppMarketingPage />} />
              <Route path="/services/ai-automation" element={<SoftwareDevelopmentPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
