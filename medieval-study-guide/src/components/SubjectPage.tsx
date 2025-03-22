import { motion } from 'framer-motion';
import { useState } from 'react';

interface SubjectPageProps {
  onNext: () => void;
  setSubject: (subject: string) => void;
}

const SubjectPage = ({ onNext, setSubject }: SubjectPageProps) => {
  const [inputValue, setInputValue] = useState('');
  const suggestions = [
    'Biology exam',
    'Data Structures assignment',
    'Resume writing',
    'Chemistry - Stoichiometry',
    'Psychology research paper'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setSubject(e.target.value);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setSubject(suggestion);
  };

  return (
    <motion.div 
      className="medieval-frame"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="flex items-center justify-center gap-4 mb-8">
        <h2 className="glowing-text text-3xl">
          What would you like to study today?
        </h2>
      </div>

      <div className="relative max-w-2xl mx-auto">
        <div className="relative">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="w-full p-4 bg-parchment/50 border-2 border-accent rounded-md 
                     focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent
                     font-medieval text-lg placeholder-ink/50"
            placeholder="e.g., Biology exam, Data Structures assignment, Resume writing, etc."
          />
          <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl">📚</span>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          {suggestions.map((suggestion) => (
            <motion.button
              key={suggestion}
              onClick={() => handleSuggestionClick(suggestion)}
              className="p-3 text-sm bg-parchment/30 rounded-md hover:bg-accent/20 
                         transition-colors duration-200 text-ink/80 text-left"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {suggestion}
            </motion.button>
          ))}
        </div>
      </div>

      <motion.button
        onClick={onNext}
        className="medieval-button mt-8 mx-auto block"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Continue Your Quest
      </motion.button>
    </motion.div>
  );
};

export default SubjectPage;