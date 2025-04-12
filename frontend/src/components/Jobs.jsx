import React, { useEffect, useState } from 'react'
import Navbar from './shared/Navbar'
import FilterCards from './FilterCards'
import Job from './Job'
import { useSelector } from 'react-redux'
import { motion} from 'framer-motion'

function Jobs() {
  const {allJob} = useSelector(store => store.job)
  const {searchQuery} = useSelector(store=>store.auth)
  const [filterJobs, setFilterJobs] = useState(allJob);
  useEffect(()=>
  {
    if(searchQuery)
    {
      const filteredJobs = allJob.filter((job) =>
      {
        return job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchQuery.toLowerCase())
      })
      setFilterJobs(filteredJobs)
    }
    else
    {
      setFilterJobs(allJob);
    }
  }, [allJob, searchQuery])
  return (
    <div>
        <Navbar/>
        <div className='max-w-7xl mx-auto mt-5'>
          <div className='flex gap-5'>
              <div className='w-20%'>
                <FilterCards/>
              </div>
              {
                filterJobs.length <= 0 ? <span> Job Not found </span> :(
                  <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                      <div className='grid grid-cols-3 gap-4'>
                        {
                          filterJobs.map((job) => (
                            <div 
                              key={job?._id}>
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