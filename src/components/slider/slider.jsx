const React = require('react');
require('./slider.sass');

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
                </li>
                <li>
                    <img src="https://via.placeholder.com/100x50" alt=""/>
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <button>see detail</button>
                </li>
            </ul>

            <div className="slider__controls">
                <button>prev</button>
                <button>next</button>
            </div>
        </div>
    );
}

module.exports = Slider;