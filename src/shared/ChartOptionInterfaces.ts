export interface ISocketData {
    value: number,
    timestamp: number,
}

interface IDataPoint {
    x: Date,
    y: number,
    label: string,
}

interface IChartDataItem {
    yValueFormatString: string,
    xValueFormatString: string,
    type: string,
    dataPoints: Array<IDataPoint>
}

export interface IChartOptions {
    animationEnabled: boolean,
    title: {
        text: string,
    },
    axisX: {
        valueFormatString: string,
    },
    axisY: {
        title: string,
        prefix: string,
        includeZero: boolean
    },
    data: Array<IChartDataItem>,
}