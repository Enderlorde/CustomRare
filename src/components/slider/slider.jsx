const React = require('react');
const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const { faArrowLeft, faArrowRight } = require('@fortawesome/free-solid-svg-icons')

require('./slider.sass');
require('./slider-mobile.sass');

const Slider = () => {
    return(
        <div className="slider">
            <ul className="slider__slides">
                <li>
                    <img src="https://via.placeholder.com/100x50" alt=""/>
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <button>see detail</button>
                </li>
                {/*<li>
                    <img src="https://via.placeholder.com/100x50" alt=""/>
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <button>see detail</button>
                </li>
                <li>
                    <img src="https://via.placeholder.com/100x50" alt=""/>
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <button>see detail</button>
                </li>
                <li>
                    <img src="https://via.placeholder.com/100x50" alt=""/>
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <button>see detail</button>
                </li>
                <li>
                    <img src="https://via.placeholder.com/100x50" alt=""/>
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <button>see detail</button>
                </li>
                <li>
                    <img src="https://via.placeholder.com/100x50" alt=""/>
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <button>see detail</button>
                </li>
                <li>
                    <img src="https://via.placeholder.com/100x50" alt=""/>
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <button>see detail</button>
                </li>
                <li>
                    <img src="https://via.placeholder.com/100x50" alt=""/>
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <button>see detail</button>
                </li> */}
            </ul>

            <div className="slider__controls">
                <button><FontAwesomeIcon icon={faArrowLeft} color='#fff'/></button>
                <button><FontAwesomeIcon icon={faArrowRight} color='#fff'/></button>
            </div>
        </div>
    );
}

module.exports = Slider;