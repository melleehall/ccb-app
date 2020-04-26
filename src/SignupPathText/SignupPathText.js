import React, { Component } from 'react'
import CCCProposedLIDMap from '../Images/CCC-Proposed-LID-Map-08-01-2018.pdf'
import childwithtablet from '../Images/childwithtablet.jpg'
import './SignupPathText.css'


export default class SignupPathText extends Component {
    render() {
        return (
            <section className='signup-view'>
                <section>
                    <h2 className='signup-subhead lightestgray'>Explanation of Signup Options</h2>
                    <p className='lightestgray'> <div className='bold'>Request Service:</div> This does not obligate you to take the service once available but rather helps us to understand demand in each region.
                        We are currently designing the network and knowing who is interested will help us to better plan how to accommodate all users.
                        If you are unsure whether your home will be serviced by the new network, please refer to the service area map: <a href={CCCProposedLIDMap}>Proposed Broadband Service Area Map</a>
                    </p>
                    <p className='lightestgray'>
                        <div className='bold'>Subscribe to Mailing List:</div> If you have joined our mailing list, thank you and welcome!  We promise to limit our communication to important updates.  
                        All are invited and encouraged to join our mailing list whether or not you are currently eligible for service.
                    </p>
                    <p className='lightestgray'>
                        <div className='bold'>Volunteer:</div> We are looking for neighbors in each of the five service regions to help us contact all residents and ensure their contact information is current.  
                        Please, reach out to us at <a href='mailto:volunteers@clearcreekbroadband.com'>volunteers@clearcreekbroadband.com</a> with any questions.
                    </p>
                </section>
                <img src={childwithtablet} alt='Child holding tablet' className='child_tablet_img'/>
                <section className='lightestgray'>
                    <h2 className='signup-subhead'>CCB Service Highlights</h2>
                    <ul> 
                        <li>High-Speed Internet Connection</li>
                        <li>Easy Installation</li>
                        <li>No Long-Term Contracts</li>
                        <li>Excellent Customer Service</li>
                    </ul>
                </section>
            </section>
        )
    }
}