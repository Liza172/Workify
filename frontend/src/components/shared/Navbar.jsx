import React from 'react'
import { Button } from '../ui/button'
import { Avatar } from '../ui/avatar'
import { AvatarImage } from '../ui/avatar'

import { Popover } from '../ui/popover'
import { PopoverTrigger } from '../ui/popover'
import { PopoverContent } from '../ui/popover'
import { LogOut, User2 } from 'lucide-react'
import { Link } from 'react-router-dom'


function Navbar() {
  const user = false;
  return (
    <div className='bg-white'>
      <div className='flex justify-between mx-auto max-w-7xl h-16 items-center gap-5'> 
          <div>      
            <h1 className='text-3xl font-bold'> JOB <span className='text-orange-600'>PORTAL</span></h1>
          </div>
        <div className='flex items-center gap-10'>
          <ul className='flex front-medium items-center gap-5 font-bold'>
            <li><Link to = "/">Home</Link></li>            
            <li><Link to = "/jobs">Jobs</Link></li>
            <li><Link to = "/browse">Browse</Link></li>
          </ul>
          {
            !user ? (
                  <div className='flex gap-3 items-center'>
                    <Link to="/login"><Button variant="outline" className="font-bold">Login</Button></Link>
                    <Link to="/signup"><Button className="bg-[#a608bf] hover:bg-[#865497] font-bold">Signup</Button></Link>
                  </div>
                ): (
          <Popover>
            <PopoverTrigger asChild>
            <Avatar className='cursor-pointer'> 
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            </Avatar>
            </PopoverTrigger>
            <PopoverContent>
              <div className='flex gap-5 space-y-2'>
                  <Avatar className='cursor-pointer'> 
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  </Avatar>
                  <div>
                      <h4 className='font-medium'>Liza MernStack</h4>
                      <p className='text-sm text-muted-foreground'>Lorem ipsum dolor sit.</p>
                  </div>
              </div>
              <div className='flex flex-col text-gray-600 my-5'>
                  <div className='flex w-fit items-center gap-2 cursor-pointer'>
                      <User2/>
                      <Button variant="link">View Profile</Button>
                  </div>

                  <div className='flex w-fit items-center gap-2 cursor-pointer'>
                      <LogOut/>
                      <Button variant="link">Logout</Button>
                  </div>

              </div>
            </PopoverContent>
          </Popover> 
        )}
        </div>
      </div>
    </div>
    
  )
}

export default Navbar