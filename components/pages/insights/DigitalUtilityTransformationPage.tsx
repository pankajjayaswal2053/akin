import React from 'react';
import Hero from '../../ui/Hero';
import CallToActionSection from '../../ui/CallToActionSection';
import Card from '../../ui/Card';
import { BoltIcon, CpuChipIcon, ScaleIcon } from '@heroicons/react/24/outline';

const challenges = [
    { name: 'Grid Instability', description: 'Balancing a volatile grid with fluctuating renewable energy sources and unpredictable demand.' },
    { name: 'Aging Infrastructure', description: 'Predicting failures in critical assets before they cause outages.' },
    { name: 'Market Volatility', description: 'Optimizing energy trading in a 24/7 market with complex variables.' },
];

const capabilities = [
    { name: 'Grid Load Forecasting', description: 'Accurately predict energy demand and generation, enabling optimized load balancing and seamless integration of renewables.', icon: BoltIcon },
    { name: 'Predictive Asset Maintenance', description: 'Create a "digital twin" of your infrastructure to predict failures, reduce downtime, and optimize maintenance schedules.', icon: CpuChipIcon },
    { name: 'Algorithmic Energy Trading', description: 'Analyze market data in real-time to identify opportunities and automate trading strategies, maximizing profitability.', icon: ScaleIcon },
];

const DigitalUtilityTransformationPage: React.FC = () => {
    return (
        <div>
            <Hero
                breadcrumb="Insights / Industry Intelligence"
                title="Analysis: The Digital Utility Transformation"
                subtitle="How AI and unified data are creating a more resilient, efficient, and profitable energy system for the future."
            />

            <div className="py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <section>
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-charcoal">The Challenge: A System Under Pressure</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-charcoal-light">
                           The energy landscape is undergoing a radical transformation. The rise of renewables, distributed energy resources, and volatile markets requires a new level of intelligence. Traditional, siloed systems cannot cope with this complexity, leading to critical challenges.
                        </p>
                    </div>
                    <div className="mt-16 grid gap-8 md:grid-cols-3">
                        {challenges.map(challenge => (
                            <Card key={challenge.name}>
                                <h3 className="text-xl font-bold text-charcoal">{challenge.name}</h3>
                                <p className="mt-2 text-charcoal-light">{challenge.description}</p>
                            </Card>
                        ))}
                    </div>
                </section>

                <section className="mt-24">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-charcoal">The Solution: The AI Operating System</h2>
                         <p className="mt-4 max-w-3xl mx-auto text-lg text-charcoal-light">
                           To thrive, utilities must become digital-first organizations. The solution is a bespoke AI Operating System that creates a living, 'digital twin' of the entire grid and market landscape. By unifying data from SCADA systems, weather feeds, market data, and assets, the AI OS provides the single source of truth needed for predictive control and optimization.
                        </p>
                    </div>
                     <div className="mt-16 grid gap-8 md:grid-cols-3">
                        {capabilities.map(capability => (
                            <Card key={capability.name} className="text-center">
                                <capability.icon className="h-12 w-12 mx-auto text-electric-blue" />
                                <h3 className="mt-4 text-xl font-bold text-charcoal">{capability.name}</h3>
                                <p className="mt-2 text-charcoal-light">{capability.description}</p>
                            </Card>
                        ))}
                    </div>
                </section>
            </div>

            <CallToActionSection
                title="Ready to Engineer the New Energy Future?"
                subtitle="Let's discuss how a unified AI operating system can transform your grid operations or trading strategies, creating a sustainable competitive advantage."
                buttonText="Talk to an Energy Specialist"
                buttonLink="/industries/energy-commodities"
            />
        </div>
    );
};

export default DigitalUtilityTransformationPage;