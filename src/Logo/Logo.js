import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LogoImg from '../Images/ccblogo.png'
import './Logo.css'

// displayed on all pages to return to Home page
export default class Logo extends Component {
    render() {
        return (
            <Link to='/'>
                <img path={'/'} src={LogoImg} alt='Clear Creek Broadband logo' className='logo' />
            </Link>
        )
    }
}