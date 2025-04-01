import React from 'react'
import LatestJobCards from './LatestJobCards'

const randomJobs = [1,2,3,4,5,6,7,8]
function LatestJobs() {
  return (
    <div className='max-w-7xl mx-auto my-20'>
      <h1 className='text-3xl font-bold'>Exciting Job opportunities are here - <span className='text-4xl text-[#a608bf]'> apply now!</span></h1>
      <div className='grid grid-cols-3 gap-4 my-6'>
        {
          randomJobs.slice(0, 6).map((item,index) => <LatestJobCards/>)
        }
      </div>
    </div>
  )
}

export default LatestJobs