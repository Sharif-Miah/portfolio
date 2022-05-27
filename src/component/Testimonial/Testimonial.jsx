import React from 'react'
import './Testimonial.css'
import { Swiper, SwiperSlide  } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css'

import profile1 from '../../img/profile1.jpg';
import profile2 from '../../img/profile2.jpg';
import profile3 from '../../img/profile3.jpg';
import profile4 from '../../img/profile4.jpg';

const Testimonial = () => {

    const Clients =[
        {
            img: profile1,
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sed provident laborum, laudantium fuga impedit. Numquam culpa labore veniam perspiciatis porro fuga accusantium, consequatur maiores quo nemo iure rem nostrum tempore voluptatibus.'
        },
        {
            img: profile2,
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sed provident laborum, laudantium fuga impedit. Numquam culpa labore veniam perspiciatis porro fuga accusantium, consequatur maiores quo nemo iure rem nostrum tempore voluptatibus.'
        },
        {
            img: profile3,
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sed provident laborum, laudantium fuga impedit. Numquam culpa labore veniam perspiciatis porro fuga accusantium, consequatur maiores quo nemo iure rem nostrum tempore voluptatibus.'
        },
        {
            img: profile4,
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sed provident laborum, laudantium fuga impedit. Numquam culpa labore veniam perspiciatis porro fuga accusantium, consequatur maiores quo nemo iure rem nostrum tempore voluptatibus.'
        },
    ]

  return (
    <div className='t-wrapper' id='Testimonials'>
        <div className="t-heading">
        <span>Clients alwaye get </span>
        <span>Exceptional Work </span>
        <span>from me....</span>
        <div className="blur t-blur1" style={{background: 'var(--purple)'}}></div>
        <div className="blur t-blur2" style={{background: 'skyblue'}}></div>
        </div>
        

        {/* slider  */}

        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable: true}}
        >

          {Clients.map((client, index)=>{
            return(
              <SwiperSlide key={index}>
                <div className="testimonial">
                  <img src={client.img} alt="" />
                  <span>{client.review}</span>
                </div>
              </SwiperSlide>
            )
          } )}

        </Swiper>

    </div>
  )
}

export default Testimonial