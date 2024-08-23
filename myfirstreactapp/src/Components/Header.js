import React from 'react';
import Comp_Logo from '../Comp_Logo.png';

function Header() {
    return (
        <header className="App-header">
            <img src={Comp_Logo} alt="Company Logo" className="logo" />
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
      </header>
    );
}

export default Header;