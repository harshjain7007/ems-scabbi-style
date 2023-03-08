import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import img1 from "../productCardImgs/img1.jpg"
import img2 from "../productCardImgs/img2.jpg"
import img3 from "../productCardImgs/img3.jpg"
import img4 from "../productCardImgs/img4.jpg"
import img5 from "../productCardImgs/img5.jpg"
import img6 from "../productCardImgs/img6.jpg"
import img7 from "../productCardImgs/img7.jpg"
import img8 from "../productCardImgs/img8.jpg"
import img9 from "../productCardImgs/img9.jpg"
import img10 from "../productCardImgs/img10.jpg"

import SliderCard from './SliderCard';

const FeaturedProduct = () => {

    const arrOfImg = [ img1, img2, img3, img4, img5, img6, img7, img8, img9, img10 ]   
    const price = '399💲'
    const title = "T-shirts"
    const detail = "Description"

  return (
    <div>
      <div className="container">
        <div className="subtitle">
            <h2>FEATURED PRODUCT</h2>
        </div>

        <OwlCarousel className='owl-theme' loop margin={10} nav>
            {arrOfImg.map((curElem, index) => {
                return <div key={index}>
                    <SliderCard imgUrl={curElem} price={price} title={title} detail={detail} />
                    </div>
            })}
</OwlCarousel>;

      </div>
    </div>
  )
}

export default FeaturedProduct
