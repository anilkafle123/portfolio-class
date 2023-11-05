import { FaEnvelope, FaPhoneSquare, FaSearchLocation, } from 'react-icons/fa'
import Form from '../components/Form';

const Contact = () => {

  const dipak = [
    {
      icon: <FaSearchLocation size={35} className='text-blue-500 ' />,
      header: "Office address",
      p1: "Lines Chowk Chitwan",
    },
    {
      icon: <FaPhoneSquare size={35} className='text-green-500' />,
      header: "Phone",
      p1: "9869054809",
    },
    {
      icon: <FaEnvelope size={35} className='text-red-500' />,
      header: "Email",
      p1: "anilkafle23@gmail.com",
    },

  ];
  return (
    <>
      <div className="flex justify-between px-14 py-4 mt-3 	">
        <div className="w-1/2 ml-24">
          <h1 className="flex justify-start py-8 font-bold text-3xl text-blue-700 px-2">Contact Us</h1>
          <div className="py-11 text-black">
            <p className="flex justify-start py-2 font-bold text-4xl">Grow Your Business With</p>
            <p className="flex justify-start font-bold text-4xl text-blue-700">Our Expertise</p>
          </div>
        </div>
        <h2 className="text-black text-lg text-start mr-7 mt-[150px]">We understand the importance of approaching each work integrally and believe in the power of simple.</h2>
      </div>
      <div>
        <div className=' flex '>
          <div className=" w-[30%]  flex-col flex justify-center  gap-1 pt-6 ml-40 ">
            {dipak.map((aanil, index) => (
              <div key={index} className="w-1/2 gap-[50px] pt-9">
                <div className=" flex items-center  bg-blue-100 py-7 rounded-xl w-[300px] h-[140px] ">
                  <p className='flex justify-center w-1/3'>{aanil.icon}</p>
                  <div className='text-start'>
                    <h1 className="  font-semibold text-lg ">{aanil.header}</h1>
                    <p className="  ">{aanil.p1}</p>
                  </div>

                </div>
              </div>
            ))}
          </div>
          <div className=' w-full px-8 mt-24 '>
          <Form/>

          </div>
         
        </div>
      </div>
    </>
  );
};

export default Contact;
