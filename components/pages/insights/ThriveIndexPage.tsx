import React from 'react';
import Card from '../../ui/Card';
import Hero from '../../ui/Hero';
import ThriveScoreCalculator from '../../ui/ThriveScoreCalculator';
import CallToActionSection from '../../ui/CallToActionSection';

const pillars = [
  { name: 'Technology', points: 100, items: ['Core Infrastructure & Platforms (25)', 'Intelligent Automation & AI Integration (45)', 'Cybersecurity & Digital Resilience (30)'], icon: '/images/icons/technology.png' },
  { name: 'Humanity', points: 100, items: ['Holistic Well-being & Support (30)', 'DEIB & Empowered Culture (40)', 'Dynamic Talent Development (30)'], icon: '/images/icons/humanity.png' },
  { name: 'Results', points: 100, items: ['Financial Health & Profitability (50)', 'Market Position & Competitiveness (30)', 'Next-Gen Operational Efficiency (20)'], icon: '/images/icons/results.png' },
  { name: 'Innovation', points: 100, items: ['Innovation Engine & R&D (40)', 'Culture of Continuous Experimentation (30)', 'Strategic Adaptability & Agility (30)'], icon: '/images/icons/innovation.png' },
  { name: 'Valiant', points: 100, items: ['Clarity & Boldness of Vision (40)', 'Ethical Leadership & Governance (30)', 'Strategic Foresight & Risk-Taking (30)'], icon: '/images/icons/valiant.png' },
  { name: 'Exceptional', points: 100, items: ['Customer Experience & Loyalty (50)', 'Product/Service Quality & Excellence (30)', 'Brand Reputation & Ecosystem Impact (20)'], icon: '/images/icons/exceptional.png' },
];

const ThriveIndexPage: React.FC = () => {
  return (
    <div>
        <Hero
            breadcrumb='Signature Content'
            title='The Thrive Index'
            subtitle='A comprehensive and detailed scoring framework designed to be a dynamic analysis tool. It breaks down the six foundational pillars of business readiness.'
        />

        <div className="py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-extrabold text-charcoal tracking-tight sm:text-4xl">
                    Scoring Breakdown by Pillar
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-charcoal-light">
                    Each pillar is worth a total of 100 points, providing a deep, in-depth review of an organization's current capabilities and its readiness for future disruptions.
                </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {pillars.map(pillar => (
                    <Card key={pillar.name} className="flex flex-col">
                        <div className="flex items-center gap-4">
                            <img src={pillar.icon} alt={`${pillar.name} icon`} className="h-10 w-10 flex-shrink-0" />
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

            <section className="mt-24 text-center bg-gray-50 p-12 rounded-lg">
                 <h2 className="text-3xl font-extrabold text-charcoal tracking-tight sm:text-4xl">
                    How to Calculate the Overall Thrive Score
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-charcoal-light">
                    The final Thrive Score is a weighted sum of the six pillar scores. The weights can be adjusted to reflect the unique priorities of an organization or industry.
                </p>
                <div className="mt-8 bg-white p-6 rounded-md shadow-sm inline-block">
                    <h4 className="font-bold text-charcoal mb-2">Example Weighting:</h4>
                    <p className="text-charcoal-light font-mono">
                        (Tech * 0.20) + (Humanity * 0.15) + (Results * 0.25) + (Innovation * 0.20) + (Valiant * 0.10) + (Exceptional * 0.10)
                    </p>
                </div>
            </section>
        </div>
        <ThriveScoreCalculator />
        <CallToActionSection
            title="Ready to Elevate Your Thrive Score?"
            subtitle="A high score is the outcome of a well-architected organization. Partner with us to build the technological and operational foundations that drive sustainable growth and resilience."
            buttonText="Improve Your Score"
        />
    </div>
  );
};

export default ThriveIndexPage;