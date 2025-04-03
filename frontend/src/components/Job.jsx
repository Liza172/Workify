import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Badge } from './ui/badge'
import { Link, useNavigate } from 'react-router-dom'

function Job() {
  const navigate = useNavigate();
  const jobId = "fcvhjkjbnkjhuimkj";
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gay-100'>
      <div className='flex items-center justify-between'>
          <p className='text-zinc-500 text-sm'>2 days ago</p>
          <Button variant="outline" className="rounded-full" size="icon"><Bookmark/></Button>
      </div>
      <div className='flex items-center gap-4'>
          <Button className="" variant="outline" size = "icon">
            <Avatar>
              <AvatarImage src = "https://png.pngtree.com/png-vector/20220509/ourmid/pngtree-company-logo-design-trademark-design-creative-logo-png-image_4569380.png"></AvatarImage>
            </Avatar>
          </Button>
          <div>
              <h1 className='text-lg font-medium'>Company Name</h1>
              <p className='text-sm text-zinc-500'>India</p>
          </div>
      </div>
      <div>
          <h1 className='font-bold text-lg my-2'>Title</h1>
          <p className='text-zinc-500 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident minus aspernatur saepe?</p>
      </div>
      <div className='flex items-center gap-2 mt-4'>
          <Badge className={'text-blue-600 font-bold'} variant="ghost"> 12 Positions</Badge>
          <Badge className={'text-green-600 font-bold'} variant="ghost">Part Time</Badge>
          <Badge className={'text-red-600 font-bold'} variant="ghost">24LPA</Badge>
      </div>
      <div className='flex items-center gap-4 mt-4'>
        <Button variant="outline" ><Link to = {`/description/${jobId}`}>Details</Link></Button>
        <Button variant="outline" className="bg-[#a608bf] text-white">Save for Later</Button>
      </div>
    </div>
  )
}

export default Job