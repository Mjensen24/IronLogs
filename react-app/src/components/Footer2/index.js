import React from 'react'
import './index.css'
import { CgProfile } from 'react-icons/cg';
import { FiGithub, FiLinkedin, FiMail, } from 'react-icons/fi';

const Footer2 = () => {
    return (
        <div className="footer-container">
            <div className="bottom">
                <div className="footer-info">
                    <div className="footer-icons">
                        <a href="https://mjensen24.github.io/"
                            className="footer-links">
                            <CgProfile className="profile" />
                        </a>
                        <a href="https://www.linkedin.com/in/michael-jensen-636901169/"
                            className="footer-links">
                            <FiLinkedin className="linkedin" />
                        </a>
                        <a href="mailto:mcjensen24@gmail.com"
                            className="footer-links">
                            <FiMail className="mail" />
                        </a>
                        <a href="https://github.com/Mjensen24"
                            className="footer-links">
                            <FiGithub className="github" />
                        </a>
                    </div>
                    <div className="footer-legal">
                        <p className="white">Developed by Michael Jensen</p>
                        <p className="gray">© 2021 Iron Logs</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer2;
