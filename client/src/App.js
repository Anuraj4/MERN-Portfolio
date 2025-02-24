import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import AnimatedRoutes from "./pages/AnimatedRoutes";
import SplashCursor from "./components/SplashCursor";

function App() {
  return (
    <Router>
      <SplashCursor />
      <Navbar />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
