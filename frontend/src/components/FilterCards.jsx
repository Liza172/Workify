import { Label } from "@radix-ui/react-label"
import { RadioGroupItem } from "./ui/radio-group"
import React from 'react'
import { data } from 'react-router-dom'
import { RadioGroup } from "@radix-ui/react-radio-group"

const filterData = [
  {
    filterType : "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
  },
  {
    filterType : "Industry",
    array : ["Fronted Developer", "Backend Developer", "FullStack Developer"]
  },
  {
    filterType: "Salary",
    array : ["0-40k", "42-1lakh", "1lakh to 5lakh"]
  },
]
function FilterCards() {
  return (
    <div className="p-3 w-full bg-white rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className='mt-3'/>
      <RadioGroup>
      {
        filterData.map((data, index) =>(
          <div>
              <h1 className="font-bold text-lg">{data.filterType}</h1>
              {
                data.array.map((item, index) =>
                {
                return (
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value={item}/>
                    <Label>{item}</Label>
                  </div>
                )
                })
              }
          </div>
        ))
      }
      </RadioGroup>
    </div>
  )
}

export default FilterCards