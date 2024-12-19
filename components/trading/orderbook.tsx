"use client";
import React, { useState } from 'react'
import MutedText from '../ui/muted-text'

export default function Orderbook() {
    const [tab, setTabs] = useState(3)
    return (
        <div className='w-full h-full bg-xDark space-y-3'>
            <div className="text-[15px] text-white p-2">Order Book</div>

            <div className="flex justify-between items-center px-2">
                <div className="items-center flex xsm:idden x2xl:flex">
                    <button onClick={() => setTabs(3)} className={`${tab == 3 ? "bg-[#B4BFD61F]" : ""} rounded-sm`}>
                        <svg width="25" height="25" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.6357 5.88094C14.6357 6.25639 14.3313 6.56076 13.9558 6.56076H4.52553C4.15007 6.56076 3.8457 6.25639 3.8457 5.88094C3.8457 5.50548 4.15007 5.20111 4.52553 5.20111H13.9558C14.3313 5.20111 14.6357 5.50548 14.6357 5.88094Z" fill="#EE2C5A" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.6357 14.039C14.6357 14.4144 14.3313 14.7188 13.9558 14.7188H4.52553C4.15007 14.7188 3.8457 14.4144 3.8457 14.039C3.8457 13.6635 4.15007 13.3592 4.52553 13.3592H13.9558C14.3313 13.3592 14.6357 13.6635 14.6357 14.039Z" fill="#16B979" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.3225 8.60021C12.3225 8.97563 12.0182 9.27996 11.6428 9.27996H4.52545C4.15003 9.27996 3.8457 8.97563 3.8457 8.60021C3.8457 8.2248 4.15003 7.92047 4.52545 7.92047H11.6428C12.0182 7.92047 12.3225 8.2248 12.3225 8.60021Z" fill="#EE2C5A" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.3225 11.3195C12.3225 11.695 12.0182 11.9993 11.6428 11.9993H4.52545C4.15003 11.9993 3.8457 11.695 3.8457 11.3195C3.8457 10.9442 4.15003 10.6398 4.52545 10.6398H11.6428C12.0182 10.6398 12.3225 10.9442 12.3225 11.3195Z" fill="#16B979" />
                        </svg>
                    </button>

                    <button onClick={() => setTabs(2)} className={`${tab == 2 ? "bg-[#B4BFD61F]" : ""} rounded-sm`}>
                        <svg width="25" height="25" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.6357 14.039C14.6357 13.6636 14.3313 13.3592 13.9558 13.3592H4.52553C4.15007 13.3592 3.8457 13.6636 3.8457 14.039C3.8457 14.4144 4.15007 14.7188 4.52553 14.7188H13.9558C14.3313 14.7188 14.6357 14.4144 14.6357 14.039Z" fill="#0BBA74" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.3225 11.3196C12.3225 10.9442 12.0182 10.6398 11.6428 10.6398H4.52545C4.15003 10.6398 3.8457 10.9442 3.8457 11.3196C3.8457 11.695 4.15003 11.9993 4.52545 11.9993H11.6428C12.0182 11.9993 12.3225 11.695 12.3225 11.3196Z" fill="#0BBA74" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.3225 8.60022C12.3225 8.22481 12.0182 7.92047 11.6428 7.92047H4.52545C4.15003 7.92047 3.8457 8.22481 3.8457 8.60022C3.8457 8.97563 4.15003 9.27997 4.52545 9.27997H11.6428C12.0182 9.27997 12.3225 8.97563 12.3225 8.60022Z" fill="#0BBA74" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.3225 5.88092C12.3225 5.50551 12.0182 5.20117 11.6428 5.20117H4.52545C4.15003 5.20117 3.8457 5.50551 3.8457 5.88092C3.8457 6.25633 4.15003 6.56066 4.52545 6.56066H11.6428C12.0182 6.56066 12.3225 6.25633 12.3225 5.88092Z" fill="#0BBA74" />
                        </svg>
                    </button>

                    <button onClick={() => setTabs(1)} className={`${tab == 1 ? "bg-[#B4BFD61F]" : ""} rounded-sm`}>
                        <svg width="25" height="25" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.6357 5.88087C14.6357 6.25633 14.3313 6.5607 13.9558 6.5607H4.52553C4.15007 6.5607 3.8457 6.25633 3.8457 5.88087C3.8457 5.50542 4.15007 5.20105 4.52553 5.20105H13.9558C14.3313 5.20105 14.6357 5.50542 14.6357 5.88087Z" fill="#FF4761" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.3225 8.60015C12.3225 8.97556 12.0182 9.2799 11.6428 9.2799H4.52545C4.15003 9.2799 3.8457 8.97556 3.8457 8.60015C3.8457 8.22474 4.15003 7.92041 4.52545 7.92041H11.6428C12.0182 7.92041 12.3225 8.22474 12.3225 8.60015Z" fill="#FF4761" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.3225 11.3195C12.3225 11.6948 12.0182 11.9992 11.6428 11.9992H4.52545C4.15003 11.9992 3.8457 11.6948 3.8457 11.3195C3.8457 10.9441 4.15003 10.6397 4.52545 10.6397H11.6428C12.0182 10.6397 12.3225 10.9441 12.3225 11.3195Z" fill="#FF4761" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.3225 14.039C12.3225 14.4143 12.0182 14.7187 11.6428 14.7187H4.52545C4.15003 14.7187 3.8457 14.4143 3.8457 14.039C3.8457 13.6635 4.15003 13.3592 4.52545 13.3592H11.6428C12.0182 13.3592 12.3225 13.6635 12.3225 14.039Z" fill="#FF4761" />
                        </svg>
                    </button>
                </div>

                <div className=" flex items-center gap-2">
                    <select name="" className='text-[15px] text-white bg-[#18191C]' id="">
                        <option value="">0.01</option>
                        <option value="">0.02</option>
                        <option value="">0.03</option>
                    </select>
                    <button>
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5225 7.32825C10.5225 8.52773 9.5538 9.50012 8.35883 9.50012C7.16385 9.50012 6.19513 8.52773 6.19513 7.32825M10.5225 7.32825C10.5225 6.12875 9.5538 5.15637 8.35883 5.15637C7.16385 5.15637 6.19513 6.12875 6.19513 7.32825M10.5225 7.32825H16.4602M6.19513 7.32825H4.03955M9.97733 14.716C9.97733 13.5165 10.946 12.5441 12.141 12.5441C13.336 12.5441 14.3047 13.5165 14.3047 14.716M9.97733 14.716C9.97733 15.9155 10.946 16.8878 12.141 16.8878C13.336 16.8878 14.3047 15.9155 14.3047 14.716M9.97733 14.716H4.03963M14.3047 14.716H16.4603" stroke="#87909F" stroke-width="1.38847" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="h-full w-full x2xl:block xsm:flex block gap-1">
                <div className="x2xl:w-auto xsm:w-1/2 w-full">
                    {/*  sell table book */}
                    {(tab == 3 || tab == 1) && <div className={`${(tab == 1) ? "max-h-[800px]" : "max-h-[450px]"} overflow-y-auto`}>
                        <table className='w-full text-left'>
                            <thead className='sticky top-0 z-10 bg-xDark'>
                                <tr>
                                    <th className='w-1/2 font-medium text-[13px] capitalize'>
                                        <MutedText className='capitalize'>Price(USDT)</MutedText>
                                    </th>
                                    <th className='w-1/2 font-medium text-[13px] capitalize'>
                                        <MutedText>amount(ETH)</MutedText>
                                    </th>
                                    <th className='w-1/3 font-medium text-[13px] capitalize'>
                                        <MutedText>total(USDT)</MutedText>
                                    </th>
                                </tr>
                            </thead>

                            {/* demo it */}
                            <tbody>
                                {
                                    Array.from({ length: 40 }).map((_, index) => (
                                        <tr className='relative' key={index}>
                                            <td className='w-1/2 pl-2'>
                                                <p className='text-[12px] text-xRedColor'>2,945.80</p>
                                            </td>
                                            <td className='w-1/2'>
                                                <p className='text-[12px] text-white'>17.52719</p>
                                            </td>
                                            <td className='w-1/3 pr-5'>
                                                <p className='text-[12px] text-white'>17.52719</p>
                                            </td>
                                            <td style={{ width: (((Math.floor(1 + Math.random() * 100))) / 20) * 100, background: "rgba(255,71,97,0.2)"}} className={`absolute right-0 z-0 h-full`}></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>}

                    {/* total sell divider */}
                    {(tab == 3 || tab == 1) && <div className="flex py-4 px-2 items-center ">
                        <div className=" text-xRedColor inline-flex ">
                            <p className='font-semibold text-xl'>2,950.00</p>
                            <svg width="23" height="23" className='translate-y-4' viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.99674 2.97998V12.4266L11.3901 10.04L12.3301 10.98L8.33008 14.98L4.33008 10.98L5.27008 10.04L7.66341 12.4266V2.97998H8.99674Z" fill="#FF4761" />
                            </svg>
                        </div>

                        <MutedText className='text-[14px]'>≈ $2,948.57</MutedText>
                    </div>}
                </div>
                {/* buy table book */}
                <div className="x2xl:w-auto xsm:w-1/2 w-full">
                    {(tab == 3 || tab == 2) && <div className={`${(tab == 2) ? "max-h-[800px]" : "max-h-[450px]"} overflow-y-auto`}>
                        <table className='w-full text-left'>
                           { (tab == 2) && <thead className='sticky top-0 z-10 bg-xDark'>
                                <tr>
                                    <th className='w-1/2 font-medium text-[13px] capitalize'>
                                        <MutedText>price(USDT)</MutedText>
                                    </th>
                                    <th className='w-1/2 font-medium text-[13px] capitalize'>
                                        <MutedText>amount(ETH)</MutedText>
                                    </th>
                                    <th className='w-1/3 font-medium text-[13px] capitalize'>
                                        <MutedText>total(USDT)</MutedText>
                                    </th>
                                </tr>
                            </thead>}
                            {/* demo it */}
                            <tbody >
                                {
                                    Array.from({ length: 40 }).map((_, index) => (
                                        <tr className='relative p-4 ' key={index}>
                                            <td className='w-1/2 pl-2 z-1'>
                                                <p className='text-[12px] text-xGreenColor'>2,945.80</p>
                                            </td>
                                            <td className='w-1/2 z-1'>
                                                <p className='text-[12px] text-white'>17.52719</p>
                                            </td>
                                            <td className='w-1/3 pr-5 z-1'>
                                                <p className='text-[12px] text-white'>17.52719</p>
                                            </td>

                                            <td style={{ width: (((Math.floor(1 + Math.random() * 100))) / 20) * 100, background: "rgba(11,186,116,0.2)"}} className={`absolute right-0 z-[0] h-full`}></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>}
                </div>

            </div>
        </div>
    )
}
