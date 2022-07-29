const React = require ('react');
const { Canvas } = require('@react-three/fiber');
const { OrbitControls } = require('@react-three/drei');
const Model = require('./GAMEBOY.jsx');
const { Color } = require('three');

function Constructor() {
    const [colorState, setColorState] = React.useState();

    return (
        <div>
            <input type="color" onChange={(e) => setColorState(e.target.value)}/>
            <Canvas
                camera={{ position: [2, 0, 12.25], fov: 15 }}
                style={{
                    backgroundColor: 'transparent',
                    width: '100vw',
                    height: '100vh',
                }}
            >
                <ambientLight intensity={1.25} />
                <ambientLight intensity={0.1} />
                <directionalLight intensity={0.4} />
                {/*Add spinning loader here*/}
                <React.Suspense fallback={null}>
                    <Model color={new Color(colorState)} />
                </React.Suspense>
                <OrbitControls />
            </Canvas>
        </div>
        
    );
}

module.exports = Constructor;