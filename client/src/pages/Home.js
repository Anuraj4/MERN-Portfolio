import React, { useEffect } from 'react';
import '../App.css';
import img from '../images/png8.png';
import Footer from '../components/Footer';
import Typed from 'typed.js';

const Home = () => {
    useEffect(() => {
        // Options for Typed.js
        const options = {
            strings: ["Web Developer", "Photo Editor", "Graphic Designer", "Coder", "Problem Solver"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true,
            fadeOut: true,
            fadeOutClass: "typed-fade-out", // Add a class for fade out effect
            cursorChar: "|", // Custom cursor character
            cursorBlinking: true, // Enable cursor blinking
        };

        // Initialize Typed.js
        const typed = new Typed(".typing", options);

        // Cleanup function to destroy Typed.js instance on unmount
        return () => {
            typed.destroy();
        };
    }, []); // Empty dependency array to run once on mount

    return (
        <>
            <section className="home" id="home">
                <div className="max-width">
                    <div className="home-content">
                        <div className="text-4" data-aos="fade-up">
                            <h1 style={{ marginBottom: "30px" }} id="greeting"></h1>
                        </div>
                        <div className="text-1" data-aos="fade-up">
                            <div id="welcome"></div>
                            <h1 style={{ marginBottom: "30px" }}>Welcome to My Website</h1>
                        </div>
                        <div className="text-1" data-aos="fade-up">Hello, my name is</div>
                        <div className="text-2" data-aos="fade-up">Anuraj</div>
                        <div className="text-3" data-aos="fade-up">I am a <span className="typing"></span></div>
                        <div className="images">
                            <img src={img} width="70%" height="auto" alt="Profile Picture" style={{ marginTop: "20px" }} />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Home;
