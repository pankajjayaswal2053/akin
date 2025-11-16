

import React from 'react';
import Hero from '../ui/Hero';
import Card from '../ui/Card';
import CallToActionSection from '../ui/CallToActionSection';
import { SparklesIcon, PuzzlePieceIcon, ShieldCheckIcon, ChatBubbleLeftRightIcon, MagnifyingGlassIcon, BoltIcon, CogIcon } from '@heroicons/react/24/outline';

const challenges = [
    {
        icon: ChatBubbleLeftRightIcon,
        title: 'Context Blindness & Hallucinations',
        text: 'Standard LLMs lack your proprietary business context. They cannot answer specific operational questions and are prone to making things up, creating significant risk.'
    },
    {
        icon: PuzzlePieceIcon,
        title: 'Complex Integration',
        text: 'Moving GenAI from a chatbot to an integrated part of your workflow is a major engineering hurdle, requiring deep integration with legacy systems and data sources.'
    },
    {
        icon: ShieldCheckIcon,
        title: 'Security & Governance Gaps',
        text: 'Using public GenAI models with sensitive enterprise data creates unacceptable security risks. A robust governance framework is required for safe, enterprise-wide deployment.'
    },
];

const useCases = [
    {
        icon: MagnifyingGlassIcon,
        title: 'Enterprise Cognitive Search',
        text: 'Build an expert system that allows your teams to ask complex questions in natural language and receive precise, context-aware answers grounded in your proprietary data.'
    },
    {
        icon: BoltIcon,
        title: 'Autonomous Operations',
        text: 'Deploy intelligent agents that can reason over your operational data to automate complex workflows, from root cause analysis of production issues to dynamic supply chain adjustments.'
    },
    {
        icon: CogIcon,
        title: 'Dynamic & Interactive Reporting',
        text: 'Move beyond static dashboards. Empower your leadership to have a conversation with your data, asking follow-up questions and drilling down into insights in real-time.'
    },
];

const GenerativeAiPage: React.FC = () => {
    return (
        <div>
            <Hero
                breadcrumb="What We Do"
                title="Generative AI, Operationalized"
                subtitle="We move Generative AI beyond the chatbot. Our Cognitive Agent Platform builds intelligent agents grounded in your unique operational reality, transforming GenAI from a feature into a core capability."
            />

            <section className="py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-charcoal">The Enterprise Generative AI Challenge</h2>
                    <p className="mt-4 text-lg text-charcoal-light max-w-3xl mx-auto">The promise of GenAI is immense, but enterprise adoption is stalled by critical, foundational problems that simple API calls cannot solve.</p>
                    <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
                        {challenges.map(challenge => (
                            <Card key={challenge.title} className="text-center h-full">
                                <challenge.icon className="h-12 w-12 mx-auto text-electric-blue" />
                                <h3 className="text-xl font-bold mb-2 mt-4">{challenge.title}</h3>
                                <p>{challenge.text}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <SparklesIcon className="h-16 w-16 text-electric-blue mb-4" />
                        <h2 className="text-3xl font-extrabold text-charcoal tracking-tight sm:text-4xl">
                            The Akin Solution: Ontology-Grounded AI
                        </h2>
                        <p className="mt-6 text-lg text-charcoal-light">
                           We solve the core challenge by grounding Generative AI in your <strong>Unified Ontology</strong>. This living digital twin of your business provides the real-time, proprietary context that LLMs lack.
                        </p>
                         <p className="mt-4 text-lg text-charcoal-light">
                           Instead of asking a generic model a generic question, your teams can now ask specific, operational questions. The AI doesn't guess—it reasons over the unified model of your operations to provide accurate, secure, and actionable answers.
                        </p>
                    </div>
                     <img src="/images/gen-ai-solution.jpg" alt="Generative AI connected to a central data ontology" className="rounded-lg shadow-xl" />
                </div>
            </section>

            <section className="py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-charcoal">Enterprise Use Cases, Powered by Akin</h2>
                    <p className="mt-4 text-lg text-charcoal-light max-w-3xl mx-auto">Our Cognitive Agent Platform enables a new class of enterprise applications. Autonomous Operations, for example, is no longer a future concept but a direct outcome of deploying intelligent agents that can reason and act on your behalf.</p>
                    <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
                        {useCases.map(useCase => (
                            <Card key={useCase.title} className="h-full">
                                <useCase.icon className="h-10 w-10 text-electric-blue mb-4" />
                                <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                                <p>{useCase.text}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            
            <CallToActionSection
                title="Move Beyond the Chatbot."
                subtitle="Let's build your cognitive core. Schedule a conversation with our engineers to explore how ontology-grounded Generative AI can transform your operations."
                buttonText="Architect Your GenAI Strategy"
            />
        </div>
    );
};

export default GenerativeAiPage;