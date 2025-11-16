

import React, { Suspense, lazy, useEffect, useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import Footer from './components/layout/Footer';
import LoadingSpinner from './components/ui/LoadingSpinner';

// Lazy load all page components for code splitting
const HomePage = lazy(() => import('./components/pages/HomePage'));
const PlatformPage = lazy(() => import('./components/pages/PlatformPage'));
const IndustriesPage = lazy(() => import('./components/pages/IndustriesPage'));
const SolutionsPage = lazy(() => import('./components/pages/SolutionsPage'));
const VelocityApproachPage = lazy(() => import('./components/pages/VelocityApproachPage'));
const ClientStoriesPage = lazy(() => import('./components/pages/ClientStoriesPage'));
const InsightsPage = lazy(() => import('./components/pages/InsightsPage'));
const AboutPage = lazy(() => import('./components/pages/AboutPage'));
const ThriveIndexPage = lazy(() => import('./components/pages/insights/ThriveIndexPage'));
const StateOfAiSupplyChainPage = lazy(() => import('./components/pages/insights/StateOfAiSupplyChainPage'));
const DigitalUtilityTransformationPage = lazy(() => import('./components/pages/insights/DigitalUtilityTransformationPage'));
const AiInFinancialServicesPage = lazy(() => import('./components/pages/insights/AiInFinancialServicesPage'));
const CareersPage = lazy(() => import('./components/pages/CareersPage'));
const ContactPage = lazy(() => import('./components/pages/ContactPage'));
const FAQPage = lazy(() => import('./components/pages/FAQPage'));
const GenerativeAiPage = lazy(() => import('./components/pages/GenerativeAiPage'));
const InclusionPage = lazy(() => import('./components/pages/InclusionPage'));
const SustainabilityPage = lazy(() => import('./components/pages/SustainabilityPage'));
const AiForGoodPage = lazy(() => import('./components/pages/AiForGoodPage'));
const PrivacyPolicyPage = lazy(() => import('./components/pages/PrivacyPolicyPage'));
const CookiePolicyPage = lazy(() => import('./components/pages/CookiePolicyPage'));
const ResponsibleAiPage = lazy(() => import('./components/pages/ResponsibleAiPage'));
const SitemapPage = lazy(() => import('./components/pages/SitemapPage'));
const LeadershipPage = lazy(() => import('./components/pages/LeadershipPage'));
const PartnersPage = lazy(() => import('./components/pages/PartnersPage'));
const ValuesPage = lazy(() => import('./components/pages/ValuesPage'));
const TechnologyPage = lazy(() => import('./components/pages/TechnologyPage'));
const RetailPage = lazy(() => import('./components/pages/industries/RetailPage'));
const TransportationPage = lazy(() => import('./components/pages/industries/TransportationPage'));
const EnergyPage = lazy(() => import('./components/pages/industries/EnergyPage'));
const FinancePage = lazy(() => import('./components/pages/industries/FinancePage'));
const HealthPage = lazy(() => import('./components/pages/industries/HealthPage'));
const PublicSectorPage = lazy(() => import('./components/pages/industries/PublicSectorPage'));
const ManufacturingPage = lazy(() => import('./components/pages/industries/ManufacturingPage'));
const TelecommunicationsPage = lazy(() => import('./components/pages/industries/TelecommunicationsPage'));
const MediaPage = lazy(() => import('./components/pages/industries/MediaPage'));
const TravelHospitalityPage = lazy(() => import('./components/pages/industries/TravelHospitalityPage'));
const AiPage = lazy(() => import('./components/pages/solutions/AiPage'));
const DigitalEngineeringPage = lazy(() => import('./components/pages/solutions/DigitalEngineeringPage'));
const CloudPage = lazy(() => import('./components/pages/solutions/CloudPage'));
const PredictiveMaintenancePage = lazy(() => import('./components/pages/solutions/PredictiveMaintenancePage'));
const DigitalCommercePage = lazy(() => import('./components/pages/solutions/DigitalCommercePage'));
const SupplyChainPage = lazy(() => import('./components/pages/solutions/SupplyChainPage'));
const IntelligentAutomationPage = lazy(() => import('./components/pages/solutions/IntelligentAutomationPage'));
const DataAndAnalyticsPage = lazy(() => import('./components/pages/solutions/DataAndAnalyticsPage'));
const CybersecurityPage = lazy(() => import('./components/pages/solutions/CybersecurityPage'));
const AutonomousOperationsPage = lazy(() => import('./components/pages/solutions/AutonomousOperationsPage'));
const HowWeDoItPage = lazy(() => import('./components/pages/HowWeDoItPage'));
const ScrollProgressBar = lazy(() => import('./components/ui/ScrollProgressBar'));
const InsightModal = lazy(() => import('./components/ui/InsightModal'));
const SearchModal = lazy(() => import('./components/ui/SearchModal'));
const CookieConsent = lazy(() => import('./components/ui/CookieConsent'));
const ScrollToTopButton = lazy(() => import('./components/ui/ScrollToTopButton'));


// VELOCITY pages
const VisionPage = lazy(() => import('./components/pages/velocity/VisionPage'));
const EngineeringPage = lazy(() => import('./components/pages/velocity/EngineeringPage'));
const LogicPage = lazy(() => import('./components/pages/velocity/LogicPage'));
const OperationalizationPage = lazy(() => import('./components/pages/velocity/OperationalizationPage'));
const CollaborationPage = lazy(() => import('./components/pages/velocity/CollaborationPage'));
const IntelligencePage = lazy(() => import('./components/pages/velocity/IntelligencePage'));
const TrustPage = lazy(() => import('./components/pages/velocity/TrustPage'));
const YieldPage = lazy(() => import('./components/pages/velocity/YieldPage'));

// THRIVE pages
const ThrivePhilosophyPage = lazy(() => import('./components/pages/ThrivePhilosophyPage'));
const ThriveTechnologyPage = lazy(() => import('./components/pages/thrive/TechnologyPage'));
const ThriveHumanityPage = lazy(() => import('./components/pages/thrive/HumanityPage'));
const ThriveResultsPage = lazy(() => import('./components/pages/thrive/ResultsPage'));
const ThriveInnovationPage = lazy(() => import('./components/pages/thrive/InnovationPage'));
const ThriveValiantPage = lazy(() => import('./components/pages/thrive/ValiantPage'));
const ThriveExceptionalPage = lazy(() => import('./components/pages/thrive/ExceptionalPage'));


export interface Content {
  id: string;
  title: string;
  category: string;
  content: string;
}

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const InterestTracker: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    try {
      const consent = localStorage.getItem('akin_cookie_preferences');
      if (!consent) return;

      const prefs = JSON.parse(consent);
      // Track if functional or performance cookies are allowed
      if (!prefs.functional && !prefs.performance) {
        return;
      }

      const path = location.pathname;
      let interest: string | null = null;
      
      const industryPrefix = '/industries/';
      const solutionPrefix = '/solutions/';

      if (path.startsWith(industryPrefix)) {
        interest = path.substring(industryPrefix.length);
      } else if (path.startsWith(solutionPrefix)) {
        interest = path.substring(solutionPrefix.length);
      }

      if (interest) {
        const interests: { [key: string]: number } = JSON.parse(localStorage.getItem('userInterests') || '{}');
        // store the slug-like interest
        interests[interest] = (interests[interest] || 0) + 1;
        localStorage.setItem('userInterests', JSON.stringify(interests));
      }
    } catch (error) {
      console.error("Could not access localStorage for interest tracking:", error);
    }
  }, [location]);

  return null;
};

