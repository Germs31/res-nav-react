import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../assets/imgs/angryFace.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="nav-container">
            <nav>
                <div className="logo">
                    <img src={logo}  alt="logo"/>
                </div>
                <ul>
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/about">About</NavLink>
                    <NavLink className="nav-link" to="/blog">Blog</NavLink>
                    <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </ul>

                <div className="hamburger-container" onClick={() => setIsOpen(!isOpen)}>
                    <i className={isOpen ? "open" : ""}></i>
                    <i className={isOpen ? "open" : ""}></i>
                    <i className={isOpen ? "open" : ""}></i>
                </div>
            </nav>

            <div className={isOpen ? "res-nav show" : "res-nav"} onClick={() => setIsOpen(!isOpen)}>
                <ul>
                    <NavLink className="res-link" to="/">Home</NavLink>
                    <NavLink className="res-link" to="/about">About</NavLink>
                    <NavLink className="res-link" to="/blog">Blog</NavLink>
                    <NavLink className="res-link" to="/portfolio">Portfolio</NavLink>
                    <NavLink className="res-link" to="/contact">Contact</NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
