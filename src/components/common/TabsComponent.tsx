import { useState } from "react";

type TabOption = {
    label: string;
    value: number;
};

const tabOptions: TabOption[] = [
    { label: '1 Day', value: 1 },
    { label: '3 Days', value: 3 },
    { label: '7 Days', value: 7 },
    { label: '30 Days', value: 30 },
    { label: 'All Time', value: -1 },
    { label: 'Custom Date', value: 0 },
];

const TabsComponent: React.FC = () => {
    const [activeTab, setActiveTab] = useState<number>(-1);

    const handleTabClick = (value: number) => {
        setActiveTab(value);
    };
    return (
        <div>
            <div className="flex space-x-4">
                {tabOptions.map((option) => (
                    <button
                        key={option.value}
                        className={`px-4  py-2  rounded-full ${activeTab === option.value
                            ? 'bg-[#FFEEE6] text-ms-orange border border-ms-orange focus:outline-none'
                            : 'bg-white text-ms-gray-500 text-sm border border-[#EFF1F6]'
                            }`}
                        onClick={() => handleTabClick(option.value)}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default TabsComponent;