import React from 'react';
import Hero from '../ui/Hero';
import Section from '../layout/Section';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { useSEO } from '../seo/useSEO';
import OptimizedImage from '../ui/OptimizedImage';
import ThriveBar from '../ui/ThriveBar';

const LeadershipPage: React.FC = () => {
    useSEO({
        title: 'Leadership: Suren Amarasekera, Founder',
        description: 'Meet Suren Amarasekera, the technologist and strategist behind Akin’s vision for intelligent, integrated enterprises.',
    });

    return (
        <div className="bg-white">
            {/* Section 1: Hero */}
            <Section tone="dark">
                 <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <SectionHeader
                            eyebrow="Leadership"
                            title="Architecting the Future of Intelligent Operations."
                            description="Meet Suren Amarasekera, the technologist and strategist behind Akin’s vision for intelligent, integrated enterprises."
                        />
                        <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                            <Button to="/contact">Talk to an Architect</Button>
                            <Button to="/about" primary={false} className="!text-stone !border-stone hover:!bg-stone hover:!text-charcoal">About Akin</Button>
                        </div>
                    </div>
                     <div className="flex justify-center">
                        <OptimizedImage src="/images/suren.jpg" alt="Portrait of Suren Amarasekera" width={400} height={400} className="rounded-full w-80 h-80 object-cover grayscale" />
                    </div>
                </div>
            </Section>

            {/* Section 2: Our Founder */}
            <Section tone="light">
                <SectionHeader
                    eyebrow="Our Founder"
                    title="Meet Suren Amarasekera"
                    description={
                        <>
                           <p className="max-w-3xl mx-auto">Suren Amarasekera is the Founder of Akin Pte Ltd. With a career spanning over 30 years in senior leadership roles — including CEO, MD, and COO — at multi-billion-dollar technology organizations such as SingTel, Axiata, and the Usaha Tegas Group, Suren is a lifelong advocate for excellence in technology solutions.</p>
                           <p className="max-w-3xl mx-auto mt-4">He holds a Bachelor’s and Master’s in Computer Systems Engineering from Syracuse University and an MBA from the University of Chicago Booth School of Business.</p>
                        </>
                    }
                    align="center"
                    maxWidth="lg"
                />
            </Section>

            {/* Section 3: A Vision Forged by Experience */}
            <Section tone="soft">
                 <SectionHeader
                    eyebrow="A Vision Forged by Experience"
                    title="Why Akin Exists"
                    description="Throughout his extensive career across Singapore, Malaysia, India, and Sri Lanka, Suren identified a critical gap in the market: businesses lacked a trusted partner to deliver truly tailored technology. He founded Akin in 2019 to bridge this gap, creating bespoke systems that empower businesses by solving real pain points with clarity and precision. His vision is rooted in a simple belief: technology succeeds only when it solves real human problems. That philosophy drives Akin’s focus on integrated, customer-centric, intelligent platforms."
                    align="center"
                    maxWidth="lg"
                />
            </Section>

            {/* Section 4: Message From Our Founder */}
             <Section tone="light">
                 <SectionHeader
                    eyebrow="A Message from Our Founder"
                    title="“Technology succeeds only when it solves real human problems.”"
                    align="center"
                    maxWidth="lg"
                />
                <blockquote className="mt-8 max-w-3xl mx-auto text-lg text-charcoal-light border-l-4 border-electric-blue pl-6 italic">
                    <p>“For over three decades, I've seen that technology succeeds only when it solves real human problems. Business owners often struggle with disconnected systems that obscure the full picture of their operations and customers.</p>
                    <p className="mt-4">We built Akin to solve this exact pain point by architecting a unified, intelligent platform. It's about giving you the tools to not just manage your business, but to truly understand it, fostering the relationships and insights that are the foundation of measurable, sustainable growth.”</p>
                    <footer className="mt-4 not-italic font-semibold text-charcoal">
                        — Suren Amarasekera, Founder, Akin
                    </footer>
                </blockquote>
            </Section>
            
            {/* Section 5: Together We Thrive */}
            <Section tone="soft">
                <SectionHeader
                    eyebrow="Together We Thrive"
                    title="The Leadership Philosophy Behind Akin"
                    description="THRIVE is the philosophy that shapes how we build — balancing technology, people, results, innovation, courage, and excellence in every system we architect."
                    align="center"
                    maxWidth="lg"
                />
                <div className="mt-8">
                    <ThriveBar activePhase="T" />
                </div>
                <div className="mt-8 text-center">
                    <Button to="/thrive">Explore THRIVE</Button>
                </div>
            </Section>
            
            {/* Section 6: Global Experience */}
            <Section tone="light">
                <SectionHeader
                    eyebrow="Global Perspective"
                    title="Leadership Rooted in Regional and Global Depth"
                    description="Suren's experience leading technology organizations across Singapore, Malaysia, India, Sri Lanka, and other global markets provides a unique perspective on solving complex, cross-border business challenges."
                    align="center"
                    maxWidth="lg"
                />
            </Section>

            {/* Section 7: Final CTA */}
            <Section tone="dark" align="center">
                <SectionHeader
                    eyebrow="Partner With Us"
                    title="Work With the Architect Behind Akin."
                    description="Start a conversation about how a unified, intelligent platform could serve your enterprise."
                    align="center"
                    maxWidth="md"
                />
                <div className="mt-8">
                    <Button to="/contact">Talk to an Architect</Button>
                </div>
            </Section>
        </div>
    );
};

export default LeadershipPage;
