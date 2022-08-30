const React = require('react');

require('./values.sass');
require('./values-mobile.sass');

const Values = () => {
    return (
        <div className="values">
            <div className="values__container">
                <div className="values__item">
                    <h3>Lorem ipsum dolor sit.</h3>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis rem vel nulla in quaerat modi possimus eligendi inventore? Dignissimos accusamus officia minima corrupti consequatur reiciendis quam explicabo neque quod aliquid?</p>

                    <ul>
                        <li>
                            <div className="icon icon_blue"></div>

                            <h4>Lorem ipsum dolor </h4>

                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero sit reiciendis nisi inventore, m</p>
                        </li>

                        <li>
                            <div className="icon icon_green"></div>

                            <h4>Lorem ipsum dolor, </h4>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat veniam ut tempore blanditiis molestias, </p>
                        </li>

                        <li>
                            <div className="icon icon_purple"></div>

                            <h4>Lorem ipsum dolor</h4>

                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit id unde quos. Reprehenderit consequatur temp</p>
                        </li>

                        <li>
                            <div className="icon icon_yellow"></div>

                            <h4>Lorem ipsum dolor, </h4>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, sapiente eaque recusandae nulla inventore libero!</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

module.exports = Values;