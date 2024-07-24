import React from 'react'

import  gsap  from "gsap";
import { useRef } from 'react';
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const About = () => {

  const aboutImg= useRef();
  
//  useGSAP(()=>{
//   gsap.from(".about-wrapper about-text ",{
   
//     x:100,
//     opacity:0,
//     duration:1,
//     delay:1,
//     scrollTrigger:{
//       trigger:".about-wrapper",
//       scroll:"body",
//       scrub:true
//     }
  
    
   
// })
// gsap.from(about.current,{
//   x:400,
//   opacity:0,
//   duration:1,
//   delay:2,
//   ease: "elastic.out(1, 0.3)",
// })
//  })

  return (
  <div className="about-wrapper flex justify-center items-center md:justify-around flex-col md:flex-row flex-wrap h-[100%] w-[100%] p-[40px] mt-7 ">

 
    <div className="right w-[60%] flex flex-wrap gap-4 flex-col justify-center">

        <h1 className='text-3xl font-bold'>About Me</h1>
       <p className='about-text text-sm font-bold text-[#43D743]' >As an aspiring MERN stack developer, I am passionate about building dynamic and responsive web applications using MongoDB, Express.js, React.js, and Node.js.









</p>

    </div>
    <div  ref={aboutImg}  className="left w-[50%]">
    <img src="https://freesvg.org/img/computers.png" alt="about-pic" className='w-[280px]' />



    </div>



  </div>
  )
}

export default About