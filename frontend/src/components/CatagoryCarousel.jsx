import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSearchQuery } from '@/redux/authSlice'

const catagory = [
    "Fronted Developer",
    "Backend Developer",
    "Data science",
    "Graphical Designer",
    "Fullstack Developer"
]

function CatagoryCarousel() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchJobHandler = (query) =>
    {
      dispatch(setSearchQuery(query));
      navigate("/browse");
    }
  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-20">
        <CarouselContent>
            {
              catagory.map((cat, index) => (
                <CarouselItem className= "md: basis-1/2 lg-basis-1/3">
                  <Button onClick = {() => searchJobHandler(cat)} variant="outline" className="rounded-full text-lg">{cat}</Button>
                </CarouselItem>
              ))
            }
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
      </Carousel>
    </div>
  )
}

export default CatagoryCarousel