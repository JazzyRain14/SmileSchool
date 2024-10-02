import React from 'react'
import Logo from '../assets/Images/logo.png'
import SocialLogo from '../assets/Images/social_icons.png'

const Footer = () => {
    return (
        <>
            <footer className='px-[120px] py-2 bg-[#071629] font-SourceReg'>
                <div className=' flex items-center justify-between py-[35px]'>
                    <img src={Logo} alt="" />
                    <img src={SocialLogo} alt="" />
                </div>
                <p className='text-center text-sm font-SourceReg text-white/20'>©smileschool 2020</p>
            </footer>
        </>
    )
}

export default Footer