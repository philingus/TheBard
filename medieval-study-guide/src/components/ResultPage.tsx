import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface ResultPageProps {
  subject: string;
}

const ResultPage = ({ subject }: ResultPageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
          <motion.div 
            className="bg-[#1f1f1f]/90 backdrop-blur-xl text-white max-w-4xl w-full p-8 rounded-2xl shadow-2xl border border-yellow-500 space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-center"
            >
              <span className="text-6xl">⌛</span>
            </motion.div>
            <h2 className="text-2xl text-center mb-4 text-yellow-500 animate-pulse">
              Consulting the Scrolls...
            </h2>
            <p className="text-lg text-center text-gray-300">
              Your personalized study spell is being written... 📜
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-black/70 z-0"></div>
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <motion.div 
          className="bg-[#1f1f1f]/90 backdrop-blur-xl text-white max-w-4xl w-full p-8 rounded-2xl shadow-2xl border border-yellow-500 space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-4xl text-center font-medieval text-yellow-500"
            animate={{ textShadow: ['0 0 8px rgba(234,179,8,0.3)', '0 0 16px rgba(234,179,8,0.6)', '0 0 8px rgba(234,179,8,0.3)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Your Study Scroll Awaits!
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <motion.div 
              className="space-y-6"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">📚</span>
                <h3 className="text-2xl font-medieval text-yellow-400">Study Focus: {subject}</h3>
              </div>
              
              <p className="text-lg text-gray-300">Let's break it down so you can crush this test! 💪</p>
              
              <div className="space-y-4">
                {[
                  { emoji: '📝', text: 'Practice 5 sample problems with units shown' },
                  { emoji: '⏱️', text: '25-min study session x 3 rounds (Pomodoro method)' },
                  { emoji: '☕', text: 'Short break with a drink or snack in between' },
                  { emoji: '✨', text: 'Bonus: Quiz yourself using flashcards' }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3 bg-white/5 p-3 rounded-lg"
                    whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  >
                    <span>{item.emoji}</span>
                    <span className="text-gray-200">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="space-y-6"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🗺️</span>
                <h3 className="text-2xl font-medieval text-yellow-400">Recommended Study Spot</h3>
              </div>

              <div className="bg-white/5 p-6 rounded-lg border border-yellow-500/30">
                <h4 className="text-xl mb-4 text-yellow-300">🏞️ Sip and Say Café</h4>
                <ul className="space-y-3 text-gray-300">
                  <li>📍 2414 Morris Ave, Union, NJ 07083</li>
                  <li>🕐 Open till evening | 5-min from Kean</li>
                  <li>💸 Student-friendly prices</li>
                  <li>📶 Fast Wi-Fi</li>
                  <li>🧆 Halal Options Available</li>
                  <li>♿ Disability Friendly Access</li>
                  <li>🌡️ Cozy, modern interior</li>
                </ul>

                <div className="mt-6 space-y-4">
                  <h5 className="flex items-center gap-2 text-yellow-300">
                    <span>⭐</span>
                    <span>Student Reviews</span>
                  </h5>
                  
                  {[
                    { stars: 5, text: "Perfect for solo studying. Their Wi-Fi is fast!", author: "Jamal, Bio Major" },
                    { stars: 4, text: "Love that it's halal and close to campus.", author: "Fatima, Nursing" },
                    { stars: 5, text: "Staff are super nice and helpful!", author: "Luis, Psychology" }
                  ].map((review, index) => (
                    <motion.div 
                      key={index}
                      className="bg-white/5 p-3 rounded-lg"
                      whileHover={{ scale: 1.02 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + (index * 0.2) }}
                    >
                      <div className="flex gap-1 mb-2">
                        {"⭐".repeat(review.stars)}
                      </div>
                      <p className="text-sm mb-1 text-gray-300">{review.text}</p>
                      <p className="text-xs text-yellow-500/60">— {review.author}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-8 flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <button className="px-6 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition-colors">
              Start Studying Now
            </button>
            <button className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors">
              View on Google Maps
            </button>
          </motion.div>

          <motion.p
            className="text-center text-sm mt-8 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            Built with empathy, designed for students with dreams. StudySpot AI is your academic ally.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default ResultPage;