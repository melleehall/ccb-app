import React, { Component } from  'react'
import ValidationError from '../ValidationError/ValidationError'
import config from '../config'
import './AddContact.css'

// Signup Page - controlled form
export default class AddContact extends Component {
  state = {
    error: null,
    firstname: {
      value: '',
      touched: false
    },
    lastname: {
      value: '',
      touched: false
    },
    email: {
      value: '',
      touched: false
    },
    phone: {
      value: '',
      touched: false
    },
    streetnum: {
      value: '',
      touched: false
    },
    streetname: {
      value: '',
      touched: false
    },
    city: {
      value: '',
      touched: false
    },
    zip: {
      value: '',
      touched: false
    },
    request_service: false,
    request_news: false,
    volunteer: false,
    success_msg: false
  };

  updateFirstname(firstname) {
    this.setState({ firstname: { value: firstname, touched: true }});
  }

  updateLastname(lastname) {
    this.setState({ lastname: { value: lastname, touched: true }});
  }

  updateEmail(email) {
    this.setState({ email: { value: email, touched: true }});
  }

  updatePhone(phone) {
    this.setState({ phone: { value: phone, touched: true }});
  }

  updateStreetnum(streetnum) {
    this.setState({ streetnum: { value: streetnum, touched: true }});
  }

  updateStreetname(streetname) {
    this.setState({ streetname: { value: streetname, touched: true }});
  }

  updateCity(city) {
    this.setState({ city: { value: city, touched: true }});
  }

  updateZip(zip) {
    this.setState({ zip: { value: zip, touched: true }});
  }

  validateFirstname() {
    const firstname = this.state.firstname.value.trim();
    if (firstname.length === 0) {
        return 'First name is required';
    }  
  }

  validateLastname() {
    const lastname = this.state.lastname.value.trim();
    if (lastname.length === 0) {
        return 'Last name is required';
    }  
  }

  validateEmail() {
    const email = this.state.email.value.trim();
    if (email.length === 0) {
        return 'Email is required';
    }  
  }

  validatePhone() {
    const phone = this.state.phone.value.trim();
    if (phone.length === 0) {
        return 'Phone is required';
    }  
  }

  validateStreetnum() {
    const streetnum = this.state.streetnum.value.trim();
    if (streetnum.length === 0) {
        return 'Street number is required';
    }  else if (isNaN(streetnum)) {
        return 'Must be a number';
    }
  }

  validateStreetname() {
    const streetname = this.state.streetname.value.trim();
    if (streetname.length === 0) {
        return 'Street name is required';
    }  
  }

  validateCity() {
    const city = this.state.city.value.trim();
    if (city.length === 0) {
        return 'City is required';
    }  
  }

  validateZip() {
    const zip = this.state.zip.value.trim();
    if (zip.length === 0) {
        return 'Zipcode is required';
    }  
  }

