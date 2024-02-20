/* const React = require ('react');
const { useParams, useSearchParams } = require('react-router-dom');
const { Canvas } = require('@react-three/fiber');
const { OrbitControls, Html, Float } = require('@react-three/drei');
const { v4 } = require('uuid');
const Model = require('../gameboy.jsx');
const Spinner = require('../spinner/spinner.jsx');

require('./constructor.sass');
require('./constructor-mobile.sass'); */

import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, Float } from '@react-three/drei';
import { v4 } from 'uuid';
import Model from "../gameboy";
import Spinner from '../spinner/spinner';
import './constructor.sass';

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

    const removeFromLocalStorage = (name) => {
        const favThemesTemp = [...favThemesState.filter((theme) => theme.name != name)];
        console.log(favThemesState);
        setFavThemesState(favThemesTemp);
        window.localStorage.setItem('favThemes', JSON.stringify(favThemesTemp));
    }

    const saveToCookies = () => {
        let cookies = [];
        if (document.cookie.length>0){
            cookies = document.cookie.split(';');
        }
    
        if(cookies.length == 0 || !cookies) {
            //change the UUID to something simpler later
            document.cookie = `cart=${JSON.stringify([{...palette,...{id:v4()}}])};`;
        }else{
            let cart
            let cartCookie = cookies.find(cookie => {
                const isCartCookie = /^cart=.*/;
                return isCartCookie.test(cookie)
            });

            const productsInCookie =  /^cart=(.*)$/
            if (cartCookie){
                cart = JSON.parse(cartCookie.match(productsInCookie)[1]);
            }
            
            if(cart){
                //change the UUID to something simpler later
                cart.push({...palette,...{id:v4()}});
            }

            console.log(`cart=${JSON.stringify(cart)}`);
            
            document.cookie = `cart=${JSON.stringify(cart)}`;
        }
    }

    const useTheme = (theme) => {
        setPalette({...palette,...theme});
    }

    const RGBToHex = (RGB) => {
        let [r, g, b] = RGB;
        console.log([r,g,b]);
        return '#'+ [r, g, b].map(color => {
            if (color == null) color = 255;
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

                        <label>Color:<input type="color" value={RGBToHex([palette.bodyR, palette.bodyG, palette.bodyB])} onChange={(e) => changePalette('body',hexToRGB(e.target.value))}/></label>
                        <br/>   
                        <label>Transparent:<input type="checkbox" defaultChecked={palette.transparent} onChange={(e) => changeTransparency(e.target.checked)}/></label>
                    </div>
                    
                    <div className="controls__item">
                        <h3>Buttons config</h3>

                        <label>Color:<input type="color" value={RGBToHex([palette.buttonR, palette.buttonG, palette.buttonB])} onChange={(e) => changePalette('button',hexToRGB(e.target.value))}/></label>
                    </div>

                    <div className="controls__item">
                        <h3>D-pad config</h3>

                        <label>Color:<input type="color" value={RGBToHex([palette.dPadR, palette.dPadR, palette.dPadR])} onChange={(e) => changePalette('dPad',hexToRGB(e.target.value))}/></label>
                    </div>

                    <div className="controls__item">
                        <h3>Rubber buttons config</h3>

                        <label>Color:<input type="color" value={RGBToHex([palette.rubberR, palette.rubberR, palette.rubberR])} onChange={(e) => changePalette('rubber',hexToRGB(e.target.value))}/></label>
                    </div>
                    
                    <div className="controls__item">
                        
                    </div>
                    
                    <div className="controls__item">
                        <input type="text" onChange={(e) => setThemeState(e.target.value)}/>

                        <button onClick={() => saveToLocalStorage()}>SAVE</button>
                    </div>   

                    <div className="controls__item">
                        <button onClick={() => saveToCookies()}>Cart</button>
                    </div>            
                </div>

                <Canvas style={{height: '400px', width: '400px'}} camera={{position: [5, 0, 5], near: 2, far: 20, rotation:[0, 0.6, 0],  fov: 48}}>
                        <pointLight position={[-5, 5, 5 ]} castShadow={true} />

                        <React.Suspense fallback={<Html><Spinner /></Html>}>
                            <Model palette={palette}/>

                            <OrbitControls />
                        </React.Suspense>
                </Canvas>

                <ul className='constructor__favorites'>
                    {favThemesState.map((theme) => {return <li key={theme.name}><button onClick={() => useTheme(theme)}>{theme.name}</button><button onClick={() => removeFromLocalStorage(theme.name)}>X</button></li>})}
                </ul>
            </div>
        </div>
        
    );
}

export default Constructor;