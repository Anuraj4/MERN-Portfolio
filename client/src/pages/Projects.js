import React from 'react';
import '../App.css';
import projectImage from '../images/projectImage.jpg';

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
                                    Built a resume submission platform with React, MongoDB, HTML, integrating Google Forms for resume submissions. It is used for the HR's and Interviewers. The uploaded CV stored in MongoDB Database.
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
                                        <a href="https://github.com/Anuraj4/Youtube-Thumbnail-Grabber" target="_blank" rel="noopener noreferrer">
                                            Project 3) Youtube Thumbnail Grabber
                                        </a>
                                    </span>
                                </div>
                                <p>
                                    This project is a Svelte-based web application that allows users to download YouTube video thumbnails by entering the valid youtube video URL with proper resolution.                                </p>
                                {/* Add buttons at the bottom of the card */}
                                <div className="card-buttons">
                                    <a
                                        href="https://github.com/Anuraj4/Youtube-Thumbnail-Grabber"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-card btn-github"
                                    >
                                        <i className="fab fa-github mr-4"></i>
                                    </a>
                                    <a
                                        href="https://youtube-thumbnail-grabber-nine.vercel.app/"
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
                                    This project is a feature-rich, fully responsive online shopping platform, crafted using the powerful
                                    MERN stack (MongoDB, Express.js, React, Node.js) to deliver dynamic user experience.
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

                        {/* Project 5 */}
                        <div className="card" data-aos="flip-left">
                            <div className="box">
                                <img src={projectImage}
                                    style={{ maxWidth: '100%' }}
                                    height="auto"
                                    loading="lazy"
                                    alt="Project 5 Image"
                                />
                                <div className="text">
                                    <span>
                                        <a
                                            href="https://github.com/Anuraj4/React-Weather-App"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Project 5) React Weather Application
                                        </a>
                                    </span>
                                </div>
                                <p>
                                    Build a weather application that allows users to check the current weather and forecast for a given location.
                                </p>
                                <div className="card-buttons">
                                    <a
                                        href="https://github.com/Anuraj4/React-Weather-App"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-card btn-github"
                                    >
                                        <i className="fab fa-github mr-4"></i>
                                    </a>
                                    <a
                                        href="https://react-weather-app-seven-livid.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-card btn-demo"
                                    >
                                        <i className="fas fa-external-link-alt"></i> Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Project 6 */}
                        <div className="card" data-aos="flip-left">
                            <div className="box">
                                <img src={projectImage}
                                    style={{ maxWidth: '100%' }}
                                    height="auto"
                                    loading="lazy"
                                    alt="Project 5 Image"
                                />
                                <div className="text">
                                    <span>
                                        <a
                                            href="https://github.com/Anuraj4/Quiz-App-MERN"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Project 6) MERN Quiz Application
                                        </a>
                                    </span>
                                </div>
                                <p>
                                    It allows users to take a quiz, select answers, and get their scores at the end. The app dynamically fetches quiz questions and tracks user responses.                                </p>
                                <div className="card-buttons">
                                    <a
                                        href="https://github.com/Anuraj4/Quiz-App-MERN"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-card btn-github"
                                    >
                                        <i className="fab fa-github mr-4"></i>
                                    </a>
                                    <a
                                        href="https://quiz-app-fawn-nine-10.vercel.app/"
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
        </>
    );
};

export default Projects;
