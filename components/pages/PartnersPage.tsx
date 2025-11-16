import React from 'react';
import Hero from '../ui/Hero';
import CallToActionSection from '../ui/CallToActionSection';
import { CloudIcon, CpuChipIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline';
import { useSEO } from '../seo/useSEO';
import { motion } from 'framer-motion';

const partners = {
    cloud: [
        { name: 'Amazon Web Services', logo: '/images/partners/aws.png' },
        { name: 'Google Cloud Platform', logo: '/images/partners/gcp.png' },
        { name: 'Microsoft Azure', logo: '/images/partners/azure.png' },
    ],
    technology: [
        { name: 'Databricks', logo: '/images/partners/databricks.png' },
        { name: 'Snowflake', logo: '/images/partners/snowflake.png' },
        { name: 'NVIDIA', logo: '/images/partners/nvidia.png' },
        { name: 'MongoDB', logo: '/images/partners/mongodb.png' },
    ],
    strategic: [
        { name: 'MIT AI Lab', logo: '/images/partners/mit.png' },
    ],
};

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
        staggerChildren: 0.3,
      },
    },
};
  
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};


const PartnersPage: React.FC = () => {
    useSEO({
        title: 'Our Partner Ecosystem',
        description: 'Explore our partnerships with leading technology providers like AWS, Google Cloud, Microsoft Azure, and NVIDIA, ensuring our AI platforms are built with best-in-class components.',
        keywords: 'technology partners, cloud partners, aws, gcp, azure, nvidia, databricks, snowflake'
    });

    return (
        <div>
            <Hero
                breadcrumb="Our Platform"
                title="Our Partner Ecosystem"
                subtitle="We build on the shoulders of giants. Our strong partnerships with the world's leading technology providers ensure our bespoke platforms are built with best-in-class, enterprise-grade components."
            />

            <div className="py-20 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-charcoal tracking-tight sm:text-4xl">
                       Our Partnership Strategy
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-charcoal-light">
                        Our "Architects and Engineers" philosophy extends to our ecosystem. We are technology-agnostic, which means we select the right tool for your specific challenge, not the one we're forced to sell. Our partnerships are built on three strategic pillars:
                    </p>
                </div>
                
                <motion.div 
                    className="mt-20 space-y-20"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Pillar 1 */}
                    <motion.section variants={itemVariants}>
                        <div className="flex items-center gap-4">
                            <CloudIcon className="h-10 w-10 text-electric-blue" />
                            <h2 className="text-3xl font-extrabold text-charcoal">Cloud & Infrastructure Partners</h2>
                        </div>
                        <p className="mt-4 text-lg text-charcoal-light max-w-4xl">This is the foundation of your platform's resilience, security, and scale. We are certified experts across all major cloud providers, allowing us to architect your solution on the platform that best fits your needs—or across all of them in a hybrid or multi-cloud environment.</p>
                        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-4xl">
                            {partners.cloud.map(p => (
                                <div key={p.name} className="flex justify-center p-6 bg-gray-50 rounded-lg border border-gray-200/80">
                                    <img src={p.logo} alt={`${p.name} logo`} className="h-12 object-contain" title={p.name} loading="lazy" width={160} height={48} />
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Pillar 2 */}
                     <motion.section variants={itemVariants}>
                        <div className="flex items-center gap-4">
                            <CpuChipIcon className="h-10 w-10 text-electric-blue" />
                            <h2 className="text-3xl font-extrabold text-charcoal">Data & AI Technology Partners</h2>
                        </div>
                        <p className="mt-4 text-lg text-charcoal-light max-w-4xl">This is the "best-of-breed" engine for your platform. We integrate with the industry's leading data, MLOps, and AI-acceleration platforms. This ensures your Cognitive Agents are built with the most powerful, cutting-edge, and efficient tools on the market.</p>
                        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-4xl">
                            {partners.technology.map(p => (
                                <div key={p.name} className="flex justify-center p-6 bg-gray-50 rounded-lg border border-gray-200/80">
                                    <img src={p.logo} alt={`${p.name} logo`} className="h-12 object-contain" title={p.name} loading="lazy" width={160} height={48} />
                                </div>
                            ))}
                        </div>
                    </motion.section>
                    
                    {/* Pillar 3 */}
                     <motion.section variants={itemVariants}>
                        <div className="flex items-center gap-4">
                            <BuildingOffice2Icon className="h-10 w-10 text-electric-blue" />
                            <h2 className="text-3xl font-extrabold text-charcoal">Strategic & Research Partners</h2>
                        </div>
                        <p className="mt-4 text-lg text-charcoal-light max-w-4xl">This is our connection to "what's next." Our strategic partnerships with leading academic and research institutions give us—and you—access to the bleeding edge of AI, ensuring your platform is not just future-proof, but future-defining.</p>
                        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-4xl">
                             {partners.strategic.map(p => (
                                <div key={p.name} className="flex justify-center p-6 bg-gray-50 rounded-lg border border-gray-200/80">
                                    <img src={p.logo} alt={`${p.name} logo`} className="h-12 object-contain" title={p.name} loading="lazy" width={160} height={48} />
                                </div>
                            ))}
                        </div>
                    </motion.section>
                </motion.div>
            </div>

            <CallToActionSection
                title="Interested in Partnering with Akin?"
                subtitle="We are always looking to expand our ecosystem with innovative technology providers and strategic partners. If you're interested in building the future of operational AI with us, let's connect."
                buttonText="Contact our Partnerships Team"
                buttonLink="/contact"
            />
        </div>
    );
};

export default PartnersPage;