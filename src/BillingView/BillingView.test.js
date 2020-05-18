import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import BillingView from './BillingView'


describe('BillingView Smoke Test', () => {
   it(`renders the BillingView component without crashing`, () => {
        const div = document.createElement('div');
    
        ReactDOM.render(<BrowserRouter>
                            <BillingView />
                          </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
      })
})
