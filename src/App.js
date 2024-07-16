import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import MyWorkshops from './pages/MyWorkshops';
import Header from './components/Header';
import './index.css';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/my-workshops" element={<MyWorkshops />} />
            </Routes>
        </Router>
    );
}

export default App;
