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
            <div className='x3xl:w-[1670px] w-[1400px] max-w-full grid x2xl:grid-cols-5 lg:grid-cols-6 grid-cols-4 gap-1'>
                <div className="x2xl:grid hidden col-span-1 x2xl:h-[900px] overflow-hidden">
                    <Orderbook />
                </div>
                {/* MIDDLE */}
                <div className="w-full relative x2xl:col-span-3 col-span-4 x2xl:h-[900px] min-h-[900px] gap-1 grid x2xl:grid-rows-5">
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
                    <div className="lg:hidden overflow-hidden x2xl:h-[900px]">
                        <SearchPairs />
                    </div>
                    <div className="x2xl:hidden block col-span-1 w-full x2xl:h-[900px]">
                        <Orderbook />
                    </div>
                    <div className="lg:hidden block col-span-1 w-full x2xl:h-[900px]">
                        <MarketTrades />
                    </div>
                </div>

                <div className="hidden x2xl:col-span-1 col-span-2 x2xl:h-[900px] gap-1 lg:grid grid-rows-5">
                    {/*  */}
                    <div className="h-full overflow-hidden row-span-3">
                        <SearchPairs />
                    </div>
                    {/* order trade */}
                    <div className="row-span-2  h-auto overflow-hidden">
                        <MarketTrades />
                    </div>
                </div>
                {/* BOTTOM */}
                <div className='h-[400px] w-full x2xl:col-span-5 col-span-6'>
                    <OpenOrders />
                </div>
            </div>
        </div>
    )
}
