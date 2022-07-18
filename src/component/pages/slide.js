import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Navigation,Pagination, Scrollbar, A11y } from 'swiper';
import { useState, useEffect, useRef } from 'react';
import "swiper/scss"
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
const Slide = () => {

    const [course,setCourse] = useState([]);
    const url = "http://localhost:3000/category";
    const [width, setWidth] = useState(0);
    const fetchCourse = async()=>{
        const response = await fetch(url);
        const courseInfo = await response.json();
        setCourse(courseInfo);
    }

    useEffect(()=>{
        fetchCourse()
    },[])
  return (
    <Swiper className='card-slide'
      spaceBetween={50}
      slidesPerView={3}
      navigation
      modules={[Navigation, Pagination, Scrollbar, A11y ]}
     // pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
     {course.map((info)=>{
        return(
            <SwiperSlide className='product-card'>
                <div className='product-content'>
                <img className='img-1' src={info.img_url} alt="" />
                <img className='img-2' src={info.src_img} alt="" />
                <div className='main-content'></div>
                <div className='new'>
                <p>{info.title}</p>
                <p className='src'>{info.src}</p>
                <h3>Professional Certificate</h3></div>
               </div>              
            </SwiperSlide>
        )
     })} 


      {/* <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
      ...
    </Swiper>
  )
}

export default Slide