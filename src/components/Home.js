import React, { useRef, useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { Link } from 'react-router-dom';
import { motion} from "framer-motion";
import emailjs from '@emailjs/browser';
import { Fade } from 'react-reveal';
import { TypeAnimation } from 'react-type-animation';
import { ToastContainer, Flip, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import {fadeIn} from '../variants';

function Home(){
  // -----------------------------NumberNotify-------------------
  const NumberNotify = () => {
    toast.success('Thanks for filing, our team will connect soon', {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Flip,
      });
  }
  
  // -----------------------------exp and clients----------------------
  const[counterState, setCounterState ] = useState(false)

   // --------------------------------------------subscribe to our newsletter--------------------------------
   const form = useRef();

   const sendEmail = (e) => {
     e.preventDefault();
 
     emailjs
       .sendForm(
         'service_2shjaqt', 
         'template_yb1ikfz', 
         form.current, {
         publicKey: 'KapdrjZ67SvjEm1Jl',
       })
       .then(
         () => {
          toast.success('Subscribed', {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Flip,
            });
         },
         (error) => {
           console.log('FAILED...', error.text);
         },
       );
   };

  // ----------------------------contact------------------------
  const[user, setUser] = useState(
    {
        Name: '', Number:'', Message:''
    }
)
// const [errorMsg, setErrorMsg] = useState("");
let name, value
const data = (e) =>
{
    console.log(user)
    name = e.target.name;
    value = e.target.value;
    setUser({...user, [name]:value});
}
const getdata = async (e) => 
{
  if (!user.Name || !user.Number || !user.Message) {
    // setErrorMsg("Fill all fields");
    return;
  }
    // setErrorMsg("");
    
    const{Name, Number, Message} = user;
    e.preventDefault();
    const options = {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            Name, Number, Message
        })
    }
    const res = await fetch(
        'https://govyapar-contact-default-rtdb.firebaseio.com/UserData.json',
        options
        )
        if(res)
        {
          toast.success('Message sent successfully', {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Flip,
            });
        }
        else
        {
            alert("Error Ocurred")
        }
}

  return(
  <>
  <div>
    <a href='https://wa.me/919808030923'>
    <img src='WhatsappIcon.png' className='fixed w-[20%] md:w-[13%] lg:w-[10%] right-0 top-[520px] cursor-pointer z-10' alt=''/></a>
    </div>
  {/* --------------------------------------------Main Heading--------------------------  */}
  <motion.div
  initial={{x:100, opacity:0}}
  animate={{x:0, opacity:1}}
  transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1}}
  className="container pt-40 mb-20 h-screen md:h-auto justify-center text-center mx-0  max-w-full scroll-smooth"> 
  <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold md:text-center text-center text-black pb-4 min-w-full">STRATEGIC <br className='block md:hidden'/>
  <TypeAnimation className=''
  sequence={[
    " TAX",
    1000, 
    " MANAGEMENT",
    1000,
    " STARTUP",
    1000,
    " GST",
    1000,
  ]}
  wrapper="span"
  speed={50}
  style={{ color: '#eab308', display: 'inline-block' }}
  repeat={Infinity}
/> 
  <br className='block md:hidden'/>
  CONSULTING</h1>
  <h3 className="text-xl animate-bounce font-bold text-center md:text-center sm:text-4xl text-yellow-500">Trustworthy Tax Advice</h3>

  <form class="flex w-full md:py-4 pt-2 justify-center">
  <input 
  type="text" 
  placeholder="Enter Phone Number" 
  maxLength={10}
  name="Number" 
  // value={number.Number} 
  required 
  // onChange={numberData}
  class="text-white rounded-md bg-black items-center px-4 py-2 md:w-[30%]  xl:w-[20%] w-full mr-2 focus:outline-none focus:ring-1 focus:ring-yellow-500" />
  <button 
  onClick={NumberNotify}
  type="submit" 
  class="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-md shadow-black-md text-sm hover:scale-105 duration-300 ease-in">Start Filing</button>
    <ToastContainer
  position="top-center"
  autoClose={4000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="colored"
  transition= {Flip}
  />
  </form>

<motion.div 
initial={{x:-100, opacity:0}}
whileInView={{x:0, opacity:1}}
transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1}}
className='container max-w-full justify-center xl:px-40 2xl:px-60'>
<div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-1 mx-full md:space-x-5 xl:px-0 sm:px-32 md:px-0 lg:px-16"> 
{/* <div class="relative flex flex-col mt-6 bg-white hover:bg-black shadow-md bg-clip-border rounded-xl"> */}

