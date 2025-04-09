import { MoreHorizontal} from 'lucide-react'
import React from 'react'
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'

const shortlistingStatus = ["Accepted", "Rejected"]
function ApplicantsTable() {
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent applied user</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>FullName</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Resume</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
          </TableHeader>
          <TableBody>
            <tr>
              <TableCell>Full Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Resume</TableCell>
              <TableCell>Date</TableCell>
              <TableCell className="text-right">
                <Popover>
                  <PopoverTrigger>
                    <MoreHorizontal/>
                  </PopoverTrigger>
                  <PopoverContent className='px-4 bg-white border border-gray-200 rounded-lg text-center'>
                  {
                    shortlistingStatus.map((status, index)=>
                    {
                      return(
                        <div key ={index} className='flex w-fit items-center my-2 cursor-pointer'><span>{status}</span></div>
                      )
                    })
                  }
                  </PopoverContent>
                </Popover>
                  
              </TableCell>


            </tr>
          </TableBody>
        
      </Table>
    </div>
  )
}

export default ApplicantsTable