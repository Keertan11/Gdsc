'use client'
import React from 'react'
import DemoGraph from '@/components/DemoGraph'
import { Fugaz_One } from 'next/font/google';
import CallToAction from './CallToAction';

const Fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

const Landing = () => {
    return (
        <div className='w-full h-full mx-auto text-center flex flex-col justify-center items-center gap-6 max-w-screen-lg '>
            <div className='space-y-2 mt-8'>
                <h1 className={'text-5xl sm:text-text-6xl md:text-7xl text-center ' + Fugaz.className}><span className='textGradient'>Broodl</span> - track your <span className='textGradient'>progress.</span></h1>
                <p className='text-lg sm:text-xl md:text-2xl text-center w-full mx-auto max-w-[700px] font-bold'>A perfect KPI (Key Performance Indicator) Dashboard</p>
            </div>
            <div className={'text-2xl text-indigo-500 font-bold ' + Fugaz.className}>You're one step away </div>
            <CallToAction />
            <DemoGraph />
        </div>
    )
}

export default Landing
