import React, { Component } from 'react'
import {
    Button,
    Container,
    Header,
    Icon,
} from 'semantic-ui-react';

interface IHeadingProps {
    isMobile: boolean;
}

interface IHeadingState {}

class Heading extends Component<IHeadingProps, IHeadingState> {

    render () {
        return (
            <Container text>
            <Header
                as='h1'
                content='Random number charts'
                inverted
                style={{
                    fontSize: this.props.isMobile ? '2em' : '4em',
                    fontWeight: 'normal',
                    marginBottom: 0,
                    marginTop: this.props.isMobile ? '1.5em' : '3em',
                }}
            />
            <Header
                as='h2'
                content='Look at changes in real-time'
                inverted
                style={{
                    fontSize: this.props.isMobile ? '1.5em' : '1.7em',
                    fontWeight: 'normal',
                    marginTop: this.props.isMobile ? '0.5em' : '1.5em',
                }}
            />
            <Button primary size='huge'>
                Get Started
                <Icon name='arrow right' />
            </Button>
        </Container>
        );
    }
}

export default Heading;