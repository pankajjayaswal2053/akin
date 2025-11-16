
import React, { useState } from 'react';
import Hero from '../ui/Hero';
import { EnvelopeIcon, UserGroupIcon, BuildingOffice2Icon, WrenchScrewdriverIcon, PhotoIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const offices = [
  { name: 'Singapore (HQ)', flag: '🇸🇬' },
  { name: 'United Kingdom', flag: '🇬🇧' },
  { name: 'United States', flag: '🇺🇸' },
  { name: 'Sri Lanka', flag: '🇱🇰' },
  { name: 'Malaysia', flag: '🇲🇾' },
  { name: 'India', flag: '🇮🇳' },
  { name: 'Nepal', flag: '🇳🇵' },
];


const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        role: 'Business Leader',
        message: '',
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
    });
    const [formState, setFormState] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');
    const [activePathway, setActivePathway] = useState('architect');

    const personalEmailDomains = ['gmail', 'yahoo', 'hotmail', 'outlook', 'aol', 'icloud', 'protonmail'];
    
    const formInputClasses = "mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-electric-blue focus:border-electric-blue sm:text-sm bg-white text-charcoal";
    const errorInputClasses = "border-red-500";
    const baseInputClasses = "border-gray-300";

    const resetForm = () => {
        setFormData({ name: '', email: '', company: '', role: 'Business Leader', message: '' });
        setErrors({ name: '', email: '', company: '', message: '' });
        setFormState('idle');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validate = (): boolean => {
        let tempErrors = { name: '', email: '', company: '', message: '' };
        let isValid = true;

        if (!formData.name.trim()) {
            tempErrors.name = 'Full Name is required.';
            isValid = false;
        }

        if (!formData.email.trim()) {
            tempErrors.email = 'Company Email is required.';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = 'Please enter a valid email address.';
            isValid = false;
        } else {
            const domain = formData.email.substring(formData.email.lastIndexOf('@') + 1);
            const isPersonal = personalEmailDomains.some(d => domain.toLowerCase().includes(d));
            if (isPersonal) {
                tempErrors.email = 'Please use a valid company email address. Personal emails are not accepted.';
                isValid = false;
            }
        }

        if (!formData.company.trim()) {
            tempErrors.company = 'Company Name is required.';
            isValid = false;
        }

        if (!formData.message.trim()) {
            tempErrors.message = 'Message is required.';
            isValid = false;
        } else if (formData.message.trim().length < 10) {
            tempErrors.message = 'Message must be at least 10 characters long.';
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validate()) {
            setFormState('submitting');
            try {
                const functionsBaseUrl = process.env.REACT_APP_FUNCTIONS_BASE_URL;
                const response = await fetch(`${functionsBaseUrl}/submitLead`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });
                if (!response.ok) throw new Error('Network response was not ok');
                setFormState('submitted');
            } catch (error) {
                console.error("Form submission error:", error);
                setFormState('error');
            }
        }
    };
    
    const pathwayContentVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' as const } },
        exit: { opacity: 0, x: -20, transition: { duration: 0.2, ease: 'easeIn' as const } }
    };

    const PathwayButton: React.FC<{
        id: string;
        icon: React.ElementType;
        title: string;
        subtitle: string;
    }> = ({ id, icon: Icon, title, subtitle }) => {
        const isActive = activePathway === id;
        return (
            <button
                onClick={() => {
                    setActivePathway(id);
                    resetForm();
                }}
                className={`w-full p-6 text-left border rounded-lg transition-all duration-300 ${isActive ? 'bg-white border-electric-blue shadow-lg ring-2 ring-electric-blue' : 'bg-gray-50 border-transparent hover:bg-white hover:border-gray-200'}`}
            >
                <div className="flex items-start gap-4">
                    <Icon className={`h-10 w-10 flex-shrink-0 mt-1 transition-colors ${isActive ? 'text-electric-blue' : 'text-charcoal-light'}`} />
                    <div>
                        <h3 className="text-xl font-bold text-charcoal">{title}</h3>
                        <p className="mt-1 text-charcoal-light">{subtitle}</p>
                    </div>
                </div>
            </button>
        );
    };

    return (
        <div>
            <Hero
                title="Let's Build Together"
                subtitle="Whether you're looking to transform your operations, join our team, or partner with us, we're ready to start the conversation."
                imageUrl="/images/contact-hero.jpg"
            />

            <div className="py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-1 space-y-8">
                        <div>
                            <h2 className="text-3xl font-extrabold text-charcoal">Contact Pathways</h2>
                            <p className="mt-2 text-lg text-charcoal-light">Select the option that best fits your inquiry.</p>
                        </div>
                        
                        <div className="space-y-4">
                            <PathwayButton id="architect" icon={WrenchScrewdriverIcon} title="Architect Your Solution" subtitle="Discuss your technical challenges and architect a bespoke platform." />
                            <PathwayButton id="careers" icon={UserGroupIcon} title="Careers" subtitle="Explore open roles and our engineering culture." />
                            <PathwayButton id="partnerships" icon={BuildingOffice2Icon} title="Partnerships" subtitle="Interested in partnering? Let's explore possibilities." />
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                         <AnimatePresence mode="wait">
                            {activePathway === 'architect' && (
                                <motion.div
                                    key="architect"
                                    variants={pathwayContentVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    <div className="bg-white p-8 border border-gray-200 rounded-lg shadow-lg">
                                        <AnimatePresence mode="wait">
                                            {formState === 'submitted' ? (
                                                <motion.div
                                                    key="submitted"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    className="text-center min-h-[400px] flex flex-col justify-center"
                                                >
                                                    <EnvelopeIcon className="h-16 w-16 mx-auto text-green-500" />
                                                    <h2 className="mt-4 text-2xl font-bold text-charcoal">Thank You!</h2>
                                                    <p className="mt-2 text-charcoal-light">Your message has been received. Our team will review your inquiry and get back to you shortly.</p>
                                                </motion.div>
                                            ) : formState === 'error' ? (
                                                <motion.div 
                                                    key="error"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    className="text-center min-h-[400px] flex flex-col justify-center"
                                                >
                                                    <h2 className="text-2xl font-bold text-charcoal">Something went wrong.</h2>
                                                    <p className="mt-2 text-charcoal-light">We couldn't submit your form. Please try again or email us directly at <a href="mailto:contact@akintechnology.com" className="text-electric-blue">contact@akintechnology.com</a>.</p>
                                                </motion.div>
                                            ) : (
                                                <motion.div key="form" exit={{ opacity: 0 }}>
                                                    <h2 className="text-2xl font-bold text-charcoal">Architect Your Solution</h2>
                                                    <p className="mt-1 text-charcoal-light">Please fill out the form below to begin the architectural conversation.</p>
                                                    <form onSubmit={handleSubmit} className="mt-8 space-y-6" noValidate>
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                            <div>
                                                                <label htmlFor="name" className="block text-sm font-medium text-charcoal">Full Name</label>
                                                                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className={`${formInputClasses} ${errors.name ? errorInputClasses : baseInputClasses}`} />
                                                                {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                                                            </div>
                                                            <div>
                                                                <label htmlFor="email" className="block text-sm font-medium text-charcoal">Company Email</label>
                                                                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className={`${formInputClasses} ${errors.email ? errorInputClasses : baseInputClasses}`} />
                                                                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                                                            </div>
                                                        </div>
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                            <div>
                                                                <label htmlFor="company" className="block text-sm font-medium text-charcoal">Company Name</label>
                                                                <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} className={`${formInputClasses} ${errors.company ? errorInputClasses : baseInputClasses}`} />
                                                                {errors.company && <p className="text-red-600 text-sm mt-1">{errors.company}</p>}
                                                            </div>
                                                            <div>
                                                                <label htmlFor="role" className="block text-sm font-medium text-charcoal">Which best describes your role?</label>
                                                                <select id="role" name="role" value={formData.role} onChange={handleChange} className={`${formInputClasses} ${baseInputClasses}`}>
                                                                    <option>Business Leader</option>
                                                                    <option>Technical Leader</option>
                                                                    <option>Data Scientist / Engineer</option>
                                                                    <option>Other</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <label htmlFor="message" className="block text-sm font-medium text-charcoal">How can we help?</label>
                                                            <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Describe your technical challenge or what you'd like to build..." className={`${formInputClasses} ${errors.message ? errorInputClasses : baseInputClasses}`}></textarea>
                                                            {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
                                                        </div>
                                                        <div>
                                                            <button type="submit" disabled={formState === 'submitting'} className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-charcoal hover:bg-electric-blue hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-electric-blue disabled:bg-gray-400">
                                                                {formState === 'submitting' ? <><ArrowPathIcon className="animate-spin h-5 w-5 mr-3" /> Submitting...</> : 'Submit Inquiry'}
                                                            </button>
                                                        </div>
                                                    </form>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>
                            )}
                            
                            {activePathway === 'careers' && (
                                <motion.div
                                    key="careers"
                                    variants={pathwayContentVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="bg-white p-8 border border-gray-200 rounded-lg shadow-lg text-center min-h-[400px] flex flex-col justify-center"
                                >
                                    <UserGroupIcon className="h-16 w-16 mx-auto text-electric-blue" />
                                    <h2 className="mt-4 text-2xl font-bold text-charcoal">Join Our Team</h2>
                                    <p className="mt-2 text-charcoal-light max-w-md mx-auto">We're a community of technologists building the next generation of operational AI. If you're driven to solve complex problems, explore our culture and open roles.</p>
                                    <div className="mt-8">
                                        <Button to="/careers">View Careers Page</Button>
                                    </div>
                                </motion.div>
                            )}

                            {activePathway === 'partnerships' && (
                                <motion.div
                                    key="partnerships"
                                    variants={pathwayContentVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="bg-white p-8 border border-gray-200 rounded-lg shadow-lg text-center min-h-[400px] flex flex-col justify-center"
                                >
                                    <BuildingOffice2Icon className="h-16 w-16 mx-auto text-electric-blue" />
                                    <h2 className="mt-4 text-2xl font-bold text-charcoal">Partner with Akin</h2>
                                    <p className="mt-2 text-charcoal-light max-w-md mx-auto">We partner with leading technology providers and system integrators to deliver comprehensive solutions. Let's explore how we can build the future together.</p>
                                    <div className="mt-8">
                                        <Button to="mailto:partnerships@akintechnology.com">Contact Partnerships</Button>
                                    </div>
                                </motion.div>
                            )}
                         </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Our Global Presence Section */}
            <div className="pb-20 md:pb-24 bg-stone">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-extrabold text-charcoal mb-12 text-center">Our Global Presence</h2>
                        
                        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 mb-12">
                            {offices.map(office => (
                                <div key={office.name} className="flex items-center gap-3">
                                    <span className="text-3xl" aria-hidden="true">{office.flag}</span>
                                    <span className="text-lg font-semibold text-charcoal">{office.name}</span>
                                </div>
                            ))}
                        </div>
                        
                        <div className="bg-gray-100 aspect-[16/9] w-full rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                            <div className="text-center text-gray-500 p-4">
                                <PhotoIcon className="mx-auto h-16 w-16" />
                                <p className="mt-4 text-lg font-semibold">World Map</p>
                                <p className="mt-1 text-sm">Image of highlighted office locations coming soon.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactPage;
