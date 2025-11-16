
import React from 'react';
import Hero from '../ui/Hero';
import Section from '../layout/Section';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { useSEO } from '../seo/useSEO';
import {
  CpuChipIcon,
  ArrowPathIcon,
  SparklesIcon,
  UserGroupIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const HowWeDoItPage: React.FC = () => {
  useSEO({
    title: 'How We Do It – Platform, VELOCITY, THRIVE',
    description:
      'Akin unifies a cognitive platform, an operating model, and a design philosophy into one operating system for enterprise intelligence.',
    keywords:
      'Akin Platform, VELOCITY, THRIVE, operating model, AI methodology, cognitive systems',
  });

  return (
    <div className="bg-white">
      {/* HERO */}
      <Hero
        breadcrumb="HOW WE DO IT"
        title="One Operating System for Enterprise Intelligence."
        subtitle="We don’t sell tools, slides, or point solutions. We build and run a complete operating system for enterprise intelligence — uniting a cognitive platform, a disciplined delivery model, and a clear philosophy for how world-class systems should be designed."
      >
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button to="/contact">Talk to an Architect</Button>
          <Button
            to="/platform"
            primary={false}
            className="!text-stone !border-stone hover:!bg-stone hover:!text-charcoal"
          >
            Explore the Platform
          </Button>
        </div>
      </Hero>

      {/* THE AKIN SYSTEM */}
      <Section tone="light">
        <SectionHeader
          eyebrow="The Akin System"
          title="Platform. VELOCITY™. THRIVE."
          description="Three pillars define how we architect and deliver intelligence: the Akin Platform (what we build), our VELOCITY™ operating model (how we build), and our THRIVE philosophy (why and to what standard we build)."
          align="center"
          maxWidth="lg"
        />
        <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/platform" className="block group">
                <Card className="text-center h-full">
                    <CpuChipIcon className="h-10 w-10 text-electric-blue mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-charcoal">Platform</h3>
                    <p className="mt-2 text-charcoal-light flex-grow">
                    The Cognitive Agent Platform that unifies your data, models, and
                    operations into a single system of intelligence.
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 font-semibold text-electric-blue transition-transform group-hover:translate-x-1">
                        Explore Platform <ArrowRightIcon className="h-4 w-4" />
                    </span>
                </Card>
            </Link>

            <Link to="/velocity-approach" className="block group">
                <Card className="text-center h-full">
                    <ArrowPathIcon className="h-10 w-10 text-electric-blue mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-charcoal">VELOCITY™</h3>
                    <p className="mt-2 text-charcoal-light flex-grow">
                    An 8-phase operating model — from Vision Architecture to Yield —
                    for taking cognitive systems from idea to production.
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 font-semibold text-electric-blue transition-transform group-hover:translate-x-1">
                        Explore VELOCITY™ <ArrowRightIcon className="h-4 w-4" />
                    </span>
                </Card>
            </Link>

            <Link to="/thrive" className="block group">
                <Card className="text-center h-full">
                    <SparklesIcon className="h-10 w-10 text-electric-blue mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-charcoal">THRIVE</h3>
                    <p className="mt-2 text-charcoal-light flex-grow">
                    Our philosophy for enduring intelligence — Technology, Humanity,
                    Results, Innovation, Valiant, Exceptional.
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 font-semibold text-electric-blue transition-transform group-hover:translate-x-1">
                        Explore THRIVE <ArrowRightIcon className="h-4 w-4" />
                    </span>
                </Card>
            </Link>
        </div>
      </Section>

      {/* HOW IT FITS TOGETHER */}
      <Section tone="soft">
        <SectionHeader
          eyebrow="How It Fits Together"
          title="From Philosophy to Architecture to Operations."
          description="THRIVE sets the principles. VELOCITY™ turns those principles into an operating motion. The Akin Platform is the technical reality that runs inside your enterprise."
          align="center"
          maxWidth="lg"
        />
        <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-charcoal-light">
          <div className="p-6 border border-stone rounded-lg text-center bg-white">
            <p className="text-xs font-semibold tracking-[0.2em] text-electric-blue">THRIVE</p>
            <p className="mt-2 text-lg font-semibold text-charcoal">Philosophy</p>
            <p className="mt-2 text-sm">Defines the principles, ethics, and standards for world-class cognitive systems.</p>
          </div>
          <div className="p-6 border border-stone rounded-lg text-center bg-white">
            <p className="text-xs font-semibold tracking-[0.2em] text-electric-blue">VELOCITY™</p>
            <p className="mt-2 text-lg font-semibold text-charcoal">Operating Model</p>
            <p className="mt-2 text-sm">Defines how we move from vision to architecture, deployment, and continuous improvement.</p>
          </div>
          <div className="p-6 border border-stone rounded-lg text-center bg-white">
            <p className="text-xs font-semibold tracking-[0.2em] text-electric-blue">PLATFORM</p>
            <p className="mt-2 text-lg font-semibold text-charcoal">Technology</p>
            <p className="mt-2 text-sm">The Cognitive Agent Platform — the living system that runs your enterprise intelligence.</p>
          </div>
        </div>
      </Section>

      {/* WHERE TO START */}
      <Section tone="light">
        <SectionHeader
          eyebrow="Where to Start"
          title="Different Roles. Different Entry Points. One System."
          description="CIOs, COOs, and CEOs may enter at different points — but they all converge on the same operating system for intelligence."
          align="center"
          maxWidth="lg"
        />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CpuChipIcon className="h-10 w-10 text-electric-blue mb-4" />
            <h3 className="font-bold text-charcoal text-lg">For CIO / CTO / CDO</h3>
            <p className="mt-2 text-charcoal-light">
              Start with the <strong>Platform</strong> to understand the architecture, ontology, infrastructure, and how intelligence will run technically.
            </p>
          </Card>
          <Card>
            <UserGroupIcon className="h-10 w-10 text-electric-blue mb-4" />
            <h3 className="font-bold text-charcoal text-lg">For COO / Head of Ops</h3>
            <p className="mt-2 text-charcoal-light">
              Start with <strong>VELOCITY™</strong> to understand how we move from ideas and use cases to live, scaled operations.
            </p>
          </Card>
          <Card>
            <SparklesIcon className="h-10 w-10 text-electric-blue mb-4" />
            <h3 className="font-bold text-charcoal text-lg">For CEO / CISO / Board</h3>
            <p className="mt-2 text-charcoal-light">
              Start with <strong>THRIVE</strong> to understand the principles, ethics, and governance standards behind the systems we build.
            </p>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section tone="dark" align="center">
        <SectionHeader
          eyebrow="Next Step"
          title="Architect How Intelligence Will Work in Your Enterprise."
          description="If you’re rethinking what AI should be — a tool, or an operating system — we can help you design and build the latter."
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

export default HowWeDoItPage;