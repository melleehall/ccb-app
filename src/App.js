import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import config from './config'
import './App.css'

import HomeView from './HomeView/HomeView'
import SignupView from './SignupView/SignupView'
import BillingView from './BillingView/BillingView'
import FAQSupportView from './FAQSupportView/FAQSupportView'
import ContactView from './ContactView/ContactView'
import AddContact from './AddContact/AddContact'
import ContactList from './ContactList/ContactList'
import ContactsContext from './ContactsContext'
import Logo from './Logo/Logo'
import CCBNav from './CCBNav/CCBNav'
import Nav from './Nav/Nav'

class App extends Component {
  state = {
    contacts: [],
    error: null,
  };

  setContacts = contacts => {
    this.setState({
      contacts,
      error: null,
    })
  }

  addContact = contact => {
    this.setState({
      contacts: [ ...this.state.contacts, contact ],
    })
  }

  deleteContact = contactId => {
    console.log(contactId)
    const newContacts = this.state.contacts.filter(contact =>
      contact.id !== contactId
    )
    this.setState({
      contacts: newContacts
    })
  }

  componentDidMount() {
    fetch(config.API_ENDPOINT, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(this.setContacts)
      .catch(error => this.setState({ error }))
  }

  render() {
    const contextValue = {
      contacts: this.state.contacts,
      addContact: this.addContact,
      deleteContact: this.deleteContact,
    }

    return (
      <section className='App'>
        <nav className='App_nav'>
            <CCBNav />
        </nav>
        <header>
          <div><Logo /></div>
        </header>
        <ContactsContext.Provider value={contextValue}>
          <main className='content' aria-live='polite'>
            <Switch>
              <Route
                exact
                path='/'
                component={HomeView}
              />
              <Route
                path='/contact-list'
                component={ContactList}
              />
              <Route
                path='/add-contact'
                component={AddContact}
              />
              <Route
                path='/signup'
                component={SignupView}
              />
              <Route
                path='/billing'
                component={BillingView}
              />
              <Route
                path='/support'
                component={FAQSupportView}
              />
              <Route
                path='/contact'
                component={ContactView}
              />
            </Switch>
          </main>
        </ContactsContext.Provider>
      </section>
    );
  }
}

export default App;