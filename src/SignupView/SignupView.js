import React, { Component } from 'react'
// import AddContact from '../AddContact/AddContact'
// import SignupPathText from '../SignupPathText/SignupPathText'
import '../universalstyles.css'

export default class SignupView extends Component {
    render() {
        return (
            <div>
                <h1 className='black-font'>Hi, Clear Creek Resident! Ready for faster internet?</h1>
                {/* <AddContact /> */}
                {/* <SignupPathText /> */}
                <div className='lightestgray'>
                    <p>
                        Email us at <a href='mailto:questions@clearcreekbroadband.com?subject=Request for Service'>"questions@clearcreekbroadband.com"</a> with your name, address, email, and phone number to let us know that you would like service when available to your home.  
                        You will be added to our installation queue.
                    </p>
                    <p>
                        <em>New Signup form coming soon...</em>
                    </p>
                </div>
            </div>
        )
    }
}