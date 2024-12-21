import React from 'react'
import MutedText from '../ui/muted-text'
import Link from 'next/link'
import Button from '../ui/button'
import Image from 'next/image'

export default function CardHeader() {
    return (
        <div className='relative bg-[#0F1E3B] rounded-bl-[50px] rounded-br-[50px] h-[400px] flex justify-center items-center overflow-hidden'>
            <div className="w-[1200px] max-w-full relative px-5 flex justify-between">
                <div className="sm:w-1/2 space-y-4">
                    <h1 className='text-xBlueColor md:text-[3.4rem] text-[3rem] font-semibold'>NordicCard</h1>
                    <MutedText className='text-[15px] md:w-[400px] sm:w-[300px] w-full'>
                        Ready to apply for a NordicX MasterCard and top it up with your
                        crypto balance? Earn up to 5% cash back at your favorite stores.
                    </MutedText>
                    <div className="">
                        <Link href="#" className='text-xBlueThickColor font-semibold'>Application Rules</Link>
                    </div>

                    <Button className="flex gap-1 items-center text-white p-3 !rounded-full bg-xBlueThickColor md:w-[200px] w-[150px] justify-center">
                        <span>Apply Now</span>
                        <svg width="12" height="5" viewBox="0 0 12 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5073 4.81543H0.0698242V3.37012H9.70264L8.64014 0.456055H9.94482L11.5073 4.58887V4.81543Z" fill="white" />
                        </svg>
                    </Button>
                </div>

                <div className="absolute lg:top-[-100px] sm:top-[-60px] xsm:top-[100px] top-[150px] lg:-right-32 sm:-right-28 xsm:right-[-8rem] right-[-10rem] hidden xxs:block">
                    <Image src="/new-7/darkHead.png" alt="" className='lg:w-[900px] md:w-[700px] w-[600px]' width={900} height={900} />
                </div>
            </div>
        </div>
    )
}
