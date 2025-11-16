
import React from 'react';
import Hero from '../../ui/Hero';
import CallToActionSection from '../../ui/CallToActionSection';
import Card from '../../ui/Card';
import { ArrowPathIcon, ChartBarIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const model = [
    { name: 'Continuous Monitoring & Refinement', description: 'We continuously monitor model performance and user feedback to identify opportunities for improvement, retraining models as needed to adapt to new data.' },
    { name: 'Value Realization & Reporting', description: 'We work with you to track the key business metrics the platform was designed to impact, providing clear reports on the tangible value being created.' },
    { name: 'New Capability Roadmap', description: 'We partner with you to build a long-term roadmap, identifying and prioritizing new features and capabilities to expand the platform\'s impact over time.' },
];

const CollaborateEvolvePage: React.FC = () => {
    return (
        <div>
            <Hero
                breadcrumb="VELOCITY Approach / Collaborate & Evolve"
                title="Phases 5 & 6: Collaborate & Evolve"
                subtitle="Deployment is just the beginning. We partner with you for the long-term, treating your AI platform as a living asset that must constantly adapt and improve to deliver sustained value."
            />

            <section className="py-20 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-charcoal">A Partnership for the Future</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-charcoal-light">
                           The launch of your platform is the beginning of our journey together, not the end. The final phases of our approach, <strong>Collaborate</strong> and <strong>Evolve</strong>, transition our engagement into a long-term partnership focused on continuous improvement and value creation. We work with your team to monitor, refine, and deploy new capabilities, ensuring your investment grows over time.
                        </p>
                    </div>
                </div>
            </section>
            
            <section className="bg-gray-50 py-20 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-charcoal">Our Partnership Model</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-charcoal-light">
                            Our ongoing partnership is structured around three key activities to ensure your platform's continued success.
                        </p>
                    </div>
                     <div className="mt-16 grid gap-8 md:grid-cols-3">
                        {model.map(item => (
                            <Card key={item.name} className="text-center">
                                <h3 className="text-xl font-bold text-charcoal">{item.name}</h3>
                                <p className="mt-2 text-charcoal-light">{item.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="py-20 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-charcoal">What You Can Expect</h2>
                    </div>
                     <div className="mt-16 grid gap-8 md:grid-cols-3">
                        <Card><p className="text-lg font-semibold">A proactive partner dedicated to the long-term success of your platform.</p></Card>
                        <Card><p className="text-lg font-semibold">Regular reporting on system performance and business impact.</p></Card>
                        <Card><p className="text-lg font-semibold">A strategic roadmap for future enhancements and capabilities.</p></Card>
                    </div>
                </div>
            </section>

            <CallToActionSection
                title="Ready to Build a Lasting Advantage?"
                subtitle="Our goal is to build technology that becomes a core, evolving part of your operational fabric. Let's start a conversation about your long-term vision."
                buttonText="Start the Conversation"
                buttonLink="/contact"
            />
        </div>
    );
};

export default CollaborateEvolvePage;
