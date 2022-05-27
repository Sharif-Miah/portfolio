import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'

import Sidebar from '../../src/img/sidebar.png';
import Ecommerce from '../../src/img/ecommerce.png';
import HOC from '../../src/img/hoc.png';
import Musicapp from '../../src/img/musicapp.png';
import 'swiper/css'



const Portfolio = () => {
  return (
    <div className='portfolio' id='Portfolio'>
        {/* heading  */}

        <span>Recent Projects</span>
        <span>Portfolio</span>

        {/* slider  */}

        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <img src={Sidebar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommerce} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={HOC} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Musicapp} alt="" />
            </SwiperSlide>



        </Swiper>
    </div>
  )
}

export default Portfolio