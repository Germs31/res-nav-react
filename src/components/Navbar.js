import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../assets/imgs/angryFace.png'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <img src={logo} />
            </div>
            <ul>
                <NavLink className="nav-link" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/about">About</NavLink>
                <NavLink className="nav-link" to="/blog">Blog</NavLink>
                <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </ul>
        </nav>
    )
}

export default Navbar
