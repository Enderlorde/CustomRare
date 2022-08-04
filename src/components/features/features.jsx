const React = require('react');
require('./features.sass');

const Features = () => {
    return(
        <div className="features">
            <div className="features__container">
                <ul className="features__list">
                    <li>
                        <h3>Business Solution</h3>

                        <p>Lorem ipsum dolor sit.</p>
                    </li>
                    
                    <li>
                        <h3>Lorem, ipsum.</h3>

                        <p>Lorem ipsum dolor sit.</p>
                    </li>

                    <li>
                        <h3>Lorem, ipsum dolor.</h3>

                        <p>Lorem ipsum dolor sit.</p>
                    </li>
                </ul>
            </div>
        </div>

    )
}

module.exports = Features;