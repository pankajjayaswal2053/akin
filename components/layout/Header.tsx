
import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import AkinLogo from '../ui/AkinLogo';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ChevronDownIcon, ArrowRightIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import Button from '../ui/Button';

// Data for Industries
const industryLinks = [
  { name: 'Manufacturing', href: '/industries/manufacturing' },
  { name: 'Retail & Consumer Products', href: '/industries/retail-consumer-products' },
  { name: 'Transportation & Mobility', href: '/industries/transportation-mobility' },
  { name: 'Energy & Commodities', href: '/industries/energy-commodities' },
  { name: 'Financial Services', href: '/industries/financial-services' },
  { name: 'Health & Life Sciences', href: '/industries/health-life-sciences' },
  { name: 'Telecommunications', href: '/industries/telecommunications' },
  { name: 'Media', href: '/industries/media' },
  { name: 'Travel & Hospitality', href: '/industries/travel-hospitality' },
  { name: 'Public Sector', href: '/industries/public-sector' },
];

// Data for Solutions - UPDATED
const solutionLinks = [
  { name: 'AI & Cognitive Intelligence', href: '/solutions/ai-cognitive-intelligence' },
  { name: 'Intelligent Automation', href: '/solutions/intelligent-automation' },
  { name: 'Data & Analytics Modernization', href: '/solutions/data-analytics' },
  { name: 'Digital Engineering', href: '/solutions/digital-engineering' },
  { name: 'Cloud & Infrastructure Engineering', href: '/solutions/cloud-infrastructure' },
  { name: 'Cybersecurity & AI Trust', href: '/solutions/cybersecurity' },
  { name: 'Autonomous Operations', href: '/solutions/autonomous-operations' },
  { name: 'Predictive Maintenance', href: '/solutions/predictive-maintenance' },
  { name: 'Digital Commerce Intelligence', href: '/solutions/digital-commerce' },
  { name: 'Supply Chain Optimization', href: '/solutions/supply-chain' },
];

const velocityLinks = [
  { name: 'V – Vision Architecture', href: '/velocity/vision' },
  { name: 'E – Engineering the Core', href: '/velocity/engineering' },
  { name: 'L – Logic & Cognitive Intelligence', href: '/velocity/logic' },
  { name: 'O – Operationalization at Scale', href: '/velocity/operationalization' },
  { name: 'C – Collaboration & Co-Ownership', href: '/velocity/collaboration' },
  { name: 'I – Intelligence Expansion', href: '/velocity/intelligence' },
  { name: 'T – Trust & Governance', href: '/velocity/trust' },
  { name: 'Y – Yield & Value Realization', href: '/velocity/yield' },
];

const platformLinks = [
    { name: 'The Akin Platform', href: '/platform' },
    { name: 'Our Technology', href: '/technology' },
    { name: 'Generative AI', href: '/generative-ai' },
    { name: 'Our Partners', href: '/partners' },
];

const thriveLinks = [
    { name: 'T – Technology', href: '/thrive/technology' },
    { name: 'H – Humanity', href: '/thrive/humanity' },
    { name: 'R – Results', href: '/thrive/results' },
    { name: 'I – Innovation', href: '/thrive/innovation' },
    { name: 'V – Valiant', href: '/thrive/valiant' },
    { name: 'E – Exceptional', href: '/thrive/exceptional' },
];


type NavLinkInfo = { name: string; href: string };

type NavigationItem = {
    name: string;
    href?: string; // Optional top-level link
    isMega?: boolean;
    columns?: {
        name: string;
        href?: string;
        description: string;
        links: NavLinkInfo[];
    }[];
    links?: NavLinkInfo[];
};


