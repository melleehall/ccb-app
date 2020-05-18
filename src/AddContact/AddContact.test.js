import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AddContact from './AddContact'


describe('AddContact Smoke Test', () => {
   it(`renders the AddContact component without crashing`, () => {
        const div = document.createElement('div');
    
        ReactDOM.render(<BrowserRouter>
                            <AddContact />
                          </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
      })
})
