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
                            </div>
                        </div>

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
                                    Built a resume submission platform with React, MongoDB, HTML, integrating Google Forms for resume submissions.
                                </p>
                            </div>
                        </div>

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
                                    Implemented predictive modeling with logistic regression, achieving 85% accuracy in heart disease prediction.
                                </p>
                            </div>
                        </div>

                        <div className="card" data-aos="flip-left">
                            <div className="box">
                                <img src={projectImage} style={{ maxWidth: '100%' }} height="auto" loading="lazy" alt="Project 4 Image"/>
                                <div className="text">
                                    <span>
                                        <a href="https://github.com/Anuraj4/React-Weather-App" target="_blank" rel="noopener noreferrer">
                                            Project 4) React Weather App
                                        </a>
                                    </span>
                                </div>
                                <p>
                                    Built a weather application that allows users to check the current weather and forecast for a given location.
                                </p>
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
