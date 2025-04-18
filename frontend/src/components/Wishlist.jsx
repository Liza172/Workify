import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '@/redux/authSlice';
import useGetAllWishlistItem from './hooks/useGetAllWishlistItem';

function Browse() {
  const dispatch = useDispatch();
  useGetAllWishlistItem();
  const {wishlist} = useSelector(store => store.auth);
  
  useEffect(() => {
    dispatch(setSearchQuery(""));
  }, [])

  return (
    <div>
      <Navbar/>
      <div className='max-w-7xl mx-auto my-10'>
          <h1 className='font-bold text-lg'>Wishlist Items: ({wishlist?.length})</h1>
          <div className='grid grid-cols-3 gap-4 mt-10'>
          {
            wishlist?.map((job) =>
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

export default Browse