"use client";
import React, { useState } from 'react'
import BuycryptoHeader from './buycryptoHeader';
import BuyCrypto from './buycrypto';

export default function Index() {
    const [tabs, setTabs] = useState(1)
    return (
        <>
            <BuycryptoHeader tabs={tabs} setTabs={setTabs} />
            {tabs == 1 && <BuyCrypto/>}
        </>
    )
}
