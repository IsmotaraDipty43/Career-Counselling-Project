import React from 'react';
import error from '../assets/error.png'
const Error = () => {

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-5xl font-bold text-black mt-20'>Page Not Found</h1>
      <img src={error} alt="Error page" />
    </div>
  );
};



export default Error;