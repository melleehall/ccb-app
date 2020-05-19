import React from 'react';
import './ValidationError.css'

// used in conjunction with Signup page validation 
export default function ValidationError(props) {
  if(props.message) {
    return (
      <div className="error">{props.message}</div>
    );
  }

  return <></>
}