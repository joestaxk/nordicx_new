import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../ui/button'
import MutedText from '../ui/muted-text'

export default function Header() {
    return (
        <div className='h-[70px] w-full bg-black flex items-center'>
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                    <Image src={"/new-7/blue-and-white-colored-transparent.png"} alt='blue-and-white-colored-transparent' width={150} height={30} />

                    <ul className='2xl:flex items-center text-white gap-5 text-[14px] hidden'>
                        <li className='leading-[50px]'><Link href={"#"}><MutedText>Buy Crypto</MutedText></Link></li>
                        <li className='leading-[50px]'><Link href={"#"}><MutedText>Market</MutedText></Link></li>
                        <li className='leading-[50px]'><Link href={"#"}><MutedText>Trade</MutedText></Link></li>
                        <li className='leading-[50px]'><Link href={"#"}><MutedText>Derivatives</MutedText></Link></li>
                        <li className='leading-[50px]'><Link href={"#"}><MutedText>Saving</MutedText></Link></li>
                        <li className='flex items-center '><Link href={"#"}><MutedText>Reward Hub</MutedText></Link> <span className='px-1 text-[12px] rounded-sm ml-1 bg-[#FC3535]'>HOT</span></li>
                        <li className='flex items-center '><Link href={"#"}><MutedText>Forex</MutedText></Link> <span className='px-1 text-[12px] rounded-sm ml-1 bg-[#FFF] text-black'>NEW</span></li>
                        <li className='flex items-center gap-2'>
                            <span>
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.0421 12.523C8.92 12.522 8.80316 12.4731 8.71682 12.3868C8.63047 12.3004 8.58153 12.1836 8.58057 12.0615V10.7692C8.58057 10.5168 8.7898 10.3076 9.0421 10.3076C9.29441 10.3076 9.50364 10.5168 9.50364 10.7692V12.0615C9.50364 12.3138 9.29441 12.523 9.0421 12.523Z" fill="#FCD535" />
                                    <path d="M12.5833 14.6154H5.50635V13.5385C5.50635 12.6031 6.26327 11.8462 7.19866 11.8462H10.891C11.8263 11.8462 12.5833 12.6031 12.5833 13.5385V14.6154ZM6.42942 13.6923H11.6602V13.5385C11.6602 13.3345 11.5791 13.1388 11.4349 12.9946C11.2906 12.8503 11.095 12.7693 10.891 12.7693H7.19866C6.99464 12.7693 6.79899 12.8503 6.65473 12.9946C6.51047 13.1388 6.42942 13.3345 6.42942 13.5385V13.6923Z" fill="#FCD535" />
                                    <path d="M12.7344 14.6154H5.34981C5.22771 14.6144 5.11087 14.5655 5.02452 14.4791C4.93818 14.3928 4.88924 14.276 4.88828 14.1539C4.88828 13.9015 5.09751 13.6923 5.34981 13.6923H12.7344C12.9867 13.6923 13.196 13.9015 13.196 14.1539C13.196 14.4062 12.9867 14.6154 12.7344 14.6154ZM12.908 8.27078C12.8415 8.27049 12.7759 8.25608 12.7154 8.22849C12.6549 8.20091 12.601 8.16078 12.5572 8.11078C12.4994 8.04519 12.4617 7.96437 12.4486 7.87794C12.4355 7.79152 12.4476 7.70315 12.4834 7.62339C12.6926 7.14339 12.7972 6.63262 12.7972 6.09724V4.25109C12.7972 4.0357 12.7603 3.82647 12.6864 3.60493L12.668 3.53724C12.6509 3.44801 12.6427 3.35732 12.6434 3.26647C12.6434 3.01416 12.8526 2.80493 13.1049 2.80493H13.4741C14.5757 2.80493 15.4741 3.72801 15.4741 4.86647C15.4741 5.80801 15.0864 6.73724 14.4157 7.40801L14.3603 7.45724C13.9972 7.75878 13.5849 8.09724 13.031 8.25109C12.9911 8.26323 12.9497 8.26945 12.908 8.26955V8.27078ZM13.6772 3.74647C13.708 3.91262 13.7203 4.08493 13.7203 4.25109V6.09724C13.7203 6.34955 13.7018 6.58955 13.6649 6.8357L13.7695 6.74955C14.2618 6.25724 14.551 5.56801 14.551 4.86647C14.551 4.31262 14.1757 3.84493 13.6772 3.74647ZM5.00151 8.24616C4.95319 8.24699 4.90516 8.23864 4.85997 8.22155C4.35535 8.06155 3.88151 7.76616 3.48766 7.37232C2.77997 6.59201 2.4292 5.73539 2.4292 4.83201C2.4292 3.71201 3.3092 2.83201 4.4292 2.83201H4.8292C4.90608 2.83142 4.98189 2.85011 5.0497 2.88636C5.11751 2.9226 5.17515 2.97526 5.21738 3.03951C5.2596 3.10377 5.28506 3.17758 5.29143 3.2542C5.29779 3.33082 5.28486 3.40782 5.25381 3.47816C5.15535 3.6997 5.10612 3.95201 5.10612 4.21662V6.06278C5.10612 6.59201 5.21074 7.10893 5.42612 7.60124C5.49997 7.76739 5.46305 7.95816 5.34612 8.09355C5.30238 8.14155 5.24918 8.17999 5.18988 8.20646C5.13058 8.23294 5.06645 8.24687 5.00151 8.24739V8.24616ZM4.21381 3.77355C3.71535 3.87201 3.35228 4.30278 3.35228 4.83201C3.35228 5.50278 3.62305 6.14893 4.15843 6.7397C4.18305 6.77047 4.21381 6.79509 4.24458 6.8197C4.20271 6.56959 4.18212 6.31637 4.18305 6.06278V4.21662C4.18305 4.06893 4.19535 3.92124 4.21381 3.77355Z" fill="#FCD535" />
                                    <path d="M8.95087 10.923C7.68669 10.9207 6.47494 10.4175 5.58103 9.52359C4.68712 8.62968 4.18392 7.41793 4.18164 6.15375V4.3076C4.18229 3.53255 4.49047 2.78943 5.03851 2.24139C5.58655 1.69335 6.32967 1.38517 7.10472 1.38452H10.797C11.5721 1.38517 12.3152 1.69335 12.8632 2.24139C13.4113 2.78943 13.7195 3.53255 13.7201 4.3076V6.15375C13.7178 7.41793 13.2146 8.62968 12.3207 9.52359C11.4268 10.4175 10.2151 10.9207 8.95087 10.923ZM7.10472 2.3076C6.00318 2.3076 5.10472 3.20606 5.10472 4.3076V6.15375C5.1301 7.15697 5.54646 8.11057 6.26498 8.81114C6.98351 9.51172 7.94733 9.90383 8.95087 9.90383C9.95441 9.90383 10.9182 9.51172 11.6368 8.81114C12.3553 8.11057 12.7716 7.15697 12.797 6.15375V4.3076C12.797 3.20606 11.8986 2.3076 10.797 2.3076H7.10472Z" fill="#FCD535" />
                                </svg>
                            </span>
                            <MutedText>Tournament</MutedText>
                        </li>
                    </ul>
                </div>

                <div className="flex gap-2 items-center pr-5 md:divide-x-[2px] md:divide-gray-50/20">
                    <div className="md:flex items-center gap-2 hidden">
                        <Button variant="outline" className='text-[15px] text-white py-[0.35rem]'>Login</Button>
                        <Button variant="outline" className='text-[15px] bg-xBlueColor py-[0.35rem]'>Register</Button>
                    </div>

                    <div className="flex gap-4 pl-2">
                        {/* <button>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.69353 10.35C1.99353 14.6416 5.6352 18.1333 9.99353 18.325C13.0685 18.4583 15.8185 17.025 17.4685 14.7666C18.1519 13.8416 17.7852 13.225 16.6435 13.4333C16.0852 13.5333 15.5102 13.575 14.9102 13.55C10.8352 13.3833 7.50186 9.97497 7.4852 5.94997C7.47686 4.86663 7.70186 3.84163 8.1102 2.9083C8.5602 1.87497 8.01853 1.3833 6.97687 1.82497C3.67687 3.21663 1.41853 6.54163 1.69353 10.35Z" stroke="#D4D4D5" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button> */}
                        <button>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.01845 1.42505C5.26012 1.42505 3.01845 3.66672 3.01845 6.42505V8.83338C3.01845 9.34172 2.80178 10.1167 2.54345 10.55L1.58512 12.1417C0.993449 13.125 1.40178 14.2167 2.48512 14.5834C6.07678 15.7834 9.95178 15.7834 13.5434 14.5834C14.5518 14.25 14.9934 13.0584 14.4434 12.1417L13.4851 10.55C13.2351 10.1167 13.0184 9.34172 13.0184 8.83338V6.42505C13.0184 3.67505 10.7684 1.42505 8.01845 1.42505Z" stroke="#D4D4D5" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" />
                            </svg>
                        </button>
                        <button>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.7022 7.41675C16.7022 7.67508 17.9272 9.21675 17.9272 12.5917V12.7001C17.9272 16.4251 16.4355 17.9167 12.7105 17.9167H7.28551C3.56051 17.9167 2.06885 16.4251 2.06885 12.7001V12.5917C2.06885 9.24175 3.27718 7.70008 6.22718 7.42508M10.0022 1.66675V12.4001" stroke="#D4D4D5" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12.7938 10.5417L10.0021 13.3334L7.21045 10.5417" stroke="#D4D4D5" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}