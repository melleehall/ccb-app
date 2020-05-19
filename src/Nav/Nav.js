import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../SideDrawer/DrawerToggleButton'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import './Nav.css'

// Desktop/large screen navigation
export default class Nav extends Component {
    render() {
        return (
            <header className='toolbar'>
                <div className='toolbar_toggle-button'>
                        <DrawerToggleButton click={this.props.drawerClickHandler} />
                </div>
                <nav className='toolbar_navigation'>
                    <div className='toolbar_navigation-items'>
                        <ul>
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/signup'>Signup</NavLink></li>
                            <li><NavLink to='/billing'>Billing</NavLink></li>
                            <li><NavLink to='/support'>FAQ + Support</NavLink></li>
                            <li><NavLink to='/contact'>Contact</NavLink></li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}
