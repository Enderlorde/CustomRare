/* const React = require('react');
require('./spinner.sass');
 */
import React from 'react';
import './spinner.sass';

function Spinner () {
    return (
        <div className="base">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default Spinner;