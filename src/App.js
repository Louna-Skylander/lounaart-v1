/* ============================================================================ */
import React from 'react';
import About from './components/about/About';
import Artfolio from './components/artfolio/Artfolio';
import Codefolio from './components/codefolio/Codefolio';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import './style/App.css';
/* ============================================================================ */

/* ---------------------------------------------------------------------------- */
const App = () => {
    return (
        <div>
            <Sidebar />
            <main className='main'>
                <Home />
                <About />
                <Codefolio />
                <Artfolio />
                <Contact />
            </main>
        </div>
    );
};
/* ---------------------------------------------------------------------------- */
export default App;