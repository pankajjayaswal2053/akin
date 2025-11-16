import React from 'react';
import Hero from '../../ui/Hero';
import CallToActionSection from '../../ui/CallToActionSection';
import Card from '../../ui/Card';
import { ShieldCheckIcon, DocumentMagnifyingGlassIcon, ScaleIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const AiInFinancialServicesPage: React.FC = () => {
    return (
        <div>
            <Hero
                breadcrumb="Insights / Industry Intelligence"
                title="Viewpoint: The Future of AI in Financial Services"
                subtitle="Our perspective on moving beyond legacy systems to architect a resilient, intelligent, and secure financial future."
            />

            <div className="py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <section className="bg-gray-50 p-8 md:p-12 rounded-lg">
                    <div className="grid md:grid-cols-3 gap-8 items-center">
                        <div className="md:col-span-1 text-center">
                            <LightBulbIcon className="h-24 w-24 mx-auto text-electric-blue" />
                            <h2 className="mt-4 text-3xl font-extrabold text-charcoal">Our Viewpoint</h2>
                        </div>
                        <div className="md:col-span-2">
                             <p className="text-xl text-charcoal-light italic">
                                "The financial services industry is not facing a technology problem; it's facing an architecture problem. Bolting on AI 'features' to a fragmented, legacy core is a recipe for failure. The future belongs to institutions that rebuild their operations around a unified, intelligent data core—an AI Operating System."
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mt-24">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-charcoal">The Impact of Architected Intelligence</h2>
                         <p className="mt-4 max-w-3xl mx-auto text-lg text-charcoal-light">
                           By building on a bespoke AI OS, financial institutions can move from a reactive to a predictive posture, unlocking mission-critical capabilities that drive efficiency and mitigate risk.
                        </p>
                    </div>
                     <div className="mt-16 grid gap-8 md:grid-cols-3">
                        <Card className="text-center">
                            <ShieldCheckIcon className="h-12 w-12 mx-auto text-electric-blue" />
                            <h3 className="mt-4 text-xl font-bold">Real-Time Fraud Detection</h3>
                            <p className="mt-2 text-charcoal-light">Analyze millions of transactions in milliseconds to detect subtle patterns of fraud and prevent losses before they occur.</p>
                        </Card>
                         <Card className="text-center">
                            <DocumentMagnifyingGlassIcon className="h-12 w-12 mx-auto text-electric-blue" />
                            <h3 className="mt-4 text-xl font-bold">Automated Compliance</h3>
                            <p className="mt-2 text-charcoal-light">Ensure continuous compliance with AML and KYC regulations by intelligently monitoring transactions and customer data in real-time.</p>
                        </Card>
                         <Card className="text-center">
                            <ScaleIcon className="h-12 w-12 mx-auto text-electric-blue" />
                            <h3 className="mt-4 text-xl font-bold">Dynamic Risk Scoring</h3>
                            <p className="mt-2 text-charcoal-light">Develop bespoke AI models that provide a more accurate and adaptive assessment of credit and market risk.</p>
                        </Card>
                    </div>
                </section>
            </div>

            <CallToActionSection
                title="Ready to Build Your Financial Advantage?"
                subtitle="Let's discuss how our architectural approach to AI can transform your approach to risk, compliance, and customer engagement."
                buttonText="Talk to a Finance Specialist"
                buttonLink="/industries/financial-services"
            />
        </div>
    );
};

export default AiInFinancialServicesPage;