import React from 'react';
import '../App.css';
import html from '../images/skill-icons/icons8-html-5.svg';
import js from '../images/skill-icons/icons8-javascript.svg';
import react from '../images/skill-icons/icons8-react-native.svg';
import flutter from '../images/skill-icons/icons8-flutter.svg';
import java from '../images/skill-icons/icons8-java-48.png';
import git from '../images/skill-icons/icons8-git-48.png';
import css from '../images/skill-icons/icons8-css3.svg';
import nodejs from '../images/skill-icons/icons8-nodejs.svg';
import vscode from '../images/skill-icons/icons8-visual-studio-code-2019.svg';
import cpp from '../images/skill-icons/icons8-c++.svg';
import python from '../images/skill-icons/icons8-python-48.png';
import github from '../images/skill-icons/icons8-github-48.png'
import Footer from '../components/Footer';
import Certifications from './Certifications';


const Skills = () => {
    return (
        <>
            <section className="skills" id="skills">
                <div className="max-width" data-aos="fade-up">
                    <h2 className="title" data-aos="fade-up">My Skills</h2>
                    <div className="skills-content">
                        <div className="column left">
                            <div className="text">
                                My creative skills & experiences.
                            </div>
                            <p className="paragraph-2">
                                As a web developer, I bring a toolbox full of skills! My expertise includes HTML, CSS,
                                and JavaScript, enabling me to craft visually stunning and interactive websites. With experience
                                in frameworks like React. I create dynamic user experiences. My backend
                                proficiency spans languages such as Node.js and databases like SQL. Plus, I'm adept at
                                version control and responsive design to ensure seamless functionality across devices.
                            </p>
                            <a href="https://www.linkedin.com/in/anuraj-venkatpurwar-06628721b/" target="_blank" id="readMore">
                                Read More
                            </a>
                        </div>

                        <div className="column right skill-box">
                            <div className="icons">
                                <img src={css} alt="CSS" id="css-icon" data-aos="flip-left" />
                                <img src={js} alt="JavaScript" id="js-icon" data-aos="flip-left" />
                                <img src={react} alt="React" id="react-icon" data-aos="flip-left" />
                                <img src={flutter} id="flutter-icon" data-aos="flip-left" />
                                <img src={java} alt="Java" id="java-icon" data-aos="flip-left" />
                                <img src={git} alt="Git" id="git-icon" data-aos="flip-left" />
                            </div>

                            <div className="icons">
                                <img src={html} alt="HTML" id="html-icon" data-aos="flip-left" />
                                <img src={nodejs} alt="Node.js" id="nodejs-icon" data-aos="flip-left" />
                                <img src={vscode} alt="VSCode" id="vscode-icon" data-aos="flip-left" />
                                <img src={cpp} alt='CPP' id="cpp-icon" data-aos="flip-left" />
                                <img src={python} alt="Python" id="python-icon" data-aos="flip-left" />
                                <img src={github} alt="GitHub" id="github-icon" data-aos="flip-left" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Certifications />
            <Footer />
        </>

    );
}

export default Skills;
