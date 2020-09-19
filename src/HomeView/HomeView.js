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
                            Our first pilot testing site is live!  
                        </p>
                        <p className='volunteer-p'>
                            For the next few weeks, we will be perfecting our installation process, gathering valuable feedback from neighbors participating in the pilot program, and preparing for our commercial service launch for homes covered in our initial service area.
                        </p>
                        <Link to='/signup' id='signup-desktop' className='signup-btn' role='button' aria-pressed='false'>Sign Me Up</Link>                 
                    </section>  
                    </div> 
                    <section>
                    <div className='lightestgray net-stat-header'>
                        <h2>Network Status</h2>
                        <h3>As of: 09-19-2020</h3>
                    </div>
                    <p className='lightestgray summary'>
                        Pilot testing is now underway!  
                        We are perfecting our installation process, gathering valuable feedback from neighbors participating in the pilot program, and preparing for our commercial service launch for homes covered in our initial service area.
                        This is an important milestone in our journey and one that we are excited to share with you.
                    </p>

                    <p className='lightestgray summary'>
                        Pictures of the subscriber home equipment are now available on our FAQ page found here: <NavLink to='/support'>FAQ Page</NavLink>.  
                        The home equipment includes a receiver (think of a small satellite dish on the roof or side of the house) that is wired to a router inside the home.     
                        When we are nearing the end of our pilot test phase, we will begin contacting homeowners that are eligible for service under our initial coverage area to schedule installation appointments.
                    </p>
                    <p className='lightestgray summary'>
                        Our other serving sites which are all towers are in the engineering and permitting phase.
                        We are working with a local general contractor who has deep Clear Creek roots and has dealt with the county process many times, so we are hopeful that we can get primary construction phases completed before the weather turns bad.  
                        Once the towers are built, it will take a few weeks to get transmitting radios placed onto the towers and into service.
                        We are still targeting to provide service to all areas by the end of the year. 
                    </p>
                    <p className='lightestgray summary'>
                        Thank you all for your continued support and interest in our service.  We will continue to work hard towards bringing coverage to all of our service areas and share important milestones here on the website.
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