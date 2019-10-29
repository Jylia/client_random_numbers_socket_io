import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
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

it('renders correctly  for mobile', () => {
  const tree = renderer
      .create(<Heading isMobile={true} />)
      .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly  for desktop', () => {
  const tree = renderer
      .create(<Heading isMobile={false} />)
      .toJSON();
  expect(tree).toMatchSnapshot();
});
