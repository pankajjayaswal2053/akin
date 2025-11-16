import React from 'react';
import Hero from '../../ui/Hero';
import CallToActionSection from '../../ui/CallToActionSection';
import Card from '../../ui/Card';
import { PresentationChartLineIcon, CircleStackIcon, CogIcon, ArrowUpCircleIcon } from '@heroicons/react/24/outline';

const keyFindings = [
    { title: '72% AI Adoption', text: 'AI adoption is accelerating: 72% of organizations have moved beyond pilot projects, up from 45% in 2023.', icon: PresentationChartLineIcon },
    { title: 'Top Use Cases', text: 'The most mature applications are in AI-driven demand forecasting (65% adoption) and logistics network optimization (58%).', icon: CogIcon },
    { title: 'Biggest Barrier Remains Data', text: '68% of respondents cited "data fragmentation and quality" as the primary obstacle to scaling AI initiatives.', icon: CircleStackIcon },
    { title: '2025 Investment Priorities', text: 'Top investment priorities are "Building a Unified Data Ontology" (45%) and "Real-Time, End-to-End Visibility" (42%).', icon: ArrowUpCircleIcon },
];

const StateOfAiSupplyChainPage: React.FC = () => {
    return (
        <div>
            <Hero
                breadcrumb="Insights / Industry Intelligence"
                title="State of AI in Supply Chain: 2025 Report"
                subtitle="An in-depth report on the adoption, challenges, and future trends of AI in logistics and supply chain management, based on a survey of 500 industry leaders."
            />

            <div className="py-20 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="prose prose-lg max-w-none text-charcoal-light prose-headings:text-charcoal prose-strong:text-charcoal">
                    <h2>Executive Summary</h2>
                    <p>This in-depth report benchmarks the adoption, challenges, and future trends of AI in logistics and supply chain management. Based on a survey of 500 supply chain leaders from Fortune 1000 companies, the findings reveal an industry at a critical inflection point. While adoption is accelerating rapidly, the full potential of AI remains locked behind foundational data challenges. Organizations that prioritize a unified data strategy will be the ones to build the resilient, predictive supply chains of the future.</p>

                    <h2 className="mt-16">Key Findings at a Glance</h2>
                </div>
                
                <div className="mt-8 grid md:grid-cols-2 gap-8">
                    {keyFindings.map(finding => (
                        <Card key={finding.title}>
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <finding.icon className="h-10 w-10 text-electric-blue" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-charcoal">{finding.title}</h3>
                                    <p className="mt-1 text-charcoal-light">{finding.text}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="prose prose-lg max-w-none text-charcoal-light prose-headings:text-charcoal prose-strong:text-charcoal mt-16">
                    <h2>The Path Forward: From Data Silos to a Cognitive Network</h2>
                    <p>The report's central conclusion is clear: the biggest barrier to scaling AI is not a lack of algorithms, but a lack of a unified, trustworthy data foundation. The high priority placed on building a "Unified Data Ontology" signifies a strategic shift in the market. Leaders now recognize that to enable predictive and autonomous operations, they must first create a 'digital twin' of their supply chain that AI models can understand and reason over.</p>
                    <p>Organizations that continue to invest in siloed AI point solutions without addressing this core architectural challenge will face diminishing returns and fall behind competitors who are building a true, end-to-end intelligent system.</p>
                </div>
            </div>

            <CallToActionSection
                title="Ready to Build a More Resilient Supply Chain?"
                subtitle="This report highlights the critical need for a unified data strategy. Let's discuss how our bespoke AI operating systems can provide the end-to-end visibility and predictive insights your supply chain needs to thrive."
                buttonText="Talk to a Supply Chain Specialist"
                buttonLink="/solutions/supply-chain"
            />
        </div>
    );
};

export default StateOfAiSupplyChainPage;