import React from 'react'

const Step2 = () => {
  return (
    <>
              
                        <div className='text-center'>
                            <h2 className='text-2xl font-semibold works'>What is this leave from?</h2>
                            <p className='py-3 text-[12px] text-slate-500'>  Please note: The Partner Doctors are currently unable to review requests for carer’s leave, backdated requests, and fitness for work certificates as part of your consultation outcome. </p>
                        </div>


                        <div>
                            <div className="mb-6">
                                <h5 className='font-semibold text-[15px] mb-5'>I am seeking</h5>
                                <div className="flex items-center mb-4">
                                    <input id="default-radio-1" type="radio" value="Sick Leave" defaultChecked name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="default-radio-1" className="ml-2 text-[16px] font-semibold text-gray-900 dark:text-gray-300">Sick Leave</label>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h5 className='font-semibold text-[15px] mb-5'>The leave is from</h5>
                                <div className="flex items-center mb-4">
                                    <input  id="leave" type="radio" value="Work" name="work" defaultChecked className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="work" className="ml-2 text-[16px] font-semibold text-gray-900 dark:text-gray-300">Work</label>
                                </div>

                                <div className="flex items-center mb-4">
                                    <input id="studies" type="radio" value="studies" name="work" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="studies" className="ml-2 text-[16px] font-semibold text-gray-900 dark:text-gray-300">Studies</label>
                                </div>

                                <div className="flex items-center mb-4">
                                    <input id="others" type="radio" value="others" name="work" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="others" className="ml-2 text-[16px] font-semibold text-gray-900 dark:text-gray-300">Other</label>
                                </div>
                            </div>
                        </div>


                        
    </>
  )
}

export default Step2