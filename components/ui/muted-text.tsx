import React from 'react'

export default function MutedText({className, children}: {
    className?: string,
    children: React.ReactNode
}) {
  return (
    <div className={`text-[13px] capitalize text-xMutedText ${className}`}>{children}</div>
  )
}
