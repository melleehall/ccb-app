import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Backdrop from './Backdrop'


describe('Backdrop Smoke Test', () => {
   it(`renders the Backdrop component without crashing`, () => {
        const div = document.createElement('div');
    
        ReactDOM.render(<BrowserRouter>
                            <Backdrop />
                          </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
      })
})
