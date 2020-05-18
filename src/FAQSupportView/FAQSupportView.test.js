import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import FAQSupportView from './FAQSupportView'


describe('FAQSupportView Smoke Test', () => {
   it(`renders the FAQSupportView component without crashing`, () => {
        const div = document.createElement('div');
    
        ReactDOM.render(<BrowserRouter>
                            <FAQSupportView />
                          </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
      })
})
