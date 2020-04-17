import React from 'react'
import BookmarksContext from '../BookmarksContext'
import config from '../config'
import PropTypes from 'prop-types'
import './ContactItem.css'

function deleteBookmarkRequest(bookmarkId, cb) {
  fetch(config.API_ENDPOINT + `/${bookmarkId}`, {
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
      cb(bookmarkId)
    })
    .catch(error => {
      console.error(error)
    })
}


export default function BookmarkItem(props) {
  return (
    <BookmarksContext.Consumer>
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
                deleteBookmarkRequest(
                  props.id, 
                  context.deleteBookmark,
                )
              }}
            >
              Delete
            </button>
          </div>
        </li>
      )}
    </BookmarksContext.Consumer>
  )
}

BookmarkItem.defaultProps = {
  rating: 1,
  description: " "
}

BookmarkItem.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  streetnum: PropTypes.number.isRequired,
  streetname: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  zip: PropTypes.number.isRequired,
}