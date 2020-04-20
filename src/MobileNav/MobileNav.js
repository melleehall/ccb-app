import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './MobileNav.css'

export default class MobileNav extends Component {
    render() {
        return (
            <section>
                <div className='topnav-mobile'>
                    <Link to='/' className='darkgreen mobile-nav'></Link>
                    <div id='myLinks'>
                        <Link to='/' id='home'>Home</Link>
                        <Link to='/signup' id='signup'>Signup</Link>
                        <Link to='/billing' id='billing'>Billing</Link>
                        <Link to='/support' id='service-desk'>FAQ + Support</Link>
                        <Link to='/contact' id='contact'>Contact</Link>
                    </div>
                    <a href='javascript:void(0);' className='menu' onClick='myFunction()'>
                    <i className='fa fa-bars'>menu</i>
                    </a>
                </div>
            </section>
        )
    }
}