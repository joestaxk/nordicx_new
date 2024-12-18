"use client";
import TextInputUi from '../ui/input-ui'
import MutedText from '../ui/muted-text'
import HorizontalScrollUi from '../ui/horizontalScrollUi';

export default function SearchPairs() {
    return (
        <div className='bg-xDark x3xl:w-[330px] lg:w-[285px] w-full h-full p-2'>
            <div className="">
                <TextInputUi
                    type='text'
                    inputPlaceholder={(<div className='flex items-center gap-1'>
                        <svg width="17" height="24" viewBox="0 0 17 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7917 14.8686C9.88866 15.5706 8.7538 15.9887 7.52133 15.9887C4.57581 15.9887 2.18799 13.6009 2.18799 10.6554C2.18799 7.70983 4.57581 5.32202 7.52133 5.32202C10.4669 5.32202 12.8547 7.70983 12.8547 10.6554C12.8547 11.8878 12.4366 13.0227 11.7346 13.9258L15.3261 17.5173C15.5864 17.7776 15.5864 18.1998 15.3261 18.4601C15.0658 18.7204 14.6436 18.7204 14.3833 18.4601L10.7917 14.8686ZM11.5214 10.6554C11.5214 12.8645 9.73046 14.6554 7.52133 14.6554C5.31219 14.6554 3.52133 12.8645 3.52133 10.6554C3.52133 8.44621 5.31219 6.65535 7.52133 6.65535C9.73046 6.65535 11.5214 8.44621 11.5214 10.6554Z" fill="#6E7583" />
                        </svg>
                        <MutedText className="">Search</MutedText>
                    </div>)} inputName={''} conversionType={''} />
            </div>
            <HorizontalScrollUi className="border-b flex gap-3 xsm:w-full w-[350px] font-medium overflow-x-auto border-gray-50/10">
                <button className='py-2'>
                    <MutedText className=''>Favourites</MutedText>
                </button>

                {/* active */}
                <button className='py-2 border-xBlueColor border-b-2'>
                    <MutedText className='!text-white'>USDT</MutedText>
                </button>

                <button className='py-2'>
                    <MutedText className='uppercase'>USDC</MutedText>
                </button>

                <button className='py-2'>
                    <MutedText className='uppercase'>ETH</MutedText>
                </button>

                <button className='py-2'>
                    <MutedText className='uppercase'>BTC</MutedText>
                </button>
                <button className='py-2'>
                    <MutedText className='uppercase'>USDC</MutedText>
                </button>

                <button className='py-2'>
                    <MutedText className='uppercase'>ETH</MutedText>
                </button>

                <button className='py-2'>
                    <MutedText className='uppercase'>BTC</MutedText>
                </button>
                <button className='py-2'>
                    <MutedText className='uppercase'>USDC</MutedText>
                </button>

                <button className='py-2'>
                    <MutedText className='uppercase'>ETH</MutedText>
                </button>

                <button className='py-2'>
                    <MutedText className='uppercase'>BTC</MutedText>
                </button>
            </HorizontalScrollUi>
            <HorizontalScrollUi className='whitespace-nowrap overflow-x-auto py-2  xsm:w-full w-[350px]'>
                <button className='px-2 hover:bg-[#B4BFD61F] hover:rounded-sm'>
                    <MutedText className=''>All</MutedText>
                </button>

                {/* active */}
                <button className='px-2 rounded-sm bg-[#B4BFD61F] hover:bg-[#B4BFD61F] hover:rounded-sm'>
                    <MutedText className='!text-white'>Main</MutedText>
                </button>
                <button className='px-2 hover:bg-[#B4BFD61F] hover:rounded-sm'>
                    <MutedText className=''>All</MutedText>
                </button>
                <button className='px-2 hover:bg-[#B4BFD61F] hover:rounded-sm'>
                    <MutedText className=''>All</MutedText>
                </button>
                <button className='px-2 hover:bg-[#B4BFD61F] hover:rounded-sm'>
                    <MutedText className=''>All</MutedText>
                </button>
                <button className='px-2 hover:bg-[#B4BFD61F] hover:rounded-sm'>
                    <MutedText className=''>All</MutedText>
                </button>
                <button className='px-2 hover:bg-[#B4BFD61F] hover:rounded-sm'>
                    <MutedText className=''>All</MutedText>
                </button>
                <button className='px-2 hover:bg-[#B4BFD61F] hover:rounded-sm'>
                    <MutedText className=''>All</MutedText>
                </button>
                <button className='px-2 hover:bg-[#B4BFD61F] hover:rounded-sm'>
                    <MutedText className=''>All</MutedText>
                </button> <button className='px-2 hover:bg-[#B4BFD61F] hover:rounded-sm'>
                    <MutedText className=''>All</MutedText>
                </button> <button className='px-2 hover:bg-[#B4BFD61F] hover:rounded-sm'>
                    <MutedText className=''>All</MutedText>
                </button>
            </HorizontalScrollUi>
            <div className="x2xl:h-[400px] lg:h-[700px] h-[300px] overflow-y-auto">
                <table className='w-full text-left table-fixed'>
                    <thead className='sticky top-0 z-10 bg-xDark'>
                        <tr>
                            <th className='w-1/2 font-medium text-[13px] capitalize'>
                                <MutedText className='flex items-center gap-1'>
                                    Pair
                                    <button className="flex gap-[0.08rem] flex-col">

                                        <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.08912 0.601308L6.66874 4.28956C6.83563 4.52817 6.66507 4.85601 6.37407 4.85601H1.21482C0.923808 4.85601 0.753262 4.52817 0.920139 4.28957L3.49976 0.601308C3.64296 0.396569 3.94592 0.396569 4.08912 0.601308Z" fill="#87909F" />
                                        </svg>
                                        <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.08912 4.54871L6.66874 0.860453C6.83563 0.621853 6.66507 0.294006 6.37407 0.294006H1.21482C0.923808 0.294006 0.753262 0.621853 0.920139 0.860453L3.49976 4.54871C3.64296 4.75346 3.94592 4.75346 4.08912 4.54871Z" fill="#87909F" />
                                        </svg>
                                    </button>
                                </MutedText>
                            </th>
                            <th className='w-1/2 font-medium text-[13px] capitalize'>
                                <MutedText className='flex items-center gap-1'>
                                    Price
                                    <button className="flex gap-[0.08rem] flex-col">

                                        <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.08912 0.601308L6.66874 4.28956C6.83563 4.52817 6.66507 4.85601 6.37407 4.85601H1.21482C0.923808 4.85601 0.753262 4.52817 0.920139 4.28957L3.49976 0.601308C3.64296 0.396569 3.94592 0.396569 4.08912 0.601308Z" fill="#87909F" />
                                        </svg>
                                        <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.08912 4.54871L6.66874 0.860453C6.83563 0.621853 6.66507 0.294006 6.37407 0.294006H1.21482C0.923808 0.294006 0.753262 0.621853 0.920139 0.860453L3.49976 4.54871C3.64296 4.75346 3.94592 4.75346 4.08912 4.54871Z" fill="#87909F" />
                                        </svg>
                                    </button>
                                </MutedText>
                            </th>
                            <th className='w-1/3 font-medium text-[13px] capitalize'>
                                <MutedText className='flex items-center gap-1'>
                                    Change
                                    <button className="flex gap-[0.08rem] flex-col">

                                        <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.08912 0.601308L6.66874 4.28956C6.83563 4.52817 6.66507 4.85601 6.37407 4.85601H1.21482C0.923808 4.85601 0.753262 4.52817 0.920139 4.28957L3.49976 0.601308C3.64296 0.396569 3.94592 0.396569 4.08912 0.601308Z" fill="#87909F" />
                                        </svg>
                                        <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.08912 4.54871L6.66874 0.860453C6.83563 0.621853 6.66507 0.294006 6.37407 0.294006H1.21482C0.923808 0.294006 0.753262 0.621853 0.920139 0.860453L3.49976 4.54871C3.64296 4.75346 3.94592 4.75346 4.08912 4.54871Z" fill="#87909F" />
                                        </svg>
                                    </button>
                                </MutedText>
                            </th>
                        </tr>
                    </thead>
                    {/* demo it */}
                    <tbody>
                        {
                            Array.from({ length: 20 }).map((_, index) => (
                                <tr className='relative' key={index}>
                                    <td>
                                        <p className='text-[12px] capitalize flex items-center gap-[0.07rem]'>
                                            <span className='text-white'>MX</span>
                                            <MutedText>/ USDT</MutedText>
                                        </p>
                                        <p className='text-[12px] capitalize flex items-center'>
                                            <MutedText>Mx token</MutedText>
                                        </p>
                                    </td>
                                    <td>
                                        <p className='text-[12px] text-white'>2.8315</p>
                                        <MutedText className='text-[12px] text-white'>2.8315</MutedText>
                                    </td>
                                    <td>
                                        <p className='text-[12px] text-xRedColor'>0.06%</p>
                                        <MutedText className='text-[12px] text-white'>445.65Ms</MutedText>
                                    </td>
                                    <td style={{ width: (((Math.floor(1 + Math.random() * 100))) / 20) * 100 }} className={`absolute right-0 h-full bg-gradient-to-l from-xGreenColor/20 to-xGreenColor/5`}></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
