import React from 'react'

const Contact = () => {
  return (
    <div className="contact-wrapper flex justify-around gap-9  items-center p-10 my-10 h-[100%] w-[100%] ">
        <div className="left ">
            <h2 className='font-bold text-3xl'>Contact Me</h2>
            <p className=' font-semibold text-sm'>Feel free to reach out to me at any time.</p>
            <p className='text-sm' >Email: <a href="mailto:bivekwangkhem6001@gmail.com">bivekwangkhem6001@gmail.com</a></p>
            <p className='text-sm'>Phone: +91 6001971918</p>
          
          
          {/* //contact-formarea */}
           <div className="contact-form">
            <h1>Send me Message</h1>

    <form method='POST'>
    <div className="name  w-[350px] h-[50px]  border-b-2 border-black">
    <input type="text" required placeholder='Enter your Email' className='outline-none h-[100%] w-[100%] p-4 ' />
    </div>
      
      <div className="email w-[350px] h-[50px] border-b-2 border-black ">  <input type="text" placeholder='Enter your name'  className='outline-none h-[100%] w-[100%] p-4 ' /></div>
      
       <div className="message  w-[350px] h-[50px] border-b-2 border-black ">
       <input type="text" required name="message" id="" className='outline-none h-[100%] w-[100%] peer-aria-required:  '></input>
       </div>

       <div className="send">
    <button className='p-3 font-bold bg-[#1791C0]  text-white rounded my-5'>Submit</button>


       </div>
    </form>


           </div>
        </div>
        <div className="right w-[40%] h-[100%]">

    <img src="https://static.vecteezy.com/system/resources/previews/014/549/640/non_2x/contact-us-via-email-phone-or-office-location-communicate-with-customer-or-client-business-information-or-channel-for-business-contact-concept-businessman-with-telephone-email-and-location-pin-vector.jpg" alt="contact-pic" className='w-[100%]' />

        </div>
    </div>
  )
}

export default Contact