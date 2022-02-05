import React from 'react';
import logo from '../images/MoreTravel.png'

export default function Navbar() {
    return (
        <nav id="navbar">        
            <img src={logo} alt="More Travel Logo" className="nav-logo" />
        </nav>  
    )
}