import React from 'react'
import './Navbar.css'
import logo from '../../assets/images/Logo.png'

const Navbar = () => {
    return (
        <nav className='container'>
            <img src={logo} alt="KOREMA FARMS" className='logo'/>
            <ul>
                <li>ABOUT US</li>
                <li>SERVICES</li>
                <li>CROPS</li>
                <li><button className="btn">CONTACT US</button></li>
            </ul>
        </nav>
    )
}
export default Navbar
