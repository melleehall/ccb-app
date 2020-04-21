import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import config from './config'
import './App.css'

import HomeView from './HomeView/HomeView'
import SignupView from './SignupView/SignupView'
import BillingView from './BillingView/BillingView'
import FAQSupportView from './FAQSupportView/FAQSupportView'
import ContactView from './ContactView/ContactView'
import NotFoundMain from './NotFoundMain/NotFoundMain'
import ContactsContext from './ContactsContext'
import Logo from './Logo/Logo'
import Nav from './Nav/Nav'
import SideDrawer from './SideDrawer/SideDrawer'
import Backdrop from './Backdrop/Backdrop'

class App extends Component {
  state = {
    contacts: [],
    error: null,
    sideDrawerOpen: false
  };

  addContact = contact => {
    this.setState({
      contacts: [ ...this.state.contacts, contact ],
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

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    const contextValue = {
      contacts: this.state.contacts,
      addContact: this.addContact,
      deleteContact: this.deleteContact,
    }

    return (
      <section className='App'>
        <div className='App_nav'>
            <Nav drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} />
            {backdrop}
        </div>
        <div className='main-container'>
        <header>
          <Logo />
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
              <Route 
                component={NotFoundMain}
              />
            </Switch>
          </main>
        </ContactsContext.Provider>
        </div>
      </section>
    );
  }
}

export default App;