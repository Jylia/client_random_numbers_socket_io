import React from 'react';
import ReactDOM from 'react-dom';
import MenuItems from '../Layout/MenuItems';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MenuItems />, div);
  ReactDOM.unmountComponentAtNode(div);
});
