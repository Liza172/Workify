import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import AdminJosTable from "./AdminJobsTable"
import useGetAllAdminJobs from '../hooks/useGetAllAdminJobs'
import { setsearchJobByText } from '@/redux/jobSlice'

function AdminJobs() {
  useGetAllAdminJobs();
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  useEffect(()=>
  {
    dispatch(setsearchJobByText(input));
  }, [input])
  const navigate = useNavigate();
  return (
    <div>
      <Navbar/>
      <div className='max-w-6xl mx-auto my-10'>
        <div className='flex items-center justify-between my-5'>
            <Input
              className="w-fit"
              placeholder = "Filter by name, role"
              onChange = {(e) =>setInput(e.target.value)}
            />
             <Button onClick = {() => navigate("/admin/jobs/create")} className='bg-[#a608bf] text-white 
             hover:bg-[#76457f]'>New Jobs</Button>
        </div>
        <AdminJosTable/>
      </div>
     
    </div>
  )
}

export default AdminJobs