import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const Service = () => {
    const datas = useLoaderData()
    console.log(datas);
    return (
        <div className='w-full md:w-11/12 lg:w-10/12 mx-auto'>
            <h1 className='text-[#2d524b] font-bold text-2xl md:text-3xl lg:text-4xl text-center'>Our Services</h1>
            <p className='text-[#2d524b] text-opacity-70 text-center font-semibold text-lg lg:text-xl'>Empower Your Career Journey for Greater Success</p>
           <div className='grid grid-cols1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5 lg:gap-10'> 
           {
                datas.map(data=><Card data={data} key={data.id}></Card>)
            }
           </div>
        </div>
    );
};

export default Service;