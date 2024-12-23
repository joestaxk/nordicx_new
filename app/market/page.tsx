"use client";``
import WidgetSection from '@/components/market/widgetSection'
import Footer from '@/components/xcommon/footer'
import Header from '@/components/xcommon/header'
import React, { useState } from 'react'

export default function Page() {
    const [tab, setTabs] = useState(3)
    return (
        <div className='bg-xDark'>
            <Header />
            <WidgetSection tabs={tab} setTabs={setTabs}/>
            <Footer />
        </div>
    )
}
