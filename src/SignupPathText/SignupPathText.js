import React, { Component } from 'react'
import serviceAreas from '../Images/serviceAreas.pdf'
import childwithtablet from '../Images/childwithtablet.jpg'
import './SignupPathText.css'


export default class SignupPathText extends Component {
    render() {
        return (
            <section className='signup-view'>
                <section>
                    <h2 className='signup-subhead lightestgray'>Explanation of Signup Options</h2>
                    <p className='lightestgray'> <span className='bold'>Request Service:</span> This does not obligate you to take the service once available but rather helps us to understand demand in each region.
                        We are currently designing the network and knowing who is interested will help us to better plan how to accommodate all users.
                        If you are unsure whether your home will be serviced by the new network, please refer to the service area map: <a href={serviceAreas} target='_blank' rel="noopener noreferrer">Proposed Broadband Service Area Map</a>
                    </p>
                    <p className='lightestgray'>
                        <span className='bold'>Subscribe to Mailing List:</span> If you have joined our mailing list, thank you and welcome!  We promise to limit our communication to important updates.  
                        All are invited and encouraged to join our mailing list whether or not you are currently eligible for service.
                    </p>
                    <p className='lightestgray'>
                        <span className='bold'>Volunteer:</span> Earlier this year we assembled a team of awesome volunteers to help us collect contact information from neighbors and gauge interest in each area.  
                        We expect to have future opportunities for volunteers to help with CCB efforts so let us know if you would be interested.
                    </p>
                </section>
                <div className='desktop-row'>
                <img src={childwithtablet} alt='Child holding tablet' className='child_tablet_img'/>
                <section className='lightestgray service-highlights'>
                    <h2 className='signup-subhead bold'>CCB Service Highlights</h2>
                    <ul> 
                        <li>High-Speed Internet Connection</li>
                        <li>Easy Installation</li>
                        <li>No Long-Term Contracts</li>
                        <li>Excellent Customer Service</li>
                    </ul>
                </section>
                </div>
            </section>
        )
    }
}