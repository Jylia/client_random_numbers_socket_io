import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { history } from '../History';
import LineChartPage from '../LineChart/LineChartPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LineChartPage history={history} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer
      .create(<LineChartPage history={history} />)
      .toJSON();
  expect(tree).toMatchSnapshot();
});
