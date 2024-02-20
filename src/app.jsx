import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/navigation.jsx';
import Landing from './components/landing/landing.jsx';
import Constructor from './components/constructor/constructor.jsx';
import History from './components/history.jsx';
import Spinner from './components/spinner/spinner.jsx';
import Footer from './components/footer/footer.jsx';
import Cart from './components/cart/cart.jsx';
import './app.sass';

//const style = require('./app.sass');

const generateRandomColor = () =>{
    const getRandomNumber = (max) => {
        return Math.floor(Math.random()*max);
    }

    let r,g,b = 0;
    /* Need to rework */
    r = getRandomNumber(255);
    g = getRandomNumber(255);
    b = getRandomNumber(255);

    return [r, g, b];
}

const getRandomBoolean = () => {
    return Math.random()>0.5?true:false
}

const generateRandomPalette = () => {
    const [bodyR, bodyG, bodyB] = generateRandomColor();
    const [buttonR, buttonG, buttonB] = generateRandomColor();
    const [dPadR, dPadG, dPadB] = generateRandomColor();
    const [rubberR, rubberG, rubberB] = generateRandomColor();

    return {
        bodyR: bodyR,
        bodyG: bodyG,
        bodyB: bodyB,
        buttonR: buttonR,
        buttonG: buttonG,
        buttonB: buttonB,
        dPadR: dPadR,
        dPadG: dPadG,
        dPadB: dPadB,
        rubberR: rubberR,
        rubberG: rubberG,
        rubberB: rubberB,
        transparent: getRandomBoolean()
    }
}

ReactDOM.createRoot(
    document.querySelector('#root')
).render(
    <div className='app'>
        <React.Suspense fallback={<Spinner />}>
            <BrowserRouter>
                <Navigation />
            
                <Routes>
                    <Route path="/" element={<Landing palette={generateRandomPalette()}/>} />
                    
                    <Route path="constructor" element={<Constructor />} >
                        <Route path=':palette' element={<Constructor />} />
                    </Route>

                    <Route path="history" element={<History />} />
                    
                    <Route path="cart" element={<Cart products={[]}/>} >
                        <Route path=':palette' element={<Cart products={[]}/>} />
                    </Route>
                </Routes>
            </BrowserRouter>

            <Footer />
        </React.Suspense>
    </div>
)
