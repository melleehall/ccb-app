import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './DesktopNav.css'

export default class DesktopNav extends Component {
    render() {
        return (
            <section className="topnav-desktop">
                <div className='topnav-desktop-inner'>
                    <ul>
                        <li><Link to='/' id='home'>Home</Link></li>
                        <li><Link to='/signup' id='signup'>Signup</Link></li>
                        <li><Link to='/billing' id='billing'>Billing</Link></li>
                        <li><Link to='/support' id='service-desk'>FAQ + Support</Link></li>
                        <li><Link to='/contact' id='contact'>Contact</Link></li>
                    </ul>
                </div>
            </section>
        )
    }
}