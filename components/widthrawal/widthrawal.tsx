"use client";
import React from 'react'
import MutedText from '../ui/muted-text'
import Link from 'next/link'
import Image from 'next/image';


export default function Withdrawal() {
    return (
        <div className='py-[3rem] bg-xDark text-white flex justify-center'>
            <div className="w-[1200px] pt-[1rem] text-[13px] max-w-full px-5">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <button className='w-8 h-8 rounded-full flex items-center justify-center border border-xMutedText/30 '>
                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.575 6.17239H4.42422L9.54605 1.63237L8.24498 0.487061L0.914978 6.98511L8.24498 13.4822L9.53689 12.3369L4.42422 7.79782H15.575V6.17331V6.17239Z" fill="#F2F4F6" />
                            </svg>
                        </button>
                        <div className="text-[16px] font-semibold">Withdraw</div>
                    </div>

                    <Link href={"#"} className='text-xBlueThickColor'>How To Withdraw?</Link>
                </div>

                <div className="w-full flex lg:flex-row flex-col gap-12 bg-[#111214] mt-5 rounded-sm px-5 py-5">
                    <div className="lg:w-1/2 flex justify-center">
                        <form action="" className='w-[500px] space-y-3'>
                            <div className="space-y-5">
                                <div className="flex gap-2 items-center">
                                    <div className="w-5 h-5 bg-xBlueThickColor flex justify-center items-center rounded-full">
                                        <svg width="12" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_1_27)">
                                                <path d="M14.328 1.13555C14.4266 1.20732 14.5101 1.29782 14.5737 1.40187C14.6374 1.50592 14.6799 1.62148 14.6989 1.74196C14.7178 1.86244 14.7129 1.98548 14.6843 2.10405C14.6557 2.22262 14.6041 2.3344 14.5323 2.43301L7.10232 12.6492C7.02579 12.7543 6.92804 12.8422 6.8154 12.9072C6.70277 12.9721 6.57775 13.0127 6.44845 13.0262C6.31914 13.0398 6.18843 13.0261 6.06476 12.9859C5.9411 12.9458 5.82724 12.8801 5.73056 12.7932L1.08682 8.61383C0.909374 8.4476 0.804196 8.21841 0.793869 7.97549C0.783542 7.73256 0.86889 7.49528 1.03158 7.31459C1.19428 7.1339 1.42134 7.02421 1.66402 7.00909C1.90669 6.99397 2.14561 7.07461 2.32948 7.23371L6.207 10.723L13.0305 1.3408C13.1023 1.24219 13.1928 1.15869 13.2968 1.09505C13.4009 1.03142 13.5164 0.988898 13.6369 0.969925C13.7574 0.950951 13.8804 0.955894 13.999 0.984471C14.1176 1.01305 14.2294 1.0647 14.328 1.13648V1.13555Z" fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_27">
                                                    <rect width="13.99" height="13.99" fill="white" transform="translate(0.75)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="text-[15px] font-semibold">Select Crypto</div>
                                </div>

                                <div className="sm:ml-[2rem] mt-2 space-y-1">
                                    <label htmlFor="crypto" className='text-xMutedText text-[13px]'>Crypto</label>
                                    <select name="select_crypto" id="crypto" className='bg-[#B4BFD61F] px-2 rounded-sm h-10 w-full'>
                                        <option value="usdt">USDT tether</option>
                                        <option value="usdt">USDT tether</option>
                                    </select>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <div className="w-5 h-5 bg-xBlueThickColor flex justify-center items-center rounded-full">
                                        <svg width="12" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_1_27)">
                                                <path d="M14.328 1.13555C14.4266 1.20732 14.5101 1.29782 14.5737 1.40187C14.6374 1.50592 14.6799 1.62148 14.6989 1.74196C14.7178 1.86244 14.7129 1.98548 14.6843 2.10405C14.6557 2.22262 14.6041 2.3344 14.5323 2.43301L7.10232 12.6492C7.02579 12.7543 6.92804 12.8422 6.8154 12.9072C6.70277 12.9721 6.57775 13.0127 6.44845 13.0262C6.31914 13.0398 6.18843 13.0261 6.06476 12.9859C5.9411 12.9458 5.82724 12.8801 5.73056 12.7932L1.08682 8.61383C0.909374 8.4476 0.804196 8.21841 0.793869 7.97549C0.783542 7.73256 0.86889 7.49528 1.03158 7.31459C1.19428 7.1339 1.42134 7.02421 1.66402 7.00909C1.90669 6.99397 2.14561 7.07461 2.32948 7.23371L6.207 10.723L13.0305 1.3408C13.1023 1.24219 13.1928 1.15869 13.2968 1.09505C13.4009 1.03142 13.5164 0.988898 13.6369 0.969925C13.7574 0.950951 13.8804 0.955894 13.999 0.984471C14.1176 1.01305 14.2294 1.0647 14.328 1.13648V1.13555Z" fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_27">
                                                    <rect width="13.99" height="13.99" fill="white" transform="translate(0.75)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="text-[15px] font-semibold">Withdraw To</div>
                                </div>

                                <div className="sm:ml-[2rem] mt-2">
                                    <div className="">
                                        <div className="border-b border-xMutedText/20 flex gap-5">
                                            <button className='border-b-2 border-xBlueThickColor pb-2 capitalize'>Address</button>
                                            <button className='pb-2 capitalize text-xMutedText'>MEXC User</button>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between py-3">
                                                <MutedText className="">Address</MutedText>
                                                <Link href="#" className='text-xBlueThickColor text-[13px]'>Manage Addressess</Link>
                                            </div>

                                            <div className="relative bg-[#B4BFD61F] px-2 rounded-sm h-10 w-full">
                                                <input type="text" className='h-full outline-none w-full bg-transparent' placeholder='Please enter your withdrawal address' />
                                                <span className='absolute top-2 right-2 mr-1'>
                                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.3269 7.6051C6.3269 7.4261 6.39801 7.25443 6.52459 7.12786C6.65116 7.00128 6.82283 6.93018 7.00183 6.93018H12.4165C12.5955 6.93018 12.7672 7.00128 12.8938 7.12786C13.0203 7.25443 13.0915 7.4261 13.0915 7.6051C13.0915 7.7841 13.0203 7.95577 12.8938 8.08234C12.7672 8.20892 12.5955 8.28003 12.4165 8.28003H7.00183C6.82283 8.28003 6.65116 8.20892 6.52459 8.08234C6.39801 7.95577 6.3269 7.7841 6.3269 7.6051ZM6.3269 10.6522C6.3269 10.4732 6.39801 10.3015 6.52459 10.1749C6.65116 10.0483 6.82283 9.97724 7.00183 9.97724H10.5294C10.7084 9.97724 10.8801 10.0483 11.0067 10.1749C11.1333 10.3015 11.2044 10.4732 11.2044 10.6522C11.2044 10.8312 11.1333 11.0028 11.0067 11.1294C10.8801 11.256 10.7084 11.3271 10.5294 11.3271H7.00183C6.82283 11.3271 6.65116 11.256 6.52459 11.1294C6.39801 11.0028 6.3269 10.8312 6.3269 10.6522Z" fill="#87909F" />
                                                        <path d="M6.02983 15.78H13.2298C13.5879 15.78 13.9313 15.6377 14.1844 15.3846C14.4376 15.1314 14.5798 14.788 14.5798 14.43V5.42998C14.5798 5.07194 14.4376 4.72856 14.1844 4.47539C13.9313 4.22221 13.5879 4.07998 13.2298 4.07998H6.02983C5.67179 4.07998 5.32841 4.22221 5.07524 4.47539C4.82207 4.72856 4.67983 5.07194 4.67983 5.42998V14.43C4.67983 14.788 4.82207 15.1314 5.07524 15.3846C5.32841 15.6377 5.67179 15.78 6.02983 15.78ZM13.2298 17.13H6.02983C5.67527 17.13 5.32417 17.0601 4.99659 16.9245C4.66901 16.7888 4.37136 16.5899 4.12065 16.3392C3.86993 16.0884 3.67105 15.7908 3.53536 15.4632C3.39967 15.1356 3.32983 14.7845 3.32983 14.43V5.42998C3.32983 4.7139 3.6143 4.02714 4.12065 3.52079C4.62699 3.01444 5.31375 2.72998 6.02983 2.72998H13.2298C13.9459 2.72998 14.6327 3.01444 15.139 3.52079C15.6454 4.02714 15.9298 4.7139 15.9298 5.42998V14.43C15.9298 15.1461 15.6454 15.8328 15.139 16.3392C14.6327 16.8455 13.9459 17.13 13.2298 17.13Z" fill="#87909F" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="space-y-3 mt-3">
                                            <div className="flex items-center justify-between">
                                                <MutedText className="">Network</MutedText>
                                            </div>

                                            <div className="relative bg-[#B4BFD61F] px-2 rounded-sm h-10 w-full">
                                                <input type="text" className='h-full outline-none w-full bg-transparent' placeholder='Please select a withdrawal address' />
                                                <span className='absolute top-2 right-2 mr-1'>
                                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.3269 7.6051C6.3269 7.4261 6.39801 7.25443 6.52459 7.12786C6.65116 7.00128 6.82283 6.93018 7.00183 6.93018H12.4165C12.5955 6.93018 12.7672 7.00128 12.8938 7.12786C13.0203 7.25443 13.0915 7.4261 13.0915 7.6051C13.0915 7.7841 13.0203 7.95577 12.8938 8.08234C12.7672 8.20892 12.5955 8.28003 12.4165 8.28003H7.00183C6.82283 8.28003 6.65116 8.20892 6.52459 8.08234C6.39801 7.95577 6.3269 7.7841 6.3269 7.6051ZM6.3269 10.6522C6.3269 10.4732 6.39801 10.3015 6.52459 10.1749C6.65116 10.0483 6.82283 9.97724 7.00183 9.97724H10.5294C10.7084 9.97724 10.8801 10.0483 11.0067 10.1749C11.1333 10.3015 11.2044 10.4732 11.2044 10.6522C11.2044 10.8312 11.1333 11.0028 11.0067 11.1294C10.8801 11.256 10.7084 11.3271 10.5294 11.3271H7.00183C6.82283 11.3271 6.65116 11.256 6.52459 11.1294C6.39801 11.0028 6.3269 10.8312 6.3269 10.6522Z" fill="#87909F" />
                                                        <path d="M6.02983 15.78H13.2298C13.5879 15.78 13.9313 15.6377 14.1844 15.3846C14.4376 15.1314 14.5798 14.788 14.5798 14.43V5.42998C14.5798 5.07194 14.4376 4.72856 14.1844 4.47539C13.9313 4.22221 13.5879 4.07998 13.2298 4.07998H6.02983C5.67179 4.07998 5.32841 4.22221 5.07524 4.47539C4.82207 4.72856 4.67983 5.07194 4.67983 5.42998V14.43C4.67983 14.788 4.82207 15.1314 5.07524 15.3846C5.32841 15.6377 5.67179 15.78 6.02983 15.78ZM13.2298 17.13H6.02983C5.67527 17.13 5.32417 17.0601 4.99659 16.9245C4.66901 16.7888 4.37136 16.5899 4.12065 16.3392C3.86993 16.0884 3.67105 15.7908 3.53536 15.4632C3.39967 15.1356 3.32983 14.7845 3.32983 14.43V5.42998C3.32983 4.7139 3.6143 4.02714 4.12065 3.52079C4.62699 3.01444 5.31375 2.72998 6.02983 2.72998H13.2298C13.9459 2.72998 14.6327 3.01444 15.139 3.52079C15.6454 4.02714 15.9298 4.7139 15.9298 5.42998V14.43C15.9298 15.1461 15.6454 15.8328 15.139 16.3392C14.6327 16.8455 13.9459 17.13 13.2298 17.13Z" fill="#87909F" />
                                                    </svg>

                                                </span>
                                            </div>
                                        </div>


                                        <div className="flex mt-5 flex-wrap gap-2 justify-between">
                                            <div className="w-1/3">
                                                <MutedText>USDT Account Equity</MutedText>
                                                <p>449.35082543 USDT</p>
                                            </div>
                                            <div className="w-1/3">
                                                <MutedText>Minimum Withdrawal Amount</MutedText>
                                                <p>2 USDT</p>
                                            </div>
                                            <div className="w-1/3">
                                                <MutedText>Withdrawal Fee</MutedText>
                                                <p>1 ~ 4 USDT</p>
                                            </div>
                                            <div className="w-1/3">
                                                <MutedText>24H Withdrawal Limit</MutedText>
                                                <p>0/30 BTC</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* MEXC User */}
                                </div>
                                <div className="flex gap-2 items-center">
                                    <div className="w-5 h-5 bg-[#222429] flex justify-center items-center rounded-full">
                                        <svg width="12" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_1_27)">
                                                <path d="M14.328 1.13555C14.4266 1.20732 14.5101 1.29782 14.5737 1.40187C14.6374 1.50592 14.6799 1.62148 14.6989 1.74196C14.7178 1.86244 14.7129 1.98548 14.6843 2.10405C14.6557 2.22262 14.6041 2.3344 14.5323 2.43301L7.10232 12.6492C7.02579 12.7543 6.92804 12.8422 6.8154 12.9072C6.70277 12.9721 6.57775 13.0127 6.44845 13.0262C6.31914 13.0398 6.18843 13.0261 6.06476 12.9859C5.9411 12.9458 5.82724 12.8801 5.73056 12.7932L1.08682 8.61383C0.909374 8.4476 0.804196 8.21841 0.793869 7.97549C0.783542 7.73256 0.86889 7.49528 1.03158 7.31459C1.19428 7.1339 1.42134 7.02421 1.66402 7.00909C1.90669 6.99397 2.14561 7.07461 2.32948 7.23371L6.207 10.723L13.0305 1.3408C13.1023 1.24219 13.1928 1.15869 13.2968 1.09505C13.4009 1.03142 13.5164 0.988898 13.6369 0.969925C13.7574 0.950951 13.8804 0.955894 13.999 0.984471C14.1176 1.01305 14.2294 1.0647 14.328 1.13648V1.13555Z" fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_27">
                                                    <rect width="13.99" height="13.99" fill="white" transform="translate(0.75)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="text-[15px] font-semibold text-[#535963]">Withdraw Amount</div>

                                </div>

                            </div>
                        </form>
                    </div>

                    <div className="lg:w-1/2 flex justify-center">
                        <div className="w-[400px]">
                            <h3 className='border-l-4 border-xBlueThickColor px-1 text-[15px] capitalize font-semibold'>Withdrawal Notification</h3>
                            <div className="space-y-3 pl-4 mt-3 text-[14px]">
                                <div className="">
                                    Enjoy 0 transaction fees <MutedText>and fast speed for withdrawals
                                        made to your MEXC custodial wallet.</MutedText>
                                </div>
                                <MutedText>
                                    This address only supports deposit of USDT assets. Do
                                    not deposit other assets to this address as the assets
                                    will not be credited or recoverable.
                                </MutedText>
                                <MutedText>
                                    MEXC is currently processing all related business
                                    matters in response to the latest compliance rules
                                    launched by the Korean platforms. <span className='text-[#EB771A]'>
                                        Please do not
                                        withdraw to Upbit or Coinone platforms until the
                                        process is completed
                                    </span>, otherwise you may lose your
                                    assets.
                                </MutedText>

                                <MutedText>
                                    Please do not withdraw funds to an ICO address or for
                                    crowdfunding. MEXC will not be responsible for
                                    distributing any future tokens you may receive.
                                </MutedText>
                            </div>

                            <div className="flex justify-between items-center mt-8">
                                <h3 className='border-l-4 border-xBlueThickColor px-1 text-[15px] capitalize font-semibold'>Withdrawal FAQ</h3>
                                <Link href={"#"} className='text-xBlueThickColor'>View More</Link>
                            </div>

                            <ul className='mt-6 pl-4 space-y-3'>
                                <li className='flex gap-2 items-center'>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.0834 17.5846H3.41675C2.75371 17.5846 2.11782 17.3212 1.64898 16.8524C1.18014 16.3836 0.916748 15.7477 0.916748 15.0846V1.7513C0.916748 1.53029 1.00455 1.31833 1.16083 1.16205C1.31711 1.00577 1.52907 0.917969 1.75008 0.917969H13.4167C13.6378 0.917969 13.8497 1.00577 14.006 1.16205C14.1623 1.31833 14.2501 1.53029 14.2501 1.7513V11.7513H16.7501C17.2103 11.7513 17.5834 12.1244 17.5834 12.5846V15.0846C17.5834 15.7477 17.32 16.3836 16.8512 16.8524C16.3823 17.3212 15.7465 17.5846 15.0834 17.5846ZM14.2501 13.418V15.0846C14.2501 15.3056 14.3379 15.5176 14.4942 15.6739C14.6504 15.8302 14.8624 15.918 15.0834 15.918C15.3044 15.918 15.5164 15.8302 15.6727 15.6739C15.829 15.5176 15.9167 15.3056 15.9167 15.0846V13.418H14.2501ZM12.5834 15.918V2.58464H2.58341V15.0846C2.58341 15.3056 2.67121 15.5176 2.82749 15.6739C2.98377 15.8302 3.19573 15.918 3.41675 15.918H12.5834ZM4.25008 5.91797C4.25008 5.45773 4.62318 5.08464 5.08341 5.08464H10.0834C10.5437 5.08464 10.9167 5.45773 10.9167 5.91797C10.9167 6.37821 10.5437 6.7513 10.0834 6.7513H5.08341C4.62318 6.7513 4.25008 6.37821 4.25008 5.91797ZM4.25008 9.2513C4.25008 8.79106 4.62318 8.41797 5.08341 8.41797H10.0834C10.5437 8.41797 10.9167 8.79106 10.9167 9.2513C10.9167 9.7115 10.5437 10.0846 10.0834 10.0846H5.08341C4.62318 10.0846 4.25008 9.7115 4.25008 9.2513ZM4.25008 12.5846C4.25008 12.1244 4.62318 11.7513 5.08341 11.7513H7.58341C8.04365 11.7513 8.41675 12.1244 8.41675 12.5846C8.41675 13.0449 8.04365 13.418 7.58341 13.418H5.08341C4.62318 13.418 4.25008 13.0449 4.25008 12.5846Z" fill="#6E7583" />
                                    </svg>

                                    <Link href={"#"} className='text-xMutedText'>How to Withdraw on MEXC?</Link>
                                </li>
                                <li className='flex gap-2 items-center'>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.0834 17.5846H3.41675C2.75371 17.5846 2.11782 17.3212 1.64898 16.8524C1.18014 16.3836 0.916748 15.7477 0.916748 15.0846V1.7513C0.916748 1.53029 1.00455 1.31833 1.16083 1.16205C1.31711 1.00577 1.52907 0.917969 1.75008 0.917969H13.4167C13.6378 0.917969 13.8497 1.00577 14.006 1.16205C14.1623 1.31833 14.2501 1.53029 14.2501 1.7513V11.7513H16.7501C17.2103 11.7513 17.5834 12.1244 17.5834 12.5846V15.0846C17.5834 15.7477 17.32 16.3836 16.8512 16.8524C16.3823 17.3212 15.7465 17.5846 15.0834 17.5846ZM14.2501 13.418V15.0846C14.2501 15.3056 14.3379 15.5176 14.4942 15.6739C14.6504 15.8302 14.8624 15.918 15.0834 15.918C15.3044 15.918 15.5164 15.8302 15.6727 15.6739C15.829 15.5176 15.9167 15.3056 15.9167 15.0846V13.418H14.2501ZM12.5834 15.918V2.58464H2.58341V15.0846C2.58341 15.3056 2.67121 15.5176 2.82749 15.6739C2.98377 15.8302 3.19573 15.918 3.41675 15.918H12.5834ZM4.25008 5.91797C4.25008 5.45773 4.62318 5.08464 5.08341 5.08464H10.0834C10.5437 5.08464 10.9167 5.45773 10.9167 5.91797C10.9167 6.37821 10.5437 6.7513 10.0834 6.7513H5.08341C4.62318 6.7513 4.25008 6.37821 4.25008 5.91797ZM4.25008 9.2513C4.25008 8.79106 4.62318 8.41797 5.08341 8.41797H10.0834C10.5437 8.41797 10.9167 8.79106 10.9167 9.2513C10.9167 9.7115 10.5437 10.0846 10.0834 10.0846H5.08341C4.62318 10.0846 4.25008 9.7115 4.25008 9.2513ZM4.25008 12.5846C4.25008 12.1244 4.62318 11.7513 5.08341 11.7513H7.58341C8.04365 11.7513 8.41675 12.1244 8.41675 12.5846C8.41675 13.0449 8.04365 13.418 7.58341 13.418H5.08341C4.62318 13.418 4.25008 13.0449 4.25008 12.5846Z" fill="#6E7583" />
                                    </svg>

                                    <Link href={"#"} className='text-xMutedText'>Haven't Received Withdrawal?</Link>
                                </li>
                                <li className='flex gap-2 items-center'>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.0834 17.5846H3.41675C2.75371 17.5846 2.11782 17.3212 1.64898 16.8524C1.18014 16.3836 0.916748 15.7477 0.916748 15.0846V1.7513C0.916748 1.53029 1.00455 1.31833 1.16083 1.16205C1.31711 1.00577 1.52907 0.917969 1.75008 0.917969H13.4167C13.6378 0.917969 13.8497 1.00577 14.006 1.16205C14.1623 1.31833 14.2501 1.53029 14.2501 1.7513V11.7513H16.7501C17.2103 11.7513 17.5834 12.1244 17.5834 12.5846V15.0846C17.5834 15.7477 17.32 16.3836 16.8512 16.8524C16.3823 17.3212 15.7465 17.5846 15.0834 17.5846ZM14.2501 13.418V15.0846C14.2501 15.3056 14.3379 15.5176 14.4942 15.6739C14.6504 15.8302 14.8624 15.918 15.0834 15.918C15.3044 15.918 15.5164 15.8302 15.6727 15.6739C15.829 15.5176 15.9167 15.3056 15.9167 15.0846V13.418H14.2501ZM12.5834 15.918V2.58464H2.58341V15.0846C2.58341 15.3056 2.67121 15.5176 2.82749 15.6739C2.98377 15.8302 3.19573 15.918 3.41675 15.918H12.5834ZM4.25008 5.91797C4.25008 5.45773 4.62318 5.08464 5.08341 5.08464H10.0834C10.5437 5.08464 10.9167 5.45773 10.9167 5.91797C10.9167 6.37821 10.5437 6.7513 10.0834 6.7513H5.08341C4.62318 6.7513 4.25008 6.37821 4.25008 5.91797ZM4.25008 9.2513C4.25008 8.79106 4.62318 8.41797 5.08341 8.41797H10.0834C10.5437 8.41797 10.9167 8.79106 10.9167 9.2513C10.9167 9.7115 10.5437 10.0846 10.0834 10.0846H5.08341C4.62318 10.0846 4.25008 9.7115 4.25008 9.2513ZM4.25008 12.5846C4.25008 12.1244 4.62318 11.7513 5.08341 11.7513H7.58341C8.04365 11.7513 8.41675 12.1244 8.41675 12.5846C8.41675 13.0449 8.04365 13.418 7.58341 13.418H5.08341C4.62318 13.418 4.25008 13.0449 4.25008 12.5846Z" fill="#6E7583" />
                                    </svg>

                                    <Link href={"#"} className='text-xMutedText'>Withdrawn to the wrong address or filled in the
                                        wrong Memo/Tag?</Link>
                                </li>

                                <li className='flex justify-between items-center bg-[#222429] p-3 rounded-sm'>
                                    <div className="flex items-center gap-2">
                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_8_182)">
                                                <path d="M10.2501 2.83403C6.1591 2.83403 2.84269 6.15043 2.84269 10.2414C2.84269 14.3324 6.1591 17.6489 10.2501 17.6489C14.3411 17.6489 17.6575 14.3324 17.6575 10.2414C17.6575 9.73006 18.072 9.31551 18.5835 9.31551C19.0948 9.31551 19.5093 9.73006 19.5093 10.2414C19.5093 15.3552 15.3639 19.5007 10.2501 19.5007C5.13636 19.5007 0.990845 15.3552 0.990845 10.2414C0.990845 5.12769 5.13636 0.982178 10.2501 0.982178C12.131 0.982178 13.8818 1.54369 15.3427 2.50737V1.9081C15.3427 1.39672 15.7572 0.982178 16.2686 0.982178C16.78 0.982178 17.1946 1.39672 17.1946 1.9081V5.14885C17.1946 5.66022 16.78 6.07477 16.2686 6.07477H13.4908C12.9795 6.07477 12.5649 5.66022 12.5649 5.14885C12.5649 4.63747 12.9795 4.22292 13.4908 4.22292H14.5695C13.3533 3.34835 11.8623 2.83403 10.2501 2.83403Z" fill="#87909F" />
                                                <path d="M11.176 7.92665C11.176 7.41528 10.7615 7.00073 10.2501 7.00073C9.7387 7.00073 9.32416 7.41528 9.32416 7.92665V11.6439L12.9527 14.2357C13.3688 14.5329 13.9471 14.4365 14.2443 14.0204C14.5415 13.6042 14.4451 13.026 14.029 12.7288L11.176 10.6909V7.92665Z" fill="#87909F" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_8_182">
                                                    <rect width="20" height="20" fill="white" transform="translate(0.25 0.23999)" />
                                                </clipPath>
                                            </defs>
                                        </svg>

                                        View all deposit & withdrawal status
                                    </div>

                                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4331 6.90672H0.593323V5.57338H11.4331L7.44299 1.36544L8.41046 0.447998L13.9027 6.24005L8.41046 12.0321L7.44299 11.1146L11.4331 6.90672Z" fill="#87909F" />
                                    </svg>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>

                <div className="w-full  gap-12 bg-[#111214] mt-5 rounded-sm py-5 pt-2 sm:px-4 px-2">
                    <div className="w-full flex justify-between items-center px-3 border-b border-xMutedText/20 py-2">
                        <div className="text-[16px] font-semibold">Recent Withdrawals</div>

                        <Link href={"#"} className='text-xBlueThickColor'>History</Link>
                    </div>

                    <div className="h-[450px] overflow-y-auto overflow-x-auto">
                        <table className='lg:w-full w-[900px] text-left'>
                            <thead className='sticky top-0 z-10 border-b border-xMutedText/20 bg-[#111214]'>
                                <tr>
                                    <th className='text-[14px] py-2 capitalize pl-2'>
                                        <MutedText className='capitalize'>Crypto</MutedText>
                                    </th>
                                    <th className='text-[14px] py-2 capitalize'>
                                        <MutedText>Time</MutedText>
                                    </th>
                                    <th className='text-[14px] py-2 capitalize'>
                                        <MutedText>Status</MutedText>
                                    </th>
                                    <th className='text-[14px] py-2 capitalize'>
                                        <MutedText className='capitalize'>Amount</MutedText>
                                    </th>
                                    <th className='text-[14px] py-2 capitalize'>
                                        <MutedText className='capitalize'>Withdrawal Address</MutedText>
                                    </th>
                                    <th className='text-[14px] py-2 capitalize'>
                                        <MutedText>Fee</MutedText>
                                    </th>
                                    <th className='text-[14px] py-2 capitalize'>
                                        <MutedText>Balance</MutedText>
                                    </th>
                                    <th className='text-[14px] py-2 capitalize'>
                                        <MutedText>Action</MutedText>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.from({ length: 20 }).map(() => (<tr className='last:border-none border-b border-xMutedText/20'>
                                    <td className='font-medium py-2 text-[13px] capitalize pl-2'>
                                        <p className=''>USDC</p>
                                    </td>
                                    <td className='font-medium py-2 text-[13px] capitalize'>
                                        <p className=''>2022-05-05 23:58:28</p>
                                    </td>
                                    <td className='font-medium py-2 text-[13px] capitalize'>
                                        <p className=''>Withdrawal Successful</p>
                                    </td>
                                    <td className='font-medium py-2 text-[13px] capitalize'>
                                        <p className=''>0.13</p>
                                    </td>
                                    <td className='font-medium py-2 text-[13px] capitalize flex items-center gap-1'>
                                        <span className=''>0xd7d...2a8e</span>
                                        <button>
                                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.93284 3.46789C9.82918 1.93236 12.6106 2.22476 14.1457 4.12064C14.5108 4.57148 14.7836 5.08983 14.9484 5.6461C15.1132 6.20236 15.1668 6.78564 15.1061 7.36259C15.0455 7.93959 14.8718 8.49899 14.5949 9.00879C14.318 9.51865 13.9434 9.96892 13.4925 10.334L12.412 11.2089C12.1206 11.4449 11.693 11.3999 11.4571 11.1085C11.2212 10.8171 11.2662 10.3896 11.5576 10.1537L12.6381 9.27865C12.9504 9.02579 13.2098 8.71392 13.4015 8.36085C13.5932 8.00772 13.7135 7.62032 13.7555 7.22075C13.7975 6.82116 13.7604 6.41721 13.6462 6.03197C13.5321 5.64673 13.3432 5.28774 13.0904 4.97549C12.8376 4.66325 12.5257 4.40386 12.1726 4.21215C11.8195 4.02043 11.4321 3.90014 11.0325 3.85814C10.6329 3.81615 10.229 3.85326 9.84371 3.96737C9.45851 4.08149 9.09951 4.27036 8.78724 4.52321L7.80791 5.31625C7.51651 5.55223 7.08896 5.50727 6.85302 5.21582C6.6171 4.92442 6.66206 4.49696 6.95343 4.26101L7.93284 3.46789ZM4.8595 5.95708C5.15092 5.72112 5.57845 5.7661 5.81439 6.05753C6.05031 6.34895 6.00534 6.77643 5.71394 7.01236L4.5911 7.92152C4.27885 8.17439 4.01946 8.48625 3.82775 8.83932C3.63603 9.19245 3.51574 9.57985 3.47374 9.97945C3.43174 10.379 3.46886 10.783 3.58298 11.1682C3.69709 11.5535 3.88596 11.9125 4.13882 12.2247C4.39167 12.5369 4.70354 12.7963 5.05664 12.9881C5.40974 13.1797 5.79714 13.3001 6.19672 13.3421C6.59631 13.3841 7.00026 13.3469 7.38551 13.2328C7.77071 13.1187 8.12971 12.9298 8.44198 12.677L9.48244 11.8345C9.77391 11.5985 10.2014 11.6435 10.4374 11.9349C10.6733 12.2263 10.6283 12.6537 10.337 12.8897L9.29638 13.7323C7.40051 15.2674 4.61858 14.975 3.08349 13.0791C1.5484 11.1832 1.84082 8.40132 3.7367 6.86619L4.8595 5.95708Z" fill="#6E7583" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2538 6.42107C10.5418 6.18106 10.9698 6.21989 11.2099 6.50781C11.4501 6.79583 11.4112 7.22404 11.1231 7.46411L7.15837 10.7682C6.87038 11.0082 6.44236 10.9693 6.20236 10.6813C5.96238 10.3933 6.00127 9.96537 6.28924 9.72537L10.2538 6.42107Z" fill="#6E7583" />
                                            </svg>
                                        </button>
                                        <button>
                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.55997 0.599854C2.02953 0.599854 1.52083 0.810567 1.14575 1.18564C0.77068 1.56071 0.559967 2.06942 0.559967 2.59985V7.93319C0.559967 8.46359 0.77068 8.97232 1.14575 9.34739C1.52083 9.72245 2.02953 9.93319 2.55997 9.93319H3.22663V10.5999C3.22663 11.7045 4.12207 12.5999 5.22663 12.5999H10.56C11.6646 12.5999 12.56 11.7045 12.56 10.5999V5.26652C12.56 4.16195 11.6646 3.26652 10.56 3.26652H9.8933V2.59985C9.8933 2.06942 9.68257 1.56071 9.3075 1.18564C8.93243 0.810567 8.4237 0.599854 7.8933 0.599854H2.55997ZM8.55997 3.26652V2.59985C8.55997 2.42304 8.4897 2.25347 8.3647 2.12845C8.2397 2.00343 8.0701 1.93319 7.8933 1.93319H2.55997C2.38315 1.93319 2.21359 2.00343 2.08856 2.12845C1.96354 2.25347 1.8933 2.42304 1.8933 2.59985V7.93319C1.8933 8.10999 1.96354 8.27959 2.08856 8.40459C2.21359 8.52959 2.38315 8.59985 2.55997 8.59985H3.22663V5.26652C3.22663 4.16195 4.12207 3.26652 5.22663 3.26652H8.55997ZM4.55997 10.5999C4.55997 10.9681 4.85845 11.2665 5.22663 11.2665H10.56C10.9282 11.2665 11.2266 10.9681 11.2266 10.5999V5.26652C11.2266 4.89833 10.9282 4.59985 10.56 4.59985H5.22663C4.85845 4.59985 4.55997 4.89833 4.55997 5.26652V10.5999Z" fill="#6E7583" />
                                            </svg>
                                        </button>
                                    </td>
                                    <td className='font-medium py-2 text-[13px] capitalize'>
                                        <p className=''>0.0013</p>
                                    </td>
                                    <td className='font-medium py-2 text-[13px] capitalize'>
                                        <p className=''>0.23253268</p>
                                    </td>
                                    <td className='font-medium py-2 text-[13px]'>
                                        <button className='text-xBlueThickColor capitalize'>more</button>
                                    </td>
                                </tr>))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
