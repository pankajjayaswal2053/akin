import React, { useEffect, useState, useRef } from 'react';
import { XMarkIcon, ChevronLeftIcon, CheckCircleIcon, ExclamationTriangleIcon, ArrowPathIcon, DocumentArrowUpIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import { Role } from '../pages/CareersPage';

interface RoleDetailModalProps {
  role: Role | null;
  onClose: () => void;
}

const RoleDetailModal: React.FC<RoleDetailModalProps> = ({ role, onClose }) => {
  const [view, setView] = useState<'details' | 'form' | 'submitting' | 'submitted' | 'error'>('details');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', coverLetter: '' });
  const [resumeFile, setResumeFile] = useState<{ name: string; content: string } | null>(null);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reset view when a new role is selected or modal is closed
    setView('details');
    setFormData({ name: '', email: '', phone: '', coverLetter: '' });
    setResumeFile(null);
    setFormErrors({});

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);

    if (role) {
      document.body.style.overflow = 'hidden';
      // Scroll to top of modal content when view changes
      modalContentRef.current?.scrollTo(0, 0);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [role, view, onClose]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setFormErrors(prev => ({ ...prev, resume: 'File size cannot exceed 5MB.' }));
        setResumeFile(null);
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64String = event.target?.result as string;
        setResumeFile({ name: file.name, content: base64String });
        setFormErrors(prev => ({ ...prev, resume: '' }));
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) errors.name = 'Full name is required.';
    if (!formData.email.trim()) errors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid.';
    if (!resumeFile) errors.resume = 'A resume is required.';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setView('submitting');
    try {
        const functionsBaseUrl = process.env.REACT_APP_FUNCTIONS_BASE_URL;
        const response = await fetch(`${functionsBaseUrl}/submitApplication`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...formData,
                resume: resumeFile, // Send file name and base64 content
                roleId: role?.id,
                roleTitle: role?.title,
            }),
        });
        if (!response.ok) throw new Error('Network response was not ok');
        setView('submitted');
    } catch (error) {
        console.error("Application submission error:", error);
        setView('error');
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  const renderContent = () => {
    switch (view) {
        case 'submitting':
            return <div className="flex flex-col items-center justify-center min-h-[400px] text-center"><ArrowPathIcon className="h-12 w-12 animate-spin text-electric-blue" /><p className="mt-4 text-lg font-semibold">Submitting your application...</p></div>;
        case 'submitted':
            return <div className="flex flex-col items-center justify-center min-h-[400px] text-center"><CheckCircleIcon className="h-16 w-16 text-green-500" /><h3 className="mt-4 text-2xl font-bold">Application Received</h3><p className="mt-2 text-charcoal-light">Thank you for your interest. We will review your application and be in touch if your profile matches our needs.</p></div>;
        case 'error':
            return <div className="flex flex-col items-center justify-center min-h-[400px] text-center"><ExclamationTriangleIcon className="h-16 w-16 text-red-500" /><h3 className="mt-4 text-2xl font-bold">Submission Failed</h3><p className="mt-2 text-charcoal-light">Sorry, something went wrong. Please try again or email us directly at careers@akintechnology.com.</p></div>;
        case 'form':
            return (
                <motion.div key="form" variants={contentVariants} initial="hidden" animate="visible" exit="exit" transition={{ duration: 0.3 }}>
                    <div className="flex items-center gap-2 mb-6">
                        <button onClick={() => setView('details')} className="p-1 hover:bg-gray-100 rounded-full"><ChevronLeftIcon className="h-5 w-5" /></button>
                        <h3 className="text-2xl font-bold text-charcoal">Apply for {role?.title}</h3>
                    </div>
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-charcoal">Full Name</label>
                                    <input type="text" id="name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className={`mt-1 block w-full border rounded-md shadow-sm p-2 ${formErrors.name ? 'border-red-500' : 'border-gray-300'}`} required />
                                    {formErrors.name && <p className="text-red-600 text-sm mt-1">{formErrors.name}</p>}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-charcoal">Email Address</label>
                                    <input type="email" id="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className={`mt-1 block w-full border rounded-md shadow-sm p-2 ${formErrors.email ? 'border-red-500' : 'border-gray-300'}`} required />
                                    {formErrors.email && <p className="text-red-600 text-sm mt-1">{formErrors.email}</p>}
                                </div>
                            </div>
                             <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-charcoal">Phone (Optional)</label>
                                <input type="tel" id="phone" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-charcoal">Resume/CV</label>
                                <div className="mt-1">
                                    <label htmlFor="resume-upload" className={`relative cursor-pointer rounded-md font-medium text-electric-blue hover:text-charcoal p-2 border-2 ${formErrors.resume ? 'border-red-500' : 'border-dashed border-gray-300'} flex justify-center items-center`}>
                                        <div className="text-center">
                                            <DocumentArrowUpIcon className="mx-auto h-10 w-10 text-gray-400"/>
                                            <span className="mt-2 block text-sm text-charcoal">{resumeFile ? resumeFile.name : 'Upload your file'}</span>
                                            <span className="text-xs text-gray-500">PDF, DOCX up to 5MB</span>
                                        </div>
                                        <input id="resume-upload" type="file" onChange={handleFileChange} className="sr-only" accept=".pdf,.doc,.docx" />
                                    </label>
                                </div>
                                {formErrors.resume && <p className="text-red-600 text-sm mt-1">{formErrors.resume}</p>}
                            </div>
                            <div>
                                <label htmlFor="coverLetter" className="block text-sm font-medium text-charcoal">Cover Letter (Optional)</label>
                                <textarea id="coverLetter" rows={5} value={formData.coverLetter} onChange={e => setFormData({...formData, coverLetter: e.target.value})} placeholder="Tell us why you're a great fit for this role and our mission. You can mention your experience with multinational companies here." className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-charcoal text-white font-semibold py-3 rounded-md hover:bg-electric-blue transition-colors">Submit Application</button>
                        </div>
                    </form>
                </motion.div>
            );
        case 'details':
        default:
            return (
                <motion.div key="details" variants={contentVariants} initial="hidden" animate="visible" exit="exit" transition={{ duration: 0.3 }}>
                    <h3 className="text-3xl font-bold text-charcoal">{role?.title}</h3>
                    <p className="text-charcoal-light mt-1">{role?.location} &middot; {role?.type}</p>
                    
                    <div className="mt-8 prose prose-lg max-w-none text-charcoal-light">
                        <p className="lead">{role?.summary}</p>

                        <h4>Key Responsibilities</h4>
                        <ul>{role?.responsibilities.map((item, i) => <li key={i}>{item}</li>)}</ul>

                        <h4>Qualifications</h4>
                        <ul>{role?.qualifications.map((item, i) => <li key={i}>{item}</li>)}</ul>
                    </div>

                    <button onClick={() => setView('form')} className="mt-8 w-full bg-charcoal text-white font-semibold py-3 rounded-md hover:bg-electric-blue transition-colors">
                        Apply for this role
                    </button>
                </motion.div>
            );
    }
  };

  return (
    <AnimatePresence>
        {role && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4" onClick={onClose} aria-modal="true">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden relative flex flex-col"
                >
                    <div className="flex-shrink-0 p-4 border-b border-gray-200 flex justify-end">
                        <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100" aria-label="Close modal">
                            <XMarkIcon className="h-6 w-6 text-charcoal-light" />
                        </button>
                    </div>

                    <div ref={modalContentRef} className="flex-1 overflow-y-auto p-8 md:p-12">
                       <AnimatePresence mode="wait">
                            {renderContent()}
                       </AnimatePresence>
                    </div>

                </motion.div>
            </div>
        )}
    </AnimatePresence>
  );
};

export default RoleDetailModal;
