"use client";
import React from 'react'
import MutedText from '../ui/muted-text'

export default function StatusHead() {
    return (
        <div className='w-full bg-xDark divide-x-[.02rem] divide-gray-50/20 py-3 px-3 flex gap-3 items-center'>
            <div className="flex items-center gap-2">
                <button>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.4389 6.497L10.4719 5.921L8.69788 2.326C8.65608 2.24287 8.59201 2.173 8.51282 2.12418C8.43362 2.07535 8.34241 2.0495 8.24938 2.0495C8.15634 2.0495 8.06513 2.07535 7.98594 2.12418C7.90674 2.173 7.84267 2.24287 7.80088 2.326L6.02788 5.92L2.06088 6.496C1.96832 6.50927 1.88134 6.54822 1.80981 6.60844C1.73829 6.66866 1.68508 6.74773 1.65623 6.83667C1.62738 6.92561 1.62405 7.02086 1.64661 7.1116C1.66918 7.20233 1.71673 7.28493 1.78388 7.35L4.65388 10.148L3.97588 14.099C3.96019 14.1909 3.9705 14.2853 4.00564 14.3717C4.04078 14.458 4.09936 14.5328 4.17476 14.5876C4.25016 14.6424 4.33937 14.675 4.43234 14.6818C4.52531 14.6886 4.61832 14.6693 4.70088 14.626L8.24988 12.761L11.7979 14.627C11.8804 14.6703 11.9734 14.6896 12.0664 14.6828C12.1594 14.676 12.2486 14.6434 12.324 14.5886C12.3994 14.5338 12.458 14.459 12.4931 14.3727C12.5283 14.2863 12.5386 14.1919 12.5229 14.1L11.8449 10.149L14.7149 7.351C14.7824 7.28616 14.8303 7.20364 14.8531 7.11286C14.876 7.02209 14.8728 6.92672 14.844 6.83766C14.8152 6.74859 14.762 6.66941 14.6903 6.60918C14.6187 6.54894 14.5316 6.51006 14.4389 6.497Z" fill="#6E7583" />
                    </svg>
                </button>
                <div className="">
                    <h3 className='text-[16px] text-white font-semibold'>Ethereum</h3>
                    <MutedText className='text-[13px]'>ETH/USDT</MutedText>
                </div>
            </div>

            {/* fix this so it can scroll */}
            <div className="flex  items-center gap-5 pl-3  overflow-x-auto  whitespace-nowrap 
                    w-0
                    flex-1">
                <div className="flex shrink-0 gap-5 items-center">
                    <div className="shrink-0">
                        <div className="flex gap-4 items-center">
                            <h3 className='text-[16px] text-white font-semibold'>2,950.00</h3>
                            <p className='text-xGreenColor text-[12px]'>+0.83%</p>
                        </div>
                        <MutedText className='text-[13px]'>$2,848.49</MutedText>
                    </div>

                    <div className="flex shrink-0 gap-3 items-center">
                        <div className="shrink-0">
                            <MutedText className='text-[13px]'>24h High</MutedText>
                            <p className='text-white text-[13px]'>3,033.08</p>
                        </div>
                        <div className="shrink-0">
                            <MutedText className='text-[13px]'>24h Low</MutedText>
                            <p className='text-white text-[13px]'>2,874.08</p>
                        </div>
                        <div className="shrink-0">
                            <MutedText className='text-[13px]'>24h Volume (ETH)</MutedText>
                            <p className='text-white text-[13px]'>60.29K</p>
                        </div>

                        <div className="shrink-0">
                            <MutedText className='text-[13px]'>24h Amount (ETH)</MutedText>
                            <p className='text-white text-[13px]'>178.38M</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
