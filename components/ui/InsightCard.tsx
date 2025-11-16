import React from 'react';
import Card from './Card';
import { motion } from 'framer-motion';
import { Content } from '../../App';
import { Link } from 'react-router-dom';
import { Insight } from '../../data/insights';

interface InsightCardProps {
  insight: Insight;
  onInsightClick: (insight: Content) => void;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const InsightCard: React.FC<InsightCardProps> = ({ insight, onInsightClick }) => {
  return (
    <motion.div
      layout
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.3 }}
      className="flex"
    >
      <Card className="flex flex-col w-full">
        <div className="flex-grow">
          <div className="flex gap-2 mb-2">
            <span className="text-xs font-semibold uppercase px-2 py-1 bg-electric-blue/20 text-electric-blue rounded-full">{insight.type}</span>
            <span className="text-xs font-semibold uppercase px-2 py-1 bg-gray-200 text-charcoal-light rounded-full">{insight.topic}</span>
          </div>
          <h3 className="text-xl font-bold text-charcoal">{insight.title}</h3>
        </div>
        {insight.href ? (
            <Link to={insight.href} className="mt-4 pt-4 border-t border-gray-200 font-semibold text-electric-blue hover:text-charcoal text-left w-full transition-colors">
                Read More &rarr;
            </Link>
        ) : (
            <button onClick={() => onInsightClick(insight)} className="mt-4 pt-4 border-t border-gray-200 font-semibold text-electric-blue hover:text-charcoal text-left w-full transition-colors">
                Read More &rarr;
            </button>
        )}
      </Card>
    </motion.div>
  );
};

export default InsightCard;