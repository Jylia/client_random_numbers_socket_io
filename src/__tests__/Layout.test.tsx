import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Layout from '../Layout/Layout';
import { history } from '../History';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Layout history={history} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer
      .create(<Layout history={history} />)
      .toJSON();
  expect(tree).toMatchSnapshot();
});
