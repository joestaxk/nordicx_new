"use client";
import React, { useState } from 'react'
import MutedText from '../ui/muted-text'
import Link from 'next/link'
import Button from '../ui/button';

// GRAPHICAL TUTORIAL TEXT
const howDoesItWork = [
    {
        title: "Complete Advanced KYC",
        desc: "You need to complete advanced KYC before you can use fiat services",
        actionText: "Verify Now",
        actionLink: "#"
    },
    {
        title: "Complete Card Linking",
        desc: "When using credit/debit card services, you need to link your bank card first before performing transactions",
        actionText: "Verify Now",
        actionLink: "#"
    },
    {
        title: "Place an Order",
        desc: "Obtain quotes from the system and follow the trading process to make a transaction",
        actionText: "Verify Now",
        actionLink: "#"
    },
    {
        title: "Transaction Completed",
        desc: "Congratulations on your successful transaction. You can now trade in the futures market!",
        actionText: "Future",
        actionLink: "#"
    },
]
export default function BuyCrypto() {
    const [accordion, setAccordion] = useState({})
    return (
        <div className='py-[3rem] bg-xDark text-white flex justify-center'>
            <div className="w-[1200px] lg:pt-[5rem] pt-[2rem] flex text-[13px] max-w-full lg:flex-row flex-col gap-12 px-5">
                <div className="lg:w-1/2 border-dotted lg:border-r-[0.1rem] border-xMutedText flex justify-center">
                    <form action="" className='w-[350px] space-y-3'>
                        <div className="">
                            <label htmlFor="amount">Amount</label>
                            <div className="relative bg-[#B4BFD61F] p-1 h-[32px] rounded-sm flex items-center">
                                <input type="text" name="amount" id="amount" className='text-white bg-transparent outline-none w-full pl-1 pr-[4rem]' />
                                <select className="absolute right-1 top-1 bg-[#33373D] text-white rounded-sm p-1 text-[13px] outline-none" name="amount" id="">
                                    <option value="USD">USD</option>
                                    <option value="USDT">USDT</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label htmlFor="amount">You will receive≈</label>
                                <div className="text-xBlueThickColor flex items-center gap-1">
                                    <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_14_1048)">
                                            <path d="M9.3999 17.46C13.1278 17.46 16.1499 14.4379 16.1499 10.71C16.1499 6.98204 13.1278 3.95996 9.3999 3.95996C5.67198 3.95996 2.6499 6.98204 2.6499 10.71C2.6499 14.4379 5.67198 17.46 9.3999 17.46Z" stroke="#326AD5" strokeWidth="1.5" />
                                            <path d="M9.3999 7.33496V11.46H12.7749" stroke="#326AD5" strokeWidth="1.5" strokeLinecap="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_14_1048">
                                                <rect width="18" height="20" fill="white" transform="translate(0.399902 0.709961)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span>14s</span>
                                </div>
                            </div>

                            <div className="relative bg-[#B4BFD61F] p-1 h-[32px] rounded-sm flex items-center">
                                <input type="text" name="amount" id="amount" className='text-white bg-transparent outline-none w-full pl-1 pr-[4rem]' />
                                <select className="absolute right-1 top-1 bg-[#33373D] text-white rounded-sm p-1 text-[13px] outline-none" name="amount" id="">
                                    <option value="USD">USD</option>
                                    <option value="USDT">USDT</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-x-1">
                            Reference price:
                            <span> 1 USDT = 1.02 USD</span>
                        </div>

                        <div className="flex gap-2 items-center">
                            <span>Bank Card: </span>
                            <button className='capitalise flex items-center gap-2'>
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.95996 0.419922C6.68652 0.419922 6.45215 0.517578 6.25684 0.712891C6.06152 0.908203 5.96387 1.14258 5.96387 1.41602V5.42383H1.95605C1.68262 5.42383 1.44824 5.52148 1.25293 5.7168C1.05762 5.91211 0.959961 6.14648 0.959961 6.41992C0.959961 6.69336 1.05762 6.92773 1.25293 7.12305C1.44824 7.31836 1.68262 7.41602 1.95605 7.41602H5.96387V11.4238C5.96387 11.6035 6.00879 11.7695 6.09863 11.9219C6.18848 12.0742 6.30957 12.1953 6.46191 12.2852C6.61426 12.375 6.78027 12.4199 6.95996 12.4199C7.13965 12.4199 7.30566 12.375 7.45801 12.2852C7.61035 12.1953 7.73145 12.0742 7.82129 11.9219C7.91113 11.7695 7.95605 11.6035 7.95605 11.4238V7.41602H11.9639C12.1436 7.41602 12.3096 7.37109 12.4619 7.28125C12.6143 7.19141 12.7354 7.07031 12.8252 6.91797C12.915 6.76562 12.96 6.59961 12.96 6.41992C12.96 6.24023 12.915 6.07422 12.8252 5.92188C12.7354 5.76953 12.6143 5.64844 12.4619 5.55859C12.3096 5.46875 12.1436 5.42383 11.9639 5.42383H7.95605V1.41602C7.95605 1.14258 7.8584 0.908203 7.66309 0.712891C7.46777 0.517578 7.2334 0.419922 6.95996 0.419922Z" fill="#4281FF" />
                                </svg>
                                <span>add card</span>
                            </button>
                        </div>

                        <div className="w-full h-[50px] bg-[#18191C] flex items-center gap-2 px-2 rounded-sm">
                            <div className="w-[40px] h-[30px] bg-[#33373D] rounded-md"></div>
                            <div className="w-[40px] h-[30px] bg-[#33373D] rounded-md"></div>
                        </div>

                        <p>
                            You are visiting Fiat Services operated by MEXC Estonia
                            OÜ. By clicking 'Buy Now', it represents that you have read
                            and agreed to the <Link href={"#terms"} target='_blank' className='text-xBlueThickColor'>Terms of Conditions</Link> and <Link href={"#terms"} target='_blank' className='text-xBlueThickColor'>Privacy Policy </Link>
                            of MEXC Estonia OÜ.
                        </p>


                    <Button className="disabled:bg-[#28292C] disabled:text-[#6E7583] block w-full py-2 text-[15px] border-none rounded-sm bg-xButtonColor hover:bg-xButtonColor/90" disabled={false}>Buy Now</Button>
                    </form>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                    <div className="lg:w-[400px] space-y-4">
                        <h2 className='text-[16px] font-semibold'>Graphic Tutorial</h2>

                        <div className="">
                            <Link href={"#"} className="text-xBlueThickColor flex gap-2 lg:text-[17px] text=[15px] mb-2 items-center">
                                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.507 1.89525V13.8846H2.75021C2.55097 13.8846 2.3781 13.8114 2.2316 13.6649C2.08511 13.5184 2.01186 13.3455 2.01186 13.1463V3.38952C2.01186 2.97933 2.15836 2.62773 2.45135 2.33474C2.74435 2.04174 3.09594 1.89525 3.50614 1.89525H12.507ZM3.50614 0.383389C2.96702 0.383389 2.466 0.518167 2.00307 0.787722C1.54013 1.05728 1.17389 1.42352 0.904334 1.88646C0.634778 2.34939 0.5 2.85041 0.5 3.38952V13.1463C0.5 13.4393 0.558599 13.7235 0.675797 13.9989C0.792996 14.2743 0.957073 14.5175 1.16803 14.7285C1.37899 14.9394 1.62217 15.1035 1.89759 15.2207C2.17301 15.3379 2.45721 15.3965 2.75021 15.3965H12.507C12.9172 15.3965 13.2688 15.25 13.5617 14.957C13.8547 14.664 14.0012 14.3065 14.0012 13.8846V1.89525C14.0012 1.47333 13.8547 1.11588 13.5617 0.822882C13.2688 0.529886 12.9172 0.383389 12.507 0.383389H3.50614ZM8.25266 5.58699L6.98692 6.0089C7.3268 6.1847 7.60807 6.43082 7.83075 6.74725L8.25266 5.58699ZM8.42846 9.40179C8.34642 9.63619 8.19407 9.78855 7.97139 9.85887C7.74871 9.92919 7.5319 9.90868 7.32094 9.79734C7.10998 9.686 6.98692 9.50727 6.95176 9.26116L6.70565 7.88994C6.68221 7.7493 6.62068 7.62331 6.52106 7.51197C6.42144 7.40063 6.30131 7.32738 6.16068 7.29222L4.24448 6.79999C4.01009 6.74139 3.84601 6.60955 3.75225 6.40445C3.65849 6.19935 3.6497 5.99425 3.72588 5.78916C3.80206 5.58406 3.95735 5.44049 4.19175 5.35845L9.27229 3.65322C9.47153 3.59462 9.65904 3.60634 9.83484 3.68838C10.0106 3.77042 10.1366 3.90227 10.2128 4.08392C10.289 4.26558 10.2919 4.45017 10.2216 4.63768C9.61216 6.21986 9.01445 7.8079 8.42846 9.40179ZM12.507 12.3903V13.8846H2.75021C2.62129 13.8846 2.49823 13.8524 2.38103 13.7879C2.26383 13.7235 2.17301 13.6327 2.10855 13.5155C2.04409 13.3983 2.01186 13.2723 2.01186 13.1375C2.01186 13.0027 2.04409 12.8767 2.10855 12.7595C2.17301 12.6423 2.26383 12.5515 2.38103 12.487C2.49823 12.4226 2.62129 12.3903 2.75021 12.3903H12.507ZM2.75021 10.8961C2.35173 10.8961 1.97963 10.9957 1.63389 11.1949C1.28816 11.3942 1.01274 11.6667 0.807645 12.0124C0.602548 12.3581 0.5 12.7332 0.5 13.1375C0.5 13.5418 0.602548 13.9169 0.807645 14.2626C1.01274 14.6083 1.28816 14.8837 1.63389 15.0888C1.97963 15.2939 2.35173 15.3965 2.75021 15.3965H13.7375C13.8196 15.3965 13.884 15.3701 13.9309 15.3174C13.9778 15.2646 14.0012 15.2031 14.0012 15.1328V10.8961H2.75021Z" fill="#4281FF" />
                                </svg>
                                <div className="">View Tutorial</div>
                            </Link>

                            <div className="bg-[#111214] rounded-md p-3 space-y-8 ">
                                <h2 className='text-[16px] font-semibold '>How Does It Work?</h2>

                                <div className="space-y-5">
                                    {
                                        howDoesItWork.map(({ title, desc, actionLink, actionText }, i) => (
                                            <div className="relative">
                                                <button className="flex items-center gap-2 cursor-pointer" onClick={() => setAccordion({ [i]: true })}>
                                                    <div className={`w-4 h-4 border-2 border-xBlueThickColor rounded-full ${(howDoesItWork.length - 1 !== i) && "after:content after:block after:w-[0.06rem] after:h-[85px] after:mt-5 after:ml-1  after:bg-xMutedText/20"}`}></div>
                                                    <h2 className='text-[15px] font-medium'>
                                                        {title}
                                                    </h2>
                                                </button>
                                                <div className="mt-2 pl-6">
                                                    <MutedText>{desc}</MutedText>
                                                    <Link href={actionLink} className='text-xBlueThickColor flex items-center gap-2 '>
                                                        <span>{actionText}</span>
                                                        <svg width="9" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0.268958 0.455899C0.405677 0.299649 0.578203 0.215014 0.786536 0.201993C0.99487 0.188972 1.17716 0.250821 1.33341 0.38754L5.32755 3.88363C5.41219 3.95525 5.47729 4.03988 5.52286 4.13754C5.56844 4.2352 5.59122 4.33936 5.59122 4.45004C5.59122 4.56072 5.56844 4.66488 5.52286 4.76254C5.47729 4.8602 5.41219 4.94483 5.32755 5.01645L1.33341 8.51254C1.22924 8.60369 1.11043 8.66391 0.976966 8.6932C0.843502 8.7225 0.713294 8.71599 0.586341 8.67367C0.459388 8.63136 0.350338 8.55974 0.259192 8.45883C0.168047 8.35792 0.109453 8.2391 0.0834112 8.10238C0.0573695 7.96566 0.0687627 7.83383 0.117591 7.70688C0.166419 7.57992 0.242916 7.47413 0.347083 7.38949L3.69669 4.45004L0.347083 1.51059C0.190833 1.37387 0.106198 1.20297 0.0931768 0.997892C0.080156 0.792814 0.13875 0.612149 0.268958 0.455899Z" fill="#4281FF" />
                                                        </svg>
                                                    </Link>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                        <h2 className='text-[16px] font-semibold'>FAQ</h2>
                        <div className="text-[14px]">
                            <div className="flex items-center mb-2 gap-3">
                                <MutedText>T+N Withdrawal Limit</MutedText>
                                <Link href={"#"} className='flex items-center gap-2'>
                                    <span className='text-xBlueThickColor'>Learn More</span>
                                    <span>
                                        <svg width="7" height="9" viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.799231 0.596036C0.93595 0.439786 1.10848 0.355151 1.31681 0.34213C1.52514 0.329109 1.70743 0.390958 1.86368 0.527677L5.85783 4.02377C5.94246 4.09539 6.00756 4.18002 6.05314 4.27768C6.09871 4.37533 6.1215 4.4795 6.1215 4.59018C6.1215 4.70085 6.09871 4.80502 6.05314 4.90268C6.00756 5.00033 5.94246 5.08497 5.85783 5.15658L1.86368 8.65268C1.75952 8.74382 1.6407 8.80404 1.50724 8.83334C1.37378 8.86264 1.24357 8.85613 1.11661 8.81381C0.989661 8.77149 0.880612 8.69988 0.789466 8.59897C0.69832 8.49805 0.639726 8.37924 0.613685 8.24252C0.587643 8.1058 0.599036 7.97397 0.647864 7.84701C0.696692 7.72006 0.77319 7.61427 0.877356 7.52963L4.22697 4.59018L0.877356 1.65072C0.721106 1.51401 0.636471 1.34311 0.62345 1.13803C0.610429 0.93295 0.669023 0.752286 0.799231 0.596036Z" fill="#4281FF" />
                                        </svg>
                                    </span>
                                </Link>
                            </div>

                            <p className='mb-1'>If you have any questions regarding the payment, please contact us via Telegram</p>
                            <p>(<span className='text-xBlueThickColor'>@MEXC OTC</span>) or email</p>
                            <p className='text-xBlueThickColor'>(<Link href={"mailto:   service@mexceu.com"}>service@mexceu.com</Link>)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
