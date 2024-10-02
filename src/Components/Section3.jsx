import React from 'react'
import DiagonalSmile from '../assets/Images/DiagonalSmile.png'
import Smile2 from '../assets/Images/Bitmap (1).png'
import Smile3 from '../assets/Images/Bitmap (2).png'
import Smile4 from '../assets/Images/Bitmap (3).png'
import play from '../assets/Images/play.png'
import Smile from '../assets/Images/1.png'
import rating from '../assets/Images/rating.png'
const Section3 = () => {
    return (
        <>
            <div className='px-[120px] py-[40px]'>
                <h1 className='font-SourceReg  my-12 font-medium text-center text-xl'>Most <span className='font-SourceBold text-xl text-primary'>popular</span> tutorials</h1>
                <div className='flex flex-wrap items-center justify-between'>
                    <div className='max-w-[250px] flex flex-col space-y-2'>
                        <div className='relative'>
                            <img src={DiagonalSmile} alt="" className='w-full h-auto rounded-lg overflow-hidden' />
                            <img src={play} alt="" className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                        </div>
                        <div className='flex flex-col space-y-3'>
                            <p className='font-SourceBold text-lg'>Diagonal Smile</p>
                            <p className='text-[#07162980]'>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod.</p>
                            <div className='flex items-center space-x-5'>
                                <img src={Smile} alt="" className='w-[30px] h-[30px] rounded-full overflow-hidden' />
                                <h1 className='font-SourceBold text-primary'>Phillip Massey</h1>
                            </div>
                            <div className='flex justify-between items-center'>
                                <img src={rating} className=' h-auto' alt="" />
                                <span className='font-semibold font-SourceReg text-primary'>8 min</span>
                            </div>
                        </div>
                    </div>
                    <div className='max-w-[250px] flex flex-col space-y-2'>
                        <div className='relative'>
                            <img src={Smile2} alt="" className='w-full h-auto rounded-lg overflow-hidden' />
                            <img src={play} alt="" className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                        </div>
                        <div className='flex flex-col space-y-3'>
                            <p className='font-SourceBold text-lg'>Sad Smile</p>
                            <p className='text-[#07162980]'>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod.</p>
                            <div className='flex items-center space-x-5'>
                                <img src={Smile} alt="" className='w-[30px] h-[30px] rounded-full overflow-hidden' />
                                <h1 className='font-SourceBold text-primary'>Phillip Massey</h1>
                            </div>
                            <div className='flex justify-between items-center'>
                                <img src={rating} className=' h-auto' alt="" />
                                <span className='font-semibold font-SourceReg text-primary'>8 min</span>
                            </div>
                        </div>
                    </div>
                    <div className='max-w-[250px] flex flex-col space-y-2'>
                        <div className='relative'>
                            <img src={Smile3} alt="" className='w-full h-auto rounded-lg overflow-hidden' />
                            <img src={play} alt="" className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                        </div>
                        <div className='flex flex-col space-y-3'>
                            <p className='font-SourceBold text-lg'>Natural Smile</p>
                            <p className='text-[#07162980]'>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod.</p>
                            <div className='flex items-center space-x-5'>
                                <img src={Smile} alt="" className='w-[30px] h-[30px] rounded-full overflow-hidden' />
                                <h1 className='font-SourceBold text-primary'>Phillip Massey</h1>
                            </div>
                            <div className='flex justify-between items-center'>
                                <img src={rating} className=' h-auto' alt="" />
                                <span className='font-semibold font-SourceReg text-primary'>8 min</span>
                            </div>
                        </div>
                    </div>
                    <div className='max-w-[250px] flex flex-col space-y-2'>
                        <div className='relative'>
                            <img src={Smile4} alt="" className='w-full h-auto rounded-lg overflow-hidden' />
                            <img src={play} alt="" className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                        </div>
                        <div className='flex flex-col space-y-3'>
                            <p className='font-SourceBold text-lg'>Natural Smile</p>
                            <p className='text-[#07162980]'>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod.</p>
                            <div className='flex items-center space-x-5'>
                                <img src={Smile} alt="" className='w-[30px] h-[30px] rounded-full overflow-hidden' />
                                <h1 className='font-SourceBold text-primary'>Phillip Massey</h1>
                            </div>
                            <div className='flex justify-between items-center'>
                                <img src={rating} className=' h-auto' alt="" />
                                <span className='font-semibold font-SourceReg text-primary'>8 min</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Section3