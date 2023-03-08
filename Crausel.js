import React from 'react'
import firstImg from '../slideImg/img1.jpg'
import secondImg from '../slideImg/img2.jpg'
import thirdImg from '../slideImg/img3.jpg'
import fourthImg from '../slideImg/img4.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper'
import 'swiper/css';
import { Pagination, Navigation } from 'swiper'
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import 'swiper/css/autoplay'

const Crausel = () => {
  const arrImg = [ firstImg, secondImg, thirdImg, fourthImg ]
  return (
    <>
    <div className='my-4'>
   <Swiper
   modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={3}
    //   pagination={{ clickable: true }}
    //   navigation
      autoplay={{ delay: 1000, disableOnInteraction: false }} >

        {arrImg.map((curElem, index) => {
          return <SwiperSlide key={index}>
        <img src={curElem} style={{ height: 390, width: "100%" }} alt="Img" />
          </SwiperSlide>
        })}
    </Swiper>
    </div>
    <div>
    </div>
        </>
  )
}

export default Crausel








// import React, { useState } from 'react'
// import Carousel from 'react-bootstrap/Carousel';
// import firstImg from '../slideImg/img1.jpg'
// import secondImg from '../slideImg/img2.jpg'
// import thirdImg from '../slideImg/img3.jpg'
// import fourthImg from '../slideImg/img4.jpg'

// function ControlledCarousel() {
//     const [index, setIndex] = useState(0);
  
//     const handleSelect = (selectedIndex, e) => {
//       setIndex(selectedIndex);
//     };
  
//     return (
//       <Carousel activeIndex={index} onSelect={handleSelect}>
//         <Carousel.Item>
//           <img
//             className="d-block"
//             style={{ height: 390 }}
//             src={firstImg}
//             alt="First slide"
//           />
//           <Carousel.Caption>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             style={{ height: 390 }}
//             src={secondImg}
//             alt="Second slide"
//           />
  
//           <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             style={{ height: 390 }}
//             src={thirdImg}
//             alt="Third slide"
//           />
  
//           <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>
//               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>

//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             style={{ height: 390 }}
//             src={fourthImg}
//             alt="Third slide"
//           />
  
//           <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>
//               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     );
//   }

// const Crausel = () => {
//   return (
//     <div>
//         <ControlledCarousel />
//     </div>
//   )
// }

// export default Crausel



