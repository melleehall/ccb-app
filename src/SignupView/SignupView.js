import React, { Component } from 'react'
import AddContact from '../AddContact/AddContact'
import SignupPathText from '../SignupPathText/SignupPathText'
import '../universalstyles.css'

export default class SignupView extends Component {
    render() {
        return (
            <div>
                <h1 className='black-font'>Hi, Clear Creek Resident! Ready for faster internet?</h1>
                <AddContact />
                <SignupPathText />
            </div>
        )
    }
}