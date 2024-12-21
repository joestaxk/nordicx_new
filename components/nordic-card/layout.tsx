import React from 'react'
import CardHeader from './header'
import GlobalConsumption from './global-consumption'
import CreateCard from './createCard'
import Advantages from './advantages'

export default function CardLayout() {
    return (
        <div className='bg-xDark'>
            <CardHeader />
            <GlobalConsumption />
            <CreateCard />
            <Advantages />
        </div>
    )
}
