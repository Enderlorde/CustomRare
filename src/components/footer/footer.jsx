const React = require('react');
require('./footer.sass');

const logoImage = require('../../static/logo.svg');


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__details footer__details_left" />

                <div className="footer__item">
                    <img className="logo" src={logoImage} alt=""/>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

                    <p>(C) Skyrevv theme 2020</p>
                </div>

                <ul className="footer__item">
                    <li>Company</li>
                    <li>Aliquid, eaque.</li>
                    <li>Ut, vel!</li>
                    <li>Tempora, illum.</li>
                    <li>Quisquam, deleniti.</li>
                </ul>

                <ul className="footer__item">
                    <li>Services</li>
                    <li>Aliquid, eaque.</li>
                    <li>Ut, vel!</li>
                    <li>Tempora, illum.</li>
                    <li>Quisquam, deleniti.</li>
                </ul>

                <ul className="footer__item">
                    <li>Resources</li>
                    <li>Aliquid, eaque.</li>
                    <li>Ut, vel!</li>
                    <li>Tempora, illum.</li>
                </ul>

                <div className="footer__item">
                    <ul className='socials'>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>

                    <select name="lang" id="">
                        <option value="en">English - en</option>
                        <option value="ru">Russian - ru</option>
                    </select>
                </div>

                <div className="footer__details footer__details_right" />
            </div>
        </div>
    );
}

module.exports = Footer;