const React = require('react');
const { Canvas } = require('@react-three/fiber');
const { Html } = require('@react-three/drei');
const Model = require('../gameboy.jsx');
require ('./promo.sass');
const Spinner = require('../spinner/spinner.jsx');

function Promo(props) {
    return (
        <div className="promo">
            <div className="promo__container">
                <div className="promo__item promo__item_text">
                    <h2>Lorem ipsum dolor sit amet.</h2>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum illum, delectus mollitia sit ea dolor consequuntur quasi cupiditate ad ut.</p>

                    <button>Use this design</button>
                </div>
                <div className="promo__item promo__item_canvas">
                        <Canvas camera={{position: [5, 0, 5], near: 2, far: 15, rotation:[0, 0.6, 0],  fov: 48}}>
                                <pointLight position={[-5, 5, 5 ]} castShadow={true} />
                                <React.Suspense fallback={<Html><Spinner /></Html>}>
                                    <Model color={`rgb(${props.color.r},${props.color.g},${props.color.b})`}/>
                                </React.Suspense>
                        </Canvas>
                </div>
            </div>
        </div>
    )
}

module.exports = Promo;