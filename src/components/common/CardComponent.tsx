import { useRef, useEffect, useState } from 'react';
import * as echarts from 'echarts';

type Source = {
    label: string;
    count: number;
    value: number;
    icon: string;
}

type CardComponentProps = {
    title: string;
    sources: Source[];
};

const CardComponent: React.FC<CardComponentProps> = ({ title, sources }) => {
    const chartRef = useRef<HTMLDivElement>(null);
    const [colors, setColors] = useState<string[]>([]);



    useEffect(() => {
        if (chartRef.current) {
            const chart = echarts.init(chartRef.current);
            const data = sources.map((source) => ({
                name: source.label,
                value: source.value,
            }));

            const option: echarts.EChartsOption = {
                series: [
                    {
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        data,
                        label: {
                            show: false,
                        },
                        labelLine: {
                            show: false,
                        },
                    },
                ],
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    show: false,
                }
            };

            chart.setOption(option);

            setColors(chart.getOption().color as string[]);

            return () => {
                chart.dispose();
            };
        }
    }, [sources]);

    return (

        <div className="w-full max-w-[480px] p-4 bg-white shadow sm:p-8 border border-[#EFF1F6] rounded-lg my-8">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-ms-black text-lg ">{title}</h5>
                <a href="/#" className="text-xs md:text-sm text-ms-orange">
                    View full reports
                </a>
            </div>


            <div className="flex items-center justify-between w-full flex-row-reverse">
                <div ref={chartRef} style={{ width: '50%', height: '200px' }} className='ml-6' />
                <ul className="w-1/2">
                    {sources &&
                        sources.map((item, index) => (
                            <li className="py-2 flex" key={index}>
                                <div className="flex items-center gap-x-2 md:space-x-4">
                                    <div className="flex-shrink-0">
                                        <img className="w-5 h-4 rounded-full" src={item.icon} alt={item.label} />
                                    </div>
                                    <div className="flex min-w-0 space-x-1 md:space-x-2">
                                        <p className="text-xs  md:text-sm  font-medium text-gray-900 truncate">{item.label}</p>
                                        <p className="text-xs md:text-sm font-semibold text-ms-black">{item.value}%</p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        {/* Use a colored circle as the legend item */}
                                        <div
                                            style={{
                                                width: '10px',
                                                height: '10px',
                                                borderRadius: '50%',
                                                marginLeft: '3px',
                                                backgroundColor: colors[index] || '',
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </li>
                        ))}
                </ul>
            </div>
        </div>

    );
};

export default CardComponent;
