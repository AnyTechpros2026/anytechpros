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
              <Route path="/products/drones" element={<DronesPage />} />
              <Route path="/products/botminds" element={<BotMindsPage />} />

              {/* Service Detail Pages */}
              <Route path="/services/software-development" element={<SoftwareDevelopmentPage />} />
              <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
              <Route path="/services/cyber-security" element={<CyberSecurityPage />} />
              <Route path="/services/it-consulting" element={<ITConsultingPage />} />
              <Route path="/services/management-consulting" element={<ManagementConsultingPage />} />
              <Route path="/services/business-consulting" element={<BusinessConsultingPage />} />
              <Route path="/services/hr-consulting" element={<HRConsultingPage />} />
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
