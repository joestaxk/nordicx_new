import Image from 'next/image'
import React from 'react'

export default function GlobalConsumption() {
    return (
        <div className='flex justify-center'>
            <div className="w-[1200px] p-4 mt-5">
                <div className="xxs:flex justify-between items-center mb-4 ">
                    <h2 className='text-white md:text-[1.6rem] text-[1.3rem] font-semibold'>Global Consumption</h2>
                    <button className='md:w-[150px] bg-[#0F1E3B] flex justify-center md:p-3 px-4 py-2 md:text-base text-[13px] text-xBlueThickColor rounded-full items-center gap-2'>
                        <span>Apply Now</span>
                        <svg width="12" height="5" viewBox="0 0 12 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5073 4.81543H0.0698242V3.37012H9.70264L8.64014 0.456055H9.94482L11.5073 4.58887V4.81543Z" fill="#4281FF" />
                        </svg>
                    </button>
                </div>

                <div className="flex items-center xl:gap-10 gap-5 flex-col md:flex-row">
                    <div className="md:w-1/2 w-full">
                        <div className="bg-xBlueColor p-3 xsm:flex items-start justify-between w-full md:h-[230px] rounded-xl">
                            <div className="mt-5 text-white font-semibold xsm:w-[300px]">
                                <p>
                                    Use it for your online
                                </p>
                                <p>
                                    shopping worldwide
                                </p>
                            </div>
                            <div className="w-full flex justify-end">
                                <Image src="/new-7/consumeOne.png" alt='' width={250} height={250} className='object-cover lg:w-[250px]' />
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2 w-full">

                        <div className="bg-[#203164] p-3 xsm:flex items-start justify-between w-full md:h-[230px] rounded-xl">
                            <div className="xsm:w-[300px] mt-5  text-white font-semibold">
                                <p>
                                    Top up with your crypto balance
                                </p>
                                <p>
                                    anytime
                                </p>
                            </div>
                            <div className="w-full flex justify-end">
                                <Image src="/new-7/consumeTwo.png" className='object-cover' alt='' width={200} height={200} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
