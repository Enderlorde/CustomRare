const React = require ('react');
const { useParams, useSearchParams } = require('react-router-dom');
const { Canvas } = require('@react-three/fiber');
const { OrbitControls, Html } = require('@react-three/drei');
const Model = require('../gameboy.jsx');
const Spinner = require('../spinner/spinner.jsx');

require('./constructor.sass');

function Constructor() {
    const [colorState, setColorState] = React.useState(0xfefefe);
    const [transparentState, setTransparentState] = React.useState(false);

    let params = useParams();
    const [paletteState, setPaletteState] = useSearchParams(params.palette);
    let searchParams = new URLSearchParams(paletteState);
    let palette = {
        bodyR: searchParams.get('bodyR'),
        bodyG: searchParams.get('bodyG'),
        bodyB: searchParams.get('bodyB'),
        transparent: new Boolean(searchParams.get('transparent')),
    }

    console.log(palette);

    return (
        <div className='constructor'>
            <div className="constructor__container">
                <input type="color" onChange={(e) => setColorState(e.target.value)}/>

                <input type="checkbox" />

                <Canvas camera={{position: [5, 0, 5], near: 2, far: 15, rotation:[0, 0.6, 0],  fov: 48}}>
                        <pointLight position={[-5, 5, 5 ]} castShadow={true} />
                        <React.Suspense fallback={<Html><Spinner /></Html>}>
                            <Model palette={palette}/>
                            <OrbitControls />
                        </React.Suspense>
                </Canvas>
            </div>
        </div>
        
    );
}

module.exports = Constructor;