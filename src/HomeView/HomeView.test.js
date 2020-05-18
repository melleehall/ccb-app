import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import HomeView from './HomeView'


describe('HomeView Smoke Test', () => {
   it(`renders the HomeView component without crashing`, () => {
        const div = document.createElement('div');
    
        ReactDOM.render(<BrowserRouter>
                            <HomeView />
                          </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
      })
})
