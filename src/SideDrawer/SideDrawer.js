import React from 'react'
import { NavLink } from 'react-router-dom'

import './SideDrawer.css'

// Displays navigation links for mobile / small screens
const sideDrawer = props => {
    let drawerClasses = 'side-drawer';

    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    
    return (
        <nav className={drawerClasses}>
            <ul className='side-drawer-items'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/signup'>Signup</NavLink></li>
                <li><NavLink to='/billing'>Billing</NavLink></li>
                <li><NavLink to='/support'>FAQ + Support</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </nav>
    )
};

export default sideDrawer;