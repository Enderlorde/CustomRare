const React = require ('react');
const { Canvas } = require('@react-three/fiber');
const { OrbitControls } = require('@react-three/drei');
const Model = require('../gameboy.jsx');
const { Color } = require('three');
const Spinner = require('../spinner/spinner.jsx');

function Constructor() {
    const [colorState, setColorState] = React.useState();

    return (
        <div>
            <input type="color" onChange={(e) => setColorState(e.target.value)}/>
            <React.Suspense fallback={<Spinner/>}>
                <Canvas
                    camera={{ position: [2, 0, 25], fov: 45 }}
                    style={{
                        backgroundColor: 'transparent',
                        width: '100vw',
                        height: '100vh',
                    }}
                >
                    <ambientLight intensity={1.25} />
                    <ambientLight intensity={0.1} />
                    <directionalLight intensity={0.4} />
                        <Model color={new Color(colorState)} />
                    <OrbitControls />
                </Canvas>
            </React.Suspense>
  
        </div>
        
    );
}

module.exports = Constructor;