const navigation: NavigationItem[] = [
  {
    name: 'Who We Are',
    href: '/about',
    isMega: true,
    columns: [
      {
        name: 'Our Identity',
        href: '/about',
        description: "Our mission, purpose, and the proof of our impact.",
        links: [
          { name: 'About Akin', href: '/about' },
          { name: 'Leadership', href: '/leadership' },
          { name: 'Client Stories', href: '/client-stories' },
        ]
      },
      {
        name: 'Our Culture',
        href: '/careers',
        description: "The principles that guide us and the community we're building.",
        links: [
          { name: 'Careers at Akin', href: '/careers' },
          { name: 'Our Values', href: '/values' },
          { name: 'Inclusion & Diversity', href: '/inclusion' },
        ]
      },
      {
        name: 'Our Commitments',
        description: "How we build trustworthy, sustainable, and equitable technology.",
        links: [
          { name: 'Responsible AI & Trust', href: '/responsible-ai' },
          { name: 'Sustainability', href: '/sustainability' },
          { name: 'AI for Good', href: '/ai-for-good' },
        ],
      }
    ]
  },
  {
    name: 'What We Do',
    isMega: true,
    columns: [
      {
        name: 'Industries',
        href: '/industries',
        links: industryLinks,
        description: "Bespoke AI for your sector's unique challenges."
      },
      {
        name: 'Solutions',
        href: '/solutions',
        links: solutionLinks,
        description: 'Our core capabilities, from AI to infrastructure.'
      }
    ]
  },
  {
    name: 'How We Do It',
    href: '/how-we-do-it',
    isMega: true,
    columns: [
        {
            name: 'The Akin Platform',
            href: '/platform',
            links: platformLinks,
            description: 'What we build: The technology core for your cognitive enterprise.'
        },
        {
            name: 'VELOCITY™ Operating Model',
            href: '/velocity-approach',
            links: velocityLinks,
            description: 'How we build: Our proprietary 8-phase model for delivering operational AI.'
        },
        {
            name: 'THRIVE Philosophy',
            href: '/thrive',
            links: thriveLinks,
            description: 'Why we build this way: Our architectural philosophy for enduring intelligence.'
        }
    ]
  },
  {
    name: 'Our Thinking',
    href: '/insights',
    isMega: true,
    columns: [
      {
        name: 'Perspectives on AI',
        href: '/insights',
        description: "Our latest research, analysis, and frameworks on the future of operational AI.",
        links: [
          { name: 'Insights Hub', href: '/insights' },
          { name: 'The Thrive Index', href: '/insights/thrive-index' },
          { name: 'FAQ', href: '/faq' },
        ],
      },
      {
        name: 'Industry Intelligence',
        href: '/industries',
        description: "Our take on the unique challenges and AI opportunities within key sectors.",
        links: [
          { name: 'Report: State of AI in Supply Chain', href: '/insights/state-of-ai-supply-chain' },
          { name: 'Analysis: The Digital Utility Transformation', href: '/insights/digital-utility-transformation' },
          { name: 'Viewpoint: AI in Financial Services', href: '/insights/ai-in-financial-services' },
          { name: 'Explore All Industries', href: '/industries' },
        ]
      }
    ]
  },
];

