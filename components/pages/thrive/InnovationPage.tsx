import React from 'react';
import Hero from '../../ui/Hero';
import Section from '../../layout/Section';
import SectionHeader from '../../ui/SectionHeader';
import Card from '../../ui/Card';
import Button from '../../ui/Button';
import CallToActionSection from '../../ui/CallToActionSection';
import ThriveBar from '../../ui/ThriveBar';
import { useSEO } from '../../seo/useSEO';
import { LightBulbIcon, BeakerIcon, ArrowPathIcon, CodeBracketSquareIcon } from '@heroicons/react/24/outline';
import OptimizedImage from '../../ui/OptimizedImage';

const howWeApplyIt = [
    { name: 'R&D Workflows', description: 'We establish dedicated R&D sprints to explore, prototype, and de-risk emerging technologies in a controlled environment.', icon: BeakerIcon },
    { name: 'Rapid Prototyping', description: 'Our architecture allows us to quickly build and test new agents and models, enabling a "fail fast, learn faster" culture.', icon: LightBulbIcon },
    { name: 'Future-Mode Architecture', description: 'We design systems that are not just built for today, but can be adapted for tomorrow, constantly testing for future scalability.', icon: CodeBracketSquareIcon },
    { name: 'Emerging Tech Integration', description: 'We actively monitor the technology landscape and maintain a process for strategically integrating new, proven technologies into the platform.', icon: ArrowPathIcon },
];

const inPractice = [
    'We budget dedicated time for engineers to work on "what if?" experiments.',
    'We run blameless post-mortems on failed prototypes to capture learnings.',
    'We reward and celebrate intelligent failures as a core part of the learning process.'
];

const outcomes = [
    { name: 'Faster Iteration', description: 'The ability to safely and quickly test new ideas without disrupting core operations.' },
    { name: 'Durable Competitive Advantage', description: 'An organizational capability to continuously stay ahead of the technology curve.' },
    { name: 'Resilient Long-Term Vision', description: 'An architecture that can evolve, preventing your platform from becoming a "legacy" system.' },
];

const InnovationPage: React.FC = () => {
    useSEO({
        title: 'THRIVE: Innovation — Continuous Reinvention',
        description: 'Innovation at Akin is not creativity — it’s disciplined exploration. Our philosophy of structured experimentation ensures the enterprise continually evolves.',
    });

    return (
        <div className="bg-white">
            <Hero
                breadcrumb={
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                           <img src="/images/icons/innovation.png" alt="Innovation Icon" className="h-6 w-6" />
                        </div>
                        <span>THRIVE Philosophy / Innovation</span>
                    </div>
                }
                title="Innovation — Continuous Reinvention"
                subtitle="Innovation is not creativity — it’s disciplined exploration."
            >
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Button to="/contact">Talk to an Architect</Button>
                    <Button to="/thrive" primary={false} className="!text-stone !border-stone hover:!bg-stone hover:!text-charcoal">The THRIVE Philosophy</Button>
                </div>
            </Hero>

            <Section tone="soft">
                <ThriveBar activePhase="I" />
                 <p className="max-w-3xl mx-auto mt-8 text-center text-charcoal-light">Innovation is one of six THRIVE pillars — the philosophy that guides how we design world-class systems.</p>
            </Section>

            <Section tone="light">
                <div className="grid md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-5">
                         <div className="p-8 bg-stone rounded-lg">
                            <OptimizedImage src="/images/icons/innovation.png" alt="Innovation Icon" width={512} height={512} className="w-full" />
                         </div>
                    </div>
                    <div className="md:col-span-7">
                        <SectionHeader eyebrow="Definition" title="What 'Innovation' Means in THRIVE." />
                        <p className="mt-4 text-lg text-charcoal-light">Innovation is our philosophy of structured experimentation and disciplined exploration. It is the process by which we ensure the enterprise cognitive platform continually evolves, adapts, and incorporates new technologies to maintain a competitive edge.</p>
                    </div>
                </div>
            </Section>

            <Section tone="soft">
                <SectionHeader eyebrow="Why It Matters" title="Stability Without Innovation Becomes Stagnation." description="In a world of accelerating technological change, a static platform is a liability. The ability to safely experiment, learn, and integrate new capabilities is a critical function of a resilient enterprise. Innovation isn't a single event; it's an operational muscle that must be continuously developed." align="center" maxWidth="lg" />
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="How We Apply It" title="Our Commitments to Innovation" align="center" maxWidth="lg" />
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
                <SectionHeader eyebrow="In Practice" title="What Innovation Looks Like Day-to-Day" align="center" maxWidth="lg" />
                 <div className="mt-12 max-w-2xl mx-auto space-y-4">
                    {inPractice.map(item => (
                        <Card key={item} className="text-center">
                            <p className="font-semibold text-charcoal">{item}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section tone="light">
                <SectionHeader eyebrow="Outcomes" title="The Impact of Disciplined Innovation" align="center" maxWidth="lg" />
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
                <SectionHeader eyebrow="Connection to the Akin OS" title="How 'Innovation' Influences Platform & VELOCITY™" align="center" maxWidth="lg" />
                <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <Card>
                        <h4 className="font-bold text-charcoal">Platform</h4>
                        <p className="text-charcoal-light mt-1">Ensures the platform architecture is composable and extensible, allowing for rapid, safe prototyping of new capabilities.</p>
                    </Card>
                     <Card>
                        <h4 className="font-bold text-charcoal">VELOCITY™</h4>
                        <p className="text-charcoal-light mt-1">Feeds directly into the I – Intelligence Expansion phase, providing a pipeline of validated ideas for scaling the platform's impact.</p>
                    </Card>
                </div>
            </Section>

            <CallToActionSection title="Ready to Build Your Innovation Engine?" subtitle="Let's architect a platform that is not just built for today, but is designed to continuously evolve and lead for the next decade." buttonText="Talk to an Architect" />
        </div>
    );
};

export default InnovationPage;