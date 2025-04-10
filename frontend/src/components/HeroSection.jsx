import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

function HeroSection() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchJobHandler = () =>
  {
    dispatch(setSearchQuery(query));
    navigate("/browse");
  }
  return (
    <div className='text-center'>
      <div className='flex flex-col gap-5 my-10'>
          <span className='mx-auto px-4 py-2 text-center font-medium text-orange-600 rounded-full bg-gray-100'>No . 1 Job Hunt Website </span>
          <h1 className='text-4xl font-bold'> Search, Apply & <br/>Get Your <span className='text-5xl text-[#a608bf] '>Dream Job </span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perspiciatis iusto non quos et omnis animi iste!</p>
          <div className ='flex w-[48%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto '>
              <input
                type = "text"
                placeholder='Find Your dream jobs'
                onChange = {(e) => setQuery(e.target.value)}
                className='ouline-none border-none w-full'
              />
              <Button onClick = {searchJobHandler} className="rounded-r-full bg-[#a608bf]">
                <Search className='h-5 w-5'/>
              </Button>
          </div>
      </div>
    </div>
  )
}

export default HeroSection