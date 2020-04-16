import React, {Component} from 'react'
import './DesktopNav.css'

export default class DesktopNav extends Component {
    render() {
        return (
            <section class="topnav-desktop">
                <div class='topnav-desktop-inner'>
                    <ul>
                        <li><a href='#home-desktop' id='home-desktop'>Home</a></li>
                        <li><a href='#signup-desktop' id='signup-desktop'>Signup</a></li>
                        <li><a href='#billing-desktop' id='billing-desktop'>Billing</a></li>
                        <li><a href='#service-desk-desktop' id='service-desk-desktop'>FAQ + Support</a></li>
                        <li><a href='#contact-desktop' id='contact-desktop'>Contact</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}