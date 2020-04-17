import React, { Component } from 'react'
import BookmarksContext from '../BookmarksContext'
import ContactItem from '../ContactItem/ContactItem'
import PropTypes from 'prop-types'
import './ContactList.css'

class BookmarkList extends Component {
  static contextType = BookmarksContext;

  render() {
    const { bookmarks } = this.context
    return (
      <section className='BookmarkList'>
        <h2>Contact List</h2>
        <ul className='BookmarkList__list' aria-live='polite'>
          {bookmarks.map(bookmark =>
            <ContactItem
              key={bookmark.id}
              {...bookmark}
            />
          )}
        </ul>
      </section>
    );
  }
}

BookmarkList.propTypes = {
  bookmarks: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    streetNum: PropTypes.number.isRequired,
    streetName: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zip: PropTypes.number.isRequired,
    rating: PropTypes.number,
    description: PropTypes.string
  }))
}

export default BookmarkList;