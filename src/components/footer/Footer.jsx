import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
    <div className='footer-wrapper flex-wrap flex-col md:flex-row h-[300px] w-[100%] bg-black text-white p-8 flex justify-center items-center gap-7'>

      <div className="first">
      <div className="logo">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP3y2YuTNlHFCJ00nuputMwtPN_lVoh0ge_Q&s" alt="footer-logo" className='w-[100px]' />
      </div>
      <div className="line">
        <p className='text-sm'>Thank you for visiting my Portfolio</p>
      </div>
      </div>

      
    
    
    <div className="social">
            <nav>
            
           
                
                <ul className='flex justify-evenly gap-10 items-center'>
                <a href="https://www.facebook.com/wangkhembivek.singha.12/">     <li className='cursor-pointer' ><FaFacebook size={30} className='text-[white] hover:scale-150  transition-all ease-in-out duration-100' /></li></a>
                <a href="https://github.com/bivek6001">    <li><FaGithub  size={30}  className='bg-[] hover:scale-150 cursor-pointer  transition-all ease-in-out duration-100' /></li></a>
                <a href="https://www.instagram.com/bivekk_/">    <li><FaInstagram  size={30}  className='text-[white] cursor-pointer hover:scale-150  transition-all ease-in-out duration-100'/></li></a>
                <a href="https://www.linkedin.com/in/bivek-singha-76a413253/">      <li><FaLinkedin  size={30}  className='text-[white] cursor-pointer hover:scale-150  transition-all ease-in-out duration-100'/></li></a>
                <li><FaXTwitter  size={40}  className=' hover:scale-150 cursor-pointer transition-all ease-in-out duration-100'/></li>
                 
                </ul>
            </nav>

        </div>
    
    
    
    
    
    
    
    
    
    
    </div>
    <p className='font-bold ' >Version 1.0</p>
    </>

  )
}

export default Footer