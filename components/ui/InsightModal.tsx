
import React, { useEffect, useState } from 'react';
import { XMarkIcon, PhotoIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import { Content } from '../../App';

interface ContentModalProps {
  content: Content | null;
  onClose: () => void;
}

const InsightModal: React.FC<ContentModalProps> = ({ content, onClose }) => {
  const [imageError, setImageError] = useState(false);
  
  useEffect(() => {
    setImageError(false); // Reset error state when content changes

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    if (content) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }

    return () => {
        window.removeEventListener('keydown', handleEsc);
        document.body.style.overflow = '';
    };
  }, [content, onClose]);
  
  return (
    <AnimatePresence>
        {content && (
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4" onClick={onClose}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white rounded-lg shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden relative flex flex-col md:flex-row"
                >
                    <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-20 bg-white/50 rounded-full p-1" aria-label="Close modal">
                        <XMarkIcon className="h-6 w-6" />
                    </button>

                    <div className="hidden md:block md:w-2/5 flex-shrink-0 relative bg-gray-100">
                        {!imageError ? (
                            <picture>
                                <source srcSet={`/images/insights/${content.id}.webp`} type="image/webp" />
                                <source srcSet={`/images/insights/${content.id}.jpg`} type="image/jpeg" />
                                <img 
                                    src={`/images/insights/${content.id}.jpg`}
                                    alt={content.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    onError={() => {
                                        const physicalPath = `public/images/insights/${content.id}.jpg`;
                                        console.error(`InsightModal Error: Failed to load image. The application expected to find the file at the physical path: \`${physicalPath}\`. Please verify the file exists, the name is spelled correctly, and the extension is exactly '.jpg'.`);
                                        setImageError(true);
                                    }}
                                />
                            </picture>
                        ) : (
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 p-4 text-center">
                                <PhotoIcon className="h-16 w-16" />
                                <p className="mt-4 font-semibold">Image Not Found</p>
                                <p className="mt-2 text-xs max-w-xs px-4">
                                    Please ensure the file exists at the physical path: <br/><strong>{`public/images/insights/${content.id}.jpg`}</strong>
                                </p>
                            </div>
                        )}
                        {!imageError && <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>}
                    </div>

                    <div className="flex-1 overflow-y-auto p-8 md:p-12 text-left">
                        <p className="text-base font-semibold text-electric-blue uppercase tracking-wide">{content.category}</p>
                        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-charcoal tracking-tight">{content.title}</h2>
                        <div className="mt-6 prose prose-lg max-w-none text-charcoal-light prose-headings:text-charcoal prose-strong:text-charcoal prose-ul:list-disc prose-ul:pl-6 prose-li:my-1 prose-a:text-electric-blue hover:prose-a:text-charcoal" dangerouslySetInnerHTML={{ __html: content.content }}></div>
                    </div>

                </motion.div>
            </div>
        )}
    </AnimatePresence>
  );
};

export default InsightModal;
