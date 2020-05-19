import React from 'react';
import './Backdrop.css'

// Displays a shadow over the main screen when mobile navigation Sidedrawer is displayed
const backdrop = props => (
    <div className='backdrop' onClick={props.click} />
);

export default backdrop;