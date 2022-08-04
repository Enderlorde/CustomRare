const { useRef } = require('react');
const React = require('react');
const { NavLink } = require('react-router-dom');
require("./navigation.sass");

const logo = require('../../static/logo.svg');

const Navigation = () => {
    return (
            <nav className="navigation">
                <div className="navigation__container">
                    <img src={logo} className='navigation__logo' alt="" />

                    <ul className='navigation__menu'>
                        <li>
                            <NavLink className={({ isActive }) => (isActive?'active':'inactive')} to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => (isActive?'active':'inactive')} to="/constructor">Constructor</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => (isActive?'active':'inactive')} to="/history">History</NavLink>
                        </li>
                    </ul>

                    <div>
                        <button className="navigation__btn navigation__btn_cart" >CART</button>
                        <button className="navigation__burger">BURGER</button>
                    </div>
                </div>
            </nav>
    );
}

module.exports = Navigation;