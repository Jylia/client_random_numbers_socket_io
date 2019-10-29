import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { history } from '../History';
import BarChartPage from '../BarChart/BarChartPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BarChartPage history={history} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer
      .create(<BarChartPage history={history} />)
      .toJSON();
  expect(tree).toMatchSnapshot();
});