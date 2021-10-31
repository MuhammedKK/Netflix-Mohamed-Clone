import React, {useState, useEffect} from 'react';
import logo from '../../assets/netflix.png';
import './Nav.css';

const Nav = () => {
    // Hook Of Set Navbar Background
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                setShowNav(true);
            } else {
                setShowNav(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, [])

    return (
        <nav className={`nav ${showNav && 'navbar__black'}`}>
            <img className="nav__logo" src={logo} alt="Netflix Logo" />
            <img className="nav__avatar" src="https://cdn1.iconfinder.com/data/icons/avatar-2-2/512/Programmer-512.png" alt="Avatar Logo" />
        </nav>
    )
}

export default Nav
