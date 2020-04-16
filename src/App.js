import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import config from './config'
import './App.css'

import AddContact from './AddContact/AddContact'
import BookmarkList from './BookmarkList/BookmarkList'
import BookmarksContext from './BookmarksContext'
import Logo from './Logo/Logo'
import CCBNav from './CCBNav/CCBNav'
import DesktopNav from './DesktopNav/DesktopNav'
import MobileNav from './MobileNav/MobileNav'
import Nav from './Nav/Nav'

class App extends Component {
  state = {
    bookmarks: [],
    error: null,
  };

  setBookmarks = bookmarks => {
    this.setState({
      bookmarks,
      error: null,
    })
  }

  addBookmark = bookmark => {
    this.setState({
      bookmarks: [ ...this.state.bookmarks, bookmark ],
    })
  }

  deleteBookmark = bookmarkId => {
    console.log(bookmarkId)
    const newBookmarks = this.state.bookmarks.filter(bm =>
      bm.id !== bookmarkId
    )
    this.setState({
      bookmarks: newBookmarks
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
      .then(this.setBookmarks)
      .catch(error => this.setState({ error }))
  }

  render() {
    const contextValue = {
      bookmarks: this.state.bookmarks,
      addBookmark: this.addBookmark,
      deleteBookmark: this.deleteBookmark,
    }

    return (
      <main className='App'>
        <nav className='App_nav'>
           <Route 
            exact path='/' 
            component={CCBNav}
          /> 
        </nav>
        <header>
          <h1><Logo /></h1>
        </header>
        <BookmarksContext.Provider value={contextValue}>
          <Nav />
          <div className='content' aria-live='polite'>
            <Route
              path='/add-bookmark'
              component={AddContact}
            />
            <Route
              exact
              path='/'
              component={BookmarkList}
            />
          </div>
        </BookmarksContext.Provider>
      </main>
    );
  }
}

export default App;