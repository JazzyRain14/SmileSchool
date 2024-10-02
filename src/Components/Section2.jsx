import React from 'react'
import Bitmap from '../assets/Images/Bitmap.png'
const Section2 = () => {
    return (
        <>
            <div className='px-[250px] py-[60px] flex justify-evenly items-center space-x-12 bg-primary'>
                <img src={Bitmap} alt="" className='w-[200px] h-[200px] rounded-full overflow-hidden' />
                <div className='flex-1'>
                    <p className='text-white font-SourceReg leading-6 font-medium mb-6'>« Those tutorials are concise and go straight to the point. I can’t think of a better place to learn smiling. And it’s so fun!</p>
                    <p>
                        <span className='font-SourceBold mb-2 text-white'>Person Name</span><br />
                        <span className='italic font-SourceReg text-white'>weather presenter</span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Section2