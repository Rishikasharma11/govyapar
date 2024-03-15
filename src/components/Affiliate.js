import React from 'react'
import {easeIn, motion} from "framer-motion";

function Affiliate(){
  return(
    <>
    <div className='container mt-20 items-center w-full'>
      <h1 className='text-5xl text-black text-center'>Become an Affiliate Partner and Earn Revenue with <br/>
      <span className='text-7xl '> GOVYAPAR</span>  
      </h1>
      <p>Help individuals and businesses navigate tax complexities while earning attractive commissions.</p>
    </div>
    {/* -----------------------------------------------Contact------------------------------------------------ */}
    <div class="container  bg-black w-full mt-20 pt-10 mx-0">
  <div class="md:flex justify-between items-center md:px-60 py-10 ">
    <motion.div
     initial={{x:-100, opacity:0}}
     whileInView={{x:0, opacity:1}}
     transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
     >
      <h1 class="md:text-4xl text-2xl text-yellow-500 font-bold text-center leading-tight">Subscribe to us!</h1>
      <p class="text-md text-white my-2">Subscribe to our newsletter for exclusive updates and offers.</p>
    </motion.div>
    <form>
      <motion.div  initial={{x:-100, opacity:0}}
whileInView={{x:0, opacity:1}}
transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
 class="flex">
        <input type="text" placeholder="Enter your email" name="mail" required class="rounded-md px-4 py-2 w-full mr-2 focus:outline-none focus:ring-1 focus:ring-yellow-500" />
        <button type="submit" class="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-md shadow-sm">SEND</button>
      </motion.div>
    </form>
  </div>
<div>
  <h1 className="text-2xl text-yellow-500 font-bold text-center">Contact</h1>
  <motion.form
   initial={{y:-100, opacity:0}}
   whileInView={{y:0, opacity:1}}
   transition={{delay:0.10, y:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
    className="text-xl space-y-1 rounded-md mx-3 md:pt-10 pt-2 text-center md:px-[480px]"> 
    <label className='text-white'>Name</label> <br/>
    <div className='flex'>
    <i class="fa fa-user icon text-black p-2 rounded-l-md bg-yellow-500"></i>
    <input type='text' name='name' placeholder='Enter your Name' className='w-full p-1 rounded-r-md' required/>
    </div>
    <br/>
    <label className='text-white'>Email</label><br/>
    <div className='flex'>
    <i class="fa fa-envelope icontext-black p-2 rounded-l-md bg-yellow-500"></i>
    <input type='email' name='email' placeholder='Enter your Email' className='w-full p-1 rounded-r-md' required/>
    </div>
    <br/>
    <label className='text-white'>Message</label><br/>
    <div className='flex'>
    <i class="fa fa-edit icon text-black p-2 rounded-l-md bg-yellow-500"></i>
    <textarea className='w-full p-1 rounded-r-md' placeholder='Enter your Message' required></textarea>
    </div>
    <button type="submit" class="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-3 mt-4 rounded-md shadow-sm">SUBMIT</button>
  </motion.form>
</div>
<div className='mt-10 text-center'>
<motion.ul
 initial={{x:-100, opacity:0}}
 whileInView={{x:0, opacity:1}}
 transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
  class="list-none">
      <h1 class="text-xl text-yellow-500">GET IN TOUCH</h1>
        <li className='font-semibold text-white'><i class="fa fa-phone text-yellow-500"> </i> +91-9808030923</li> 
        <li className='font-semibold text-white'><i class="fa fa-envelope text-yellow-500"> </i> govyapar@gmail.com/</li>       
</motion.ul>
<motion.ul
 initial={{y:100, opacity:0}}
 whileInView={{y:0, opacity:1}}
 transition={{delay:0.10, y:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
  className='flex space-x-2 justify-center mt-3 text-lg'>
        <li><i class="fa fa-linkedin text-yellow-500 hover:font-bold"></i></li>
        <li><i class="fa fa-twitter text-yellow-500 hover:font-bold"></i></li>
        <li><i class="fa fa-instagram text-yellow-500 hover:font-bold"></i></li>
        <li><i class="fa fa-facebook-f text-yellow-500 hover:font-bold"></i></li>
        <li><i class="fa fa-youtube text-yellow-500 hover:font-bold"></i></li> 
</motion.ul>
</div>
<footer className='text-white text-sm text-center mb-0 mt-2'>
  ©Copyright 2024. All Rights Reserved. Govyapar
</footer>

</div>
    </>
  )
}
export default Affiliate