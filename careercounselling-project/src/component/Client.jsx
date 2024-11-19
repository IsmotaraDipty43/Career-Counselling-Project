
import client from '../assets/client.jpg'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import client1 from '../assets/client1.jpg'; // Replace with your image paths
import client2 from '../assets/client2.jpg';
import client3 from '../assets/client3.jpg';
import client4 from '../assets/client4.jpg';

const Client = () => {
    return (
        <div className='w-full relative h-[1120px] md:h-[900px] mt-10 mb-10'>
            <h1 className='text-center  font-bold text-[#2d524b] text-2xl md:text-3xl  lg:text-4xl mb-5'>What's Our Clients Say</h1>
          <div className="w-full  h-[200px] md:h-[300px] lg:h-[600px] relative bg-cover bg-center" style={{ backgroundImage: `url(${client})` }}>
 
</div>
<div className='md:w-2/3 w-full p-2   h-[500px] left-[300px] absolute bg-transparent top-[530px] hidden lg:block'>
<Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        {/* Card 1 */}
        <SwiperSlide>
          <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col h-[360px]">
           <div className='flex justify-center items-center'>
           <img
              src={client2}
              alt="John Doe"
              className="w-20 h-20 rounded-full mb-4"
            />
           </div>

            <p className="mt-3 text-gray-600 text-base md:text-lg font-semibold text-justify">
            "The team’s dedication and professionalism left me in awe. From the moment I reached out to them, I was met with unwavering support and expertise. They tailored solutions specific to my needs, making the entire process seamless and enjoyable. Truly a world-class experience!"
            </p>
            <h3 className="text-xl  font-bold text-red-500">John Doe</h3>
            <div>
            <div className="rating">
           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input
               type="radio"
            name="rating-2"
                className="mask mask-star-2 bg-orange-400"
               defaultChecked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            
                  </div>
            </div>
          </div>
        </SwiperSlide>

      {/* Card 2 */}
<SwiperSlide>
  <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col h-[360px]">
    <div className="flex justify-center items-center">
      <img
        src={client1}
        alt="Jane Smith"
        className="w-20 h-20 rounded-full mb-4"
      />
    </div>
    <p className="mt-3 text-gray-600 text-lg font-semibold text-justify">
      "Amazing experience! The team demonstrated unmatched professionalism and unwavering support. Their ability to understand my needs and provide practical solutions was remarkable. I felt truly valued and supported throughout the process. Highly recommend their exceptional services!"
    </p>
    <h3 className="text-xl font-bold text-red-500">Jane Smith</h3>
    <div>
      <div className="rating">
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
          defaultChecked
        />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
      </div>
    </div>
  </div>
</SwiperSlide>

{/* Card 3 */}
<SwiperSlide>
  <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col h-[360px]">
    <div className="flex justify-center items-center">
      <img
        src={client4}
        alt="Michael Brown"
        className="w-20 h-20 rounded-full mb-4"
      />
    </div>
    <p className="mt-3 text-gray-600 text-lg font-semibold text-justify">
      "I am incredibly impressed with the smooth and efficient process. The team’s expertise and clear communication made everything stress-free. They exceeded my expectations, providing exceptional insights and actionable strategies. Their dedication to client satisfaction is second to none!"
    </p>
    <h3 className="text-xl font-bold text-red-500">Michael Brown</h3>
    <div>
      <div className="rating">
        <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
        <input
          type="radio"
          name="rating-3"
          className="mask mask-star-2 bg-orange-400"
          defaultChecked
        />
        <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
      </div>
    </div>
  </div>
</SwiperSlide>

{/* Card 4 */}
<SwiperSlide>
  <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col h-[360px]">
    <div className="flex justify-center items-center">
      <img
        src={client3}
        alt="Emily Davis"
        className="w-20 h-20 rounded-full mb-4"
      />
    </div>
    <p className="mt-3 text-gray-600 text-lg font-semibold text-justify">
      "Absolutely wonderful! The team went above and beyond to deliver an outstanding experience. Their combination of skill, dedication, and care is truly commendable. I felt supported and empowered at every step, making it an unforgettable journey. I would recommend them wholeheartedly!"
    </p>
    <h3 className="text-xl font-bold text-red-500">Emily Davis</h3>
    <div>
      <div className="rating">
        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
        <input
          type="radio"
          name="rating-4"
          className="mask mask-star-2 bg-orange-400"
          defaultChecked
        />
        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
      </div>
    </div>
  </div>
</SwiperSlide>

      </Swiper>
</div>



<div className='lg:hidden grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 '>
<div className="bg-white shadow-lg rounded-xl p-6 flex flex-col border">
    <div className="flex justify-center items-center">
      <img
        src={client4}
        alt="Michael Brown"
        className="w-20 h-20 rounded-full mb-4"
      />
    </div>
    <p className="mt-3 text-gray-600 text-lg font-semibold text-justify">
      "I am incredibly impressed with the smooth and efficient process. The team’s expertise and clear communication made everything stress-free. They exceeded my expectations, providing exceptional insights and actionable strategies. Their dedication to client satisfaction is second to none!"
    </p>
    <h3 className="text-xl font-bold text-red-500">Michael Brown</h3>
    <div>
      <div className="rating">
        <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
        <input
          type="radio"
          name="rating-3"
          className="mask mask-star-2 bg-orange-400"
          defaultChecked
        />
        <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
      </div>
    </div>
  </div>

<div className="bg-white shadow-lg rounded-xl p-6 flex flex-col border">
    <div className="flex justify-center items-center">
      <img
        src={client3}
        alt="Emily Davis"
        className="w-20 h-20 rounded-full mb-4"
      />
    </div>
    <p className="mt-3 text-gray-600 text-lg font-semibold text-justify">
      "Absolutely wonderful! The team went above and beyond to deliver an outstanding experience. Their combination of skill, dedication, and care is truly commendable. I felt supported and empowered at every step, making it an unforgettable journey. I would recommend them wholeheartedly!"
    </p>
    <h3 className="text-xl font-bold text-red-500">Emily Davis</h3>
    <div>
      <div className="rating">
        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
        <input
          type="radio"
          name="rating-4"
          className="mask mask-star-2 bg-orange-400"
          defaultChecked
        />
        <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Client;