<Link to="/itrFiling">
  <img src="photo3.png" className='opacity-100  bg-black w-[30%] px-2 py-1 mx-auto rounded-lg relative top-10 z-10' alt=''/> 
  <div class="group flex flex-col relative cursor-pointer items-center justify-center overflow-hidden transition-shadow shadow-xl hover:shadow-xl hover:shadow-black/30 hover:rounded-xl border-2 hover:border-none border-black hover:bg-black rounded-2xl">

<div class="absolute inset-0  group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>

  <div class="cursor-pointer p-4 ease-in hover:shadow-xl duration-300 hover:scale-105 rounded-xl md:py-10">
    {/* <i className="fa fa-file-text-o sm:text-4xl md:text-6xl font-bold text-yellow-500 "></i> */}
    <h5 class="block mb-2 pt-10 font-sans sm:text-2xl md:text-3xl lg:text-4xl opacity-100 transition-opacity duration-300 group-hover:opacity-0 font-bold text-black">ITR FILING</h5>  
    <p className='text-black py-2 opacity-100 transition-opacity duration-300 group-hover:opacity-0'>File your taxes yourself with ease, hire our tax experts if you need</p>

    <div class="absolute inset-0 flex flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-[-1]">
    
    <p class="text-md text-justify  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Doesn't matter if you're a salaried professional or have capital gains,It's super easy for all. Start with minimal details to file ITR in no time</p>
    </div>

    <button type="submit" class="bg-yellow-500 border-2 border-black text-black font-extrabold py-2 px-4 rounded-md text-sm hover:scale-105 duration-300 ease-in">Explore More</button>

  </div>

</div> 

</Link>

<Link to ="/tax-planner">
<img src="photo2.png" className='opacity-100  bg-black w-[30%] px-2 py-1 mx-auto rounded-lg relative top-10 z-10' alt=''/> 
  <div class="group flex flex-col relative cursor-pointer items-center justify-center overflow-hidden transition-shadow shadow-xl hover:shadow-xl hover:shadow-black/30 hover:rounded-xl border-2 hover:border-none border-black hover:bg-black rounded-2xl">

<div class="absolute inset-0  group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>

  <div class="cursor-pointer p-4 ease-in hover:shadow-xl duration-300 hover:scale-105 rounded-xl md:py-10 pt-">
    {/* <i className="fa fa-file-text-o sm:text-4xl md:text-6xl font-bold text-yellow-500 "></i> */}
    <h5 class="block mb-2 pt-10 font-sans sm:text-2xl md:text-3xl lg:text-4xl opacity-100 transition-opacity duration-300 group-hover:opacity-0 font-bold text-black">GET ECA FOR ITR FILING</h5>
  <p className='text-black py-2 opacity-100 transition-opacity duration-300 group-hover:opacity-0'>For your ITR filing, Business & Legal compliance</p>
    
  <div class="absolute inset-0 flex flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-[-1]">
    
    <p class="text-md text-justify text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Leave the complexity of taxation in hands of our Tax experts. Get expert help for all kinds of filing scenarios like NRI filing, alt. Investments etc.</p>
    </div>

<button type="submit" class="bg-yellow-500 border-2 border-black text-black font-extrabold py-2 px-4 rounded-md text-sm hover:scale-105 duration-300 ease-in">Explore More</button>

  </div>

</div>

</Link>

<Link to ="/consultation">
  <img src="photo1.png" className='opacity-100  bg-black w-[30%] px-2 py-1 mx-auto rounded-lg relative top-10 z-10' alt=''/> 
  <div class="group flex flex-col relative cursor-pointer items-center justify-center overflow-hidden transition-shadow shadow-xl hover:shadow-xl hover:shadow-black/30 hover:rounded-xl border-2 hover:border-none border-black hover:bg-black rounded-2xl">

