'use client'
import { Fugaz_One } from "next/font/google";
import React, { useState } from 'react'
import Graph from '@/components/Graph'
import Profile from "./Profile";

const Fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });


export default function Home() {
  const [profile, setProfile] = useState(false)
  const pro = ()=>{
    if(profile){
      return <Profile/>
    }else{
      return <Graph/>
    }
  }

  return (
    <div className='flex justify-start max-w-screen-lg mx-auto w-full flex-col flex-grow gap-4 p-4'>
      <div className='flex justify-around md:justify-end items-center gap-4'>
        <button className={`font-bold cursor-pointer p-2 rounded-lg ${Fugaz.className} ${profile ? ' ':' bg-indigo-400 '}`} onClick={()=>setProfile(false)}>Analytics </button>
        <button className={`font-bold cursor-pointer p-2 rounded-lg ${Fugaz.className} ${profile ? ' bg-indigo-400 ': ' '}`} onClick={()=>setProfile(true)}>Profile</button>
      </div>
      <hr
        style={{
          background: 'black',
          color: 'black',
          borderColor: 'black',
          height: '2px',
          width: '100%'
        }}
      />
      {pro()}
    </div>
  );
}
