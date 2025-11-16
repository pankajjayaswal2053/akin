

import React from 'react';
import Hero from '../ui/Hero';
import { Link } from 'react-router-dom';

const industryLinks = [
  { name: 'Manufacturing', href: '/industries/manufacturing', isSub: true },
  { name: 'Retail & Consumer Products', href: '/industries/retail-consumer-products', isSub: true },
  { name: 'Transportation & Mobility', href: '/industries/transportation-mobility', isSub: true },
  { name: 'Energy & Commodities', href: '/industries/energy-commodities', isSub: true },
  { name: 'Financial Services', href: '/industries/financial-services', isSub: true },
  { name: 'Health & Life Sciences', href: '/industries/health-life-sciences', isSub: true },
  { name: 'Telecommunications', href: '/industries/telecommunications', isSub: true },
  { name: 'Media', href: '/industries/media', isSub: true },
  { name: 'Travel & Hospitality', href: '/industries/travel-hospitality', isSub: true },
  { name: 'Public Sector', href: '/industries/public-sector', isSub: true },
];

const solutionLinks = [
  { name: 'Artificial Intelligence', href: '/solutions/artificial-intelligence', isSub: true },
  { name: 'Digital Engineering', href: '/solutions/digital-engineering', isSub: true },
  { name: 'Cloud & Infrastructure', href: '/solutions/cloud-infrastructure', isSub: true },
  { name: 'Experience Transformation', href: '/solutions/experience-transformation', isSub: true },
  { name: 'Digital Commerce', href: '/solutions/digital-commerce', isSub: true },
  { name: 'Supply Chain', href: '/solutions/supply-chain', isSub: true },
];

const velocityLinks = [
  { name: 'Vision & Strategy', href: '/velocity-approach/vision', isSub: true },
  { name: 'Engineering & Integration', href: '/velocity-approach/engineering', isSub: true },
  { name: 'Logic & Modeling', href: '/velocity-approach/logic', isSub: true },
  { name: 'Operationalize & Deploy', href: '/velocity-approach/operationalize', isSub: true },
  { name: 'Collaborate', href: '/velocity-approach/collaborate', isSub: true },
  { name: 'Evolve', href: '/velocity-approach/evolve', isSub: true },
];


const sitemapLinks = {
  whoWeAre: [
    { name: 'About Akin', href: '/about' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'Our Values', href: '/values' },
    { name: 'Careers', href: '/careers' },
  ],
  whatWeDo: [
    { name: 'Platform', href: '/platform' },
    { name: 'Our Technology', href: '/technology' },
    { name: 'Generative AI', href: '/generative-ai' },
    { name: 'Our Partners', href: '/partners' },
    { name: 'Industries', href: '/industries' },
    ...industryLinks,
    { name: 'Solutions', href: '/solutions' },
    ...solutionLinks,
  ],
  howWeDo: [
    { name: 'VELOCITY Approach', href: '/velocity-approach' },
    ...velocityLinks,
    { name: 'Our Methodology', href: '/methodology' },
    { name: 'Client Stories', href: '/client-stories' },
    { name: 'FAQ', href: '/faq' },
  ],
  ourThinking: [
    { name: 'Insights Hub', href: '/insights' },
    { name: 'The Thrive Index', href: '/insights/thrive-index' },
  ],
  ourCommitments: [
    { name: 'Responsible AI & Trust', href: '/responsible-ai' },
    { name: 'Inclusion & Diversity', href: '/inclusion' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'AI for Good', href: '/ai-for-good' },
  ],
  general: [
      { name: 'Home', href: '/' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Cookie Policy', href: '/cookie-policy' },
  ]
};

const SitemapSection: React.FC<{ title: string; links: { name: string; href: string; isSub?: boolean }[] }> = ({ title, links }) => (
  <div>
    <h3 className="text-base font-semibold text-charcoal tracking-wider uppercase">{title}</h3>
    <ul className="mt-4 space-y-3">
      {links.map((item) => (
        <li key={item.name} className={item.isSub ? 'ml-4' : ''}>
          <Link to={item.href} className="text-base text-charcoal-light hover:text-electric-blue transition-colors">{item.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const SitemapPage: React.FC = () => {
  return (
    <div>
      <Hero
        title="Sitemap"
        subtitle="An overview of our website. Find exactly what you're looking for."
      />
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <SitemapSection title="Who We Are" links={sitemapLinks.whoWeAre} />
          <SitemapSection title="What We Do" links={sitemapLinks.whatWeDo} />
          <SitemapSection title="How We Do" links={sitemapLinks.howWeDo} />
          <SitemapSection title="Our Thinking" links={sitemapLinks.ourThinking} />
          <SitemapSection title="Our Commitments" links={sitemapLinks.ourCommitments} />
          <SitemapSection title="General" links={sitemapLinks.general} />
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;