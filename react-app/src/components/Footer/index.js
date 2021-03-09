import React from 'react'
import './index.css'
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="top">
            </div>
            <div className="bottom">
                <SocialIcon url="https://github.com/Mjensen24" />
                <SocialIcon url="https://www.linkedin.com/in/michael-jensen-636901169/" />
                <SocialIcon url="http://twitter.com/jaketrent" />
                <SocialIcon url="https://mcjensen24@gmail.com" />
            </div>
        </div>
    )
}

export default Footer;
