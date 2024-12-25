// app/api/verify-captcha/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    // Parse request body using .json()
    const body = await request.json()
    const { captchaResponse } = body
    const secretKey = process.env.GEETEST_CAPTCHA_SECRET || 'a90da4abd6d983b5f36c2914bcd788e1'
    const captchaId = process.env.NEXT_PUBLIC_GEETEST_CAPTCHA_ID || '42e5dd8749ef4d76f3472cc4f7f7fe55'

    try {
        const verificationResponse = await fetch('https://gcaptcha4.geetest.com/validate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                captcha_id: captchaId,
                lot_number: captchaResponse.lot_number,
                captcha_output: captchaResponse.captcha_output,
                pass_token: captchaResponse.pass_token,
                gen_time: captchaResponse.gen_time,
                secretKey: secretKey
            })
        })

        const result = await verificationResponse.json()

        if (result.result === 'success') {
            return NextResponse.json({ verified: true }, { status: 200 })
        } else {
            return NextResponse.json({ verified: false }, { status: 400 })
        }
    } catch (error) {
        console.error('Captcha Verification Error:', error)
        return NextResponse.json({ error: 'Verification failed' }, { status: 500 })
    }
}