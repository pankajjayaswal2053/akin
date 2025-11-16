
import React from 'react';
import Hero from '../ui/Hero';
import CallToActionSection from '../ui/CallToActionSection';
import { UserGroupIcon, GlobeAmericasIcon, ScaleIcon, ShieldCheckIcon, ArrowTrendingUpIcon, SparklesIcon } from '@heroicons/react/24/outline';
import Card from '../ui/Card';
import { motion } from 'framer-motion';

const commitments = [
    {
        icon: ShieldCheckIcon,
        title: "Inclusive Technology: The Responsible AI Review",
        description: "As part of our \"Deliver Operational Truth\" value, every model we deploy is subject to a rigorous internal Responsible AI review. This process explicitly tests for dataset bias, algorithmic bias, and potential negative impacts, ensuring our technology is fair and equitable by design."
    },
    {
        icon: GlobeAmericasIcon,
        title: "Diverse Teams: Building Our Community",
        description: "We actively partner with organizations like 'Women in AI' and 'Black in Tech' to broaden our talent pipeline and invest in the next generation of diverse engineers and architects. We believe talent is everywhere, but opportunity is not."
    },
    {
        icon: ArrowTrendingUpIcon,
        title: "Equitable Culture: Empowering Our People",
        description: "We foster an environment of psychological safety and growth. We support our team with truly flexible work policies, comprehensive professional development funds, and global mentorship programs designed to help everyone build their career."
    }
];

const philosophyLinks = [
    {
        icon: UserGroupIcon,
        title: 'Powering the "Humanity" Pillar',
        description: 'Our Thrive Index identifies "Humanity" as a core pillar of a resilient enterprise. Our internal D&I focus is how we practice what we preach, building the "empowered culture" we help our clients achieve.'
    },
    {
        icon: SparklesIcon,
        title: 'Powering "Shared Ownership"',
        description: 'Our core value of "Act with Shared Ownership" is impossible without inclusion. It\'s our commitment to creating an environment where every voice is heard, valued, and empowered to contribute to our shared goals.'
    }
]

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
        staggerChildren: 0.2,
      },
    },
};
  
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const InclusionPage: React.FC = () => {
    return (
        <div>
            <Hero
                breadcrumb="Who We Are"
                title="Inclusion & Diversity"
                subtitle="We are building the future of intelligence. That future must be equitable, responsible, and inclusive for all."
                imageUrl="/images/hero/inclusion.jpg"
            />

            <div className="bg-white">
                <section className="py-20 md:py-32">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                             initial={{ opacity: 0, x: -50 }}
                             whileInView={{ opacity: 1, x: 0 }}
                             viewport={{ once: true, amount: 0.3 }}
                             transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-extrabold text-charcoal">Inclusion is an Engineering Principle, Not Just a Policy</h2>
                            <div className="mt-6 prose prose-lg max-w-none text-charcoal-light">
                                <p>For an AI-driven enterprise, bias is not just a social issue; it is a critical technical and operational risk. A 'black box' model trained on biased data or by a non-diverse team will fail in the real world. It will make flawed decisions, alienate customers, and create significant liabilities.</p>
                                <p>Our commitment to inclusion is a core part of our <strong>"Deliver Operational Truth"</strong> value. We believe that building truly "Responsible AI" is impossible without a diverse team of architects and engineers who can identify, challenge, and mitigate the hidden biases that others cannot see.</p>
                            </div>
                        </motion.div>
                        <motion.div
                             initial={{ opacity: 0, scale: 0.9 }}
                             whileInView={{ opacity: 1, scale: 1 }}
                             viewport={{ once: true, amount: 0.3 }}
                             transition={{ duration: 0.8 }}
                             className="relative"
                        >
                            {/* Visual Placeholder */}
                            <div className="flex items-center justify-center gap-4">
                               <div className="text-center p-4 border-2 border-dashed border-red-300 rounded-lg">
                                  <div className="text-5xl">⬛</div>
                                  <p className="font-bold text-red-600 mt-2">Biased "Black Box"</p>
                               </div>
                               <div className="text-3xl font-bold text-gray-400">&rarr;</div>
                               <div className="text-center p-4 border-2 border-green-400 bg-green-50 rounded-lg">
                                    <div className="text-5xl">✨</div>
                                    <p className="font-bold text-green-700 mt-2">Transparent Akin Model</p>
                               </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
                
                <motion.section 
                    className="py-20 md:py-32 bg-stone"
                    variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-extrabold text-charcoal">Our Commitments in Action</h2>
                            <p className="mt-4 max-w-3xl mx-auto text-lg text-charcoal-light">
                                These aren't just ideas; they are active processes embedded in our company.
                            </p>
                        </div>
                        <div className="mt-16 grid md:grid-cols-3 gap-8 text-left">
                            {commitments.map(item => (
                                <motion.div key={item.title} variants={itemVariants}>
                                    <Card className="h-full">
                                        <item.icon className="h-10 w-10 text-electric-blue mb-4" />
                                        <h3 className="text-xl font-bold text-charcoal">{item.title}</h3>
                                        <p className="mt-2 text-charcoal-light">{item.description}</p>
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
                            <h2 className="text-3xl font-extrabold text-charcoal">Inclusion Powers Our Core Philosophy</h2>
                            <p className="mt-4 max-w-3xl mx-auto text-lg text-charcoal-light">
                                Our commitment to D&I is not a separate "initiative." It is a fundamental enabler of our core values and our "Thrive" philosophy.
                            </p>
                        </div>
                        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {philosophyLinks.map(item => (
                                <motion.div key={item.title} variants={itemVariants}>
                                    <Card className="h-full text-center">
                                        <item.icon className="h-12 w-12 mx-auto text-electric-blue" />
                                        <h3 className="mt-4 text-xl font-bold text-charcoal">{item.title}</h3>
                                        <p className="mt-2 text-charcoal-light">{item.description}</p>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>
            </div>

            <CallToActionSection
                title="Join Our Mission-Driven Team"
                subtitle="We are looking for talented individuals from all backgrounds who are passionate about building the future of responsible AI. Explore our open roles and help us build a more inclusive technological landscape."
                buttonText="View Careers at Akin"
                buttonLink="/careers"
            />
        </div>
    );
};

export default InclusionPage;
