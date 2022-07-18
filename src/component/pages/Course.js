import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import SwiperCore from 'swiper/core'

SwiperCore.use([Navigation]);
const Course = () => {
    const [course, setCourse] = useState([]);
    const url = 'http://localhost:3000/results'

    const [width, setWidth] = useState(0);
    const fetchCourse = async () => {
        const response = await fetch(url);
        const courseInfo = await response.json();
        setCourse(courseInfo);
    }

    useEffect(() => {
        fetchCourse()
    }, [])
    return (
        <div className='course'>
            <section>
                <p>Courses and specilization</p>
                <p>Courses you can complete in a day</p>
            </section>
            <Swiper spaceBetween={50}
                slidesPerView={4}
                initialSlide={1}
                navigation
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}>
                {course.map((data => {
                    return (
                        <SwiperSlide>
                            <section key={data.course_id} className='course_inner'>
                                <div className='course_inner_img_banner'>
                                    <img src={data.media.course_image.uri} alt='' />
                                    <div>
                                        {/* <img src={ } alt='' /> */}
                                    </div>
                                    <section>
                                        <p>{data.name}</p>
                                    </section>
                                </div>

                            </section>
                        </SwiperSlide>
                    )
                }))}
            </Swiper>
        </div>
    )
}

export default Course