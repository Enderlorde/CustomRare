const React = require('react');
const ReactDOM = require('react-dom/client');
const  { BrowserRouter, Routes, Route} = require('react-router-dom');
const Navigation = require('./components/navigation/navigation.jsx');
const Landing = require('./components/landing.jsx');
const Constructor = require('./components/constructor.jsx');
const History = require('./components/history.jsx');

ReactDOM.createRoot(
    document.querySelector('#root')
).render(
    <div>
        <BrowserRouter>
            <Navigation />
        
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="constructor" element={<Constructor />} />
                <Route path="history" element={<History />} />
            </Routes>
        </BrowserRouter>
    </div>
)
