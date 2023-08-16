import { BrownButton } from '@/components/buttons/LinkButton'
import React from 'react'





const Step5 = () => {


  return (
    <>
              <div className='text-center'>
                <h2 className='text-2xl font-semibold works'>Tell your Partner Doctor more.</h2>
                <p className='py-3 text-[12px] text-slate-500'>Please provide them as much detail as possible.
                </p>
              </div>


              <div className=''>
               <div>
                <label htmlFor="outcome" className='font-bold'>Please describe the timeline of your symptoms, the details of your symptoms, and if you would like anything specifically included on any documents you might receive as part of your outcome.</label>
                <textarea id="outcome"  name="outcome" required className=' px-5 py-2 mt-4 w-full border rounded border-slate-300 hover:border-upurple focus:border-upurple' cols="20" rows="6"></textarea>
                <small className='-mt-2 text-[11px]'>20 words minimum</small>
               </div>

               <div>
                <p htmlFor="upload" className='font-bold pt-4 pb-2'>Optional file upload (Discharge papers, Doctor's letter, etc)</p>
                
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