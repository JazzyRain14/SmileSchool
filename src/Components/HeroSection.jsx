import React from 'react'
import Logo from '../assets/Images/logo.png'
import Smile from '../assets/Images/1.png'
import lilSmile from '../assets/Images/6.png'
import friendSmile from '../assets/Images/7.png'
import winnerSmile from '../assets/Images/8.png'
const HeroSection = () => {
    return (
        <>
            <div className='max-h-[800px] flex flex-col justify-between h-full aspect-[16/9] w-full px-[140px] bg-hero-pattern bg-cover bg-center bg-no-repeat'>
                <nav className='flex items-center justify-between py-4 font-SourceReg'>
                    <div className=''>
                        <img src={Logo} alt="" />
                    </div>
                    <ul className='flex space-x-10 text-xs text-white uppercase'>
                        <li>Courses</li>
                        <li>Pricing</li>
                        <li>Login</li>
                    </ul>
                </nav>
                <div className='flex-1 flex flex-col justify-around'>
                    <div className=' flex flex-col space-y-6 justify-around items-center'>
                        <div className='mt-6'>
                            <h1 className='font-SourceBold text-[120px] text-white leading-none text-center'>Get schooled</h1>
                            <p className='text-center font-SourceReg text-white space-x-8'>
                                <span>Smiles</span>
                                <span>Grin</span>
                                <span>Laugh</span>
                            </p>
                        </div>
                        <button className=' text-white font-SourceBold py-4 px-6 bg-primary rounded-[2.5rem] shadow-slate-900 shadow-lg text-lg'>
                            Register For Free
                        </button>
                    </div>
                    <div className='py-4'>
                        <h1 className='text-center mb-10 text-xl font-SourceReg font-light text-white'><span className='text-primary font-SourceBold'>Learn</span> from the pros</h1>
                        <div className='flex flex-wrap items-center justify-evenly'>
                            <div className='text-center flex flex-col space-y-2 text-white'>
                                <img src={Smile} alt="" className='w-[150px] h-[150px] rounded-full overflow-hidden' />
                                <div>
                                    <p className='font-SourceBold'>Philip Massey</p>
                                    <p className='text-xs italic'>*Smile of the year*</p>
                                    <p className='text-xs italic'>2018-2019</p>
                                </div>
                            </div>
                            <div className='text-center flex flex-col space-y-2 text-white'>
                                <img src={lilSmile} alt="" className='w-[150px] h-[150px] rounded-full overflow-hidden' />
                                <div>
                                    <p className='font-SourceBold'>Nannie Lawrence</p>
                                    <p className='text-xs italic'>Best « little smile »</p>
                                    <p className='text-xs italic'>2017</p>
                                </div>
                            </div>
                            <div className='text-center flex flex-col space-y-2 text-white'>
                                <img src={friendSmile} alt="" className='w-[150px] h-[150px] rounded-full overflow-hidden' />
                                <div>
                                    <p className='font-SourceBold'>Bruce Walters</p>
                                    <p className='text-xs italic'>Best « Friend Smile »</p>
                                    <p className='text-xs italic'>live performance 2019</p>
                                </div>
                            </div>
                            <div className='text-center flex flex-col space-y-2 text-white'>
                                <img src={winnerSmile} alt="" className='w-[150px] h-[150px] rounded-full overflow-hidden' />
                                <div>
                                    <p className='font-SourceBold'>Henry Hughes</p>
                                    <p className='text-xs italic'>«24h smiles» winner</p>
                                    <p className='text-xs italic'>2016 - 2019</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection