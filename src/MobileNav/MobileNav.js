import React, { Component } from 'react'
import './MobileNav.css'

export default class MobileNav extends Component {
    render() {
        return (
            <section>
                <div class='topnav-mobile'>
                    <a href='#home' class='darkgreen mobile-nav'></a>
                    <div id='myLinks'>
                        <a href='#home' id='home'>Home</a>
                        <a href='#signup' id='signup'>Signup</a>
                        <a href='#billing' id='billing'>Billing</a>
                        <a href='#service-desk' id='service-desk'>FAQ + Support</a>
                        <a href='#contact' id='contact'>Contact</a>
                    </div>
                    <a href='javascript:void(0);' class='menu' onclick='myFunction()'>
                    <i class='fa fa-bars'>menu</i>
                    </a>
                </div>
            </section>
        )
    }
}