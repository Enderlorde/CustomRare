const React = require('react');
require('./cart.sass');

const Cart = (props) => {
    return (
        <div className="cart">
            <div className="cart__container">
                <ul>
                    {props.products.map((product) => {return <li key={product.name}>{product.name}</li>})}
                </ul>
            </div>
        </div>
    );
}

module.exports = Cart;