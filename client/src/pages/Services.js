import React from 'react';
import '../App.css';
import Footer from '../components/Footer';

const Services = () => {
    return (
        <>
            <section className="services" id="services">
                <div className="max-width">
                    <h2 className="title" data-aos="fade-down">My Services</h2>
                    <div className="serv-content">
                        <div className="card" data-aos="fade-up" id="1stBox" style={{ padding: '9px' }}>
                            <div className="box">
                                <i className="fas fa-laptop-code"></i>
                                <div className="text">Frontend Website Design</div>
                                <p>
                                    Welcome to our Frontend Website Design Service! Let's turn your ideas into pixel-perfect reality!
                                    Our team of skilled designers and developers is here to craft stunning, user-friendly websites
                                    tailored just for you.
                                </p>
                            </div>
                        </div>

                        <div className="card" data-aos="fade-up">
                            <div className="box">
                                <div className="text">Photo Editing</div>
                                <p>
                                    Welcome to our Photo Editing Service! Let us transform your images into works of art! Our
                                    skilled editors specialize in enhancing, retouching, and perfecting every detail to make your photos
                                    shine! Whether it's for personal memories or professional projects.
                                </p>
                            </div>
                        </div>

                        <div className="card" data-aos="fade-up">
                            <div className="box">
                                <div className="text">Video Editing</div>
                                <p>
                                    Lights, Camera, Edit! Welcome to our Video Editing Service! Let us bring your stories to life!
                                    Our talented editors craft compelling narratives, seamless transitions, and captivating effects to
                                    make your videos stand out! From vlogs to promotional content.
                                </p>
                            </div>
                        </div>

                        <div className="card" data-aos="fade-up" id="4thBox" style={{ padding: '20px' }}>
                            <div className="box">
                                <div className="text">Custom Website Development</div>
                                <p>
                                    Welcome to our Web Development Service! Let's build your digital presence! Our expert
                                    developers create responsive, user-friendly websites that are both visually stunning and functionally
                                    robust!
                                </p>
                            </div>
                        </div>

                        <div className="card" data-aos="fade-up" id="4thBox" style={{ padding: '20px' }}>
                            <div className="box">
                                <div className="text">Graphic Designer</div>
                                <p>
                                    Welcome to my creative realm! I'm a passionate graphic designer specializing in visual
                                    storytelling. Dive into my digital canvas and explore a world of captivating designs, vibrant colors, and
                                    pixel-perfect creations.
                                </p>
                            </div>
                        </div>

                        <div className="card" data-aos="fade-up">
                            <div className="box">
                                <div className="text">Figma Designer</div>
                                <p>
                                    Welcome to my Figma playground! As a design virtuoso, I sculpt user experiences with pixel-perfect
                                    precision. Dive into my world of interface magic, where every wireframe and prototype tells a
                                    compelling story.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;
