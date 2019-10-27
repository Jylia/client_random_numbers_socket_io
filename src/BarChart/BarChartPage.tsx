import React, { Component } from 'react'
import openSocket from 'socket.io-client';

import CanvasJSReact from '../assets/canvasjs.react';
import { History } from 'history';
import { Button, Segment } from 'semantic-ui-react';
import { IChartOptions, ISocketData } from '../shared/ChartOptionInterfaces';
import { BarDataPoint } from '../shared/ChartOptionTypes';

interface IBarChartPageProps {
    history: History;
}

interface IBarChartPageState {
    chartOptions: IChartOptions<BarDataPoint>;
    isCalcInProgress: boolean;
}

class BarChartPage extends Component<IBarChartPageProps, IBarChartPageState> {
    
    socket = openSocket('http://localhost:3001');
    ranges: Array<Array<number>>;

    constructor(props: IBarChartPageProps) {
        super(props);

        const minDataValue = -100;
        const maxDataValue = 100;

        this.ranges = [[minDataValue, minDataValue + 20, 0]];
        for (let index = minDataValue + 20; index < maxDataValue; index += 20) {
            this.ranges.push([index, index + 20, 0]);
        }

        this.state = {
            chartOptions: {
                animationEnabled: true,
                title: {
                    text: "Random numbers"
                },
                axisX: {
                    title: "Ranges",
                    valueFormatString: "###"
                },
                axisY: {
                    title: "Count in range",
                    prefix: "",
                    includeZero: false
                },
                data: [{
                    yValueFormatString: "###",
                    xValueFormatString: "",
                    type: "column",
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
        const dataValues: Array<number> = [];

        this.setState({ isCalcInProgress: true });
        this.socket.on('data', (data: ISocketData) => {
            const newOptions: IChartOptions<BarDataPoint> = {...this.state.chartOptions};
            const currentRandomNumber = data.value;
            const newDataPoints: Array<BarDataPoint> = [];

            dataValues.push(currentRandomNumber);
            this.ranges.forEach((range, index) => {
                if (currentRandomNumber > range[0] && currentRandomNumber <= range[1]) {
                    range[2] += 1;
                }

                newDataPoints.push(
                    {
                        x: index,
                        y: range[2],
                        label: `${range[0]}-${range[1]}`,
                    }
                )
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

export default BarChartPage