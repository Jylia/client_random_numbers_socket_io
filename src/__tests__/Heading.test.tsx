import React from 'react';
import ReactDOM from 'react-dom';
import Heading from '../Layout/Heading';

it('renders without crashing for mobile', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Heading isMobile={true} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing for desktop', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Heading isMobile={false} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
