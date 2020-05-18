import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Nav from './Nav'


describe('Nav Smoke Test', () => {
   it(`renders the  Nav component without crashing`, () => {
        const div = document.createElement('div');
    
        ReactDOM.render(<BrowserRouter>
                            <Nav />
                          </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
      })
})
