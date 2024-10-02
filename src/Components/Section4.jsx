import React from 'react'
import smileLogo from '../assets/Images/smile.png'
const Section4 = () => {
    return (
        <>
            <div className='px-[120px] py-[50px] bg-[#071629]'>
                <h1 className='font-SourceReg text-white mb-[40px] font-light text-center text-xl'><span className='mr-1font-SourceBold text-primary'>Free</span> membership</h1>
                <div className='flex flex-col justify-center gap-y-14'>
                    <div className='flex-1 flex items-center justify-around'>
                        <div className='text-center flex flex-col items-center space-y-4 text-white'>
                            <img src={smileLogo} alt="smile" />
                            <p className='font-SourceBold text-lg'>Lorem ipsum</p>
                            <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>
                        </div>
                        <div className='text-center flex flex-col items-center space-y-4 text-white'>
                            <img src={smileLogo} alt="smile" />
                            <p className='font-SourceBold text-lg'>Lorem ipsum</p>
                            <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>
                        </div>
                        <div className='text-center flex flex-col items-center space-y-4 text-white'>
                            <img src={smileLogo} alt="smile" />
                            <p className='font-SourceBold text-lg'>Lorem ipsum</p>
                            <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>
                        </div>
                        <div className='text-center flex flex-col items-center space-y-4 text-white'>
                            <img src={smileLogo} alt="smile" />
                            <p className='font-SourceBold text-lg'>Lorem ipsum</p>
                            <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className='grid place-content-center'>
                        <button className=' text-white w-fit font-SourceBold py-3 px-6 bg-primary rounded-[2.5rem] shadow-slate-900 shadow-lg text-lg'>
                            Register For Free
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section4