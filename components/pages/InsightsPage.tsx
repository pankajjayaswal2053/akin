

import React, { useState, useMemo, useEffect } from 'react';
import Button from '../ui/Button';
import Hero from '../ui/Hero';
import { Content } from '../../App';
import { motion, AnimatePresence } from 'framer-motion';
import InsightCard from '../ui/InsightCard';
import CallToActionSection from '../ui/CallToActionSection';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import LoadingSpinner from '../ui/LoadingSpinner';
import { localInsights, Insight } from '../../data/insights';
import { getFunctionsBaseUrl } from '../../firebase';

const topics = ["All", "AI Maturity", "Data Ontology", "Generative AI", "Supply Chain", "Energy", "Finance"];
const types = ["All", "Blog", "Report", "Whitepaper", "Analysis", "Viewpoint"];

interface InsightsPageProps {
  onInsightClick: (insight: Content) => void;
}

const InsightsPage: React.FC<InsightsPageProps> = ({ onInsightClick }) => {
    const [insights, setInsights] = useState<Insight[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [activeTopic, setActiveTopic] = useState('All');
    const [activeType, setActiveType] = useState('All');

    useEffect(() => {
        const fetchInsights = async () => {
            setIsLoading(true);
            try {
                const functionsBaseUrl = getFunctionsBaseUrl();
                const response = await fetch(`${functionsBaseUrl}/getInsights?orderBy=createdAt&orderDir=desc`);
                if (!response.ok) {
                    throw new Error('Failed to fetch insights');
                }
                const data = await response.json();
                setInsights(data);
                setError(null);
            } catch (err) {
                console.warn("Could not fetch insights, using local fallback data.", err);
                setInsights(localInsights);
                setError(null); // Clear error to show fallback data instead of error message
            } finally {
                setIsLoading(false);
            }
        };
        fetchInsights();
    }, []);

    const sortedInsights = useMemo(() => {
        try {
            const interests: { [key: string]: number } = JSON.parse(localStorage.getItem('userInterests') || '{}');
            const interestKeys = Object.keys(interests);

            if (interestKeys.length > 0) {
                 return [...insights].sort((a, b) => {
                    const getScore = (insight: Insight) => {
                        let score = 0;
                        const topic = insight.topic.toLowerCase();
                        for (const interest of interestKeys) {
                            if (topic.includes(interest.replace(/-/g, ' '))) {
                                score += interests[interest];
                            }
                        }
                        return score;
                    };
                    return getScore(b) - getScore(a);
                });
            }
            return insights;
        } catch (sortError) {
            console.error("Error sorting insights, using default order.", sortError);
            return insights;
        }
    }, [insights]);

    const filteredInsights = useMemo(() => {
        return sortedInsights.filter(insight => {
            if (insight.isFeatured) return false;
            const topicMatch = activeTopic === 'All' || insight.topic === activeTopic;
            const typeMatch = activeType === 'All' || insight.type === activeType;
            return topicMatch && typeMatch;
        });
    }, [sortedInsights, activeTopic, activeType]);
    
    const featuredInsight = insights.find(i => i.isFeatured);
    
    const FilterButton: React.FC<{ filter: string, activeFilter: string, setFilter: (f: string) => void }> = ({ filter, activeFilter, setFilter }) => (
        <button
            onClick={() => setFilter(filter)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${activeFilter === filter ? 'bg-charcoal text-white' : 'bg-gray-100 text-charcoal hover:bg-gray-200'}`}
        >
            {filter}
        </button>
    );

    return (
        <div>
            <Hero
                title="Akin Insights Hub"
                subtitle="A central hub for all thought leadership, designed to build authority, drive top-of-funnel SEO, and capture mid-funnel leads."
            />
            
            {isLoading ? (
                <div className="py-20"><LoadingSpinner /></div>
            ) : error ? (
                <p className="py-20 text-center text-red-500">{error}</p>
            ) : (
                <>
                    {featuredInsight && (
                        <section className="py-20 md:py-24 bg-white">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                                <button
                                    onClick={() => onInsightClick(featuredInsight)}
                                    className="cursor-pointer group relative rounded-lg shadow-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-electric-blue"
                                    aria-label={`View preview for ${featuredInsight.title}`}
                                >
                                    <img src="/images/insights/thrive-index.jpg" alt="Thrive Index" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="text-center text-white">
                                            <MagnifyingGlassIcon className="h-12 w-12 mx-auto" />
                                            <p className="mt-2 font-bold text-lg">View Preview</p>
                                        </div>
                                    </div>
                                </button>
                                <div>
                                    <p className="text-base font-semibold text-electric-blue uppercase tracking-wide">{featuredInsight.category}</p>
                                    <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-charcoal tracking-tight">{featuredInsight.title}</h2>
                                    <div className="mt-4 text-lg text-charcoal-light" dangerouslySetInnerHTML={{ __html: featuredInsight.content }} />
                                    <Button to={featuredInsight.href || '#'} className="mt-8">Explore the Index</Button>
                                </div>
                            </div>
                        </section>
                    )}

                    <div className="py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="space-y-8">
                            <div>
                                <h3 className="font-semibold mb-3 text-charcoal">Filter by Topic</h3>
                                <div className="flex flex-wrap gap-2">
                                    {topics.map(topic => <FilterButton key={topic} filter={topic} activeFilter={activeTopic} setFilter={setActiveTopic} />)}
                                </div>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-3 text-charcoal">Filter by Content Type</h3>
                                <div className="flex flex-wrap gap-2">
                                    {types.map(type => <FilterButton key={type} filter={type} activeFilter={activeType} setFilter={setActiveType} />)}
                                </div>
                            </div>
                        </div>

                        <motion.div layout className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            <AnimatePresence>
                                {filteredInsights.length > 0 ? (
                                    filteredInsights.map(insight => (
                                        <InsightCard key={insight.id} insight={insight} onInsightClick={onInsightClick} />
                                    ))
                                ) : (
                                    <motion.p 
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="md:col-span-2 lg:col-span-3 text-center text-charcoal-light"
                                    >
                                        No insights match the selected filters.
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </>
            )}

            <CallToActionSection
                title="From Insight to Impact."
                subtitle="Our insights are born from real-world engineering. Let's discuss how these concepts can be applied to solve your unique operational challenges."
                buttonText="Apply These Insights"
            />
        </div>
    );
};

export default InsightsPage;