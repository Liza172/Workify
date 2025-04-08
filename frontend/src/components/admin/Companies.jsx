import React from 'react'
import { Button } from '../ui/button'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router-dom'
import useGetALLCompanies from '../hooks/useGetAllCompanies'

function Companies() {
  useGetALLCompanies();
  const navigate = useNavigate();
  return (
    <div>
      <Navbar/>
      <div className='max-w-6xl mx-auto my-10'>
        <div className='flex items-center justify-between my-5'>
            <Input
              className="w-fit"
              placeholder = "Filter by name"
            />
             <Button onClick = {() => navigate("/admin/companies/create")} className='bg-[#a608bf] text-white hover:bg-[#76457f]'>New Company</Button>
        </div>
        <CompaniesTable/>
      </div>
     
    </div>
  )
}

export default Companies