import React from 'react'
import OverviewHeader from './overviewHeader'
import OverviewSideBar from './overviewSideBar'
import OverviewEquityTrend from './overviewEquityTrend'
import OverviewAssetAllocation from './OverviewAssetAllocation'
import OverviewTopMenu from './overviewTopMenu'

export default function OverviewLayout() {
  return (
    <div className='flex min-h-screen w-full items-center bg-black'>
      <OverviewSideBar />
      <div className="w-full h-full xl:pl-5 sm:px-5 px-3 py-5">
        <OverviewTopMenu />
        <OverviewHeader />
        <OverviewEquityTrend />
        <OverviewAssetAllocation />
      </div>
    </div>
  )
}
