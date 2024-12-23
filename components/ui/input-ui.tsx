import React from 'react'
import MutedText from './muted-text'

export default function TextInputUi({
    inputName,
    placeholder,
    inputPlaceholder,
    conversionType,
    type = "number"
}: {
    inputName: string,
    placeholder?: string,
    inputPlaceholder: string | React.ReactNode,
    conversionType: string,
    type?:string
}) {
    return (
        <div className='relative flex h-10 items-center rounded-sm w-full bg-[#B4BFD61F]'>
            <MutedText className="pl-1 left-0 capitalize">{inputPlaceholder}</MutedText>
            <input type={type} placeholder={placeholder} className='w-full  h-full bg-transparent outline-none pl-2 text-white text-[13px]' name={inputName} />
            <MutedText className="absolute top-[0.55rem] right-6">{conversionType}</MutedText>
        </div>
    )
}

