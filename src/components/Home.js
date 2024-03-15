import React, { useState } from 'react'
import MediaQuery from 'react-responsive'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import {easeIn, motion} from "framer-motion";
// import {fadeIn} from '../variants';

function Home(){
  const[counterState, setCounterState ] = useState(false)
  return(
  <>
{/* <div className='bg-pink-300 pt-20'>
<h1>Device Test!</h1>
<MediaQuery maxWidth={1224}>
<p>You are on a mobile or tablet </p>
<MediaQuery minWidth={1824}>
<p>You a desktop or laptop</p>
</MediaQuery>
</MediaQuery>

</div> */}
  {/* --------------------------------------------Main Heading--------------------------  */}
  <motion.div
  initial={{x:100, opacity:0}}
  animate={{x:0, opacity:1}}
  transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1}}
  className="container pt-40 mb-20 h-screen md:h-auto justify-center text-center mx-0 w-full"> 
  <h1 className="text-4xl font-bold sm:text-7xl md:text-center text-center text-black pb-4 min-w-full">STRATEGIC TAX CONSULTING</h1>
  <h3 className="text-xl font-bold text-center md:text-center sm:text-4xl text-yellow-500">Trustworthy Tax Advice</h3>

<motion.div 
initial={{x:-100, opacity:0}}
whileInView={{x:0, opacity:1}}
transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1}}
// variants={fadeIn("up", 0.2)}
// initial="hidden"
// whileInView={"show"}
// viewport={{once: false, amount: 0.7}}


className='container w-full justify-center md:px-32 '>
<div className="grid grid-cols-1 md:grid-cols-3 py-10 mx-full md:space-x-5"> 
  <div class="relative flex flex-col mt-6 bg-white shadow-md bg-clip-border rounded-xl h-40">
  <div class="p-4 bg-black rounded-t-xl">
  <i className="fa fa-file-text-o text-6xl font-bold  text-yellow-500 "></i>
    <h5 class="block mb-2 font-sans text-4xl antialiased font-semibold leading-snug tracking-normal text-white">
       ITR FILING
    </h5>
  </div>
  <div class="pt-0 hover:bg-yellow-500 hover:rounded-b-xl">
    <a href="#" class="inline-block">
      <button
        class="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-black uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-yellow-500 active:bg-yellow-500"
        type="button">
        Explore More
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
          stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
        </svg>
      </button>
    </a>
  </div>
</div> 

<div class="relative flex flex-col mt-6 bg-white shadow-md bg-clip-border rounded-xl">
  <div class="p-4 bg-black rounded-t-xl">
  <i className="fa fa-file-text-o text-6xl font-bold  text-yellow-500 "></i>
    <h5 class="block mb-2 font-sans text-4xl antialiased font-semibold leading-snug tracking-normal text-white">
      TAX PLANNER
    </h5>
  </div>
  <div class="pt-0 hover:bg-yellow-500 hover:rounded-b-xl">
    <a href="#" class="inline-block">
     <button
        class="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-black uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-yellow-500 active:bg-yellow-500"
        type="button">
        Explore More
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
          stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
        </svg>
      </button>
    </a>
  </div>
</div> 

<div class="relative flex flex-col mt-6 bg-white shadow-md bg-clip-border rounded-xl">
  <div class="p-4 bg-black rounded-t-xl">
  <i className="fa fa-file-text-o text-6xl font-bold  text-yellow-500 "></i>
    <h5 class="block mb-2 font-sans text-4xl antialiased font-semibold leading-snug tracking-normal text-white">
      CONSULTATION
    </h5>
    
  </div>
  <div class="pt-0 hover:bg-yellow-500 hover:rounded-b-xl">
    <a href="#" class="inline-block">
    <button
        class="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-black uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-yellow-500 active:bg-yellow-500"
        type="button">
        Explore More
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
          stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
        </svg>
      </button>
    </a>
  </div>
</div> 
</div>
</motion.div>
</motion.div>

