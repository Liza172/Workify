import React from 'react'
import Navbar from './shared/Navbar'
import FilterCards from './FilterCards'
import Job from './Job'
import { useSelector } from 'react-redux'

function Jobs() {
  const {allJob} = useSelector(store => store.job)
  return (
    <div>
        <Navbar/>
        <div className='max-w-7xl mx-auto mt-5'>
          <div className='flex gap-5'>
              <div className='w-20%'>
                <FilterCards/>
              </div>
              {
                allJob.length <= 0 ? <span> Job Not found </span> :(
                  <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                      <div className='grid grid-cols-3 gap-4'>
                        {
                          allJob.map((job) => (
                            <div key={job?._id}>
                              <Job job = {job}/>
                            </div>
                          ))
                        }
                      </div>
                  </div>
                )
              }
          </div>
            
        </div>
    </div>
  )
}

export default Jobs