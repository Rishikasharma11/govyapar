import React, { useRef, useState } from 'react'
import {motion} from "framer-motion";
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { ToastContainer, Flip, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TaxPlanner(){
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

 // --------------------------------------------contact---------------------------
 const[user, setUser] = useState(
   {
       Name: '', Number:'', Message:''
   }
 )
//  const [errorMsg, setErrorMsg] = useState("");
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
  //  setErrorMsg("Fill all fields");
   return;
 }
  //  setErrorMsg("");
   
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

     window.scrollTo(0,0);
  return(
    <>
   <div><a href='https://wa.me/919808030923'>
    <img src='WhatsappIcon.png' className='fixed w-[20%] md:w-[13%] lg:w-[10%] right-0 top-[520px] cursor-pointer z-10' alt=''/></a>
    </div>
    <motion.div
  initial={{x:100, opacity:0}}
  animate={{x:0, opacity:1}}
  transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1}}
  className="container pt-40 justify-center text-center mx-0  max-w-full scroll-smooth"> 
  <h1 className="text-4xl font-bold sm:text-7xl md:text-center text-center text-black pb-4 min-w-full">STRATEGIC TAX CONSULTING</h1>
  <h3 className="text-xl animate-bounce font-bold text-center md:text-center sm:text-4xl text-yellow-500">Trustworthy Tax Advice</h3>

  <form class="flex w-full md:py-4 pt-2 justify-center">
  <input 
  type="tel" 
placeholder="Enter Phone Number" 
    maxLength={10}
  name="tel"
  required 
  class="text-white rounded-md bg-black items-center px-4 py-2 md:w-[30%] xl:w-[20%] w-full mr-2 focus:outline-none focus:ring-1 focus:ring-yellow-500" />
  <button 
  type="submit" 
  class="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-md shadow-black-md text-sm hover:scale-105 duration-300 ease-in">Start Filing</button>
  </form>

</motion.div>
{/* ----------------------------------------Tax Planning Made Easy with GoVyapar’s Tax Planner----------------------------------------------------- */}
<motion.div 
initial={{x:-100, opacity:0}}
whileInView={{x:0, opacity:1}}
transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1}}
class='float-right max-w-full my-5 pb-3 xl:px-32 px-3 mx-0'>
<img src='Tax-Planner1.jpg' className='xl:w-[35%] md:w-[40%] px-20 md:px-0 xl:pl-48 md:pt-20 xl:pt-32 md:float-left' alt=''></img>
<h1 class="sm:text-xl md:text-3xl xl:text-5xl md:pt-20 text-yellow-500 font-bold lg:pr-32">Tax Planning Made Easy with Govyapar's Tax Planner</h1>
<ul className='text-md font-semibold text-black md:space-y-5 space-2 md:pt-20 pt-3'>
        <li className='style-none'><i class="fas fa-check-circle text-black md:text-xl"></i> Reduce your tax liability up to 26%</li>
        <li className='style-none'><i class="fas fa-check-circle text-black md:text-xl"></i> Generate in-depth tax report</li>
        <li className='style-none'><i class="fas fa-check-circle text-black md:text-xl"></i> Find tax saving investment opportunities</li>
        <li className='style-none'><i class="fas fa-check-circle text-black md:text-xl"></i> Plan taxes with a qualified expert</li>
        {/* <li><form class="w-full md:py-4 pt-2 mt-3 justify-center">
       <input type="tel" placeholder="Enter your Phone Number" name="tel" required class="text-white rounded-md bg-black items-center px-4 py-2 md:w- [20%] mr-2 focus:outline-none focus:ring-1 focus:ring-yellow-500" />
       <button type="submit" class="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-md shadow-black-md text-sm hover:scale-105 duration-300 ease-in">Start Planning</button>
     </form></li> */}
    </ul>