{/* ------------------------------------------------------------------WELCOME TO GOVYAPAR---------------------------- */}
<motion.section 
initial={{x:-100, opacity:0}}
whileInView={{x:0, opacity:1}}
transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
className='container w-full mx-0 mt-40 pt-20 md:px-20'>
<img src="./Tax-Consultant-2048x1639.png" className='md:float-right md:w-[40%]'/>
    <h3 className='text-xl md:text-2xl font-semibold text-yellow-500'>WELCOME TO GOVYAPAR</h3>
    <h1 className='text-3xl md:text-4xl font-bold text-black leading-tight'>Tax Consultant: Key to Financial Success</h1>
    <p className='text-xl text-justify'>
    A tax consultant in the first instance provides services to the taxpayers whether individual or organization of tax planning, filing returns, suggesting investment plans, etc. We take into account your risk tolerance, time horizon, and financial resources, providing you with a roadmap that aligns with your goals.
    </p>
    <p>
      <motion.ul
       initial={{x:-100, opacity:0}}
whileInView={{x:0, opacity:1}}
transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
 class="text-xl font-semibold text-black pt-3">
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500"></i> Planning for the Future</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500"></i> Time Savings</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500"></i> Maximize Savings</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500"></i> Accuracy</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500"></i> Tax Compliances</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500"></i> Peace of Mind</li>
      </motion.ul>
    </p>
</motion.section>

{/* -------------------------------------------------About-us---------------------------- */}
<motion.section
initial={{x:-100, opacity:0}}
whileInView={{x:0, opacity:1}}
transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1}}
className='container w-full mx-0 pt-10 md:px-20 md:pt-32'>
  <img src="Why Do.png" className='md:float-left md:w-[40%]'/>
    <h3 className='text-xl md:text-3xl font-semibold text-yellow-500'>ABOUT US</h3>
    <h1 className='text-2xl md:text-4xl font-bold text-black leading-tight'>Expert Financial Guidance Tailored To Your Success</h1>
    <p className='text-xl text-justify'>
    Our team of highly qualified Chartered Accountants (CAs) and financial experts. We are dedicated to providing comprehensive solutions for all your financial needs, ensuring your success in every step of your financial journey.
    </p>
    <p className='text-xl text-justify'>
    Our experienced professionals specialize in financial planning, tax optimization, and investment strategies. We understand that each individual and business has unique financial goals and challenges. That’s why we offer personalized services, tailoring our expertise to meet your specific needs and aspirations.
    </p>
</motion.section>

{/* ------------------------------------------Experience and Clients------------------------------------ */}
<section className='container w-full mx-0 pt-20 pb-20'>
<ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
<div className='grid grid-cols-1 md:grid-cols-2 text-center space-y-9 gap-2 px-0 font-semibold'>
  <div>
  <p className='text-yellow-500 text-2xl'>EXPERIENCE</p>
  <h1 className='text-5xl font-bold'>
  {counterState && <CountUp start={0} end={8} duration={2.75}></CountUp>}+</h1>
  </div>

  <div>
  <p className='text-yellow-500 text-2xl'>CLIENTS</p>
  <h1 className='text-5xl font-bold'>
  {counterState && <CountUp start={0} end={2500} duration={2.75}></CountUp>}+</h1>
  </div>
</div>
</ScrollTrigger>
</section>

{/* ----------------------------------------OUR SERVICES----------------------------------------- */}
<motion.section
initial={{y:100, opacity:0}}
whileInView={{y:0, opacity:1}}
transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
className='container w-full mx-0 pt-10 text-center'>
<h3 className='text-xl font-semibold text-yellow-500'>OUR SERVICES</h3>
<h1 className='text-3xl font-bold text-black leading-tight'>What We Offer</h1>
</motion.section>

{/* ------------------------------------------Packages------------------------------------------------------- */}
<section className='container w-full mx-0 pt-10'>
<motion.h3 className='text-xl font-semibold text-yellow-500 text-center'>PACKAGES</motion.h3>

<motion.div 
className="pricing-box-container flex flex-wrap justify-center">
    <motion.div 
initial={{y:100, opacity:0}}
whileInView={{y:0, opacity:1}}
transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
className="pricing-box bg-yellow-500 text-center shadow-md rounded-md p-6 m-2 min-w-sm max-w-md h-auto pt-5 pb-5">
    <h5 className="text-lg font-bold text-black uppercase">Starter</h5>
      <ul className="features-list list-none pl-0 mt-4">
        <li className="flex items-center text-black mb-2">
          <i className="fas fa-check-circle text-black"></i> Preparation of books of accounts
        </li>
        <li className="flex items-center text-black mb-2">
          <i className="fas fa-check-circle text-black"></i> Preparation of Trial Balance, Balance Sheet, Profit & Loss Statement
        </li>
        <li className="flex items-center text-black mb-2">
          <i className="fas fa-check-circle text-black"></i> Income Tax Returns
        </li>
      </ul>
      <Link to ="/continue"><button className="btn-primary text-white bg-black hover:bg-black hover:shadow-md active:bg-black focus:bg-black focus:border-white px-4 py-2 rounded-md font-bold mt-4 uppercase transition ease-in-out duration-100">
        Lets Start
      </button></Link>
    </motion.div>
    
    <motion.div 
