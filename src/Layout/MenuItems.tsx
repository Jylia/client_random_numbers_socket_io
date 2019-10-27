import React, { Component } from 'react'
import {
    Menu,
} from 'semantic-ui-react';

class MenuItems extends Component {

    render() {
        return (
            <React.Fragment>
                <Menu.Item as='a' active>Home</Menu.Item>
                <Menu.Item as='a'>Line Chart</Menu.Item>
                <Menu.Item as='a'>Bar Chart</Menu.Item>
                <Menu.Item as='a'>Threshold play</Menu.Item>
            </React.Fragment>
        )
    }
}

export default MenuItems;