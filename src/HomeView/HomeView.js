import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import bandwmnt from '../Images/bandwmnt.jpg'
import mntlaptop from '../Images/mntlaptop.jpg'
import './HomeView.css'
import '../universalstyles.css'

export default class HomeView extends Component {
    render() {
        return (
            <section className='landing-view flex-col'>
                    <section className='lightestgray'>
                        <p className='friends-neighbors'>
                            Friends and neighbors, high-speed internet is coming to Eastern Clear Creek County.  
                        </p>
                    </section>
                    <div className='wires-container block'>
                    <section className='intro-p'>
                        <h2 className='latest'>Latest News</h2>
                        <p>
                            Please, read our latest Network Status update and keep checking the site to see if your area is being opened up for customer equipment installations. 
                        </p>
                        <p className='volunteer-p'>
                            You can find the answers to commonly asked questions on our FAQ page such as "What speeds does the network offer?", "How much will service cost?", and "What is the difference between internet and WiFi?". 
                        </p>
                        <Link to='/support' id='signup-desktop' className='signup-btn' role='button' aria-pressed='false'>Visit FAQs</Link>                 
                    </section>  
                    </div> 
                    <section>
                    <div className='lightestgray net-stat-header'>
                        <h2>Network Status</h2>
                        <h3>December 2020</h3>
                    </div>
                    <p className='lightestgray summary'>
                        Dear Neighbors, 
                        The Clear Creek Broadband network has various points of distribution to bring service to your home.  
                        We call the main sites “Towers”, and we have three that will be constructed in the spring.  
                        All three towers are being reviewed and approved by the county for zoning and permitting.  
                        These approvals need to go thru the Planning Commission and then on to the Board of County Commissioners.  
                        Our final review with the county for the serving towers is scheduled for the first week of January with construction to follow.
                    </p>
                    <p className='lightestgray summary'>
                        The towers serve a majority of the homes in our initial service area, but they will not reach all of our homes. 
                        To serve the remaining homes, we need to add a second "hop" which we refer to as a "Repeater Site".  
                        Repeater Sites are attached to homes that already receive service, and they retransmit to other homes that cannot be served directly by the towers.  
                        They do not require any permitting or county processes - only approval from the homeowner of the Repeater Site.  
                    </p>
                    <p className='lightestgray summary'>
                        We continue to scout for areas where we need to add Repeater Sites to our network, so we can reach our goal of 80% coverage.  
                        We currently have two Repeater Sites under construction and will be adding a couple more in January 2021.  
                        Please, keep checking the site to see if your area is being opened up for customer equipment installations. 
                    </p>
                    <p className='lightestgray summary'>
                        As we get close to installing in homes and reflect on what we learned from our pilots, we would like to share some key points that homeowners need to think about regarding how the service will work best for them.  
                        We have tried to address some of these issues on our FAQ page but the main considerations are the following:
                        <ol className='homeowner-list'>
                            <li>1) We have to locate the receiver dish/antenna in a place that gets the best signal.  The location is typically high on the side of the home or on the roof.</li>
                            <li>2) The wire will need to come into your home in a place where it can either be connected to your home network or where it is central to the home so that the signal can be distributed throughout your living spaces.  If you have a larger home you may need extra wiring or equipment so think about how you want your home set up. </li>
                            <li>3) CCB will not be providing your in-home WiFi service but can make some suggestions on what works best.  Our FAQ page has an explanation for "What is the difference between internet and WiFi?" if you an unsure what we mean by "in-home WiFi service".</li>
                        </ol>
                    </p>
                    <div className='img-container'>
                        <img src={mntlaptop} alt='laptop with mountain background' className='img'/>
                        <div className='mnt-txt'>
                         
                            ENJOY THE INTERNET SERVICES OF TODAY... & TOMORROW.
                        </div>
                    </div>
                </section>
                <section>
                    <h2 className='lightestgray who-are-we block'>Who are we?</h2>
                    <p className='summary lightestgray block'>
                        Clear Creek Broadband (CCB) is a local internet service company dedicated to providing our neighbors in Eastern Clear Creek County with access to a highspeed broadband connection. 
                        Our fixed wireless broadband network will provide the speeds and local support to make each of our homes ready for the internet services of today and tomorrow. 
                    </p>
                </section>
                <section>
                <div className='img-container'>
                    <img src={bandwmnt} alt='black and white mountains' className='img' />
                    <div className='mnt-txt'>FAST.  LOCAL. </div>
                </div>
                </section>
            </section>
        )
    }
}