import React from 'react'
import images from '../assets/IMG_2914.jpg'
const About = () => {

  const anil = [
    { number: "500+", lebel: "Suppliers connected" },
    { number: "500+", lebel: "Suppliers connected" },
    { number: "500+", lebel: "Suppliers connected" }
  ]

  return (
    <div className="flex justify-between py-8 bg-gray-200">

      <div className='w-1/2' >
        <h1 className='ml-[300px] pt-10 font-bold text-xl '>
          About Us
        </h1>
        <p className='text-justify ml-8 pt-8'>At Laxmi Bhardwaj Group Pvt Ltd, our mission is to provide innovative and high-quality solutions to meet the
          diverse needs of our customers. We are committed to being a trusted source for a wide range of products,
          including aluminum foil container raw materials, aluminum foil containers, aluminum foil containers with LED,
          paper cups in various sizes, paper plate raw materials, paper duna raw materials, ready-made paper plates,
          ready-made paper duna, and even good working second-hand paper plate machines. Our mission is to deliver
          excellence in each product category, ensuring sustainability and customer satisfaction</p>

        <div  className='flex justify-center gap-[50px] pt-6 ml-8'>

          {anil.map((anils, index) => (
            <div key={index} className='flex justify-center gap-[50px] pt-6 ml-8'>
              <div className=' bg-white p-4 rounded-lg shadow-lg w-[100px] h-[100px]'>
                <h1 className='text-center font-semibold text-lg'>{anils.number}</h1>
                <p>{anils.lebel}</p>
              </div>
            </div>
          ))}
 </div>

      </div>
      <div className='w-1/2 flex justify-center'>
        <img className=" rounded-2xl h-[350px] w-[400px] " src={images} />

      </div>
    </div>




  )
}

export default About