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
                            We received zoning approval from the county commissioners for all three of our primary tower serving sites, and the building plans are being reviewed by the county.
                        </p>
                        <p className='volunteer-p'>
                            Prepare for your future installation now by visiting our FAQ page to find out what speeds the network offers, the difference between internet and WiFi, and more.
                        </p>
                        <Link to='/support' id='signup-desktop' className='signup-btn' role='button' aria-pressed='false'>Visit FAQs</Link>                 
                    </section>  
                    </div> 
                    <section>
                    <div className='lightestgray net-stat-header'>
                        <h2>Network Status</h2>
                        <h3>February 2021</h3>
                    </div>
                    <p className='lightestgray summary'>
                        Dear Neighbors, 
                        We received zoning approval from the county commissioners for all three of our primary tower serving sites.  
                        The building plans are being reviewed by the county, and we anticipate building permits being issued the first week of March.  
                    </p>
                    <p className='lightestgray summary'>
                        In March and April, we will be busy with site preparation, foundation construction, assembly and erection of the towers, and installing the serving radios and electronics.  
                        We expect the towers to be ready to provide service in May and will begin contacting neighbors to schedule home equipment installations a few weeks prior to when we are able to provide service.  
                        Please, understand that our projected timeline is subject to winter weather conditions with our Yankee Creek serving site being the most susceptible to access challenges and potential delays.
                    </p>
                    <p className='lightestgray summary'>
                        We are piloting service in French Springs and parts of the Bendemeer area right now through a distribution point that is not dependent on the towers.  
                        Our pilot volunteers are very happy with their service, and we anticipate fully opening these new areas up for service in March.
                    </p>
                    <p className='lightestgray summary'>
                        We are still scouting for repeater site hosts to fill in small coverage gaps.  
                        Please, contact us at "questions@clearcreekbroadband.com" if you are interested in helping and would like more information.  
                        We are grateful for all the support that we are receiving for the project. Thank you!
                    </p>
                    <p className='lightestgray summary'>
                        Here are a few things that you can do to prepare for your installation:
                        <ol className='homeowner-list'>
                            <li>1) Submit the form on our Signup Page to request service if you have not already or if your contact information has changed.</li>
                            <li>2) Read "What is the difference between internet and WiFi?" on our <NavLink to='/support'>FAQ Page</NavLink> and understand what our scope of work will be for your installation. </li>
                            <li>3) Locate your grounding wire and think about where you would like service in your home.  Your installer will want to know where you would like your router installed.</li>
                            <li>4) Purchase a power strip.  This will give you more flexibility to plug in devices to the same outlet that powers your router which is especially useful in home offices.</li>
                        </ol>
                    </p>
                    <div className='divider'>
                    </div>
                    <section className='testimonial'>
                        <q className='block'>
                        We’ve been waiting for this for a long time, finally a true broadband service for this area, especially when people are having to spend more time at home. 
                        Download and upload speeds are both as advertised or better, and there isn’t the lag associated with satellite internet. 
                        Installation proceeded smoothly, the crew was very courteous, and the outdoor dish install and cabling were professionally done. 
                        We have a real sense of relief now with Clear Creek Broadband.
                        </q>
                        -- Dahl and Loren (Pilot Homeowners)
                    </section>
                    <div className='divider'>
                    </div>
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