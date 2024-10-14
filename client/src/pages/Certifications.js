import React from 'react';
import coursera from '../images/coursera1.webp';
import IBM from '../images/IBM.png';

const Certifications = () => {
    return (
        <section className="skills" id="skills">
            <div className="max-width" data-aos="fade-down">
                <h2 className="title" data-aos="fade-up">My Certifications</h2>
                <div className="skills-content">
                    <div className="certification" data-aos="fade-up">
                        <a href="https://coursera.org/share/9d10a891ffa011f1d60ccd6eb4f4ff6c" target="_blank" rel="noopener noreferrer">
                            <img src={coursera} width="120" height="120" alt="Java Programming Certification" />
                            <p>Java Programming</p>
                        </a>
                    </div>
                    <div className="certification" data-aos="fade-up">
                        <a href="https://coursera.org/share/bd8169729ce9c9c3a894e3f52e3ed166" target="_blank" rel="noopener noreferrer">
                            <img src={coursera} width="120" height="120" alt="Preparation for Job Interview Certification" />
                            <p>Preparation for Job Interview</p>
                        </a>
                    </div>
                    <div className="certification" data-aos="fade-up">
                        <a href="https://www.credly.com/badges/29abcb58-00b7-44d8-9711-407a0fc77bfd/linked_in_profile" target="_blank" rel="noopener noreferrer">
                            <img src={IBM} alt="Python for Data Science Certification" width="120" height="120" />
                            <p>Python for Data Science, AI & Development</p>
                        </a>
                    </div>
                    <div className="certification" data-aos="fade-up">
                        <a href="https://coursera.org/share/2ac9769835009048e45f5bcb9fee4c3c" target="_blank" rel="noopener noreferrer">
                            <img src={IBM} alt="Web Development Certification" width="120" height="120" />
                            <p>Web Development</p>
                        </a>
                    </div>
                    {/* Add more certifications as needed */}
                </div> {/* Close skills-content */}
            </div> {/* Close max-width */}
        </section>
    );
}

export default Certifications;
