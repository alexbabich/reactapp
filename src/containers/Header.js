import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <header>
        <nav className="text-center text-uppercase">
            <ul className="list-unstyled list-inline">
                <li><NavLink exact={true} to='/'>Home</NavLink></li>
                <li><NavLink to='/films'>films</NavLink></li>
                <li><NavLink to='/actors'>actors</NavLink></li>
            </ul>
        </nav>
    </header>
)

export default Header