</motion.div>
    {/* ------------------------------Are you struggling with one of these questions? You definitely need Tax Planning!--------------------------- */}
    <h1 class="sm:text-xl md:text-2xl xl:text-4xl xl:px-60 pt-3 md:mt-20 text-black font-bold text-center">Are you struggling with one of these questions? You definitely need Tax Planning!</h1>
    <div className="xl:px-40 px-10 md:mt-10 mt-3 py-4 bg-gradient-to-r from-yellow-400 to-yellow-700 md:mx-20 xl:mx-60 rounded-md max-w-full">
    <ul className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-4">

    <li class="bg-gradient-to-r from-gray-200 to-gray-100 p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 bg-black ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl'>Appellate Notices</h1>
      <p className='text-sm'>Is there a way to minimise my tax liability as a professional or a business owner?</p>
    </li>

    <li class="bg-gradient-to-r from-gray-200 to-gray-100 p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 bg-black ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl'>Ex-Parte Orders</h1>
      <p className='text-sm'>What may be the consequences of the new tax regulations and laws on my status as a taxpayer?</p>
    </li>

    <li class="bg-gradient-to-r from-gray-200 to-gray-100 p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 bg-black ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl'>Seeking Rectification</h1>
      <p className='text-sm'>How to handle taxes from my foreign income and assets, and tax treaties between India and other countries?</p>
    </li>
    </ul>
    </div>
    {/* --------------------------------------Importance of Tax Planning- Why Should You Seek Advice from a Tax Planner-------------- */}
    <div class= 'max-w-full md:mt-20'>
    <div class='bg-black float-right w-full md:my-20 my-4 pb-3 xl:px-32 px-3 mx-0 text-justify'>
    <img src='Tax-Planner2.png' className='md:w-[45%] px-20 md:pt-20 md:px-0 md:float-right' alt=''></img>
    <motion.h1 
    initial={{x:-100, opacity:0}}
    whileInView={{x:0, opacity:1}}
    transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1}}
    class="sm:text-2xl md:text-3xl xl:text-4xl  md:pt-20 xl:pl-32 text-yellow-500 font-bold">Importance of Tax Planning- Why Should You Seek Advice from a Tax Planner</motion.h1>
    <motion.p 
    initial={{x:-100, opacity:0}}
    whileInView={{x:0, opacity:1}}
    transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1}}
    className='md:text-md text-sm text-white xl:pl-32 md:pt-3'>Whether you are struggling with these questions or having a smooth sail, tax planning is the smartest decision you can take as a taxpayer. It enables you to eliminate guesswork from the tax process and helps you to complete it more confidently. Having a seasoned income tax planner showing you the way is the best option to reduce your liability, prevent penalties, and deal with potential changes to the tax code. Here are a few good reasons to have an expert on board.</motion.p>
    <motion.ul 
    initial={{x:-100, opacity:0}}
    whileInView={{x:0, opacity:1}}
    transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1}}
    className='md:text-md text-sm font-semibold text-white xl:pl-32 md:space-y-5 space-2 md:pt-20 pt-3'>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500 md:text-xl"></i> Minimise tax liability by making the most of tax-saving opportunities like deductions, credits, exemptions, and more</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500 md:text-xl"></i> Maximise tax efficiency with tax-advantaged investment vehicles and strategies like tax-deferred accounts and retirement plans</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500 md:text-xl"></i> More than Rs. 50 lakh deposited in 'savings' bank account</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500 md:text-xl"></i> Manage your risks and avoid penalties and legal hassles by staying on top of compliance with individual and corporate tax planning</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500 md:text-xl"></i> Achieve your financial goals by saving taxes year after year and keeping track of the latest changes in tax laws and guidelines</li>
        {/* <li><form class="w-full md:py-4 pt-2 mt-2 justify-center">
       <input type="tel" placeholder="Enter your Phone Number" name="tel" required class="text-white rounded-md border-2 border-yellow-500 items-center px-4 py-2 md:w- [20%] mr-2 focus:outline-none focus:ring-1 focus:ring-yellow-500" />
       <button type="submit" class="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-md shadow-black-md text-sm hover:scale-105 duration-300 ease-in">Start Planning</button>
     </form></li> */}
    </motion.ul>
    </div>
    
    </div>

    {/* ---------------------------------------------Why Choose GoVyapar as Your Guide---------------------------------------------- */}
<div className="xl:px-40 px-10 py-4 max-w-full mt-2 md:pt-40 md:mt-32">
 <h1 class="md:text-3xl sm:text-xl xl:text-4xl  xl:px-40 pt-3 md:mt-10 text-center text-yellow-500 font-bold">Why Choose GoVyapar as Your Guide</h1>
  <img src='Tax-Planner4.jpg' className='md:w-[50%] xl:px-32 md:float-left' alt=''></img>
    <p className='text-md text-black xl:px-40 md:pt-6 lg:pt-32'>At GoVyapar, we offer reliable tax planning expertise with a few clicks.</p>
    <ol className='md:px-20  list-decimal font-semibold'>
      <li>Solution for all income types (Salaried, Business, Freelancers, Share traders, Futures and Option traders, and many more)</li>
      <li>Basic plan starts from only INR XXX</li>
      <li>Explore TaxSaver Pro and Advance plans for in-depth assistance</li>
      <li>Every potential tax-saving investment option in one report</li>
    </ol>
    </div>
{/* -----------------------------------------------Why Do You Hire A Tax Consultant?------------------------------------------------------ */}
<div className="md:py-16 xl:px-60 md:my-10 rounded-lg max-w-full">
  <h1 className="md:text-4xl text-xl font-bold text-black text-center pt-3 pb-10">Why Should You Hire A Tax Consultant?</h1>
<div className="why-govyapar-content grid grid-cols-1 md:grid md:grid-cols-3 md:grid-rows-1 gap-4 px-2 mx-2 md:mx-4 md:px-8">
    <motion.div initial={{y:-100, opacity:0}}
whileInView={{y:0, opacity:1}}
transition={{delay:0.10, y:{type:"spring", stiffness:60}, opacity:{duration:0.7}, ease:"easeIn", duration:1}}
className="flex bg-black flex-col p-2 items-center justify-center rounded-md">
      <span className="text-yellow-500 md:text-4xl text-xl md:mb-4">
        <i className="fas fa-power-off"></i> </span>
      <h4 className="md:text-3xl text-xl text-yellow-500 md:pb-4">Saves Time And Effort</h4>
      <p className="text-white text-justify md:px-5">It helps avoid the last-minute hassles of filing income taxes or making investments when the year-end draws nearer. Filing tax returns is time-consuming. An income tax consultant may not just help you with filing your returns correctly and advise you on how you can effectively manage your finances.</p>
    </motion.div>
    <motion.div initial={{y:-100, opacity:0}}
