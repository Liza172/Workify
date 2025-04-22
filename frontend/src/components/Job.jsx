import React, {useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Bookmark, Loader2 } from 'lucide-react'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Badge } from './ui/badge'
import { Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { JOB_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'

function Job({job}) {

  const {wishlist} = useSelector(store => store.auth);


  const [isInWishlist, setIsInWishlist] = useState(false);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setIsInWishlist(wishlist?.some(item => item._id === job._id));
}, [wishlist, job._id]);
  const daysAgoFunction = (mongodbTime) =>
  {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime-createdAt;
    return Math.floor(timeDifference/(1000*24*60*60));
  }

  const clickEventHandler = async (id) =>
  {
    try{
      setloading(true);
      const res = await axios.get(`${JOB_API_END_POINT}/addtowishlist/${id}`, {withCredentials:true});
      if(res.data.success)
      {
        toast.success(res.data.message);
      }
      setIsInWishlist(true);
    }catch(error)
    {
      console.log(error);
    }
    finally{
      setloading(false);
    }
  }
  const clickremoveListner = async (id) =>
  {
    try{
      setloading(true);
      const res = await axios.get(`${JOB_API_END_POINT}/removefromwishlist/${id}`, {withCredentials:true});
      if(res.data.success)
      {
        toast.success(res.data.message);
      }
      setIsInWishlist(false);
    }
    catch(error)
    {
      console.log(error);
    }finally{
      setloading(false);
    }
  }
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
      <div className='flex items-center justify-between'>
          <p className='text-zinc-500 text-sm'>{daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</p>
          <Button variant="outline" className="rounded-full" size="icon"><Bookmark/></Button>
      </div>
      <div className='flex items-center gap-4'>
          <Button className="" variant="outline" size = "icon">
            <Avatar>
              <AvatarImage src ={job?.company?.logo}></AvatarImage>
            </Avatar>
          </Button>
          <div>
              <h1 className='text-lg font-medium'>{job?.company?.name}</h1>
              <p className='text-sm text-zinc-500'>India</p>
          </div>
      </div>
      <div>
          <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
          <p className='text-zinc-500 text-sm'>{job?.description}</p>
      </div>
      <div className='flex items-center gap-2 mt-4'>
          <Badge className={'text-blue-600 font-bold'} variant="ghost">{job?.position}</Badge>
          <Badge className={'text-green-600 font-bold'} variant="ghost">{job.jobType}</Badge>
          <Badge className={'text-red-600 font-bold'} variant="ghost">{job?.salary}LPA</Badge>
      </div>
      <div className='flex items-center gap-4 mt-4'>
        <Button variant="outline" ><Link to = {`/description/${job._id}`}>Details</Link></Button>
        {
            loading ? <Button className='bg-[#1d66b9]'><Loader2 className='h-5 w-5 animate-spin' />Please Wait</Button> : isInWishlist ? <Button className='bg-[#b91d1d]' onClick={() => clickremoveListner(job._id)}>Remove from wishlist</Button> : <Button className='bg-[#1d66b9]' onClick={() => clickEventHandler(job._id)}>Save for later</Button>
        }
      </div>
    </div>
  )
}
                

export default Job