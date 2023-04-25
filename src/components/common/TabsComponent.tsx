type TabOptionProps = {
    label: string;
    value: number;
};

export interface TabsComponentProps {
    activeTab: number;
    onTabClick: (value: number) => void;
}

export const tabOptions: TabOptionProps[] = [
    { label: '1 Day', value: 1 },
    { label: '3 Days', value: 3 },
    { label: '7 Days', value: 7 },
    { label: '30 Days', value: 30 },
    { label: 'All Time', value: -1 },
    { label: 'Custom Date', value: 0 },
];

const TabsComponent: React.FC<TabsComponentProps> = ({ activeTab, onTabClick }) => {

    return (
        <div>
            <div className="flex flex-wrap sm:flex-nowrap gap-2 md:gap-x-4">
                {tabOptions.map((option) => (
                    <button
                        data-testid={`tab-${option.value}`}
                        key={option.value}
                        className={`px-3 py-1 md:px-4 md:py-2 mb-2 sm:mb-0 rounded-full ${activeTab === option.value
                            ? "bg-[#FFEEE6] text-ms-orange border font-semibold text-xs border-ms-orange focus:outline-none"
                            : "bg-white text-ms-gray-500 font-semibold text-xs border border-[#EFF1F6]"
                            }`}
                        onClick={() => onTabClick(option.value)}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default TabsComponent;