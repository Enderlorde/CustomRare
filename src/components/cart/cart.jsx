const React = require('react');
require('./cart.sass');
const Shipping = require('../shipping/shipping.jsx');

const Cart = () => {
    const [cart, setCart] = React.useState([]);

    const getCart = () => {
        let cookies = [];
        if (document.cookie.length>0){
            cookies = document.cookie.split(';');
        }

        if (cookies.length > 0){
            let cartCookie = cookies.find(cookie => {
                const isCartCookie = /^cart=.*/;
                return isCartCookie.test(cookie)
            });

            const productsInCookie =  /^cart=(.*)$/
            if (cartCookie){
                const tempCart = JSON.parse(cartCookie.match(productsInCookie)[1]);
                console.log(`getCart: ${tempCart}`);
                return tempCart
            }
        }     
    }

    React.useEffect(() => {
        setCart(getCart());
    },[]);

    const removeFromCart = (id) => {
        if (cart.length == 0) return;
            
        const tempCart = cart.filter((prod) => {
            return prod.id == id?false:true
        });
        document.cookie = `cart=${JSON.stringify(tempCart)}`;

        setCart(tempCart)
    }
    
    const showCart = () => {
        console.log(typeof cart);
        if (cart.length > 0 && typeof cart == 'object'){
            return cart.map((prod) => {
                return <li key={prod.name}>
                    <div className='cart__header'>
                        <h3>{prod.name?prod.name:"No Name"}</h3> 

                        <button onClick={() => {removeFromCart(prod.id)}}>x</button>
                    </div>

                    <ul className="cart__element element">
                        <li>
                            Body:
                            <div className="element__color" style={{backgroundColor: `rgb(${prod.bodyR}, ${prod.bodyG}, ${prod.bodyB})`}}></div>
                        </li>

                        <li>
                            Button: 
                            <div className="element__color" style={{backgroundColor: `rgb(${prod.buttonR}, ${prod.buttonG}, ${prod.buttonB})`}}></div>
                        </li>
                        
                        <li>
                            dPad: 
                            <div className="element__color" style={{backgroundColor: `rgb(${prod.dPadR}, ${prod.dPadG}, ${prod.dPadB})`}}></div>
                        </li>
                        
                        <li>
                            Rubber: 
                            <div className="element__color" style={{backgroundColor: `rgb(${prod.rubberR}, ${prod.rubberG}, ${prod.rubberB})`}}></div>
                        </li>
                    </ul>
                </li>
            })
        }else{
            return <li>Nothing!</li>
        }
    }

    console.log(cart);

    return (
        <div className="cart">
            <div className="cart__container">
                <h1>Cart:</h1>

                <ul className="cart__product">
                    {showCart()}
                </ul>

                <Shipping />

            </div>
        </div>
    );
}

module.exports = Cart;