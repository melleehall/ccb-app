import React, { Component } from 'react'
import ContactsContext from '../ContactsContext'
import ContactItem from '../ContactItem/ContactItem'
import PropTypes from 'prop-types'
import './ContactList.css'

class ContactList extends Component {
  static contextType = ContactsContext;

  render() {
    const { contacts } = this.context

    return (
      <section className='BookmarkList'>
        <h2>Contact List</h2>
        <ul className='BookmarkList__list' aria-live='polite'>
          {contacts.map(contact =>
            <ContactItem
              key={contact.id}
              {...contact}
            />
          )}
        </ul>
      </section>
    );
  }
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
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

export default ContactList;