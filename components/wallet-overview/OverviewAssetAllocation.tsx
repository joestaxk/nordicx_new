"use client";
import Link from 'next/link'
import React from 'react'
import ApexChart from '../ui/apexChart'
import MutedText from '../ui/muted-text';
import { ApexOptions } from 'apexcharts';

interface RadialBarState {
    series: number[];
    options: ApexOptions;
}


export default function OverviewAssetAllocation() {
    const [state] = React.useState<RadialBarState>({
        series: [100, 40, 50, 10],
        options: {
            chart: {
                height: 350,
                type: 'radialBar',
            },
            colors: ["#3B7CFF", "#8F4CEE", "#ECA20E", "#E57E7E"],
            plotOptions: {
                radialBar: {
                    hollow: {
                        margin: 5,
                        size: '10%', // Adjust hollow size if needed
                    },
                    track: {
                        background: '#2C2F33', // Dark background for tracks
                        strokeWidth: '80%', // Wider tracks (increased from 97%)
                        opacity: 0.3, // Slightly transparent
                        margin: 10, // Increased margin between tracks
                    },
                    dataLabels: {
                        name: {
                            fontSize: '22px',
                            color: '#ffffff' // Ensure name is visible
                        },
                        value: {
                            fontSize: '16px',
                            color: '#ffffff' // Ensure value is visible
                        },
                        total: {
                            show: false
                        }
                    },
                }
            },
            labels: ['Spot', 'Futures', 'Fiat', 'Copy Trade'],
        },
    });
    return (
        <div className='mt-5 text-white bg-xDark p-3'>
            <div className="flex justify-between items-center">
                <h1 className='sm:text-[1.3rem] text-[1.1rem]'>Asset Allocation</h1>
                <Link href={"#"} className='text-xBlueThickColor text-[13px]'>Proof of Reserves (PoR)</Link>
            </div>

            <div className="flex lg:flex-row flex-col gap-5 mt-5 items-center">
                <div className="">
                    <div className="flex gap-2">
                        <button className='bg-[#B4BFD61F] text-white'>Last 7 days</button>
                        <button className='text-xMutedText'>Last 30 days</button>
                    </div>
                    <ApexChart height={300} state={state} type='radialBar' />
                </div>
                <ul className="w-full px-4">
                    {
                        [{ name: 'Spot', series: 100, color: "#3B7CFF" }, { name: 'Futures', series: 0, color: "#8F4CEE" }, { name: 'Fiat', series: 0, color: "#ECA20E" }, { name: 'Copy Trade', series: 0, color: "#E57E7E" }].map(({ name, color, series }, i) => (
                            <li className='flex justify-between items-center w-full border-b border-xMutedText/20 py-2' key={i}>
                                <div className="flex items-center gap-1 w-1/3">
                                    <div className={`w-3 h-3`} style={{ background: color }}></div>
                                    <div className="text-[13px] sm:text-base">{name}</div>
                                </div>

                                <div className="sm:flex items-center gap-1 w-1/2">
                                    <div className="text-[13px] sm:text-base">449.35 USDT</div>
                                    <div className="flex">
                                        <MutedText className="sm:!text-[15px] text-[13px]">
                                            ≈
                                        </MutedText>
                                        <MutedText className="sm:!text-[15px] text-[13px]">
                                            449.30 USD
                                        </MutedText>
                                    </div>
                                </div>


                                <div className="w-1/3 sm:block hidden">{series}%</div>

                                <button>
                                    <svg width="17" height="4" viewBox="0 0 17 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.650146 1.91107C0.650123 2.08331 0.684028 2.25387 0.749925 2.413C0.815821 2.57213 0.912418 2.71673 1.0342 2.83852C1.15598 2.96032 1.30056 3.05694 1.45969 3.12286C1.61881 3.18878 1.78936 3.2227 1.9616 3.2227C2.13384 3.2227 2.30439 3.18878 2.46351 3.12286C2.62264 3.05694 2.76722 2.96032 2.889 2.83852C3.01078 2.71673 3.10738 2.57213 3.17328 2.413C3.23917 2.25387 3.27308 2.08331 3.27305 1.91107C3.27301 1.56329 3.13482 1.22976 2.88888 0.98385C2.64294 0.737943 2.30939 0.599796 1.9616 0.599796C1.61381 0.599796 1.28026 0.737943 1.03432 0.98385C0.788384 1.22976 0.650193 1.56329 0.650146 1.91107ZM7.21041 1.91107C7.21041 2.25889 7.34858 2.59247 7.59453 2.83841C7.84047 3.08436 8.17405 3.22253 8.52187 3.22253C8.86968 3.22253 9.20326 3.08436 9.4492 2.83841C9.69515 2.59247 9.83332 2.25889 9.83332 1.91107C9.83332 1.56326 9.69515 1.22968 9.4492 0.983736C9.20326 0.737791 8.86968 0.599621 8.52187 0.599621C8.17405 0.599621 7.84047 0.737791 7.59453 0.983736C7.34858 1.22968 7.21041 1.56326 7.21041 1.91107ZM13.7697 1.91107C13.7697 2.25903 13.9079 2.59273 14.1539 2.83876C14.4 3.0848 14.7337 3.22303 15.0816 3.22303C15.4296 3.22303 15.7633 3.0848 16.0093 2.83876C16.2554 2.59273 16.3936 2.25903 16.3936 1.91107C16.3936 1.56312 16.2554 1.22942 16.0093 0.983383C15.7633 0.737344 15.4296 0.599121 15.0816 0.599121C14.7337 0.599121 14.4 0.737344 14.1539 0.983383C13.9079 1.22942 13.7697 1.56312 13.7697 1.91107Z" fill="#87909F" />
                                    </svg>
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
