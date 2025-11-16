
import React, { useState, useEffect } from 'react';
import Hero from '../ui/Hero';
import Card from '../ui/Card';
import { WrenchScrewdriverIcon, UserGroupIcon, KeyIcon, CpuChipIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import LoadingSpinner from '../ui/LoadingSpinner';
import { motion } from 'framer-motion';
import OptimizedImage from '../ui/OptimizedImage';
import RoleDetailModal from '../ui/RoleDetailModal';
import { getFunctionsBaseUrl } from '../../firebase';

const culturePillars = [
    {
        title: "Architects and Builders",
        icon: WrenchScrewdriverIcon,
        text: "Our mission is to bridge the gap between strategy and execution. We are a team that architects the C-suite vision and writes the production code to make it real, delivering tangible, mission-critical systems."
    },
    {
        title: "Deep Collaboration, Low Ego",
        icon: UserGroupIcon,
        text: "We are a tight-knit team of experts who believe the best solutions come from collaborative problem-solving. We embed with our clients and our own cross-functional teams, sharing knowledge freely."
    },
    {
        title: "Autonomy and Ownership",
        icon: KeyIcon,
        text: "We hire brilliant people and trust them to own problems from end-to-end. You'll be given the autonomy to make key architectural decisions and the accountability to see them through to production."
    },
    {
        title: "Tackle the Hardest Problems",
        icon: CpuChipIcon,
        text: "We are drawn to complexity. From creating digital twins of global supply chains to developing models that predict grid failures, you'll work on challenges that push the boundaries of AI."
    }
];

const lifeAtAkinImages = [
    '/images/life/life-1.jpg',
    '/images/life/life-2.jpg',
    '/images/life/life-3.jpg',
    '/images/life/life-4.jpg',
];

export interface Role {
    id: string;
    title: string;
    location: string;
    type: string;
    summary: string;
    responsibilities: string[];
    qualifications: string[];
}

const CareersPage: React.FC = () => {
    const [roles, setRoles] = useState<Role[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedRole, setSelectedRole] = useState<Role | null>(null);

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const functionsBaseUrl = getFunctionsBaseUrl();
                const response = await fetch(`${functionsBaseUrl}/getCareers?isPublished=true&orderBy=priority&orderDir=asc`);
                if (!response.ok) {
                    throw new Error('Failed to fetch career data');
                }
                const data = await response.json();
                setRoles(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
            } finally {
                setIsLoading(false);
            }
        };

        fetchRoles();
    }, []);

    return (
        <div>
            <Hero
                breadcrumb="Join Our Team"
                title="Stop Maintaining. Start Building."
                subtitle="Join a dynamic community of technologists building the next generation of operational AI. At Akin, you won't just 'consult' or 'advise'—you will engineer, from the ground up."
                imageUrl="/images/hero/careers.jpg"
            />
            
            <section className="py-20 md:py-32 bg-stone-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-charcoal tracking-tight sm:text-4xl">
                            An Engineering Culture Built on Impact
                        </h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-charcoal-light">
                            We are defined by the systems we build and the value we create. Our culture is optimized for engineers who are driven to solve complex challenges and see their work make a real-world difference.
                        </p>
                    </div>
                    <div className="mt-16 grid gap-8 md:grid-cols-2">
                        {culturePillars.map((pillar) => (
                             <Card key={pillar.title}>
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <pillar.icon className="h-10 w-10 text-electric-blue" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-charcoal">{pillar.title}</h3>
                                        <p className="mt-1 text-charcoal-light">{pillar.text}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

             <section className="py-20 md:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-charcoal tracking-tight sm:text-4xl">
                            Life at Akin
                        </h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-charcoal-light">
                            We're a passionate, collaborative team dedicated to solving hard problems and enjoying the journey together.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
                        {lifeAtAkinImages.map((src, index) => (
                            <motion.div 
                                key={src}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="aspect-square"
                            >
                                <OptimizedImage src={src} alt={`Life at Akin ${index + 1}`} width={400} height={400} className="w-full h-full object-cover rounded-lg shadow-md" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

             <section className="py-20 md:py-32 bg-stone">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-charcoal tracking-tight sm:text-4xl">
                            Open Roles
                        </h2>
                        <p className="mt-4 text-lg text-charcoal-light">
                            We are always searching for exceptional talent to join our mission.
                        </p>
                    </div>
                    <div className="mt-12 space-y-4">
                        {isLoading ? (
                            <LoadingSpinner />
                        ) : error ? (
                            <p className="text-center text-red-500">{error}</p>
                        ) : roles.length > 0 ? (
                            <div className="space-y-6">
                                {roles.map(role => (
                                    <motion.div
                                        key={role.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Card className="!p-0 overflow-hidden">
                                            <div className="p-6">
                                                <h3 className="text-xl font-bold text-charcoal">{role.title}</h3>
                                                <div className="flex items-center gap-6 mt-2 text-charcoal-light text-sm">
                                                    <span className="flex items-center gap-1.5"><MapPinIcon className="h-4 w-4" /> {role.location}</span>
                                                    <span className="flex items-center gap-1.5"><ClockIcon className="h-4 w-4" /> {role.type}</span>
                                                </div>
                                                <p className="mt-4 text-charcoal-light">{role.summary}</p>
                                            </div>
                                            <button 
                                                onClick={() => setSelectedRole(role)}
                                                className="w-full text-left bg-gray-50 hover:bg-gray-100 px-6 py-3 font-semibold text-electric-blue transition-colors"
                                            >
                                                View Details & Apply &rarr;
                                            </button>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-center text-charcoal-light bg-white p-8 rounded-lg">No open roles at the moment. Please check back later.</p>
                        )}
                    </div>
                    <div className="mt-12">
                        <Card>
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-charcoal">Don't see your role?</h3>
                                <p className="mt-2 text-charcoal-light max-w-xl mx-auto">We're always looking for passionate builders. If you believe you're a fit for our mission, send us your resume and tell us why.</p>
                                <a href="mailto:careers@akintechnology.com?subject=Speculative Application" className="mt-6 inline-block px-8 py-3 rounded-md font-semibold text-center text-sm transition-colors duration-300 bg-charcoal text-white hover:bg-electric-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-electric-blue">Submit Your Resume</a>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            <RoleDetailModal role={selectedRole} onClose={() => setSelectedRole(null)} />
        </div>
    );
};

export default CareersPage;