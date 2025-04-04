import React from 'react'
import LatestJobCards from './LatestJobCards'
import { useSelector } from 'react-redux'


function LatestJobs() {
  const {allJob} = useSelector(store=>store.job);

  return (
    <div className='max-w-7xl mx-auto my-20'>
      <h1 className='text-3xl font-bold'>Exciting Job opportunities are here - <span className='text-4xl text-[#a608bf]'> apply now!</span></h1>
      <div className='grid grid-cols-3 gap-4 my-6'>
        {
           allJob.length <= 0 ? <span> No Job Available</span> : allJob ?.slice(0, 6).map((job) =><LatestJobCards key = {job._id} job = {job}/>)
        }
      </div>
    </div>
  )
}

export default LatestJobs