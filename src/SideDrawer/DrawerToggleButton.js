import React from 'react'
import './DrawerToggleButton.css'

// Hamburger menu for mobile Nav
function drawerToggleButton (props) {
    return (
        <button className='toggle-button' id='menu-toggle' aria-label='Open the menu' onClick={props.click}>
            <div className='toggle-button_line' aria-hidden='true'/>
            <div className='toggle-button_line' aria-hidden='true'/>
            <div className='toggle-button_line' aria-hidden='true'/>
        </button>
    )
} 

export default drawerToggleButton