// import 'firebase/firestore';
import React, { useState } from 'react';
import { BsFillShieldLockFill, BsTelephoneFill} from "react-icons/bs";
import { CgSpinner} from 'react-icons/cg'
import OtpInput from 'otp-input-react';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber} from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel,} from "@material-tailwind/react";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Model from 'react-modal';
import {easeIn, motion} from "framer-motion";



function Service(){
 
    const [otp, setOtp] = useState("");
    const [ph, setPh] = useState("");
    const [loading, setLoading] = useState(false);
    const [showOTP, setShowOTP] = useState(false);
    const [user, setUser] = useState(null);
    // const[visible, setVisible] = useState(false);

    function onCaptchVerify() {
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(
          auth, "recaptcha-container",
          {
            size: "invisible",
            callback: (response) => {
              onSignup();
            },
            "expired-callback": () => {},
          },
         
        );
      }
    }
  
  
  function onSignup() {
    setLoading(true);
    onCaptchVerify();
  
    const appVerifier = window.recaptchaVerifier;
  
    const formatPh = "+" + ph;
  
    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }
  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }
 
  return(
        // <!-------------------------------------------------------------------navbar---------------------------------------------------------> 
        <>
 
 {/* <!-----------------------------------------------------------Heading Services-------------------------------------  --> */}
<div className="font-bold md:text-7xl text-4xl  pt-20 text-black">
    <h1 className='text-center mt-10'>SERVICES</h1>
</div>
 {/* <!---------------------------------------------------Services(Consultation, Pricing, Tax-planner)---------------------------------  --> */}
<section className="services-section mx-0 w-full md:py-8 py-4">
  <motion.div
   initial={{x:-100, opacity:0}}
whileInView={{x:0, opacity:1}}
transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1}}
  className="services-row md:m-20 md:px-36 mx-0 grid grid-cols-1 md:grid-cols-3 md:pt-10 py-2 gap-2 justify-items-center">
    <div className="services-column">
      <div className="services-card shadow-2xl md:py-20 py-10 px-2 rounded-lg overflow-hidden cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-yellow-500 duration-300 hover:shadow-lg text-3xl">
        <div className="services-icon-wrapper flex items-center justify-center h-16 w-16 bg-yellow-500 text-black rounded-full mx-auto">
          <i className="fas fa-handshake"></i>
        </div>
        <div className="px-6 py-2">
          <Link to="/consultation"><h2 className="text-xl md:text-2xl font-bold text-black">Consultation</h2></Link>
        </div>
      </div>
    </div>

    <div className="services-column">
      <div className="services-card shadow-2xl md:py-20  py-10 px-10 rounded-lg overflow-hidden cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-yellow-500 hover:shadow-lg text-3xl">
        <div className="services-icon-wrapper flex items-center justify-center h-16 w-16 bg-yellow-500 text-black rounded-full mx-auto">
          <i className="fas fa-coins"></i>
        </div>
        <div className="px-6 py-2">
          <h2 className="text-xl md:text-2xl font-bold text-black">Pricing</h2>
        </div>
      </div>
    </div>

    <div className="services-column">
      <div className="services-card shadow-2xl md:py-20  py-10 px-2 rounded-lg overflow-hidden cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-yellow-500 hover:shadow-lg text-3xl">
        <div className="services-icon-wrapper flex items-center justify-center h-16 w-16 bg-yellow-500 text-black rounded-full mx-auto">
          <i className="fa fa-file-text-o"></i>
        </div>
        <div className="px-6 py-2">
          <h2 className="text-xl md:text-2xl font-bold text-black">Tax Planner</h2>
        </div>
      </div>
    </div>
  </motion.div>
</section>
 {/* <!-----------------------------------------------------------Consultation-------------------------------------  --> */}
 <motion.section  initial={{x:-100, opacity:0}}
whileInView={{x:0, opacity:1}}
transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
 className="container md:mx-20 md:pt-5 md:pl-20 mx-0 md:w-full md:mt-10 mt-5">
  <img  src="Tax-Consultant-2048x1639.png" alt="Tax Consultant" className="md:w-[40%] md:float-right rounded-lg object-cover consultancy-img md:pr-36" /> 
  <div className=" md:flex-row md:items-center justify-between">
    <h1 className="text-3xl md:text-6xl font-bold text-black py-2 text-left">CONSULTATION</h1>
  </div>
  <div className="mt-8 md:mt-0 consultancy-para">
    <h2 className="text-xl font-bold text-yellow-500 py-3 consultancy-para-h2">Solving All Your Queries With Expert Solutions</h2>
    <p className="text-black py-2 consultancy-para1">
      Tax filing is a procedure where many taxpayers end up having many queries.<br/> With the help of our professional experts, this process will be simplified.
      <motion.ul  initial={{x:-100, opacity:0}}
