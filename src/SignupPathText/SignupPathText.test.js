import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import SignupPathText from './SignupPathText'


describe('SignupPathText Smoke Test', () => {
   it(`renders the SignupPathText component without crashing`, () => {
        const div = document.createElement('div');
    
        ReactDOM.render(<BrowserRouter>
                            <SignupPathText />
                          </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
      })
})
