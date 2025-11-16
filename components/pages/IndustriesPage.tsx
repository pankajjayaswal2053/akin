
import React from 'react';
import Hero from '../ui/Hero';
import Card from '../ui/Card';
import Section from '../layout/Section';
import SectionHeader from '../ui/SectionHeader';
import { BuildingStorefrontIcon, TruckIcon, BoltIcon, BanknotesIcon, HeartIcon, CpuChipIcon, SignalIcon, TvIcon, BuildingOffice2Icon, UserGroupIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useSEO } from '../seo/useSEO';

const industries = [
    {
        name: 'Intelligent Manufacturing',
        description: 'From predictive maintenance to automated quality control, we build the digital twin of your factory floor.',
        icon: CpuChipIcon,
        href: '/industries/manufacturing'
    },
    {
        name: 'Resilient Supply Chain',
        description: 'Architecting intelligent mobility with AI operating systems that power next-gen logistics networks.',
        icon: TruckIcon,
        href: '/industries/transportation-mobility'
    },
    {
        name: 'AI-Driven Finance & Risk',
        description: 'Navigate market volatility and complex regulatory landscapes with a real-time, holistic view of risk.',
        icon: BanknotesIcon,
        href: '/industries/financial-services'
    },
    {
        name: 'The Digital Utility',
        description: 'Powering the digital utility with AI operating systems for grid resilience and predictive asset management.',
        icon: BoltIcon,
        href: '/industries/energy-commodities'
    },
    {
        name: 'The Cognitive Retail Enterprise',
        description: 'Where customer demand, supply, and inventory operate as one intelligent system.',
        icon: BuildingStorefrontIcon,
        href: '/industries/retail-consumer-products'
    },
    {
        name: 'Predictive Health & Life Sciences',
        description: 'Accelerating the future of health with secure, intelligent platforms that turn data into life-saving insights.',
        icon: HeartIcon,
        href: '/industries/health-life-sciences'
    },
    {
        name: 'The Cognitive Network',
        description: 'Architecting the cognitive network that optimizes performance and enhances customer experience for the 5G era.',
        icon: SignalIcon,
        href: '/industries/telecommunications'
    },
    {
        name: 'Intelligent Media & Entertainment',
        description: 'Engineering the future of content with platforms that power audience engagement and personalization.',
        icon: TvIcon,
        href: '/industries/media'
    },
    {
        name: 'Intelligent Travel & Hospitality',
        description: 'Architecting an AI core that powers personalized guest experiences and dynamic revenue management.',
        icon: BuildingOffice2Icon,
        href: '/industries/travel-hospitality'
    },
    {
        name: 'Intelligent Public Sector',
        description: 'Partnering with agencies to build intelligent digital infrastructure for modern, efficient civic services.',
        icon: UserGroupIcon,
        href: '/industries/public-sector'
    },
];

const IndustriesPage: React.FC = () => {
    useSEO({
        title: 'Architected Intelligence for Every Sector',
        description: 'A unified cognitive core adapted to the realities of each industry. Explore how Akin applies a single architectural intelligence framework across different sectors.',
        keywords: 'industries, manufacturing, supply chain, finance, energy, retail, health, telecom, public sector'
    });

  return (
    <div className="bg-white">
        <Hero
            breadcrumb="INDUSTRIES"
            title="Architected Intelligence for Every Sector."
            subtitle="A unified cognitive core adapted to the realities of each industry."
        />

        <Section tone="soft">
            <div className="max-w-4xl mx-auto text-center">
                <SectionHeader
                    eyebrow="THE PROPOSITION"
                    title="Deep domain understanding. Real operational impact."
                    description="Every industry faces unique pressures — regulatory depth, operational rigidity, real-time constraints. Akin’s platform adapts to each through a single, unified cognitive architecture."
                    align="center"
                    maxWidth="lg"
                />
            </div>
        </Section>

        <Section tone="light">
            <div className="grid md:grid-cols-2 gap-8">
                {industries.map(industry => (
                    <Link to={industry.href} key={industry.name} className="block group">
                        <Card className="h-full flex flex-col">
                            <div className="flex items-start gap-4">
                                <industry.icon className="h-8 w-8 text-electric-blue flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-charcoal-light">INDUSTRY</p>
                                    <h3 className="text-xl font-bold text-charcoal">{industry.name}</h3>
                                </div>
                            </div>
                            <p className="mt-3 text-charcoal-light flex-grow">{industry.description}</p>
                            <div className="mt-4 pt-4 border-t border-gray-200/80">
                                <span className="font-semibold text-electric-blue flex items-center gap-2 transition-transform group-hover:translate-x-1">
                                    Explore
                                    <ArrowRightIcon className="h-4 w-4" />
                                </span>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
        </Section>
    </div>
  );
};

export default IndustriesPage;
