import React, { useEffect } from 'react'
import Navbar from '../shared/Navbar'
import ApplicantsTable from './ApplicantsTable'
import { useParams } from 'react-router-dom'
import { APPLICATION_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setAllApplicants } from '@/redux/applicationSlice';

function Applicants() {
  const params = useParams();
  const dispatch = useDispatch();
  const {applicants} = useSelector(store =>store.application)
  useEffect(() =>
  {
    const fetchAllApplicants = async () =>
      {
        try{
            const res = await axios.get(`${APPLICATION_API_END_POINT}/${params.id}/applicants`, {withCredentials:true});
            console.log(res);
              dispatch(setAllApplicants(res.data.job))
        }catch(error)
        {
          console.log(error);
        }
      } 
      fetchAllApplicants();
  },[])
  return (
    <div>
      <Navbar/>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-4xl font-bold my-5'>Applicants {applicants.application.length}</h1>
        <ApplicantsTable/>
      </div>
    </div>
  )
}

export default Applicants