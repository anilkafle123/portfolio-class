import React from 'react';
import image from "../assets//SBOA0890.jpg"


const Hero = () => {
  return (
  <div className="flex justify-center gap-10 items-center  m-4 bg-gray-200 py-5">
    <div className='flex flex-col items-center justify-center'>
      <h1 className="font-bold text-3xl text-blue-700 pb-4">Anil kafle</h1>
      <p>I am a student of Birendra Multiple Campus studying BSc CSIT seventh semester</p>
      <div className="pt-4 pl-5">
        <button className="bg-blue-500 text-white px-2 py-2 rounded-md mr-2 pb-3 ">See more</button>
      </div>
      </div>
      <div className='flex justify-start items-end'>
      <img className="rounded-2xl h-[350px] w-[400px] " src={image}   />

      </div>

    </div>
  );
};

export default Hero;
