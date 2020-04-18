import React, { Component } from 'react'
import './HomeView.css'
import '../universalstyles.css'

export default class HomeView extends Component {
    render() {
        return (
            <section class='landing-view flex-col'>
                <section class='flex-col'>
                    <div class='flex-row'>
                    <div class='wires-container'>
                        <section class='intro-p'>
                            <h2 class='latest'>Latest News</h2>
                            <p>
                                Friends and neighbors, high-speed internet is coming to Clear Creek County.
                                Today is the LAST day to sign up for our prepaid offer! Click below to learn more now and contact us at <a href='mailto:support@clearcreekbroadband.com'>support@clearcreekbroadband.com</a> with any questions.
                            </p>
                            <a href='#signup-desktop' id='signup-desktop' class='signup-btn' role='button' aria-pressed='false'>Sign Me Up</a>                
                        </section>
                    </div>    
                    <h2 class='lightestgray who-are-we'>Who are we?</h2>
                    <p class='summary lightestgray'>
                        Clear Creek Broadband (CCB) is a local internet service company dedicated to providing our neighbors in eastern Clear Creek County with access to a highspeed broadband connection. 
                        Our fixed wireless broadband network will provide the speeds and local support to make each of our homes ready for the internet services of today and tomorrow. 
                    </p>
                </div>
                </section>
                <section>
                <div class='img-container'>
                    <img src='bandwmnt.jpg' alt='black and white mountains' class='img' />
                    <div class='mnt-txt'>FAST.  LOCAL. </div>
                </div>
                </section>
                <section>
                <h2 class='lightestgray'>Network Status</h2>
                <div class='flex-row network-status-container'>
                    <p class='lightestgray summary'>
                        CCB has completed all of the documents necessary to begin deploying the network.
                        We are now finalizing contracts with property owners for access points and easement where necessary.  
                        We will begin construction in the spring of 2020 and the complete build-out will take 12-18 months.  
                        Service will begin being offered in the fall of 2020. 
                        We will update this website frequently to keep everyone aware of progress and updates.
                    </p>
                    <div class='img-container'>
                        <img src='mntlaptop.jpg' alt='laptop with mountain background image' class='img'/>
                        <div class='mnt-txt'>
                         
                            ENJOY THE INTERNET SERVICES OF TODAY... & TOMORROW.
                        </div>
                    </div>
                </div>
                </section>
            </section>
        )
    }
}