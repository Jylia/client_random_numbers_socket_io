import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { history } from '../History';
import HomePage from '../Home/HomePage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HomePage history={history} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
    const tree = renderer
        .create(<HomePage history={history} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});