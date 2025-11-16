import React from 'react';
import Hero from '../../ui/Hero';
import Section from '../../layout/Section';
import SectionHeader from '../../ui/SectionHeader';
import Card from '../../ui/Card';
import Button from '../../ui/Button';
import VelocityBar from '../../ui/VelocityBar';
import { useSEO } from '../../seo/useSEO';
import { ShieldCheckIcon, SparklesIcon, CogIcon, ChartBarIcon } from '@heroicons/react/24/outline';
// FIX: Added missing import for CallToActionSection.
import CallToActionSection from '../../ui/CallToActionSection';

const activities = [
    { name: 'Governance Framework for Models & Agents', description: 'Defining and implementing clear policies for how AI is built, tested, and deployed.' },
    { name: 'Approval Flows for Logic & Policy Changes', description: 'Creating auditable workflows for reviewing and approving any changes to agent behavior.' },
    { name: 'Audit Trail Architecture', description: 'Ensuring every agent decision and action is logged in an immutable, easy-to-query format.' },
    { name: 'Risk Scoring & Red-Lines for Autonomy', description: 'Defining clear boundaries and kill-switches for autonomous agent behavior.' },
    { name: 'Regulatory Alignment', description: 'Mapping your platform governance to your specific industry regulations (e.g., GDPR, HIPAA, GxP).' },
];

const team = [
    { role: 'Client CISO, Risk & Legal Teams', responsibility: 'Define the corporate risk posture and compliance requirements.' },
    { role: 'Client Internal Audit', responsibility: 'Partner to ensure the platform meets all internal and external audit requirements.' },
    { role: 'Akin Responsible AI & Security Leads', responsibility: 'Architect and implement the technical governance and security controls.' },
    { role: 'Joint Platform Squad', responsibility: 'Implement and maintain the governance-as-code policies.' },
];

const TrustPage: React.FC = () => {
    useSEO({
        title: 'VELOCITY™: Trust & Governance',
        description: 'In Trust & Governance, we ensure every decision made by your cognitive platform is governed, logged, explainable, and compliant.',
    });

    return (
        <div className="bg-white">
            <Hero
                breadcrumb="VELOCITY · TRUST & GOVERNANCE"
                title="Embed Trust at the Core of Your Cognitive System."
                subtitle="In Trust & Governance, we ensure every decision made by your cognitive platform is governed, logged,explainable, and compliant. This is the safety layer of the entire operating model."
            >
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Button to="/contact">Talk to an Architect</Button>
                    <Button to="/velocity-approach" primary={false} className="!text-stone !border-stone hover:!bg-stone hover:!text-charcoal">See Full VELOCITY™ Model</Button>
                </div>
            </Hero>

            <Section tone="soft">
                <VelocityBar activePhase="T" />
                <div className="max-w-4xl mx-auto text-center mt-12">
                    <p className="text-lg text-charcoal-light">Trust & Governance is not an afterthought; it is a continuous discipline woven throughout the VELOCITY™ lifecycle. This phase formalizes and hardens the frameworks that ensure your AI operates safely, ethically, and in full compliance with your corporate and regulatory standards.</p>
                </div>
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="The Problem" title="'Black Box' AI Creates Unacceptable Enterprise Risk" description="As AI becomes more autonomous, the risks of opaque, un-governed systems become existential. A 'black box' AI exposes you to regulatory penalties, security vulnerabilities, privacy breaches, and a fundamental lack of accountability when things go wrong. You cannot run a mission-critical operation on a system you do not trust." align="center" maxWidth="lg" />
            </Section>

            <Section tone="soft">
                <SectionHeader eyebrow="What We Do" title="What Trust & Governance Looks Like in Practice" description="This phase is about making governance an automated, architectural component of your platform. We work with your CISO, Risk, and Legal teams to translate your policies into code. We implement robust audit trails, create approval workflows for logic changes, and build the explainability (XAI) interfaces that make your AI's decisions transparent and understandable." align="center" maxWidth="lg" />
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="Key Activities & Artefacts" title="The Tangible Outputs of the Trust Phase" align="center" maxWidth="lg" />
                <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activities.map(item => <Card key={item.name}><h4 className="font-bold text-charcoal">{item.name}</h4><p className="text-sm text-charcoal-light mt-1">{item.description}</p></Card>)}
                </div>
            </Section>

            <Section tone="soft">
                <SectionHeader eyebrow="Platform Integration" title="Hardening the Command & Control Layer" align="center" maxWidth="lg" />
                <div className="mt-12 max-w-4xl mx-auto text-center">
                    <Card><ChartBarIcon className="h-10 w-10 mx-auto text-electric-blue" /><h4 className="mt-2 font-bold">Command Center</h4><p className="text-sm text-charcoal-light">The Command Center is enhanced with governance dashboards, approval workflows, and detailed, human-readable audit logs for every agent action, making it the central hub for trust and oversight.</p></Card>
                </div>
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="Who's In the Room" title="A Partnership of Risk and Technology Experts" align="center" maxWidth="lg" />
                <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                    {team.map(item => <Card key={item.role}><h4 className="font-bold text-charcoal">{item.role}</h4><p className="text-sm text-charcoal-light mt-1">{item.responsibility}</p></Card>)}
                </div>
            </Section>

            <Section tone="soft">
                <SectionHeader eyebrow="How We Work" title="Governance-as-Code and Continuous Assurance" description="Our philosophy is to automate trust. We treat your governance policies like software—version-controlled, tested, and automatically enforced by the platform. This 'governance-as-code' approach provides continuous assurance that your AI is operating within its defined boundaries, moving you from manual spot-checks to a state of perpetual compliance." align="center" maxWidth="lg" />
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="Outcomes" title="The Confidence to Scale Autonomy" align="center" maxWidth="lg" />
                <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
                    <Card><h4 className="font-bold text-charcoal">Confidence for Leadership</h4><p className="text-sm text-charcoal-light">Assurance for your CISO, Risk, Legal, and Regulatory stakeholders.</p></Card>
                    <Card><h4 className="font-bold text-charcoal">Reduced AI Risk</h4><p className="text-sm text-charcoal-light">Proactive mitigation of security, privacy, and ethical risks.</p></Card>
                    <Card><h4 className="font-bold text-charcoal">Clear Accountability</h4><p className="text-sm text-charcoal-light">A transparent, auditable system where every autonomous action has a clear owner.</p></Card>
                </div>
            </Section>

            <Section tone="soft">
                <SectionHeader eyebrow="What Happens Next" title="From a Governed System to Measured Value" description="With a robust trust and governance layer in place, you can confidently measure the platform's enterprise-wide impact. This phase provides the trusted data needed for Y – Yield & Value Realization, where we will quantify the platform's ROI and steer the future roadmap." align="center" maxWidth="lg" />
                <div className="mt-8 text-center"><Button to="/velocity/yield">Next: Realize the Yield</Button></div>
            </Section>
            
            <CallToActionSection title="Ready to Build Trustworthy AI?" subtitle="Let's architect the governance framework that gives you the confidence to deploy autonomous systems at scale." buttonText="Talk to an Architect" />
        </div>
    );
};

export default TrustPage;
