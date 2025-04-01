import { Badge } from './ui/badge'
import React from 'react'

function LatestJobCards() {
  return (
    <div className='p-5 cursor-pointer shadow-xl bg-white border border-gray-100 '>
      <div>
          <h1 className='font-medium text-lg'>Company Name</h1>
          <p>India</p>
      </div>
      <div>
          <h1 className='font-bold text-lg my-2'>Job Title</h1>
          <p className='text-sm text-zinc-600 my-3'>Lorem ipsum dolor sit amet consectetur. Lorem, ipsum dolor.</p>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <Badge className={'text-blue-600 font-bold'} variant="ghost"> 12 Positions</Badge>
        <Badge className={'text-green-600 font-bold'} variant="ghost">Part Time</Badge>
        <Badge className={'text-red-600 font-bold'} variant="ghost">24LPA</Badge>


      </div>
      
    </div>
  )
}

export default LatestJobCards