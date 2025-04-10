import { Edit2, Eye, MoreHorizontal } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { Table } from '../ui/table'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function AdminJobsTable() {
  const {allAdminJobs, searchJobByText} = useSelector(store=>store.job)

  const [filterJobs, setFilterJobs] = useState(allAdminJobs);
  const navigate = useNavigate();
  
  useEffect(() =>
  {
    const filteredJobs = allAdminJobs.length >= 0 && allAdminJobs.filter((job) =>
    {
      if(!searchJobByText)
      {
        return true;
      }
      return job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) || job?.company?.name.toLowerCase().includes(searchJobByText.toLowerCase());
    });
    setFilterJobs(filteredJobs)
  }, [allAdminJobs, searchJobByText])
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent posted jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Company Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
        {
                    filterJobs?.map((job) =>(
                        <tr>
                      <TableCell>{job?.company?.name}</TableCell>
                      <TableCell>{job?.title}</TableCell>

                      <TableCell>{job.createdAt.split("T")[0]}</TableCell>
                      <TableCell className="text-right cursor-pointer">
                        <Popover>
                          <PopoverTrigger><MoreHorizontal/></PopoverTrigger>
                          <PopoverContent className='w-32 bg-white border border-gray-200  rounded-lg p-2'>
                            <div className='flex items-center gap-2 w-fit  cursor-pointer mt-2' onClick={() => navigate(`/admin/companies/${job._id}`)}>
                              <Edit2 className='w-4'/>
                              <span>Edit</span>
                            </div>
                            <div className='flex items-center gap-2 w-fit  cursor-pointer mt-2' onClick={() => navigate(`/admin/jobs/${job._id}/applicants`)}>
                              <Eye className='w-4'/>
                              <span>Applicants</span>
                            </div>
                          </PopoverContent>
                        </Popover>
                  </TableCell>
                  </tr> 
                    ))
                    
                }
                   

          
        </TableBody>
      </Table>
    </div>
  )
}

export default AdminJobsTable