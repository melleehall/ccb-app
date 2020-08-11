import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
                            We have primary connection near completion at our main hub site, King Murphy!
                            We will be testing the equipment and service inside of "pilot" homes by the end of August.
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
                        <h3>As of: 08-10-2020</h3>
                    </div>
                    <p className='lightestgray summary'>
                       We are sure that many of you are wondering what we are up to so here is a quick update...
                    </p>
                    <p className='lightestgray summary'>
                        We have primary connection near completion at King Murphy which is our main hub site.  
                        We also have all of the internet connections provisioned and will first be testing the radios and then the equipment inside of some “pilot” homes by the end of August.  
                        The subscribers' home equipment will include a receiver (think of a small satellite dish on the roof or side of the house) which will be wired to a router inside the home.  
                        We will post some pictures of the equipment on our website to give you an idea of what it looks like.
                    </p>
                    <p className='lightestgray summary'>
                        The other serving locations will be towers which are currently being engineered with permitting and construction to follow.  
                        We found a local general contractor who has deep Clear Creek roots and has dealt with the county process many times, so we are hopeful that we can get primary construction phases completed before the weather turns bad.  
                        Once the towers are built, it will take a few weeks to get transmitting radios placed onto the towers and into service.
                        We are still targeting to provide service to all areas by the end of the year. 
                    </p>
                    <p className='lightestgray summary'>
                        Meanwhile, we are working behind the scenes on adding customer features to the website and procuring equipment so as areas open for service, we are ready to support all subscribers.  
                        Preparations include developing training and installation processes, customer materials, and other basic tasks needed to run a service.
                    </p>
                    <p className='lightestgray summary'>
                        Thank you all for your support (we got a significant number of prepaid deposits!) and for your interest in our service.  
                        I know that many of you are eager to have access to high-speed internet and may feel like it is taking a long time, but we were officially awarded funds in March so for all practical purposes, we are a few months into the construction phase.  
                        There is so much to do and so little time to get it all done, but we will continue to post major updates about the network build and service here.  
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