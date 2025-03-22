import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GiScrollUnfurled, GiSpellBook, GiCastle } from 'react-icons/gi';
import WelcomePage from './components/WelcomePage';
import SubjectPage from './components/SubjectPage';
import EnvironmentPage from './components/EnvironmentPage';
import ResultPage from './components/ResultPage';
import ProgressBar from './components/ProgressBar';

const pages = ['welcome', 'subject', 'environment', 'result'];

function App() {
  const [currentPage, setCurrentPage] = useState('welcome');
  const [subject, setSubject] = useState('');
  const [progress, setProgress] = useState(0);

  const goToNextPage = () => {
    const currentIndex = pages.indexOf(currentPage);
    if (currentIndex < pages.length - 1) {
      setCurrentPage(pages[currentIndex + 1]);
      setProgress((currentIndex + 1) * (100 / (pages.length - 1)));
    }
  };

  return (
    <div className="min-h-screen p-4">
      <ProgressBar progress={progress} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="container mx-auto max-w-4xl"
        >
          {currentPage === 'welcome' && <WelcomePage onNext={goToNextPage} />}
          {currentPage === 'subject' && (
            <SubjectPage onNext={goToNextPage} setSubject={setSubject} />
          )}
          {currentPage === 'environment' && <EnvironmentPage onNext={goToNextPage} />}
          {currentPage === 'result' && <ResultPage subject={subject} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
