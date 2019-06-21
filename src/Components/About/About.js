import React from 'react';
import './About.css';
const About = () => {
    return (
        <div className="about">
            <div className="hero">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div className="hero-txt">
                    <h1> JU Family Board</h1>

                </div>
            </div>
            <div className="Note">
                <div className="text">
                    <p>A place for everyone to show the skill they have to others. Feel Free to provide any Suggestions in anyway you see fit.</p>
                    <blockquote>Note : This is a personal project</blockquote>
                </div>
            </div>
            <div className="container">
                <div className="text">
                    <h2>How to add your name to the list </h2>
                    <ul>
                        <li>Click on Join Family to Join.</li>
                        <li>Fill in the details as required, provide valid URL's only.</li>
                        <li>To get url of a image open a image that you have uploaded on Social Media,<b> Right Click</b> and click <strong>Copy image address</strong></li>
                        <li>Click Submit.</li>
                    </ul>
                </div>
            </div>

            <div className="container">
                <div className="text">
                    <h2>How to see your name in the list </h2>

                    <ul>
                        <li>Click on Family button in Navigation.</li>
                        <li>Scroll/Search to End to see your Name.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;