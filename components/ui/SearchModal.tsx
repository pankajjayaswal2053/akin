
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { searchIndex } from '../../data/searchIndex';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Auto-focus the input when the modal opens
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
      setQuery(''); // Reset query on close
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const filteredResults = useMemo(() => {
    if (query.length < 2) return [];
    const lowerCaseQuery = query.toLowerCase();
    return searchIndex.filter(item =>
      item.title.toLowerCase().includes(lowerCaseQuery) ||
      item.keywords.toLowerCase().includes(lowerCaseQuery) ||
      item.breadcrumb.toLowerCase().includes(lowerCaseQuery)
    ).slice(0, 10); // Limit results to 10
  }, [query]);
  
  // Highlight matching text
  const highlightText = (text: string, highlight: string) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
        <span>
            {parts.map((part, i) =>
                part.toLowerCase() === highlight.toLowerCase() ? (
                    <strong key={i} className="font-bold text-electric-blue">{part}</strong>
                ) : (
                    part
                )
            )}
        </span>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-start justify-center p-4 pt-[10vh] sm:pt-[15vh]"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: 'easeOut' as const }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg shadow-2xl w-full max-w-2xl overflow-hidden relative"
            role="dialog"
            aria-modal="true"
            aria-labelledby="search-modal-title"
          >
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for solutions, industries, insights..."
                className="w-full bg-white border-0 border-b border-gray-200 py-4 pl-11 pr-12 text-lg text-charcoal placeholder:text-gray-400 focus:ring-0"
                id="search-modal-title"
              />
               <button onClick={onClose} className="absolute top-0 right-0 p-4 text-gray-500 hover:text-gray-800 z-20" aria-label="Close search">
                  <XMarkIcon className="h-6 w-6" />
               </button>
            </div>
            
            {query.length > 1 && (
                <div className="max-h-[60vh] overflow-y-auto">
                    {filteredResults.length > 0 ? (
                        <ul>
                            {filteredResults.map(item => (
                                <li key={item.path}>
                                    <Link 
                                        to={item.path} 
                                        onClick={onClose}
                                        className="block p-4 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
                                    >
                                        <p className="text-sm text-electric-blue">{highlightText(item.breadcrumb, query)}</p>
                                        <p className="font-semibold text-charcoal">{highlightText(item.title, query)}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="p-8 text-center text-charcoal-light">No results found for "{query}"</p>
                    )}
                </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
