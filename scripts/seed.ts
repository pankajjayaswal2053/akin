// To run this script:
// 1. Make sure you have a `firebase-service-account.json` file in your root directory.
//    You can generate this from your Firebase project settings > Service accounts.
// 2. Run `npm install -g ts-node` if you haven't already.
// 3. Run `ts-node ./scripts/seed.ts` from your project root.

import * as admin from 'firebase-admin';

// IMPORTANT: Path to your service account key file
// FIX: Replaced CommonJS 'require' with ES module 'import' to resolve TypeScript error.
// This requires `resolveJsonModule` to be enabled in tsconfig.json.
import serviceAccount from '../firebase-service-account.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Data from components/pages/ClientStoriesPage.tsx
const allStories = [
  { id: 1, title: 'Reduced Supply Chain Costs by 15% with a Unified Logistics Ontology', industry: 'Logistics', capability: 'Unified Ontology', outcome: '15% cost reduction', client: 'Global Logistics Inc.' },
  { id: 2, title: 'Achieved 98% Prediction Accuracy in Manufacturing', industry: 'Manufacturing', capability: 'AI Model Development', outcome: '98% accuracy', client: 'Auto OEM Major' },
  { id: 3, title: 'Cut Downtime by 32% via Predictive Maintenance', industry: 'Manufacturing', capability: 'Operational Deployment', outcome: '32% less downtime', client: 'Auto OEM Major' },
  { id: 4, title: 'Improved Forecast Accuracy by 20% in Retail', industry: 'Logistics', capability: 'AI Model Development', outcome: '20% forecast improvement', client: 'Global Logistics Inc.' },
  { id: 5, title: 'Streamlined Compliance with an Open Architecture Platform', industry: 'Finance', capability: 'Open Architecture', outcome: '50% faster audits', client: 'Regional Bank' },
];

// Data from components/pages/CareersPage.tsx
const openRoles = [
    {
        id: "ai-ml-engineer",
        title: "AI / Machine Learning Engineer",
        location: "Singapore / Remote",
        type: "Full-time",
        summary: "You will design, build, and deploy bespoke machine learning models that form the cognitive core of our clients' operations. You are an expert in moving models from prototype to robust, scalable production systems.",
        responsibilities: [
            "Partner with clients to understand their business challenges and translate them into machine learning problems.",
            "Develop, train, and fine-tune bespoke AI/ML models using modern frameworks like TensorFlow and PyTorch.",
            "Engineer production-grade features by leveraging our clients' Unified Ontology.",
            "Build robust MLOps pipelines for continuous integration, deployment, and monitoring of ML models.",
            "Stay at the forefront of AI/ML research and apply new techniques to solve real-world problems."
        ],
        qualifications: [
            "Degree in Computer Science, Engineering, Statistics, or a related quantitative field.",
            "3+ years of hands-on experience building and deploying machine learning models in a production environment.",
            "Proficiency in Python and common ML libraries (e.g., scikit-learn, pandas, NumPy).",
            "Experience with at least one major cloud platform (AWS, GCP, Azure) and their AI/ML services.",
            "Strong understanding of MLOps principles and tools (e.g., Docker, Kubernetes, MLflow)."
        ]
    },
    {
        id: "data-engineer",
        title: "Data Engineer",
        location: "Singapore / Remote",
        type: "Full-time",
        summary: "You are the architect of the data nervous system. You will build the resilient, high-throughput data pipelines that feed our Unified Ontologies, integrating disparate sources and ensuring data integrity and governance.",
        responsibilities: [
            "Design, build, and maintain scalable data pipelines to ingest and process data from a wide variety of sources (APIs, databases, streaming feeds).",
            "Develop data models and ETL/ELT processes that support the construction of our Unified Ontology.",
            "Work with Platform Engineers to ensure the data infrastructure is secure, reliable, and cost-effective.",
            "Implement data quality checks and monitoring to ensure the integrity of the data powering our AI models.",
            "Collaborate with ML Engineers to provide the clean, contextual data they need to build effective models."
        ],
        qualifications: [
            "Degree in Computer Science, Engineering, or a related field.",
            "3+ years of experience in a data engineering role.",
            "Strong proficiency in SQL and Python.",
            "Hands-on experience with data processing technologies like Spark, Kafka, and Airflow.",
            "Experience with cloud-based data warehouses (e.g., Snowflake, BigQuery, Redshift) and data lakes.",
            "Solid understanding of data modeling, data governance, and data security best practices."
        ]
    },
    {
        id: "platform-engineer",
        title: "Platform Engineer",
        location: "Singapore / Remote",
        type: "Full-time",
        summary: "You build the rock-solid infrastructure that our AI Operating Systems run on. You are an expert in cloud-native technologies, MLOps, and building secure, scalable, and reliable platforms for mission-critical applications.",
        responsibilities: [
            "Design and implement secure, scalable, and resilient cloud infrastructure using Infrastructure as Code (IaC) principles (e.g., Terraform, CloudFormation).",
            "Build and manage CI/CD pipelines for our applications and machine learning models.",
            "Implement robust monitoring, logging, and alerting to ensure the health and performance of our platforms.",
            "Automate everything from deployment to security and governance.",
            "Work closely with Data and ML engineers to build the optimal environment for their needs."
        ],
        qualifications: [
            "Degree in Computer Science, Engineering, or a related field.",
            "3+ years of experience in a Platform, DevOps, or SRE role.",
            "Deep expertise in at least one major cloud provider (AWS, GCP, Azure).",
            "Strong experience with containerization (Docker) and orchestration (Kubernetes).",
            "Proficiency in scripting languages (e.g., Python, Go, Bash).",
            "A security-first mindset and experience with DevSecOps practices."
        ]
    }
];

