const React = require('react');
const { useParams, useSearchParams } = require('react-router-dom');
require('./cart.sass');

const Cart = () => {
    const [cart, setCart] = React.useState([]);
    React.useEffect(() => {
        if (cart.length > 0) return;
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
                setCart(JSON.parse(cartCookie.match(productsInCookie)[1]));
            }

        }
        
    });
    
    console.log(cart);
    let params = useParams();
    const [paletteState, setPaletteState] = useSearchParams(params.palette);
    let searchParams = new URLSearchParams(paletteState);
    let [palette,setPalette] = React.useState({
        bodyR: searchParams.get('bodyR'),
        bodyG: searchParams.get('bodyG'),
        bodyB: searchParams.get('bodyB'),
        buttonR: searchParams.get('buttonR'),
        buttonG: searchParams.get('buttonG'),
        buttonB: searchParams.get('buttonB'),
        dPadR: searchParams.get('dPadR'),
        dPadG: searchParams.get('dPadG'),
        dPadB: searchParams.get('dPadB'),
        rubberR: searchParams.get('rubberR'),
        rubberG: searchParams.get('rubberG'),
        rubberB: searchParams.get('rubberB'),
        transparent: Boolean(searchParams.get('transparent') === 'true')
    });

    return (
        <div className="cart">
            <div className="cart__container">
                <ul>
                    {cart.map((prod) => {
                        return <li key={prod.name}>{prod.name}
                            <ul>
                                {Object.keys(prod).map(key => {
                                    return <li key={key}>{key}: {prod[key]}</li>
                                })}
                            </ul>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    );
}

module.exports = Cart;