interface HeaderProps {
  onSearchOpen: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearchOpen }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
    // FIX: Use ReturnType<typeof setTimeout> to get the correct type for the timer ID
    // in both browser and Node.js environments, resolving the 'Timeout' member error.
    const menuCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const headerRef = useRef<HTMLElement>(null);
    
    const activeCategory = hoveredMenu ? navigation.find(cat => cat.name === hoveredMenu) : null;

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
        setHoveredMenu(null);
    }, [location.pathname]);

    useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          setHoveredMenu(null);
          setMobileMenuOpen(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const handleMenuEnter = (categoryName: string) => {
        if (menuCloseTimer.current) clearTimeout(menuCloseTimer.current);
        setHoveredMenu(categoryName);
    };

    const handleMenuLeave = () => {
        menuCloseTimer.current = setTimeout(() => {
            setHoveredMenu(null);
        }, 200); // 200ms delay to allow moving to the menu
    };

    const inactiveLinkClass = (isScrolled: boolean) => `transition-colors ${isScrolled ? 'text-charcoal hover:text-charcoal hover:underline decoration-electric-blue decoration-2 underline-offset-4' : 'text-stone hover:opacity-80'}`;
    
    const menuVariants: Variants = {
        hidden: { opacity: 0, y: -10, pointerEvents: 'none', transition: { duration: 0.2, ease: 'easeOut' } },
        visible: { opacity: 1, y: 0, pointerEvents: 'auto', transition: { duration: 0.3, ease: 'easeOut' } },
    };

    return (
    <>
        <header ref={headerRef} className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm border-b border-gray-200/80 shadow-md' : 'bg-transparent'}`}>
        <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
                <Link to="/" aria-label="Akin Technology Home">
                <AkinLogo variant={isScrolled ? 'light' : 'dark'} className="h-8 transition-all duration-300" />
                </Link>
            </div>
            <div className="hidden md:flex items-baseline space-x-6">
                {navigation.map((category) => (
                <div key={category.name} className="relative" onMouseEnter={() => handleMenuEnter(category.name)} onMouseLeave={handleMenuLeave}>
                    <NavLink
                        to={category.href || '#'}
                        onClick={(e) => !category.href && e.preventDefault()}
                        className={({isActive}) => `font-medium px-1 py-2 text-sm flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${isScrolled ? 'focus-visible:ring-offset-white' : 'focus-visible:ring-offset-charcoal'} focus-visible:ring-electric-blue rounded-sm ${isActive && category.href ? 'underline decoration-electric-blue decoration-2 underline-offset-4' : ''} ${inactiveLinkClass(isScrolled)}`}
                    >
                        {category.name}
                        {category.isMega && <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${hoveredMenu === category.name ? 'rotate-180' : ''}`} aria-hidden="true"/>}
                    </NavLink>
                </div>
                ))}
            </div>
            <div className="hidden md:flex items-center">
                <button
                    onClick={onSearchOpen}
                    className={`p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-electric-blue transition-colors ${isScrolled ? 'text-gray-600 hover:bg-gray-100 focus-visible:ring-offset-white' : 'text-stone hover:bg-white/10 focus-visible:ring-offset-charcoal'}`}
                    aria-label="Open search"
                >
                    <MagnifyingGlassIcon className="h-5 w-5" />
                </button>
                <Button to="/contact" primary={isScrolled} className={`ml-4 ${!isScrolled && '!text-stone !border-stone hover:!bg-stone hover:!text-charcoal'}`}>
                    Contact Us
                </Button>
            </div>
            <div className="-mr-2 flex md:hidden items-center">
                <button
                    onClick={onSearchOpen}
                    className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-electric-blue ${isScrolled ? 'text-gray-600' : 'text-stone'}`}
                    aria-label="Open search"
                >
                    <MagnifyingGlassIcon className="h-6 w-6" />
                </button>
                <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                type="button"
                className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-electric-blue ${isScrolled ? 'text-gray-600' : 'text-stone'}`}
                aria-controls="mobile-menu"
                aria-expanded={mobileMenuOpen}
                >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                )}
                </button>
            </div>
            </div>
        </nav>
        {activeCategory?.isMega && (
            <AnimatePresence>
                {hoveredMenu === activeCategory.name && (
                <motion.div
                    id={`mega-menu-${activeCategory.name.replace(/\s+/g, '-')}`}
                    variants={menuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200"
                    onMouseEnter={() => handleMenuEnter(activeCategory.name)}
                    onMouseLeave={handleMenuLeave}
                >
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8 py-8">
                    {activeCategory.columns?.map((column) => (
                        <div key={column.name}>
                        <Link 
                            to={column.href || '#'} 
                            className={`font-bold text-charcoal mb-4 block ${column.href ? 'hover:text-electric-blue focus:outline-none focus-visible:text-electric-blue' : 'cursor-default'}`}
                            onClick={() => setHoveredMenu(null)}
                            tabIndex={!column.href ? -1 : undefined}
                        >
                            {column.name}
                        </Link>
                        <p className="text-sm text-charcoal-light mb-4 h-12">{column.description}</p>
                        <ul className="space-y-3">
                            {column.links.map((item) => (
                            <li key={item.name}>
                                <NavLink
                                to={item.href}
                                className={({ isActive }) => `flex items-center gap-2 text-sm ${isActive ? 'text-electric-blue' : 'text-charcoal'} hover:text-electric-blue group focus:outline-none focus-visible:ring-1 focus-visible:ring-electric-blue rounded-sm`}
                                onClick={() => setHoveredMenu(null)}
                                >
                                <ArrowRightIcon className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                                {item.name}
                                </NavLink>
                            </li>
                            ))}
                        </ul>
                        </div>
                    ))}
                    </div>
                </motion.div>
                )}
            </AnimatePresence>
        )}
        </header>
    </>
    );
};
