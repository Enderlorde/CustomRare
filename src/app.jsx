const React = require('react');
const ReactDOM = require('react-dom/client');
const  { BrowserRouter, Routes, Route} = require('react-router-dom');
const Navigation = require('./components/navigation/navigation.jsx');
const Landing = require('./components/landing/landing.jsx');
const Constructor = require('./components/constructor/constructor.jsx');
const History = require('./components/history.jsx');
const Spinner = require('./components/spinner/spinner.jsx');

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

    return {
        r: r,
        g: g,
        b: b
    }
}

const generateRandomPalette = () => {}

ReactDOM.createRoot(
    document.querySelector('#root')
).render(
    <div className='app'>
        <React.Suspense fallback={<Spinner />}>
            <BrowserRouter>
                <Navigation />
            
                <Routes>
                    <Route path="/" element={<Landing color={generateRandomColor()}/>} />
                    <Route path="constructor" element={<Constructor />} />
                    <Route path="history" element={<History />} />
                </Routes>
            </BrowserRouter>
        </React.Suspense>
    </div>
)
