import { useEcharts } from '../../hooks/useEcharts'
import * as echarts from 'echarts';

export type GraphData = {
    [date: string]: number;
};

const graphData: GraphData = {
    "2022-07-31": 1,
    "2022-08-01": 3,
    "2022-08-02": 3,
    "2022-08-03": 7,
    "2022-08-04": 8,
    "2022-08-05": 5,
    "2022-08-06": 20,
    "2022-08-07": 50,
    "2022-08-08": 100,
    "2022-08-09": 2,
};

const LineChartComponent: React.FC = () => {

    const getOption = (): echarts.EChartsOption => {
        const xAxisData = Object.keys(graphData);
        const yAxisData = Object.values(graphData);
        const monthAbbreviations = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];

        return {
            tooltip: {
                trigger: 'axis',
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: xAxisData,
                axisLabel: {
                    fontSize: window.innerWidth < 768 ? 10 : 12,
                    formatter: (value: string) => {
                        const date = new Date(value);
                        const day = date.getDate();
                        const month = monthAbbreviations[date.getMonth()];
                        return `${day} ${month}`;
                    },
                },
                axisLine: {
                    lineStyle: {
                        color: '#4D5760'
                    }
                }
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 1000,
                interval: 200,
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'dashed',
                    },
                },
                axisLabel: {
                    fontSize: window.innerWidth < 768 ? 10 : 12,
                    formatter: (value: number) => {
                        return value.toString();
                    },
                },
            },
            series: [
                {
                    name: 'Views',
                    type: 'line',
                    symbol: 'none',
                    areaStyle: {
                        color: '#FF5403',
                        opacity: 0.2
                    },
                    lineStyle: {
                        color: '#FF5403'
                    },
                    data: yAxisData,
                },
            ],
        };
    };


    const chartRef = useEcharts({ getOption });


    return <div ref={chartRef} style={{ width: '100%', height: window.innerWidth < 768 ? '300px' : '400px' }} />;
};

export default LineChartComponent;
