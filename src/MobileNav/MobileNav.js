import React, { Component } from 'react'
import './MobileNav.css'

export default class MobileNav extends Component {
    render() {
        return (
            <section>
                <div className='topnav-mobile'>
                    <a href='https://www.clearcreekbroadband.com' className='darkgreen mobile-nav'>Clear Creek Broadband</a>
                    <div id='myLinks'>
                        <a href='#home' id='home'>Home</a>
                        <a href='#signup' id='signup'>Signup</a>
                        <a href='#billing' id='billing'>Billing</a>
                        <a href='#service-desk' id='service-desk'>FAQ + Support</a>
                        <a href='#contact' id='contact'>Contact</a>
                    </div>
                    <a href='www.clearcreekbroadband.com' className='menu' >
                    <i className='fa fa-bars'>menu</i>
                    </a>
                </div>
            </section>
        )
    }
}