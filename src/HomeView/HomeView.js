import React, { Component } from 'react'
import bandwmnt from '../Images/bandwmnt.jpg'
import mntlaptop from '../Images/mntlaptop.jpg'
import './HomeView.css'
import '../universalstyles.css'

export default class HomeView extends Component {
    render() {
        return (
            <section className='landing-view flex-col'>
                    <div className='wires-container block'>
                        <section className='intro-p'>
                            <h2 className='latest'>Latest News</h2>
                            <p>
                                Friends and neighbors, high-speed internet is coming to Clear Creek County.
                            </p>
                            <p>
                                Construction begins next month!  Click below to request service now and join our mailing list to stay in the loop.
                            </p>
                            <a href='#signup-desktop' id='signup-desktop' class='signup-btn' role='button' aria-pressed='false'>Sign Me Up</a>                 
                    </section>  
                    </div> 
                <section>
                    <h2 className='lightestgray who-are-we block'>Who are we?</h2>
                    <p className='summary lightestgray block'>
                        Clear Creek Broadband (CCB) is a local internet service company dedicated to providing our neighbors in eastern Clear Creek County with access to a highspeed broadband connection. 
                        Our fixed wireless broadband network will provide the speeds and local support to make each of our homes ready for the internet services of today and tomorrow. 
                    </p>
                </section>
                <section>
                <div className='img-container'>
                    <img src={bandwmnt} alt='black and white mountains' class='img' />
                    <div className='mnt-txt'>FAST.  LOCAL. </div>
                </div>
                </section>
                <section>
                    <h2 className='lightestgray'>Network Status</h2>
                    <p className='lightestgray summary'>
                        CCB has completed all of the documents necessary to begin deploying the network.
                        We are now finalizing contracts with property owners for access points and easement where necessary.  
                        We will begin construction in the spring of 2020 and the complete build-out will take 12-18 months.  
                        Service will begin being offered in the fall of 2020. 
                        We will update this website frequently to keep everyone aware of progress and updates.
                    </p>
                    <div className='img-container'>
                        <img src={mntlaptop} alt='laptop with mountain background' class='img'/>
                        <div className='mnt-txt'>
                         
                            ENJOY THE INTERNET SERVICES OF TODAY... & TOMORROW.
                        </div>
                    </div>
                </section>
            </section>
        )
    }
}