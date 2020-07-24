import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../assets/imgs/angryFace.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [status, isStatus] = useState('open')
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
            <div className="hamburger-container" onClick={() => setIsOpen(!isOpen)}>
                <i className={status}></i>
                <i className={status}></i>
                <i className={status}></i>
            </div>
        </nav>
    )
}

export default Navbar