<div class="absolute inset-0  group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>

  <div class="cursor-pointer p-4 ease-in hover:shadow-xl duration-300 hover:scale-105 rounded-xl md:py-10 pt-">
    {/* <i className="fa fa-file-text-o sm:text-4xl md:text-6xl font-bold text-yellow-500 "></i> */}
    <h5 class="block mb-2 pt-10 font-sans sm:text-2xl md:text-3xl lg:text-4xl opacity-100 transition-opacity duration-300 group-hover:opacity-0 font-bold text-black">CONSULTATION</h5>
  <p className='text-black py-2 opacity-100 transition-opacity duration-300 group-hover:opacity-0'>1:1 Consultation. Exclusive Guidance, Direct to You.</p>
    
  <div class="absolute inset-0 flex flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-[-1]">
    
    <p class="text-md text-justify text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Experience personalized tax consultation at Govyapar. Simplify compliance and maximize savings with our expert guidance tailored to your needs.</p>
    </div>

<button type="submit" class="bg-yellow-500 border-2 border-black text-black font-extrabold py-2 px-4 rounded-md text-sm hover:scale-105 duration-300 ease-in">Explore More</button>

  </div>

</div>

</Link>

</div>
</motion.div>
</motion.div>

{/* ------------------------------------------------------------------WELCOME TO GOVYAPAR---------------------------- */}
<Fade bottom>
<motion.section 
initial={{x:-100, opacity:0}}
whileInView={{x:0, opacity:1}}
transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
className='container max-w-full mx-0 mt-[600px] md:mt-40 xl:pl-60 pt-20 xl:px-32 md:px-16 scroll-smooth'>
<img src="./consultant.png" className='md:float-right md:pt-20 md:w-[50%] lg:w-[40%]' alt=''/>
    <h3 className='text-lg md:text-2xl font-semibold text-yellow-500'>WELCOME TO GOVYAPAR</h3>
    <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight'>Tax Consultant: Key to Financial Success</h1>
    <p className='text-lg text-justify'>
    A tax consultant in the first instance provides services to the taxpayers whether individual or organization of tax planning, filing returns, suggesting investment plans, etc. We take into account your risk tolerance, time horizon, and financial resources, providing you with a roadmap that aligns with your goals.
    </p>
    <p>
      <motion.ul
       initial={{x:-100, opacity:0}}
whileInView={{x:0, opacity:1}}
transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
 class="text-lg font-semibold text-black pt-3 overflow-hidden">
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500"></i> Planning for the Future</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500"></i> Time Savings</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500"></i> Maximize Savings</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500"></i> Accuracy</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500"></i> Tax Compliances</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500"></i> Peace of Mind</li>
      </motion.ul>
    </p>
</motion.section>
</Fade>
{/* -------------------------------------------------About-us---------------------------- */}
<motion.section
initial={{x:-100, opacity:0}}
whileInView={{x:0, opacity:1}}
transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1}}
className='container max-w-full mx-0 pt-10 md:pt-40 md:px-16 xl:pr-60 xl:px-40 scroll-smooth overflow-hidden'>
<img src="Why Do.png" className='md:float-left md:w-[60%] xl:w-[50%]' alt=''/>
    <h3 className='text-lg md:text-3xl font-semibold text-yellow-500'>ABOUT US</h3>
    <h1 className='text-xl md:text-3xl lg:text-4xl font-bold text-black leading-tight'>Expert Financial Guidance Tailored To Your Success</h1>
    <p className='text-lg text-justify '>
    Our team of highly qualified Chartered Accountants (CAs) and financial experts. We are dedicated to providing comprehensive solutions for all your financial needs, ensuring your success in every step of your financial journey.
    </p>
    <br/>
    <p className='text-xl text-justify'>
    Our experienced professionals specialize in financial planning, tax optimization, and investment strategies. We understand that each individual and business has unique financial goals and challenges. That's why we offer personalized services, tailoring our expertise to meet your specific needs and aspirations.
    </p>
</motion.section>

