import React from 'react'
import { Button } from '../ui/button'
import { Avatar } from '../ui/avatar'
import { AvatarImage } from '../ui/avatar'

import { Popover } from '../ui/popover'
import { PopoverTrigger } from '../ui/popover'
import { PopoverContent } from '../ui/popover'
import { LogOut, User2 } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { setUser } from '@/redux/authSlice'


function Navbar() {
  
  const {user} = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = async () =>
  {
    try{
      const res = await axios.get(`${USER_API_END_POINT}/logout`,{withCredentials: true});
      if(res.data.success)
      {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    }catch(error)
    {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }
  return (
    <div className='bg-white'>
      <div className='flex justify-between mx-auto max-w-7xl h-16 items-center gap-5'> 
          <div>      
            <h1 className='text-3xl font-bold'> JOB <span className='text-orange-600'>PORTAL</span></h1>
          </div>
        <div className='flex items-center gap-10'>
          <ul className='flex front-medium items-center gap-5 font-bold'>
            {
                user && user.role === 'recruiter' ? (
                  <>
                     <li><Link to = "/admin/companies">Companies</Link></li>            
                     <li><Link to = "/admin/jobs">Jobs</Link></li>
                  </>
                ) : (
                  <>
                      <li><Link to = "/">Home</Link></li>            
                      <li><Link to = "/jobs">Jobs</Link></li>
                      <li><Link to = "/browse">Browse</Link></li>
                  </>
              )
            }
            
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
              <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
            </Avatar>
            </PopoverTrigger>
            <PopoverContent>
              <div className='flex gap-5 space-y-2'>
                  <Avatar className='cursor-pointer'> 
                  <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                  </Avatar>
                  <div>
                      <h4 className='font-medium'>{user?.fullname}</h4>
                      <p className='text-sm text-muted-foreground'>{user?.profile?.bio}</p>
                  </div>
              </div>
              <div className='flex flex-col text-gray-600 my-5'>
                {
                  user && user.role === 'student' && (
                      <div className='flex w-fit items-center gap-2 cursor-pointer'>
                          <User2/>
                          <Button variant="link"><Link to ="/profile">View Profile</Link></Button>
                      </div>
                  )
                }

                  <div className='flex w-fit items-center gap-2 cursor-pointer'>
                      <LogOut/>
                      <Button variant="link" onClick={logoutHandler}>Logout</Button>
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