import React from 'react'
import Button from '../ui/button'
import MutedText from '../ui/muted-text'

export default function OverviewHeader() {
    return (
        <div className='bg-xDark text-white w-[calc(100vw/250px)] p-3 rounded-md'>
            <div className="">
                <div className="sm:flex justify-between items-center sm:space-y-0 space-y-2">
                    <h1 className='sm:text-[1.4rem] text-[1.25rem] font-semibold'>Wallet Overview</h1>
                    <div className="flex items-center gap-2 sm:flex-nowrap flex-wrap">
                        <Button className='sm:w-full w-fit whitespace-nowrap px-3 py-1 text-[13px]'>Deposit</Button>
                        <Button className='sm:w-full w-fit whitespace-nowrap px-3 py-1 text-[13px]'>Withdraw</Button>
                        <Button className='sm:w-full w-fit whitespace-nowrap px-3 py-1 text-[13px]'>Send</Button>
                        <Button className='sm:w-full w-fit whitespace-nowrap px-3 py-1 text-[13px]'>Transaction History</Button>
                    </div>
                </div>

                <div className="sm:flex justify-between items-center  mt-5 sm:space-y-0 space-y-2">
                    <div className="space-y-1">
                        <div className="flex items-center gap-1">
                            <MutedText>Estimated Balance</MutedText>
                            <button>
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.91778 7.95594C5.91778 8.22402 5.97058 8.48947 6.07317 8.73715C6.17576 8.98482 6.32613 9.20986 6.51569 9.39942C6.70525 9.58898 6.93029 9.73935 7.17796 9.84194C7.42564 9.94453 7.69109 9.99733 7.95917 9.99733C8.22725 9.99733 8.4927 9.94453 8.74038 9.84194C8.98805 9.73935 9.21309 9.58898 9.40265 9.39942C9.59221 9.20986 9.74258 8.98482 9.84517 8.73715C9.94776 8.48947 10.0006 8.22402 10.0006 7.95594C10.0006 7.41453 9.78549 6.89529 9.40265 6.51245C9.01982 6.12962 8.50058 5.91455 7.95917 5.91455C7.41776 5.91455 6.89852 6.12962 6.51569 6.51245C6.13285 6.89529 5.91778 7.41453 5.91778 7.95594ZM15.8725 7.48525C14.1449 3.84541 11.5331 2.01379 8.03198 2.01379C4.52911 2.01379 1.91907 3.84541 0.18974 7.48698C0.120423 7.63375 0.0844727 7.79405 0.0844727 7.95637C0.0844727 8.11869 0.120423 8.27899 0.18974 8.42576C1.91821 12.0656 4.52998 13.8972 8.03112 13.8972C11.5331 13.8972 14.144 12.0656 15.8716 8.42403C16.0121 8.1293 16.0121 7.78604 15.8716 7.48525H15.8725ZM7.9583 11.1632C7.53706 11.1632 7.11994 11.0803 6.73076 10.919C6.34158 10.7578 5.98797 10.5216 5.6901 10.2237C5.39224 9.92584 5.15596 9.57222 4.99476 9.18304C4.83356 8.79387 4.75059 8.37675 4.75059 7.9555C4.75059 7.53426 4.83356 7.11714 4.99476 6.72796C5.15596 6.33879 5.39224 5.98517 5.6901 5.68731C5.98797 5.38944 6.34158 5.15316 6.73076 4.99196C7.11994 4.83076 7.53706 4.74779 7.9583 4.74779C8.80904 4.74779 9.62494 5.08574 10.2265 5.68731C10.8281 6.28887 11.166 7.10476 11.166 7.9555C11.166 8.80624 10.8281 9.62214 10.2265 10.2237C9.62494 10.8253 8.80904 11.1632 7.9583 11.1632Z" fill="#6E7583" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex items-center uppercase gap-1 font-semibold text-[1.1rem]">
                            <h2>449.35 usdt</h2>
                            <MutedText className='!text-[1.1rem] !uppercase'>
                                ≈ 449.30 usd
                            </MutedText>
                        </div>
                    </div>

                    <div className="">
                        <Button className='flex items-center gap-2 bg-[#361B06] rounded-sm sm:w-full py-1 px-2 border-none w-fit'>
                            <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5927 2.10094C11.2777 -0.244388 14.3963 -0.709824 15.7363 1.3333C16.9852 3.23772 15.619 5.76741 13.3416 5.76741H9.52195L10.5927 2.10094ZM3.30729 1.3333C4.64722 -0.709824 7.76588 -0.244388 8.45079 2.10095L9.52195 5.76741H5.70198C3.42453 5.76741 2.05835 3.23772 3.30729 1.3333ZM2.20292 7.29378C1.30466 7.29378 0.576477 8.02193 0.576477 8.9202V18.6787C0.576477 19.5771 1.30466 20.3052 2.20292 20.3052H16.8409C17.7391 20.3052 18.4673 19.5771 18.4673 18.6787V8.9202C18.4673 8.02193 17.7391 7.29378 16.8409 7.29378H2.20292ZM8.70869 17.9164H10.3351V9.68258H8.70869V17.9164Z" fill="#EB771A" />
                            </svg>
                            <div className="text-[#EB771A] text-[13px]">
                                Claim 1,000 USDT Bonus
                            </div>
                            <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.986796 9.7016C0.846345 9.56097 0.767456 9.37035 0.767456 9.1716C0.767456 8.97285 0.846345 8.78222 0.986796 8.6416L4.4568 5.1716L0.986796 1.7016C0.854316 1.55942 0.782193 1.37138 0.785621 1.17708C0.789049 0.982776 0.867761 0.797391 1.00517 0.659978C1.14259 0.522565 1.32797 0.443853 1.52227 0.440424C1.71657 0.436996 1.90462 0.509119 2.0468 0.641599L6.0468 4.6416C6.18725 4.78222 6.26614 4.97285 6.26614 5.1716C6.26614 5.37035 6.18725 5.56097 6.0468 5.7016L2.0468 9.7016C1.90617 9.84205 1.71555 9.92094 1.5168 9.92094C1.31805 9.92094 1.12742 9.84205 0.986796 9.7016Z" fill="#EB771A" />
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