whileInView={{x:0, opacity:1}}
transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
className="space-y-3 pl-4 py-3 consultancy-para-points">
        <li><i className="fas fa-arrow-circle-right text-yellow-500"></i> Fast Return Filling For Individuals</li>
        <li><i className="fas fa-arrow-circle-right text-yellow-500"></i> Tax Planning By An Expert Secure and safe</li>
        <li><i className="fas fa-arrow-circle-right text-yellow-500"></i> Tax Savings Solutions</li>
        <li><i className="fas fa-arrow-circle-right text-yellow-500"></i> NRI Tax Filling</li>
        <li><i className="fas fa-arrow-circle-right text-yellow-500"></i> Selection Of Tax-Regime (with comparison)</li>
      </motion.ul>
    </p>
  </div>
</motion.section>
{/* <!--- ------------------------------------------------------Why GoVyapar-------------------------------------------------------- --> */}
 <div className="why-govyapar bg-black py-16 px-0 w-full my-10 rounded-lg">
  <h1 className="text-2xl font-bold text-white text-center why-govyapar-heading pb-10">Why GoVyapar</h1>

  <motion.div initial={{x:-100, opacity:0}}
whileInView={{x:0, opacity:1}}
transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
className="why-govyapar-content grid grid-cols-1 md:grid-cols-3 text-center gap-5 mx-0 px-8">
    <div className="flex space-x-4 flex-col items-center justify-center why-govyapar-row">
      <span className="text-yellow-500 text-3xl why-govyapar-icons">
        <i className="fas fa-power-off"></i> </span>
      <h4 className="text-xl md:text-3xl text-yellow-500 why-govyapar-content-heading md:pb-4 ">AVAILABILITY</h4>
      <p className="text-white text-justify">People prefer to deal with money matters when they are free.</p>
    </div>
    <div className="flex space-x-4 flex-col items-center justify-center why-govyapar-row">
      <span className="text-yellow-500 text-3xl why-govyapar-icons">
        <i className="fas fa-people-carry"></i> </span>
      <h4 className="text-xl md:text-3xl text-yellow-500 why-govyapar-content-heading md:pb-4">CAPABILITY</h4>
      <p className="text-white text-justify">People trust qualified professionals to manage their hard-earned money efficiently & effectively.</p>
    </div>
    <div className="flex space-x-4 flex-col items-center justify-center why-govyapar-row">
      <span className="text-yellow-500 text-3xl why-govyapar-icons">
        <i className="fas fa-lock"></i>
      </span>
      <h4 className="text-xl md:text-3xl text-yellow-500 why-govyapar-content-heading md:pb-4">GUARANTEE</h4>
      <p className="text-white text-justify">Guaranteed Data security with Microsoft Azure! 100% security!</p>
    </div>
    <div className="flex space-x-4 flex-col items-center justify-center why-govyapar-row">
      <span className="text-yellow-500 text-3xl why-govyapar-icons">
        <i className="fas fa-running"></i>
      </span>
      <h4 className="text-xl md:text-3xl text-yellow-500 why-govyapar-content-heading md:pb-4">SPEED</h4>
      <p className="text-white text-justify">Quick and Hassle-free insurance buying process! Get instant quotes, compare plans, and select the best plan. Within few minutes get your policy!</p>
    </div>
    <div className="flex space-x-4 flex-col items-center justify-center why-govyapar-row">
      <span className="text-yellow-500 text-3xl why-govyapar-icons">
        <i className="fas fa-shield-alt"></i> </span>
      <h4 className="text-xl md:text-3xl text-yellow-500 why-govyapar-content-heading md:pb-4">RELIABILITY</h4>
      <p className="text-white text-justify">100% reliability is what we offer! Want your claim to be settled? We will put in our 150% to fight until rightful judgment is reached for you.</p>
    </div>
    <div className="flex space-x-4 flex-col items-center justify-center why-govyapar-row">
      <span className="text-yellow-500 text-3xl why-govyapar-icons">
        <i className="fas fa-chart-line"></i> </span>
      <h4 className="text-xl md:text-3xl text-yellow-500 why-govyapar--heading md:pb-4">EXPERIENCE</h4>
      <p className="text-white text-justify">We have over 9+ years of experience. Making a meaningful impact on the lives of Indians across the globe with sound & profitable investments, That's the GoVyapar dream!</p>
    </div>
    </motion.div>
    </div>

