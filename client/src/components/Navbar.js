import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; 

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
            <div className="max-width">
                <div className="logo">
                    <a href="#">Anuraj<span> Website</span></a>
                </div>
                <div className={`menu-btn ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes /> : <FaBars />} {/* Hamburger icon */}
                </div>
                <ul className={`menu ${isMenuOpen ? 'active' : ''}`}>
                    <li><Link to="/" className="menu-btn">Home</Link></li>
                    <li><Link to="/about" className="menu-btn">About</Link></li>
                    <li><Link to="/services" className="menu-btn">Services</Link></li>
                    <li><Link to="/skills" className="menu-btn">Skills</Link></li>
                    <li><Link to="/projects" className="menu-btn">Web Projects</Link></li>
                    <li><Link to="/contact" className="menu-btn">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
