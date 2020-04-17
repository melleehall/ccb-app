import React, { Component } from  'react'
import ContactsContext from '../ContactsContext'
import config from '../config'
import SignupPathText from '../SignupPathText/SignupPathText'
import './AddContact.css'

const Required = () => (
  <span className='AddBookmark__required'>*</span>
)

class AddContact extends Component {
  static contextType = ContactsContext;

  state = {
    error: null,
  };

  handleSubmit = e => {
    e.preventDefault()
    // get the form fields from the event
    const { firstname, lastname, email, phone, streetnum, streetname, city, zip } = e.target

    const contact = {
      firstname: firstname.value,
      lastname: lastname.value,
      email: email.value,
      phone: phone.value,
      streetnum: streetnum.value,
      streetname: streetname.value,
      city: city.value,
      zip: zip.value
    }
    console.log(contact)
    this.setState({ error: null })
    fetch(config.API_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify(contact),
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${config.API_KEY}`
      }
    })
      .then(res => {
        if (!res.ok) {
          // get the error message from the response,
          return res.json().then(error => {
            // then throw it
            throw error
          })
        }
        return res.json()
      })
      .then(data => {
        firstname.value = ''
        lastname.value = ''
        email.value = ''
        phone.value = ''
        streetnum.value = ''
        streetname.value = ''
        city.value = ''
        zip.value = ''
        this.context.addContact(data)
        this.props.history.push('/')
      })
      .catch(error => {
        console.log(error)
        this.setState({ error })
      })
  }

  handleClickCancel = () => {
    this.props.history.push('/')
  }

  render() {
    const { error } = this.state
    
    return (
      <section>
        <section className='AddBookmark'>
          <h2>Sign Up Today</h2>
          <form
            className='AddBookmark__form'
            onSubmit={this.handleSubmit}
          >
            <div className='AddBookmark__error' role='alert'>
              {error && <p>{error.message}</p>}
            </div>
            <div>
              <label htmlFor='firstname'>
                First Name
                {' '}
                <Required />
              </label>
              <input
                type='text'
                name='firstname'
                id='firstname'
                placeholder='Josey'
                required
              />
            </div>
            <div>
              <label htmlFor='lastname'>
                Last Name
                {' '}
                <Required />
              </label>
              <input
                type='text'
                name='lastname'
                id='lastname'
                placeholder='Johnson'
                required
              />
            </div>
            <div>
              <label htmlFor='email'>
                Email Address
                {' '}
                <Required />
              </label>
              <input
                type='text'
                name='email'
                id='email'
                placeholder='myemail@gmail.com'
                required
              />
            </div>
            <div>
              <label htmlFor='phone'>
                Phone Number
                {' '}
                <Required />
              </label>
              <input
                type='text'
                name='phone'
                id='phone'
                placeholder='(303)-123-4567'
                required
              />
            </div>
            <div>
              <label htmlFor='streetnum'>
                Street Number
                {' '}
                <Required />
              </label>
              <input
                type='text'
                name='streetnum'
                id='streetnum'
                placeholder='123'
                required
              />
            </div>
            <div>
              <label htmlFor='streetname'>
                Street Name
                {' '}
                <Required />
              </label>
              <input
                type='text'
                name='streetname'
                id='streetname'
                placeholder='Frog Road'
                required
              />
            </div>
            <div>
              <label htmlFor='city'>
                City
                {' '}
                <Required />
              </label>
              <input
                type='text'
                name='city'
                id='city'
                placeholder='Evergreen'
                required
              />
            </div>
            <div>
              <label htmlFor='zip'>
                Zipcode
                {' '}
                <Required />
              </label>
              <input
                type='text'
                name='zip'
                id='zip'
                placeholder='97531'
                required
              />
            </div>
            <div className='AddBookmark__buttons'>
              <button type='button' onClick={this.handleClickCancel}>
                Cancel
              </button>
              {' '}
              <button type='submit'>
                Save
              </button>
            </div>
          </form>
        </section>
        <section>
          <SignupPathText />
        </section>
      </section>
    );
  }
}

export default AddContact;