import { useSelector } from 'react-redux'
import { Badge } from './ui/badge'
import { Table, TableCaption, TableRow, TableHeader, TableHead, TableCell, TableBody } from './ui/table'
import React from 'react'

function AppliedJobTable() {
  const {allAppliedJobs} = useSelector(store=>store.job)
  return (
    <div>
      <Table className="">
        <TableCaption>A list of your applied jobs</TableCaption>
          <TableHeader>
            <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Job Rule</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody >
            {
              allAppliedJobs?.length <= 0  ? <span>You haven't applied any job yet.</span> : allAppliedJobs.map((appliedJob, index) =>(
                  <TableRow key = {appliedJob._id}>
                      <TableCell>{appliedJob?.createdAt?.split("T")[0]}</TableCell>
                      <TableCell>{appliedJob?.job?.title}</TableCell> 
                      <TableCell>{appliedJob?.job?.company?.name}</TableCell>
                      <TableCell className="text-right"><Badge className={`${appliedJob.status === 'rejected' ? 'bg-red-500': appliedJob.status === 'pending' ? 'bg-gray-400' : 'bg-green-500'}`}>{appliedJob?.status.toUppercase()}</Badge></TableCell>
                  </TableRow>
              ))
              
            }
          </TableBody>
        
      </Table>
    </div>
  )
}

export default AppliedJobTable