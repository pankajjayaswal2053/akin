import React from 'react';
import Card from './Card';
import { motion } from 'framer-motion';
import OptimizedImage from './OptimizedImage';

interface Story {
  // FIX: Changed id type from number to string to match Firestore document ID type.
  id: string;
  title: string;
  industry: string;
  capability: string;
  outcome: string;
  client: string;
}

interface ClientStoryCardProps {
  story: Story;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const ClientStoryCard: React.FC<ClientStoryCardProps> = ({ story }) => {
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
        <OptimizedImage 
          src={`/images/client-stories/story-${story.id}.jpg`} 
          alt={story.title} 
          width={400}
          height={267}
          className="rounded-md mb-4" 
        />
        <div className="flex-grow">
          <div className="flex gap-2 mb-2">
            <span className="text-xs font-semibold uppercase px-2 py-1 bg-electric-blue/20 text-electric-blue rounded-full">{story.industry}</span>
            <span className="text-xs font-semibold uppercase px-2 py-1 bg-gray-200 text-charcoal-light rounded-full">{story.capability}</span>
          </div>
          <h3 className="text-xl font-bold text-charcoal">{`How ${story.client} ${story.title}`}</h3>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-lg font-bold text-green-600">{story.outcome}</p>
        </div>
      </Card>
    </motion.div>
  );
};

export default ClientStoryCard;
