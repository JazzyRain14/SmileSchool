import React from 'react'
import Logo from '../assets/Images/logo.png'
import SocialLogo from '../assets/Images/social_icons.png'

const Footer = () => {
    return (
        <>
            <footer className='px-[120px] py-[40px] bg-[#071629] flex items-center justify-between font-SourceReg'>
                <div className=''>
                    <img src={Logo} alt="" />
                </div>
                <img src={SocialLogo} alt="" />
            </footer>
        </>
    )
}

export default Footer