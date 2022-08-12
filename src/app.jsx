const React = require('react');
const ReactDOM = require('react-dom/client');
const  { BrowserRouter, Routes, Route} = require('react-router-dom');
const Navigation = require('./components/navigation/navigation.jsx');
const Landing = require('./components/landing/landing.jsx');
const Constructor = require('./components/constructor/constructor.jsx');
const History = require('./components/history.jsx');
const Spinner = require('./components/spinner/spinner.jsx');
const Footer = require('./components/footer/footer.jsx');

const style = require('./app.sass');

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
                </Routes>
            </BrowserRouter>

            <Footer />
        </React.Suspense>
    </div>
)
