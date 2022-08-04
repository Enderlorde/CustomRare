const React = require('react');
const Promo = require('../promo/promo.jsx');
const Features = require('../features/features.jsx');
const About = require('../about/about.jsx');
const Services = require('../services/services.jsx');
require('./landing.sass');

const Landing = (props) => {
    return (
        <div className="landing">
            <Promo color={props.color}/>
            <Features />
            <About />
            <Services />
        </div>
    );
}

module.exports = Landing;