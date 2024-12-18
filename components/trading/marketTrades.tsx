import React from 'react'
import MutedText from '../ui/muted-text'

export default function MarketTrades() {
  return (
    <div className='bg-xDark w-full h-full pt-1'>
      <div className="font-semibold text-[15px] text-white">Market Trades</div>
      <div className="x2xl:h-[330px] lg:h-full h-[300px] overflow-y-auto">
        <table className='w-full text-left'>
          <thead className='sticky top-0 z-10 bg-xDark'>

            <tr>
              <th className='w-1/2 pl-2 font-medium text-[13px]'>
                <MutedText>Price (USDT)</MutedText>
              </th>
              <th className='w-1/2 font-medium text-[13px]'>
                <MutedText>Amount (ETH)</MutedText>
              </th>
              <th className='w-1/3 pr-5 font-medium text-[13px]'>
                <MutedText>Time</MutedText>
              </th>
            </tr>
          </thead>

          {/* demo it */}
          <tbody>
            {
              Array.from({ length: 20 }).map((_, index) => (
                <tr className='relative' key={index}>
                  <td className='w-1/2 pl-2'>
                    {/* demo it... remove condition for color change */}
                    <p className={`text-[12px] ${(index % 2) === 0 ? 'text-xRedColor' : 'text-xGreenColor'}`}>2,945.80</p>
                  </td>
                  <td className='w-1/2'>
                    <p className='text-[12px] text-white'>17.52719</p>
                  </td>
                  <td className='w-1/3 pr-5'>
                    <p className='text-[12px] text-white'>03:45:29</p>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