{/* ------------------------------------------Experience and Clients------------------------------------ */}
<motion.section
initial={{x:-100, opacity:0}}
whileInView={{x:0, opacity:1}}
transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1}}
className='container max-w-full mx-0 py-10 md:mt-40 md:mb-30 pb-20 scroll-smooth overflow-hidden'>
<ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
<div className='flex justify-center text-center space-x-10 gap-10 font-semibold'>
  <div>
  <p className='text-yellow-500 md:text-2xl text-sm text-bold'>EXPERIENCE</p>
  <h1 className='md:text-5xl text-xl font-bold'>
  {counterState && <CountUp start={0} end={8} duration={2.75}></CountUp>}+</h1>
  </div>
  
  <div>
  <p className='text-yellow-500 md:text-2xl text-sm text-bold'>CLIENTS</p>
  <h1 className='md:text-5xl text-xl font-bold'>
  {counterState && <CountUp start={0} end={2500} duration={2.75}></CountUp>}+</h1>
  </div>
  </div>
  <div class="sm:py-4 md:py-10 lg:px-20 xl:px-60 px-8">
  <img src='experience.jpg' className='items-center md:float-left sm:px-20 md:px-0 md:w-[30%]' alt=''/>
  <h1 className='md:text-4xl xl:text-5xl text-xl text-yellow-500 font-bold sm:pt-2 md:pt-20'>Reduce your tax liability up to 26%</h1>
  <ul class="text-xl sm:text-md font-semibold text-black md:space-x-5 py-3 md:pt-10 md:flex">
      <li className='style-none'><i class="fas fa-check-circle"></i> On-demand tax support</li>
      <li className='style-none'><i class="fas fa-check-circle"></i> Your personal tax expert</li>
      <li className='style-none'><i class="fas fa-check-circle"></i> Guaranteed accuracy</li>
  </ul>
  <form class="w-full md:py-4 pt-2 justify-center hidden md:block">
  <input 
  type="tel" 
placeholder="Enter Phone Number" 
    maxLength={10}
  name="tel" 
  required 
  class="text-white rounded-md bg-black items-center px-4 py-2 md:w-[30%] w-full mr-2 focus:outline-none focus:ring-1 focus:ring-yellow-500" />
  <button 
  type="submit" 
  class="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-md shadow-black-md text-sm hover:scale-105 duration-300 ease-in">Start Filing</button>
  </form>
  </div>

<form class="flex w-full md:py-2 justify-center md:hidden">
  <input 
  type="tel" 
