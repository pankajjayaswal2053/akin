import React from 'react';
import Card from '../ui/Card';
import Hero from '../ui/Hero';
import ThriveScoreCalculator from '../ui/ThriveScoreCalculator';
import CallToActionSection from '../ui/CallToActionSection';
import { motion } from 'framer-motion';
import { ClipboardDocumentCheckIcon, RocketLaunchIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

const pillars = [
  { name: 'Technology', points: 100, items: ['Core Infrastructure & Platforms (25)', 'Intelligent Automation & AI Integration (45)', 'Cybersecurity & Digital Resilience (30)'], icon: '/images/icons/technology.png' },
  { name: 'Humanity', points: 100, items: ['Holistic Well-being & Support (30)', 'DEIB & Empowered Culture (40)', 'Dynamic Talent Development (30)'], icon: '/images/icons/humanity.png' },
  { name: 'Results', points: 100, items: ['Financial Health & Profitability (50)', 'Market Position & Competitiveness (30)', 'Next-Gen Operational Efficiency (20)'], icon: '/images/icons/results.png' },
  { name: 'Innovation', points: 100, items: ['Innovation Engine & R&D (40)', 'Culture of Continuous Experimentation (30)', 'Strategic Adaptability & Agility (30)'], icon: '/images/icons/innovation.png' },
  { name: 'Valiant', points: 100, items: ['Clarity & Boldness of Vision (40)', 'Ethical Leadership & Governance (30)', 'Strategic Foresight & Risk-Taking (30)'], icon: '/images/icons/valiant.png' },
  { name: 'Exceptional', points: 100, items: ['Customer Experience & Loyalty (50)', 'Product/Service Quality & Excellence (30)', 'Brand Reputation & Ecosystem Impact (20)'], icon: '/images/icons/exceptional.png' },
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

const ThriveIndexPage: React.FC = () => {
  return (
    <div className="bg-white">
        <Hero
            breadcrumb="Our Thinking / Signature Content"
            title="The Thrive Index"
            subtitle="Traditional business models are obsolete. The Thrive Index is our proprietary framework for measuring a company's readiness to compete in the age of AI. It's a strategic compass for building a more resilient, intelligent, and autonomous operation."
        />

        <section className="py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-extrabold text-charcoal">Why We Created the Thrive Index</h2>
                    <div className="mt-6 prose prose-lg max-w-none text-charcoal-light">
                        <p>For decades, businesses have been measured on lagging indicators like financial results. This model is broken. It can't measure a company's <em>resilience</em>, its <em>adaptability</em>, or its <em>capacity to leverage intelligence</em>.</p>
                        <p>We created the Thrive Index to provide a new, forward-looking model. It's a comprehensive diagnostic tool that assesses your "Thrive-Readiness"—your true potential to win in the new economy.</p>
                        <p>It moves beyond "How did you perform?" and asks, "How prepared are you to perform in the future?" It is the blueprint for transforming your business into a cognitive operation.</p>
                    </div>
                </motion.div>
                 <motion.div 
                    className="relative"
                    initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}
                 >
                    <img src="/images/insights/thrive-index.jpg" alt="A compass pointing towards a thriving future" className="rounded-lg shadow-xl" />
                </motion.div>
            </div>
        </section>

        <section className="py-20 md:py-24 bg-stone">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-charcoal tracking-tight sm:text-4xl">
                        The Six Pillars of a 'Thrive-Ready' Enterprise
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-charcoal-light">
                        The Index is built on six foundational pillars, each worth 100 points. Together, they provide a 360-degree view of your organization's operational and strategic potential.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {pillars.map(pillar => (
                        <Card key={pillar.name} className="flex flex-col bg-white">
                            <div className="flex items-center gap-4">
                                <img 
                                    src={pillar.icon} 
                                    alt={`${pillar.name} icon`} 
                                    className="h-10 w-10 flex-shrink-0"
                                    width={40}
                                    height={40}
                                    loading="lazy"
                                />
                                <div>
                                    <h3 className="text-2xl font-bold text-charcoal">{pillar.name}</h3>
                                    <p className="font-semibold text-electric-blue">{pillar.points} Points</p>
                                </div>
                            </div>
                            <ul className="mt-4 space-y-2 text-charcoal-light list-disc list-inside flex-grow">
                                {pillar.items.map(item => <li key={item}>{item}</li>)}
                            </ul>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
        
        <section className="py-20 md:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-extrabold text-charcoal">Not a "One-Size-Fits-All" Score</h2>
                <p className="mt-4 text-lg text-charcoal-light">As "Architects & Engineers," we know that what drives success in manufacturing is different from what drives success in finance. The Thrive Index is a flexible framework, not a rigid scorecard.</p>
                <p className="mt-4 text-lg text-charcoal-light">The weights of the six pillars can and *should* be adjusted to reflect your specific industry, business model, and strategic goals. A logistics-heavy company may need to overweight its 'Technology' pillar, while a services firm may elevate its 'Humanity' pillar. We work with you in our <strong>VELOCITY: Vision</strong> phase to customize this framework, ensuring we are measuring what truly matters to <em>you</em>.</p>
            </div>
        </section>

        <section className="py-20 md:py-24 bg-stone">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-charcoal">A Strategic Compass, Not Just a Score</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-charcoal-light">The "Thrive Score" is just the starting point. The real value is in the 'how.' We use the Index as the guiding framework for our partnership.</p>
                </div>
                <div className="mt-16 grid md:grid-cols-3 gap-8">
                    <Card className="text-center bg-white"><ClipboardDocumentCheckIcon className="h-10 w-10 mx-auto text-electric-blue" /><h3 className="text-xl font-bold mt-4">Assess Your Baseline</h3><p className="mt-2 text-charcoal-light">We begin with the diagnostic to identify strengths and high-value gaps in your technology, data, and operational pillars.</p></Card>
                    <Card className="text-center bg-white"><RocketLaunchIcon className="h-10 w-10 mx-auto text-electric-blue" /><h3 className="text-xl font-bold mt-4">Architect Your Roadmap</h3><p className="mt-2 text-charcoal-light">Based on your score, we design the architectural blueprint for your Cognitive Agent Platform, tailored to close your specific gaps.</p></Card>
                    <Card className="text-center bg-white"><ArrowTrendingUpIcon className="h-10 w-10 mx-auto text-electric-blue" /><h3 className="text-xl font-bold mt-4">Act with VELOCITY</h3><p className="mt-2 text-charcoal-light">We execute the roadmap, building your platform and deploying agents to measurably improve your 'Technology' and 'Innovation' scores.</p></Card>
                </div>
            </div>
        </section>

        <section className="py-20 md:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-extrabold text-charcoal">The Roadmap to the Autonomous Enterprise</h2>
                <p className="mt-4 text-lg text-charcoal-light">A high "Thrive Score" is not the end goal. The goal is to build a 'Cognitive Operation' that is resilient, adaptive, and intelligent. The Thrive Index is the diagnostic tool we use to create your bespoke roadmap *to* that future state. It shows us exactly where to deploy our <strong>Cognitive Agent Platform</strong> to build your <strong>(Thrive) Technology</strong> pillar, automate and optimize your <strong>(Thrive) Results</strong>, and unlock your <strong>(Thrive) Innovation</strong> pillar. This is how we turn a philosophy into a plan, and a plan into a production-grade, autonomous platform.</p>
            </div>
        </section>

        <ThriveScoreCalculator />

        <CallToActionSection
            title="Ready to Elevate Your Thrive Score?"
            subtitle="A high score is the outcome of a well-architected Cognitive Operation. Let's start your assessment and build the strategic roadmap to transform your business."
            buttonText="Start Your Thrive Assessment"
        />
    </div>
  );
};

export default ThriveIndexPage;
