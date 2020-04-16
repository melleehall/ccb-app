import React, { Component, Fragment } from 'react'
import LogoImg from '../Images/ccblogo.png'
import './Logo.css'

export default class Logo extends Component {
    render() {
        return (
            <Fragment>
                <img src={LogoImg} alt='Clear Creek Broadband logo' className='logo' />
            </Fragment>
        )
    }
}