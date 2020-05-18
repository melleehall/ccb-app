import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ContactView from './ContactView'


describe('ContactView Smoke Test', () => {
   it(`renders the ContactView component without crashing`, () => {
        const div = document.createElement('div');
    
        ReactDOM.render(<BrowserRouter>
                            <ContactView />
                          </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
      })
})
