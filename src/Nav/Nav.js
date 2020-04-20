import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../SideDrawer/DrawerToggleButton'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import './Nav.css'


export default class Nav extends Component {

    render() {
        return (
            <header className='toolbar'>
                <nav className='toolbar_navigation'>
                    <div className='toolbar_toggle-button'>
                        <DrawerToggleButton click={this.props.drawerClickHandler} />
                    </div>
                    <div className='toolbar_logo'><NavLink to='/'>LOGO</NavLink></div>
                    <div className='toolbar_navigation-items'>
                        <ul>
                            <li><NavLink to='/support'>Support</NavLink></li>
                            <li><NavLink to='/billing'>Billing</NavLink></li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}