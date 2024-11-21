import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider2.jpg';
import slider3 from '../assets/slider3.jpg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
    const slides = [slider1, slider2, slider3];

    return (
        <div className="relative w-10/12 mx-auto mt-10 mb-10 md:mt-20 md:mb-20">
            <h1 className='mb-10 text-[#2d524b] font-bold text-center md:text-3xl text-2xl lg:text-4xl'>Inspiring Visuals for Your Journey</h1>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]} 
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                navigation={true}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <img 
                            src={slide} 
                            alt={`Slide ${index + 1}`} 
                            className="w-full object-cover rounded-xl" 
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;
