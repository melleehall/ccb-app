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
                            We will begin offering service to some homes served by the King Murphy hub site by the end of October.  We will soon begin contacting eligible neighbors to schedule site surveys and home equipment installations.
                        </p>
                        <p className='volunteer-p'>
                            Various strains on our projected timeline for serving all areas have required us to revise our target service date for homes not served directly by the hub site.
                            Please, read the Network Status Update for details.
                        </p>
                        <Link to='/signup' id='signup-desktop' className='signup-btn' role='button' aria-pressed='false'>Sign Me Up</Link>                 
                    </section>  
                    </div> 
                    <section>
                    <div className='lightestgray net-stat-header'>
                        <h2>Network Status</h2>
                        <h3>As of: 10-20-2020</h3>
                    </div>
                    <p className='lightestgray summary'>
                        Dear Neighbors, 
                        We have experienced various strains on our projected timeline and must share with you that our original estimation of service for all homes by the end of the year was too optimistic.  
                        We do still expect to be able to complete construction of the three primary tower sites at the end of the year with service to follow within 30 to 60 days depending on household location.
                    </p>
                    <p className='lightestgray summary'>
                        Through pilot testing, we have collected data and identified areas needing improvement in our network design.  We are using this information to recalibrate and improve our models.  
                        Although we are using a common wireless network design and proven technology, our radios are operating on a new frequency.  
                        This frequency is ideal for our network, however, there are some learning curves in understanding its capabilities.
                        To supplement model predictions, we will continue to do true boots-on-the-ground scouting to validate our data points and improve our network plan.
                    </p>
                    <p className='lightestgray summary'>
                        We are seeing very good speeds in our pilot testing from the hub site at King Murphy.  
                        We will begin offering service to some homes in that area by the end of the month and will soon begin contacting eligible neighbors to schedule site surveys and home equipment installations.
                    </p>
                    <p className='lightestgray summary'>
                        Our updated model is helping us to identify areas that will not receive a strong signal directly from a tower and will therefore require repeater sites.                      
                        Repeater sites do not require any permitting or county processes - only approval from the homeowner of the repeater site.  
                    </p>
                    <p className='lightestgray summary'>
                        We will continue to work through the unique challenges presented by COVID-19 and building a network in the mountains.  
                        We do recognize the urgency to bring high-speed internet to all homes as quickly as possible and appreciate your continued support.                        
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