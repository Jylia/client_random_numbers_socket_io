import React, { Component } from 'react'
import {
    Menu,
} from 'semantic-ui-react';
import { MenuItemsEnum } from '../enums/MenuItems';

interface IMenuItemsProps {
    activeItem: MenuItemsEnum;
    setActiveItem: (activeItem: MenuItemsEnum) => void;
}

interface IMenuItemState {

}

const menuItems = [
    {
        name: 'Home',
        type: MenuItemsEnum.Home,
    },
    {
        name: 'Line Chart',
        type: MenuItemsEnum.LineChart,
    },
    {
        name: 'Bar Chart',
        type: MenuItemsEnum.BarChart,
    },
    {
        name: 'Threshold play',
        type: MenuItemsEnum.TresholdPlay,
    },
];

class MenuItems extends Component<IMenuItemsProps, IMenuItemState> {

    onMenuItemClick = (menuItem: MenuItemsEnum) => {
        this.props.setActiveItem(menuItem);
    }

    render() {
        return (
            <React.Fragment>
                { menuItems.map(item => (
                    <Menu.Item
                        key={item.type}
                        as='a'
                        active={this.props.activeItem === item.type}
                        onClick={() => this.onMenuItemClick(item.type)}
                    >{item.name}</Menu.Item>
                )) }
            </React.Fragment>
        )
    }
}

export default MenuItems;