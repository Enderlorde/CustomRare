const React = require ('react');
const { useParams, useSearchParams } = require('react-router-dom');
const { Canvas } = require('@react-three/fiber');
const { OrbitControls, Html, Float } = require('@react-three/drei');
const Model = require('../gameboy.jsx');
const Spinner = require('../spinner/spinner.jsx');

require('./constructor.sass');

function Constructor() {
    const [themeState, setThemeState] = React.useState();
    const [favThemesState, setFavThemesState] = React.useState([]);

    React.useEffect(() => {
        const favThemesString = window.localStorage.getItem('favThemes');
        if (!favThemesString) return;
        if (favThemesState.length == 0){
            setFavThemesState(JSON.parse(favThemesString));   
        }  
    });

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

    const hexToRGB = (hex) => {
        const regexp = new RegExp ('#([\\w]{2})([\\w]{2})([\\w]{2})');
        let [, r, g, b] = hex.match(regexp);
        return [r, g, b].map(hex => parseInt(`0x${hex}`.toUpperCase(), 16)
        ) 
    }

    const saveToLocalStorage = () => {
        palette.name = themeState;
        console.log(palette);
        const favThemesTemp = [...favThemesState, palette];
        console.log(favThemesState);
        setFavThemesState(favThemesTemp);
        window.localStorage.setItem('favThemes', JSON.stringify(favThemesTemp));
    }

    const useTheme = (theme) => {
        setPalette({...palette,...theme});
    }

    const RGBToHex = (RGB) => {
        let [r, g, b] = RGB;
        return '#'+ [r, g, b].map(color => {
            let hex = Number(color).toString(16);
            return hex.length == 1? '0'+hex:hex
        }).join('');
    }
    
    const changeTransparency = (state) => {
        palette.transparent = state;
        setPaletteState(palette, {replace: true})
    }

    const changePalette = (part, RGB) => {
        palette[`${part}R`] = RGB[0];
        palette[`${part}G`] = RGB[1];
        palette[`${part}B`] = RGB[2];
        setPaletteState(palette, {replace: true})
    }

    return (
        <div className='constructor'>
            <div className="constructor__container">
                <div className="constructor__controls controls">
                    <div className="controls__item">
                        <h3>Shell config</h3>

                        <input type="color" defaultValue={RGBToHex([palette.bodyR, palette.bodyG, palette.bodyB])} onChange={(e) => changePalette('body',hexToRGB(e.target.value))}/>

                        <input type="checkbox" defaultChecked={palette.transparent} onChange={(e) => changeTransparency(e.target.checked)}/>
                    </div>
                    
                    <div className="controls__item">
                        <h3>Buttons config</h3>

                        <input type="color" defaultValue={RGBToHex([palette.buttonR, palette.buttonG, palette.buttonB])} onChange={(e) => changePalette('button',hexToRGB(e.target.value))}/>
                    </div>

                    <div className="controls__item">
                        <h3>D-pad config</h3>

                        <input type="color" defaultValue={RGBToHex([palette.dPadR, palette.dPadR, palette.dPadR])} onChange={(e) => changePalette('dPad',hexToRGB(e.target.value))}/>
                    </div>

                    <div className="controls__item">
                        <h3>Rubber buttons config</h3>

                        <input type="color" defaultValue={RGBToHex([palette.rubberR, palette.rubberR, palette.rubberR])} onChange={(e) => changePalette('rubber',hexToRGB(e.target.value))}/>
                    </div>
                    
                    <div className="controls__item">
                        
                    </div>
                    
                    <div className="controls__item">
                        <input type="text" onChange={(e) => setThemeState(e.target.value)}/>

                        <button onClick={() => saveToLocalStorage()}>SAVE</button>
                    </div>                     
                </div>
                
                <ul className='constructor__favorites'>
                    {favThemesState.map((theme) => {return <li key={theme.name}><button onClick={() => useTheme(theme)}>{theme.name}</button></li>})}
                </ul>

                <Canvas camera={{position: [5, 0, 5], near: 2, far: 20, rotation:[0, 0.6, 0],  fov: 48}}>
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