import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import SideDrawer from './SideDrawer'


describe('SideDrawer Smoke Test', () => {
   it(`renders the SideDrawer component without crashing`, () => {
        const div = document.createElement('div');
    
        ReactDOM.render(<BrowserRouter>
                            <SideDrawer />
                          </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
      })
})
