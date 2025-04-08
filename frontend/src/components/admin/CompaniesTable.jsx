import { Edit2, MoreHorizontal } from 'lucide-react'
import React from 'react'
import { TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { Avatar , AvatarImage} from '../ui/avatar'
import { Table } from '../ui/table'
import { useSelector } from 'react-redux'


function CompaniesTable() {
  const {companies} = useSelector(store =>store.company)
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent registered companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
        {
                    companies?.map((company) =>{
                        <tr>
                        <TableCell>
                        <Avatar>
                            <AvatarImage src = "https://png.pngtree.com/png-vector/20220509/ourmid/pngtree-company-logo-design-trademark-design-creative-logo-png-image_4569380.png"></AvatarImage>
                        </Avatar>
                      </TableCell>
                      <TableCell>{company.name}</TableCell>
                      <TableCell>{company.createdAt.split("")[0]}</TableCell>
                      <TableCell className="text-right cursor-pointer">
                        <Popover>
                          <PopoverTrigger><MoreHorizontal/></PopoverTrigger>
                          <PopoverContent className='w-32'>
                            <div className='flex items-center gap-2 w-fit  cursor-pointer'>
                              <Edit2 className='w-4'/>
                              <span>Edit</span>
                            </div>
                          </PopoverContent>
                        </Popover>
                  </TableCell>
                  </tr> 
                    })
                    
                }
                   

          
        </TableBody>
      </Table>
    </div>
  )
}

export default CompaniesTable