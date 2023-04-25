import { render, fireEvent, screen } from '@testing-library/react';
import TabsComponent from '../components/common/TabsComponent';

describe('TabsComponent', () => {
    const tabOptions = [
        { label: '1 Day', value: 1 },
        { label: '3 Days', value: 3 },
        { label: '7 Days', value: 7 },
        { label: '30 Days', value: 30 },
        { label: 'All Time', value: -1 },
        { label: 'Custom Date', value: 0 },
    ];



    test('renders all tab options', () => {
        const { getByTestId } = render(<TabsComponent activeTab={-1} onTabClick={() => { }} />);
        tabOptions.forEach((option) => {
            const button = getByTestId(`tab-${option.value}`);
            expect(button).toHaveTextContent(option.label);
        });
    });

    test('applies correct styles to the active tab', () => {
        const activeTab = 1;
        const { getByTestId } = render(<TabsComponent activeTab={activeTab} onTabClick={() => { }} />);
        const activeButton = getByTestId(`tab-${activeTab}`);
        expect(activeButton).toHaveClass("bg-[#FFEEE6] text-ms-orange border font-semibold text-xs border-ms-orange focus:outline-none");
    });


    test('triggers onTabClick callback with correct value when tab is clicked', () => {
        const handleTabClick = jest.fn();
        const { getByText } = render(<TabsComponent activeTab={-1} onTabClick={handleTabClick} />);
        fireEvent.click(getByText(tabOptions[0].label));
        expect(handleTabClick).toHaveBeenCalledTimes(1);
        expect(handleTabClick).toHaveBeenCalledWith(tabOptions[0].value);
    });
});
