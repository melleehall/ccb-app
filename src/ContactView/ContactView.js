import React, { Component } from 'react'
import './ContactView.css'
import '../universalstyles.css'

export default class ContactView extends Component {
    render() {
        return (
            <section className='contact-view'>
                <section className='customer-contact'>
                    <h1>Customer Support</h1>
                    <div className='lightestgray'>
                        <h2>Technical Support</h2>
                        <ul className='contact-info'>
                            <li>Email: <a href='mailto:support@clearcreekbroadband.com'>support@clearcreekbroadband.com</a></li>
                            <li>Phone: (303) 801-2854</li>
                        </ul>
                    </div>
                    <div className='lightestgray questions'>
                    <h2>General Inquiries</h2>
                        <ul className='contact-info'>
                            <li>Email: <a href='mailto:questions@clearcreekbroadband.com'>questions@clearcreekbroadband.com</a></li>
                        </ul>
                    </div>
                </section>
            </section>
        )
    }
}