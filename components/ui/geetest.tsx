// components/geetest-captcha.tsx
"use client";
import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'

// Geetest initialization configuration
const GEETEST_ID = process.env.NEXT_PUBLIC_GEETEST_CAPTCHA_ID || '42e5dd8749ef4d76f3472cc4f7f7fe55'



interface captchaInstanceProps {
    showCaptcha: () => void
    getValidate: () => void
}

interface GeetestValidate {
    lot_number: string;
    captcha_output: string;
    pass_token: string;
    gen_time: string;
}


interface GeetestInstance {
    showCaptcha: () => void;
    getValidate: () => void;
    onSuccess?: (callback: () => void) => void;
    onError?: (callback: () => void) => void;
}

interface GeetestCaptchaProps {
    onReady?: (instance: GeetestValidate) => void
}

const GeetestCaptcha = forwardRef<GeetestInstance, GeetestCaptchaProps>(({ onReady }, ref) => {
    const [geetestLoaded, setGeetestLoaded] = useState(false)
    const [captchaInstance, setCaptchaInstance] = useState<captchaInstanceProps|null>(null)

    useImperativeHandle(ref, () => ({
        showCaptcha: () => {
            if (captchaInstance) {
                captchaInstance.showCaptcha()
            }
        },
        getValidate: () => {
            return captchaInstance ? captchaInstance.getValidate() : null
        }
    }))

    useEffect(() => {
        const loadGeetest = () => {
            // @ts-expect-error due to the use window 
            if (window.initGeetest4) {
                // @ts-expect-error due to the use window 
                window.initGeetest4({
                    captchaId: GEETEST_ID,
                    product: 'bind',
                }, (geetest) => {
                    setCaptchaInstance(geetest)
                    setGeetestLoaded(true)
                    
                    if (onReady) {
                        onReady(geetest)
                    }
                })
            }
        }

        // Dynamically load Geetest script
        const script = document.createElement('script')
        script.src = 'https://static.geetest.com/v4/gt4.js'
        script.async = true
        script.onload = loadGeetest
        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [onReady])

    return (
        <div 
            id="geetest-captcha" 
            className={`w-full ${geetestLoaded ? 'block' : 'hidden'}`}
        />
    )
})

GeetestCaptcha.displayName = 'GeetestCaptcha'

export default GeetestCaptcha