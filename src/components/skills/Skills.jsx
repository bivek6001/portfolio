import React from 'react'
import { useGSAP } from '@gsap/react'
// import gsap from "gsap"
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const Skills = () => {

    useGSAP(() =>{
         gsap.from(".skill-wrapper div",{
            y:50,

            opacity:0,
            duration:1,
            // stagger:1,
            
            scrollTrigger:{
                scroller:"body",
                trigger:".skill-wrapper",
                // markers:true,
                scrub:1,
                start:"top 30%",
                end:"bottom 70%"
            }
        })
        gsap.to(".react img",{
            rotate:720,
            yoyo:true,
            duration:5,
            
            repeat:-1
        })
    
        


    })
  return (
<>
    <h1 className='font-bold text-4xl mx-10 mt-[80px] h-[100%] w-[100%] my-10 '>Skills & Expertise</h1>

   <div className="skill-wrapper flex flex-wrap  md:flex-row  justify-center flex-col   gap-6 items-center h-[100%] w-[100%]">
       <div className="html  flex items-center justify-center  flex-col transition-all ease-in-out duration-100 p-2 hover:scale-110 hover:rounded-xl hover:shadow-xl">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrBIch_Bsl-Ea2qIXbpQh8cqTqsWZOHbhuww&s" alt="" className='w-[130px]' />
    <p className="font-bold">HTML5</p>
   
        
    
    </div>
    <div className="github   flex items-center justify-center flex-col   transition-all ease-in-out duration-100 p-2 hover:scale-110 hover:shadow-lg hover:rounded-xl">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqj9Ii13d6hx5a9kyLnC5A8A96LDSaSZv_w&s" alt="github" className='w-[150px]' />
    <p className="font-bold">Github</p>
        
    
    </div>
    <div className=" flex-col flex items-center justify-center transition-all ease-in-out duration-100 p-2 hover:scale-110 hover:shadow-lg hover:rounded-xl">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s" alt="tailwond css" className='w-[150px]' />
        <p className='font-bold'>Tailwind CSS</p>
    </div>
    <div className="css  flex items-center justify-center flex-col gap-3  transition-all ease-in-out duration-100 p-2 hover:scale-110 hover:shadow-lg hover:rounded-xl">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3iHW9F8U24tel7OWvX4YKDzZH1n8Kt42Zsw&s" alt="" className='w-[150px]'/>
        <p className="font-bold">Cascading style Sheets</p>
    </div>
    <div className="js  flex items-center justify-center  flex-col gap-3  transition-all ease-in-out duration-100 p-2 hover:scale-110 hover:shadow-lg hover:rounded-xl">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="" className='w-[150px]'/>
        <p className="font-bold">HTML5</p>
    </div>
    <div className="react  flex items-center justify-center  flex-col  transition-all ease-in-out duration-100 p-2 hover:scale-110 hover:shadow-lg hover:rounded-xl gap-8">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s" alt="" className='w-[150px]'/>
        <p className="font-bold">react.JS</p>
    </div>
    <div className="nodejs  flex items-center justify-center  flex-col  transition-all ease-in-out duration-100 p-2 hover:scale-110 hover:shadow-lg hover:rounded-xl">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJs5uMyfrmgKbw5PeIa_hNtC-K-Npkdg47dYhwmitEXK9tWbQCsFxCDuLjO3RvDhSChlw&usqp=CAU" alt="" className='w-[150px]'/>
        <p className="font-bold">node.JS</p>
    </div>
    <div className="express  flex items-center justify-center flex-col  transition-all ease-in-out duration-100 p-2 hover:scale-110 hover:shadow-lg hover:rounded-xl">
        <img src="https://miro.medium.com/v2/resize:fit:1400/1*i2fRBk3GsYLeUk_Rh7AzHw.png" alt="" className='w-[150px]'/>
        <p className="font-bold">express.JS</p>
    </div>
    <div className="mongo  flex items-center justify-center  flex-col  transition-all ease-in-out duration-100 p-2 hover:scale-110 hover:shadow-lg hover:rounded-xl">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNcCK71bf4Yaf9qLrEk9BdAzIf6fRR6StmKA&s" alt="" className='w-[150px]'/>
        <p className="font-bold">MondoDB</p>
    </div>
    



   </div>
   </>
  )
}

export default Skills