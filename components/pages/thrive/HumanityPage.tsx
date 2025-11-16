import React from 'react';
import Hero from '../../ui/Hero';
import Section from '../../layout/Section';
import SectionHeader from '../../ui/SectionHeader';
import Card from '../../ui/Card';
import Button from '../../ui/Button';
import CallToActionSection from '../../ui/CallToActionSection';
import ThriveBar from '../../ui/ThriveBar';
import { useSEO } from '../../seo/useSEO';
import { UserGroupIcon, BeakerIcon, ArrowTrendingUpIcon, HandRaisedIcon } from '@heroicons/react/24/outline';
import OptimizedImage from '../../ui/OptimizedImage';

const howWeApplyIt = [
    { name: 'Human-in-the-Loop Governance', description: 'Every autonomous system we build includes a "Command Center" that provides clear points for human oversight, approval, and intervention.', icon: UserGroupIcon },
    { name: 'Human-Centered Design (HCD)', description: 'We design our systems not just for technical function, but for human usability. We embed with your operators to build interfaces that are intuitive and empowering.', icon: HandRaisedIcon },
    { name: 'Training & Uplift Programs', description: 'We partner with you to build the skills and capabilities your team needs to confidently operate and co-own the new cognitive system.', icon: ArrowTrendingUpIcon },
    { name: 'Well-being and Load-Reduction', description: 'Our goal is to automate tedious work to reduce cognitive load and free your best people to focus on high-value, strategic challenges.', icon: BeakerIcon },
];

const inPractice = [
    'We start design sessions with "Who is this for and how does it help them?"',
    'We shadow operators in their real environment before we write a single line of code.',
    'Success is measured by user adoption and feedback, not just technical performance.'
];

const outcomes = [
    { name: 'Higher Adoption & Trust', description: 'Systems that are designed for and with people are more likely to be embraced, trusted, and used effectively.' },
    { name: 'More Resilient Decisions', description: 'Combining AI\'s analytical power with human intuition and judgment leads to better, more robust decisions.' },
    { name: 'A Culture Aligned to Intelligence', description: 'Empowering your team to work with AI fosters a culture of innovation and continuous improvement.' },
];

const HumanityPage: React.FC = () => {
    useSEO({
        title: 'THRIVE: Humanity — People at the Center',
        description: 'We build systems that amplify human capability, not replace it. Our Humanity principle ensures cognitive systems remain aligned with human judgment, culture, and values.',
    });

    return (
        <div className="bg-white">
            <Hero
                breadcrumb={
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                           <img src="/images/icons/humanity.png" alt="Humanity Icon" className="h-6 w-6" />
                        </div>
                        <span>THRIVE Philosophy / Humanity</span>
                    </div>
                }
                title="Humanity — People at the Center"
                subtitle="We build systems that amplify human capability, not replace it."
            >
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Button to="/contact">Talk to an Architect</Button>
                    <Button to="/thrive" primary={false} className="!text-stone !border-stone hover:!bg-stone hover:!text-charcoal">The THRIVE Philosophy</Button>
                </div>
            </Hero>

            <Section tone="soft">
                <ThriveBar activePhase="H" />
                 <p className="max-w-3xl mx-auto mt-8 text-center text-charcoal-light">Humanity is one of six THRIVE pillars — the philosophy that guides how we design world-class systems.</p>
            </Section>
            
            <Section tone="light">
                 <div className="grid md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-5">
                         <div className="p-8 bg-stone rounded-lg">
                            <OptimizedImage src="/images/icons/humanity.png" alt="Humanity Icon" width={512} height={512} className="w-full" />
                         </div>
                    </div>
                    <div className="md:col-span-7">
                        <SectionHeader eyebrow="Definition" title="What 'Humanity' Means in THRIVE." />
                        <p className="mt-4 text-lg text-charcoal-light">Humanity is the principle that ensures every cognitive system we build remains aligned with human judgment, culture, and enterprise values. It is our commitment to augmenting human expertise, not attempting to replace it.</p>
                    </div>
                </div>
            </Section>

            <Section tone="soft">
                <SectionHeader eyebrow="Why It Matters" title="AI Without Humanity Fails in Practice." description="An autonomous system that operates without human oversight is a 'black box' — a massive liability. Technology that ignores the culture and workflows of the people who must use it will be rejected. The most powerful AI is useless if it is not trusted and embraced by the human experts on the front lines." align="center" maxWidth="lg" />
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="How We Apply It" title="Our Human-Centric Commitments" align="center" maxWidth="lg" />
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
                <SectionHeader eyebrow="In Practice" title="What Humanity Looks Like Day-to-Day" align="center" maxWidth="lg" />
                 <div className="mt-12 max-w-2xl mx-auto space-y-4">
                    {inPractice.map(item => (
                        <Card key={item} className="text-center">
                            <p className="font-semibold text-charcoal">{item}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="Outcomes" title="The Impact of Human-Aligned AI" align="center" maxWidth="lg" />
                <div className="mt-12 grid md:grid-cols-3 gap-8">
                    {outcomes.map(item => (
                        <Card key={item.name} className="text-center">
                            <h4 className="font-bold text-charcoal">{item.name}</h4>
                            <p className="text-charcoal-light mt-1 text-sm">{item.description}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section tone="soft">
                <SectionHeader eyebrow="Connection to the Akin OS" title="How 'Humanity' Influences Platform & VELOCITY™" align="center" maxWidth="lg" />
                <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <Card>
                        <h4 className="font-bold text-charcoal">Platform</h4>
                        <p className="text-charcoal-light mt-1">Shapes the user experience of the Operations Command Center, ensuring it is intuitive, empowering, and provides clear governance controls.</p>
                    </Card>
                     <Card>
                        <h4 className="font-bold text-charcoal">VELOCITY™</h4>
                        <p className="text-charcoal-light mt-1">Drives the entire C – Collaboration & Co-Ownership phase, where we embed with teams to ensure adoption and build internal capability.</p>
                    </Card>
                </div>
            </Section>

            <CallToActionSection title="Ready to Empower Your People with AI?" subtitle="Let's architect a cognitive system that aligns with your culture and amplifies the expertise of your team." buttonText="Talk to an Architect" />
        </div>
    );
};

export default HumanityPage;