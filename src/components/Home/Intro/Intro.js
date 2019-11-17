import React from 'react';
import portrait from 'assets/images/alexZhang.jpg';
import './Intro.scss';

const Intro = () => {
    return(
        <div className='Intro'>
            <div className='image-wrapper'>
                <img src={portrait} alt=""/>
            </div>
            <h2 className='name'>Alex Zhang</h2>
            <ul className='role'>
                <li>software developer</li>
                <li>web developer</li>
                <li>node developer</li>
            </ul>
            <p>I design applications and websites. As a minimalist, I love using technology to simplify our lives.</p>
            <p>I am a freelancer based in Sydney, Australia.</p>
            <ul className='contact-logo'>
                <li><i className="fab fa-github"></i></li>
                <li><i className="fab fa-linkedin-in"></i></li>
                <li><i className="fab fa-facebook-f"></i></li>
            </ul>
        </div>
        )
};

export default Intro;