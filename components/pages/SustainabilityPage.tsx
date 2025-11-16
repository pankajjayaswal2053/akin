import React from 'react';
import Hero from '../ui/Hero';
import CallToActionSection from '../ui/CallToActionSection';
import Card from '../ui/Card';
import { motion } from 'framer-motion';
import OptimizedImage from '../ui/OptimizedImage';
import {
    PuzzlePieceIcon,
    TruckIcon,
    ShieldExclamationIcon,
    CpuChipIcon,
    SparklesIcon,
    SunIcon,
    ShareIcon,
    ClipboardDocumentCheckIcon,
    ShieldCheckIcon
} from '@heroicons/react/24/outline';

const risks = [
    {
        icon: PuzzlePieceIcon,
        title: 'Data Silos & "Spreadsheet ESG"',
        description: "Your carbon data is in one system, supplier audits in another, and operational data somewhere else. It's impossible to get a real-time, auditable view, leading to high-risk guesswork."
    },
    {
        icon: TruckIcon,
        title: 'Supply Chain Blind Spots',
        description: "You have no real visibility beyond your Tier 1 suppliers, making it impossible to truly manage your Scope 3 emissions, climate risk, or ethical sourcing deep in your supply chain."
    },
    {
        icon: ShieldExclamationIcon,
        title: 'Critical "Greenwashing" Risk',
        description: "Without a single, verifiable source of truth, your ESG reports are good-faith estimates, not auditable facts. This creates significant regulatory, investor, and reputational risk."
    }
];

const platformSolutions = [
    {
        title: 'A Single Source of Truth',
        description: "We build your Unified Ontology to connect your financial, operational, and ESG data. For the first time, you can see the carbon footprint *of a specific product*, the water usage *of a specific factory*, and the labor audit *of a specific supplier*—all in one place."
    },
    {
        title: 'Cognitive Agents for Sustainability',
        description: "We deploy AI agents that reason over your ontology to find opportunities. They can simulate the carbon impact of new materials, identify energy-saving opportunities, and automatically flag high-risk suppliers in real-time."
    }
];

const outcomes = [
    {
        icon: SunIcon,
        title: 'Accelerate Your Path to Net-Zero',
        description: "We build the platform to unify your Scope 1, 2, and 3 emissions data. Our agents model and identify the fastest, most cost-effective paths to decarbonize your operations and products."
    },
    {
        icon: ShieldCheckIcon,
        title: 'Build Supply Chain Resilience',
        description: "We create a digital twin of your multi-tier supply chain. This enables AI to predict climate and geopolitical disruptions, ensure ethical sourcing, and manage risk before it impacts your bottom line."
    },
    {
        icon: ClipboardDocumentCheckIcon,
        title: 'Automate Audits & Reporting',
        description: "Move beyond manual data calls. Our platform provides a single, auditable 'golden record' for all ESG data, mapped to global standards (e.g., CSRD, TCFD, SEC) for 'push-button' reporting."
    }
];

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const, staggerChildren: 0.2 },
    },
};
  
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SustainabilityPage: React.FC = () => {
    return (
        <div>
            <Hero
                breadcrumb="Our Philosophy & Impact"
                title="From Sustainability Pledges to Operational Reality"
                subtitle="We architect your Cognitive Agent Platform to unify ESG data, decarbonize operations, and build a transparent, resilient supply chain for a new era of business."
            />

            <div className="bg-white">
                <motion.section 
                    className="py-20 md:py-32 bg-stone"
                    variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-extrabold text-charcoal">The Challenge: ESG Can't Be Managed in Spreadsheets</h2>
                            <p className="mt-4 max-w-3xl mx-auto text-lg text-charcoal-light">
                                Organizations face immense pressure from regulators, investors, and customers to decarbonize and build resilient operations. But they are blocked by fragmented data and disconnected systems.
                            </p>
                        </div>
                        <div className="mt-16 grid md:grid-cols-3 gap-8 text-left">
                            {risks.map(risk => (
                                <motion.div key={risk.title} variants={itemVariants}>
                                    <Card className="h-full">
                                        <risk.icon className="h-10 w-10 text-red-500 mb-4" />
                                        <h3 className="text-xl font-bold text-charcoal">{risk.title}</h3>
                                        <p className="mt-2 text-charcoal-light">{risk.description}</p>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                <section className="py-20 md:py-32">
                     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
                            <h2 className="text-3xl font-extrabold text-charcoal tracking-tight sm:text-4xl">
                               The Solution: Your Unified ESG Core
                            </h2>
                            <p className="mt-6 text-lg text-charcoal-light">
                              Our Cognitive Agent Platform is the technical foundation for a credible, high-impact ESG and Resilience program.
                            </p>
                            <div className="mt-8 space-y-6">
                                {platformSolutions.map(solution => (
                                    <div key={solution.title}>
                                        <h3 className="text-xl font-bold text-charcoal">{solution.title}</h3>
                                        <p className="mt-2 text-charcoal-light">{solution.description}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                         <motion.div
                            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: 'easeOut' }}
                         >
                            <OptimizedImage 
                                src="/images/solution-esg-ontology.jpg" 
                                alt="A digital twin of a supply chain showing ESG data connections" 
                                width={640} height={427}
                                className="rounded-lg shadow-xl" 
                            />
                         </motion.div>
                    </div>
                </section>

                <motion.section 
                    className="py-20 md:py-32 bg-stone"
                    variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-extrabold text-charcoal">From Data to Measurable Impact</h2>
                            <p className="mt-4 max-w-3xl mx-auto text-lg text-charcoal-light">
                                By connecting ESG data to your core operations, our platform delivers auditable, strategic outcomes.
                            </p>
                        </div>
                        <div className="mt-16 grid md:grid-cols-3 gap-8 text-left">
                            {outcomes.map(item => (
                                <motion.div key={item.title} variants={itemVariants}>
                                    <Card className="h-full">
                                        <item.icon className="h-10 w-10 text-electric-blue mb-4" />
                                        <h3 className="text-xl font-bold text-charcoal">{item.title}</h3>
                                        <p className="mt-2 text-charcoal-light">{item.description}</p>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                <section className="py-20 md:py-24">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-extrabold text-charcoal">Our Own Commitment</h2>
                        <p className="mt-4 text-lg text-charcoal-light">
                            We practice what we architect. We are committed to running a responsible business by minimizing our own footprint, promoting remote-first work, and partnering with suppliers who share our values.
                        </p>
                    </div>
                </section>
            </div>

            <CallToActionSection
                title="Turn Sustainability into a Competitive Advantage"
                subtitle="Let's discuss how our Cognitive Agent Platform can help you de-risk your operations, build resilience, and create verifiable, positive impact."
                buttonText="Architect Your ESG Strategy"
                buttonLink="/contact"
            />
        </div>
    );
};

export default SustainabilityPage;
