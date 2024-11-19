import React from 'react';
import banner from '../assets/banner.jpg'
const Banner = () => {
    return (
        <div className='bg-[#2d524b]'>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-center p-3 items-center w-full md:w-11/12 lg:w-10/12 mx-auto gap-5 md:gap-10'>
            <div>
              <h1 className='text-orange-500 font-semibold text-base mt-10'>You're in trusted hands.</h1>
              <h1 className='lg:text-4xl md:text-3xl text-2xl text-white font-bold'> Feeling stuck or overwhelmed by challenges in everyday life? Let me guide you toward clarity and solutions.</h1>
              <p className='text-base font-semibold text-white mt-4'>
        Whether you're struggling with career decisions, personal growth, or navigating life's ups and downs, I provide tailored advice and strategies to help you regain control.
      </p>
      <button className='btn text-black bg-white rounded-full text-lg mt-5 mb-5'>Explore More</button>
            </div>
            <div>
             <img src={banner} alt="" className='mt-10 h-[350px] rounded-xl shadow-xl mb-10'/>
            </div>
            
        </div>
       
        </div>
    );
};

export default Banner;