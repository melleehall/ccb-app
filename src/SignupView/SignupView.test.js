import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import SignupView from './SignupView'


describe('SignupView Smoke Test', () => {
   it(`renders the SignupView component without crashing`, () => {
        const div = document.createElement('div');
    
        ReactDOM.render(<BrowserRouter>
                            <SignupView />
                          </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
      })
})
