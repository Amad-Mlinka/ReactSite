import React from 'react'
import "../../App.scss"
import { Cards } from '../cards/Cards'
import { HeroSection } from '../HeroSection/HeroSection'


export const Home = () => {
    return (
        <>
            <HeroSection/>
            <Cards/>
        </>
    )
}
