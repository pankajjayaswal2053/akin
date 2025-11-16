

import React, { useState, useMemo } from 'react';
import Hero from '../ui/Hero';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import CallToActionSection from '../ui/CallToActionSection';
import { useSEO } from '../seo/useSEO';
import StructuredData from '../seo/StructuredData';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQCategory {
  category: string;
  questions: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    category: 'The Platform (The "What")',
    questions: [
      {
        id: 'q1',
        question: "What exactly is the 'Cognitive Agent Platform'?",
        answer: "The 'Cognitive Agent Platform' is the central nervous system and digital workforce for your business. It's not an off-the-shelf product, but a bespoke, foundational platform we architect and build for you.<br/><br/>It's built on four pillars:<ul><li>The <strong>Unified Ontology</strong> (a 'digital twin' of your business for context).</li><li>A <strong>Production MLOps Engine</strong> (to build, test, and deploy AI).</li><li><strong>Cognitive Agents</strong> (the autonomous AI 'workers' that reason and act).</li><li>An <strong>Operations Command Center</strong> (your 'human-in-the-loop' control center).</li></ul>It's the complete, end-to-end system for moving AI from an experiment to the core of how you operate."
      },
      {
        id: 'q2',
        question: "What is a 'Unified Ontology' and why is it so important?",
        answer: "The Unified Ontology is the 'brain' of your Cognitive Agent Platform. It's a living, semantic map of your entire business—your factories, suppliers, products, customers, and all their relationships.<br/><br/>Its job is to provide ground truth. AI agents, especially Generative AI, cannot be trusted to operate on raw, siloed data; this is what causes 'hallucinations' and massive security risks.<br/><br/>Our agents reason over the Ontology—a single, verifiable, and secure source of truth. This is our 'no black box' guarantee. It's the most critical layer for building trustworthy, auditable, and truly intelligent operational AI."
      },
      {
        id: 'q3',
        question: "What is a 'Cognitive Agent'?",
        answer: "A Cognitive Agent is an autonomous, AI-powered 'digital worker' that can reason, plan, and act. A simple AI model can only make a prediction (e.g., 'This machine part has a 90% chance of failure'). A Cognitive Agent can take that prediction and act on it (e.g., 'Automatically create a priority maintenance ticket, check inventory for a replacement part, and re-route the production schedule to avoid downtime')."
      },
      {
        id: 'q4',
        question: "How is this different from RPA (Robotic Process Automation)?",
        answer: "RPA is 'dumb' automation. It's a simple script that mimics human clicks to move data from one box to another. It's fragile and breaks if a UI changes.<br/><br/>Our Cognitive Agent Platform is 'intelligent' automation. Our agents don't mimic clicks; they reason over your central Unified Ontology. They can handle ambiguity, make complex decisions, and automate entire workflows, not just single tasks."
      },
      {
        id: 'q5',
        question: "What is the 'Operations Command Center'?",
        answer: "This is your 'human-in-the-loop' control panel. It's the intuitive dashboard and interface we build that allows your operational teams to collaborate with, monitor, and govern your new cognitive agents. You can see their recommendations, approve their actions, and have full, auditable control over your AI-driven operations."
      },
      {
        id: 'q6',
        question: "'Ontology-Grounded Generative AI'?",
        answer: "This is our solution to the primary risk of Generative AI. Instead of letting a public LLM (like ChatGPT) 'guess' answers based on the public internet, we 'ground' it in your Unified Ontology. When you ask a question ('Which supplier for 'part A' is at risk?'), the AI doesn't invent an answer; it queries your real-time, proprietary, and secure ontology to find the factual, verifiable answer."
      },
      {
        id: 'q7-new',
        question: "My data is a total mess, spread across 30-year-old systems. Can you still build an Ontology?",
        answer: "Yes. In fact, this is the exact situation our platform is designed to solve. No one has perfect data. Our 'Architects & Engineers' and 'Ontology-First' approach (in Phase 1 & 2) is specifically designed to tackle this.<br/><br/>We don't require you to move all your data first. Our 'Engineering & Integration' phase involves building data pipelines that connect to your legacy systems as they are. The Unified Ontology is then built on top of this messy data, acting as a clean, federated, and intelligent layer that unifies it all without you having to perform a painful, multi-year data migration."
      },
      {
        id: 'q8-new',
        question: "What's the difference between your 'Unified Ontology' and a standard 'Data Warehouse' or 'Data Lakehouse'?",
        answer: "A Data Warehouse or Lakehouse is just a place to store data. It's a passive repository. The data is structured for analysis, but it has no context of your business operations.<br/><br/>A Unified Ontology is an active, reasoning map of your business. It doesn't just store that 'Part #123' and 'Supplier #456' exist; it understands the relationship between them (e.g., 'Supplier #456 is the only provider of the high-tensile steel required for Part #123, which is critical for Product Line A').<br/><br/>This semantic context is what allows a Cognitive Agent to reason and act, which a Data Warehouse cannot do."
      },
      {
        id: 'q9-new',
        question: "Do you host the platform, or do we?",
        answer: "You do. Our core principle is that your data and your platform are your proprietary assets. We are your 'Architects & Engineers,' not a SaaS vendor. We build and deploy the entire Cognitive Agent Platform within your own private cloud environment (AWS, Azure, or GCP). You have 100% ownership and control; we simply partner with you to operate and evolve it."
      },
      {
        id: 'q10-new',
        question: "How does the platform scale? What if our data volume 10x's?",
        answer: "The platform is designed from day one to scale. We use a modern, 'cloud-native' architecture (based on technologies like Kubernetes, Spark, and Kafka) that is horizontally scalable. This means that as your data volume or user load increases, we can seamlessly add more cloud resources to handle it. This is a core part of our 'Mission-Critical Resilience' principle and is planned for during the 'Vision & Strategy' phase."
      },
    ]
  },
  {
    category: 'The Process (The "How")',
    questions: [
        {
            id: 'q7',
            question: "What is the 'VELOCITY' framework?",
            answer: "VELOCITY is our end-to-end engineering discipline for taking your project from an idea to an operational, mission-critical platform. It's a six-phase framework that ensures our 'Architects & Engineers' model delivers value at every step.<br/><br/>The phases are: <strong>Vision, Engineering, Logic, Operationalize, Collaborate, and Evolve</strong>. It's our proven playbook for building your Cognitive Agent Platform."
        },
        {
            id: 'q8',
            question: "Why is Phase 1 (Vision) so important?",
            answer: "Phase 1 (Vision) is our 'Architect' phase. This is where we build the blueprint. Before we write any code, our senior architects embed with your team to map your operational reality, define the business case, and design the target-state architecture. This phase is critical because it de-risks the entire project by ensuring we are all building the right thing, for the right reasons, based on a shared, quantified definition of success."
        },
        {
            id: 'q9',
            question: "What does your 'Ontology-First, Not Data-First' principle mean?",
            answer: "A traditional 'data-first' approach is to dump all your data into a 'data lake' and hope to find insights later. This creates a 'data swamp.'<br/><br/>Our 'Ontology-First' approach is the opposite. We start in Phase 1 (Vision) by designing the business model—the Unified Ontology. We then build data pipelines to feed this model. This means that from day one, your data is organized, contextualized, and ready for AI to reason over. It's an architectural-led approach, not a data-dumping one."
        },
        {
            id: 'q10',
            question: "What does 'Product, Not Project' mean?",
            answer: "A 'project' has an end date. The vendor builds it, hands it over, and leaves. Your new, expensive system immediately starts to become 'legacy.'<br/><br/>We treat your platform as a living 'product.' Our engagement doesn't end at launch. We stay with you for the long term, as detailed in our Phase 6 (Evolve), to continuously identify new use cases, add new data sources, and deploy new cognitive agents. This ensures your platform is a perpetual source of competitive advantage, not a one-time cost."
        },
        {
            id: 'q11',
            question: "How long does a typical VELOCITY engagement take?",
            answer: "This depends on the complexity, but our VELOCITY framework is designed for iterative value, not a 'big bang' release. We work with you in Phase 1 (Vision) to find the highest-value 'thin slice' to tackle first. We can often deliver the first operational cognitive agents and a v1.0 platform into production within 4-6 months. From there, we 'Evolve' the platform by adding new capabilities every quarter."
        },
        {
            id: 'q16-new',
            question: "What does my internal team need to provide? What's the time commitment?",
            answer: "This is a key part of our 'Act with Shared Ownership' value. We are partners, not vendors, which means we need your team's expertise.<br/><br/><ul><li><strong>Phase 1 (Vision):</strong> We need dedicated time from your key stakeholders and subject-matter experts (SMEs) in collaborative workshops.</li><li><strong>Phase 2-4 (Build):</strong> We need access to your IT and data teams to facilitate integrations.</li><li><strong>Phase 5 (Collaborate):</strong> We need your end-users (the operators) to sit with us, use the system, and provide real-world feedback.</li></ul><br/>Your primary commitment is not technical, but providing the deep, institutional knowledge that we will encode into the platform."
        },
        {
            id: 'q17-new',
            question: "How do you handle project management and communication?",
            answer: "We operate with high transparency. You will have a dedicated Technical Program Manager (TPM) who is your single point of contact. We use an agile methodology with regular check-ins (e.g., weekly or bi-weekly sprints), a shared project management tool, and a joint steering committee for high-level governance. Our 'Act with Shared Ownership' value means you are never in the dark."
        },
        {
            id: 'q18-new',
            question: "What kind of training and 'knowledge transfer' do you provide?",
            answer: "This is the entire purpose of Phase 5 (Collaborate). We don't just hand you a manual. Our team will sit 'side-by-side' with your operators and analysts, providing hands-on training so they become experts and advocates. For your technical teams, we provide comprehensive documentation, shared code repositories, and paired-engineering sessions to ensure they can co-manage and co-evolve the platform with us."
        }
    ]
  },
  {
    category: 'The Partnership (The "Us")',
    questions: [
        {
            id: 'q12',
            question: "How is Akin different from a typical AI consultancy?",
            answer: "We are <strong>Architects and Engineers</strong>. This is our core difference.<br/><br/>Traditional consultants deliver slide decks and strategy (the 'architect' part) but can't build the production-grade system. Engineering-only firms can build, but lack the deep strategic vision. This creates a massive gap where projects fail.<br/><br/>Akin bridges that gap. We are a single, accountable partner that provides both the C-suite strategic vision and the world-class, hands-on-keyboard engineering to build and deploy your mission-critical platform."
        },
        {
            id: 'q13',
            question: "What industries do you specialize in?",
            answer: "Our Cognitive Agent Platform is industry-agnostic because the principles of unifying data, modeling operations, and deploying agents are universal.<br/><br/>However, our expertise is deepest in complex industrial and operational environments where the cost of failure is high. This includes: <strong>Manufacturing, Logistics & Supply Chain, Energy & Utilities, and Financial Services</strong>."
        },
        {
            id: 'q14',
            question: "What is your 'ideal client'?",
            answer: "Our ideal partner is a forward-thinking enterprise leader who recognizes that their operational complexity is a data problem and that 'off-the-shelf' software is no longer a competitive advantage. You are ready to move beyond 'science projects' and are looking for a long-term, accountable partner to build a true, bespoke, operational platform that will become your core differentiator."
        },
        {
            id: 'q15',
            question: "What does 'Act with Shared Ownership' mean?",
            answer: "This is one of our core values, and it defines our partnership. We are partners, not vendors. We embed with your teams and work as a single, low-ego unit with a shared goal. We take on your challenge as our own, with total accountability for the outcome. This eliminates the friction of a traditional client-vendor relationship and ensures the platform is fully adopted and championed by your own teams."
        },
        {
            id: 'q16',
            question: "What is the 'Thrive Index'?",
            answer: "The Thrive Index is our proprietary framework for measuring a company's readiness to compete in the age of AI. It's a diagnostic tool we use in Phase 1 (Vision) to assess your 'Thrive-Readiness' across six key pillars (like Technology, Innovation, and Results). It helps us identify your core strengths and gaps, which then informs the architectural blueprint for your Cognitive Agent Platform."
        },
        {
            id: 'q17',
            question: "What is the typical cost of an engagement?",
            answer: "Because every platform we build is 100% bespoke, there is no 'typical' cost. Following our Phase 1 (Vision) workshops, we deliver a detailed architectural blueprint and a phased roadmap. This roadmap includes a detailed cost and timeline for building the v1.0 platform, as well as a model for the long-term 'Evolve' partnership. We provide full transparency on cost and value before the first line of code is written."
        },
        {
            id: 'q18',
            question: "What do you mean by 'Power the Cognitive Operation'?",
            answer: "This is our ultimate 'why' and one of our core values. Our purpose is not just to build platforms; it is to create a new, more resilient way of doing business. We envision a future where organizations are not just automated, but <strong>autonomous</strong>—able to sense, predict, and adapt to change. We 'Power the Cognitive Operation' by building the platform that enables this 'self-driving' enterprise."
        },
        {
            id: 'q24-new',
            question: "How is the 'Thrive Index' different from a standard 'AI Maturity Model'?",
            answer: "A standard 'AI Maturity Model' only asks 'How good are you at AI?' This is too narrow.<br/><br/>Our Thrive Index is a holistic business diagnostic. It asks, 'How ready is your entire operation to compete?' It measures all six pillars of your business, including Humanity (your culture), Valiant (your leadership), and Exceptional (your customer experience), in addition to Technology. A high AI score is useless if your culture won't adopt it. The Thrive Index identifies all the gaps that must be solved to make your transformation successful."
        },
        {
            id: 'q26-new',
            question: "How is the long-term 'Evolve' partnership (Phase 6) priced?",
            answer: "This is a flexible partnership designed to fit your goals, not a rigid SaaS subscription. We typically work on a retainer model, which gives you a dedicated 'pod' of our architects, engineers, and data scientists. This pod functions as an extension of your own team, working against the strategic roadmap we develop with you to continuously deliver new value—whether that's deploying new agents, integrating new data sources, or optimizing performance."
        },
        {
            id: 'q28-new',
            question: "Why shouldn't I just hire my own team of data scientists to do this?",
            answer: "This is the 'Build vs. Buy (or 'Partner')' question, and it's a great one. You absolutely should have your own data scientists! Our goal is to empower them, not replace them.<br/><br/>The challenge is that building the foundational platform (the Unified Ontology, the MLOps Engine, the data pipelines) is an incredibly specialized, high-risk architectural feat that is different from data science.<br/><br/>We partner with you to build this foundation fast and correctly. This allows your internal team to stop being 'data plumbers' and focus on what they do best: building high-value models and agents on a platform that actually works."
        },
        {
            id: 'q29-new',
            question: "Can you give an example of a 'quick win' your platform can deliver?",
            answer: "Absolutely. A common 'Phase 1' quick win is to build the first version of the Unified Ontology for just one critical process (like your supply chain). We then deploy a single 'Cognitive Co-pilot' (see GenerativeAiPage) on top of it.<br/><br/>Within weeks, your operators can go from having 10 spreadsheets open to just asking a question in plain English (e.g., 'Which of my POs from supplier X are at risk of being late?') and getting an instant, accurate answer. This single use case immediately proves the value and builds momentum for the rest of the platform."
        },
        {
            id: 'q30-new',
            question: "What happens if we disagree on the strategic direction?",
            answer: "This is why our 'Architects & Engineers' and 'Act with Shared Ownership' values are so important. We are partners, not 'yes-men.' Disagreement and debate, especially in Phase 1 (Vision), are good—it means we are stress-testing the ideas.<br/><br/>We facilitate a structured process to resolve these debates with data, not just opinions. We use our ROI models and technical feasibility assessments to guide the group to a shared, quantified definition of success. Our job is to be your expert guide, not just a pair of hands."
        }
    ]
  },
  {
    category: 'Technology & Trust (The "Proof")',
    questions: [
        {
            id: 'q19',
            question: "How do you handle data security and privacy?",
            answer: "This is our highest priority, defined by our value to 'Deliver Operational Truth.' Our security is built-in, not bolted-on:<ul><li><strong>Architecture:</strong> Your platform is built in your own private, secure cloud environment. Your data never leaves your control.</li><li><strong>Ontology:</strong> The Unified Ontology is 'secure by design.' We enforce granular, policy-based access so users and agents can only access the specific data they are cleared for.</li><li><strong>Process:</strong> We follow a rigorous DevSecOps process and adhere to frameworks like GDPR, CCPA, and ISO/IEC 42001 to ensure your platform is auditable and compliant.</li></ul>"
        },
        {
            id: 'q20',
            question: "How do you secure Generative AI and prevent data leaks?",
            answer: "We never feed your sensitive, proprietary data to a public model. Our 'Ontology-Grounded' approach solves this in two ways:<ul><li><strong>Private Models:</strong> We deploy open-source LLMs inside your secure cloud environment. The model runs locally, and your data never leaves.</li><li><strong>Grounded Reasoning:</strong> The AI is not allowed to 'guess.' It is forced to find its answers by querying your secure, on-premise Unified Ontology, ensuring all responses are factual and based only on your approved data.</li></ul>"
        },
        {
            id: 'q21',
            question: "What is your technology stack?",
            answer: "We are 'technology-agnostic' and 'best-of-breed.' This means we are 'Architects' who select the right tool for your job, not a 'one-size-fits-all' stack.<br/><br/>That said, our platforms are typically built on a modern, open, and enterprise-grade stack. This includes:<ul><li><strong>Cloud:</strong> AWS, Azure, and/GCP.</li><li><strong>Data & Ontology:</strong> Kafka, Spark, Databricks, Snowflake, PostgreSQL, MongoDB.</li><li><strong>MLOps & Agents:</strong> Kubernetes, MLflow, Docker, Seldon Core, Python, Go.</li><li><strong>Experience:</strong> React, TypeScript, GraphQL.</li></ul>"
        },
        {
            id: 'q22',
            question: "Are you cloud-agnostic?",
            answer: "Yes. We are certified experts on all three major cloud providers (AWS, Azure, and GCP). We will architect your platform on the cloud that best suits your existing stack and strategic goals, or in a multi-cloud or hybrid-cloud environment if required."
        },
        {
            id: 'q23',
            question: "What does 'Bespoke Intelligence' mean?",
            answer: "We don't use 'off-the-shelf,' black-box AI models. A generic model doesn't understand the unique, hard-won logic of your business. We build 'B bespoke Intelligence' by encoding your specific operational nuances and expertise into custom-built models and agents. This ensures the AI reasons about your business the same way your best people do."
        },
        {
            id: 'q24',
            question: "What happens if an AI agent makes a mistake?",
            answer: "This is the entire purpose of our 'Human-in-the-Loop Governance' and 'Operations Command Center' (Pillar 4 of our platform). For mission-critical decisions, an agent doesn't act with total autonomy. It makes a recommendation to your human operator, who can then approve, deny, or adjust the action. Furthermore, because every action is based on the 'Operational Truth' of the ontology, all decisions are 100% auditable and traceable."
        },
        {
            id: 'q25',
            question: "Do I own the code and the IP?",
            answer: "Yes. The bespoke Cognitive Agent Platform, including the Unified Ontology and all custom-built cognitive agents, is your proprietary asset. We are your 'Architects & Engineers,' and the final product is 100% yours. Our 'Evolve' partnership is simply our way of continuing to help you build and maintain your competitive advantage."
        },
        {
            id: 'q32-new',
            question: "What specific compliance frameworks can you build for? (e.g., HIPAA, FedRAMP, etc.)",
            answer: "We architect your platform to meet your specific regulatory needs. We have experience building systems that adhere to:<ul><li>HIPAA for protected health information (PHI).</li><li>GDPR & CCPA for consumer data privacy.</li><li>SOC 2 for service organization controls.</li><li>ISO/IEC 42001 for AI management systems.</li></ul><br/>Support for frameworks like FedRAMP or CMMC can be designed into the architecture from day one in the 'Vision & Strategy' phase. We build compliance into the platform's code, making audits simpler and more reliable."
        },
        {
            id: 'q38-new',
            question: "What are the limitations of a Cognitive Agent?",
            answer: "This is a critical question. An agent's intelligence is only as good as the data and logic it has access to.<br/><br/><ul><li><strong>Data Limitation:</strong> If data is not available or piped into the Ontology, the agent cannot reason about it. It is 'blind' to what it cannot see.</li><li><strong>Logic Limitation:</strong> An agent cannot replicate human intuition or make creative leaps outside of its defined logic. It is a 'logic engine,' not a human.</li></ul><br/>This is why our 'Human-in-the-Loop' (HITL) governance is a non-negotiable part of our platform. We use agents to automate 90% of the 'known' work, freeing up your human experts to handle the 10% of 'unknown' exceptions that require true human intuition."
        },
        {
            id: 'q39-new',
            question: "How do you measure model performance and 'data drift' after launch?",
            answer: "This is a core function of our Production MLOps Engine (Pillar 2) and our Phase 5/6 (Collaborate/Evolve) partnership. We build automated monitoring directly into the platform to track:<ul><li><strong>Model Drift:</strong> We monitor the statistical properties of live data and alert your team if it starts to 'drift' too far from the data the model was trained on, which indicates a re-train is needed.</li><li><strong>Performance:</strong> We track the model's accuracy against real-world outcomes.</li><li><strong>Operational KPIs:</strong> We monitor the business impact (e.g., 'Are we actually reducing downtime?').</li></ul>"
        }
    ]
  }
];


