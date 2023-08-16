'use client' 

import { BrownButton } from '@/components/buttons/LinkButton'
import React , {useState} from 'react'
import DatePicker from "react-datepicker";





const Step5 = () => {

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
                <label htmlFor="email" className='font-bold'>Email</label>
                <input id="email" type="email" name="email" className="w-full focus:ring-upurple focus:border-upurple p-3 border border-slate-300 rounded focus:bg-slate-100 hover:border-upurple" />
                <small className='-mt-2 text-[11px]'>20 words minimum</small>
               </div>

               <div className='grid grid-cols-2 gap-6 mt-5'>
                  <div>
                  <label htmlFor="fname" className='font-bold'>First name(s)</label>
                    <input id="fname" type="text" name="fname" className="w-full focus:ring-upurple focus:border-upurple p-3 border border-slate-300 rounded focus:bg-slate-100 hover:border-upurple" />
                  </div>

                  <div>
                  <label htmlFor="lname" className='font-bold'>Last name</label>
                  <input id="lname" type="text" name="lname" className="w-full focus:ring-upurple focus:border-upurple p-3 border border-slate-300 rounded focus:bg-slate-100 hover:border-upurple" />
                  </div>
               </div>
               <small className='-mt-2 text-[10px]'>Please enter the name of the person who requires leave.</small>


               <div className='mt-6'>
                <label  className='font-bold' >Date Of Birth</label><br></br>
                  <DatePicker placeholderText='mm/dd/yyyy' className='w-[596px] block p-3 border rounded border-upurple' selected={startDate} onChange={(date) => setStartDate(date)} />
                
                {
                  (thisYear.getFullYear() - startDate.getFullYear()) < 18 ?
                  <p className=' text-[12px] uppercase text-red-600 tracking-wider'>YOU MUST BE 18 YEARS OLD TO USE THIS SERVICE</p>
                  : <small></small>
                }
                
                </div>

                <div className='mt-6'>
                  <label htmlFor="mobile" className='font-bold'>Mobile number</label>
                  <input id="mobile" placeholder='0412345678' type="tel" name="mobile" className="w-full focus:ring-upurple focus:border-upurple p-3 border border-slate-300 rounded focus:bg-slate-100 hover:border-upurple" />
                  <small className='-mt-2 text-[10px]'>We'll send any documents via SMS to this number in addition to email.</small>
               </div>


               <div className='mt-6'>
                  <label htmlFor="street" className='font-bold'>Street address</label>
                  <input id="street" type="text" name="street" className="w-full focus:ring-upurple focus:border-upurple p-3 border border-slate-300 rounded focus:bg-slate-100 hover:border-upurple" />
               </div>


               <div className='grid grid-cols-3 gap-6 mt-5'>
                  <div>
                  <label htmlFor="Suburb" className='font-bold'>Suburb</label>
                    <input id="Suburb" type="text" name="Suburb" className="w-full focus:ring-upurple focus:border-upurple p-3 border border-slate-300 rounded focus:bg-slate-100 hover:border-upurple" />
                  </div>

                  <div>
                  <label htmlFor="State" className='font-bold'>State</label>
                  <input id="State" type="text" name="State" className="w-full focus:ring-upurple focus:border-upurple p-3 border border-slate-300 rounded focus:bg-slate-100 hover:border-upurple" />
                  </div>

                  <div>
                  <label htmlFor="Postalcode" className='font-bold'>Postalcode</label>
                  <input id="Postalcode" type="text" name="Postalcode" className="w-full focus:ring-upurple focus:border-upurple p-3 border border-slate-300 rounded focus:bg-slate-100 hover:border-upurple" />
                  </div>
               </div>



               <div>
                <p htmlFor="upload" className='font-bold pt-4 pb-2'>Attach ID</p>
                
                <div className="flex items-center justify-center w-full">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-[180px] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">Drag 'n' drop some files here, or click to select files</p>
                        </div>
                        <input required name='htmlFor' id="dropzone-file" type="file" className="hidden" />
                    </label>
                </div> 

               </div>

              </div>
             
      </>
  )
}

export default Step5