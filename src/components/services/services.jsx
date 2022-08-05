const React = require('react');
require('./services.sass');
const Slider = require('../slider/slider.jsx');

const Services = () => {
    return(
        <div className="services">
            <div className="services__header">
                <h2>Our Services</h2>
                <a href="#">SEE ALL</a>
            </div>

            <Slider />
        </div>
    )
}

module.exports = Services;