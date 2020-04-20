import React, { Component } from 'react'
import './ContactView.css'
import '../universalstyles.css'

export default class ContactView extends Component {
    render() {
        return (
            <section className='contact-view'>
                <h1 className='gray'>Contact Us</h1>
                <section className='customer-contact'>
                    <h2 className='lightestgray'>Customer Support</h2>
                    <ul className='lightestgray contact-info'>
                        <li>Email: <a href='mailto:support@clearcreekbroadband.com'>support@clearcreekbroadband.com</a></li>
                        <li>Phone: (303) 801-2854</li>
                    </ul>
                </section>
            </section>
        )
    }
}