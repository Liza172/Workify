import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchQuery } from '@/redux/authSlice';

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
          <span className='mx-auto px-4 py-2 text-center font-medium text-orange-600 rounded-full bg-gray-100'>Stop Searching. Start Thriving – With the No. 1 Job Hunt Website! </span>
          <h1 className='text-4xl font-bold'> Start Small. Dream Big.   <br/><span className='text-5xl text-[#a608bf] '>  Apply Today</span></h1>
          <p className='mt-4 text-zinc-700 text-sm'>Success isn’t about luck—it’s about showing up, staying consistent, and believing in yourself when no one else does. </p>
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