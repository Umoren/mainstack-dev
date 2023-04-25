import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LineChartComponent from '../components/common/LineChartComponent';
import { useEcharts } from '../hooks/useEcharts';
import { GraphData } from '../components/common/LineChartComponent';

jest.mock('../hooks/useEcharts', () => ({
    useEcharts: jest.fn(),
}));

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


describe('LineChartComponent', () => {
    it('renders chart', () => {
        (useEcharts as jest.Mock).mockReturnValue({ current: document.createElement('div') });

        render(<LineChartComponent />);

        expect(useEcharts).toHaveBeenCalled();
        const getOption: any = (useEcharts as jest.Mock).mock.calls[0][0].getOption;
        const option = getOption();
        expect(option).toBeDefined();
        expect(option.series).toBeDefined();
        // Add more assertions as needed
    });
    test('renders chart with correct height and width', () => {
        (useEcharts as jest.Mock).mockReturnValue({ current: document.createElement('div') });

        const { container } = render(<LineChartComponent />);
        const chartContainer = container.firstChild;

        if (window.innerWidth < 768) {
            expect(chartContainer).toHaveStyle('height: 300px');
        } else {
            expect(chartContainer).toHaveStyle('height: 400px');
        }
        expect(chartContainer).toHaveStyle('width: 100%');
    });

    it('getOption returns expected xAxis properties', () => {
        (useEcharts as jest.Mock).mockReturnValue({ current: document.createElement('div') });

        render(<LineChartComponent />);
        const getOption: any = (useEcharts as jest.Mock).mock.calls[0][0].getOption;
        const option = getOption();
        const xAxis = option.xAxis;

        expect(xAxis.type).toBe('category');
        expect(xAxis.boundaryGap).toBe(false);
        expect(xAxis.data).toEqual(Object.keys(graphData));
    });

    it('getOption returns expected yAxis properties', () => {
        (useEcharts as jest.Mock).mockReturnValue({ current: document.createElement('div') });

        render(<LineChartComponent />);
        const getOption: any = (useEcharts as jest.Mock).mock.calls[0][0].getOption;
        const option = getOption();
        const yAxis = option.yAxis;

        expect(yAxis.type).toBe('value');
        expect(yAxis.min).toBe(0);
        expect(yAxis.max).toBe(1000);
        expect(yAxis.interval).toBe(200);
    });

    it('getOption returns expected series properties', () => {
        (useEcharts as jest.Mock).mockReturnValue({ current: document.createElement('div') });

        render(<LineChartComponent />);
        const getOption: any = (useEcharts as jest.Mock).mock.calls[0][0].getOption;
        const option = getOption();
        const series = option.series[0];

        expect(series.name).toBe('Views');
        expect(series.type).toBe('line');
        expect(series.symbol).toBe('none');
        expect(series.areaStyle.color).toBe('#FF5403');
        expect(series.lineStyle.color).toBe('#FF5403');
        expect(series.data).toEqual(Object.values(graphData));
    });
});
