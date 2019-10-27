import React, { Component } from 'react'
import openSocket from 'socket.io-client';

import CanvasJSReact from '../assets/canvasjs.react';
import { History } from 'history';
import { Button, Segment } from 'semantic-ui-react';
import { IChartOptions, ISocketData } from '../shared/ChartOptionInterfaces';
import { LineDataPoint } from '../shared/ChartOptionTypes';

interface ILineChartPageProps {
    history: History;
}

interface ILineChartPageState {
    chartOptions: IChartOptions<LineDataPoint>;
    isCalcInProgress: boolean;
}

class LineChartPage extends Component<ILineChartPageProps, ILineChartPageState> {
    
    socket = openSocket('http://localhost:3001');

    constructor(props: ILineChartPageProps) {
        super(props);

        this.state = {
            chartOptions: {
                animationEnabled: true,
                title: {
                    text: "Random numbers"
                },
                axisX: {
                    title: "Time",
                    valueFormatString: "mm:ss"
                },
                axisY: {
                    title: "Number",
                    prefix: "",
                    includeZero: false
                },
                data: [{
                    yValueFormatString: "###",
                    xValueFormatString: "",
                    type: "spline",
                    dataPoints: [],
                }],
            },
            isCalcInProgress: false,
        }
    }

    componentWillUnmount() {
        this.socket.off('data');
    }

    onCalcButtonClick = () => {
        this.setState({ isCalcInProgress: true });
        this.socket.on('data', (data: ISocketData) => {
            const newOptions: IChartOptions<LineDataPoint> = {...this.state.chartOptions};
            const newDataPoints = newOptions.data[0].dataPoints;
            const dataDateTime = new Date(data.timestamp);
            const label = `${dataDateTime.getMinutes()}:${dataDateTime.getSeconds()}`;

            newDataPoints.push({
                x: dataDateTime,
                y: data.value,
                label: label,
            });
            newOptions.data[0].dataPoints = newDataPoints;
            this.setState({
                chartOptions: newOptions
            });
        });
    }
    
    onCalcStopButtonClick = () => {
        this.socket.off('data');
        this.setState({ isCalcInProgress: false });
    }

    render () {
        return (
            <React.Fragment>
                <CanvasJSReact.CanvasJSChart options = {this.state.chartOptions} />
                <Segment basic>
                    <Button
                        color={this.state.isCalcInProgress ? 'red' : 'teal'}
                        onClick={this.state.isCalcInProgress ? this.onCalcStopButtonClick : this.onCalcButtonClick}
                    >
                        {this.state.isCalcInProgress ? 'Stop Calculation' : 'Start Calculation'}
                    </Button>
                </Segment>
            </React.Fragment>
        );
    }
}

export default LineChartPage