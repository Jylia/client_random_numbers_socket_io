import React, { Component } from 'react'
import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';

class Layout extends Component {
    render () {
        return (
            <React.Fragment>
                <DesktopContainer></DesktopContainer>
                <MobileContainer></MobileContainer>
            </React.Fragment>
        );
    }
}

export default Layout