export interface ISocketData {
    value: number,
    timestamp: number,
}

interface IChartDataItem<T> {
    yValueFormatString: string,
    xValueFormatString: string,
    type: string,
    dataPoints: Array<T>
}

export interface IChartOptions<T> {
    animationEnabled: boolean,
    title: {
        text: string,
    },
    axisX: {
        title?: string,
        valueFormatString: string,
    },
    axisY: {
        title?: string,
        prefix: string,
        includeZero: boolean
    },
    data: Array<IChartDataItem<T>>,
}