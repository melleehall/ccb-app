import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD:src/Nav/Nav.test.js
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
    <Nav />
  </BrowserRouter>, 
  div
);
=======
import AddContact from './AddContact';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddContact />, div);
>>>>>>> conversion-to-ccb:src/AddContact/AddContact.test.js
  ReactDOM.unmountComponentAtNode(div);
});
