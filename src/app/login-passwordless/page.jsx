'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import logo from "../../../public/images/logo.png"
import {AiOutlineInfoCircle} from "react-icons/ai"
import Link from 'next/link'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'
const passwordless = () => {


  const [ passlessMail , setpasslessMail] = useState(null);
  const [isLoading , setIsLoading ] = useState(false)
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

    setIsLoading(true);
     const result = await axios.post("/api/sendEmail", {email:passlessMail});
    setIsLoading(false);
      toast.success(result.data.message)

    } catch (error) {
      console.log(error)
      toast.error("Something is wrong")
    }
  };


  return (
    <section>
    <div>
    <ToastContainer />

      <div className='flex justify-center mt-[70px] items-center'>
        <div className='w-[450px] md:py-8 ' >
        <form  onSubmit={handleSubmit}>
          <div className='text-center'>
            <Image src={logo} className='mx-auto' height={200} width={250} alt='logo' />
            <h3 className='text-xl font-semibold text-center space my-6 '>The easiest way to see a doctor</h3>
          </div>
          <div>
            <div>
              <label className='text-[10px] ' htmlFor="email">Email*</label>
              <input onChange={(e)=>setpasslessMail(e.target.value)} type="email" required className='mt-[8px] border-[2px] font-bold border-upurple rounded-[5px] px-0 py-[5px] block w-full outline-none focus:border-opacity-100 border-opacity-80 text-[16px] ' />
            </div>



            <div className='mt-4'>
              {isLoading ? <input type="submit" value="Requesting......" required className='mt-[8px] hover:bg-opacity-80 duration-100 border-[2px] border-upurple rounded-[5px] px-0 py-3 cursor-pointer block w-full outline-none bg-upurple text-yellow-100 font-semibold works text-[13px] ' /> :
              <input type="submit" value="Request Access" required className='mt-[8px] hover:bg-opacity-80 duration-100 border-[2px] border-upurple rounded-[5px] px-0 py-3 cursor-pointer block w-full outline-none bg-upurple text-yellow-100 font-semibold works text-[13px] ' /> }
            </div>


          </div>
        </form>
        <div>
          <div className='block py-3 px-3 mt-7 rounded bg-[#E5F6FD]'>
            <div className='flex gap-1 items-center '>
              <AiOutlineInfoCircle className='text-xl text-sky-400 font-bold' />
            <p className='text-center text-sm'>We’ll email you a magic code for a password-free sign in.</p>
            </div>
          </div>


        </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default passwordless