// Data from components/pages/InsightsPage.tsx
const allInsights = [
  { id: 'thrive-index', title: "The Akin Thrive Index", type: "Report", topic: "AI Maturity", isFeatured: true, href: "/insights/thrive-index", category: 'Signature Content', content: '<p>Our new signature content asset, The Thrive Index, is an opinionated guide to the industry, benchmarking how companies are progressing on their journey to thrive alongside technological advancement. It provides a comprehensive scoring framework across six foundational pillars of business readiness.</p>' },
  { id: 'llm-fail', title: "3 Ways LLMs Fail in Production (and How to Fix Them)", type: "Blog", topic: "Generative AI", category: 'Featured Blog', content: `...` },
  { id: 'data-lake', title: "Beyond the Data Lake: The Case for an Operational Ontology", type: "Whitepaper", topic: "Data Ontology", category: 'Whitepaper', content: `...` },
  { id: 'operational-genai', title: "Beyond the Chatbot: Operationalizing Generative AI", type: "Whitepaper", topic: "Generative AI", category: 'Whitepaper', content: `...` },
  { id: 'supply-chain-2025', title: "2025 State of AI in Supply Chain", type: "Report", topic: "Supply Chain", href: "/insights/state-of-ai-supply-chain", category: 'Report', content: `...` },
  { id: 'digital-utility', title: "Analysis: The Digital Utility Transformation", type: "Analysis", topic: "Energy", href: "/insights/digital-utility-transformation", category: 'Analysis', content: `<p>...</p>` },
  { id: 'ai-finance-viewpoint', title: "Viewpoint: AI in Financial Services", type: "Viewpoint", topic: "Finance", href: "/insights/ai-in-financial-services", category: 'Viewpoint', content: `<p>...</p>` },
  { id: 'roi-ontology', title: "The ROI of a Unified Data Ontology: A B2B Framework", type: "Whitepaper", topic: "AI Maturity", category: 'Whitepaper', content: `...` },
];


async function seedCollection(collectionName: string, data: any[]) {
    console.log(`Seeding collection: ${collectionName}...`);
    const collectionRef = db.collection(collectionName);
    
    // Optional: Delete existing documents to prevent duplicates
    const snapshot = await collectionRef.get();
    const batch = db.batch();
    snapshot.docs.forEach(doc => {
        batch.delete(doc.ref);
    });
    await batch.commit();
    console.log(`Cleared existing documents in ${collectionName}.`);

    // Add new documents
    for (const item of data) {
        // Use a specific ID if it exists (like from insights), otherwise let Firestore auto-generate
        if (item.id) {
            await collectionRef.doc(String(item.id)).set(item);
        } else {
            await collectionRef.add(item);
        }
    }
    console.log(`Successfully seeded ${data.length} documents into ${collectionName}.`);
}

async function main() {
    try {
        await seedCollection('clientStories', allStories);
        await seedCollection('careers', openRoles);
        await seedCollection('insights', allInsights);
        console.log('Database seeding completed successfully!');
    } catch (error) {
        console.error('Error seeding database:', error);
    }
}

main();