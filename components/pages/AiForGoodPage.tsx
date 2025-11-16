import React from 'react';
import Hero from '../ui/Hero';
import CallToActionSection from '../ui/CallToActionSection';
import { HeartIcon, CodeBracketIcon, AcademicCapIcon, SparklesIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import Card from '../ui/Card';
import { motion } from 'framer-motion';
import { useSEO } from '../seo/useSEO';

const pillars = [
    {
        icon: HeartIcon,
        title: 'Pro-Bono & Non-Profit Partnerships',
    },
    {
        icon: CodeBracketIcon,
        title: 'Open-Source Contributions',
    },
    {
        icon: AcademicCapIcon,
        title: 'AI for All: Education & Mentorship',
    }
];

const principles = [
    {
        title: 'Pro-Bono: Solving Complex Data Challenges',
        subTitle: 'Our Approach to Pro-Bono',
        description: 'We seek partnerships with non-profits that are facing complex, operational data challenges. Our "Architects & Engineers" are uniquely positioned to help organizations that need to build a \'single source of truth\' from messy, siloed data—whether it\'s for optimizing a food bank\'s supply chain or helping a climate-change group model environmental data.'
    },
    {
        title: 'Open-Source: Building the "Plumbing"',
        subTitle: 'Our Approach to Open-Source',
        description: 'Our platforms are built on the best of open-source, and we are committed to giving back. Our contributions are focused on the "plumbing" of operational AI—the MLOps tools, data pipeline connectors, and validation frameworks that make AI more reliable and secure for the entire community.'
    },
    {
        title: 'Education: Demystifying the "Black Box"',
        subTitle: 'Our Approach to Education',
        description: 'As part of our <strong>"Deliver Operational Truth"</strong> value, we are committed to demystifying the "black box" of AI. Our team members volunteer their time to mentor students and run workshops on Responsible AI, MLOps, and data engineering, helping to build the next generation of diverse, responsible architects.'
    }
];

const coreValues = [
    {
        icon: SparklesIcon,
        title: 'Powering the Cognitive Operation (For All)',
        subTitle: 'Powering the Community',
        description: 'Our visionary value to <strong>"Power the Cognitive Operation"</strong> doesn\'t just apply to our clients. It\'s our commitment to using our skills to build a more efficient, resilient, and intelligent <em>world</em>.'
    },
    {
        icon: UserGroupIcon,
        title: 'Act with Shared Ownership (For Our Community)',
        subTitle: 'Shared Ownership of Our World',
        description: 'Our value of <strong>"Act with Shared Ownership"</strong> extends to our community. We take ownership of our impact on the world and actively partner with those who are working to make it better.'
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

const AiForGoodPage: React.FC = () => {
    useSEO({
        title: 'AI for Good | Our Philosophy & Impact',
        description: "Our 'AI for Good' initiative is our commitment to leveraging our expertise, resources, and platforms to contribute to a better, more equitable, and sustainable world.",
        keywords: 'ai for good, social impact, non-profit, pro-bono, open source, mentorship',
        ogImage: '/images/hero/ai-for-good.jpg'
    });

    return (
        <div className="bg-white">
            <Hero
                breadcrumb="Our Philosophy & Impact"
                title="AI for Good"
                subtitle="We believe that technology should be a force for positive change. Our 'AI for Good' initiative is our commitment to leveraging our expertise, resources, and platforms to contribute to a better, more equitable, and sustainable world."
                imageUrl="/images/hero/ai-for-good.jpg"
            />

            <section className="py-20 md:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h2 
                        className="text-3xl font-extrabold text-charcoal"
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }}
                    >
                        The Architect's Responsibility
                    </motion.h2>
                    <motion.div 
                        className="mt-6 prose prose-lg max-w-none text-charcoal-light mx-auto"
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <p>As "Architects & Engineers" of the future, we have a profound responsibility to ensure that future is equitable and benefits everyone. We believe that the same powerful technologies that drive operational value for our clients—the Cognitive Agent Platform, the Unified Ontology—can be a massive force for good in the hands of non-profits, researchers, and community organizations.</p>
                        <p>Our "AI for Good" program is not a separate charity; it is a core part of our engineering philosophy. It's our commitment to solving the world's hardest problems, not just the most profitable ones.</p>
                    </motion.div>
                </div>
            </section>
            
            <section className="py-20 md:py-32 bg-stone">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                         <h2 className="text-3xl font-extrabold text-charcoal tracking-tight sm:text-4xl">
                            Our Pillars of Impact
                        </h2>
                        <p className="mt-4 max-w-3xl mx-auto text-xl text-charcoal-light">
                            Our commitment extends beyond our client work into three key areas of community and social impact.
                        </p>
                    </div>

                    <div className="mt-16 grid lg:grid-cols-3 gap-8">
                        {pillars.map(pillar => (
                            <Card key={pillar.title} className="text-center">
                                <pillar.icon className="h-12 w-12 mx-auto text-electric-blue" />
                                <h3 className="mt-6 text-xl font-bold text-charcoal">{pillar.title}</h3>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            
            <motion.section 
                className="py-20 md:py-24 bg-white"
                variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-charcoal">Our Principles in Practice</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-charcoal-light">This is how we put our philosophy into action. We focus on high-impact, mission-aligned opportunities.</p>
                    </div>
                    <div className="mt-16 grid lg:grid-cols-3 gap-8">
                        {principles.map((principle) => (
                            <motion.div key={principle.title} variants={itemVariants}>
                                <Card className="h-full">
                                    <h3 className="text-xl font-bold text-charcoal mb-1">{principle.subTitle}</h3>
                                    <p className="font-semibold text-electric-blue mb-4">{principle.title}</p>
                                    <p className="text-charcoal-light" dangerouslySetInnerHTML={{ __html: principle.description }}></p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

             <motion.section 
                className="py-20 md:py-24 bg-stone"
                variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-charcoal">Impact as a Core Value</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-charcoal-light">Our "AI for Good" program is the natural extension of our core company values.</p>
                    </div>
                    <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {coreValues.map(value => (
                            <motion.div key={value.title} variants={itemVariants}>
                                <Card className="h-full text-center">
                                    <value.icon className="h-12 w-12 mx-auto text-electric-blue" />
                                    <h3 className="mt-4 text-xl font-bold text-charcoal">{value.subTitle}</h3>
                                    <p className="font-semibold text-charcoal-light mt-1">{value.title}</p>
                                    <p className="mt-4 text-charcoal-light" dangerouslySetInnerHTML={{ __html: value.description }}></p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            <CallToActionSection
                title="Partner With Us for Impact"
                subtitle="Are you a non-profit, researcher, or community organization with a complex data challenge? We are always looking for impactful projects where our technology can make a difference. Reach out to discuss a potential partnership."
                buttonText="Contact Us for Partnerships"
                buttonLink="/contact"
            />
        </div>
    );
};

export default AiForGoodPage;