  handleSubmit (event) {
    event.preventDefault()

    const contact = {
      firstname: event.target['firstname'].value,
      lastname: event.target['lastname'].value,
      email: event.target['email'].value,
      phone: event.target['phone'].value,
      streetnum: event.target['streetnum'].value,
      streetname: event.target['streetname'].value,
      city: event.target['city'].value,
      zip: event.target['zip'].value,
      request_service: this.state.request_service,
      request_news: this.state.request_news,
      volunteer: this.state.volunteer
    }
    
    this.setState({ error: null })
    fetch(`${config.API_BASE_URL}/api/contacts`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',      
      },
      body: JSON.stringify(contact)
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => {
            throw error
          })
        }
        return res.json()
      })
      .then(data => {
        this.setState({
          firstname: {value: ''},
          lastname: {value: ''},
          email: {value: ''},
          phone: {value: ''},
          streenum: {value: ''},
          streetname: {value: ''},
          city: {value: ''},
          zip: {value: ''},
          request_service: false,
          request_news: false,
          volunteer: false,
          success_msg: true
        })
      })
      .catch(error => {
        this.setState({ error })
      })
  }

  // toggle checkboxes when clicked
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
    // conditionally rendered validation errors 
    const { error } = this.state;
    const firstnameError = this.validateFirstname();
    const lastnameError = this.validateLastname();    
    const emailError = this.validateEmail();
    const phoneError = this.validatePhone();
    const streetnumError = this.validateStreetnum();
    const streetnameError = this.validateStreetname();
    const cityError = this.validateCity();
    const zipError = this.validateZip();
    
    return (
      <section>
        <section className='AddBookmark'>
          <form
            className='AddBookmark__form'
            onSubmit={(e) => this.handleSubmit(e)}
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
                </label>
                <input
                  type='text'
                  value={this.state.firstname.value}
                  name='firstname'
                  id='firstname'
                  placeholder='Josey'
                  required aria-required="true"
                  onChange={e => this.updateFirstname(e.target.value)} 
                />
                <span>
                  {this.state.firstname.touched && <ValidationError  message={firstnameError} />}
                </span>
              </div>
              <div>
                <label htmlFor='lastname'>
                  Last Name
                  {' '}
                </label>
                <input
                  type='text'
                  name='lastname'
                  value={this.state.lastname.value}
                  id='lastname'
                  placeholder='Johnson'
                  required aria-required="true"
                  onChange={e => this.updateLastname(e.target.value)} 
                />
                <span>
                  {this.state.lastname.touched && <ValidationError  message={lastnameError} />}
                </span>
              </div>
              <div>
                <label htmlFor='email'>
                  Email Address
                  {' '}
                </label>
                <input
                  type='email'
                  name='email'
                  value={this.state.email.value}
                  id='email'
                  placeholder='myemail@gmail.com'
                  required aria-required="true"
                  onChange={e => this.updateEmail(e.target.value)} 
                />
                <span>
                  {this.state.email.touched && <ValidationError  message={emailError} />}
                </span>
              </div>
              <div>
                <label htmlFor='phone'>
                  Phone Number
                  {' '}
                </label>
                <input
                  type='text'
                  name='phone'
                  value={this.state.phone.value}
                  id='phone'
                  placeholder='(303)-123-4567'
                  required aria-required="true"
                  onChange={e => this.updatePhone(e.target.value)} 
                />
                <span>
                  {this.state.phone.touched && <ValidationError  message={phoneError} />}
                </span>
              </div>
            </fieldset>
            <fieldset className='address'>
              <div>
                <label htmlFor='streetnum'>
                  Street Number
                  {' '}
                </label>
                <input
                  type='text'
                  name='streetnum'
                  value={this.state.streetnum.value}
                  id='streetnum'
                  placeholder='123'
                  required aria-required="true"
                  onChange={e => this.updateStreetnum(e.target.value)} 
                />
                <span>
                  {this.state.streetnum.touched && <ValidationError  message={streetnumError} />}
                </span>
              </div>
              <div>
                <label htmlFor='streetname'>
                  Street Name
                  {' '}
                </label>
                <input
                  type='text'
                  name='streetname'
                  value={this.state.streetname.value}
                  id='streetname'
                  placeholder='Frog Road'
                  required aria-required="true"
                  onChange={e => this.updateStreetname(e.target.value)} 
                />
                <span>
                  {this.state.streetname.touched && <ValidationError  message={streetnameError} />}
                </span>
              </div>
              <div>
                <label htmlFor='city'>
                  City
                  {' '}
                </label>
                <input
                  type='text'
                  name='city'
                  value={this.state.city.value}
                  id='city'
                  placeholder='Evergreen'
                  required aria-required="true"
                  onChange={e => this.updateCity(e.target.value)} 
                />
                <span>
                  {this.state.city.touched && <ValidationError  message={cityError} />}
                </span>
              </div>
              <div>
                <label htmlFor='zip'>
                  Zipcode
                  {' '}
                </label>
                <input
                  type='text'
                  name='zip'
                  value={this.state.zip.value}
                  id='zip'
                  placeholder='97531'
                  required aria-required="true"
                  onChange={e => this.updateZip(e.target.value)} 
                />
                <span>
                  {this.state.zip.touched && <ValidationError  message={zipError}/>}
                </span>
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
            <p className='success_msg'>
              <b>{this.state.success_msg ? 'Your contact information was successfully submitted.  Thank you!' : '' }</b> 
            </p>
          </form>
        </section>
      </section>
    );
  }
}

