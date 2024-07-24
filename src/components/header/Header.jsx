import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { useRef } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Header = () => {
    const leftRef = useRef()
    const links= useRef();
    const picture=useRef();


    const [active,setActive]=useState(false);

    useGSAP(()=>{
      
        gsap.from(picture.current,{

x:500,
opacity:0,
duration:2

        })
        gsap.from(leftRef.current,{

            x:-1500,
            opacity:0,
            duration:2
            
                    })
    

  
                    
      

    })
  return (
    <>
    <div className="parent-container header px-5  w-[100%] h-[100%] flex justify-between items-center  mx-auto ">
        <div  className="left px-4 " >
            
        <div  className=" logo w-[120px] h-[100px]">

        <img src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Portfolio.hu_full_logo.png" alt="logo for portfolio website" className='h-[100px] w-[110px] object-contain '/>
        </div>


        </div>
      
        <div  className="right ">
     {  !active &&  <GiHamburgerMenu size={30} className='md:hidden' onClick={()=>{
            setActive(!active);
        }} />
       }
      

      
        <nav className='md:block hidden' >
            <ul className='nav-links flex gap-7 font-bold' >
               <Link to="/"> <li className='hover:border-b-2 border-[#FE46BE] cursor-pointer transition-all ease-in-out duration-100 p-2 ' >Home</li></Link>
               <Link to="/about">   <li className='hover:border-b-2 border-[blue] cursor-pointer  transition-all ease-in-out duration-100 p-2'>About</li></Link>
               <Link to="/skills">  <li className='hover:border-b-2 border-[#0AE448]  cursor-pointer transition-all ease-in-out duration-100 p-2'> Skills</li></Link>
               <Link to="/education">    <li className='hover:border-b-2 border-[#BFBFC9] cursor-pointer transition-all ease-in-out duration-100 p-2'>Education</li></Link> 
                {/* <li className='hover:border-b-2 border-cyan-400  transition-all ease-in-out duration-100 p-2'> Projects</li> */}
                <Link to="/contact">  <li className='hover:border-b-2 border-purple-800 cursor-pointer transition-all ease-in-out duration-100 p-2 '>Contact</li></Link>
            </ul>
        </nav>



        </div>
</div>

    <div ref={leftRef} className="content p-10 w-[100%] h-[100%] flex flex-wrap justify-around items-center">
    <div ref={links} className="left flex justify-center gap-5 flex-col px-3">
        <h1 className='text-4xl font-bold '>Hi i am    <span className='text-4xl font-bold text-[#9932FA]'>Bivek Singha</span></h1>
      
        <p className='font-bold text-xl text-[#0A66C2]'>   <ReactTyped strings={["MERN stack developer","Looking for Oppurtunities","Welcome to my Portfolio"]} typeSpeed={70} backSpeed={50} loop/></p>
      

       <Link to="/about"><button className='bg-[#4070F4] w-[140px] font-bold border-purple-400 p-4 rounded-2xl text-white'>About me</button></Link> 

        <div className="social">
            <nav>
                <ul className='flex justify-around items-center'>
                <a href="https://www.facebook.com/wangkhembivek.singha.12/">     <li className='cursor-pointer' ><FaFacebook size={40} className='text-[#0866FF] hover:scale-150  transition-all ease-in-out duration-100' /></li></a>
                <a href="https://github.com/bivek6001">    <li><FaGithub  size={40}  className='bg-[] hover:scale-150 cursor-pointer  transition-all ease-in-out duration-100' /></li></a>
                <a href="https://www.instagram.com/bivekk_/">    <li><FaInstagram  size={40}  className='text-[#FE46BE] cursor-pointer hover:scale-150  transition-all ease-in-out duration-100'/></li></a>
                <a href="https://www.linkedin.com/in/bivek-singha-76a413253/">      <li><FaLinkedin  size={40}  className='text-[#0A66C2] cursor-pointer hover:scale-150  transition-all ease-in-out duration-100'/></li></a>
                   <li><FaXTwitter  size={40}  className='bg-[] hover:scale-150 cursor-pointer transition-all ease-in-out duration-100'/></li>
                </ul>
            </nav>

        </div>


    </div>
    <div ref={picture} className="right">

        <div className="pic rounded-lg">

    <img src="https://png.pngtree.com/png-clipart/20220117/original/pngtree-flat-vector-cartoon-programmer-png-image_7147219.png" alt="portfolio img" className=' w-[300px] rounded-[100%]' />

        </div>



    </div>


    </div>


    <div className={`md:hidden block hamburger bg-[#111] text-white   fixed top-0 h-screen w-[100%] z-[999] ${active ? "translate-x-0": "translate-y-[-1000px]" }  opacity-80 transition-all duration-700 ease-in-out `}>
    <IoCloseSharp  size={40} className='mx-8 md:hidden absolute right-0' onClick={()=>{
            setActive(!active);
        }} />
        <nav className='my-8 h-screen w-screen' >
            <ul className='nav-links flex gap-7 font-bold flex-col items-center justify-center ' >
                <li className='hover:border-b-2 border-[#FE46BE] cursor-pointer transition-all ease-in-out duration-100 p-2 ' >Home</li>
                <li className='hover:border-b-2 border-[blue]  cursor-pointer transition-all ease-in-out duration-100 p-2'>About</li>
                <li className='hover:border-b-2 border-[#0AE448] cursor-pointer  transition-all ease-in-out duration-100 p-2'> Skills</li>
                <li className='hover:border-b-2 border-[#BFBFC9] cursor-pointer transition-all ease-in-out duration-100 p-2'>Education</li>
                {/* <li className='hover:border-b-2 border-cyan-400  transition-all ease-in-out duration-100 p-2'> Projects</li> */}
                <li className='hover:border-b-2 border-purple-800 cursor-pointer transition-all ease-in-out duration-100 p-2 '>Contact</li>
            </ul>
        </nav>
        </div>


    </>
  )
}

export default Header