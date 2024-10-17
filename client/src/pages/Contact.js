import React, { useState, useEffect } from 'react';
import '../App.css'; // Ensure the correct path for the CSS file
import { MdEmail } from 'react-icons/md';
import Footer from '../components/Footer';

const Contact = () => {
    const [selectedRating, setSelectedRating] = useState('');
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false); // Loading state


    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Change button text to "Submitting..." when form is submitted


        // Prepare the form data
        const formData = {
            name,
            email,
            subject,
            message
        };

        try {
            const timeoutPromise = new Promise((_, reject) =>
                setTimeout(() => reject(new Error("Request timed out")), 5000) // 5 seconds timeout
            );
            // Send form data to backend
            const fetchPromise = fetch(`https://mern-portfolio-pdnu.onrender.com/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const response = await Promise.race([fetchPromise, timeoutPromise]);

            const data = await response.json();
            console.log('data: ', data);
            if (data.success) {
                alert('Message sent successfully!❤️👍');
                // Clear form inputs after successful submission
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
            } else {
                alert('Failed to send message.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Please refresh page and try once again ☺️');
        } finally {
            setIsSubmitting(false);
        }
    };


    useEffect(() => {
        const ratingsContainer = document.querySelector('.ratings-container');
        const sendBtn = document.querySelector('#send');
        const panel = document.querySelector('#panel');

        const removeActive = () => {
            const ratings = document.querySelectorAll('.rating');
            ratings.forEach((rating) => rating.classList.remove('active'));
        };

        const handleRatingClick = (e) => {
            const ratingElement = e.target.closest('.rating');
            if (ratingElement) {
                removeActive();
                ratingElement.classList.add('active');
                const ratingText = ratingElement.querySelector('small').innerHTML;
                setSelectedRating(ratingText);
            }
        };
        const handleSendClick = () => {
            if (selectedRating) {
                panel.innerHTML = `
                <div style="display: flex; align-items: center;">
                    <FaHeart style="color: red; font-size: 24px;" />  <!-- Heart icon -->
                    <strong>Thank You!</strong>
                </div>
                <br>
                <strong>Feedback: ${selectedRating}</strong>
                <p>We'll use your feedback to improve our customer support</p>
            `;
            } else {
                alert('Please select a rating before sending your review.');
            }
        };

        ratingsContainer.addEventListener('click', handleRatingClick);
        sendBtn.addEventListener('click', handleSendClick);

        // Cleanup event listeners on component unmount
        return () => {
            ratingsContainer.removeEventListener('click', handleRatingClick);
            sendBtn.removeEventListener('click', handleSendClick);
        };
    }, [selectedRating]);

    return (
        <>
            <section className="contact" id="contact">
                <div className="max-width">
                    <h2 className="title" data-aos="fade-up">Contact Me</h2>
                    <div className="contact-content">
                        <div className="column left" data-aos="flip-left">
                            <div className="text">Let's Get in Touch</div>
                            <p className="paragraph-3">
                                Contact me anytime using the info below:
                            </p>
                            <div className="icons">
                                <div className="row">
                                    <i className="fas fa-user"></i>
                                    <div className="info">
                                        <div className="head">Name</div>
                                        <div className="sub-title">Anuraj Venkatpurwar</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="info">
                                        <div className="head">Address</div>
                                        <div className="sub-title">At Post Pune, Maharashtra</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <MdEmail style={{ fontSize: '20px' }} />
                                    <div className="info">
                                        <div className="head">Email</div>
                                        <div className="sub-title">anurajvenkatpurwar@gmail.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="column right" data-aos="flip-right">
                            <div className="text">Message Me</div>
                            <form onSubmit={handleSubmit}>
                                <div className="fields">
                                    <div className="field">
                                        <input
                                            className="name"
                                            type="text"
                                            placeholder="Name"
                                            required
                                            autoComplete="off"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)} // Controlled component
                                        />
                                    </div>
                                    <div className="field">
                                        <input
                                            className="email"
                                            type="email"
                                            placeholder="Email"
                                            required
                                            autoComplete="off"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)} // Controlled component
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        required
                                        autoComplete="off"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)} // Controlled component
                                    />
                                </div>
                                <div className="textarea">
                                    <textarea
                                        cols="30"
                                        rows="10"
                                        placeholder="Message"
                                        required
                                        autoComplete="off"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)} // Controlled component
                                    ></textarea>
                                </div>
                                <div className="button" id="contact_btn">
                                    <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Send Message'}</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

                <div id="panel" className="panel-container" data-aos="flip-right">
                    <strong>How satisfied are you with our <br /> portfolio website?</strong>
                    <div className="ratings-container">
                        <div className="rating">
                            <img src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-17.png" loading="lazy" alt="Unhappy" />
                            <small>Unhappy</small>
                        </div>
                        <div className="rating">
                            <img src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-3.png" loading="lazy" alt="Neutral" />
                            <small>Neutral</small>
                        </div>
                        <div className="rating active">
                            <img src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-30.png" loading="lazy" alt="Satisfied" />
                            <small>Satisfied</small>
                        </div>
                    </div>
                    <button className="btn" id="send">Send Review</button>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Contact;
