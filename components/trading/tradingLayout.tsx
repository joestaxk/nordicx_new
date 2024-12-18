import React from 'react'
import Exchange from './exchange'
import MarketTrades from './marketTrades'
import OpenOrders from './openOrders'
import Orderbook from './orderbook'
import SearchPairs from './searchPairs'
import StatusHead from './statusHead'

export default function TradingLayout() {
    return (
        <div className="w-full flex justify-center">
            <div className='x3xl:w-[1670px] w-[1400px] max-w-full grid 2xl:grid-cols-5 grid-cols-3 gap-1'>
                <div className="x2xl:block hidden col-span-1 w-full h-[900px]">
                    <Orderbook />
                </div>
                <div className="w-full xl:col-span-3 col-span-4 min-h-[900px] gap-1 grid x2xl:grid-rows-5">
                    <div className="row-span-3 gap-1 grid grid-rows-6">
                        {/* status  heade */}
                        <div className="row-span-1 w-full">
                            <StatusHead />
                        </div>
                        {/* trade-view */}
                        <div className="row-span-5"></div>
                    </div>
                    {/* exchange */}
                    <div className="row-span-2">
                        <Exchange />
                    </div>
                    <div className="lg:hidden block col-span-1 w-full x2xl:h-[900px]">
                        <SearchPairs />
                    </div>
                    <div className="x2xl:hidden block col-span-1 w-full x2xl:h-[900px]">
                        <Orderbook />
                    </div>
                    <div className="lg:hidden block col-span-1 w-full x2xl:h-[900px]">
                        <MarketTrades />
                    </div>
                </div>

                <div className="hidden col-span-1 w-full hx-[900px] gap-1 lg:grid grid-rows-5">
                    {/*  */}
                    <div className="w-full row-span-3">
                        <SearchPairs />
                    </div>
                    {/* order trade */}
                    <div className="row-span-2">
                        <MarketTrades />
                    </div>
                </div>
                <div className='h-[400px] w-full col-span-6'>
                    <OpenOrders />
                </div>
            </div>
        </div>
    )
}
