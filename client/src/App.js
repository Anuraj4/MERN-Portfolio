import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion'; // Import AnimatePresence and motion
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Skills from './pages/Skills';
import NotFound from './pages/NotFound';

// Slide and fade transition
const pageTransition = {
  initial: { opacity: 0, y: 20 },  // Start off slightly below and invisible
  animate: { opacity: 1, y: 0 },   // Move to original position and become visible
  exit: { opacity: 0, y: -20 }      // Exit by moving slightly upwards and fading out
};

const AnimatedRoutes = () => {
  const location = useLocation(); // Get the current location

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition}>
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition}>
              <About />
            </motion.div>
          }
        />
        <Route
          path="/services"
          element={
            <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition}>
              <Services />
            </motion.div>
          }
        />
        <Route
          path="/projects"
          element={
            <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition}>
              <Projects />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition}>
              <Contact />
            </motion.div>
          }
        />
        <Route
          path="/skills"
          element={
            <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition}>
              <Skills />
            </motion.div>
          }
        />
        <Route
          path="*"
          element={
            <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition}>
              <NotFound />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes /> {/* Wrap your animated routes component */}
    </Router>
  );
}

export default App;
