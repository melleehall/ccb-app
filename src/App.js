import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import config from './config'
import './App.css'

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
          <h1 className='black-font'>Hi, Clear Creek Resident! Ready for faster internet?</h1>
        </header>
        <ContactsContext.Provider value={contextValue}>
          <Nav />
          <main className='content' aria-live='polite'>
            <Route
              path='/add-bookmark'
              component={AddContact}
            />
            <Route
              exact
              path='/'
              component={ContactList}
            />
          </main>
        </ContactsContext.Provider>
      </section>
    );
  }
}

export default App;