placeholder="Enter Phone Number" 
    maxLength={10} 
  name="tel" 
  required 
  class="text-white rounded-md bg-black items-center px-4 py-2 md:w-[30%] w-full mr-2 focus:outline-none focus:ring-1 focus:ring-yellow-500" />
  <button 
  onClick={NumberNotify}
  type="submit" 
  class="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-md shadow-black-md text-sm hover:scale-105 duration-300 ease-in">Start Filing</button>
    <ToastContainer
  position="top-center"
  autoClose={4000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="colored"
  transition= {Flip}
  />
  </form>
</ScrollTrigger>
</motion.section>

{/* ----------------------------------------OUR SERVICES----------------------------------------- */}
<div className='bg-gradient-to-t from-black via-gray-400 to-black py-10 container max-w-full'>
<motion.section
initial={{y:100, opacity:0}}
whileInView={{y:0, opacity:1}}
transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
className='pt-10 text-center scroll-smooth overflow-hidden'>
<h3 className='text-xl font-semibold text-yellow-500'>OUR SERVICES</h3>
<h1 className='text-3xl font-bold text-black leading-tight'>What We Offer</h1>
</motion.section>

{/* ------------------------------------------Packages------------------------------------------------------- */}
<section className='container max-w-full lg:mx-20 md:mx-20 lg:px-32 xl:px-60 mx-0 pt-10 scroll-smooth'>
<motion.h3 className='text-xl font-semibold text-yellow-500 text-center'>PACKAGES</motion.h3>

<motion.div 
className="pricing-box-container grid md:grid-cols-3 grid-rows-1 justify-center">
    <motion.div 
initial={{y:100, opacity:0}}
whileInView={{y:0, opacity:1}}
transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
className="pricing-box bg-yellow-500 text-center shadow-md rounded-md p-6 m-2 min-w-sm max-w-md h-auto pt-5 pb-5">
     <h5 className="text-lg font-bold text-black uppercase">STARTER</h5>
      <ul className="features-list list-none pl-0 mt-4">
        <li className="flex text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> Preparation of books of accounts
        </li>
        <li className="flex text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> Preparation of Trial Balance, Balance <br/>Sheet, Profit & Loss Statement
        </li>
        <li className="flex text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> Income Tax Returns
        </li>
      </ul>
      <button className="btn-primary text-white bg-black hover:bg-black hover:shadow-md active:bg-black focus:bg-black focus:border-white px-4 py-2 rounded-md font-bold mt-10 uppercase transition ease-in-out duration-100">
        Lets Start
      </button>
    </motion.div>
    
    <motion.div 
initial={{y:100, opacity:0}}
whileInView={{y:0, opacity:1}}
transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.4}, ease:"easeIn", duration:1}}
className="pricing-box bg-yellow-500 text-center shadow-md rounded-md p-6 m-2 min-w-sm max-w-md h-auto pt-5 pb-5">
    <h5 className="text-lg font-bold text-black uppercase">Starter</h5>
      <ul className="features-list list-none pl-0 mt-4">
        <li className="flex text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> Preparation of books of accounts
        </li>
        <li className="flex text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> Preparation of Trial Balance, Balance <br/>Sheet, Profit & Loss Statement
        </li>
        <li className="flex text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> GST Returns Income Tax Returns 
        </li>
      </ul>
      <button className="btn-primary text-white bg-black hover:bg-black hover:shadow-md active:bg-black focus:bg-black focus:border-white px-4 py-2 rounded-md font-bold mt-10 uppercase transition ease-in-out duration-100">
        Lets Start
      </button>
    </motion.div>
  
    <motion.div  
  initial={{y:100, opacity:0}}
  whileInView={{y:0, opacity:1}}
  transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.}, ease:"easeIn", duration:1}}
className="pricing-box bg-yellow-500 text-center shadow-md rounded-md p-6 m-2 min-w-sm max-w-md h-auto pt-5 pb-5">
    <h5 className="text-lg font-bold text-black uppercase">All In One</h5>
      <ul className="features-list list-none pl-0 mt-4">
        <li className="flex text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> Preparation of books of accounts
        </li>
        <li className="flex text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> Preparation of Trial Balance, Balance <br/>Sheet, Profit & Loss Statement
        </li>
        <li className="flex text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> GST Returns Income Tax Returns <br/>ROC Compliances
        </li>
      </ul>
      <button className="btn-primary text-white bg-black hover:bg-black hover:shadow-md active:bg-black focus:bg-black focus:border-white px-4 py-2 rounded-md font-bold mb-4 uppercase transition ease-in-out duration-100">
       Lets Start
      </button>
    </motion.div>
</motion.div>

</section>
</div>
{/* --------------------------------------COMPANY'S VISION----------------------------------------- */}
<motion.section
initial={{x:-100, opacity:0}}
whileInView={{x:0, opacity:1}}
transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
 className='container max-w-full mx-0 lg:px-24 xl:px-40 pt-10 md:my-20 scroll-smooth md:flex overflow-hidden'>
    <div className=''>
    <h3 className='text-xl md:text-4xl font-semibold text-yellow-500'>COMPANY'S VISION</h3>
    <h1 className='text-2xl md:text-3xl font-bold text-black leading-tight'>Your Tax Success Is Our Top Priority</h1>
    <p className='text-xl text-justify md:pr-20 xl:md:pr-32 md:pt-4'>
    At our firm, our vision is to empower individuals and businesses to achieve financial prosperity and secure their long-term success. We strive to be the trusted advisors that our clients rely on for expert guidance, innovative solutions, and personalized service.
    </p>
    </div>

    <div className='md:float-right md:pt-10 md:flex md:space-x-3 py-3'>
    <div className='cursor-pointer sm:mb-2 md:mb-32 bg-gradient-to-r from-yellow-400 to-yellow-700 shadow-md rounded-sm md:hover:-translate-y-4 bg-black ease-in duration-300 hover:scale-105'>
    <h1 className='text-xl font-semibold text-black text-center leading-tight pt-4 px-2 md:px-3'> Empower Our Clients With The Knowledge</h1>
    <p className='text-sm text-justify py-2 px-3 md:px-5'>
    We empower clients with knowledge for confident financial decisions, unlocking their potential for success and independence.
    </p>
    </div>
    <div className='cursor-pointer md:float-right bg-gradient-to-r from-yellow-400 to-yellow-700 shadow-md md:mt-32 rounded-sm md:hover:-translate-y-4 bg-black ease-in duration-300 hover:scale-105'>
    <h1 className='text-xl font-semibold text-black text-center leading-tight pt-4 px-2 md:px-3'> Tax Advisor Firm For Businesses Of All Sizes</h1>
    <p className='text-sm text-justify py-2 px-3 md:px-5'>
    Trusted tax advisors for businesses of all sizes, providing  expert guidance and solutions for optimal tax management and compliance.
    </p>
    </div>
    </div>