initial={{y:100, opacity:0}}
whileInView={{y:0, opacity:1}}
transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.4}, ease:"easeIn", duration:1}}
className="pricing-box bg-yellow-500 text-center shadow-md rounded-md p-6 m-2 min-w-sm max-w-md h-auto pt-5 pb-5">
    <h5 className="text-lg font-bold text-black uppercase">Starter</h5>
      <ul className="features-list list-none pl-0 mt-4">
        <li className="flex items-center text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> Preparation of books of accounts
        </li>
        <li className="flex items-center text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> Preparation of Trial Balance, Balance Sheet, Profit & Loss Statement
        </li>
        <li className="flex items-center text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> GST Returns Income Tax Returns 
        </li>
      </ul>
      <Link to ="/continue"><button className="btn-primary text-white bg-black hover:bg-black hover:shadow-md active:bg-black focus:bg-black focus:border-white px-4 py-2 rounded-md font-bold mt-4 uppercase transition ease-in-out duration-100">
        Lets Start
      </button></Link>
    </motion.div>
  
    <motion.div  
initial={{y:100, opacity:0}}
whileInView={{y:0, opacity:1}}
transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.}, ease:"easeIn", duration:1}}
 className="pricing-box bg-yellow-500 text-center shadow-md rounded-md p-6 m-2 min-w-sm max-w-md h-auto pt-5 pb-5">
    <h5 className="text-lg font-bold text-black uppercase">All In One</h5>
      <ul className="features-list list-none pl-0 mt-4">
        <li className="flex items-center text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> Preparation of books of accounts
        </li>
        <li className="flex items-center text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> Preparation of Trial Balance, Balance Sheet, Profit & Loss Statement
        </li>
        <li className="flex items-center text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> GST Returns Income Tax Returns ROC Compliances
        </li>
      </ul>
      <Link to ="/continue"><button className="btn-primary text-white bg-black hover:bg-black hover:shadow-md active:bg-black focus:bg-black focus:border-white px-4 py-2 rounded-md font-bold mt-4 uppercase transition ease-in-out duration-100">
       Lets Start
      </button></Link>
    </motion.div>
</motion.div>

</section>

{/* --------------------------------------COMPANY'S VISION----------------------------------------- */}
<motion.section
initial={{x:-100, opacity:0}}
whileInView={{x:0, opacity:1}}
transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
 className='container w-full m-0 pt-10 md:pr-[500px] md:px-20'>
    <h3 className='text-xl md:text-4xl font-semibold text-yellow-500'>COMPANY'S VISION</h3>
    <h1 className='text-2xl md:text-3xl font-bold text-black leading-tight'>Your Tax Success Is Our Top Priority</h1>
    <p className='text-xl text-justify'>
    At our firm, our vision is to empower individuals and businesses to achieve financial prosperity and secure their long-term success. We strive to be the trusted advisors that our clients rely on for expert guidance, innovative solutions, and personalized service.
    </p>
    <br/>
    <h1 className='text-xl font-semibold text-black leading-tight'><i class="fa fa-hand-o-right text-2xl text-yellow-500"></i> Empower Our Clients With The Knowledge</h1>
    <p className='text-xl text-justify'>
    We empower clients with knowledge for confident financial decisions, unlocking their potential for success and independence.
    </p>
    <br/>
    <h1 className='text-xl font-semibold text-black leading-tight'><i class="fa fa-hand-o-right text-2xl text-yellow-500"></i> Tax Advisor Firm For Businesses Of All Sizes</h1>
    <p className='text-xl text-justify'>
    Trusted tax advisors for businesses of all sizes, providing  expert guidance and solutions for optimal tax management and compliance.
    </p>
</motion.section>
{/* ----------------------------------------------Contact Us------------------------------------------------- */}
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
export default Home