whileInView={{y:0, opacity:1}}
transition={{delay:0.11, y:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
className="flex bg-black p-2 flex-col items-center justify-center rounded-md">
      <span className="text-yellow-500 md:text-4xl text-xl md:mb-4">
        <i className="fas fa-people-carry"></i> </span>
      <h4 className="md:text-3xl text-lg text-yellow-500 md:pb-4 text-center">Helps Identify Your Tax Deductions</h4>
      <p className="text-white text-justify md:px-5">A tax advisor will help you identify the various tax-saving options available to you. You can know the right strategies to make smart investment decisions. A tax professional will review your previous returns, identify if any deductions were missed and amend them.</p>
    </motion.div>
    <motion.div initial={{y:-100, opacity:0}}
whileInView={{y:0, opacity:1}}
transition={{delay:0.12, y:{type:"spring", stiffness:60}, opacity:{duration:0.9}, ease:"easeIn", duration:1}}
className="flex bg-black p-2 flex-col items-center justify-center rounded-md">
      <span className="text-yellow-500 md:text-4xl text-xl md:mb-4">
        <i className="fas fa-lock"></i>
      </span>
      <h4 className="md:text-3xl text-xl text-yellow-500 md:pb-4">Resolve Tax Concerns</h4>
      <p className="text-white text-justify md:px-5">You may have many questions related to your taxes. Hiring a tax consultant can help you get answers to all your questions. You can approach them for tax-related advice and have all your doubts cleared. Moreover, they can keep your tax records.</p>
    </motion.div>
  </div>
  </div>
    {/* ------------------------------------------------------------TAX PLANNER-------------------------------------------------------------------- */}
<div className="container bg-gradient-to-r from-stone-50 to-yellow-300 max-w-full mt-10 mx-0 py-20 md:pt-40 xl:px-60">
<img src="Tax-Planner5.png" alt="Tax Planner" className="w-[65%] md:float-right md:w-[40%] ml-10"/>
  <div className="prose xl:mx-40 ">
    <motion.h2 initial={{x:-100, opacity:0}}
whileInView={{x:0, opacity:1}}
transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
className="md:text-3xl text-sm font-bold mb-4 text-yellow-500">Do You Need A Tax Consultant To Help You With Tax Planning?</motion.h2>

    <motion.p initial={{x:-100, opacity:0}}
whileInView={{x:0, opacity:1}}
transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}>
      <strong className="italic">Tax planning is an important but often ignored concept in India. It not only means availing deductions but also includes planning finances and investments in such a way that the tax burden is not high in the first place.</strong><br/><br/>
      However, just knowing which taxes to pay is not enough. Filing tax returns could be a very complex task for new taxpayers. Individuals might feel the need to take an expert's help while submitting their tax returns to save taxes appropriately. The ever-changing laws and policies regarding tax exemptions and deductions are also challenging, which makes it even more difficult for individual taxpayers to navigate the tax filing process.
    </motion.p>
  </div>
</div>

{/* -----------------------------------------------Why Do You Need A Tax Consultant?------------------------------------------------------ */}
<div class="md:py-20 mt-10 xl:px-80 max-w-full">
  <motion.div 
  initial={{x:-100, opacity:0}}
whileInView={{x:0, opacity:1}}
transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
class="text-center mb-2">
    <h2 class="md:text-3xl xl:px-40 text-xl font-bold text-black">Why Do You Need A Tax Consultant?</h2>
  </motion.div>
  <div class="prose text-yellow-500 text-center">
    <h3 class="xl:px-40 md:text-xl text-lg font-bold md:mb-4">Do You Need A Tax Consultant To Help You With Tax Planning?<br/></h3>
    <motion.ul initial={{x:-100, opacity:0}}
whileInView={{x:0, opacity:1}}
transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
class="pl-4 md:space-y-2">
   <div className='md:flex-col md:space-y-3 px-24 space-y-2 sm:px-16 lg:px-20 py-4'>

<ul className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-8">

  <li class="bg-transparent p-3 cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105 border-1">
      <img src="tax1.jpg" className='mx-auto xl:w-[50%] sm:w-[30%] md:w-[60%] lg:w-full' alt=''/>
      <h1 className='font-bold text-xl text-black'>Tax Saving Strategies</h1>
      </li>

      <li class="bg-transparent p-3 cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105 border-1">
      <img src="tax2.jpg" className='mx-auto xl:w-[50%] sm:w-[30%] md:w-[60%] lg:w-full' alt=''/>
      <h1 className='font-bold text-xl text-black'> Save time and effort</h1>
      </li>
  
       <li class="bg-transparent p-3 cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105 border-1">
       <img src="tax3.jpg" className='mx-auto xl:w-[50%] sm:w-[30%] md:w-[60%] lg:w-full' alt=''/>
       <h1 className='font-bold text-xl text-black'> Ensure Tax Compliance</h1>
       </li>
       </ul>
    </div> 
    </motion.ul>
  </div>
</div>
{/* ------------------------------------------------Pricing----------------------------------------- */}
<h1 class="lg:text-4xl md:text-3xl sm:text-xl lg:px-60 md:pt-20 text-yellow-500 font-bold text-center pt-5 max-w-full">PRICING</h1>
<div className="pricing-box-container grid grid-rows- md:grid-cols-4 md:grid-rows-1 xl:px-40 justify-center z-[-1]">
<motion.div initial={{y:100, opacity:0}}
whileInView={{y:0, opacity:1}}
transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
 className="pricing-box bg-yellow-500 text-center shadow-md rounded-md p-6 m-2 min-w-sm max-w-md h-auto pt-5 pb-20">
    <h5 className="text-lg font-bold text-black uppercase">TaxSaver Pro</h5>
      <p className="price text-4xl font-bold text-black">
        <sup className="text-base font-light text-black">₹</sup>
        1,699
        {/* <sub className="font-normal text-xl">/year</sub> */}
      </p>
      <p className="text-black py-2">Exclusive of Taxes</p>
      <ul className="features-list list-none pl-0 mt-4">
      <li className="text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>For salaried taxpayers
        </li>
        <li className="text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>Old v New tax regime: Which is best for you?
        </li>
        <li className="text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>Increase saving by salary restructuring
        </li>
        <li className="text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>Tax saving opportunities suited to your goals
        </li>
        <li className="text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>Bifurcation of HRA calculation
        </li>
      </ul>
      <Link to ="/contact"><button className="btn-primary text-white bg-black hover:bg-black hover:shadow-md active:bg-black focus:bg-black focus:border-white px-4 py-2 rounded-md font-bold mt-4 uppercase transition ease-in-out duration-100">
        Choose Plan
      </button></Link>
    </motion.div>
    
    <motion.div initial={{y:100, opacity:0}}
whileInView={{y:0, opacity:1}}
transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
 className="pricing-box bg-black text-center shadow-md rounded-md p-6 m-2 min-w-sm max-w-md h-auto pt-5 pb-20">
      <h5 className="text-lg font-bold text-white uppercase">TaxSaver Advance</h5>
      <p className="price text-4xl font-bold text-white">
        <sup className="text-base font-light text-white">₹</sup>
        2,599
        {/* <sub className="font-normal text-xl">/year</sub> */}
      </p>
      <p className="text-white py-2">Exclusive of Taxes</p>
      <ul className="features-list list-none pl-0 mt-4">
       <li className="text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i>For taxpayers with income other than salary
        </li>
        <li className="text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i>Sold a property? Get solutions against capital gains
        </li>
        <li className="text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i>Tax calculation and saving opportunities based on your tax slab
        </li>
        <li className="text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i>Tax loss harvesting solutions
        </li>
        <li className="text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i>Advance Tax calculation
        </li>
        <li className="text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i>Personalized tax saving options for business income
        </li>
        <li className="text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i>Bifurcation of HRA calculation
        </li>
      </ul>
      <Link to ="/contact"><button className="btn-primary text-white bg-yellow-500 hover:shadow-md px-4 py-2 rounded-md font-bold mt-4 uppercase transition ease-in-out duration-100">
        Choose Plan
      </button></Link>
    </motion.div>
  
  <motion.div initial={{y:100, opacity:0}}
whileInView={{y:0, opacity:1}}
transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
 className="pricing-box bg-yellow-500 text-center shadow-md rounded-md p-6 m-2 min-w-sm max-w-md h-auto pt-5 pb-20">
  <h5 className="text-lg font-bold text-black uppercase">Advance Tax calculation</h5>
      <p className="price text-4xl font-bold text-black">
        <sup className="text-base font-light text-black">₹</sup>
        899
        {/* <sub className="font-normal text-xl">/year</sub> */}
      </p>
      <p className="text-black py-2">Exclusive of Taxes</p>
      <ul className="features-list list-none pl-0 mt-4">
      <li className="text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>Advance tax calculation based on source of income
        </li>
        <li className="text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>Quarterly review
        </li>
        <li className="text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>Assistance with Challan payment
        </li>
      </ul>
      <Link to ="/contact"><button className="btn-primary text-white bg-black hover:bg-black hover:shadow-md active:bg-black focus:bg-black focus:border-white px-4 py-2 rounded-md font-bold mt-4 uppercase transition ease-in-out duration-100">
        Choose Plan
      </button></Link>
</motion.div>

    <motion.div initial={{y:100, opacity:0}}
whileInView={{y:0, opacity:1}}
transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
 className="pricing-box bg-black text-center shadow-md rounded-md p-6 m-2 min-w-sm max-w-md h-auto pt-5 pb-20">
    <h5 className="text-lg font-bold text-white uppercase">TaxSaver NRI</h5>
      <p className="price text-4xl font-bold text-white">
        <sup className="text-base font-light text-white">₹</sup>
        4,199
        {/* <sub className="font-normal text-xl">/year</sub> */}
      </p>
      <p className="text-white py-2">Exclusive of Taxes</p>
      <ul className="features-list list-none pl-0 mt-4">
      <li className="text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i>Guidance for taxation on foreign investments
        </li>
        <li className="text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i>Tax implications on NRO/NRE account
        </li>
        <li className="text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i>Applicability of  DTAA provisions
        </li>
        <li className="text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i>Optimizing tax strategies for managing RSU/ESOP including advance tax calculations on sale
        </li>
        <li className="text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i>Understanding residential status as per Indian law
        </li>
      </ul>
      <Link to ="/contact"><button className="btn-primary text-white bg-yellow-500 hover:shadow-md px-4 py-2 rounded-md font-bold mt-4 uppercase transition ease-in-out duration-100">
        Choose Plan
      </button></Link>
    </motion.div>
</div>

<div className='xl:px-60 max-w-full mx-0 md:pt-20 md:px-4 overflow-x:auto'>
           <h1 className="text-center text-black font-medium pt-20 pb-2 text-xl md:text-5xl text-bold">How Can You Save Taxes with Savvy Tax Planning</h1>
           <h1 className="text-center text-black font-medium pb-2 md:text-2xl text-md text-bold">Best Tax Saving Instruments</h1>
        <table className="company-formation-table max-w-full mx-0 hidden md:block">
  <tr>
      <th>Section</th>
      <th>Deduction for FY 2022-23(AY 2023-24)</th>
      <th>Maximum limit</th>
      <th>Who can invest?</th>
    </tr>
    <tr>
      <td>Section 80CC</td>
      <td>Pension Funds</td>
      <td>Upto Rs 1,50,000</td>
      <td>Individuals</td>
    </tr>
    <tr>
      <td>Section 80CCD(1)</td>
      <td>Atal Pension Yojana and National Pension Scheme Contribution</td>
      <td>Upto Rs 1,50,000</td>
      <td>Upto Rs 1,50,000</td>
    </tr>
  <tr>
    <td>Section 80CCD(1B)</td>
    <td>Atal Pension Yojana and National Pension Scheme Contribution (additional deduction)</td>
    <td>Upto Rs 50,000</td>
    <td>Individuals</td>
  </tr>
  <tr>
    <td>Section 80D</td>
    <td>Medical Insurance Premiums, Medical Expenditures, and preventive health checkups</td>
    <td>Upto Rs 1,00,000</td>
    <td>Individual Or HUF</td>
</tr>
<tr>
    <td>Section 80DD</td>
    <td>Medical Treatment of a Dependent with Disability</td>
    <td>Normal Disability (at least 40% or more but less than 80%): Rs 75000/- Severe Disability (at least 80% or more) : Rs 125000/-</td>
    <td>Individual Or HUF</td>
 </tr>
 <tr>
    <td>Section 80DDB</td>
    <td>Medical expenditure for treatment of Specified Diseases</td>
    <td>Senior Citizens: Upto Rs 1,00,000 Others: Up to Rs 40,000</td>
    <td>Individual Or HUF</td>
</tr>
<tr>
    <td>Section 80E</td>
    <td>Interest paid on Loan taken for Higher Education</td>
    <td>No limit up to 8 assessment years</td>
    <td>Individuals</td>
</tr>
<tr>
    <td>Section 80EE</td>
    <td>Interest paid on Housing Loan</td>
    <td>Upto Rs 50,000 subject to some conditions</td>
    <td>Individuals</td>
</tr>
<tr>
    <td>Section 80EEA</td>
    <td>Interest paid on Housing Loan</td>
    <td>Upto Rs 1,50,000/- subject to some conditions</td>
    <td>Individuals</td>
</tr>
<tr>
    <td>Section 80EEB</td>
    <td>Interest paid on Electric Vehicle Loan</td>
    <td>Upto Rs 1,50,000/- subject to some conditions</td>
    <td>Individuals</td>
</tr>
<tr>
    <td>Section 80G</td>
    <td>Donation to specified funds/institutions. Institutions</td>
    <td>100% or 50% of the Donated amount or Qualifying limit, Allowed donations in cash up to Rs.2000/-</td>
    <td>All assessees</td>
</tr>
<tr>
    <td>Section 80GG</td>
    <td>Income Tax Deduction for House Rent Paid</td>
    <td>Rs. 5000 per month 25% of Adjusted Total Income Rent paid - 10% of Adjusted Total Income - whichever is lower</td>
    <td>Individuals</td>
</tr>
<tr>
    <td>Section 80GGA</td>
    <td>Donation to Scientific Research & Rural Development</td>
    <td>100% of the amount donated. Allowed donations in cash up to Rs.10,000/-</td>
    <td>All assessees except those who have an income (or loss) from a business and/or a profession</td>
</tr>
<tr>
    <td>Section 80GGB</td>
    <td>Contribution to Political Parties</td>
    <td>100% of the amount contributed No deduction is available for contributions made in cash</td>
    <td>Companies</td>
</tr>
<tr>
    <td>Section 80GGC</td>
    <td>Individuals on contribution to Political Parties</td>
    <td>100% of the amount contributed No deduction is available for contributions made in cash</td>
    <td>Individual, HUF, AOP, BOI, Firm</td>
</tr>
<tr>
    <td>Section 80QQB</td>
    <td>Royalty Income of Authors</td>
    <td>Rs.3,00,000/- Or Specified Income - whichever is lower</td>
    <td>Individuals (Indian citizen or foreign citizen being resident in India)</td>
</tr>
<tr>
    <td>Section 80RRB</td>
    <td>Royalty on Patents</td>
    <td>Individuals (Indian citizen or foreign citizen being resident in India)</td>
    <td>Individuals (Indian citizen or foreign citizen being resident in India)</td>
</tr>
<tr>
    <td>Section 80TTA</td>
    <td>Interest earned on Savings Accounts</td>
    <td>Upto Rs. 10,000</td>
    <td>Individual Or HUF (except senior citizen)</td>
</tr>
<tr>
    <td>Section 80TTB</td>
    <td>Interest Income earned on deposits(Savings/ FDs)</td>
    <td>Upto Rs. 50,000</td>
    <td>Individual over 60</td>
</tr>
<tr>
    <td>Section 80U</td>
    <td>Disabled Individuals</td>
    <td>Normal Disability: Rs. 75,000/- Severe Disability: Rs. 1,25,000/-</td>
    <td>Individuals</td>
</tr>

</table>

<table className="max-w-full mx-0 block md:hidden">
  {/* ---------------------------------Section 80CC---------------------------- */}
  <tr>
  <td className='font-bold'>Section</td>
  <td>Section 80CC</td>
  </tr>

  <tr>
  <td className='font-bold'>Deduction for FY 2022-23(AY 2023-24)</td>
  <td>Pension Funds</td>
  </tr>

  <tr>
  <td className='font-bold'>Maximum limit</td>
  <td>Upto Rs 1,50,000</td>
  </tr>

  <tr>
  <td className='font-bold'>Who can invest?</td>
  <td>Individuals</td>
  </tr>
  <p className='w-full  border-black border-1'></p>
  <p className='w-full  border-black border-1 mt-1'></p>

  {/* ---------------------------------------------Section 80CCD(1)------------------------------ */}
  <tr>
  <td className='font-bold'>Section</td>
  <td>Section 80CCD(1)</td>
  </tr>

  <tr>
  <td className='font-bold'>Deduction for FY 2022-23(AY 2023-24)</td>
  <td>Atal Pension Yojana and National Pension Scheme Contribution</td>
  </tr>

  <tr>
  <td className='font-bold'>Maximum limit</td>
  <td>Upto Rs 1,50,000</td>
  </tr>

  <tr>
  <td className='font-bold'>Who can invest?</td>
  <td>Upto Rs 1,50,000</td>
  </tr>
  <p className='w-full  border-black border-1'></p>
  <p className='w-full  border-black border-1 mt-1'></p>

   {/* ---------------------------------------------Section 80CCD(1B)------------------------------ */}
   <tr>
  <td className='font-bold'>Section</td>
  <td>Section 80CCD(1B)</td>
  </tr>

  <tr>
  <td className='font-bold'>Deduction for FY 2022-23(AY 2023-24)</td>
  <td>Atal Pension Yojana and National Pension Scheme Contribution (additional deduction)</td>
  </tr>

  <tr>
  <td className='font-bold'>Maximum limit</td>
  <td>Upto Rs 50,000</td>
  </tr>

  <tr>
  <td className='font-bold'>Who can invest?</td>
  <td>Individuals</td>
  </tr>
  <p className='w-full  border-black border-1'></p>
  <p className='w-full  border-black border-1 mt-1'></p>

   {/* ---------------------------------------------Section 80D------------------------------ */}
   <tr>
  <td className='font-bold'>Section</td>
  <td>Section 80D</td>
  </tr>

  <tr>
  <td className='font-bold'>Deduction for FY 2022-23(AY 2023-24)</td>
  <td>Medical Insurance Premiums, Medical Expenditures, and preventive health checkups</td>
  </tr>

  <tr>
  <td className='font-bold'>Maximum limit</td>
  <td>Upto Rs 1,00,000</td>
  </tr>

  <tr>
  <td className='font-bold'>Who can invest?</td>
  <td>Individual Or HUF</td>
  </tr>
  <p className='w-full  border-black border-1'></p>
  <p className='w-full  border-black border-1 mt-1'></p>

   {/* ---------------------------------------------Section 80DD------------------------------ */}
   <tr>
  <td className='font-bold'>Section</td>
  <td>Section 80DD</td>
  </tr>

  <tr>
  <td className='font-bold'>Deduction for FY 2022-23(AY 2023-24)</td>
  <td>Medical Treatment of a Dependent with Disability</td>
  </tr>

  <tr>
  <td className='font-bold'>Maximum limit</td>
  <td>Normal Disability (at least 40% or more but less than 80%): Rs 75000/- Severe Disability (at least 80% or more) : Rs 125000/-</td>
  </tr>

  <tr>
  <td className='font-bold'>Who can invest?</td>
  <td>Individual Or HUF</td>
  </tr>
  <p className='w-full  border-black border-1'></p>
  <p className='w-full  border-black border-1 mt-1'></p>

  {/* ---------------------------------------------Section 80DDB------------------------------ */}
  <tr>
  <td className='font-bold'>Section</td>
  <td>Section 80DDB</td>
  </tr>

  <tr>
  <td className='font-bold'>Deduction for FY 2022-23(AY 2023-24)</td>
  <td>Medical expenditure for treatment of Specified Diseases</td>
  </tr>

  <tr>
  <td className='font-bold'>Maximum limit</td>
  <td>Senior Citizens: Upto Rs 1,00,000 Others: Up to Rs 40,000</td>
  </tr>

  <tr>
  <td className='font-bold'>Who can invest?</td>
  <td>Individual Or HUF</td>
  </tr>
  <p className='w-full  border-black border-1'></p>
  <p className='w-full  border-black border-1 mt-1'></p>

  {/* ---------------------------------------------Section 80E------------------------------ */}
  <tr>
  <td className='font-bold'>Section</td>
  <td>Section 80E</td>
  </tr>

  <tr>
  <td className='font-bold'>Deduction for FY 2022-23(AY 2023-24)</td>
  <td>Interest paid on Loan taken for Higher Education</td>
  </tr>

  <tr>
  <td className='font-bold'>Maximum limit</td>
  <td>No limit up to 8 assessment years</td>
  </tr>

  <tr>
  <td className='font-bold'>Who can invest?</td>
  <td>Individual</td>
  </tr>
  <p className='w-full  border-black border-1'></p>
  <p className='w-full  border-black border-1 mt-1'></p>

  {/* ---------------------------------------------Section 80EE------------------------------ */}
  <tr>
  <td className='font-bold'>Section</td>
  <td>Section 80EE</td>
  </tr>

  <tr>
  <td className='font-bold'>Deduction for FY 2022-23(AY 2023-24)</td>
  <td>Interest paid on Housing Loan</td>
  </tr>

  <tr>
  <td className='font-bold'>Maximum limit</td>
  <td>Upto Rs 50,000 subject to some conditions</td>
  </tr>

  <tr>
  <td className='font-bold'>Who can invest?</td>
  <td>Individual</td>
  </tr>
  <p className='w-full  border-black border-1'></p>
  <p className='w-full  border-black border-1 mt-1'></p>

   {/* ---------------------------------------------Section 80EEA------------------------------ */}
   <tr>
  <td className='font-bold'>Section</td>
  <td>Section 80EEA</td>
  </tr>

  <tr>
  <td className='font-bold'>Deduction for FY 2022-23(AY 2023-24)</td>
  <td>Interest paid on Housing Loan</td>
  </tr>

  <tr>
  <td className='font-bold'>Maximum limit</td>
  <td>Upto Rs 1,50,000/- subject to some conditions</td>
  </tr>

  <tr>
  <td className='font-bold'>Who can invest?</td>
  <td>Individual</td>
  </tr>
  <p className='w-full  border-black border-1'></p>
  <p className='w-full  border-black border-1 mt-1'></p>

   {/* ---------------------------------------------Section 80EEB------------------------------ */}
   <tr>
  <td className='font-bold'>Section</td>
  <td>Section 80EEB</td>
  </tr>

  <tr>
  <td className='font-bold'>Deduction for FY 2022-23(AY 2023-24)</td>
  <td>Interest paid on Electric Vehicle Loan</td>
  </tr>

  <tr>
  <td className='font-bold'>Maximum limit</td>
  <td>Upto Rs 1,50,000/- subject to some conditions</td>
  </tr>

  <tr>
  <td className='font-bold'>Who can invest?</td>
  <td>Individual</td>
  </tr>
  <p className='w-full  border-black border-1'></p>
  <p className='w-full  border-black border-1 mt-1'></p>

   {/* ---------------------------------------------Section 80G------------------------------ */}
   <tr>
  <td className='font-bold'>Section</td>
  <td>Section 80G</td>
  </tr>

  <tr>
  <td className='font-bold'>Deduction for FY 2022-23(AY 2023-24)</td>
  <td>Donation to specified funds/institutions. Institutions</td>
  </tr>

  <tr>
  <td className='font-bold'>Maximum limit</td>
  <td>100% or 50% of the Donated amount or Qualifying limit, Allowed donations in cash up to Rs.2000/-</td>
  </tr>

  <tr>
  <td className='font-bold'>Who can invest?</td>
  <td>All assessees</td>
  </tr>
  <p className='w-full  border-black border-1'></p>
  <p className='w-full  border-black border-1 mt-1'></p>

   {/* ---------------------------------------------Section 80GG------------------------------ */}
   <tr>
  <td className='font-bold'>Section</td>
  <td>Section 80GG</td>
  </tr>

  <tr>
  <td className='font-bold'>Deduction for FY 2022-23(AY 2023-24)</td>
  <td>Income Tax Deduction for House Rent Paid</td>
  </tr>

  <tr>
  <td className='font-bold'>Maximum limit</td>
  <td>Rs. 5000 per month 25% of Adjusted Total Income Rent paid - 10% of Adjusted Total Income - whichever is lower</td>
  </tr>

  <tr>
  <td className='font-bold'>Who can invest?</td>
  <td>Individuals</td>
  </tr>
  <p className='w-full  border-black border-1'></p>
  <p className='w-full  border-black border-1 mt-1'></p>

  {/* ---------------------------------------------Section 80GGA------------------------------ */}
  <tr>
  <td className='font-bold'>Section</td>
  <td>Section 80GGA</td>
  </tr>

  <tr>
  <td className='font-bold'>Deduction for FY 2022-23(AY 2023-24)</td>
  <td>Donation to Scientific Research & Rural Development</td>
  </tr>

  <tr>
  <td className='font-bold'>Maximum limit</td>
  <td>100% of the amount donated. Allowed donations in cash up to Rs.10,000/-</td>
  </tr>

  <tr>
  <td className='font-bold'>Who can invest?</td>
  <td>All assessees except those who have an income (or loss) from a business and/or a profession</td>
  </tr>
  <p className='w-full  border-black border-1'></p>
  <p className='w-full  border-black border-1 mt-1'></p>

   {/* ---------------------------------------------Section 80GGB------------------------------ */}
   <tr>
  <td className='font-bold'>Section</td>
  <td>Section 80GGB</td>
  </tr>

  <tr>
  <td className='font-bold'>Deduction for FY 2022-23(AY 2023-24)</td>
  <td>Contribution to Political Parties</td>
  </tr>

  <tr>
  <td className='font-bold'>Maximum limit</td>
  <td>100% of the amount contributed No deduction is available for contributions made in cash</td>
  </tr>

  <tr>
  <td className='font-bold'>Who can invest?</td>
  <td>Companies</td>
  </tr>
  <p className='w-full  border-black border-1'></p>
  <p className='w-full  border-black border-1 mt-1'></p>

   {/* ---------------------------------------------Section 80GGC------------------------------ */}
   <tr>
  <td className='font-bold'>Section</td>
  <td>Section 80GGC</td>
  </tr>

  <tr>
  <td className='font-bold'>Deduction for FY 2022-23(AY 2023-24)</td>
  <td>Individuals on contribution to Political Parties</td>
  </tr>

  <tr>
  <td className='font-bold'>Maximum limit</td>
  <td>100% of the amount contributed No deduction is available for contributions made in cash</td>
  </tr>

  <tr>
  <td className='font-bold'>Who can invest?</td>
  <td>Individual, HUF, AOP, BOI, Firm</td>
  </tr>
  <p className='w-full  border-black border-1'></p>
  <p className='w-full  border-black border-1 mt-1'></p>

   {/* ---------------------------------------------Section 80RRB------------------------------ */}
   <tr>
  <td className='font-bold'>Section</td>
  <td>Section 80RRB</td>
  </tr>

  <tr>
  <td className='font-bold'>Deduction for FY 2022-23(AY 2023-24)</td>
  <td>Royalty on Patents</td>
  </tr>

  <tr>
  <td className='font-bold'>Maximum limit</td>
  <td>Individuals (Indian citizen or foreign citizen being resident in India)</td>
  </tr>

  <tr>
  <td className='font-bold'>Who can invest?</td>
  <td>Individuals (Indian citizen or foreign citizen being resident in India)</td>
  </tr>
  <p className='w-full  border-black border-1'></p>
  <p className='w-full  border-black border-1 mt-1'></p>

   {/* ---------------------------------------------Section 80TTA------------------------------ */}
   <tr>
  <td className='font-bold'>Section</td>
  <td>Section 80TTA</td>
  </tr>

  <tr>
  <td className='font-bold'>Deduction for FY 2022-23(AY 2023-24)</td>
  <td>Interest earned on Savings Accounts</td>
  </tr>

  <tr>
  <td className='font-bold'>Maximum limit</td>
  <td>Upto Rs. 10,000</td>
  </tr>

  <tr>
  <td className='font-bold'>Who can invest?</td>
  <td>Individual Or HUF (except senior citizen)</td>
  </tr>
  <p className='w-full  border-black border-1'></p>
  <p className='w-full  border-black border-1 mt-1'></p>

    {/* ---------------------------------------------Section 80TTB------------------------------ */}
    <tr>
  <td className='font-bold'>Section</td>
  <td>Section 80TTB</td>
  </tr>

  <tr>
  <td className='font-bold'>Deduction for FY 2022-23(AY 2023-24)</td>
  <td>Interest Income earned on deposits(Savings/ FDs)</td>
  </tr>

  <tr>
  <td className='font-bold'>Maximum limit</td>
  <td>Upto Rs. 50,000</td>
  </tr>

  <tr>
  <td className='font-bold'>Who can invest?</td>
  <td>Individual over 60</td>
  </tr>
  <p className='w-full  border-black border-1'></p>
  <p className='w-full  border-black border-1 mt-1'></p>

    {/* ---------------------------------------------Section 80U------------------------------ */}
    <tr>
  <td className='font-bold'>Section</td>
  <td>Section 80U</td>
  </tr>

  <tr>
  <td className='font-bold'>Deduction for FY 2022-23(AY 2023-24)</td>
  <td>Disabled Individuals</td>
  </tr>

  <tr>
  <td className='font-bold'>Maximum limit</td>
  <td>Normal Disability: Rs. 75,000/- Severe Disability: Rs. 1,25,000/-</td>
  </tr>

  <tr>
  <td className='font-bold'>Who can invest?</td>
  <td>Individuals</td>
  </tr>
  <p className='w-full  border-black border-1'></p>
  <p className='w-full  border-black border-1 mt-1'></p>

</table>
</div>

{/* ---------------------------------------------------FAQS------------------------------------------------------- */}

<section class=" text-black py-32 min-h-screen">
  <div class="container flex flex-col justify-center p-4 mx-auto md:p-8">
    <h2 class="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">Frequently Asked Questions</h2>
    <div class="flex flex-col divide-y sm:px-8 lg:px-20 xl:px-32 divide-yellow-600">
      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">Who needs tax planning?</summary>
        <div class="px-4 pb-4 text-justify">
          <p>Tax planning benefits everyone, from salaried professionals to business owners and large corporations. Anyone who wants to reduce their tax liability and save money can invest in it.</p>
        </div>
      </details>
      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">When is the apt time to start tax planning?</summary>
        <div class="px-4 pb-4 text-justify">
          <p>Tax planning should start at the beginning of a financial year, as it enables individuals and businesses to settle their financial affairs and take advantage of the best tax-saving opportunities. However, you can still benefit from it at any time during the year.</p>
        </div>
      </details>
      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">I know nothing about taxes; how can I start tax planning?</summary>
        <div class="px-4 pb-4 text-justify">
          <p>The best way to do it is by working with a seasoned tax planner who understands your financial situation and offers personalised advice.</p>
        </div>
      </details>
      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">WHow can you save tax in India?</summary>
        <div class="px-4 pb-4">
          <p>Fortunately, there are several ways to save tax in India. You can claim tax deductions, invest in tax-saving instruments, and get legitimate credits. A tax planner can help you use these methods to get the lowest tax bills.</p>
        </div>
      </details>
      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">Why should I bother with Tax Planning?</summary>
        <div class="px-4 pb-4">
          <p>Tax planning is crucial for optimizing your financial situation and reducing your tax burden. By strategically managing your finances, you can take advantage of various income tax rules and provisions to maximize your savings. Effective tax planning ensures that you make the most of available tax-saving options, leading to increased financial efficiency and long-term wealth accumulation.</p>
        </div>
      </details>
      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">Apart from 80C, what other ways can I save on taxes?</summary>
        <div class="px-4 pb-4">
          <p>Beyond Section 80C, there are several avenues for tax savings. You can consider:
          <ul className='list-disc text-justify'>
            <li>Claiming tax-deductible expenses such as insurance premiums, tuition fees for children, rent payments, home loan/stamp duty payments, interest on home loans, and medical expenses for dependent family members.</li>
            <li>Exploring investment options like the National Pension Scheme (NPS) to optimize your income structure and minimize taxable income.</li>
            </ul>
            Diversifying your tax-saving investments across various asset classes and leveraging a mix of deductions and exemptions is key to comprehensive tax planning.
          </p>
        </div>
      </details>
      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">What are some common mistakes people make when trying to save on taxes?</summary>
        <div class="px-4 pb-4">
          <p>Several common mistakes can hinder effective tax planning:
          <ul className='list-disc text-justify'>
            <li>CRelying Solely on Tax-saving Mutual Funds: While these are popular, limiting oneself to these funds may not optimize tax savings. Diversifying across different tax-saving instruments is advisable.</li>
            <li>Procrastinating Investments: Delaying tax-saving investments until the last quarter can lead to hasty decisions. It's better to plan investments strategically throughout the year.</li>
            <li>Lack of Diversification: Placing all tax-saving funds into a single asset class is risky. Diversification helps manage risks and potentially enhances returns.</li>
            </ul>
          </p>
        </div>
      </details>
    </div>
  </div>
</section>


   {/* -----------------------------------------------Subscribe to our newsletter------------------------------------------------ */}
   <div class="container bg-black mt-20 pt-10 max-w-full scroll-smooth">
  <div class="md:flex justify-between items-center lg:px-28 py-10 ">
    <motion.div
     initial={{x:-100, opacity:0}}
     whileInView={{x:0, opacity:1}}
     transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
     >
      <h1 class="md:text-4xl text-2xl text-yellow-500 font-bold sm:text-center md:text-left leading-tight">Subscribe to us!</h1>
      <p class="text-md text-white my-2">Subscribe to our newsletter for exclusive updates and offers.</p>
    </motion.div>

    <form ref={form} onSubmit={sendEmail}>
      <motion.div  initial={{x:-100, opacity:0}}
      whileInView={{x:0, opacity:1}}
      transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
      class="flex">
        <input type="email" placeholder="Enter your email" name="user_email" required class="rounded-md px-4 py-2 w-full mr-2 focus:outline-none focus:ring-1 focus:ring-yellow-500" />
        <input type="submit" value="Subscribe" class="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-md shadow-sm"/>
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
  class="list-none justify-center md:flex space-x-5">
     
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
  <Link to=''><li className='hover:text-yellow-500'><i class="fa-solid fa-arrow-right text-yellow-500 text-sm"></i> About Us</li></Link>
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
export default TaxPlanner