import { Badge } from './ui/badge'
import { Table, TableCaption, TableRow, TableHeader, TableHead, TableCell, TableBody } from './ui/table'
import React from 'react'

function AppliedJobTable() {
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
              [1,2,3].map((item, index) =>(
                  <TableRow key = {index}>
                      <TableCell>02-04-2025</TableCell>
                      <TableCell>Frontend Developer</TableCell>
                      <TableCell>Google</TableCell>
                      <TableCell className="text-right"><Badge>Selected</Badge></TableCell>
                  </TableRow>
              ))
              
            }
          </TableBody>
        
      </Table>
    </div>
  )
}

export default AppliedJobTable