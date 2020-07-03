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
                            Opt in for our Prepaid Offer by July 15th (limit 25 subscribers) to save $240 on your first year of service and initial equipment and install costs.
                            Please, mail a check for $1,000 made out to Clear Creek Broadband, LLC to 456 Crystal Ridge Road, Evergreen, CO 80439. 
                        </p>
                        <p className='volunteer-p'>
                            If you would like service but are not opting in for the limited-time offer, click on the 'Sign Me Up' button below and select 'Request Service' on our contact form.
                        </p>
                        <Link to='/signup' id='signup-desktop' className='signup-btn' role='button' aria-pressed='false'>Sign Me Up</Link>                 
                    </section>  
                    </div> 
                    <section>
                    <div className='lightestgray net-stat-header'>
                        <h2>Network Status</h2>
                        <h3>As of: 07-03-2020</h3>
                    </div>
                    <p className='lightestgray summary'>
                        As shared last month, our equipment selections include the Cambium 450 for our main network and Aviat for our tower-to-tower backhaul network.  
                        We will continue to post updates both in this section (Network Status) as well as on the <Link to='/support'>FAQ Page</Link> explaining what equipment you will need in your home to be ready once service becomes available.
                    </p>
                    <p className='lightestgray summary'>
                        This month, we will continue building our main hub site and plan to begin testing towards the end of the month.
                        We want to bring on the other towers/regions as quickly as possible, so it is very import to let us know now if you are interested in service.  
                        This is a change from our initial plan, because some areas have very high demand and lots of pre-sales while others may not be aware of our efforts.
                        If you know of renters or neighbors who have interest, please urge them to sign up now too.
                    </p>
                    <p className='lightestgray summary'>
                        Check in here frequently to keep track of our progress so that you can be sure not to commit to another long-term contract with a satellite company.
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