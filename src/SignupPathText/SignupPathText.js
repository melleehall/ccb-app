import React, { Component } from 'react'
import CCCProposedLIDMap from '../Images/CCC-Proposed-LID-Map-08-01-2018.pdf'
import childwithtablet from '../Images/childwithtablet.jpg'
import './SignupPathText.css'


export default class SignupPathText extends Component {
    render() {
        return (
            <section className='signup-view'>
                <section className='lightestgray'>
                    <h2 className='signup-subhead'>Explanation of Signup Options</h2>
                    <p> Requesting service does not obligate you to take the service once available but rather helps us to understand demand in each region.
                        We are currently designing the network and knowing who is interested will help us to better plan how to accommodate all users.
                    </p>
                    <p>If you are unsure whether your home will be serviced by the new network, please refer to the service area map: <a href={CCCProposedLIDMap}>Proposed Broadband Service Area Map</a></p>
                    <p>If you have subscribed to our mailing list, thank you and welcome!  We promise to limit our communication to important updates.  
                        All are invited and encouraged to join our mailing list whether or not you are currently eligible for service.</p>
                </section>
                <section className='lightestgray'>
                    <h2 className='signup-subhead'>CCB Service Highlights</h2>
                    <ul> 
                        <li>High-Speed Internet Connection</li>
                        <li>Easy Installation</li>
                        <li>No Long-Term Contracts</li>
                        <li>Excellent Customer Service</li>
                    </ul>
                </section>
                <img src={childwithtablet} alt='Child holding tablet' className='child_tablet_img'/>
            </section>
        )
    }
}