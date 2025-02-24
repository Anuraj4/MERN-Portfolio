import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Skills from "../pages/Skills";
import NotFound from "../pages/NotFound";

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

// Motion wrapper to avoid repetition
const MotionWrapper = ({ children }) => (
  <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition}>
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MotionWrapper><Home /></MotionWrapper>} />
        <Route path="/about" element={<MotionWrapper><About /></MotionWrapper>} />
        <Route path="/services" element={<MotionWrapper><Services /></MotionWrapper>} />
        <Route path="/projects" element={<MotionWrapper><Projects /></MotionWrapper>} />
        <Route path="/contact" element={<MotionWrapper><Contact /></MotionWrapper>} />
        <Route path="/skills" element={<MotionWrapper><Skills /></MotionWrapper>} />
        <Route path="*" element={<MotionWrapper><NotFound /></MotionWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
