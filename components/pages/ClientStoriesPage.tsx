

import React, { useState, useMemo, useEffect } from 'react';
import Hero from '../ui/Hero';
import { motion, AnimatePresence } from 'framer-motion';
import ClientStoryCard from '../ui/ClientStoryCard';
import CallToActionSection from '../ui/CallToActionSection';
import LoadingSpinner from '../ui/LoadingSpinner';

interface Story {
  id: string;
  title: string;
  industry: string;
  capability: string;
  outcome: string;
  client: string;
}

// Add static data as a fallback and base content.
const staticStories: Story[] = [
  { id: '1', title: 'Reduced Supply Chain Costs by 15% with a Unified Logistics Ontology', industry: 'Logistics', capability: 'Unified Ontology', outcome: '15% cost reduction', client: 'Global Logistics Inc.' },
  { id: '2', title: 'Achieved 98% Prediction Accuracy in Manufacturing', industry: 'Manufacturing', capability: 'AI Model Development', outcome: '98% accuracy', client: 'Auto OEM Major' },
  { id: '3', title: 'Cut Downtime by 32% via Predictive Maintenance', industry: 'Manufacturing', capability: 'Operational Deployment', outcome: '32% less downtime', client: 'Auto OEM Major' },
  { id: '4', title: 'Improved Forecast Accuracy by 20% in Retail', industry: 'Logistics', capability: 'AI Model Development', outcome: '20% forecast improvement', client: 'Global Logistics Inc.' },
  { id: '5', title: 'Streamlined Compliance with an Open Architecture Platform', industry: 'Finance', capability: 'Open Architecture', outcome: '50% faster audits', client: 'Regional Bank' },
];


const industries = ['All', 'Logistics', 'Manufacturing', 'Finance'];
const capabilities = ['All', 'Unified Ontology', 'AI Model Development', 'Operational Deployment', 'Open Architecture'];

type FilterButtonProps = { filter: string, activeFilter: string, setFilter: (f: string) => void };
const FilterButton: React.FC<FilterButtonProps> = ({ filter, activeFilter, setFilter }) => (
    <button
        onClick={() => setFilter(filter)}
        className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${activeFilter === filter ? 'bg-charcoal text-white' : 'bg-gray-100 text-charcoal hover:bg-gray-200'}`}
    >
        {filter}
    </button>
);

const ClientStoriesPage: React.FC = () => {
    const [stories, setStories] = useState<Story[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [activeIndustry, setActiveIndustry] = useState('All');
    const [activeCapability, setActiveCapability] = useState('All');

     useEffect(() => {
        const fetchStories = async () => {
            try {
                const functionsBaseUrl = process.env.REACT_APP_FUNCTIONS_BASE_URL;
                if (!functionsBaseUrl) {
                    console.warn("Firebase Functions URL not configured, using static client stories.");
                    setStories(staticStories);
                    setError(null);
                    return;
                }
                
                const response = await fetch(`${functionsBaseUrl}/getClientStories`);
                if (!response.ok) {
                    console.warn(`Failed to fetch client stories (status: ${response.status}), using static fallback data.`);
                    setStories(staticStories);
                    setError(null); // Clear error to prevent showing the error message.
                } else {
                    const dynamicStories: Story[] = await response.json();
                    // Combine dynamic and static stories, giving preference to dynamic ones if IDs conflict.
                    const combined = [...dynamicStories, ...staticStories];
                    const uniqueStories = Array.from(new Map(combined.map(story => [story.id, story])).values());
                    setStories(uniqueStories);
                    setError(null);
                }
            } catch (err) {
                console.warn("Error fetching client stories:", err, "Using static fallback data.");
                setStories(staticStories);
                setError(null); // Clear error to prevent showing the error message.
            } finally {
                setIsLoading(false);
            }
        };

        fetchStories();
    }, []);

    const filteredStories = useMemo(() => {
        return stories.filter(story => {
            const industryMatch = activeIndustry === 'All' || story.industry === activeIndustry;
            const capabilityMatch = activeCapability === 'All' || story.capability === activeCapability;
            return industryMatch && capabilityMatch;
        });
    }, [stories, activeIndustry, activeCapability]);

    return (
        <div>
            <Hero
                title="Proof. Not Promises."
                subtitle='The "Client Stories" hub is the central repository for all proof. It is a filterable, interactive gallery, not a static list.'
            />

            <div className="py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-8">
                    <div>
                        <h3 className="font-semibold mb-3 text-charcoal">Industry</h3>
                        <div className="flex flex-wrap gap-2">
                            {industries.map(ind => <FilterButton key={ind} filter={ind} activeFilter={activeIndustry} setFilter={setActiveIndustry} />)}
                        </div>
                    </div>
                     <div>
                        <h3 className="font-semibold mb-3 text-charcoal">Platform Capability</h3>
                        <div className="flex flex-wrap gap-2">
                            {capabilities.map(cap => <FilterButton key={cap} filter={cap} activeFilter={activeCapability} setFilter={setActiveCapability} />)}
                        </div>
                    </div>
                </div>

                {isLoading ? (
                    <LoadingSpinner />
                ) : error ? (
                    <p className="mt-16 text-center text-red-500">{error}</p>
                ) : (
                    <motion.div layout className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <AnimatePresence>
                            {filteredStories.length > 0 ? (
                                filteredStories.map(story => (
                                    <ClientStoryCard key={story.id} story={story} />
                                ))
                            ) : (
                            <motion.p 
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="md:col-span-2 lg:col-span-3 text-center text-charcoal-light"
                                >
                                    No stories match the selected filters.
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )}
            </div>
            <CallToActionSection
                title="Ready to Write Your Success Story?"
                subtitle="Let's discuss how Akin can address your specific challenges and deliver measurable outcomes for your organization."
                buttonText="Become Our Next Client Story"
            />
        </div>
    );
};

export default ClientStoriesPage;