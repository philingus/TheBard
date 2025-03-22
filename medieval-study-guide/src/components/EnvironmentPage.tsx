import { motion } from 'framer-motion';
import { useState } from 'react';

interface EnvironmentPageProps {
  onNext: () => void;
}

const environments = [
  { text: 'Quiet and Focused', emoji: '📚' },
  { text: 'Place with Halal Food', emoji: '🍲' },
  { text: 'Disability Friendly', emoji: '🦽' },
  { text: 'Spacious and Warm', emoji: '🔆' },
  { text: 'Cozy with Soft Lighting', emoji: '🕯️' },
  { text: 'Comfy Seating', emoji: '🛋️' },
  { text: 'Greenery / Nature Nearby', emoji: '🌿' },
  { text: 'Fast Wi-Fi', emoji: '⚡' },
];

const EnvironmentPage = ({ onNext }: EnvironmentPageProps) => {
  const [selectedEnvs, setSelectedEnvs] = useState<string[]>([]);

  const toggleEnvironment = (text: string) => {
    setSelectedEnvs(prev => 
      prev.includes(text) 
        ? prev.filter(env => env !== text)
        : [...prev, text]
    );
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="medieval-frame"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center gap-4 mb-8">
        <h2 className="glowing-text text-3xl">
          What kind of environment helps you thrive?
        </h2>
      </div>

      <p className="text-center text-lg mb-8 text-ink/80">
        Choose the vibe that fits your needs. You deserve a space that works for you.
      </p>

      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {environments.map(({ text, emoji }) => (
          <motion.button
            key={text}
            variants={item}
            onClick={() => toggleEnvironment(text)}
            className={`p-4 rounded-lg border-2 transition-all duration-300
                      flex flex-col items-center gap-2 group
                      ${selectedEnvs.includes(text)
                        ? 'border-accent bg-accent/20 shadow-magic'
                        : 'border-accent/30 hover:border-accent/60'}`}
          >
            <span className="text-2xl">{emoji}</span>
            <span className="text-sm text-center">{text}</span>
          </motion.button>
        ))}
      </motion.div>

      <motion.button
        onClick={onNext}
        className="medieval-button mx-auto block relative overflow-hidden"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative z-10">Find My Study Plan</span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/40"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </motion.button>
    </motion.div>
  );
};

export default EnvironmentPage;