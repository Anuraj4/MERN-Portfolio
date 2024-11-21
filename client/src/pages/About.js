import React, { useEffect } from 'react';
import '../App.css';
import img from '../images/about_image.png';
import Footer from '../components/Footer';
import Typed from 'typed.js';
import WorkExperience from './WorkExperience';
import Competitive from './Competitive';


const About = () => {

    useEffect(() => {
        const options1 = {
            strings: ["Web Developer", "Photo Editor", "Graphic Designer", "Coder", "Problem Solver"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true,
            fadeOut: true,
            fadeOutClass: "typed-fade-out", 
            cursorChar: "|", 
            cursorBlinking: true, 
        };

        const typed1 = new Typed(".typing", options1);

        return () => {
            typed1.destroy();
        };
    }, []);
    const showAlert = () => {
        alert('Resume download feature is coming soon!');
    };

    return (
        <>
            <section className="about" id="about">
                <div className="max-width">
                    <h2 className="title" data-aos="fade-down">About Me</h2>
                    <div className="about-content">
                        <div className="column left" data-aos="fade-right">
                            <img src={img} loading="lazy" alt="Profile" />
                        </div>
                        <div className="column right" data-aos="fade-up">
                            <div className="text">
                                I'm Anuraj and I'm a <span className="typing"></span>
                            </div>
                            <p className="paragraph">
                                Throughout my academic journey, I have gained proficiency in programming languages such as C++, Java, and
                                Python, enabling me to design and implement efficient algorithms and software applications. My coursework
                                has also equipped me with a solid understanding of computer architecture, digital systems design, and
                                embedded systems, empowering me to analyze and optimize hardware components for optimal performance.
                            </p>
                            <a href="#" onClick={showAlert} id="demo">Download Resume</a>
                        </div>
                    </div>
                </div>
            </section>
            <WorkExperience />
            <Competitive />
            <Footer />

        </>
    );
}

export default About;
