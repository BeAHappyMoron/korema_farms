import React from 'react'
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import './Hero.css'
import videobg from '../../assets/videobg.mp4'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='gradient-overlay'></div>
            <div className='video-container'>
                <video className='videobg' src={videobg} autoPlay muted loop/>
            </div>

                <div className='hero-text text-white'>
                    <h1>HYDROPOLICS.</h1>
                    <h1>REFINED.</h1>
                    <h1>
                        NATURALLY<span className="full-stop">.</span>
                    </h1>

                    <p>As Gauteng’s largest cucumber farm, we grow premium,
                        hydroponic cucumbers with sustainability and innovation at our core.
                        Crisp, fresh, and farmed with care—from our greenhouse to your table. </p>
                </div>

                <div className="side-text right">SCROLL TO EXPERIENCE</div>
                <div className="side-text left">SCROLL TO EXPERIENCE</div>

                <div className="social-icons">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="mailto:your-email@example.com"><MdEmail /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </div>
        </div>

    )
}
export default Hero
