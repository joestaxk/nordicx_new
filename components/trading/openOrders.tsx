import React from 'react'
import MutedText from '../ui/muted-text'
import Image from 'next/image'

export default function OpenOrders() {
    return (
        <div className='w-full bg-xDark p-3'>
            <div className="flex justify-between gap-3 whitespace-nowrap overflow-auto">
                <div className="flex items-center gap-3">
                    {/* implement the active class */}
                    <button className='py-2 border-xBlueColor border-b-2'>
                        <MutedText className='!text-white'>Open Orders (0)</MutedText>
                    </button>

                    {/* add the function to this tabs and */}
                    <button className='py-2'>
                        <MutedText className=''>Order Histoy</MutedText>
                    </button>

                    <button className='py-2'>
                        <MutedText className=''>Trade History</MutedText>
                    </button>


                    <button className='py-2'>
                        <MutedText >Open Positions(3)</MutedText>
                    </button>


                    <button className='py-2'>
                        <MutedText className=''>Order Histoy</MutedText>
                    </button>


                </div>
                <div className="flex items-center gap-1">
                    <input
                        type="checkbox"
                        className='
                    appearance-none
                    h-4 
                    w-4 
                    border 
                    border-gray-100/50
                    rounded-sm
                    checked:accent-white checked:appearance-auto'

                        name="hide_pairs"
                        id="hide_pairs"
                    />
                    <label htmlFor="hide_pairs">
                        <MutedText>Hide other pairs</MutedText>
                    </label>
                </div>
            </div>

            <div className="mt-5 h-[300px] overflow-y-auto">
                <table className='w-full text-left table-fixed  overflow-y-auto overflow-x-auto'>
                    <thead className='sticky top-0 bg-xDark left-0 z-10 whitespace-nowrap'>
                        <tr className='flex gap-3 items-center'>
                            <th className='w-1/2 font-medium text-[13px] capitalize'>
                                <button>
                                    <MutedText className='flex items-center gap-1'>
                                        Trading Pair
                                    </MutedText>
                                </button>
                            </th>
                            <th className='w-1/2 font-medium text-[13px] capitalize'>
                                <button>
                                    <MutedText className='flex items-center gap-1'>
                                        Time
                                        <button className="flex gap-[0.08rem] flex-col">

                                            <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.08912 0.601308L6.66874 4.28956C6.83563 4.52817 6.66507 4.85601 6.37407 4.85601H1.21482C0.923808 4.85601 0.753262 4.52817 0.920139 4.28957L3.49976 0.601308C3.64296 0.396569 3.94592 0.396569 4.08912 0.601308Z" fill="#87909F" />
                                            </svg>
                                            <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.08912 4.54871L6.66874 0.860453C6.83563 0.621853 6.66507 0.294006 6.37407 0.294006H1.21482C0.923808 0.294006 0.753262 0.621853 0.920139 0.860453L3.49976 4.54871C3.64296 4.75346 3.94592 4.75346 4.08912 4.54871Z" fill="#87909F" />
                                            </svg>
                                        </button>
                                    </MutedText>
                                </button>
                            </th>
                            <th className='w-1/2 font-medium text-[13px] capitalize'>
                                <button>
                                    <MutedText className='flex items-center gap-1'>
                                        type
                                        <button className="flex gap-[0.08rem] flex-col">
                                            <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.08912 4.54871L6.66874 0.860453C6.83563 0.621853 6.66507 0.294006 6.37407 0.294006H1.21482C0.923808 0.294006 0.753262 0.621853 0.920139 0.860453L3.49976 4.54871C3.64296 4.75346 3.94592 4.75346 4.08912 4.54871Z" fill="#87909F" />
                                            </svg>
                                        </button>
                                    </MutedText>
                                </button>
                            </th>
                            <th className='w-1/2 font-medium text-[13px] capitalize'>
                                <button>

                                    <MutedText className='flex items-center gap-1'>
                                        side
                                        <button className="flex gap-[0.08rem] flex-col">
                                            <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.08912 4.54871L6.66874 0.860453C6.83563 0.621853 6.66507 0.294006 6.37407 0.294006H1.21482C0.923808 0.294006 0.753262 0.621853 0.920139 0.860453L3.49976 4.54871C3.64296 4.75346 3.94592 4.75346 4.08912 4.54871Z" fill="#87909F" />
                                            </svg>
                                        </button>
                                    </MutedText>
                                </button>
                            </th>
                            <th className='w-1/2 font-medium text-[13px] capitalize'>
                                <button>
                                    <MutedText className='flex items-center gap-1'>
                                        price
                                        <button className="flex gap-[0.08rem] flex-col">

                                            <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.08912 0.601308L6.66874 4.28956C6.83563 4.52817 6.66507 4.85601 6.37407 4.85601H1.21482C0.923808 4.85601 0.753262 4.52817 0.920139 4.28957L3.49976 0.601308C3.64296 0.396569 3.94592 0.396569 4.08912 0.601308Z" fill="#87909F" />
                                            </svg>
                                            <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.08912 4.54871L6.66874 0.860453C6.83563 0.621853 6.66507 0.294006 6.37407 0.294006H1.21482C0.923808 0.294006 0.753262 0.621853 0.920139 0.860453L3.49976 4.54871C3.64296 4.75346 3.94592 4.75346 4.08912 4.54871Z" fill="#87909F" />
                                            </svg>
                                        </button>
                                    </MutedText>
                                </button>
                            </th>
                            <th className='w-1/2 font-medium text-[13px] capitalize'>
                                <button>
                                    <MutedText className='flex items-center gap-1'>
                                        quantity
                                        <button className="flex gap-[0.08rem] flex-col">

                                            <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.08912 0.601308L6.66874 4.28956C6.83563 4.52817 6.66507 4.85601 6.37407 4.85601H1.21482C0.923808 4.85601 0.753262 4.52817 0.920139 4.28957L3.49976 0.601308C3.64296 0.396569 3.94592 0.396569 4.08912 0.601308Z" fill="#87909F" />
                                            </svg>
                                            <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.08912 4.54871L6.66874 0.860453C6.83563 0.621853 6.66507 0.294006 6.37407 0.294006H1.21482C0.923808 0.294006 0.753262 0.621853 0.920139 0.860453L3.49976 4.54871C3.64296 4.75346 3.94592 4.75346 4.08912 4.54871Z" fill="#87909F" />
                                            </svg>
                                        </button>
                                    </MutedText>
                                </button>
                            </th>
                            <th className='w-1/2 font-medium text-[13px] capitalize'>

                                <button>
                                    <MutedText className='flex items-center gap-1'>
                                        order amount
                                        <button className="flex gap-[0.08rem] flex-col">

                                            <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.08912 0.601308L6.66874 4.28956C6.83563 4.52817 6.66507 4.85601 6.37407 4.85601H1.21482C0.923808 4.85601 0.753262 4.52817 0.920139 4.28957L3.49976 0.601308C3.64296 0.396569 3.94592 0.396569 4.08912 0.601308Z" fill="#87909F" />
                                            </svg>
                                            <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.08912 4.54871L6.66874 0.860453C6.83563 0.621853 6.66507 0.294006 6.37407 0.294006H1.21482C0.923808 0.294006 0.753262 0.621853 0.920139 0.860453L3.49976 4.54871C3.64296 4.75346 3.94592 4.75346 4.08912 4.54871Z" fill="#87909F" />
                                            </svg>
                                        </button>
                                    </MutedText>
                                </button>
                            </th>
                            <th className='w-1/2 font-medium text-[13px] capitalize'>

                                <button>
                                    <MutedText className='flex items-center gap-1'>
                                        TP/SL
                                    </MutedText>
                                </button>
                            </th>
                            <th className='w-1/2 font-medium text-[13px] capitalize'>

                                <button>
                                    <MutedText className='flex items-center gap-1'>
                                        filled
                                        <button className="flex gap-[0.08rem] flex-col">

                                            <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.08912 0.601308L6.66874 4.28956C6.83563 4.52817 6.66507 4.85601 6.37407 4.85601H1.21482C0.923808 4.85601 0.753262 4.52817 0.920139 4.28957L3.49976 0.601308C3.64296 0.396569 3.94592 0.396569 4.08912 0.601308Z" fill="#87909F" />
                                            </svg>
                                            <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.08912 4.54871L6.66874 0.860453C6.83563 0.621853 6.66507 0.294006 6.37407 0.294006H1.21482C0.923808 0.294006 0.753262 0.621853 0.920139 0.860453L3.49976 4.54871C3.64296 4.75346 3.94592 4.75346 4.08912 4.54871Z" fill="#87909F" />
                                            </svg>
                                        </button>
                                    </MutedText>
                                </button>
                            </th>

                            <th className='w-1/2 font-medium text-[13px] capitalize'>

                                <button>
                                    <MutedText className='flex items-center gap-1'>
                                        trigger condition
                                        <button className="flex gap-[0.08rem] flex-col">

                                            <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.08912 0.601308L6.66874 4.28956C6.83563 4.52817 6.66507 4.85601 6.37407 4.85601H1.21482C0.923808 4.85601 0.753262 4.52817 0.920139 4.28957L3.49976 0.601308C3.64296 0.396569 3.94592 0.396569 4.08912 0.601308Z" fill="#87909F" />
                                            </svg>
                                            <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.08912 4.54871L6.66874 0.860453C6.83563 0.621853 6.66507 0.294006 6.37407 0.294006H1.21482C0.923808 0.294006 0.753262 0.621853 0.920139 0.860453L3.49976 4.54871C3.64296 4.75346 3.94592 4.75346 4.08912 4.54871Z" fill="#87909F" />
                                            </svg>
                                        </button>
                                    </MutedText>
                                </button>
                            </th>

                            <th className='w-1/2 font-medium text-[13px] capitalize'>

                                <button className='!disabled:text-xMutedText/50' disabled={true}>
                                    <MutedText className='flex items-center gap-1'>
                                        Cancel All
                                        <button className="flex gap-[0.08rem] flex-col">

                                            <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.08912 0.601308L6.66874 4.28956C6.83563 4.52817 6.66507 4.85601 6.37407 4.85601H1.21482C0.923808 4.85601 0.753262 4.52817 0.920139 4.28957L3.49976 0.601308C3.64296 0.396569 3.94592 0.396569 4.08912 0.601308Z" fill="#87909F" />
                                            </svg>
                                            <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.08912 4.54871L6.66874 0.860453C6.83563 0.621853 6.66507 0.294006 6.37407 0.294006H1.21482C0.923808 0.294006 0.753262 0.621853 0.920139 0.860453L3.49976 4.54871C3.64296 4.75346 3.94592 4.75346 4.08912 4.54871Z" fill="#87909F" />
                                            </svg>
                                        </button>
                                    </MutedText>
                                </button>
                            </th>
                        </tr>
                    </thead>
                    {/* demo it */}
                    <tbody>
                        {/* no data condition */}
                        <div className="absolute w-full left-0 flex flex-col items-center text-white justify-center text-[12px]">
                            <Image
                                className=""
                                src="/new-7/file.svg"
                                alt="Vercel logomark"
                                width={200}
                                height={200}
                            />
                            No Data
                        </div>
                        {/* data */}
                        {
                            Array.from({ length: 0 }).map((_, index) => (
                                <tr className='relative' key={index}>
                                    <td>
                                        <p className='text-[12px] capitalize flex items-center gap-[0.07rem]'>
                                            <span className='text-white'>{index}</span>
                                            <MutedText>/ USDT</MutedText>
                                        </p>
                                    </td>
                                    {/* TIME */}
                                    <td>
                                        <p className='text-[12px] text-white text-white'>03:15:45</p>
                                    </td>
                                    {/* TYPE */}
                                    <td>
                                        <p className='text-[12px] text-white'>BUY</p>
                                    </td>
                                    {/* SIDE */}
                                    <td>
                                        <p className='text-[12px] text-white'>LEFT</p>
                                    </td>
                                    {/* PRICE */}
                                    <td>
                                        <p className='text-[12px] text-white'>BUY</p>
                                    </td>
                                    {/* QUALITY */}
                                    <td>
                                        <p className='text-[12px] text-white'>1456</p>
                                    </td>
                                    {/* ORDER AMOUNT */}
                                    <td>
                                        <p className='text-[12px] text-white'>3,523</p>
                                    </td>
                                    {/* TP/SL */}
                                    <td>
                                        <p className='text-[12px] text-white'>SL</p>
                                    </td>
                                    {/* filled */}
                                    <td>
                                        <p className='text-[12px] text-white'>SL</p>
                                    </td>
                                    {/* TRIGGER CONDITION */}
                                    <td>
                                        <p className='text-[12px] text-white'>SL</p>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
