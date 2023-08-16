'use client' 

import { BrownButton } from '@/components/buttons/LinkButton'
import React , {useState} from 'react'
import DatePicker from "react-datepicker";





const PresStep5 = () => {

  const [startDate, setStartDate] = useState(new Date());
  const thisYear = new Date();


  return (
      <>
              <div className='text-center'>
                <h2 className='text-2xl font-semibold works'> Patient Information </h2>
                <p className='py-3 text-[12px] text-slate-500'>Please ensure that you input the details of the person requiring medical advice as per Medicare Card.
                </p>
              </div>


              <div className=''>

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


               <div>
                      <h5 className='text-[16px] font-semibold text-gray-900 my-4'>Gender</h5>
                        <div className="flex items-center mb-4">
                            <input id="Male" type="radio" value="Male" name="Gender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="Male" className="ml-2 text-[16px] font-semibold text-gray-900 dark:text-gray-300">Male</label>

                        </div> 

                        <div className="flex items-center mb-4">
                            <input id="Female" type="radio" value="Female" name="Gender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="Female" className="ml-2 text-[16px] font-semibold text-gray-900 dark:text-gray-300">Female</label>            
                        </div>
                </div>


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

              </div>
             
      </>
  )
}

export default PresStep5