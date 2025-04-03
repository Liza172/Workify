import { Badge } from './ui/badge'
import React from 'react'
import { Button } from './ui/button'

function JobDescription() {
  const isApplied = true;
  return (
    <div className='max-w-7xl mx-auto my-10'>
          <div className='flex items-center justify-between'>
            <div>
                <h1 className='font-bold text-xl '>Fronted Developer</h1>
                <div className='flex items-center gap-2 mt-4'>
                  <Badge className={'text-blue-600 font-bold'} variant="ghost"> 12 Positions</Badge>
                  <Badge className={'text-green-600 font-bold'} variant="ghost">Part Time</Badge>
                  <Badge className={'text-red-600 font-bold'} variant="ghost">24LPA</Badge>
                </div>
            </div>
            <Button disabled={isApplied} className={`rounded-lg ${isApplied ? 'bg-gray-800 cursor-not-allowed' : 'bg-[#9607ac] hover:bg-[#533158] cursor-pointer'}`}> {isApplied ? 'Already Applied' : 'Apply Now'} </Button>
                
          </div>
          <div className='my-4'>
              <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Description</h1>
              <h1 className='font-bold my-1'>Role :<span className='pl-4 font-normal text-gray-800'>Fronted Developer</span></h1>
              <h1 className='font-bold my-1'>Locatoin :<span className='pl-4 font-normal text-gray-800'>Hyderabad</span></h1>
              <h1 className='font-bold my-1'>Description :<span className='pl-4 font-normal text-gray-800'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, suscipit.</span></h1>
              <h1 className='font-bold my-1'>Experience :<span className='pl-4 font-normal text-gray-800'>2 yrs</span></h1>
              <h1 className='font-bold my-1'>Salary :<span className='pl-4 font-normal text-gray-800'>12LPA</span></h1>
              <h1 className='font-bold my-1'>Total Apllication :<span className='pl-4 font-normal text-gray-800'>4</span></h1>
              <h1 className='font-bold my-1'>Posted Date :<span className='pl-4 font-normal text-gray-800'>03-04-2025</span></h1>
          </div>

    </div>
  )
}

export default JobDescription