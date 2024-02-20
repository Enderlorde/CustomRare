/* const React = require('react');
require('./shipping.sass')
require('./shipping-mobile.sass') */

import React from 'react';
import './shipping.sass';

const Shipping = () => {
    return (
        <div className="shipping">
            <div className="shipping__container">
                <div className="shipping__item">
                    <h3>Order</h3>

                    
                    <form className="shipping__form">
                        <input type="text" placeholder="First name:"/>
                        <input type="text" placeholder="Surname:"/>
                        <input type="text" placeholder="Country:"/>
                        <input type="text" placeholder="City:"/>
                        <input type="text" placeholder="Street:"/>
                        <input type="text" placeholder="Building:"/>
                        <input type="text" placeholder="Zip-code:"/>
                        <input type="text" placeholder="phone:"/>

                        <button>Proceed to chekout</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Shipping;