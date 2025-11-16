import React from 'react';
import Hero from '../../ui/Hero';
import Section from '../../layout/Section';
import SectionHeader from '../../ui/SectionHeader';
import Card from '../../ui/Card';
import Button from '../../ui/Button';
import CallToActionSection from '../../ui/CallToActionSection';
import ThriveBar from '../../ui/ThriveBar';
import { useSEO } from '../../seo/useSEO';
import { ShieldCheckIcon, ScaleIcon, MapIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import OptimizedImage from '../../ui/OptimizedImage';

const howWeApplyIt = [
    { name: 'Responsible AI Frameworks', description: 'We implement rigorous frameworks for ensuring AI is fair, transparent, and accountable, aligning with our "Deliver Operational Truth" value.', icon: ShieldCheckIcon },
    { name: 'Governance Standards', description: 'We architect clear lines of accountability and governance for every autonomous system, ensuring human oversight is always present.', icon: ScaleIcon },
    { name: 'Scenario Planning & Foresight', description: 'We partner with leadership to think through the long-term strategic and ethical implications of AI, preparing for future challenges.', icon: MapIcon },
    { name: 'Ethical Risk Reduction', description: 'We proactively identify and mitigate ethical risks, from data privacy to algorithmic bias, making the hard choices to build trustworthy systems.', icon: ExclamationTriangleIcon },
];

const inPractice = [
    'We ask "Should we build this?" not just "Can we build this?" at the start of every project.',
    'We have a formal ethical review gate for high-risk cognitive agents before they are deployed.',
    'We are transparent with our clients about the limitations and risks of the technology.'
];

const outcomes = [
    { name: 'Safer AI', description: 'Systems that are designed from the ground up to operate safely and predictably within defined ethical boundaries.' },
    { name: 'Ethical Implementation', description: 'Confidence that your AI is being deployed in a way that aligns with your corporate values and societal good.' },
    { name: 'Strategic Strength', description: 'The ability to make bold, long-term bets on AI, backed by a strong ethical and governance foundation.' },
    { name: 'Enterprise Trust', description: 'Earning the trust of your customers, employees, and regulators through a demonstrable commitment to responsible AI.' },
];

const ValiantPage: React.FC = () => {
    useSEO({
        title: 'THRIVE: Valiant — Bold, Ethical Leadership',
        description: 'Courage and ethics are the compass for every intelligent system we build. Our Valiant principle guides our commitment to integrity, foresight, and moral clarity.',
    });

    return (
        <div className="bg-white">
            <Hero
                breadcrumb={
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                           <img src="/images/icons/valiant.png" alt="Valiant Icon" className="h-6 w-6" />
                        </div>
                        <span>THRIVE Philosophy / Valiant</span>
                    </div>
                }
                title="Valiant — Bold, Ethical Leadership"
                subtitle="Courage and ethics are the compass for every intelligent system we build."
            >
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Button to="/contact">Talk to an Architect</Button>
                    <Button to="/thrive" primary={false} className="!text-stone !border-stone hover:!bg-stone hover:!text-charcoal">The THRIVE Philosophy</Button>
                </div>
            </Hero>

            <Section tone="soft">
                <ThriveBar activePhase="V" />
                 <p className="max-w-3xl mx-auto mt-8 text-center text-charcoal-light">Valiant is one of six THRIVE pillars — the philosophy that guides how we design world-class systems.</p>
            </Section>

            <Section tone="light">
                 <div className="grid md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-5">
                         <div className="p-8 bg-stone rounded-lg">
                            <OptimizedImage src="/images/icons/valiant.png" alt="Valiant Icon" width={512} height={512} className="w-full" />
                         </div>
                    </div>
                    <div className="md:col-span-7">
                        <SectionHeader eyebrow="Definition" title="What 'Valiant' Means in THRIVE." />
                        <p className="mt-4 text-lg text-charcoal-light">Valiant is the principle of leading with integrity, foresight, and moral clarity. It is the courage to tackle hard problems, to challenge assumptions, and to build AI that is not just powerful, but also responsible and ethical.</p>
                    </div>
                </div>
            </Section>

            <Section tone="soft">
                <SectionHeader eyebrow="Why It Matters" title="AI Changes Risk. Leadership Must Change With It." description="Deploying autonomous systems into mission-critical operations is a high-stakes endeavor. It requires the courage to say 'no' to unsafe shortcuts, to challenge the hype, and to prioritize long-term trust over short-term gains. Valiant leadership is the essential ingredient for navigating the complex ethical landscape of AI." align="center" maxWidth="lg" />
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="How We Apply It" title="Our Commitments to Responsible Leadership" align="center" maxWidth="lg" />
                <div className="mt-12 grid md:grid-cols-2 gap-8">
                    {howWeApplyIt.map(item => (
                        <Card key={item.name}>
                            <item.icon className="h-8 w-8 text-electric-blue mb-3" />
                            <h4 className="font-bold text-charcoal">{item.name}</h4>
                            <p className="text-sm text-charcoal-light mt-1">{item.description}</p>
                        </Card>
                    ))}
                </div>
            </Section>
            
            <Section tone="soft">
                <SectionHeader eyebrow="In Practice" title="What Valiant Looks Like Day-to-Day" align="center" maxWidth="lg" />
                 <div className="mt-12 max-w-2xl mx-auto space-y-4">
                    {inPractice.map(item => (
                        <Card key={item} className="text-center">
                            <p className="font-semibold text-charcoal">{item}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="Outcomes" title="The Impact of Valiant, Ethical AI" align="center" maxWidth="lg" />
                <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {outcomes.map(item => (
                        <Card key={item.name} className="text-center">
                            <h4 className="font-bold text-charcoal">{item.name}</h4>
                            <p className="text-charcoal-light mt-1 text-sm">{item.description}</p>
                        </Card>
                    ))}
                </div>
            </Section>
            
            <Section tone="soft">
                <SectionHeader eyebrow="Connection to the Akin OS" title="How 'Valiant' Influences Platform & VELOCITY™" align="center" maxWidth="lg" />
                <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <Card>
                        <h4 className="font-bold text-charcoal">Platform</h4>
                        <p className="text-charcoal-light mt-1">Enforces security and governance-as-code, ensuring that ethical policies are automatically applied by the technology itself.</p>
                    </Card>
                     <Card>
                        <h4 className="font-bold text-charcoal">VELOCITY™</h4>
                        <p className="text-charcoal-light mt-1">Defines the entire purpose of the T – Trust & Governance phase, embedding ethical reviews and safety checks throughout the lifecycle.</p>
                    </Card>
                </div>
            </Section>

            <CallToActionSection title="Ready to Lead with Responsible AI?" subtitle="Let's build a cognitive system that is not only powerful, but is also a reflection of your commitment to ethical leadership and enterprise trust." buttonText="Talk to an Architect" />
        </div>
    );
};

export default ValiantPage;