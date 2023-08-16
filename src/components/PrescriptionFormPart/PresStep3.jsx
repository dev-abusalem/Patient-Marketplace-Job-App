import React, { useState } from 'react'

const PresStep3 = () => {


        const [selectedOptions, setSelectedOptions] = useState({
            medication: 'No',
            allergies: 'No',
            currentlyTakingMedication: 'No',
            existingMedicalConditions: 'No'
          });
        
          const handleMedicationChange = (event) => {
            setSelectedOptions({
              ...selectedOptions,
              medication: event.target.value
            });
          };
        
          const handleAllergiesChange = (event) => {
            setSelectedOptions({
              ...selectedOptions,
              allergies: event.target.value
            });
          };
        
          const handleTakingMedicationChange = (event) => {
            setSelectedOptions({
              ...selectedOptions,
              currentlyTakingMedication: event.target.value
            });
          };
        
          const handleExistingConditionsChange = (event) => {
            setSelectedOptions({
              ...selectedOptions,
              existingMedicalConditions: event.target.value
            });
          };
        return (
                <>
                        <div className='text-center'>
                            <h2 className='text-2xl font-semibold works'>Tell your Partner Practitioner more.</h2>
                            <p className='py-3 text-[12px] text-slate-500'> Please provide as much detailed information as possible so that your Partner Practitioner can provide a quick solution to you. </p>
                        </div>


                        <div>
                            <div className="mb-6">
                            <div>
                                <textarea id="outcome"  name="outcome" required className=' px-5 py-2 mt-4 w-full border-2 rounded-lg border-upurple hover:border-upurple focus:border-upurple text-[13px]' placeholder='Your Partner Practitioner will need to know: what your specific issue and symptoms are, your history of allergies, medication, and operations, and any specific medication you think you might need.' cols="20" rows="4"></textarea>

                            </div>

                            <div>
                                <h5 className='text-[16px] font-semibold text-gray-900 my-4'>Is there any specific medication you think you might need?</h5>
                                <div className="flex items-center mb-4">
                                    <input id="Yes1" type="radio" value="Yes"
        onChange={handleMedicationChange}  name="Presspart31" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="Yes1" className="ml-2 text-[16px] font-semibold text-gray-900 dark:text-gray-300">Yes</label>
                                </div> 

                                <div className="flex items-center mb-4">
                                    <input id="No1" type="radio" value="No"
        onChange={handleMedicationChange} name="Presspart31" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="No1" className="ml-2 text-[16px] font-semibold text-gray-900 dark:text-gray-300">No</label>
                                    
                                </div>
                                { selectedOptions.medication === "Yes" ? <div className='mb-4'>
                                    <input type="text" placeholder='Place spacify' className='py-2 outline-none focus:border-2 focus:border-ublack w-full px-3 border-2 border-gray-500 rounded' />
                                </div> : <div></div>}
                            </div>

                            <div>
                                <h5 className='text-[16px] font-semibold text-gray-900 my-4'>Do you have any allergies?</h5>
                                <div className="flex items-center mb-4">
                                    <input id="Yes2" type="radio" value="Yes" onChange={handleAllergiesChange} name="Presspart32" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="Yes2" className="ml-2 text-[16px] font-semibold text-gray-900 dark:text-gray-300">Yes</label>

                                </div> 

                                <div className="flex items-center mb-4">
                                    <input id="No2" type="radio" value="No" onChange={handleAllergiesChange} name="Presspart32" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="No2" className="ml-2 text-[16px] font-semibold text-gray-900 dark:text-gray-300">No</label>
                                    
                                </div>
                                { selectedOptions.allergies === "Yes" ? <div className='mb-4'>
                                    <input type="text" placeholder='Place spacify' className='py-2 outline-none focus:border-2 focus:border-ublack w-full px-3 border-2 border-gray-500 rounded' />
                                </div> : <div></div>}
                            </div>

                            <div>
                                <h5 className='text-[16px] font-semibold text-gray-900 my-4'>Are you currently taking any medication?</h5>
                                <div className="flex items-center mb-4">
                                    <input id="Yes3" type="radio" value="Yes" onChange={handleTakingMedicationChange} name="Presspart33" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="Yes3" className="ml-2 text-[16px] font-semibold text-gray-900 dark:text-gray-300">Yes</label>

                                </div> 

                                <div className="flex items-center mb-4">
                                    <input id="No3" type="radio" value="No" onChange={handleTakingMedicationChange} name="Presspart33" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="No3" className="ml-2 text-[16px] font-semibold text-gray-900 dark:text-gray-300">No</label>
                                    
                                </div>
                                { selectedOptions.currentlyTakingMedication === "Yes" ? <div className='mb-4'>
                                    <input type="text" placeholder='Place spacify' className='py-2 outline-none focus:border-2 focus:border-ublack w-full px-3 border-2 border-gray-500 rounded' />
                                </div> : <div></div>}
                            </div>

                            <div>
                                <h5 className='text-[16px] font-semibold text-gray-900 my-4'>Do you have any existing medical conditions?</h5>
                                <div className="flex items-center mb-4">
                                    <input id="Yes4" type="radio" value="Yes" onChange={handleExistingConditionsChange} name="Presspart34" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="Yes4" className="ml-2 text-[16px] font-semibold text-gray-900 dark:text-gray-300">Yes</label>

                                </div> 

                                <div className="flex items-center mb-4">
                                    <input id="No4" type="radio" value="No" onChange={handleExistingConditionsChange} name="Presspart34" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="No4" className="ml-2 text-[16px] font-semibold text-gray-900 dark:text-gray-300">No</label>
                                    
                                </div>

                                { selectedOptions.existingMedicalConditions === "Yes" ? <div className='mb-4'>
                                    <input type="text" placeholder='Place spacify' className='py-2 outline-none focus:border-2 focus:border-ublack w-full px-3 border-2 border-gray-500 rounded' />
                                </div> : <div></div>}
                            </div>
                            </div>
                        </div>
                </>
  )
}

export default PresStep3