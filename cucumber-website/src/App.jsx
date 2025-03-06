import React from 'react'
import Hero from "./components/Hero/Hero.jsx";
import Navbar from "./components/Navigation/Navbar.jsx";
import Crops from "./components/Crops/Crops.jsx";

const App = () => {
    return (
        <main>
            <Navbar/>
            <Hero/>
            <Crops/>
        </main>
    )
}

export default App;
