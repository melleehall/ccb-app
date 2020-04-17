import React from 'react'
import ContactsContext from '../ContactsContext'
import config from '../config'
import PropTypes from 'prop-types'
import './ContactItem.css'

function deleteContactRequest(contactId, cb) {
  fetch(config.API_ENDPOINT + `/${contactId}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      'authorization': `bearer ${config.API_KEY}`
    }
  })
    .then(res => {
      if (!res.ok) {
        return res.json().then(error => Promise.reject(error))
      }
      return res.json()
    })
    .then(data => {
      cb(contactId)
    })
    .catch(error => {
      console.error(error)
    })
}


export default function ContactItem(props) {
  return (
    <ContactsContext.Consumer>
      {(context) => (
        <li className='BookmarkItem'>
          <div className='BookmarkItem__row'>
            <h3 className='BookmarkItem__title'>
              <a
                href={props.url}
                target='_blank'
                rel='noopener noreferrer'>
                {props.firstname}
              </a>
            </h3>
          </div>
          <section className='BookmarkItem__description'>
            <ul>
              <li>{props.lastname}</li>
              <li>{props.email}</li>
              <li>{props.phone}</li>
              <li>{props.streetnum}</li>
              <li>{props.streetname}</li>
              <li>{props.city}</li>
              <li>{props.zip}</li>
            </ul>
          </section>
          <div className='BookmarkItem__buttons'>
            <button
              className='BookmarkItem__description'
              onClick={() => {
                deleteContactRequest(
                  props.id, 
                  context.deleteContact,
                )
              }}
            >
              Delete
            </button>
          </div>
        </li>
      )}
    </ContactsContext.Consumer>
  )
}

ContactItem.defaultProps = {
  rating: 1,
  description: " "
}

ContactItem.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  streetnum: PropTypes.number.isRequired,
  streetname: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
}