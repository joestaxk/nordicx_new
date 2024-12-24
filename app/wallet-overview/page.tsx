'use client'  // Mark as client component
import OverviewLayout from '@/components/wallet-overview/overviewLayout'
import Footer from '@/components/xcommon/footer'
import Header from '@/components/xcommon/header'

export default function Page() {
  return (
    <div>
      <Header />
      <OverviewLayout />
      <Footer />
    </div>
  )
}