import React from 'react'

const Step3 = () => {
  return (
                <>
                        <div className='text-center'>
                            <h2 className='text-2xl font-semibold works'>What is the main reason for this leave?</h2>
                            <p className='py-3 text-[12px] text-slate-500'>  Tell your Partner Doctor what&apos;s wrong. </p>
                        </div>


                        <div>
                            <div className="mb-6">
                                <div className="flex items-center mb-5">
                                    <input id="Common" type="radio" value="Common cold or flu" defaultChecked name="Common"  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="Common" className="ml-2 text-[16px] font-semibold text-gray-900 dark:text-gray-300">Common cold or flu</label>
                                </div>

                                <div className="flex items-center mb-5">
                                    <input id="Headache" type="radio" value="Headache" name="Common" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="Headache" className="ml-2 text-[16px] font-semibold text-gray-900 dark:text-gray-300">Headache</label>
                                </div>

                                <div className="flex items-center mb-5">
                                    <input id="Migraine" type="radio" value="Migraine" name="Common" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="Migraine" className="ml-2 text-[16px] font-semibold text-gray-900 dark:text-gray-300">Migraine</label>
                                </div>
                                <div className="flex items-center mb-5">
                                    <input id="Back" type="radio" value="Back pain" name="Common" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="Back" className="ml-2 text-[16px] font-semibold text-gray-900 dark:text-gray-300">Back pain</label>
                                </div>

                                <div className="flex items-center mb-5">
                                    <input id="Period" type="radio" value="Period pain" name="Common" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="Period" className="ml-2 text-[16px] font-semibold text-gray-900 dark:text-gray-300">Period pain</label>
                                </div>

                                <div className="flex items-center mb-5">
                                    <input id="Anxiety" type="radio" value="Anxiety, stress or depression" name="Common" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="Anxiety" className="ml-2 text-[16px] font-semibold text-gray-900 dark:text-gray-300">Anxiety, stress or depression</label>
                                </div>
                                <div className="flex items-center mb-5">
                                    <input id="others3" type="radio" value="Other" name="Common" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="others3" className="ml-2 text-[16px] font-semibold text-gray-900 dark:text-gray-300">Other</label>
                                </div>
                            </div>
                        </div>
                </>
  )
}

export default Step3