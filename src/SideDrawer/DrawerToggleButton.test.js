import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import DrawerToggleButton from './DrawerToggleButton'


describe('DrawerToggleButton Smoke Test', () => {
   it(`renders the DrawerToggleButton component without crashing`, () => {
        const div = document.createElement('div');
    
        ReactDOM.render(<BrowserRouter>
                            <DrawerToggleButton />
                          </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
      })
})
