import React, { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Form() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [formsubmit, setFormsubmit] = useState(false);
    const [firstnameError, setFirstnameError] = useState("");
    const [lastnameError, setLastnameError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [addressError, setAddressError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [messageError, setMessageError] = useState("");

    const handleClick = (e) => {
        e.preventDefault();

        if (firstname && lastname && phone && address && email && message) {
            toast("Form submitted successfully");
            setFirstname("");
            setLastname("");
            setAddress("");
            setEmail("");
            setPhone("");
            setMessage("");
            setFirstnameError("");
            setLastnameError("");
            setAddressError("");
            setEmailError("");
            setPhoneError("");
            setMessageError("");
        }

        if (!firstname) {
            setFirstnameError("Fill First Name");
        } else {
            setFirstnameError("");
        }

        if (!lastname) {
            setLastnameError("Fill Last Name");
        } else {
            setLastnameError("");
        }

        if (!phone) {
            setPhoneError("Fill Phone");
        } else {
            setPhoneError("");
        }

        if (!address) {
            setAddressError("Fill Address");
        } else {
            setAddressError("");
        }

        if (!email) {
            setEmailError("Fill Email");
        } else {
            setEmailError("");
        }

        if (!message) {
            setMessageError("Fill Message");
        } else {
            setMessageError("");
        }

        setFormsubmit(true);
    }
    return (
        <form className=' bg-[#EDF2FAB3] p-8'>

            <div className='grid grid-cols-2  py-8'>
                <div className='grid grid-cols  '>
                    <label> First Name (required)</label>
                    <input value={firstname} required type="text" name="First Name" placeholder='First Name*' onChange={e => setFirstname(e.target.value)} className='px-[22px] py-[10px]  focus:outline-none ' />
                    <p className='text-red-600 ml-3 '> {firstnameError}</p>
                </div>
                <div className='grid grid-cols'>
                    <label> Last Name (required)</label>
                    <input value={lastname} required type="text" name="FIrst Name" placeholder='Last Name*' onChange={e => setLastname(e.target.value)} className='px-[22px] py-[10px]  focus:outline-none ' />
                    <p className='text-red-600 ml-3'> {lastnameError}</p>
                </div>
                <div className='grid grid-cols'>
                    <label> Phone (required)</label>
                    <input value={phone} required type="number" name="First Name" placeholder='phone number*' onChange={e => setPhone(e.target.value)} className='px-[22px] py-[10px]  focus:outline-none ' />
                    <p className='text-red-600 ml-3'> {phoneError}</p>
                </div>
                <div className='grid grid-cols'>
                    <label> Address (required)</label>
                    <input value={address} required type="text" name="Address" placeholder='Address*' onChange={e => setAddress(e.target.value)} className='px-[22px] py-[10px]  focus:outline-none ' />
                    <p className='text-red-600 ml-3'> {addressError}</p>
                </div>
            </div>
            <div className='py-4  grid grid-cols'>
                <label > Email (required)</label>
                <input value={email} required type="email" name="Email" placeholder='  Email*' onChange={e => setEmail(e.target.value)} className='px-[22px] py-[10px]  focus:outline-none ' />
                <p className='text-red-600 ml-3'> {emailError}</p>
            </div>
            <div className='py-4 grid grid-cols'>
                <label> Message (required)</label>

                <textarea value={message} required name="" id="" cols="30" rows="5" placeholder='Message*' onChange={e => setMessage(e.target.value)} className='px-[22px] py-[10px]  focus:outline-none ' ></textarea>
                <p className='text-red-600 ml-3'> {messageError}</p>
            </div>

            <div className='flex justify-center '>
                <button className=' bg-gray-800 w-fit text-white rounded-xl hover:bg-blue-700 px-5 py-2' onClick={handleClick}> Submit</button>
                <ToastContainer />
            </div>

        </form>
    )
}

export default Form;
