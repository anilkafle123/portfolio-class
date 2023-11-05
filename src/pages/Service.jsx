import React from 'react';
import DigitalMarketingImage from '../assets/istockphoto-1202863508-1024x1024.jpg'; 
import WebDevelopmentImage from '..//assets/istockphoto-1349482732-1024x1024.jpg';
import ApplicationDevelopmentImage from '..//assets/istockphoto-1350846581-1024x1024.jpg';
import Hero from '../components/Hero';

const Service = () => {
  const dipak = [
    {
      header: "Digital Marketing",
      p1: "We specialize in digital marketing, helping businesses to reach their target audience.",
      p2: "Read More +",
      image: DigitalMarketingImage,
    },
    {
      header: "Web Development",
      p1: "We develop websites that are engaging, user-friendly, and tailored to the needs of our clients.",
      p2: "Read More +",
      image: WebDevelopmentImage,
    },
    {
      header: "Application Development",
      p1: "We develop applications that solve problems or meet specific needs for our clients.",
      p2: "Read More +",
      image: ApplicationDevelopmentImage,
    },
  ];

  return (
    <>
    <div className="">

      <div className="">
        <h1 className="flex justify-center py-8 font-bold text-3xl text-blue-500 px-2">Our services</h1>
      </div>
      <div className="py-4 text-gray-700">
        <p className="flex justify-center py-2 font-bold text-4xl">We provide the necessary</p>
        <p className="flex justify-center font-bold text-4xl py-4">services to you</p>

        <div className="grid grid-cols-2 gap-[100px] pt-6 ml-8  ">
          {dipak.map((anils, index) => (
            <div key={index} className="flex justify-center gap-[50px] pt-9 ">
              <div className="flex flex-col items-center bg-gray-100 py-7 rounded-xl shadow-xl w-[300px] h-[400px] ">
                <img className=" w-[180px] h-[180px] object-cover rounded-full" src={anils.image} />
                <h1 className=" font-semibold text-lg pt-2">{anils.header}</h1>
                <p className="text-m pt-3 ml-4 mr-4">{anils.p1}</p>
                <button className="px-4 mt-5 py-2 bg-gray-800 text-white rounded-xl hover:bg-gradient-to-l from-indigo-300 to-indigo-600 transition-all ease-in-out duration-300">{anils.p2}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
   
    </>

  );
};

export default Service;
