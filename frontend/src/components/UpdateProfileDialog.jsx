import { Dialog, DialogContent, DialogFooter, DialogTitle } from './ui/dialog'
import React, { useState} from 'react'
import { DialogHeader } from './ui/dialog'
import { Label } from '@radix-ui/react-label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import {useSelector} from 'react-redux'


function UpdateProfileDialog({open ,setOpen}) {
  const [loading, setloading] = useState(false);
  const {user} = useSelector(store => store.auth)
  const [input, setInput] = useState({
    fullname : user?.fullname,
    email : user?.email,
    phoneNumber : user?.phoneNumber,
    bio : user?.profile?.bio,
    skills : user?.profile?.skills.map(skill=>skill),
    file: user?.profile?.resume
  })
  return (
    <div>
      <Dialog open = {open}>
        <DialogContent className="sm:max-w-[425px]" onInteractOutside = {() => setOpen(false)}>
          <DialogHeader>
            <DialogTitle>Update Proile</DialogTitle>
          </DialogHeader>
          <form className='font-medium'>
            <div className='grid gap-4 py-4'>
              <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='name' className='text-right'>Name :</Label>
                  <Input
                  id="name" name="name" value={input.fullname} className="col-span-3"/>
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='email' className='text-right'>Email :</Label>
                  <Input
                  id="email" name="name" value={input.email} className="col-span-3"/>
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='number'  className='text-right'>Number :</Label>
                  <Input
                  id= "number" name="number" value={input.phoneNumber} className="col-span-3"/>
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='bio' className='text-right'>Bio :</Label>
                  <Input
                  id="bio" name="bio" value={input.bio} className="col-span-3"/>
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='skills' className='text-right'>Skills :</Label>
                  <Input
                  id="skills" name="skills" value={input.skills} className="col-span-3"/>
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='file' className='text-right'>Resume :</Label>
                  <Input
                  id="file" name="file" type="file" accept="application/pdf" className="col-span-3"/>
              </div>
            </div>
              <DialogFooter>
              {
                  loading ? <Button className="my-4 w-full"><Loader2 className='mr-2 h-4 w-4 animate-spin'/> Please Wait </Button> :  <Button type="submit" className="bg-[#a608bf] w-full my-4">Update</Button>
              }
              </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default UpdateProfileDialog