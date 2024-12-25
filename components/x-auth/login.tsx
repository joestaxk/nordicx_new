"use client";
import React, { useRef, useState } from 'react'
import MutedText from '../ui/muted-text'
import dynamic from 'next/dynamic';

// Dynamically import Geetest to avoid SSR issues
const GeetestCaptcha = dynamic(() => import('../ui/geetest'), {
    ssr: false
})


interface captchaInstanceProps {
    showCaptcha: () => void
    getValidate: () => void
    onSuccess: (param0: () => void) => void
    onError: (param0: () => void) => void
}

export default function Login() {
    const [activeTab, setActiveTab] = useState<'email' | 'phone'>("email")
    const [captchaReady, setCaptchaReady] = useState(false)
    const [captchaInstance, setCaptchaInstance] = useState<captchaInstanceProps | null>(null)
    const geetestRef = useRef(null)

    const handleCaptchaReady = (instance) => {
        setCaptchaInstance(instance)
        setCaptchaReady(true)
    }

    const handleNextClick = async () => {
        if (!captchaInstance) {
            console.error('Captcha not initialized')
            return
        }

        try {
            const captchaResponse = await new Promise((resolve, reject) => {
                captchaInstance.showCaptcha()
                captchaInstance.onSuccess(() => {
                    const result = captchaInstance.getValidate()
                    resolve(result)
                })
                captchaInstance.onError(() => {
                    reject(new Error('Captcha verification failed'))
                })
            })

            // Server-side verification
            console.log(captchaInstance)
            const response = await fetch('/api/verify-captcha', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ captchaResponse })
            })

            const verification = await response.json()

            if (verification.verified) {
                // Proceed with login
                console.log('Captcha verified successfully')
            } else {
                // Handle verification failure
                console.error('Captcha verification failed')
            }
            // Additional login logic here
        } catch (error) {
            console.error('Captcha verification error:', error)
        }
    }

    return (
        <div className='flex items-center justify-center md:pt-[8rem] pt-[4rem]'>
            <div className="w-[350px] max-w-full px-3 space-y-3">
                <div className="">
                    <h1 className='font-bold text-[1.4rem]'>Welcome to NordicX</h1>
                    <MutedText className=''>First login counts as sign-up</MutedText>
                </div>

                <div className="space-x-2">
                    <button className={`${activeTab == "email" ? 'border-b-2 border-xButtonColor' : 'text-xMutedText'}`} onClick={() => setActiveTab("email")}>Email</button>
                    <button className={`${activeTab == "phone" ? 'border-b-2 border-xButtonColor' : 'text-xMutedText'}`} onClick={() => setActiveTab("phone")}>Phone</button>
                </div>

                {activeTab == "email" && <form action="" className='space-y-3'>
                    <div className="relative bg-[#1D2B420A]">
                        <span className='absolute top-[30%] ml-1'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.3803 3.99852L7.87756 8.33011L0.567548 4.11056V3.481C0.567548 2.73672 1.17044 2.13184 1.91671 2.13184H14.0345C14.7788 2.13184 15.3843 2.73472 15.3843 3.481V3.99852H15.3803ZM15.3803 5.55376V12.9051C15.3803 13.2629 15.2382 13.6061 14.9851 13.8591C14.7321 14.1121 14.389 14.2543 14.0311 14.2543H1.91404C1.55622 14.2543 1.21306 14.1121 0.96004 13.8591C0.707024 13.6061 0.56488 13.2629 0.56488 12.9051V5.66646L7.54144 9.69394C7.78152 9.83266 8.06896 9.80598 8.2777 9.65259C8.28771 9.64859 8.29571 9.64259 8.30638 9.63858L15.3796 5.55376H15.3803Z" fill="#87909F" />
                            </svg>
                        </span>
                        <input type="text" className='py-3  pl-6 bg-transparent text-[13px] w-full outline-none' placeholder='Email/Sub-Account' required />
                    </div>
                    <GeetestCaptcha
                        ref={geetestRef}
                        onReady={handleCaptchaReady}
                    />
                    <button type='button' onClick={handleNextClick}
                        disabled={!captchaReady}
                        className={`w-full py-2 rounded-sm text-white ${captchaReady
                            ? 'bg-xButtonColor'
                            : 'bg-gray-400 cursor-not-allowed'
                            }`}>Next</button>
                </form>}

                {activeTab == "phone" && <form action="" className='space-y-3'>
                    <div className="relative bg-[#1D2B420A]">
                        <span className='absolute top-[30%] ml-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#87909F" className="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>

                        </span>
                        <input type="tel" className='py-3 pl-6 bg-transparent text-[13px] w-full outline-none' placeholder='Phone Number' required />
                    </div>
                    <GeetestCaptcha
                        ref={geetestRef}
                        onReady={handleCaptchaReady}
                    />
                    <button type='button' onClick={handleNextClick}
                        disabled={!captchaReady}
                        className={`w-full py-2 rounded-sm text-white ${captchaReady
                            ? 'bg-xButtonColor'
                            : 'bg-gray-400 cursor-not-allowed'
                            }`}>Next</button>
                </form>}

                <div className="border-t border-xMutedText/20 w-full flex justify-center relative translate-y-2">
                    <div className="w-fit bg-white absolute top-[-.7rem] px-2 text-xMutedText text-[13px]">or log in with</div>
                </div>

                <div className="flex justify-center pt-5">
                    <button>
                        <svg width="28" height="28" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_119)">
                                <path d="M23 9.40625C26.3187 9.40625 29.2906 10.55 31.6344 12.7812L38.0562 6.35938C34.1562 2.73125 29.0656 0.5 23 0.5C14.2062 0.5 6.60312 5.54375 2.89999 12.8938L10.3812 18.6969C12.1531 13.3625 17.1312 9.40625 23 9.40625Z" fill="#EA4335" />
                                <path d="M44.5438 23.5156C44.5438 22.0437 44.4031 20.6188 44.1875 19.25H23V27.7063H35.1312C34.5875 30.4813 33.0125 32.8438 30.65 34.4375L37.8969 40.0625C42.125 36.1438 44.5438 30.35 44.5438 23.5156Z" fill="#4285F4" />
                                <path d="M10.3719 27.3031C9.92188 25.9437 9.65938 24.5 9.65938 23C9.65938 21.5 9.9125 20.0562 10.3719 18.6969L2.89062 12.8937C1.3625 15.9312 0.5 19.3625 0.5 23C0.5 26.6375 1.3625 30.0687 2.9 33.1062L10.3719 27.3031Z" fill="#FBBC05" />
                                <path d="M23 45.5C29.075 45.5 34.1844 43.5031 37.8969 40.0531L30.65 34.4281C28.6344 35.7875 26.0375 36.5844 23 36.5844C17.1313 36.5844 12.1531 32.6281 10.3719 27.2938L2.89062 33.0969C6.60313 40.4563 14.2063 45.5 23 45.5Z" fill="#34A853" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_119">
                                    <rect width="45" height="45" fill="white" transform="translate(0.5 0.5)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>

                </div>
            </div>
        </div>
    )
}
