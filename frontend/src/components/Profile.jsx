import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar } from './ui/avatar'
import { AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from '@radix-ui/react-label'
import AppliedJobTable from './AppliedJobTable'
import UpdateProfileDialog from './UpdateProfileDialog'
import { useSelector } from 'react-redux'
// const skills = ["HTML", "CSS", "JS", "React","Node"]

function Profile() {
  const isResume = true;
  const [open, setOpen] = useState(false);
  const {user} = useSelector(store => store.auth);


  return (
    
    <div>
      <Navbar/>
      <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
        <div className='flex justify-between'>
            <div className='flex items-center gap-8'>
              <Avatar className='h-24 w-24'>
                <AvatarImage src = "https://png.pngtree.com/png-vector/20220509/ourmid/pngtree-company-logo-design-trademark-design-creative-logo-png-image_4569380.png"></AvatarImage>
              </Avatar>
              <div >
                  <h1 className='font-medium text-xl'>{user?.fullname}</h1>
                  <p>{user?.profile?.bio}</p>
              </div>
            </div>
            <Button onClick = {() =>setOpen(true)} className="text-right" variant="outline"><Pen/></Button>
        </div>

        <div className='my-5'>
            <div className='flex items-center gap-3 my-2'>
              <Mail/>
              <span>{user?.email}</span>
            </div>
            <div className='flex items-center gap-3 my-2'>
              <Contact/>
              <span>{user?.phoneNumber}</span>
            </div>
        </div>
        <div>
          <h1 className='font-medium'>Skills</h1>
            <div className='flex gap-3 my-2 '>
            {
              user?.profile?.skills.length !== 0 ? user?.profile?.skills.map((item, index) => <Badge className="bg-[#9407aa] font-medium" key={index}>{item}</Badge>) : <span>NA</span>
            }
            </div> 
        </div>
        <div className='grid w-full mac-w-sm items-center gap-2'>
            <Label className='text-md font-bold'>Resume</Label>
            {
              isResume ? <a target='blank' href={user?.profile?.resume} className='text-blue-600 hover:underline'>{user?.profile.resumeOriginalName}</a> : <span>NA</span>
            }
        </div>
        
      </div>
      <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
            <h1 className='font-bold text-lg my-3'>Applied Job</h1>
            <AppliedJobTable/>
        </div>
        <UpdateProfileDialog open = {open} setOpen = {setOpen}/>
    </div>
  )
}

export default Profile