import React from 'react'
import Navbar from './shared/Navbar'
import Job from './Job';
import { useSelector } from 'react-redux';

const randomJobs = [1, 2, 3];


function Browse() {
  const {allJobs} = useSelector(store=>store.job);
  
  return (
    <div>
      <Navbar/>
      <div className='max-w-7xl mx-auto my-10'>
          <h1 className='font-bold text-lg'>Search Results ({allJobs.length})</h1>
          <div className='grid grid-cols-3 gap-4 mt-10'>
          {
            allJobs.map((job) =>
            {
                return (
                  <Job key = {job._id} job = {job}/>
                )
            })
          }
          </div>
      </div>
    </div>
  )
}

export default Browse