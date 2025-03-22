import { motion } from 'framer-motion';

interface WelcomePageProps {
  onNext: () => void;
}

const WelcomePage = ({ onNext }: WelcomePageProps) => {
  return (
    <motion.div 
      className="medieval-frame min-h-[80vh] flex flex-col items-center justify-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative mb-8"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.img 
          src="/icon.png" 
          alt="Medieval Study Guide Logo" 
          className="w-[120px] h-[120px] rounded-full object-cover
                     shadow-lg shadow-accent/50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        />
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: [
              '0 0 10px rgba(139,69,19,0.3)',
              '0 0 20px rgba(139,69,19,0.6)',
              '0 0 10px rgba(139,69,19,0.3)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      <motion.h1 
        className="text-5xl mb-6 font-medieval text-black"
        animate={{ textShadow: ['0 0 8px rgba(139,69,19,0.3)', '0 0 16px rgba(139,69,19,0.6)', '0 0 8px rgba(139,69,19,0.3)'] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Welcome, Seeker of Knowledge!
      </motion.h1>

      <p className="text-xl mb-8 text-black max-w-2xl text-center font-medieval">
        Your perfect study guide and study spot await. Powered by AI, designed for students like you.
      </p>

      <motion.button
        onClick={onNext}
        className="medieval-button group relative overflow-hidden"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative z-10">Begin Your Journey</span>
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

      <motion.div
        className="absolute bottom-4 text-center text-black text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Built with empathy, designed for students with dreams. StudySpot AI is your academic ally.
      </motion.div>
    </motion.div>
  );
};

export default WelcomePage;