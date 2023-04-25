import { useRef, useEffect } from 'react';
import * as echarts from 'echarts';

type UseEchartsProps = {
    getOption: () => echarts.EChartsOption;
};

export const useEcharts = ({ getOption }: UseEchartsProps) => {
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            if (chartRef.current) {
                const chart: any = echarts.getInstanceByDom(chartRef.current);
                chart.resize();
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (chartRef.current) {
            const chart = echarts.init(chartRef.current);
            const option = getOption();
            chart.setOption(option);

            return () => {
                chart.dispose();
            };
        }
    }, [getOption]);

    return chartRef;
};
