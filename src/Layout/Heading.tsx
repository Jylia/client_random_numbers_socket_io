import React, { Component } from 'react'
import { MobileContext } from './MobileContext';

interface IHeadingProps {
    isMobile: boolean;
}

interface IHeadingState {}

class Heading extends Component<IHeadingProps, IHeadingState> {

    render () {
        return (
            <MobileContext.Provider value={{isMobile: this.props.isMobile}}>
                {this.props.children}
            </MobileContext.Provider>
        );
    }
}

export default Heading;