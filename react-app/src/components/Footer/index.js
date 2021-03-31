import React from 'react'
import './index.css'
import { CgProfile } from 'react-icons/cg';
import { FiGithub, FiLinkedin, FiMail, } from 'react-icons/fi';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="top">
            </div>
            <div className="bottom">
                <div className="footer-info">
                    <div className="footer-icons">
                        <CgProfile className="profile" />
                        <FiLinkedin className="linkedin" />
                        <FiMail className="mail" />
                        <FiGithub className="github" />
                    </div>
                    <div className="footer-legal">
                        <p className="white">Developed by Michael Jensen</p>
                        <p className="gray">2021 Iron Logs</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;

{/* <SocialIcon url="https://github.com/Mjensen24" />
                <SocialIcon url="https://www.linkedin.com/in/michael-jensen-636901169/" />
                <SocialIcon url="http://twitter.com/jaketrent" />
                <SocialIcon url="https://mcjensen24@gmail.com" /> */}
