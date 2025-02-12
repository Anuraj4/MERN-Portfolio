import React from 'react';
import '../App.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content text-center">
                <span>
                    Created By <a href="#">Anuraj Venkatpurwar</a> | <span className="far fa-copyright"></span>
                    {new Date().getFullYear()} All rights reserved.
                </span>
                <div className="social-icons">
                    <div className="tooltip">
                        <a href="https://www.linkedin.com/in/anuraj-venkatpurwar/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin footer-icon"></i>
                        </a>
                        <span className="tooltip-text">LinkedIn</span>
                    </div>
                    <div className="tooltip">
                        <a href="https://github.com/Anuraj4" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github footer-icon"></i>
                        </a>
                        <span className="tooltip-text">GitHub</span>
                    </div>
                    <div className="tooltip">
                        <a href="https://www.youtube.com/channel/UCCEbpScXk61QhUB_wHOcm6A" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-youtube footer-icon"></i>
                        </a>
                        <span className="tooltip-text">YouTube</span>
                    </div>
                    <div className="tooltip">
                        <a href="https://twitter.com/Anurajvenkatpur" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter footer-icon"></i>
                        </a>
                        <span className="tooltip-text">Twitter</span>
                    </div>
                    <div className="tooltip">
                        <a href="https://www.instagram.com/a_n_u_r_a_j_4_5/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram footer-icon"></i>
                        </a>
                        <span className="tooltip-text">Instagram</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
