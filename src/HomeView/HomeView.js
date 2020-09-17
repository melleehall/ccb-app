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
                            Pictures of the subscriber home equipment are now available here: <NavLink to='/support'>FAQ Page</NavLink>.  
                        </p>
                        <p className='volunteer-p'>
                            If we do not already have your current contact information, please, click on the 'Sign Me Up' button below and submit the form so that we can notify you when service is available for your home.
                        </p>
                        <Link to='/signup' id='signup-desktop' className='signup-btn' role='button' aria-pressed='false'>Sign Me Up</Link>                 
                    </section>  
                    </div> 
                    <section>
                    <div className='lightestgray net-stat-header'>
                        <h2>Network Status</h2>
                        <h3>As of: 09-17-2020</h3>
                    </div>
                    <p className='lightestgray summary'>
                        Our pilot tests were postponed due to delays experienced by another provider who we are reliant on to finish work at our main hub site before we can offer service to our first coverage area.
                        We expect to be able to start testing in "pilot homes" by the end of next week.
                        An update will be posted here when testing begins, and the test period will last about three weeks.
                        We know that this news is not ideal, and hope you understand that some delays are out of our hands due to the current challenges of the world and the providers who we rely on needing to operate safely.
                    </p>
                    <p className='lightestgray summary'>
                        The pilot phase delay does not impact our timeline for engineering and permitting of the other serving sites which are all towers. 
                        We are working with a local general contractor who has deep Clear Creek roots and has dealt with the county process many times, so we are hopeful that we can get primary construction phases completed before the weather turns bad.  
                        Once the towers are built, it will take a few weeks to get transmitting radios placed onto the towers and into service.
                        We are still targeting to provide service to all areas by the end of the year. 
                    </p>
                    <p className='lightestgray summary'>
                        Pictures of the subscriber home equipment are now available on our FAQ page found here: <NavLink to='/support'>FAQ Page</NavLink>.  
                        The home equipment includes a receiver (think of a small satellite dish on the roof or side of the house) that is wired to a router inside the home.     
                    </p>
                    <p className='lightestgray summary'>
                        Thank you all for your continued support and interest in our service.  Please, continue to share your contact information with us through the Signup page if we do not already have it so that we can get in touch with you when the time comes to schedule your home equipment installation.
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