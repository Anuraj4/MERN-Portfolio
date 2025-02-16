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
                                <div className="tooltip">
                                    <img src={css} alt="CSS" loading="lazy" id="css-icon" data-aos="flip-left" />
                                    <span className="tooltip-text">CSS</span>
                                </div>
                                <div className="tooltip">
                                    <img src={js} alt="JavaScript" loading="lazy" id="js-icon" data-aos="flip-left" />
                                    <span className="tooltip-text">JavaScript</span>
                                </div>
                                <div className="tooltip">
                                    <img src={react} alt="React" loading="lazy" id="react-icon" data-aos="flip-left" />
                                    <span className="tooltip-text">ReactJS</span>
                                </div>
                                <div className="tooltip">
                                    <img src={flutter} alt="Flutter" loading="lazy" id="flutter-icon" data-aos="flip-left" />
                                    <span className="tooltip-text">Flutter</span>
                                </div>
                                <div className="tooltip">
                                    <img src={java} alt="Java" loading="lazy" id="java-icon" data-aos="flip-left" />
                                    <span className="tooltip-text">Java</span>
                                </div>
                                <div className="tooltip">
                                    <img src={git} alt="Git" loading="lazy" id="git-icon" data-aos="flip-left" />
                                    <span className="tooltip-text">Git</span>
                                </div>
                            </div>
                            <div className="icons">
                                <div className="tooltip">
                                    <img src={html} alt="HTML" loading="lazy" id="html-icon" data-aos="flip-left" />
                                    <span className="tooltip-text">HTML</span>
                                </div>
                                <div className="tooltip">
                                    <img src={nodejs} alt="Node.js" loading="lazy" id="nodejs-icon" data-aos="flip-left" />
                                    <span className="tooltip-text">NodeJS</span>
                                </div>
                                <div className="tooltip">
                                    <img src={vscode} alt="VSCode" loading="lazy" id="vscode-icon" data-aos="flip-left" />
                                    <span className="tooltip-text">VS Code</span>
                                </div>
                                <div className="tooltip">
                                    <img src={cpp} alt="C++" loading="lazy" id="cpp-icon" data-aos="flip-left" />
                                    <span className="tooltip-text">C++</span>
                                </div>
                                <div className="tooltip">
                                    <img src={python} alt="Python" loading="lazy" id="python-icon" data-aos="flip-left" />
                                    <span className="tooltip-text">Python</span>
                                </div>
                                <div className="tooltip">
                                    <img src={github} alt="GitHub" loading="lazy" id="github-icon" data-aos="flip-left" />
                                    <span className="tooltip-text">GitHub</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Certifications />
        </>

    );
}

export default Skills;
