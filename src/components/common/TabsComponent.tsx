import { useState } from "react";

type TabOption = {
    label: string;
    value: number;
};


const tabOptions: TabOption[] = [
    { label: '1 day', value: 1 },
    { label: '3 days', value: 3 },
    { label: '7 days', value: 7 },
    { label: '30 days', value: 30 },
    { label: 'All time', value: -1 },
    { label: 'Custom date', value: 0 },
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
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-gray-800'
                            }`}
                        onClick={() => handleTabClick(option.value)}
                    >
                        {option.label}
                    </button>
                ))}
            </div>

            <div>
                <p>Selected day: {activeTab === -1 ? 'All time' : activeTab}</p>
                {/* <pre>{JSON.stringify(chartData, null, 2)}</pre> */}
            </div>
        </div>
    )
}

export default TabsComponent;