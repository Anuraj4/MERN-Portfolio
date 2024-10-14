import React from 'react';
import leetcode from '../images/skill-icons/icons8-level-up-your-coding-skills-and-quickly-land-a-job-100.png';
import github from '../images/skill-icons/icons8-github-48.png';
import nc from '../images/skill-icons/nc_new_logo.svg';

const Competitive = () => {
    return (
        <section className="skills" id="skills">
            <div className="max-width" data-aos="fade-up">
                <h2 className="title" data-aos="fade-up">Competitive Programming</h2>
                <div className="skills-content">
                    <div className="column left">
                        <div className="text">My competitive programming platforms</div>

                        <p className="paragraph-2">
                            Engage in thrilling coding challenges on platforms like LeetCode, CodeChef, and CodeStudio! Explore a
                            multitude of contests, sharpen your problem-solving skills, and compete against top-notch programmers
                            worldwide. Dive into algorithmic puzzles, refine your coding finesse, and join the vibrant community of
                            passionate coders!
                        </p>
                        <a href="#about">Read More</a>
                    </div>
                    <div className="column right skill-box">
                        <div className="icons">
                            <a href="https://leetcode.com/u/anuraj3690/" target="_blank" rel="noopener noreferrer">
                                <img src={leetcode}
                                    width="40%" alt="LeetCode logo" id="leetcode-icon" data-aos="flip-left" />
                            </a>
                            <a href="https://www.naukri.com/code360/profile/anuraj44" target="_blank" rel="noopener noreferrer">
                                <img src={nc} alt="Coding Ninjas logo" className="cn-logo-main-mobile" />
                            </a>
                            <a href="https://github.com/Anuraj4/" target="_blank" rel="noopener noreferrer">
                                <img src={github} alt="GitHub logo" id="github-icon" data-aos="flip-left" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Competitive;
