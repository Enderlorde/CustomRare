/* const React = require('react');
const Diamonds = require('../diamonds/diamonds.jsx');
require('./about.sass');
require('./about-mobile.sass'); */
import React from 'react';
import Diamonds from '../diamonds/diamonds';
import './about.sass';

const About = () => {
    return(
        <div className="about">
            <div className="about__container">
                <div className="about__item">
                    <Diamonds />
                </div>
                <div className="about__item">
                    <h3>Lorem ipsum dolor sit amet.</h3>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id molestiae nulla maiores, quas officia labore officiis veritatis non facilis ipsam consequatur at hic ullam. Quas impedit exercitationem ab placeat eveniet!</p>

                    <ul>
                        <li>
                            <div className="amount">+200</div>
                            <div className="dash"></div>
                            <div className="info">Employee</div>
                        </li>
                        <li>
                            <div className="amount">+500</div>
                            <div className="dash"></div>
                            <div className="info">Project</div>
                        </li>
                        <li>
                            <div className="amount">+300</div>
                            <div className="dash"></div>
                            <div className="info">Clients</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;