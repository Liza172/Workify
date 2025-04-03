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
const skills = ["HTML", "CSS", "JS", "React","Node"]

function Profile() {
  const isResume = true;
  const [open, setOpen] = useState(false);
  

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
                  <h1 className='font-medium text-xl'>Full Name</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, cum.</p>
              </div>
            </div>
            <Button onClick = {() =>setOpen(true)} className="text-right" variant="outline"><Pen/></Button>
        </div>

        <div className='my-5'>
            <div className='flex items-center gap-3 my-2'>
              <Mail/>
              <span>liza@gmail.com</span>
            </div>
            <div className='flex items-center gap-3 my-2'>
              <Contact/>
              <span>9609607408</span>
            </div>
        </div>
        <div>
          <h1 className='font-medium'>Skills</h1>
            <div className='flex gap-3 my-2 '>
            {
              skills.length !== 0 ? skills.map((item, index) => <Badge className="bg-[#9407aa] font-medium" key={index}>{item}</Badge>) : <span>NA</span>
            }
            </div> 
        </div>
        <div className='grid w-full mac-w-sm items-center gap-2'>
            <Label className='text-md font-bold'>Resume</Label>
            {
              isResume ? <a target='blank' href="https://drive.google.com/file/d/14R7LeV9GC8JdQNUPkjvu81XL4uApeFci/view?usp=drive_link" className='text-blue-600 hover:underline'>My Resume</a> : <span>NA</span>
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