import React, { useState, useEffect } from 'react'
import { io } from 'socket.io-client'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { useAuth } from '@/context/Authcontext';


const Graph = () => {
  const [data, setData] = useState([{ 'number': 0, 'name': 0 }])
  const [like, setLike] = useState(0)
  const MAX_POINTS = 10;

  useEffect(() => {
    const socket = io('https://data.gdscnsut.com/')
    socket.on('random_number', function (e) {
      setData((prevData) => {
        const updatedData = [...prevData, { ...e, 'name': prevData[prevData.length - 1].name + 1 }];
        // Limit to MAX_POINTS
        if (updatedData.length > MAX_POINTS) {
          updatedData.shift(); // Remove the oldest point
        }
        return updatedData;
      });
    })

    return () => {
      socket.disconnect();
    }
  }, [])
  
  return (
    <div className='w-full flex flex-col flex-1 justify-start items-center gap-20'>
      <div className='flex items-center gap-10 mb-4'>
        <div className='text-white bg-indigo-400 rounded-lg p-4 text-center'> CUSTOMERS : {data[data.length - 1].name}</div>
        <button className='text-white bg-indigo-400 rounded-lg p-4 text-center cursor-pointer' onClick={() => { setLike(like => like + 1) }}> ❤️ {like}</button>
      </div>
      <ResponsiveContainer width="100%" height={250} className={'flex flex-col gap-4 text-black transition-all duration-200'}>
        <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="number" stroke="indigo" />
          <CartesianGrid stroke="gray" strokeDasharray="5 5" />
          <XAxis dataKey="name" label={{ value: 'Number of Customer', position: 'insideBottomRight', offset: -5 }} />
          <YAxis label={{ value: 'Review (out of 10)', angle: -90, position: 'outsideLeft', offset: 20 }} />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Graph
