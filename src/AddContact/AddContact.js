import React, { Component } from  'react'
import config from '../config'
import './AddContact.css'

const Required = () => (
  <span className='AddBookmark__required'>*</span>
)

class AddContact extends Component {
  state = {
    error: null,
    request_service: false,
    request_news: false,
    volunteer: false
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
      zip: zip.value,
      request_service: this.state.request_service,
      request_news: this.state.request_news,
      volunteer: this.state.volunteer
    }
    
    this.setState({ error: null })
    fetch(`${config.API_BASE_URL}/api/contacts`, {
      method: 'POST',
      body: JSON.stringify(contact),
      headers: {
        'content-type': 'application/json',
        // 'authorization': `bearer ${config.API_KEY}`
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
        this.setState({
          request_service: false,
          request_news: false,
          volunteer: false
        })
      })
      .catch(error => {
        this.setState({ error })
      })
  }

  toggleReqService= () => {
    this.setState(prevState => ({
      request_service: !prevState.request_service,
    }));
  }

  toggleReqNews= () => {
    this.setState(prevState => ({
      request_news: !prevState.request_news,
    }));
  }

  toggleVolunteer = () => {
    this.setState(prevState => ({
      volunteer: !prevState.volunteer,
    }));
  }

  render() {
    const { error } = this.state
    
    return (
      <section>
        <section className='AddBookmark'>
          <form
            className='AddBookmark__form'
            onSubmit={this.handleSubmit}
          >
            <h2>Sign Up Today</h2>
            <div className='AddBookmark__error' role='alert'>
              {error && <p>{error.message}</p>}
            </div>
            <fieldset className='personal_info'>
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
            </fieldset>
            <fieldset className='address'>
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
            </fieldset>
            <fieldset className='signup_options'>
              <h3>Signup Options</h3>
              <div className='flex-row'>
                <label htmlFor='request_service'>
                  Request Service
                </label>
                <input
                  type='checkbox'
                  name='request_service'
                  checked={this.state.request_service}
                  onChange={this.toggleReqService}
                  id='request_service'
                />
              </div>
              <div className='flex-row'>
                <label htmlFor='request_news'>
                  Subscribe to Mailing List
                </label>
                <input
                  type='checkbox'
                  name='request_news'
                  checked={this.state.request_news}
                  onChange={this.toggleReqNews}
                  id='request_news'
                />
              </div>
              <div className='flex-row'>
                <label htmlFor='volunteer'>
                  Volunteer to Spread the Word
                </label>
                <input
                  type='checkbox'
                  name='volunteer'
                  checked={this.state.volunteer}
                  onChange={this.toggleVolunteer}
                  id='volunteer'
                />
              </div>
            </fieldset>
            <div className='AddBookmark__buttons'>
              <button type='submit'>
                Save
              </button>
            </div>
          </form>
        </section>
      </section>
    );
  }
}

export default AddContact;