import React from 'react';
import Navbber from './Navbber';
import Footer from './Footer';
import { useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';
import {Helmet} from "react-helmet";
const Course = () => {
    const courses = useLoaderData()
    
    return (
        <div>
             <Helmet>
              
              <title>Career Pathway || Course</title>
             
          </Helmet>
            <Navbber></Navbber>
           <section className='md:w-10/12 w-full  mx-auto'>
         <div className='mt-10 mb-10'>
            <h1 className='text-[#2d524b] font-bold text-2xl md:text-3xl lg:text-4xl text-center mb-5'>Explore Popular Courses</h1>
        <div className='grid grid-cols-1 p-4 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {courses.map((course) => (
                            <CourseCard key={course.id} course={course} />
                        ))}
        </div>
         </div>
           </section>
            <Footer></Footer>
            
        </div>
    );
};

export default Course;


