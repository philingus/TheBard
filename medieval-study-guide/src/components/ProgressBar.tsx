import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className="w-full h-4 bg-ink/30 rounded-full mb-8">
      <motion.div
        className="h-full bg-accent rounded-full relative overflow-hidden"
        style={{ width: `${progress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-accent/50 to-accent animate-pulse" />
      </motion.div>
    </div>
  );
};

export default ProgressBar;