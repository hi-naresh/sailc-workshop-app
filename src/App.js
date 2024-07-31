import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import MyWorkshops from './pages/MyWorkshops';
import Header from './components/Header';
import './index.css';
import HeroSection from "./components/Hero";
import Admin from "./pages/MyAdmin";
import { AuthProvider } from './contexts/AuthContext';
import Dev from "./pages/dev";
import Footer from "./components/Footer";


function App() {
    return (
        <AuthProvider>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<>
                    <HeroSection />
                    <Home />
                </>} />
                <Route path="/about" element={<About />} />
                <Route path="/workshops" element={<MyWorkshops />} />
                <Route path="/admin-x333" element={<Admin />} />
                {/*<Route path="/dev" element={<Dev/>} />*/}
            </Routes>
            <Footer />
        </Router>
        </AuthProvider>
    );
}

export default App;
