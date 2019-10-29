import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import TresholdPage from '../Treshold/TresholdPage';
import { history } from '../History';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TresholdPage history={history} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer
      .create(<TresholdPage history={history} />)
      .toJSON();
  expect(tree).toMatchSnapshot();
});
