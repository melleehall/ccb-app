import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './FAQSupportView.css'
import '../universalstyles.css'
import glasseslaptopphone from '../Images/glasseslaptopphone.jpg'
import twopeoplewithlaptops from '../Images/twopeoplewithlaptops.jpg'
import cpeRouter from '../Images/cnPilotr195W.jpg'
import cpeRadio from '../Images/450bSM.png'
import serviceAreas from '../Images/serviceAreas.pdf'
import serviceTerms from '../Images/CCBServiceTerms.pdf'

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
                            <p className='faq-question'>
                                When will the network be built?
                            </p>
                            <p className='faq-answer'>​
                                Please, refer to the Network Status section of the Home page for the latest update on timing for coverage throughout the network.  
                                Our hub site is operational, and we are providing service to certain areas that do not require a connection to one of our primary tower sites to be served.
                            </p>
                        </li>
                        <li>
                            <p className='faq-question'>
                                How can I sign up for service?
                            </p>
                            <p className='faq-answer'>
                                If you would like service and have not yet shared your preferred contact information with us, please submit the form on our Signup page so we can get in touch when we are able to provide you with service.
                            </p>
                            <p className='faq-answer'>
                                We are scheduling customer equipment installations for neighbors who can currently receive service and have requested it through the Signup form or prepaid bundle.  
                                We will begin contacting neighbors who are served through the primary tower serving sites regarding their home equipment installations a few weeks prior to when we are able to provide service.
                                Please, understand that the list of neighbors who need service is very long, and we will be working as quickly as possible to get everyone set-up.
                            </p>
                        </li>
                        <li>
                            <p className='faq-question'>
                                Once I sign up, what are the steps to get service?
                            </p>
                            <p className='faq-answer'>
                                First, we perform a signal analysis to make sure our serving site(s) can provide you service. 
                                We then schedule a time to complete a site survey.  
                            </p>
                            <p className='faq-answer'>
                                Upon arrival to your home, we complete a signal test to verify that we can provide you with service and then, talk to you about the preferred location of the receiver, where in the home you would like service and what options we have for installation.  
                                Once all those questions have been addressed, we schedule a time to install the equipment and wiring to get your home connected. 
                            </p>
                            <p className='faq-answer'>
                                The installation appointment is approximately three hours.  
                                It involves mounting the receiver, running cable from the receiver to the point of entry into the house, setting up the router, and grounding the electronics.
                                Unless there is an existing penetration, your installer will need to drill a hole that is large enough for the wire to pass through from the exterior to the inside of the home.
                                Lastly, we test the router to verify that you are getting service.
                            </p>
                        </li>
                        <li>
                            <p className='faq-question'>
                                What kind of equipment will I need in my home to receive service?
                            </p>
                            <p className='faq-answer'>
                                The subscribers' home equipment will include a receiver (think of a small satellite dish on the roof or side of the house) which will be wired to a router inside the home.
                            </p>
                            <div className='cpe-container'>
                                <figure>
                                    <img src={cpeRouter} alt='Cambium PMP 450b high gain subscriber module' className='cpe-img'/>
                                    <figcaption>Router</figcaption>
                                </figure>
                                <figure>
                                    <img src={cpeRadio} alt='Cambium PMP 450b high gain subscriber module' className='cpe-img'/>
                                    <figcaption>Receiver</figcaption>
                                </figure>
                            </div>
                        </li>
                        <li>
                            <p className='faq-question'>
                                What are the costs for the customer equipment and installation?
                            </p>
                            <p className='faq-answer'>
                                The total cost of the receiver and router is $300.  
                                A standard installation costs $125.  
                                During your site survey, we will determine whether any special equipment or labor is required to bring you service.  
                                Custom solutions require prior approval and are subject to additional charges.
                            </p>
                        </li>
                        <li>
                            <p className='faq-question'>
                                How much will service cost?
                            </p>
                            <p className='faq-answer'>
                                Service will cost $70.00 per month.  No additional fees or taxes will be charged.
                            </p>
                        </li>
                        <li>
                            <p className='faq-question'>
                                What is the difference between internet and WiFi?
                            </p>
                            <p className='faq-answer'> 
                                Believe it or not, internet and WiFi are not the same although many people use the terms interchangeably. 
                            </p>
                            <p className='faq-answer'>
                                The internet is a global system that connects millions of computer networks around the world.   
                                A home WiFi network allows devices such as computers and printers to be connected locally and to the internet (through your wireless router) in lieu of using actual cables.
                            </p>
                            <p className='faq-answer'>
                                Clear Creek Broadband provides a connection to the internet.  
                                We will also install a wireless router that provides your devices with access to the internet.  
                                The homeowner is responsible for how the service operates in the home.  
                                If you have older equipment, a large property etc. your home system will need to be designed to meet your needs.
                                CCB does not do this, but we can provide suggestions on preferred equipment and what systems have fewer service issues.
                            </p>
                        </li>
                        <li>
                            <p className='faq-question'>
                                How can I stay updated on the network build and find out when service will be available in my area?
                            </p>
                            <p className='faq-answer'>
                                Please, refer to the "Latest News" section of the <NavLink to='/'>Home Page</NavLink> of this website for progress updates.
                                If you have not already provided us with your current contact information, please visit the <NavLink to='/signup'>Signup Page</NavLink> so that we know you are interested and can in touch with you when it is time to install your home equipment.
                            </p>
                        </li>
                        <li>
                            <p className='faq-question'>
                                Who is building the network?
                            </p>
                            <p className='faq-answer'>
                                Clear Creek Broadband along with subcontractors.
                            </p>
                        </li>
                        <li>
                            <p className='faq-question'>What upload and download speeds will the network offer?</p>
                            <p className='faq-answer'>
                                You can expect to see internet speeds of at least 50 Mbps download speed and 10 Mbps upload speed.  
                            </p>
                            <p className='faq-answer'>
                                Download speed describes how quickly data is transferred from a server to your computer - examples of download activities include streaming a video on YouTube and loading a web page to read an article.
                                Upload speed describes how quickly data is sent from you to others - examples of upload activities include sending images to a friend via email or posting a comment to Facebook.
                                Eastern Clear Creek County's existing internet provider offers 1.5 Mbps download and 0.75 Mbps upload speeds.  With CCB's network, you can expect 33 times faster download and 13 times faster upload speeds.
                            </p>
                        </li>
                        <li>
                            <p className='faq-question'>
                                What are the terms of service?
                            </p>
                            <p className='faq-answer'>
                                You can view them here: <a href={serviceTerms} target='_blank' rel="noopener noreferrer">Service Terms</a>
                            </p>
                        </li>
                        <li>
                            <p className='faq-question'>
                                Will precipitation such as snow affect the reliability or speed of my service?
                            </p>
                            <p className='faq-answer'>
                                Rain and snow will not have a significant impact on your connection or the speeds you receive.  
                                Your installer will assist in selecting an optimal location to mount your external radio so that you can get a reliable signal year-round. 
                            </p>
                        </li>
                        <li>
                            <p className='faq-question'>
                                Can I see a map of the proposed broadband service area?
                            </p>
                            <p className='faq-answer'>
                                Yes! To view a current version of the service area map, please click here: <a href={serviceAreas} target='_blank' rel="noopener noreferrer">Proposed Broadband Service Area Map</a>
                            </p>
                            <p className='faq-answer'>
                                The service areas include Old Squaw Pass, Echo Hills, Upper Witter Gulch, Lower Witter Gulch/Circle K, and Golden Willow/Yankee Creek.
                            </p>
                        </li>
                    </ul>
                </section>
                <section className='desktop-row-imgs'>
                    <img src={glasseslaptopphone} alt='glasses on top of laptop with smart phone' className='glasses-img' />
                    <img src={twopeoplewithlaptops} alt='two people with laptops' className='two-laptops' />
                </section>
                <section>
                    <h2 className='lightestgray' id='email'>Still have questions or need general assistance? </h2>
                    <p className='service-form-content lightestgray'>
                        Email us at <a href="mailto:questions@clearcreekbroadband.com">questions@clearcreekbroadband.com</a>.  
                        We look forward to assisting you!
                    </p>
                </section>
            </section>
        )
    }
}