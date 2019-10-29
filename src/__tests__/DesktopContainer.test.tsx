import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import DesktopContainer from '../Layout/DesktopContainer';
import { MenuItemsEnum } from '../enums/MenuItems';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DesktopContainer activeItem={MenuItemsEnum.Home} setActiveItem={() => {}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer
      .create(<DesktopContainer activeItem={MenuItemsEnum.Home} setActiveItem={() => {}} />)
      .toJSON();
  expect(tree).toMatchSnapshot();
});