{/* ------------------------------------------------------------TAX PLANNER-------------------------------------------------------------------- */}
<motion.div initial={{x:-100, opacity:0}}
whileInView={{x:0, opacity:1}}
transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
className="container mx-auto py-20  md:px-40">
<img src="8670874.jpg" alt="Tax Planner" className="w-[65%] md:float-right md:w-[40%] ml-10"/>
  <div className="md:flex items-center  mb-12">
    <h1 className="md:text-5xl text-2xl font-bold text-center text-black">TAX PLANNER</h1>
  </div>
  <div className="prose">
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
</motion.div>

{/* -----------------------------------------------Why Do You Hire A Tax Consultant?------------------------------------------------------ */}
<div className="bg-black md:py-16 md:px-8 md:my-10 rounded-lg">
  <h1 className="md:text-4xl text-xl font-bold text-white text-center pt-3 pb-10">Why Should You Hire A Tax Consultant?</h1>
<div className="why-govyapar-content grid grid-cols-1 md:grid-cols-3 gap-5 px-2 md:mx-4 md:px-8">
    <motion.div initial={{x:-100, opacity:0}}
whileInView={{x:0, opacity:1}}
transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
className="flex space-x-4 flex-col items-center justify-center">
      <span className="text-yellow-500 md:text-4xl text-xl md:mb-4">
        <i className="fas fa-power-off"></i> </span>
      <h4 className="md:text-3xl text-xl text-yellow-500 md:pb-4">Saves Time And Effort</h4>
      <p className="text-white text-justify">It helps avoid the last-minute hassles of filing income taxes or making investments when the year-end draws nearer. Filing tax returns is time-consuming. An income tax consultant may not just help you with filing your returns correctly and advise you on how you can effectively manage your finances.</p>
    </motion.div>
    <motion.div initial={{x:-100, opacity:0}}
whileInView={{x:0, opacity:1}}
transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
className="flex space-x-4 flex-col items-center justify-center why-govyapar-row">
      <span className="text-yellow-500 md:text-4xl text-xl md:mb-4">
        <i className="fas fa-people-carry"></i> </span>
      <h4 className="md:text-3xl text-lg text-yellow-500 md:pb-4">Helps Identify Your Tax Deductions</h4>
      <p className="text-white text-justify">A tax advisor will help you identify the various tax-saving options available to you. You can know the right strategies to make smart investment decisions. A tax professional will review your previous returns, identify if any deductions were missed and amend them.</p>
    </motion.div>
    <motion.div initial={{x:-100, opacity:0}}
whileInView={{x:0, opacity:1}}
transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
className="flex space-x-4 flex-col items-center justify-center why-govyapar-row">
      <span className="text-yellow-500 md:text-4xl text-xl md:mb-4">
        <i className="fas fa-lock"></i>
      </span>
      <h4 className="md:text-3xl text-xl text-yellow-500 md:pb-4">Resolve Tax Concerns</h4>
      <p className="text-white text-justify">You may have many questions related to your taxes. Hiring a tax consultant can help you get answers to all your questions. You can approach them for tax-related advice and have all your doubts cleared. Moreover, they can keep your tax records.</p>
    </motion.div>
  </div>
  </div>
{/* -----------------------------------------------Why Do You Need A Tax Consultant?------------------------------------------------------ */}
<div class="md:py-20 mt-10 md:px-16">
  <motion.div 
  initial={{x:-100, opacity:0}}
whileInView={{x:0, opacity:1}}
transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
class="md:flex items-center mb-12">
    <h2 class="md:text-3xl text-xl font-bold text-black">Why Do You Need A Tax Consultant?</h2>
    {/* <img class="w-full md:w-1/2 ml-10 rounded-lg shadow-md" src="images/Why Do.png" alt="Tax Consultant"/> */}
  </motion.div>
  <div class="prose text-yellow-500">
    <h3 class="md:text-2xl text-lg font-bold md:mb-4">Do You Need A Tax Consultant To Help You With Tax Planning?<br/></h3>
    <motion.ul initial={{x:-100, opacity:0}}
