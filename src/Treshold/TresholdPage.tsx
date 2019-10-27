import React, { Component } from 'react'
import openSocket from 'socket.io-client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Segment, Form } from 'semantic-ui-react';

import { History } from 'history';
import { ISocketData } from '../shared/ChartOptionInterfaces';

interface ITresholdPageProps {
    history: History;
}

interface ITresholdPageState {
    tresholdNumber?: number;
    allowedNumbers: Array<number>;
    isCalcInProgress: boolean;
}

class TresholdPage extends Component<ITresholdPageProps, ITresholdPageState> {
    socket?: SocketIOClient.Socket;

    constructor(props: ITresholdPageProps) {
        super(props);

        this.state = {
            allowedNumbers: [],
            isCalcInProgress: false,
        };
    }

    componentWillUnmount() {
        if (this.socket) this.socket.disconnect();
    }

    setNumber = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({ tresholdNumber: Number(e.currentTarget.value) });
    }

    notify = (value: number) => toast(`Number: ${value}`, {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: 15000
    });

    checkRandomNumber = () => {
        this.setState({ isCalcInProgress: true });
        this.socket = openSocket('http://localhost:3001');
        this.socket.on('data', (data: ISocketData) => {
            if (this.state.tresholdNumber && data.value > this.state.tresholdNumber) {
                this.notify(data.value);
            }
        });
    }
    
    onCalcStopButtonClick = () => {
        this.setState({ isCalcInProgress: false });
        if (this.socket) this.socket.disconnect();
    }

    render () {
        return (
            <React.Fragment>
                <Segment inverted>
                    <Form inverted>
                        <Form.Field>
                            <label>Alert threshold</label>
                            <input
                                placeholder='Please, enter a number'
                                onChange={this.setNumber}
                            />
                        </Form.Field>

                        <Button
                            type='submit'
                            color={this.state.isCalcInProgress ? 'red' : 'teal'}
                            onClick={this.state.isCalcInProgress ? this.onCalcStopButtonClick : this.checkRandomNumber}
                        >
                        {this.state.isCalcInProgress ? 'Stop Calculation' : 'Check random number'}
                        </Button>
                    </Form>
                    <ToastContainer />
                </Segment>
            </React.Fragment>
        );
    }
}

export default TresholdPage