const FAQPage: React.FC = () => {
    useSEO({
        title: 'Frequently Asked Questions',
        description: 'The Akin Answer Engine. Your "blue book" for understanding our Cognitive Agent Platform, our VELOCITY process, and our partnership model.',
    });
    
    const allQuestions = useMemo(() => faqData.flatMap(category => category.questions), []);

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': allQuestions.map(item => ({
            '@type': 'Question',
            'name': item.question,
            'acceptedAnswer': {
                '@type': 'Answer',
                'text': item.answer.replace(/<[^>]*>?/gm, '')
            }
        }))
    };

    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

    const filteredFaqs = useMemo(() => {
        let categories = faqData;
        if (activeCategory !== 'All') {
            categories = categories.filter(c => c.category === activeCategory);
        }

        if (searchQuery.length < 2) {
            return categories;
        }

        const lowerCaseQuery = searchQuery.toLowerCase();
        return categories
            .map(category => ({
                ...category,
                questions: category.questions.filter(q =>
                    q.question.toLowerCase().includes(lowerCaseQuery) ||
                    q.answer.toLowerCase().includes(lowerCaseQuery)
                ),
            }))
            .filter(category => category.questions.length > 0);
    }, [searchQuery, activeCategory]);

    const allVisibleQuestionIds = useMemo(() => {
        return filteredFaqs.flatMap(c => c.questions.map(q => q.id));
    }, [filteredFaqs]);

    const toggleItem = (id: string) => {
        setOpenItems(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const expandAll = () => setOpenItems(allVisibleQuestionIds.reduce((acc, id) => ({ ...acc, [id]: true }), {}));
    const collapseAll = () => setOpenItems({});

    const highlightText = (text: string, highlight: string) => {
        if (!highlight) return { __html: text };
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return {
            __html: parts.map((part, i) =>
                part.toLowerCase() === highlight.toLowerCase()
                    ? `<strong class="bg-electric-blue/20 font-bold not-italic">${part}</strong>`
                    : part
            ).join('')
        };
    };

    const categories = ['All', ...faqData.map(c => c.category)];

    return (
        <>
            <StructuredData schema={faqSchema} />
            <div>
                <Hero
                    title="Frequently Asked Questions"
                    subtitle="Your 'blue book' for understanding our platform, our process, and our partnership. Find the answers you need."
                />

                <div className="py-20 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    <section className="mb-12 text-center">
                        <h2 className="text-3xl font-extrabold text-charcoal">Our "No Black Box" Guarantee</h2>
                        <div className="mt-4 prose prose-lg max-w-none text-charcoal-light mx-auto">
                            <p>We created this "Blue Book" in the spirit of two of our core values: "Deliver Operational Truth" and "Act with Shared Ownership." We are Architects & Engineers, not salespeople. We believe the best partnerships are built on transparency, not on buzzwords. An "AI black box" is a liability, not an asset.</p>
                            <p>This "Blue Book" is our commitment to you. It's a comprehensive, transparent guide to our technology, our methodology, and our philosophy. We are not just building a platform; we are building trust. Your most complex questions deserve clear, direct, and honest answers.</p>
                        </div>
                    </section>

                    {/* Search and Filter UI */}
                    <div className="sticky top-20 z-20 bg-stone/80 backdrop-blur-sm py-4 mb-8">
                         <div className="relative mb-4">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </div>
                            <input
                                type="search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Type your question (e.g., 'ontology', 'cost', 'security')"
                                className="w-full rounded-md border-gray-300 py-3 pl-10 pr-4 text-charcoal shadow-sm focus:border-electric-blue focus:ring-electric-blue bg-white"
                            />
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${activeCategory === cat ? 'bg-charcoal text-white' : 'bg-white text-charcoal hover:bg-gray-100'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-end gap-4 mb-8">
                        <button onClick={expandAll} className="px-4 py-2 text-sm font-semibold rounded-md bg-gray-100 text-charcoal hover:bg-gray-200 transition-colors">Expand All</button>
                        <button onClick={collapseAll} className="px-4 py-2 text-sm font-semibold rounded-md bg-gray-100 text-charcoal hover:bg-gray-200 transition-colors">Collapse All</button>
                    </div>

                    <div className="space-y-12">
                        {filteredFaqs.length > 0 ? (
                            filteredFaqs.map(category => (
                                <div key={category.category}>
                                    <h2 className="text-2xl font-bold text-charcoal pb-2 mb-6 border-b-2 border-electric-blue">{category.category}</h2>
                                    <div className="space-y-4">
                                        {category.questions.map(item => (
                                            <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                                                <button
                                                    onClick={() => toggleItem(item.id)}
                                                    className="w-full flex justify-between items-center p-6 text-left"
                                                    aria-expanded={!!openItems[item.id]}
                                                    aria-controls={`faq-answer-${item.id}`}
                                                >
                                                    <h3 className="text-lg font-semibold text-charcoal" dangerouslySetInnerHTML={highlightText(item.question, searchQuery)} />
                                                    <motion.div animate={{ rotate: openItems[item.id] ? 180 : 0 }} transition={{ duration: 0.3 }}>
                                                        <ChevronDownIcon className="h-6 w-6 text-charcoal-light flex-shrink-0" />
                                                    </motion.div>
                                                </button>
                                                <AnimatePresence>
                                                    {openItems[item.id] && (
                                                        <motion.div
                                                            id={`faq-answer-${item.id}`}
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: 'auto' }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                            className="prose prose-lg max-w-none text-charcoal-light"
                                                        >
                                                            {/* FIX: Removed erroneous function call parentheses from `searchQuery`. */}
                                                            <div className="p-6 pt-0" dangerouslySetInnerHTML={highlightText(item.answer, searchQuery)} />
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-12">
                                <p className="text-xl font-semibold">No results found for "{searchQuery}"</p>
                                <p className="mt-2 text-charcoal-light">Try searching for a different term or clearing your filters.</p>
                            </div>
                        )}
                    </div>
                </div>
                <CallToActionSection
                    title="Have More Specific Questions?"
                    subtitle="We're ready to dive deep into your unique challenges and requirements. Schedule a call with one of our engineers for a no-obligation technical discussion."
                    buttonText="Schedule a Technical Call"
                />
            </div>
        </>
    );
};

export default FAQPage;