whileInView={{x:0, opacity:1}}
transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
class="pl-4 md:space-y-2">
      <li class="flex items-center text-black">
        <i class="fas fa-arrow-circle-right mr-2 text-yellow-500"></i> Tax Saving Strategies
      </li>
      <li class="flex items-center text-black">
        <i class="fas fa-arrow-circle-right mr-2 text-yellow-500"></i> Save Time and Effort
      </li>
      <li class="flex items-center text-black">
        <i class="fas fa-arrow-circle-right mr-2 text-yellow-500"></i> Ensure Tax Compliance
      </li>
    </motion.ul>
  </div>
</div>

{/* -----------------------------------------------OTP VERIFICATION------------------------------------------------------ */}
 {/* <section className="bg-yellow-500 flex items-center justify-center h-screen">
      <div>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {user ? (
          <h2 className="text-center text-black font-medium text-2xl">
            👍Login Success
            <Link to = "/continue"><button>Continue</button></Link>
            <button onClick={() => setVisible(false)}>Close</button>
          </h2>
        ) : (
          <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
            <h1 className="text-center leading-normal text-black font-medium text-3xl mb-6">
              WELCOME TO <br /> GOVYAPAR
            </h1>
            {showOTP ? (
              <>
                <div className="bg-black text-yellow-500 w-fit mx-auto p-4 rounded-full">
                  <BsFillShieldLockFill size={30} />
                </div>
                <label
                  htmlFor="otp"
                  className="font-bold text-xl text-black text-center"
                >
                  Enter your OTP
                </label>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autoFocus
                  className="opt-container "
                ></OtpInput>
                <button
                  onClick={onOTPVerify}
                  className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Verify OTP</span>
                </button>
              </>
            ) : (
              <>
                <div className="bg-black text-yellow-500 w-fit mx-auto p-4 rounded-full">
                  <BsTelephoneFill size={30} />
                </div>
                <label
                  htmlFor=""
                  className="font-bold text-xl text-white text-center"
                >
                  Verify your phone number
                </label>
                <PhoneInput country={"in"} value={ph} onChange={setPh} />
                <button
                  onClick={onSignup}
                  className="bg-black w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Send code via SMS</span>
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </section>  */}

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

 {/* <div className=" pt-20 pb-10">
<div class="container my-24 mx-auto md:px-6">
  
  <section class="mb-32">
    <div class="flex flex-wrap">
      <div class="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
        <h2 class="mb-6 text-3xl font-bold">Contact us</h2>
        <p class="mb-6 text-neutral-500 dark:text-neutral-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Laudantium, modi accusantium ipsum corporis quia asperiores
          dolorem nisi corrupti eveniet dolores ad maiores repellendus enim
          autem omnis fugiat perspiciatis? Ad, veritatis.
        </p>
        <p class="mb-2 text-neutral-500 dark:text-neutral-300">
          New York, 94126, United States
        </p>
        <p class="mb-2 text-neutral-500 dark:text-neutral-300">
          + 01 234 567 89
        </p>
        <p class="mb-2 text-neutral-500 dark:text-neutral-300">
          info@gmail.com
        </p>
      </div>
      <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
        <form>
          <div class="relative mb-6" data-te-input-wrapper-init>
            <input type="text"
              class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInput90" placeholder="Name" />
            <label
              class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              for="exampleInput90">Name
            </label>
          </div>
          <div class="relative mb-6" data-te-input-wrapper-init>
            <input type="email"
              class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInput91" placeholder="Email address" />
            <label
              class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              for="exampleInput91">Email address
            </label>
          </div>
          <div class="relative mb-6" data-te-input-wrapper-init>
            <textarea
              class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlTextarea1" rows="3" placeholder="Your message"></textarea>
            <label for="exampleFormControlTextarea1"
              class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Message</label>
          </div>
         
          <button type="button" data-te-ripple-init data-te-ripple-color="light"
            class="mb-6 inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
            Send
          </button>
        </form>
      </div>
    </div>
  </section>
</div>
</div>  */}

</>
  

    )
 }


export default Service