const App: React.FC = () => {
  const [isReady, setIsReady] = useState(false);
  const [activeContent, setActiveContent] = useState<Content | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleOpenContent = (content: Content) => {
    setActiveContent(content);
  };

  const handleCloseContent = () => {
    setActiveContent(null);
  };

  const handleSearchOpen = () => setIsSearchOpen(true);
  const handleSearchClose = () => setIsSearchOpen(false);
  
  useEffect(() => {
    const preloader = document.getElementById('preloader');
    const percentageEl = document.getElementById('preloader-percentage');
    const logoPaths = document.querySelectorAll<SVGPathElement>('#preloader-logo path');

    if (!preloader || !percentageEl) {
        setIsReady(true);
        return;
    }

    if (logoPaths.length > 0) {
        logoPaths.forEach((path) => {
            const length = path.getTotalLength();
            path.style.strokeDasharray = `${length}`;
            path.style.strokeDashoffset = `${length}`;
        });
        setTimeout(() => {
            logoPaths.forEach((path, index) => {
                path.style.transition = `stroke-dashoffset 1.5s ${index * 0.3}s ease-in-out`;
                path.style.strokeDashoffset = '0';
            });
        }, 100);
    }

    let percentage = 0;
    const interval = setInterval(() => {
        percentage++;
        percentageEl.textContent = `${percentage}%`;

        if (percentage >= 100) {
            clearInterval(interval);
            preloader.classList.add('loaded');
            
            const onTransitionEnd = () => {
                if(document.body.contains(preloader)) {
                    preloader.remove();
                }
                setIsReady(true);
            };
            
            preloader.addEventListener('transitionend', onTransitionEnd, { once: true });

            setTimeout(() => {
                if (document.body.contains(preloader)) {
                    preloader.remove();
                }
                setIsReady(true);
            }, 600);
        }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <HashRouter>
        <>
          <InterestTracker />
          <Suspense fallback={null}>
            <ScrollProgressBar />
          </Suspense>
          <ScrollToTop />
          <div className={`flex flex-col min-h-screen bg-white text-charcoal transition-opacity duration-500 ${isReady ? 'opacity-100' : 'opacity-0'}`}>
            <Header onSearchOpen={handleSearchOpen} />
            <main className="flex-grow">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<HomePage onSolutionClick={handleOpenContent} />} />
                  <Route path="/platform" element={<PlatformPage />} />
                  <Route path="/industries" element={<IndustriesPage />} />
                  <Route path="/solutions" element={<SolutionsPage />} />
                  <Route path="/how-we-do-it" element={<HowWeDoItPage />} />
                  <Route path="/velocity-approach" element={<VelocityApproachPage />} />
                  <Route path="/client-stories" element={<ClientStoriesPage />} />
                  <Route path="/insights" element={<InsightsPage onInsightClick={handleOpenContent} />} />
                  <Route path="/insights/thrive-index" element={<ThriveIndexPage />} />
                  <Route path="/insights/state-of-ai-supply-chain" element={<StateOfAiSupplyChainPage />} />
                  <Route path="/insights/digital-utility-transformation" element={<DigitalUtilityTransformationPage />} />
                  <Route path="/insights/ai-in-financial-services" element={<AiInFinancialServicesPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/generative-ai" element={<GenerativeAiPage />} />
                  <Route path="/inclusion" element={<InclusionPage />} />
                  <Route path="/sustainability" element={<SustainabilityPage />} />
                  <Route path="/ai-for-good" element={<AiForGoodPage />} />
                  <Route path="/careers" element={<CareersPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/faq" element={<FAQPage />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                  <Route path="/cookie-policy" element={<CookiePolicyPage />} />
                  <Route path="/responsible-ai" element={<ResponsibleAiPage />} />
                  <Route path="/sitemap" element={<SitemapPage />} />
                  <Route path="/leadership" element={<LeadershipPage />} />
                  <Route path="/partners" element={<PartnersPage />} />
                  <Route path="/values" element={<ValuesPage />} />
                  <Route path="/technology" element={<TechnologyPage />} />
                  <Route path="/industries/retail-consumer-products" element={<RetailPage />} />
                  <Route path="/industries/transportation-mobility" element={<TransportationPage />} />
                  <Route path="/industries/energy-commodities" element={<EnergyPage />} />
                  <Route path="/industries/financial-services" element={<FinancePage />} />
                  <Route path="/industries/health-life-sciences" element={<HealthPage />} />
                  <Route path="/industries/public-sector" element={<PublicSectorPage />} />
                  <Route path="/industries/manufacturing" element={<ManufacturingPage />} />
                  <Route path="/industries/telecommunications" element={<TelecommunicationsPage />} />
                  <Route path="/industries/media" element={<MediaPage />} />
                  <Route path="/industries/travel-hospitality" element={<TravelHospitalityPage />} />
                  
                  {/* Rewritten Solution Pages */}
                  <Route path="/solutions/ai-cognitive-intelligence" element={<AiPage />} />
                  <Route path="/solutions/digital-engineering" element={<DigitalEngineeringPage />} />
                  <Route path="/solutions/cloud-infrastructure" element={<CloudPage />} />
                  <Route path="/solutions/digital-commerce" element={<DigitalCommercePage />} />
                  <Route path="/solutions/supply-chain" element={<SupplyChainPage />} />
                  <Route path="/solutions/intelligent-automation" element={<IntelligentAutomationPage />} />
                  <Route path="/solutions/data-analytics" element={<DataAndAnalyticsPage />} />
                  <Route path="/solutions/cybersecurity" element={<CybersecurityPage />} />
                  <Route path="/solutions/predictive-maintenance" element={<PredictiveMaintenancePage />} />
                  <Route path="/solutions/autonomous-operations" element={<AutonomousOperationsPage />} />

                  {/* VELOCITY Pages */}
                  <Route path="/velocity/vision" element={<VisionPage />} />
                  <Route path="/velocity/engineering" element={<EngineeringPage />} />
                  <Route path="/velocity/logic" element={<LogicPage />} />
                  <Route path="/velocity/operationalization" element={<OperationalizationPage />} />
                  <Route path="/velocity/collaboration" element={<CollaborationPage />} />
                  <Route path="/velocity/intelligence" element={<IntelligencePage />} />
                  <Route path="/velocity/trust" element={<TrustPage />} />
                  <Route path="/velocity/yield" element={<YieldPage />} />

                  {/* THRIVE Pages */}
                  <Route path="/thrive" element={<ThrivePhilosophyPage />} />
                  <Route path="/thrive/technology" element={<ThriveTechnologyPage />} />
                  <Route path="/thrive/humanity" element={<ThriveHumanityPage />} />
                  <Route path="/thrive/results" element={<ThriveResultsPage />} />
                  <Route path="/thrive/innovation" element={<ThriveInnovationPage />} />
                  <Route path="/thrive/valiant" element={<ThriveValiantPage />} />
                  <Route path="/thrive/exceptional" element={<ThriveExceptionalPage />} />

                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
          <Suspense fallback={null}>
            <InsightModal content={activeContent} onClose={handleCloseContent} />
          </Suspense>
          <Suspense fallback={null}>
            <SearchModal isOpen={isSearchOpen} onClose={handleSearchClose} />
          </Suspense>
          <Suspense fallback={null}>
            <CookieConsent />
          </Suspense>
          <Suspense fallback={null}>
            <ScrollToTopButton />
          </Suspense>
        </>
    </HashRouter>
  );
};

export default App;
