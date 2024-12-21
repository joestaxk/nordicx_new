import React from 'react'

export default function Button({className,  children, variant, type, disabled}: {
    className?: string,
    type?: "button" | "submit" |"reset"
    variant?: "outline",
    disabled?: boolean,
    children: React.ReactNode
}) {
  return (
    <button type={type} className={`${variant == "outline" ? "bg-transparent" : ""} border w-[80px] border-[#3A3A3C] transition-all duration-200 rounded-md ${className}`} disabled={disabled}>
        {children}
    </button>
  )
}
