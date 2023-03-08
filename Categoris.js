import React from 'react'

import imgFirst from "../thirdCardImg/img1.jpg"
import imgSecond from "../thirdCardImg/img2.jpg"
import imgThird from "../thirdCardImg/img3.jpg"
import imgFour from "../thirdCardImg/img4.jpg"
import imgFive from "../thirdCardImg/img5.jpg"
import imgSix from "../thirdCardImg/img6.jpg"
import imgSeven from "../thirdCardImg/img7.jpg"


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper'
import 'swiper/css';
import { Pagination, Navigation } from 'swiper'
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import 'swiper/css/autoplay'
const Categoris = () => {

    const arrImg = [ imgFirst, imgSecond, imgThird, imgFour, imgFive, imgSix, imgSeven ]
  

  return ( 
    <div style={{ backgroundColor: "rgb(27, 117, 188)" }}>
    <div className='container'>
        <div className="cardTitle" >
            <h2 className='text-center' style={{ fontWeight: 700, fontSize: "16px", color: "white" }}>BROWSE OUR CATEGORIS</h2>
        </div>

        <div className='my-4'>
   <Swiper
   modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
       >

        {arrImg.map((curElem, index) => {
          return <SwiperSlide key={index}>
        <img src={curElem} style={{ height: 390, width: "100%" }} alt="Img" />
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

export default Categoris


