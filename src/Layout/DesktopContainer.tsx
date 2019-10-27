import React, { Component } from 'react'
import {
    Container,
    Menu,
    Responsive,
    Segment,
    Visibility,
} from 'semantic-ui-react';
import Heading from './Heading';
import MenuItems from './MenuItems';

interface IDesktopContainerProps {}
interface IDesktopContainerState {
    isFixed: boolean;
}

class DesktopContainer extends Component<IDesktopContainerProps, IDesktopContainerState> {
    constructor(props: IDesktopContainerProps) {
        super(props);

        this.state = {
            isFixed: false,
        };
    }

    hideFixedMenu = () => this.setState({ isFixed: false });

    showFixedMenu = () => this.setState({ isFixed: true });

    render() {
        const { isFixed } = this.state;

        return (
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                    <Segment
                        inverted
                        textAlign='center'
                        style={{ minHeight: 700, padding: '1em 0em' }}
                        vertical
                    >
                        <Menu
                            fixed={isFixed ? 'top' : undefined}
                            inverted={!isFixed}
                            pointing={!isFixed}
                            secondary={!isFixed}
                            size='large'
                        >
                            <Container>
                                <MenuItems />
                            </Container>
                        </Menu>
                        <Heading isMobile={false} />
                    </Segment>
                </Visibility>
            </Responsive>
        )
    }
}

export default DesktopContainer;