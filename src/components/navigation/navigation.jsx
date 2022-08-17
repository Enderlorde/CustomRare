const React = require('react');
const { NavLink, useNavigate } = require('react-router-dom');

require("./navigation.sass");
require("./navigation-mobile.sass");

const logo = require('../../static/logo.svg');
const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const { faBars } = require('@fortawesome/free-solid-svg-icons');

const Navigation = () => {
    const menuElement = React.useRef();

    const showMenu = () => {
        console.log(menuElement);
        menuElement.current.classList.add('active');
    }

    const hideMenu = () => {
        menuElement.current.classList.remove('active');
    }

    let navigate = useNavigate();
    const routeChange = (path) =>{ 
      navigate(path);
    }

    return (
            <nav className="navigation">
                <div className="navigation__container">
                    <img src={logo} className='navigation__logo' alt="" />
                    
                    <ul className='navigation__menu menu' ref={menuElement}>
                        <li>
                            <NavLink className={({ isActive }) => (isActive?'active':'inactive')} to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => (isActive?'active':'inactive')} to="/constructor">Constructor</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => (isActive?'active':'inactive')} to="/history">History</NavLink>
                        </li>
                        <li >
                            <button className='menu__close' onClick={() => hideMenu()}>Close</button>
                        </li>
                    </ul>

                    <div>
                        <button className="navigation__btn navigation__btn_cart" onClick={() => routeChange('/cart')}>CART</button>
                        <button className="navigation__burger" onClick={() => showMenu()} ><FontAwesomeIcon icon={faBars} /></button>
                    </div>
                </div>
            </nav>
    );
}

module.exports = Navigation;