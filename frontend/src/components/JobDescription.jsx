import { Badge } from './ui/badge'
import React, { useEffect } from 'react'
import { Button } from './ui/button'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setSingleJob } from '@/redux/jobSlice';
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';

function JobDescription() {
  const params = useParams();
  const {singlejob} = useSelector(store => store.job)
  const {user} = useSelector(store=>store.auth)
  const jobId = params.id;
  const dispatch = useDispatch();

  const isApplied = singlejob?.application?.some(application => application.applicant === user?._id) || false;

  // console.log(singlejob);

  const applyJobHandler = async () =>
  {
    try{
      const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`,{withCredentials:true});
      console.log(res.data);
      if(res.data.success)
      {
        toast.success(res.data.message)
      }
    }catch(error)
    {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }

  useEffect(()=>{
    const fetchSingleJob = async () =>
    {
      try {
          const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {withCredentials:true});
          if(res.data.success)
          {
            dispatch(setSingleJob(res.data.job));
          }
      }catch(error)
      {
        console.log(error);
        toast.error(error.response.data.message);
      }
    }
    fetchSingleJob();
  }, [jobId, dispatch])

  return (
    <div className='max-w-7xl mx-auto my-10'>
          <div className='flex items-center justify-between'>
            <div>
                <h1 className='font-bold text-xl '>{singlejob?.title}</h1>
                <div className='flex items-center gap-2 mt-4'>
                  <Badge className={'text-blue-600 font-bold'} variant="ghost">{singlejob?.position}</Badge>
                  <Badge className={'text-green-600 font-bold'} variant="ghost">{singlejob?.jobType}</Badge>
                  <Badge className={'text-red-600 font-bold'} variant="ghost">{singlejob?.salary}LPA</Badge>
                </div>
            </div>
            <Button 
            onClick = {isApplied ? null : applyJobHandler}
            disabled={isApplied} 
            className={`rounded-lg ${isApplied ? 'bg-gray-800 cursor-not-allowed' : 'bg-[#9607ac] hover:bg-[#533158] cursor-pointer'}`}> {isApplied ? 'Already Applied' : 'Apply Now'} </Button>
                
          </div>
          <div className='my-4'>
              <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Description</h1>
              <h1 className='font-bold my-1'>Role : <span className='pl-4 font-normal text-gray-800'>{singlejob?.title}</span></h1>
              <h1 className='font-bold my-1'>Location : <span className='pl-4 font-normal text-gray-800'>{singlejob?.location}</span></h1>
              <h1 className='font-bold my-1'>Description : <span className='pl-4 font-normal text-gray-800'>{singlejob?.description}</span></h1>
              <h1 className='font-bold my-1'>Experience : <span className='pl-4 font-normal text-gray-800'>{singlejob?.experience} yrs</span></h1>
              <h1 className='font-bold my-1'>Salary : <span className='pl-4 font-normal text-gray-800'>{singlejob?.salary}LPA</span></h1>
              <h1 className='font-bold my-1'>Total Apllication : <span className='pl-4 font-normal text-gray-800'>{singlejob?.application?.length}</span></h1>
              <h1 className='font-bold my-1'>Posted Date : <span className='pl-4 font-normal text-gray-800'>{singlejob?.createdAt.split("T")[0]}</span></h1>
          </div>

    </div>
  )
}

export default JobDescription