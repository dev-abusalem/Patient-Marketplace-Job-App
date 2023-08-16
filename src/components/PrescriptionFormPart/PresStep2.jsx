import React from 'react'

const PresStep2 = () => {
  return (
    <>
              
                        <div className='text-center'>
                            <h2 className='text-2xl font-semibold works'>What do you wish to speak to your Partner Practitioner about today?</h2>
                            <p className='py-3 text-[12px] text-slate-500'> Please note that for every consultation you will only be able to discuss a single issue. </p>
                        </div>


                        <div>

                            <div className="mb-6">
                                <div className="flex items-center mb-4">
                                    <input id="Advice" type="radio" value="Advice / Information" name="Practitioner"  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="Advice" className="ml-2 text-[16px] font-semibold text-gray-900 dark:text-gray-300">Advice / Information</label>
                                </div>

                                <div className="flex items-center mb-4">
                                    <input id="Certificate" type="radio" value="Medical Certificate" name="Practitioner" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="Certificate" className="ml-2 text-[16px] font-semibold text-gray-900 dark:text-gray-300">Medical Certificate</label>
                                </div>

                                <div className="flex items-center mb-4">
                                    <input id="Referral" type="radio" value="Specialist Referral" name="Practitioner" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="Referral" className="ml-2 text-[16px] font-semibold text-gray-900 dark:text-gray-300">Specialist Referral</label>
                                </div>

                                <div className="flex items-center mb-4">
                                    <input id="Medication" type="radio" value="Prescription - Medication you have taken before" name="Practitioner" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="Medication" className="ml-2 text-[16px] font-semibold text-gray-900 dark:text-gray-300">Prescription - Medication you have taken before</label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input id="MedicationNot" type="radio" value="Prescription - Medication you have NOT taken before" name="Practitioner" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="MedicationNot" className="ml-2 text-[16px] font-semibold text-gray-900 dark:text-gray-300">Prescription - Medication you have NOT taken before</label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input id="Other" type="radio" value="Other" name="Practitioner" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="MedicationNot" className="ml-2 text-[16px] font-semibold text-gray-900 dark:text-gray-300">Other</label>
                                </div>
                            </div>
                        </div>


                        
    </>
  )
}

export default PresStep2