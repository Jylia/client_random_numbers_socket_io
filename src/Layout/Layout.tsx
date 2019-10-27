import React, { Component } from 'react';
import { History } from "history";
import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';
import { MenuItemsEnum } from '../enums/MenuItems';
import { UrlHelper } from '../helpers/UrlHelper';

interface ILayoutProps {
    history: History;
}

interface ILayoutState {
    activeItem: MenuItemsEnum;
}

class Layout extends Component<ILayoutProps, ILayoutState> {
    constructor(props: ILayoutProps) {
        super(props);

        this.state = {
            activeItem: UrlHelper.getMenuItemByPathName(window.location.pathname),
        }
    }

    setActiveItem = (activeItem: MenuItemsEnum) => {
        this.setState({ activeItem });
        this.props.history.push(UrlHelper.getUrlByMenuItem(activeItem));
    }

    render () {
        return (
            <React.Fragment>
                <DesktopContainer
                    setActiveItem={this.setActiveItem}
                    activeItem={this.state.activeItem}
                    children={this.props.children}
                />
                <MobileContainer
                    setActiveItem={this.setActiveItem}
                    activeItem={this.state.activeItem}
                    children={this.props.children}
                />
            </React.Fragment>
        );
    }
}

export default Layout