import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './FAQSupportView.css'
import '../universalstyles.css'
import glasseslaptopphone from '../Images/glasseslaptopphone.jpg'
import CCBLIDRoutes08202018 from '../Images/CCB_LID_Routes_2018-08-20.pdf'
import CCCProposedLIDMap08012018 from '../Images/CCC-Proposed-LID-Map-08-01-2018.pdf'

export default class FAQSupportView extends Component {
    render() {
        return (
            <section className='support-view'>
                <section>
                    <h1 className='gray'>Need some help? We're here for you.</h1>
                    <div className='support-btns flex-row'>
                        <a href='#faq' className='signup-btn' role='button' aria-pressed='false'>FAQ</a>          
                        <a href='#email' className='signup-btn' role='button' aria-pressed='false'>Contact</a>                
                    </div>
                </section>
                <section className='FAQ'>
                    <h2 className='lightestgray' id='faq'>FAQ</h2>
                    <ul className='faq-list lightestgray'>
                        <li>
                            <p className='faq-question'>When will the network be built?</p>
                            <p className='faq-answer'>We are working hard to bring service in as quickly as possible - as soon as the fall of 2020 and no later than the spring of 2021.</p>
                        </li>
                        <li>
                            <p className='faq-question'>How much will service cost?</p>
                            <p className='faq-answer'>Service will cost $70.00 per month.  No additional fees or taxes will be charged.
                            </p>
                        </li>
                        <li>
                            <p className='faq-question'>How can I stay updated on the network build and find out when service will be available in my area?</p>
                            <p className='faq-answer'>Please, visit the <NavLink to='/signup'>Signup Page</NavLink> to subscribe to our mailing list.
                                You can also refer to the "Latest News" section of the <NavLink to='/'>Home Page</NavLink> of this website for progress updates. 
                            </p>
                        </li>
                        <li>
                            <p className='faq-question'>Who is building the network?</p>
                            <p className='faq-answer'>Clear Creek Broadband along with subcontractors.</p>
                        </li>
                        <li>
                            <p className='faq-question'>What upload and download speeds will the network offer?</p>
                            <p className='faq-answer'>
                                You can expect to see speeds of at least 50 Mbps download speed and 10 Mbps upload speed.  
                            </p>
                            <p className='faq-answer'>
                                Download speed describes how quickly data is transferred from a server to your computer - examples of download activities include streaming a video on YouTube and loading a web page to read an article.
                                Upload speed describes how quickly data is sent from you to others - examples of upload activities include sending images to a friend via email or posting a comment to Facebook.
                                Eastern Clear Creek County's existing internet provider offers 1.5 Mbps download and 0.75 Mbps upload speeds.  With CCB's network, you can expect 33 times faster download and 13 times faster upload speeds.
                            </p>
                        </li>
                        <li>
                            <p className='faq-question'>Can I see a map of the proposed broadband service area?</p>
                            <p className='faq-answer'>
                                Yes! To view a current version of the service area map, please click here: <a href={CCCProposedLIDMap08012018} target='_blank' rel="noopener noreferrer">Proposed Broadband Service Area Map</a>
                            </p>
                            <p className='faq-answer'>
                                The service areas include Old Squaw Pass, Echo Hills, Upper Witter Gulch, Lower Witter Gulch/Circle K, and Golden Willow/Yankee Creek.
                            </p>
                        </li>
                        <li>
                            <p className='faq-question'>What is the proposed design for the broadband system?</p>
                            <p className='faq-answer'>
                                For an aerial view of the proposed broadband system design, please click here: <a href={CCBLIDRoutes08202018} target='_blank' rel="noopener noreferrer">CCB Map of the Proposed Broadband System Design</a>
                            </p>
                        </li>
                    </ul>
                    <img src={glasseslaptopphone} alt='glasses on top of laptop with smart phone' className='glasses-img' />
                </section>
                <section>
                    <h2 className='lightestgray' id='email'>Still have questions or need assistance? </h2>
                    <p className='service-form-content lightestgray'>
                        Email us at <a href="mailto:support@clearcreekbroadband.com">support@clearcreekbroadband.com</a>.  
                        We look forward to assisting you!
                    </p>
                </section>
            </section>
        )
    }
}