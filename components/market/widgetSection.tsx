"use client";
import React, { useState } from 'react'
import TradingViewWidget from './tradeview-widget'
import TextInputUi from '../ui/input-ui';
import MutedText from '../ui/muted-text';
import HorizontalScrollUi from '../ui/horizontalScrollUi';
import Image from 'next/image';
import Button from '../ui/button';
import Pagination from '../ui/pagnition';

export default function WidgetSection({ tabs, setTabs }: {
    tabs: number,
    setTabs: (params: number) => void
}) {
    const [curPage, setCurPage] = useState(1)
    function onPageChange(n: number) {
        console.log(n)
        setCurPage(n)
    }
    return (
        <div className='flex justify-center  bg-[#111214] px-5'>
            <div className="flex flex-col items-center justify-center w-full">
                <div className="w-full overflow-x-auto mt-5 xl:flex justify-center px-2">
                    <div className="2xl:w-[1500px] min-w-[1200px] py-2 gap-5 flex items-center">
                        <div className="w-full h-[230px]">
                            <TradingViewWidget
                                symbol='BINANCE:ETHUSDT'
                            />
                        </div>
                        <div className="w-full h-[230px]">
                            <TradingViewWidget
                                symbol='BINANCE:BTCUSDT'
                            />
                        </div>
                        <div className="w-full h-[230px]">

                            <TradingViewWidget
                                symbol='BINANCE:NEARUSDT'
                            />
                        </div>
                        <div className="w-full h-[230px]">

                            <TradingViewWidget
                                symbol='BINANCE:XRPUSDT'
                            />
                        </div>
                    </div>
                </div>

                <div className="w-[1200px] max-w-full">
                    <div className="flex md:justify-between md:items-center justify-normal gap-5 mb-6 w-full md:flex-row flex-col">
                        <div className="flex gap-3 items-center overflow-x-auto whitespace-nowrap w-full py-2 overflow-y-hidden font-bold">
                            <button onClick={() => setTabs(1)} className={`md:leading-[51px] leading-[21px] ${tabs == 1 ? "border-b-2 border-xBlueThickColor text-white" : "text-xMutedText"}`}>Favorites</button>
                            <button onClick={() => setTabs(2)} className={`md:leading-[51px] leading-[21px] ${tabs == 2 ? "border-b-2 border-xBlueThickColor text-white" : "text-xMutedText"}`}>Spot</button>
                            <div className="flex items-center gap-3">
                                <button onClick={() => setTabs(3)} className={`md:leading-[51px] leading-[21px] ${tabs == 3 ? "border-b-2 border-xBlueThickColor text-white" : "text-xMutedText"}`}>
                                    Futures
                                </button>
                                <div className="text-xBlueColor w-fit text-[12px] px-2 py-1 rounded-md bg-[#0F1E3B]">Marker 0.000% / Taker 0.000%</div>
                            </div>
                            <button onClick={() => setTabs(4)} className={`md:leading-[51px] leading-[21px] ${tabs == 4 ? "border-b-2 border-xBlueThickColor text-white" : "text-xMutedText"}`}>P2P</button>
                            <button onClick={() => setTabs(5)} className={`md:leading-[51px] leading-[21px] ${tabs == 5 ? "border-b-2 border-xBlueThickColor text-white" : "text-xMutedText"}`}>Third-party</button>
                        </div>

                        <div className="w-[350px] max-w-full">
                            <TextInputUi
                                type='text'
                                placeholder={"Search Crypto / Futures"}
                                inputPlaceholder={(<div className='flex items-center gap-1'>
                                    <svg width="17" height="24" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7917 14.8686C9.88866 15.5706 8.7538 15.9887 7.52133 15.9887C4.57581 15.9887 2.18799 13.6009 2.18799 10.6554C2.18799 7.70983 4.57581 5.32202 7.52133 5.32202C10.4669 5.32202 12.8547 7.70983 12.8547 10.6554C12.8547 11.8878 12.4366 13.0227 11.7346 13.9258L15.3261 17.5173C15.5864 17.7776 15.5864 18.1998 15.3261 18.4601C15.0658 18.7204 14.6436 18.7204 14.3833 18.4601L10.7917 14.8686ZM11.5214 10.6554C11.5214 12.8645 9.73046 14.6554 7.52133 14.6554C5.31219 14.6554 3.52133 12.8645 3.52133 10.6554C3.52133 8.44621 5.31219 6.65535 7.52133 6.65535C9.73046 6.65535 11.5214 8.44621 11.5214 10.6554Z" fill="#6E7583" />
                                    </svg>
                                </div>)} inputName={'search_pair'} conversionType={''} />
                        </div>

                    </div>

                    <div className="w-full flex  items-center gap-2">
                        <div className="">
                            <select name="" id="" className='bg-[#13274C] text-white p-1 rounded-md text-[13px] outline-none'>
                                <option value="">USDT</option>
                            </select>
                        </div>
                        <HorizontalScrollUi className='overflow-x-auto  whitespace-nowrap'>
                            <button className='px-2 bg-[#B4BFD61F] hover:bg-[#B4BFD61F] hover:rounded-sm'>
                                <MutedText className=''>All</MutedText>
                            </button>

                            {/* active */}
                            <button className='px-2 rounded-sm hover:bg-[#B4BFD61F] hover:rounded-sm'>
                                <MutedText className='!text-white'>Main</MutedText>
                            </button>
                            <button className='px-2 rounded-sm hover:bg-[#B4BFD61F] hover:rounded-sm'>
                                <MutedText className='!text-white'>Innovation</MutedText>
                            </button>

                            <button className='px-2 rounded-sm hover:bg-[#B4BFD61F] hover:rounded-sm'>
                                <MutedText className='!text-white'>Assessment</MutedText>
                            </button>

                            <button className='px-2 rounded-sm hover:bg-[#B4BFD61F] hover:rounded-sm'>
                                <MutedText className='!text-white'>BRC20</MutedText>
                            </button>
                            <button className='px-2 rounded-sm hover:bg-[#B4BFD61F] hover:rounded-sm'>
                                <MutedText className='!text-white'>SOLANA Ecosystem</MutedText>
                            </button>
                            <button className='px-2 rounded-sm hover:bg-[#B4BFD61F] hover:rounded-sm'>
                                <MutedText className='!text-white'>Bitcoin Inscription</MutedText>
                            </button>
                            <button className='px-2 rounded-sm hover:bg-[#B4BFD61F] hover:rounded-sm'>
                                <MutedText className='!text-white'>MEME</MutedText>
                            </button>
                            <button className='px-2 rounded-sm hover:bg-[#B4BFD61F] hover:rounded-sm'>
                                <MutedText className='!text-white'>Arbitrium</MutedText>
                            </button>
                            <button className='px-2 rounded-sm hover:bg-[#B4BFD61F] hover:rounded-sm'>
                                <MutedText className='!text-white'>Optimism</MutedText>
                            </button>
                            <button className='px-2 rounded-sm hover:bg-[#B4BFD61F] hover:rounded-sm'>
                                <MutedText className='!text-white'>GameFi</MutedText>
                            </button>
                            <button className='px-2 rounded-sm hover:bg-[#B4BFD61F] hover:rounded-sm'>
                                <MutedText className='!text-white'>ZK</MutedText>
                            </button>
                            <button className='px-2 rounded-sm hover:bg-[#B4BFD61F] hover:rounded-sm'>
                                <MutedText className='!text-white'>more</MutedText>
                            </button>
                            <button className='px-2 rounded-sm hover:bg-[#B4BFD61F] hover:rounded-sm'>
                                <MutedText className='!text-white'>more</MutedText>
                            </button>
                            <button className='px-2 rounded-sm hover:bg-[#B4BFD61F] hover:rounded-sm'>
                                <MutedText className='!text-white'>more</MutedText>
                            </button>
                            <button className='px-2 rounded-sm hover:bg-[#B4BFD61F] hover:rounded-sm'>
                                <MutedText className='!text-white'>more</MutedText>
                            </button>
                            <button className='px-2 rounded-sm hover:bg-[#B4BFD61F] hover:rounded-sm'>
                                <MutedText className='!text-white'>more</MutedText>
                            </button> <button className='px-2 rounded-sm hover:bg-[#B4BFD61F] hover:rounded-sm'>
                                <MutedText className='!text-white'>more</MutedText>
                            </button>
                        </HorizontalScrollUi>

                    </div>

                    {/* market table data*/}

                    <div className="text-white overflow-y-auto overflow-x-auto text mb-10">
                        <table className='lg:w-full w-[900px] text-left'>
                            <thead className='sticky top-0 z-10 border-b border-xMutedText/20 bg-[#111214]'>
                                <tr>
                                    <th className='text-[14px] py-2 capitalize pl-2'>
                                        <MutedText className='capitalize'>Trading Pair</MutedText>
                                    </th>
                                    <th className='text-[14px] py-2 capitalize'>
                                        <div className="flex items-center">
                                            <MutedText>Price</MutedText>
                                            <div className="">
                                                {/* up arrow */}
                                                <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.08912 1.60131L9.66874 5.28956C9.83563 5.52817 9.66507 5.85601 9.37407 5.85601H4.21482C3.92381 5.85601 3.75326 5.52817 3.92014 5.28957L6.49976 1.60131C6.64296 1.39657 6.94592 1.39657 7.08912 1.60131Z" fill="#87909F" />
                                                </svg>

                                                {/* down arrow */}
                                                <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.08912 5.55866L9.66874 1.8704C9.83563 1.6318 9.66507 1.30396 9.37407 1.30396H4.21482C3.92381 1.30396 3.75326 1.6318 3.92014 1.8704L6.49976 5.55866C6.64296 5.76341 6.94592 5.76341 7.08912 5.55866Z" fill="#87909F" />
                                                </svg>
                                            </div>
                                        </div>
                                    </th>
                                    <th className='text-[14px] py-2 capitalize flex items-center'>
                                        <MutedText>Change</MutedText>
                                        <div className="">
                                            {/* up arrow */}
                                            <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.08912 1.60131L9.66874 5.28956C9.83563 5.52817 9.66507 5.85601 9.37407 5.85601H4.21482C3.92381 5.85601 3.75326 5.52817 3.92014 5.28957L6.49976 1.60131C6.64296 1.39657 6.94592 1.39657 7.08912 1.60131Z" fill="#87909F" />
                                            </svg>

                                            {/* down arrow */}
                                            <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.08912 5.55866L9.66874 1.8704C9.83563 1.6318 9.66507 1.30396 9.37407 1.30396H4.21482C3.92381 1.30396 3.75326 1.6318 3.92014 1.8704L6.49976 5.55866C6.64296 5.76341 6.94592 5.76341 7.08912 5.55866Z" fill="#87909F" />
                                            </svg>
                                        </div>
                                    </th>
                                    <th className='text-[14px] py-2 capitalize'>
                                        <MutedText className='capitalize'>24h High</MutedText>
                                    </th>

                                    <th className='text-[14px] py-2 capitalize'>
                                        <MutedText className='capitalize'>24h Vol</MutedText>
                                    </th>
                                    <th className='text-[14px] py-2 capitalize flex items-center'>
                                        <MutedText>24h Vol</MutedText>
                                        <div className="">
                                            {/* up arrow */}
                                            <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.08912 1.60131L9.66874 5.28956C9.83563 5.52817 9.66507 5.85601 9.37407 5.85601H4.21482C3.92381 5.85601 3.75326 5.52817 3.92014 5.28957L6.49976 1.60131C6.64296 1.39657 6.94592 1.39657 7.08912 1.60131Z" fill="#87909F" />
                                            </svg>

                                            {/* down arrow */}
                                            <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.08912 5.55866L9.66874 1.8704C9.83563 1.6318 9.66507 1.30396 9.37407 1.30396H4.21482C3.92381 1.30396 3.75326 1.6318 3.92014 1.8704L6.49976 5.55866C6.64296 5.76341 6.94592 5.76341 7.08912 5.55866Z" fill="#87909F" />
                                            </svg>
                                        </div>
                                    </th>
                                    <th className='text-[14px] py-2 capitalize'>
                                        <div className="flex justify-end">
                                            <MutedText>Action</MutedText>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.from({ length: 30 }).map((_, i) => (<tr key={i} className='last:border-none border-b border-xMutedText/20'>
                                    <td className='font-medium py-2 text-[13px] capitalize pl-2 flex items-center gap-2'>
                                        <div className="">
                                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.7363 6.37627L11.7776 5.65627L9.56009 1.16252C9.50785 1.05861 9.42776 0.971273 9.32877 0.910243C9.22977 0.849213 9.11576 0.816895 8.99946 0.816895C8.88317 0.816895 8.76916 0.849213 8.67017 0.910243C8.57117 0.971273 8.49108 1.05861 8.43884 1.16252L6.22259 5.65502L1.26384 6.37502C1.14815 6.3916 1.03942 6.4403 0.950012 6.51557C0.860602 6.59085 0.794091 6.68968 0.75803 6.80086C0.72197 6.91203 0.717806 7.03109 0.74601 7.14451C0.774215 7.25794 0.833659 7.36118 0.917591 7.44252L4.50509 10.94L3.65759 15.8788C3.63798 15.9936 3.65087 16.1117 3.6948 16.2196C3.73872 16.3275 3.81194 16.421 3.90619 16.4895C4.00044 16.558 4.11196 16.5988 4.22817 16.6073C4.34438 16.6158 4.46064 16.5916 4.56384 16.5375L9.00009 14.2063L13.4351 16.5388C13.5383 16.5929 13.6546 16.617 13.7708 16.6085C13.887 16.6001 13.9985 16.5593 14.0927 16.4908C14.187 16.4222 14.2602 16.3288 14.3041 16.2208C14.3481 16.1129 14.361 15.9949 14.3413 15.88L13.4938 10.9413L17.0813 7.44377C17.1657 7.36272 17.2256 7.25957 17.2542 7.1461C17.2827 7.03263 17.2788 6.91342 17.2428 6.80209C17.2068 6.69076 17.1402 6.59179 17.0507 6.51649C16.9611 6.44119 16.8522 6.3926 16.7363 6.37627Z" fill="#4B4E52" />
                                            </svg>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Image src="/new-7/marketListIcon.png" alt="" width={30} height={30} />
                                            <div className="">
                                                <div className="uppercase flex items-center text-[14px] font-semibold">
                                                    <span>ETH</span>
                                                    <MutedText className='text-[14px]'>/USDT</MutedText>
                                                </div>
                                                <MutedText>ETH token</MutedText>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='font-medium py-2 text-[13px] capitalize'>
                                        <p className=''>2.8305</p>
                                        <MutedText>$ 2.82</MutedText>
                                    </td>
                                    <td className='font-medium py-2 text-[13px] capitalize'>
                                        <p className='text-[#FF4761]'>-0.49%</p>
                                        {/* for green */}
                                        <p className='text-[#0BBA74]'>+0.63%</p>
                                    </td>
                                    <td className='font-medium py-2 text-[13px] capitalize'>
                                        <MutedText>2.8674</MutedText>
                                    </td>
                                    <td className='font-medium py-2 text-[13px] capitalize'>
                                        <MutedText>2.8294</MutedText>
                                    </td>
                                    <td className='font-medium py-2 text-[13px] capitalize flex items-center gap-1'>
                                        <MutedText>1.81M</MutedText>
                                    </td>
                                    <td className='font-medium py-2 text-[13px] capitalize'>
                                        <div className="flex items-center gap-2 justify-end">
                                            <button>
                                                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.3428 13.605C10.3428 13.0872 10.7625 12.6675 11.2803 12.6675H17.8428C18.3606 12.6675 18.7803 13.0872 18.7803 13.605C18.7803 14.1228 18.3606 14.5425 17.8428 14.5425H11.2803C10.7625 14.5425 10.3428 14.1228 10.3428 13.605Z" fill="#87909F" />
                                                    <path d="M11.2803 16.4175C10.7625 16.4175 10.3428 16.8372 10.3428 17.355C10.3428 17.8728 10.7625 18.2925 11.2803 18.2925H15.9678C16.4856 18.2925 16.9053 17.8728 16.9053 17.355C16.9053 16.8372 16.4856 16.4175 15.9678 16.4175H11.2803Z" fill="#87909F" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.4678 22.98C23.4678 24.0155 22.6283 24.855 21.5928 24.855H8.46777C7.43224 24.855 6.59277 24.0155 6.59277 22.98V7.97998C6.59277 6.94445 7.43224 6.10498 8.46777 6.10498H21.5928C22.6283 6.10498 23.4678 6.94445 23.4678 7.97998V22.98ZM8.46777 22.98V7.97998H21.5928V22.98H8.46777Z" fill="#87909F" />
                                                </svg>
                                            </button>
                                            <Button variant='outline' className='px-3 py-1 w-fit'>Trade</Button>
                                        </div>
                                    </td>
                                </tr>))}
                            </tbody>
                        </table>
                    </div>

                    {/* pagnation */}
                    <div className="flex justify-center mt-5">
                        <Pagination
                            currentPage={curPage}
                            onPageChange={onPageChange}
                            totalPages={45}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}
