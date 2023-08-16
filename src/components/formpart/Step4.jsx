"use client"
import { BrownButton } from '@/components/buttons/LinkButton'
import React, { useState } from 'react'
import DatePicker from "react-datepicker";





const Step4 = () => {

  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
              <div className='text-center'>
                <h2 className='text-2xl font-semibold works'>How long do you need this for?</h2>
                <p className='py-3 text-[12px] text-slate-500'> If suitable, your Partner Doctor might change the end date based on what they believe is appropriate.
                </p>
              </div>


              <div className='grid grid-cols-2 gap-4 justify-between'>
               <div>
                <label>Form</label><br></br>
                  <DatePicker className='w-[290px] block p-3 border rounded border-upurple' selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
                <div>
                <label>To</label><br></br>
                  <DatePicker className='w-[290px] block p-3 border rounded border-upurple' selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
              </div>
              
            
    </>
  )
}

export default Step4