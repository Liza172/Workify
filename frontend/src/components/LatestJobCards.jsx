import { Badge } from './ui/badge'
import React from 'react'

function LatestJobCards({job}) {
  return (
    <div className='p-5 cursor-pointer shadow-xl bg-white border border-gray-100 '>
      <div>
          <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
          <p>India</p>
      </div>
      <div>
          <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
          <p className='text-sm text-zinc-600 my-3'>{job?.description}</p>
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <Badge className={'text-blue-600 font-bold'} variant="ghost">{job?.position}</Badge>
        <Badge className={'text-green-600 font-bold'} variant="ghost">{job?.jobType}</Badge>
        <Badge className={'text-red-600 font-bold'} variant="ghost">{job?.salary}LPA</Badge>


      </div>
      
    </div>
  )
}

export default LatestJobCards