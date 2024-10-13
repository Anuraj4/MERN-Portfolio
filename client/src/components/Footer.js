import React from 'react';

const Footer = () => {
    return (
        // Footer section start
        <footer>
            <div className="text-center">
                <span>
                    Created By <a href="#">Anuraj Venkatpurwar</a> | <span className="far fa-copyright"></span>
                    {new Date().getFullYear()} All rights reserved.
                </span>
                <div>
                    <a href="https://www.linkedin.com/in/anuraj-venkatpurwar/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin footerIcons"></i> {/* LinkedIn icon */}
                    </a>
                    <a href="https://github.com/Anuraj4" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github footerIcons"></i> {/* GitHub icon */}
                    </a>
                    <a href="https://www.youtube.com/channel/UCCEbpScXk61QhUB_wHOcm6A" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-youtube footerIcons"></i> {/* YouTube icon */}
                    </a>
                    <a href="https://twitter.com/Anurajvenkatpur" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter footerIcons"></i> {/* Twitter icon */}
                    </a>
                    <a href="https://www.instagram.com/a_n_u_r_a_j_70/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram footerIcons"></i> {/* Instagram icon */}
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
