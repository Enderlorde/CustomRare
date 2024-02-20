/* const React = require('react');
require('./contact.sass')
require('./contact-mobile.sass')
 */
import React from 'react';
import './contact.sass';

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact__container">
                <div className="contact__item contact__item_large">
                    <h3>Ready to get started?</h3>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className="contact__item">
                    <button>write to us</button>
                </div>
            </div>
        </div>
    );
}

export default Contact;