</motion.section>
{/* </Fade> */}

   {/* -----------------------------------------------Subscribe to our newsletter------------------------------------------------ */}
   <div class="container bg-black mt-20 pt-10 max-w-full scroll-smooth">
  <div class="md:flex justify-between items-center lg:px-28 py-10 ">
    <motion.div
     initial={{x:-100, opacity:0}}
     whileInView={{x:0, opacity:1}}
     transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
     >
      <h1 class="md:text-4xl text-2xl text-yellow-500 font-bold sm:text-center md:text-left leading-tight overflow-hidden">Subscribe to us!</h1>
      <p class="text-md text-white my-2 overflow-hidden">Subscribe to our newsletter for exclusive updates and offers.</p>
    </motion.div>

    <form ref={form} onSubmit={sendEmail}>
      <motion.div  initial={{x:-100, opacity:0}}
      whileInView={{x:0, opacity:1}}
      transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
      class="flex overflow-hidden">
           <input 
           type="email" 
           placeholder="Enter your email" 
           name="user_email" 
           required 
           class="rounded-md px-4 py-2 w-full mr-2 focus:outline-none focus:ring-1 focus:ring-yellow-500" />
           <input 
           type="submit" 
           value="Subscribe" 
           class="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-md shadow-sm"/>
      </motion.div>
    </form>
  </div>

    {/* ----------------------------------------------------------Contact------------------------------------------------------- */}
