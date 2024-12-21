import Link from 'next/link'
import React from 'react'
import MutedText from '../ui/muted-text'

export default function BuycryptoHeader({tabs, setTabs}: {
    tabs: number,
    setTabs: any
}) {
    return (
        <div className='bg-[#111214] border-xMutedText flex justify-center md:h-[80px] h-[50px]'>
            <div className="w-[1200px] px-2 py-1 max-w-full flex justify-between text-[14px]">
                <div className="flex gap-3 items-center overflow-x-auto whitespace-nowrap overflow-y-hidden">
                    <button onClick={() => (setTabs(1))} className={`md:leading-[71px] leading-[41px] ${tabs == 1 ? "border-b-2 border-xBlueThickColor text-white" : "text-xMutedText"}`}>Debit/Credit Card</button>
                    <button onClick={() => (setTabs(2))} className={`md:leading-[71px] leading-[41px] ${tabs == 2 ? "border-b-2 border-xBlueThickColor text-white" : "text-xMutedText"}`}>Bank Transfer</button>
                    <button onClick={() => (setTabs(3))} className={`md:leading-[71px] leading-[41px] ${tabs == 3 ? "border-b-2 border-xBlueThickColor text-white" : "text-xMutedText"}`}>Express</button>
                    <button onClick={() => (setTabs(4))} className={`md:leading-[71px] leading-[41px] ${tabs == 4 ? "border-b-2 border-xBlueThickColor text-white" : "text-xMutedText"}`}>P2P</button>
                    <button onClick={() => (setTabs(5))} className={`md:leading-[71px] leading-[41px] ${tabs == 5 ? "border-b-2 border-xBlueThickColor text-white" : "text-xMutedText"}`}>Third-party</button>
                </div>

                <div className="flex items-center gap-4 ">
                    <Link href={"#"} className='md:flex gap-2 items-center hidden'>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_14_1161)">
                                <path d="M9.146 16.5039C7.97412 16.5039 6.88037 16.2044 5.86475 15.6055C4.88818 15.0326 4.11344 14.2578 3.54053 13.2812C2.94157 12.2656 2.64209 11.1719 2.64209 10C2.64209 8.82812 2.94157 7.73438 3.54053 6.71875C4.11344 5.74219 4.88818 4.96745 5.86475 4.39453C6.88037 3.79557 7.97412 3.49609 9.146 3.49609C10.3179 3.49609 11.4116 3.79557 12.4272 4.39453C13.4038 4.96745 14.1785 5.74219 14.7515 6.71875C15.3504 7.73438 15.6499 8.82812 15.6499 10C15.6499 11.1719 15.3504 12.2656 14.7515 13.2812C14.1785 14.2578 13.4038 15.0326 12.4272 15.6055C11.4116 16.2044 10.3179 16.5039 9.146 16.5039ZM9.146 18.4961C10.6825 18.4961 12.1147 18.112 13.4429 17.3438C14.7189 16.5885 15.7345 15.5729 16.4897 14.2969C17.258 12.9688 17.6421 11.5365 17.6421 10C17.6421 8.46354 17.258 7.03125 16.4897 5.70312C15.7345 4.42708 14.7189 3.41146 13.4429 2.65625C12.1147 1.88802 10.6825 1.50391 9.146 1.50391C7.60954 1.50391 6.17725 1.88802 4.84912 2.65625C3.57308 3.41146 2.55745 4.42708 1.80225 5.70312C1.03402 7.03125 0.649902 8.46354 0.649902 10C0.649902 11.5365 1.03402 12.9688 1.80225 14.2969C2.55745 15.5729 3.57308 16.5885 4.84912 17.3438C6.17725 18.112 7.60954 18.4961 9.146 18.4961ZM11.8022 8.4375L9.3999 6.52344C8.97021 6.1849 8.49821 6.03841 7.98389 6.08398C7.46956 6.12956 7.03337 6.33789 6.67529 6.70898C6.31722 7.08008 6.13818 7.53906 6.13818 8.08594V11.9141C6.13818 12.4609 6.31722 12.9199 6.67529 13.291C7.03337 13.6621 7.46956 13.8704 7.98389 13.916C8.49821 13.9616 8.97021 13.8151 9.3999 13.4766L11.8022 11.5625C12.0366 11.3672 12.2189 11.1328 12.3491 10.8594C12.4793 10.5859 12.5444 10.2995 12.5444 10C12.5444 9.70052 12.4793 9.41406 12.3491 9.14062C12.2189 8.86719 12.0366 8.63281 11.8022 8.4375ZM10.5522 10L8.1499 11.9141V8.08594L10.5522 10Z" fill="#87909F" />
                            </g>
                            <defs>
                                <clipPath id="clip0_14_1161">
                                    <rect width="20" height="20" fill="white" transform="matrix(1 0 0 -1 0.649902 20)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <MutedText>Tutorials</MutedText>
                    </Link>

                    <Link href={"#"} className='md:flex gap-2 items-center hidden'>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_14_1166)">
                                <path d="M4 7.42188C4 7.21354 4.07487 7.0345 4.22461 6.88477C4.37435 6.73503 4.54688 6.66016 4.74219 6.66016H10.7773C10.9727 6.66016 11.1452 6.73503 11.2949 6.88477C11.4447 7.0345 11.5195 7.21354 11.5195 7.42188C11.5195 7.63021 11.4447 7.80599 11.2949 7.94922C11.1452 8.09245 10.9727 8.16406 10.7773 8.16406H4.74219C4.54688 8.16406 4.37435 8.09245 4.22461 7.94922C4.07487 7.80599 4 7.63021 4 7.42188ZM4 10.8008C4 10.5924 4.07487 10.4167 4.22461 10.2734C4.37435 10.1302 4.54688 10.0586 4.74219 10.0586H8.66797C8.8763 10.0586 9.05534 10.1302 9.20508 10.2734C9.35482 10.4167 9.42969 10.5924 9.42969 10.8008C9.42969 11.0091 9.35482 11.1882 9.20508 11.3379C9.05534 11.4876 8.8763 11.5625 8.66797 11.5625H4.74219C4.54688 11.5625 4.37435 11.4876 4.22461 11.3379C4.07487 11.1882 4 11.0091 4 10.8008ZM3.66797 16.5039H11.6758C12.0924 16.5039 12.4473 16.3574 12.7402 16.0645C13.0332 15.7715 13.1797 15.4167 13.1797 15V5C13.1797 4.58333 13.0332 4.22852 12.7402 3.93555C12.4473 3.64258 12.0924 3.49609 11.6758 3.49609H3.66797C3.2513 3.49609 2.89648 3.64258 2.60352 3.93555C2.31055 4.22852 2.16406 4.58333 2.16406 5V15C2.16406 15.4167 2.31055 15.7715 2.60352 16.0645C2.89648 16.3574 3.2513 16.5039 3.66797 16.5039ZM11.6758 18.0078H3.66797C3.12109 18.0078 2.61979 17.8711 2.16406 17.5977C1.70833 17.3242 1.34701 16.9596 1.08008 16.5039C0.813151 16.0482 0.679688 15.5469 0.679688 15V5C0.679688 4.59635 0.754557 4.21224 0.904297 3.84766C1.05404 3.48307 1.26888 3.16081 1.54883 2.88086C1.82878 2.60091 2.1543 2.38281 2.52539 2.22656C2.89648 2.07031 3.27734 1.99219 3.66797 1.99219H11.6758C12.0664 1.99219 12.4473 2.07031 12.8184 2.22656C13.1895 2.38281 13.515 2.60091 13.7949 2.88086C14.0749 3.16081 14.2897 3.48307 14.4395 3.84766C14.5892 4.21224 14.6641 4.59635 14.6641 5V15C14.6641 15.5469 14.5306 16.0482 14.2637 16.5039C13.9967 16.9596 13.6354 17.3242 13.1797 17.5977C12.724 17.8711 12.2227 18.0078 11.6758 18.0078Z" fill="#87909F" />
                            </g>
                            <defs>
                                <clipPath id="clip0_14_1166">
                                    <rect width="20" height="20" fill="white" transform="matrix(1 0 0 -1 0.679688 20)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <MutedText>Orders</MutedText>
                    </Link>

                    <Link href={"#"} className='flex gap-2 items-center pl-2'>
                        <svg width="3" height="12" viewBox="0 0 3 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.51221 1C2.51221 1.18229 2.46663 1.34831 2.37549 1.49805C2.28434 1.64779 2.1639 1.76823 2.01416 1.85938C1.86442 1.95052 1.6984 1.99609 1.51611 1.99609C1.33382 1.99609 1.16781 1.95052 1.01807 1.85938C0.868327 1.76823 0.747884 1.64779 0.656738 1.49805C0.565592 1.34831 0.52002 1.18229 0.52002 1C0.52002 0.726562 0.617676 0.492188 0.812988 0.296875C1.0083 0.101562 1.24268 0.00390625 1.51611 0.00390625C1.78955 0.00390625 2.02393 0.101562 2.21924 0.296875C2.41455 0.492188 2.51221 0.726562 2.51221 1ZM2.51221 6C2.51221 6.18229 2.46663 6.34831 2.37549 6.49805C2.28434 6.64779 2.1639 6.76823 2.01416 6.85938C1.86442 6.95052 1.6984 6.99609 1.51611 6.99609C1.33382 6.99609 1.16781 6.95052 1.01807 6.85938C0.868327 6.76823 0.747884 6.64779 0.656738 6.49805C0.565592 6.34831 0.52002 6.18229 0.52002 6C0.52002 5.72656 0.617676 5.49219 0.812988 5.29688C1.0083 5.10156 1.24268 5.00391 1.51611 5.00391C1.78955 5.00391 2.02393 5.10156 2.21924 5.29688C2.41455 5.49219 2.51221 5.72656 2.51221 6ZM2.51221 11C2.51221 11.1823 2.46663 11.3483 2.37549 11.498C2.28434 11.6478 2.1639 11.7682 2.01416 11.8594C1.86442 11.9505 1.6984 11.9961 1.51611 11.9961C1.33382 11.9961 1.16781 11.9505 1.01807 11.8594C0.868327 11.7682 0.747884 11.6478 0.656738 11.498C0.565592 11.3483 0.52002 11.1823 0.52002 11C0.52002 10.7266 0.617676 10.4922 0.812988 10.2969C1.0083 10.1016 1.24268 10.0039 1.51611 10.0039C1.78955 10.0039 2.02393 10.1016 2.21924 10.2969C2.41455 10.4922 2.51221 10.7266 2.51221 11Z" fill="#87909F" />
                        </svg>
                        <MutedText>More</MutedText>
                    </Link>
                </div>
            </div>
        </div>
    )
}
