'use client' 

import { BrownButton } from '@/components/buttons/LinkButton'
import React , {useState} from 'react'
import DatePicker from "react-datepicker";





const PresStep4 = () => {

  const [startDate, setStartDate] = useState(new Date());
  const thisYear = new Date();


  return (
      <>
              <div className='text-center'>
                <h2 className='text-2xl font-semibold works'>Your information</h2>
                <p className='py-3 text-[12px] text-slate-500'>This information is needed to confirm your identity and to be included on any documents your Partner Doctor provides.
                </p>
              </div>


              <div className=''>

               <div>
                <label htmlFor="email" className='font-bold pb-3 block'>Email</label>
                <input id="email" type="email" required name="email" className="w-full focus:ring-upurple focus:border-upurple p-3 border border-slate-300 rounded focus:bg-slate-100 hover:border-upurple" />
               </div>

               <div className='grid grid-cols-2 gap-6 mt-5'>
                  <div>
                  <label htmlFor="fname" className='font-bold pb-3 block'>Mobile number</label>
                    <input id="fname" type="text" name="fname" placeholder='0412345678' className="w-full focus:ring-upurple focus:border-upurple p-3 border border-slate-300 rounded focus:bg-slate-100 hover:border-upurple" />
                  </div>

                  <div>
                  <label htmlFor="lname" className='font-bold pb-3 block'>Confirm mobile number</label>
                  <input id="lname" type="text" name="lname" placeholder='0412345678' className="w-full focus:ring-upurple focus:border-upurple p-3 border border-slate-300 rounded focus:bg-slate-100 hover:border-upurple" />
                  </div>
                  <small className='-mt-2 text-[10px]'>Your Partner Practitioner will call you at this number.</small>
               </div>


              </div>
             
      </>
  )
}

export default PresStep4