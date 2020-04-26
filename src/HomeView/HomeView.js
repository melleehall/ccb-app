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
                            We are currently in need of volunteers in each of the five service regions to help us by contacting residents and gathering emails and phone numbers.
                        </p>
                        <p className='volunteer-p'>
                            Visit our Signup page or email us at <a href='mailto:volunteers@clearcreekbroadband.com?subject=Clear Creek Broadband Volunteer Opportunity'>volunteers@clearcreekbroadband.com</a>
                        </p>
                        <Link to='/signup' id='signup-desktop' className='signup-btn' role='button' aria-pressed='false'>Sign Me Up</Link>                 
                    </section>  
                    </div> 
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
                <section>
                    <h2 className='lightestgray'>Network Status</h2>
                    <p className='lightestgray summary'>
                        The CCB Team is working hard to bring service in as quickly as possible - as soon as the fall of 2020 and no later than the spring of 2021.
                        You can now visit our <Link to='/signup'>Signup Page</Link> to request service which helps us to better understand and plan for demand in each region.
                        We will update this website frequently to keep everyone aware of progress and updates.
                    </p>
                    <div className='img-container'>
                        <img src={mntlaptop} alt='laptop with mountain background' className='img'/>
                        <div className='mnt-txt'>
                         
                            ENJOY THE INTERNET SERVICES OF TODAY... & TOMORROW.
                        </div>
                    </div>
                </section>
            </section>
        )
    }
}