
import React from 'react';
import Hero from '../ui/Hero';
import CallToActionSection from '../ui/CallToActionSection';
import { 
    ShieldCheckIcon, 
    LightBulbIcon, 
    ScaleIcon, 
    UserGroupIcon,
    ShieldExclamationIcon,
    ExclamationTriangleIcon,
    EyeSlashIcon,
    CpuChipIcon,
    LockClosedIcon,
    ClipboardDocumentCheckIcon,
} from '@heroicons/react/24/outline';
import Card from '../ui/Card';
import { motion } from 'framer-motion';

const principles = [
    {
        icon: ShieldCheckIcon,
        title: 'Security & Privacy by Design',
        description: "Data security and privacy are not afterthoughts; they are architected into the core of every platform we build.",
        why: "Your Unified Ontology is your most valuable asset. We protect it with granular, policy-based controls, ensuring agents and users *only* access the data they are explicitly permitted to."
    },
    {
        icon: LightBulbIcon,
        title: 'Transparency & Explainability (XAI)',
        description: "We build systems that are not opaque 'black boxes.' We provide the tools to help you understand *why* an AI made a certain prediction.",
        why: "When a cognitive agent makes a recommendation, your team needs to know why. We provide explainability, tracing actions back to the specific data and logic that drove the decision."
    },
    {
        icon: ScaleIcon,
        title: 'Fairness & Bias Mitigation',
        description: "We acknowledge the inherent risks of bias in AI and are committed to rigorous processes for detecting and mitigating it.",
        why: "Our MLOps Engine includes processes for bias detection in both data and models, ensuring your platform is equitable and serves all stakeholders fairly."
    },
    {
        icon: UserGroupIcon,
        title: 'Human-in-the-Loop Governance',
        description: "Our philosophy is that AI should augment, not replace, human expertise. We design systems with clear points for human control.",
        why: "Your team is always in control. We design the 'Operations Command Center' with clear points for human oversight, approval, and intervention, ensuring your cognitive agents are always *your* trusted co-pilots."
    }
];

const risks = [
    {
        icon: ShieldExclamationIcon,
        title: 'Data & IP Leakage',
        description: "Feeding sensitive enterprise data (e.g., financial plans, R&D) into public Generative AI models is an uncontrolled data leak. You are training your competitor's model with your IP."
    },
    {
        icon: ExclamationTriangleIcon,
        title: 'Amplified Bias & Bad Decisions',
        description: "An un-governed AI trained on biased historical data will not just repeat those biases—it will amplify them at scale, creating significant legal, financial, and reputational risk."
    },
    {
        icon: EyeSlashIcon,
        title: 'Opaque, Un-Auditable Actions',
        description: "When a 'black box' model makes a critical error (e.g., shutting down a production line), you have no way of knowing why. It's an un-auditable, untrusted system running your most critical operations."
    }
];

const platformSolutions = [
    {
        icon: CpuChipIcon,
        title: "The Ontology as a 'Single Source of Truth'",
        description: "Your Unified Ontology provides a single, governed, and auditable map of your data. This is the 'ground truth' that our agents reason over, preventing data leaks and ensuring all actions are based on verified, secure information."
    },
    {
        icon: LockClosedIcon,
        title: 'Private, Bespoke Models',
        description: "We build and train your models *within your secure environment*. Your data never leaves your control. Your intelligence is yours alone, giving you a proprietary asset, not a public liability."
    },
    {
        icon: ClipboardDocumentCheckIcon,
        title: 'Auditable & Explainable Actions',
        description: "Because all agent actions are tied to the Ontology, every decision is logged, traceable, and explainable. This creates a fully auditable 'chain of command' for all your AI-driven operations."
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

const ResponsibleAiPage: React.FC = () => {
    return (
        <div>
            <Hero
                breadcrumb="Our Philosophy"
                title="Trust: The Foundation of Operational AI"
                subtitle="Intelligence without trust is a liability. Our commitment to Responsible AI is the ethical and engineering foundation of our Cognitive Agent Platform, ensuring your systems are secure, explainable, and accountable."
            />

            <div className="bg-white">
                <motion.section 
                    className="py-20 md:py-32"
                    variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-extrabold text-charcoal tracking-tight sm:text-4xl">
                                The Principles of Trustworthy AI
                            </h2>
                            <p className="mt-4 max-w-3xl mx-auto text-xl text-charcoal-light">
                                For mission-critical operations, trust is not a feature—it's the bedrock. Our commitment to Responsible AI is built on four unwavering principles that govern how we architect, build, and deploy your Cognitive Agent Platform.
                            </p>
                        </div>
                        <div className="mt-16 grid md:grid-cols-2 gap-8">
                            {principles.map(pillar => (
                                <motion.div key={pillar.title} variants={itemVariants}>
                                    <Card className="h-full flex flex-col">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 bg-electric-blue/10 p-3 rounded-lg">
                                                <pillar.icon className="h-10 w-10 text-electric-blue" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-charcoal">{pillar.title}</h3>
                                                <p className="mt-1 text-charcoal-light">{pillar.description}</p>
                                            </div>
                                        </div>
                                        <div className="mt-4 pt-4 border-t border-gray-200 flex-grow">
                                            <p className="font-semibold text-charcoal">Why this matters:</p>
                                            <p className="mt-1 text-charcoal-light">{pillar.why}</p>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                <motion.section 
                    className="py-20 md:py-32 bg-stone"
                    variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-extrabold text-charcoal">The Risk of "Black Box" AI</h2>
                            <p className="mt-4 max-w-3xl mx-auto text-lg text-charcoal-light">
                                Adopting AI without a Responsible AI framework is not just risky; it's an existential threat. Generic, consumer-grade tools create massive vulnerabilities.
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

                <motion.section 
                    className="py-20 md:py-32"
                    variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-extrabold text-charcoal">How Our Platform Engineers Trust</h2>
                            <p className="mt-4 max-w-3xl mx-auto text-lg text-charcoal-light">
                                Our Cognitive Agent Platform is explicitly designed to solve these challenges.
                            </p>
                        </div>
                        <div className="mt-16 grid md:grid-cols-3 gap-8 text-left">
                            {platformSolutions.map(solution => (
                                <motion.div key={solution.title} variants={itemVariants}>
                                    <Card className="h-full">
                                        <solution.icon className="h-10 w-10 text-electric-blue mb-4" />
                                        <h3 className="text-xl font-bold text-charcoal">{solution.title}</h3>
                                        <p className="mt-2 text-charcoal-light">{solution.description}</p>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>
            </div>

            <CallToActionSection
                title="Build AI You Can Trust"
                subtitle="Partner with an engineering firm that puts security, transparency, and ethics at the core of its practice. Let's discuss how we can build a trustworthy AI foundation for your organization."
                buttonText="Start a Conversation"
                buttonLink="/contact"
            />
        </div>
    );
};

export default ResponsibleAiPage;
