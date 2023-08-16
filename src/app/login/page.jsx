import Image from 'next/image'
import React from 'react'
import logo from "../../../public/images/logo.png"
import {AiOutlineInfoCircle} from "react-icons/ai"
import Link from 'next/link'
const page = () => {
  return (
    <section>
      <div>
        <div className='flex justify-center mt-[70px] items-center'>
          <div className='w-[440px] md:py-8 ' >
          <form  action="">
            <div className='text-center'>
              <Image src={logo} className='mx-auto' height={200} width={250} alt='logo' />
              <h3 className='text-xl font-semibold text-center space my-6 '>The easiest way to see a doctor</h3>
            </div>
            <div>
              <div>
                <label className='text-[10px] ' htmlFor="email">Email*</label>
                <input type="email" required className='mt-[8px] border-[2px] font-bold border-upurple rounded-[5px] px-0 py-[5px] block w-full outline-none focus:border-opacity-100 border-opacity-80 text-[16px] ' />
              </div>

              <div className='mt-4'>
                <label className='text-[10px] ' htmlFor="password">Password *</label>
                <input type="password" id="password" required className='mt-[8px] border-[2px] font-bold border-upurple rounded-[5px] px-0 py-[5px] block w-full outline-none focus:border-opacity-100 border-opacity-80 text-[16px] ' />
              </div>

              <div className='mt-4 '>

                <input type="checkbox" id="remember" required className='mt-[8px] border-[2px] font-bold border-upurple rounded-[5px] px-0 py-[5px]  outline-none focus:border-opacity-100 inline-block border-opacity-80 ' />
                <label className=' ml-3 ' htmlFor="remember">Remember me</label>
              </div>

              <div className='mt-4'>
                <input type="submit" value="Login" required className='mt-[8px] border-[2px] border-upurple rounded-[5px] px-0 py-3 cursor-pointer block w-full outline-none bg-upurple text-yellow-100 font-semibold works text-[13px] ' />
              </div>


            </div>
          </form>
          <div>
            <div className='block py-4 px-6 mt-4 rounded bg-[#E5F6FD]'>
              <div className='flex gap-10 justify-between'>
                <AiOutlineInfoCircle className='text-3xl text-sky-400 font-bold' />
              <p className='text-center text-sm'>Frustrated with the password? you can try <Link href="/signup" className='text-sky-600 underline'>sign in with email</Link> instead.</p>
              </div>
            </div>

            <div className='text-center  my-3'>
            <Link href="/signup" className='text-sky-600 underline font-bold '>Forgot your password? </Link>
            </div>

            <div className='text-center py-3 my-2 border-slate-300 border-t'>
            <p>Don’t have an account? <Link href="/signup" className='text-sky-600 underline font-bold '>Register </Link> </p>
            </div>


          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page