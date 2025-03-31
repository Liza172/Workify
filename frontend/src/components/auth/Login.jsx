import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '@radix-ui/react-label'
import { Input } from '../ui/input'
import { RadioGroup } from '@radix-ui/react-radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {USER_API_END_POINT} from '@/utils/constant.js'
function Login() {
  const [input, setInput] = useState({
    email:"",
    password:"",
    role:"",
  })
  const changeEventHandler = (e) =>
  {
    setInput({...input, [e.target.name] : e.target.value})
  }
  const navigate = useNavigate();
  const submitHandler = async (e) =>
  {
      e.preventDefault();
      try
      {
            const res = await axios.post(`${USER_API_END_POINT}/login`,input,{
            headers: {
              "Content-Type" : "application/json"
                },withCredentials : true,
            });
        if(res.data.success)
        {
          navigate("/");
          toast.success(res.data.message);
        }
      }catch(error)
      {
        console.log(error);
      }

  }
  return (
    <div>
      <Navbar/>
      <div className='flex items-center justify-center max-w-7xl mx-auto'>
        <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'> 
          <h1 className='font-bold text-2xl mb-5'>Login</h1>
          <div className='my-3'>
              <Label>Email</Label>
              <Input
               type = "email"
               value = {input.email}
               name = "email"
               onChange = {changeEventHandler}
               placeholder = "abc@gmail.com"
              />
          </div>
  
          <div className='my-3'>
              <Label>Password</Label>
              <Input
                type = "password"
                value = {input.password}
                name = "password"
                onChange = {changeEventHandler}
                placeholder = "******"
              />
          </div>
          <div className='flex items-center justify-between'>
                <RadioGroup className='flex items-center gap-4 my-5'>
                  <div className="flex items-center space-x-2">
                      <Input
                        type = "radio"
                        name = "role"
                        value = "student"
                        checked = {input.role === 'student'}
                        onChange = {changeEventHandler}
                        className="cursor-pointer"
                      />
                      <Label htmlFor="r1">Student</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                      <Input
                          type = "radio"
                          name = "role"
                          value = "recruiter"
                          checked = {input.role === 'recruiter'}
                          onChange = {changeEventHandler}
                          className="cursor-pointer"
                      />
                      <Label htmlFor="r2">Recruiter</Label>
                  </div>
              </RadioGroup>
              <div className='flex items-center gap-3'>
                  <Label>Profile</Label>
                  <Input
                      accept = "image/*"
                      type = "file"
                      className="cursor-pointer"
                    />
              </div>

          </div>
          <div className='flex justify-between'>
              <Button type="submit" className="bg-[#a608bf]">Login</Button>
              <span>Don't have account ? <Link to ="/signup" className="text-blue-600 text-sm">Sign Up</Link></span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login