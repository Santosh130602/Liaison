import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, } from 'react-icons/fa'; 
import Logo from "../accest/logo.png"


const Footer = () => {
    return (
        <>
        {/* <hr className='horizontal'></hr> */}
        <footer className="footer">
            
            <div className="footer-section">
                <img className='footer-logo' src={Logo} alt="logo"></img>
                <div className='connection'>
                    <a href="https://www.facebook.com"><FaFacebook /></a>
                    <a href="https://www.instagram.com"><FaInstagram /></a>
                    <a href="https://www.linkedin.com"><FaLinkedinIn /></a>
                    <a href="https://www.twitter.com"><FaTwitter /></a>
                </div>
            </div>

            <div className="footer-section">
                <h3>Topics</h3>
                <ul>
                    <li>Topic 1</li>
                    <li>Topic 2</li>
                    <li>Topic 3</li>
                </ul>
            </div>

            <div className="footer-section">
                <h3>Topics</h3>
                <ul>
                    <li>Topic 1</li>
                    <li>Topic 2</li>
                    <li>Topic 3</li>
                </ul>
            </div>
            <div className="footer-section">
                <h3>Topics</h3>
                <ul>
                    <li>Topic 1</li>
                    <li>Topic 2</li>
                    <li>Topic 3</li>
                </ul>
            </div>
        </footer>
        </>
    );
};

export default Footer;
