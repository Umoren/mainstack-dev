// components/GraphComponent.tsx
import { useRef, useEffect } from 'react';
import * as echarts from 'echarts';

type GraphData = {
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
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chartRef.current) {
            const chart = echarts.init(chartRef.current);
            const xAxisData = Object.keys(graphData);
            const yAxisData = Object.values(graphData);
            const monthAbbreviations = [
                'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
            ];

            const option: echarts.EChartsOption = {
                tooltip: {
                    trigger: 'axis',
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: xAxisData,
                    axisLabel: {
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

            chart.setOption(option);

            return () => {
                chart.dispose();
            };
        }
    }, []);

    return <div ref={chartRef} style={{ width: '100%', height: '400px' }} />;
};

export default LineChartComponent;
