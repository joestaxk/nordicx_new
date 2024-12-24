"use client";
import React from 'react'
import ApexChart from '../ui/apexChart';
import Link from 'next/link';
import MutedText from '../ui/muted-text';
import { ApexOptions } from 'apexcharts';


interface AreaBarState {
    series: ApexAxisChartSeries;
    options: ApexOptions;
}

export default function OverviewEquityTrend() {
    const [activeTimeframe, setActiveTimeframe] = React.useState<'7days' | '30days'>('7days');

    const sevenDaysState: AreaBarState = {
        series: [{
            name: 'Equity Trend',
            data: [31, 40, 28, 51, 42, 109, 100]
        }],
        options: {
            chart: {
                height: 350,
                type: 'area'
            },
            grid: {
                show: true,
                borderColor: '#87909f34',
                strokeDashArray: 5
            },
            colors: ["#EB771A"],
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                type: 'datetime',
                categories: [
                    "2024-01-01T00:00:00.000Z",
                    "2024-01-02T00:00:00.000Z",
                    "2024-01-03T00:00:00.000Z",
                    "2024-01-04T00:00:00.000Z",
                    "2024-01-05T00:00:00.000Z",
                    "2024-01-06T00:00:00.000Z",
                    "2024-01-07T00:00:00.000Z"
                ]
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
        },
    };

    const thirtyDaysState: AreaBarState = {
        series: [{
            name: 'Equity Trend',
            data: [50, 60, 45, 70, 55, 80, 65, 75, 90, 85, 95, 100, 110, 105, 120, 115, 130, 125, 140, 135, 150, 145, 160, 155, 170, 165, 180, 175, 190, 185]
        }],
        options: {
            ...sevenDaysState.options,
            xaxis: {
                type: 'datetime',
                categories: Array.from({ length: 30 }, (_, i) =>
                    new Date(2024, 0, i + 1).toISOString()
                )
            }
        },
    };

    return (
        <div className='flex lg:flex-row flex-col mt-5 gap-5'>
            <div className="bg-xDark x3xl:w-[80%] lg:w-[70%] rounded-md">
                <div className="border-b border-xMutedText/20 py-3 pl-2">
                    <h1 className='sm:text-[1.3rem] text-[1.1rem] text-white'>Equity Trend</h1>
                </div>

                <div className="p-2">
                    <div className="flex gap-2 mb-4 text-[13px]">
                        <button
                            className={`px-3 py-2 rounded ${activeTimeframe === '7days'
                                    ? 'bg-[#B4BFD61F] text-white'
                                    : 'text-xMutedText bg-[#2C2F33]'
                                }`}
                            onClick={() => setActiveTimeframe('7days')}
                        >
                            Last 7 days
                        </button>
                        <button
                            className={`px-4 py-2 rounded ${activeTimeframe === '30days'
                                    ? 'bg-[#B4BFD61F] text-white'
                                    : 'text-xMutedText bg-[#2C2F33]'
                                }`}
                            onClick={() => setActiveTimeframe('30days')}
                        >
                            Last 30 days
                        </button>
                    </div>
                    <ApexChart
                        height={300}
                        state={activeTimeframe === '7days' ? sevenDaysState : thirtyDaysState}
                        type='area'
                    />
                </div>
            </div>

            <div className="x3xl:w-[20%] lg:w-[30%] px-2 text-white bg-xDark p-2 rounded-md">
                {/* transaction list */}
                <div className="flex justify-between items-center">
                    <h1 className='text-[15px] font-semibold'>Recent Transactions</h1>
                    <Link href={"#"} className='text-xBlueColor capitalize text-[13px]'>view all</Link>
                </div>

                <ul className='mt-5 space-y-3 overflow-y-auto  h-[400px]'>
                    {
                        Array.from({ length: 10 }).map((_, idx) => (
                            <li key={idx} className='flex items-center justify-between text-[13px]'>
                                <div className="">
                                    <div className="flex items-center gap-1">
                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_5_79)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.79281 5.34755C3.18931 7.95105 3.18931 12.1722 5.79281 14.7756C8.08062 17.0634 11.6193 17.3414 14.2099 15.6069C14.4667 15.435 14.7144 15.2433 14.9508 15.0314C15.2935 14.7243 15.8204 14.7532 16.1275 15.0959C16.4346 15.4388 16.4057 15.9656 16.0629 16.2727C15.768 16.5369 15.4585 16.7767 15.1371 16.9919C11.8981 19.1604 7.47558 18.8154 4.6143 15.9542C1.35993 12.6998 1.35993 7.42341 4.6143 4.16904C7.75879 1.02455 12.7904 0.918412 16.0629 3.8505C16.4057 4.15761 16.4346 4.68446 16.1275 5.02724C15.8204 5.37001 15.2935 5.39892 14.9508 5.0918C12.3337 2.74701 8.30806 2.8323 5.79281 5.34755Z" fill="#87909F" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.4294 9.47203C19.7548 9.79744 19.7548 10.3251 19.4294 10.6505L16.7777 13.3022C16.4523 13.6276 15.9247 13.6276 15.5992 13.3022C15.2738 12.9768 15.2738 12.4491 15.5992 12.1237L16.8283 10.8946H9.41208C8.95183 10.8946 8.57874 10.5215 8.57874 10.0613C8.57874 9.60103 8.95183 9.22794 9.41208 9.22794H16.8283L15.5992 7.99889C15.2738 7.67344 15.2738 7.14581 15.5992 6.82037C15.9247 6.49494 16.4523 6.49494 16.7777 6.82037L19.4294 9.47203Z" fill="#87909F" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_5_79">
                                                    <rect width="20" height="20" fill="white" transform="translate(0.506836 0.0616455)" />
                                                </clipPath>
                                            </defs>
                                        </svg>

                                        <span>Withdrawal</span>
                                    </div>

                                    <MutedText>2024-02-19 03:52:37</MutedText>
                                </div>


                                <div className="">
                                    <div className="">
                                        <span>
                                            -0.23403268 ETH
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        {/* STATUS */}
                                        <div className="w-3 h-3 rounded-full bg-[#16B979]"></div>
                                        <MutedText className="">Withdrawal Successful</MutedText>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
