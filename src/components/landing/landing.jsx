/* const React = require('react');
const Promo = require('../promo/promo.jsx');
const Features = require('../features/features.jsx');
const About = require('../about/about.jsx');
const Services = require('../services/services.jsx');
const Values = require('../values/values.jsx');
const Contact = require('../contact/contact.jsx');
require('./landing.sass');
 */
import React from 'react';
import Promo from '../promo/promo';
import Features from '../features/features';
import About from '../about/about';
import Services from '../services/services';
import Values from '../values/values';
import Contact from '../contact/contact';
import './landing.sass';

const Landing = (props) => {
    return (
        <div className="landing">
            <Promo palette={props.palette}/>
            <Features />
            <About />
            <Services />
            <Values />
            <Contact />
        </div>
    );
}

export default Landing;