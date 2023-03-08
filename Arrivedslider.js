import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper'
import 'swiper/css';
import { Pagination, Navigation } from 'swiper'
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import 'swiper/css/autoplay'

import firstImg from "../secondCardImg/img1.jpg"
import secondImg from "../secondCardImg/img2.jpg"
import thirdImg from "../secondCardImg/img3.jpg"

import SliderCard from './SliderCard';
import { FaRupeeSign } from "react-icons/fa"
 

const Arrivedslider = () => {
  console.log(<FaRupeeSign />)
  const cardImgaes = [ firstImg, secondImg, thirdImg, firstImg, secondImg, thirdImg ]
  const price = "199" 
  const title = "T-shirts"
  const detail = "Description"

  return (
    <div style={{ marginTop : "50px" }}>
      <FaRupeeSign />
        <div className="container">
            <div className="subtitle">
                {/* <h2 style={{ fontSize: "16px", fontWeight: "700", position: 'relative' }}>JUST ARRIVED</h2> */}
                <h2>JUST ARRIVED</h2>
            </div>

            <div className='my-4' style={{ position: "relative" }}>
   <Swiper className='mySwiper' style={{ width: "82%", position: "static" }}
   modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={4}
      navigation
      // pagination={{ clickable: true }}
      // autoplay={{ delay: 1000, disableOnInteraction: false }}
      >
        {cardImgaes.map((curElem, index) => {
          return <SwiperSlide key={index}>
            <SliderCard imgUrl={curElem} price={price} title={title} detail={detail} currency={<FaRupeeSign />}/>
          </SwiperSlide>
        })}

    </Swiper>
    </div>
    <div>
    </div>
        </div>
    </div>
  )
}

export default Arrivedslider
