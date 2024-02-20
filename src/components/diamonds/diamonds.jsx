/* const React = require('react');
require('./diamonds.sass');
require('./diamonds-mobile.sass');
const interiorImage = require('../../static/interior.png');
const exteriorImage = require('../../static/exterior.png'); */
import React from 'react';
import interiorImage from '../../static/interior.png';
import exteriorImage from '../../static/exterior.png';
import './diamonds.sass';

const Diamonds = () => {
    return(
        <div className="diamonds">
            <div className="diamonds__item diamonds__item_small diamonds__item_hide">
            </div>
            <div className="diamonds__item diamonds__item_small">
                <img src={interiorImage} alt="office interior"/>
            </div>
            <div className="diamonds__item diamonds__item_large">
                <div>About <br/> Us</div>
            </div>
            <div className="diamonds__item diamonds__item_small">
                <img src={exteriorImage} alt="office exterior"/>
            </div>
        </div>
    );
}

export default Diamonds;