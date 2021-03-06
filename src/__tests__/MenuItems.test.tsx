import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import MenuItems from '../Layout/MenuItems';
import { MenuItemsEnum } from '../enums/MenuItems';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MenuItems activeItem={MenuItemsEnum.Home} setActiveItem={() => {}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer
      .create(<MenuItems activeItem={MenuItemsEnum.Home} setActiveItem={() => {}} />)
      .toJSON();
  expect(tree).toMatchSnapshot();
});
