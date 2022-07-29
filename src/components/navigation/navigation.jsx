const React = require('react');
const { Link } = require('react-router-dom');
require("./navigation.sass");

const Navigation = () => {
    return (
            <nav className="navigation">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/constructor">Constructor</Link>
                    </li>
                    <li>
                        <Link to="/history">History</Link>
                    </li>
                </ul>
            </nav>
    );
}

module.exports = Navigation;