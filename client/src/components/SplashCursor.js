import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./SplashCursor.css";

const colors = [
  "#ff0080", "#ff9900", "#00ffcc", "#ff00ff", "#00ffff", 
  "#ff3366", "#33ff99", "#ffcc00", "#9900ff", "#66ccff"
];

const SplashCursor = () => {
  const [splashes, setSplashes] = useState([]);

  const handleMouseMove = (e) => {
    const newSplash = {
      x: e.clientX,
      y: e.clientY,
      color: colors[Math.floor(Math.random() * colors.length)],
      id: Math.random(),
      size: Math.random() * 15 + 15, // Slightly larger for fluid effect
    };

    setSplashes((prev) => [...prev.slice(-30), newSplash]); // Keep last 30 splashes for better trail

    setTimeout(() => {
      setSplashes((prev) => prev.filter((s) => s.id !== newSplash.id));
    }, 500);
  };

  const handleMouseClick = (e) => {
    for (let i = 0; i < 5; i++) { // More fluid burst effect
      const newSplash = {
        x: e.clientX + Math.random() * 20 - 10,
        y: e.clientY + Math.random() * 20 - 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        id: Math.random(),
        size: Math.random() * 20 + 20, // Bigger size for click splash
      };

      setSplashes((prev) => [...prev, newSplash]);

      setTimeout(() => {
        setSplashes((prev) => prev.filter((s) => s.id !== newSplash.id));
      }, 700);
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleMouseClick);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleMouseClick);
    };
  }, []);

  return (
    <div className="splash-cursor-container">
      {splashes.map((splash) => (
        <motion.div
          key={splash.id}
          className="splash"
          initial={{ opacity: 1, scale: 0 }}
          animate={{ opacity: 0, scale: 3, rotate: 360 }} // Adds rotation and expansion
          transition={{ duration: 0.8, ease: "easeOut" }} // Slower for a fluid feel
          style={{
            left: splash.x,
            top: splash.y,
            background: splash.color,
            width: splash.size + "px",
            height: splash.size + "px",
          }}
        />
      ))}
    </div>
  );
};

export default SplashCursor;