<div>
  <h1 className="text-2xl text-yellow-500 font-bold text-center">Contact</h1>
  <motion.form method='POST' 
   initial={{y:-100, opacity:0}}
   whileInView={{y:0, opacity:1}}
   transition={{delay:0.10, y:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
    className="text-xl space-y-1 rounded-md mx-3 md:pt-10 pt-2 text-center sm:px-32 md:px-52 lg:px-[300px] xl:px-[500px]"> 
    <label className='text-white'>Name</label> <br/>
    <div className='flex'>
    <i class="fa fa-user icon text-black p-2 rounded-l-md bg-yellow-500"></i>
    <input 
    type='text' 
    name='Name' 
    placeholder='Enter your Name' 
    value={user.Name} 
    className='w-full p-1 rounded-r-md' 
    required
    onChange={data} 
    />
    </div>
    <br/>

    <label className='text-white'>Phone Number</label><br/>
    <div className='flex'>
    <i class="fa fa-phone icontext-black p-2 rounded-l-md bg-yellow-500"></i>
    <input 
    type='tel' 
    name='Number'
    value={user.Number}  
    placeholder="Enter Phone Number" 
    maxLength={10}
    className='w-full p-1 rounded-r-md' 
    required
    onChange={data} 
    />
    </div>
    <br/>

    <label className='text-white'>Message</label><br/>
    <div className='flex'>
    <i class="fa fa-edit icon text-black p-2 rounded-l-md bg-yellow-500"></i>
    <textarea 
    type='text' 
    name='Message'
    value={user.Message} 
    className='w-full p-1 rounded-r-md' 
    placeholder='Enter your Message' 
    required
    onChange={data} 
    >
    </textarea>
    </div>
    <button 
    onClick={getdata}  
    type="submit" 
    class="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-3 mt-4 rounded-md shadow-sm">
    SUBMIT
    </button>
      <ToastContainer
  position="top-center"
  autoClose={4000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="colored"
  transition= {Flip}
  />
  </motion.form>
</div>

<div className='mt-10 text-center lg:px-[200px]'>
<h1 class="text-xl text-yellow-500">GET IN TOUCH</h1>
<motion.ul
 initial={{x:-100, opacity:0}}
 whileInView={{x:0, opacity:1}}
 transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
  class="list-none justify-center md:flex space-x-5 overflow-hidden">
     
        <li className='font-semibold text-white text-lg'><i class="fa fa-phone text-yellow-500"> </i> +91-9808030923</li> 
       <a href= "mailto: support@govyapar.com"><li className='font-semibold text-white text-lg'><i class="fa fa-envelope text-yellow-500"> </i> support@govyapar.com</li> </a>       

<ul
//  initial={{y:100, opacity:0}}
//  whileInView={{y:0, opacity:1}}
//  transition={{delay:0.10, y:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
  className='flex space-x-2 justify-center text-lg'>
        <a href='https://www.linkedin.com/company/govyapar/'><li><i class="fa fa-linkedin text-yellow-500 hover:font-bold"></i></li></a>
        {/* <li><i class="fa fa-twitter text-yellow-500 hover:font-bold"></i></li> */}
        <li><i class="fa fa-instagram text-yellow-500 hover:font-bold"></i></li>
        <li><i class="fa fa-facebook-f text-yellow-500 hover:font-bold"></i></li>
        <a href='https://www.youtube.com/@govyapar'><li><i class="fa fa-youtube text-yellow-500 hover:font-bold"></i></li></a>
</ul>
</motion.ul>
<div className='flex lg:px-36 px- pt-3 space-x-10 text-white cursor-pointer justify-center '>
<ul className='text-justify '>
  <li className='hover:text-yellow-500'><i class="fa-solid fa-arrow-right text-yellow-500 text-sm"></i> About Us</li>
  <Link to='/contact'> <li className='hover:text-yellow-500'><i class="fa-solid fa-arrow-right text-yellow-500 text-sm"></i> Contact Us</li></Link>
  <Link to='/career'><li className='hover:text-yellow-500'><i class="fa-solid fa-arrow-right text-yellow-500 text-sm"></i> Careers</li></Link>
  <Link to='/pricing'> <li className='hover:text-yellow-500'><i class="fa-solid fa-arrow-right text-yellow-500 text-sm"></i> Packages</li></Link>
  <Link to='/itrFiling'><li className='hover:text-yellow-500'><i class="fa-solid fa-arrow-right text-yellow-500 text-sm"></i> ITR Filing</li></Link>
</ul>
<ul className='text-justify'>
  <Link to='/gstFiling'><li className='hover:text-yellow-500'><i class="fa-solid fa-arrow-right text-yellow-500 text-sm"></i> GST Filing</li></Link>
  <Link to='/tax-planner'><li className='hover:text-yellow-500'><i class="fa-solid fa-arrow-right text-yellow-500 text-sm"></i> Tax Planner</li></Link>
  <Link to='/notice'><li className='hover:text-yellow-500'><i class="fa-solid fa-arrow-right text-yellow-500 text-sm"></i> Notices</li></Link>
  <Link to='/companyFormation'><li className='hover:text-yellow-500'><i class="fa-solid fa-arrow-right text-yellow-500 text-sm"></i> Company Formation</li></Link>
  <Link to='/consultation'><li className='hover:text-yellow-500'><i class="fa-solid fa-arrow-right text-yellow-500 text-sm"></i> Consultation</li></Link>
  </ul>

</div>
</div>
{/* <p className='border-dotted w-full  border-yellow-500 border-2'></p> */}

{/* ------------------------------------------------Footer Links------------------------------------------------- */}
<hr className='text-white w-full my-3'/>

{/* ---------------------------------------------Foooter------------------------------------------- */}
<footer className='text-white text-sm text-center mb-0 mt-2'>
  ©Copyright 2024. All Rights Reserved. Govyapar
</footer>

</div> 
  </>
  )
}
export default Home