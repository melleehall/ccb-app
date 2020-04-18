import React, { Component } from 'react'
import './ContactView.css'
import '../universalstyles.css'

export default class ContactView extends Component {
    render() {
        return (
            <section class='contact-view'>
                <h1 class='gray'>Contact Us</h1>
                <section class='customer-contact'>
                    <h2 class='lightestgray'>Customer Support</h2>
                    <ul class='lightestgray contact-info'>
                        <li>Email: <a href='mailto:support@clearcreekbroadband.com'>support@clearcreekbroadband.com</a></li>
                        <li>Phone: (303) 801-2854</li>
                    </ul>
                </section>
            </section>
        )
    }
}