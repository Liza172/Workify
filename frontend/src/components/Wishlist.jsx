import React, { useEffect, useState } from 'react'
import Navbar from './shared/Navbar'
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import useGetAllWishlistItem from './hooks/useGetAllWishlistItem';
import axios from 'axios';
import { JOB_API_END_POINT } from '@/utils/constant';
import { addToWishlist } from '@/redux/authSlice';

function Wishlist() {
  const dispatch = useDispatch();
  useGetAllWishlistItem();
  const {wishlist} = useSelector(store => store.auth);
  const [allitems, setAllitems] = useState(wishlist);
  
   useEffect(()=>{
    const fetchItem = async () =>
    {
      try {
          const res = await axios.get(`${JOB_API_END_POINT}/getfromwishlist`, {withCredentials:true});
          if(res.data.success)
          {
            dispatch(addToWishlist(res.data.user.wishlist));
            setAllitems(res.data.user.wishlist);
          }
      }catch(error)
      {
        console.log(error);
      }
    }
    fetchItem();
  }, [allitems, setAllitems])

  return (
    <div>
      <Navbar/>
      <div className='max-w-7xl mx-auto my-10'>
          <h1 className='font-bold text-lg'>Wishlist Items: ({allitems?.length})</h1>
          <div className='grid grid-cols-3 gap-4 mt-10'>
          {
            allitems?.map((job) =>
            {
                return (
                  <Job key = {job._id} job = {job}/>
                )
            })
          }
          </div>
      </div>
    </div>
  )
}

export default Wishlist