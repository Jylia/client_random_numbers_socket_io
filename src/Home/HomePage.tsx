import * as React from 'react';
import { History } from 'history';
import { Header, Button, Icon } from 'semantic-ui-react';
import { MobileContext } from '../Layout/MobileContext';

interface IHomePageProps {
    history: History;
    isMobile: boolean;
}

interface IHomePageState {}

class HomePage extends React.Component<IHomePageProps, IHomePageState> {
    
    render() {
        return (
            <MobileContext.Consumer>
                {({isMobile}) => (
                    <React.Fragment>
                        <Header
                            as='h1'
                            content='Random number charts'
                            inverted
                            style={{
                                fontSize: isMobile ? '2em' : '4em',
                                fontWeight: 'normal',
                                marginBottom: 0,
                                marginTop: isMobile ? '1.5em' : '3em',
                            }}
                        />
                        <Header
                            as='h2'
                            content='Look at changes in real-time'
                            inverted
                            style={{
                                fontSize: isMobile ? '1.5em' : '1.7em',
                                fontWeight: 'normal',
                                marginTop: isMobile ? '0.5em' : '1.5em',
                            }}
                        />
                    </React.Fragment>
                )}
            </MobileContext.Consumer>
        );
    }
}

export default HomePage;