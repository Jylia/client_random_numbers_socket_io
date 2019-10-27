import React, { Component } from 'react'
import {
    Container,
    Icon,
    Menu,
    Responsive,
    Segment,
    Sidebar,
} from 'semantic-ui-react';
import Heading from './Heading';
import MenuItems from './MenuItems';

interface IMobileContainerProps {}

interface IMobileContainerState {
    isSidebarOpened: boolean;
}

class MobileContainer extends Component<IMobileContainerProps, IMobileContainerState> {

    constructor(props: IMobileContainerProps) {
        super(props);

        this.state = {
            isSidebarOpened: false,
        };
    }

    handleSidebarHide = () => this.setState({ isSidebarOpened: false });

    handleToggle = () => this.setState({ isSidebarOpened: true });

    render() {
        const { isSidebarOpened } = this.state;

        return (
            <Responsive
                as={Sidebar.Pushable}
                maxWidth={Responsive.onlyMobile.maxWidth}
            >
                <Sidebar
                    as={Menu}
                    animation='push'
                    inverted
                    onHide={this.handleSidebarHide}
                    vertical
                    visible={isSidebarOpened}
                >
                    <MenuItems />
                </Sidebar>

                <Sidebar.Pusher dimmed={isSidebarOpened}>
                    <Segment
                        inverted
                        textAlign='center'
                        style={{ minHeight: 350, padding: '1em 0em' }}
                        vertical
                    >
                    <Container>
                        <Menu inverted pointing secondary size='large'>
                            <Menu.Item onClick={this.handleToggle}>
                            <Icon name='sidebar' />
                            </Menu.Item>
                        </Menu>
                    </Container>
                    <Heading isMobile={true} />
                    </Segment>
                </Sidebar.Pusher>
            </Responsive>
        )
    }
}

export default MobileContainer;