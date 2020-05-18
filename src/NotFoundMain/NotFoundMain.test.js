import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import NotFoundMain from './NotFoundMain'


describe('NotFoundMain Smoke Test', () => {
   it(`renders the NotFoundMain component without crashing`, () => {
        const div = document.createElement('div');
    
        ReactDOM.render(<BrowserRouter>
                            <NotFoundMain />
                          </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
      })
})
