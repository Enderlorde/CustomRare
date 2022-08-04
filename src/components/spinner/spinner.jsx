const React = require('react');
require('./spinner.sass');

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

module.exports = Spinner;