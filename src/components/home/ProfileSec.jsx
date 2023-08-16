import React from 'react'
import {AiOutlineUser} from "react-icons/ai"
import {BsCalendar2Event , BsEnvelope , BsTelephone} from "react-icons/bs"
import {CiLocationOn} from "react-icons/ci"
import { LinkButton } from '../buttons/LinkButton'
import Link from 'next/link'

const ProfileSec = () => {
  return (
    <>
        <h2 className='font-semibold text-2xl text-ublack'>Profile</h2>

        <div className='mt-3'>

            {/* Personal details section in profile */}

            <h3 className='font-semibold text-xl text-ublack'>Personal details</h3>
            <div className='p-5 bg-white border border-slate-300 rounded mt-5'>
                <div className='flex items-center mb-3'>
                <AiOutlineUser className=' text-uorangedark text-xl font-semibold mr-3' />
                <p>fddsf dfds</p>
                </div>
                <div className='flex items-center mb-3'>
                <BsCalendar2Event className=' text-uorangedark text-xl font-semibold mr-3' />
                <p>05/08/2003</p>
                </div>
                <div className='flex items-center mb-3'>
                <BsEnvelope className=' text-uorangedark text-xl font-semibold mr-3' />
                <p>abusalemjob@gmail.com</p>
                </div>
                <div className='flex items-center mb-3'>
                <BsTelephone className=' text-uorangedark text-xl font-semibold mr-3' />
                <p>00000000</p>
                </div>

                <div className='flex items-center mb-3'>
                <CiLocationOn className=' text-uorangedark text-xl font-semibold mr-3' />
                <p>xxxxxxxxx, xxxxxxxx, xxxxxxxxxxxxxx</p>
                </div>
            </div>

            {/* Payment  details section in profile */}

            <h3 className='font-semibold text-xl text-ublack mt-6'>Payment</h3>
            <div className='p-5 bg-white border border-slate-300 rounded mt-5'>
             <LinkButton title="Manage Billing"  className="bg-uorangedark text-white rounded" />
            </div>  

            {/* id verification section in profile */}

            <h3 className='font-semibold text-xl text-ublack mt-6'>ID Verification</h3>
            <div className='p-5 bg-white border border-slate-300 rounded mt-5'>
                {/* if any component or text that will placed on here  */}
                <Link href="/" className={`relative w-full font-semibold my-3 block py-3 bg-blue-700 text-white text-xl rounded text-center shadow-sm`}>
                  Verify with <strong>Digital ID</strong> <span></span>
                </Link>
            </div>  
        </div>    
    </>
  )
}

export default ProfileSec