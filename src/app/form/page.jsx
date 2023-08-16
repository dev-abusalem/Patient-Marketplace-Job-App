'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from "../../../public/images/logo.png"
import wc from "../../../public/images/wc.png"
import Step4 from '@/components/formpart/step4'
import Step2 from '@/components/formpart/Step2'
import Step3 from '@/components/formpart/Step3'
import Step5 from '@/components/formpart/Step5'
import Step6 from '@/components/formpart/Step6'
import PreviewForm from '@/components/formpart/PreviewForm'
import { FNCButton } from '@/components/buttons/FNCButton'


export const metadata = {
    title: 'Medical Certificate Consult Form | updoc ',
    description: 'Medical Certificate Consult Form | updoc',
  }
const page = () => {

    const [currentPart, setCurrentPart] = useState(1);


  return (
    <section>
        <div className='mt-16'>
            <div className='w-[661px] mx-auto'>
                <div>
                    <Image width={93} height={93} alt='logo' src={logo} className='mx-auto'/>
                </div>
                <div className='py-4 flex w-[400px] mx-auto gap-4 my-8'>
                    <div className={currentPart === 1 ||currentPart === 2 || currentPart === 3 || currentPart === 4 || currentPart === 5 || currentPart === 6? ' w-1/5 h-1 bg-orange-500 rounded' : 'w-1/5 h-1 bg-gray-400 rounded'} ></div>
                    <div className={currentPart === 2 || currentPart === 3 || currentPart === 4 || currentPart === 5 || currentPart === 6 ? ' w-1/5 h-1 bg-orange-500 rounded' : 'w-1/5 h-1 bg-gray-400 rounded'} ></div>
                    <div className={currentPart === 3 || currentPart === 4 || currentPart === 5 || currentPart === 6 ? ' w-1/5 h-1 bg-orange-500 rounded' : 'w-1/5 h-1 bg-gray-400 rounded'} ></div>
                    <div className={currentPart === 4 || currentPart === 5 || currentPart === 6 ? ' w-1/5 h-1 bg-orange-500 rounded' : 'w-1/5 h-1 bg-gray-400 rounded'} ></div>
                    <div className={currentPart === 5 || currentPart === 6 ? ' w-1/5 h-1 bg-orange-500 rounded' : 'w-1/5 h-1 bg-gray-400 rounded'} ></div>
                    <div className={currentPart === 6 ? ' w-1/5 h-1 bg-orange-500 rounded' : 'w-1/5 h-1 bg-gray-400 rounded'} ></div>
                </div>
                <form className='px-2 pt-5 rounded-lg'>


                    {/* part 01 start */}
                    <div className={currentPart === 1 ? 'part-01 ' : 'part-01 display_none '}>
                        <div className='text-center'>
                            <h2 className='text-2xl font-semibold works'>Request your Medical Certificate Doctor in just 2 minutes</h2>
                            <p className='py-3 text-[11px] text-slate-500'> If suitable they can provide you with a number of outcomes including medical certificates.</p>
                        </div>
                        <div>
                            <Image src={wc} width={615} height={500} alt='wcimage' className='mx-auto'/>

                            <div className='text-center my-4 text-slate-500'>
                                <p className='text-[12px] leading-[1.1em]'> Registered Australian doctors</p>
                                <p className='text-[12px] leading-[1.1em]'>  Used by 100,000 Australians</p>
                                <p className='text-[12px] leading-[1.1em]'> No appointment or travel time needed</p>
                            </div>
                        </div>
                        <div className='text-[12px] my-12 text-slate-600'>
                            <p>
                            I confirm that I am not seriously unwell and I do NOT have any of the following symptoms: chest pain, shortness of breath, unable to swallow fluids or saliva, weakness or numbness down one side, slurred speech. I confirm I do not think I need to see a GP to get a medical certificate. If symptoms are related to a COVID vaccine, I will consult my GP or the medical professional who provided the immunisation. I confirm that this is not a replacement for a doctor's visit. I have read, understood and agree with the information in the terms of service and consent to the use of information in accordance with the privacy policy.
                            </p>
                        </div>
                        <div>
                            <FNCButton title="continue" className="bg-upurple text-white" onClick={()=>setCurrentPart(currentPart + 1)} />
                        </div>
                    </div>

                    {/* part 01 End */}



                    {/* part 02 Start */}

                    <div className={currentPart === 2 ? 'part-01 px-6 ' : 'part-01 px-6 display_none '}>
                        <Step2 />
                        <div className='grid gap-4 grid-cols-2 mt-6'>
                                <FNCButton onClick={()=>setCurrentPart(currentPart - 1)} title="Back" className="border-2 text-upurple border-upurple "/>
                                <FNCButton onClick={()=>setCurrentPart(currentPart + 1)} title="Continue" className="border-2 text-white bg-upurple  border-upurple "/>
                        </div>
                    </div>
                    {/* part 02 End */}

                    {/* part 03 Start */}
                    <div className={currentPart === 3 ? 'part-03 px-6 ' : 'part-03 px-6 display_none '}>
                     <Step3 />
                     <div className='grid gap-4 grid-cols-2 mt-6'>
                                <FNCButton onClick={()=>setCurrentPart(currentPart - 1)} title="Back" className="border-2 text-upurple border-upurple "/>
                                <FNCButton onClick={()=>setCurrentPart(currentPart + 1)} title="Continue" className="border-2 text-white bg-upurple  border-upurple "/>
                        </div>
                    </div>
                    {/* part 03 End */}

                    {/* part 04 Start */}
                    <div className={currentPart === 4 ? 'part-04 px-6 ' : 'part-01 px-6 display_none '}>
                    <Step4 />
                   <div className='grid gap-4 grid-cols-2 mt-6'>
                        <FNCButton onClick={()=>setCurrentPart(currentPart - 1)} title="Back" className="border-2 text-upurple border-upurple "/>
                        <FNCButton onClick={()=>setCurrentPart(currentPart + 1)} title="Continue" className="border-2 text-white bg-upurple  border-upurple "/>
                    </div>
                    </div>
                    {/* part 04 End */}

                    {/* part 05 Start */}

                      
                    <div className={currentPart === 5? 'part-05 px-6 ' : 'part-01 px-6 display_none '}>
                        <Step5 />
                   <div className='grid gap-4 grid-cols-2 mt-6'>
                                <FNCButton onClick={()=>setCurrentPart(currentPart - 1)} title="Back" className="border-2 text-upurple border-upurple "/>
                                <FNCButton onClick={()=>setCurrentPart(currentPart + 1)} title="Continue" className="border-2 text-white bg-upurple  border-upurple "/>
                        </div>
                    </div>
                    {/* part 05 End */}


                    {/* part 06 Start */}
                    <div className={currentPart === 6 ? 'part-06 px-6 ' : 'part-01 px-6 display_none '}>
                    <Step6 />
                   <div className='grid gap-4 grid-cols-2 mt-6'>
                                <FNCButton fnc={()=>setCurrentPart(currentPart - 1)} title="Back" className="border-2 text-upurple border-upurple "/>
                                <FNCButton fnc={()=>setCurrentPart(currentPart + 1)} title="Continue" className="border-2 text-white bg-upurple  border-upurple "/>
                        </div>
                    </div>

                    {/* part 06 End */}



                    {/* part 06 Start */}
                        <div className={currentPart === 7 ? 'part-07 px-6 ' : 'part-01 px-6 display_none '}>
                            <PreviewForm />
                        <div className='grid gap-4 grid-cols-2 mt-6'>
                                    <FNCButton fnc={()=>setCurrentPart(currentPart - 1)} title="Back" className="border-2 text-upurple border-upurple "/>
                                    <FNCButton fnc={()=>setCurrentPart(currentPart + 1)} title="Continue" className="border-2 text-white bg-green-700  border-green-700 "/>
                            </div>
                        </div>

                    {/* part 06 End */}
                </form>
            </div>
        </div>
    </section>
  )
}

export default page