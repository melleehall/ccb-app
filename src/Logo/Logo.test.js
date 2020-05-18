import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Logo from './Logo'


describe('Logo Smoke Test', () => {
   it(`renders the Logo component without crashing`, () => {
        const div = document.createElement('div');
    
        ReactDOM.render(<BrowserRouter>
                            <Logo />
                          </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
      })
})
