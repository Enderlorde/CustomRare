const React = require('react');
const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const { faArrowRightLong } = require('@fortawesome/free-solid-svg-icons')

require('./services.sass');
require('./services-mobile.sass');
const Slider = require('../slider/slider.jsx');

const Services = () => {
    return(
        <div className="services">
            <div className="services__container">
                <div className="services__header">
                    <h2>Our Services</h2>
                    <a href="#">SEE ALL<FontAwesomeIcon icon={faArrowRightLong} /></a>
                </div>

                <Slider />
            </div>
        </div>
    )
}

module.exports = Services;