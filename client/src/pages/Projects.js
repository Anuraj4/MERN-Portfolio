import React from 'react';
import '../App.css';
import projectImage from '../images/projectImage.jpg';
import Footer from '../components/Footer';

const Projects = () => {

    return (
        <>
            <section className="projects" id="projects">
                <div className="max-width">
                    <h2 className="title" data-aos="fade-up">My Projects</h2>
                    <div className="serv-content">
                        {/* Project 1 */}
                        <div className="card" data-aos="flip-left">
                            <div className="box">
                                <img src={projectImage} loading="lazy" width="10%" height="auto" alt="Project 1 Image" />
                                <div className="text">
                                    <span>
                                        <a href="https://github.com/Anuraj4/Data-Structure-Visualizer" target="_blank" rel="noopener noreferrer">
                                            Project 1) Data Structure Visualizer
                                        </a>
                                    </span>
                                </div>
                                <p>
                                    A comprehensive visual tool that demonstrates all operations on arrays, linked lists, stacks, and queues.
                                    It provides interactive animations for each operation.
                                </p>
                                {/* Add buttons at the bottom of the card */}
                                <div className="card-buttons">
                                    <a
                                        href="https://github.com/Anuraj4/Data-Structure-Visualizer"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-card btn-github"
                                    >
                                        <i className="fab fa-github mr-4"></i>
                                    </a>
                                    <a
                                        href="https://datavizpro.netlify.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-card btn-demo"
                                    >
                                        <i className="fas fa-external-link-alt"></i> Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="card" data-aos="flip-left">
                            <div className="box">
                                <img src={projectImage} style={{ maxWidth: '100%' }} height="auto" loading="lazy" alt="Project 2 Image" />
                                <div className="text">
                                    <span>
                                        <a href="https://github.com/Anuraj4/SubmitCV-Website" target="_blank" rel="noopener noreferrer">
                                            Project 2) SubmitCV Application
                                        </a>
                                    </span>
                                </div>
                                <p>
                                    Built a resume submission platform with React, MongoDB, HTML, integrating Google Forms for resume submissions. It is used for the HR's and Interviewers.
                                </p>
                                {/* Add buttons at the bottom of the card */}
                                <div className="card-buttons">
                                    <a
                                        href="https://github.com/Anuraj4/SubmitCV-Website"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-card btn-github"
                                    >
                                        <i className="fab fa-github mr-4"></i>
                                    </a>
                                    <a
                                        href="https://kudosware-internship.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-card btn-demo"
                                    >
                                        <i className="fas fa-external-link-alt"></i> Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Project 3 */}
                        <div className="card" data-aos="flip-left">
                            <div className="box">
                                <img src={projectImage} style={{ maxWidth: '100%' }} height="auto" loading="lazy" alt="Project 3 Image" />
                                <div className="text">
                                    <span>
                                        <a href="https://github.com/Anuraj4/Health-Recommendation-System" target="_blank" rel="noopener noreferrer">
                                            Project 3) AI - Based Health and Wellness Recommendation System
                                        </a>
                                    </span>
                                </div>
                                <p>
                                    Implemented predictive modeling with logistic regression, achieving 85% accuracy in heart disease prediction. It predicts the heart attacks.
                                </p>
                                {/* Add buttons at the bottom of the card */}
                                <div className="card-buttons">
                                    <a
                                        href="https://github.com/Anuraj4/Health-Recommendation-System"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-card btn-github"
                                    >
                                        <i className="fab fa-github mr-4"></i>
                                    </a>
                                    <a
                                        href="https://health-recommendation-app.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-card btn-demo"
                                    >
                                        <i className="fas fa-external-link-alt"></i> Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Project 4 */}
                        <div className="card" data-aos="flip-left">
                            <div className="box">
                                <img src={projectImage}
                                    style={{ maxWidth: '100%' }}
                                    height="auto"
                                    loading="lazy"
                                    alt="Project 4 Image"
                                />
                                <div className="text">
                                    <span>
                                        <a
                                            href="https://github.com/Anuraj4/E-Commerse_React_App"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Project 4) E-Commerce MERN Application
                                        </a>
                                    </span>
                                </div>
                                <p>
                                    Welcome to the E-Commerce Website! This project is a comprehensive online shopping
                                    platform built using the powerful MERN stack.
                                </p>
                                <div className="card-buttons">
                                    <a
                                        href="https://github.com/Anuraj4/E-Commerse_React_App"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-card btn-github"
                                    >
                                        <i className="fab fa-github mr-4"></i>
                                    </a>
                                    <a
                                        href="https://e-commerse-react-app.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-card btn-demo"
                                    >
                                        <i className="fas fa-external-link-alt"></i> Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Projects;
