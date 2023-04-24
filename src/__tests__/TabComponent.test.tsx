import { render, fireEvent } from '@testing-library/react';
import TabsComponent from "../components/common/TabsComponent"

describe('TabsComponent', () => {
    it('renders tab buttons with correct labels', () => {
        const { getByText } = render(<TabsComponent />);
        const oneDayTab = getByText('1 Day');
        const threeDaysTab = getByText('3 Days');
        const sevenDaysTab = getByText('7 Days');
        const thirtyDaysTab = getByText('30 Days');
        const allTimeTab = getByText('All Time');
        const customDateTab = getByText('Custom Date');

        expect(oneDayTab).toBeInTheDocument();
        expect(threeDaysTab).toBeInTheDocument();
        expect(sevenDaysTab).toBeInTheDocument();
        expect(thirtyDaysTab).toBeInTheDocument();
        expect(allTimeTab).toBeInTheDocument();
        expect(customDateTab).toBeInTheDocument();
    });

    it('changes active tab when a tab button is clicked', () => {
        const { getByText } = render(<TabsComponent />);
        const threeDaysTab = getByText('3 Days');
        const sevenDaysTab = getByText('7 Days');

        expect(threeDaysTab).not.toHaveClass('bg-[#FFEEE6]');
        expect(sevenDaysTab).not.toHaveClass('bg-[#FFEEE6]');

        fireEvent.click(threeDaysTab);

        expect(threeDaysTab).toHaveClass('bg-[#FFEEE6]');
        expect(sevenDaysTab).not.toHaveClass('bg-[#FFEEE6]');

        fireEvent.click(sevenDaysTab);

        expect(threeDaysTab).not.toHaveClass('bg-[#FFEEE6]');
        expect(sevenDaysTab).toHaveClass('bg-[#FFEEE6]');
    });
});
