import React from 'react';
import '../App.css';  // Import CSS file for styling

const Footer = () => {
    return (
        // Footer section start
        <footer className="footer">
            <div className="footer-content text-center">
                <span>
                    Created By <a href="#">Anuraj Venkatpurwar</a> | <span className="far fa-copyright"></span>
                    {new Date().getFullYear()} All rights reserved.
                </span>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/anuraj-venkatpurwar/" target="_blank" rel="noopener noreferrer">
                        <i title='linkedin' className="fab fa-linkedin footer-icon"></i> {/* LinkedIn icon */}
                    </a>
                    <a href="https://github.com/Anuraj4" target="_blank" rel="noopener noreferrer">
                        <i title='GitHub' className="fab fa-github footer-icon"></i> {/* GitHub icon */}
                    </a>
                    <a href="https://www.youtube.com/channel/UCCEbpScXk61QhUB_wHOcm6A" target="_blank" rel="noopener noreferrer">
                        <i title='Youtube' className="fab fa-youtube footer-icon"></i> {/* YouTube icon */}
                    </a>
                    <a href="https://twitter.com/Anurajvenkatpur" target="_blank" rel="noopener noreferrer">
                        <i title='Twitter' className="fab fa-twitter footer-icon"></i> {/* Twitter icon */}
                    </a>
                    <a href="https://www.instagram.com/a_n_u_r_a_j_70/" target="_blank" rel="noopener noreferrer">
                        <i title='Instagram' className="fab fa-instagram footer-icon"></i> {/* Instagram icon */}
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
