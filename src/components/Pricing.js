import React, { useRef, useState } from 'react';
import {easeIn, motion} from "framer-motion";
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { ToastContainer, Flip, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel,} from "@material-tailwind/react";

function Pricing(){
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
 const [errorMsg, setErrorMsg] = useState("");
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
   setErrorMsg("Fill all fields");
   return;
 }
   setErrorMsg("");
   
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



  const [activeTab, setActiveTab] = useState("companyFormation");
  const data2 = [
    {
  //     // --------------------------------------------------ITR FILING------------------------------------
      label: (<label className='z-0'>ITR Filing</label>),
      value: "itr-filing",
      desc: (
      <div className='z-[-1]'> 
      <motion.p 
initial={{y:100, opacity:0}}
whileInView={{y:0, opacity:1}}
transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
 className="text-center text-black font-medium md:py-10">
        <h1 className="md:text-5xl text-2xl text-bold">ITR FILING</h1>
      <p className="lg:px-20 py-2 xl:mx-40">Sit back and relax. Leave the stress of tax filing to us. Let our
      experts help you save maximum time & taxes.
      <br />
      <ul className="itr-filing-para-points md:flex space-x-4 justify-center">
        <li>
          <i className="fas fa-arrow-circle-right text-yellow-500"></i> 1-1 Expert Assistance
        </li>
        <li>
          <i className="fas fa-arrow-circle-right text-yellow-500"></i> Tax Return Preparation
        </li>
        <li>
          <i className="fas fa-arrow-circle-right text-yellow-500"></i> Notices Management
        </li>
      </ul>
      
      </p>
    </motion.p>
     {/* ----------------pricing plans itr filing----------- */}
    
    <h4 className="md:text-xl text-sm pt-2 font-bold text-yellow-500 text-center">PRICING PLAN</h4> 
    <h1 className="md:text-3xl text-xl font-bold text-black text-center md:py-3">Plans Based On Your Selection</h1>
    
  <div className="pricing-box-container grid md:grid-cols-3 grid-rows-1 justify-center z-[-1]">
    <motion.div initial={{y:100, opacity:0}}
whileInView={{y:0, opacity:1}}
transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
 className="pricing-box bg-yellow-500 text-center shadow-md rounded-md p-6 m-2 min-w-sm max-w-md h-auto pt-5 pb-20">
    <h5 className="text-lg font-bold text-black uppercase">Salary & HP Plan</h5>
      <p className="price text-4xl font-bold text-black">
        <sup className="text-base font-light text-black">₹</sup>
        999
        <sub className="font-normal text-xl">/year</sub>
      </p>
      <p className="text-black py-2">Inclusive of Taxes</p>
      <ul className="features-list list-none pl-0 mt-4">
        <li className="flex items-center md:text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> Single & Multiple Employers
        </li>
        <li className="flex items-center md:text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> Single & Multiple House Property
        </li>
        <li className="flex items-center md:text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> Income from Other Sources
        </li>
        <li className="flex items-center md:text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> Agriculture Income
        </li>
      </ul>
      <Link to ="/contact"><button className="btn-primary text-white bg-black hover:bg-black hover:shadow-md active:bg-black focus:bg-black focus:border-white px-4 py-2 rounded-md font-bold mt-4 uppercase transition ease-in-out duration-100">
        Choose Plan
      </button></Link>
      {/* <Model isOpen = {visible} onRequestClose={() => setVisible(false)}  className="">
        <h1 className='p-10 bg-pink-300 z-10'>Model Body</h1>
        <button onClick={() => setVisible(false)}><i class="fa fa-window-close" aria-hidden="true"></i></button> */}
        {/* -----------------------------------------------OTP VERIFICATION------------------------------------------------------ */}
      {/* </Model> */}
    </motion.div>
    
    <motion.div initial={{y:100, opacity:0}}
whileInView={{y:0, opacity:1}}
transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
 className="pricing-box bg-black text-center shadow-md rounded-md p-6 m-2 min-w-sm max-w-md h-auto pt-5 pb-20">
      <h5 className="text-lg font-bold text-white uppercase">BUSINESS & PROFESSIONAL PLAN</h5>
      <p className="price text-4xl font-bold text-white">
        <sup className="text-base font-light text-white">₹</sup>
        2,499
        <sub className="font-normal text-xl">/year</sub>
      </p>
      <p className="text-white py-2">Inclusive of Taxes</p>
      <ul className="features-list list-none pl-0 mt-4">
        <li className="flex items-center md:text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i> Single & Multiple Employers
        </li>
        <li className="flex items-center  md:text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i> Single & Multiple House Property
        </li>
        <li className="flex items-center md:text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i> Business & Professional Income <br className='block md:hidden'/> (Non Audit) Without B/S P/L*
        </li>
        <li className="flex items-center md:text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i> Income from Other Sources
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
  <h5 className="text-lg font-bold text-black uppercase">CAPITAL GAIN PLAN</h5>
      <p className="price text-4xl font-bold text-black">
        <sup className="text-base font-light text-black">₹</sup>
        2,999
        <sub className="font-normal text-xl">/year</sub>
      </p>
      <p className="text-black py-2">Inclusive of Taxes</p>
      <ul className="features-list list-none pl-0 mt-4">
        <li className="flex items-center md:text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> Single & Multiple Employers
        </li>
        <li className="flex items-center md:text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> Single & Multiple House Property
        </li>
        <li className="flex items-center md:text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>  Business & Professional Income <br className='block md:hidden'/> (Non Audit) Without B/S P/L*
        </li>
        <li className="flex items-center md:text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> Multiple Capital Gain Income
        </li>
      </ul>
      <Link to ="/contact"><button className="btn-primary text-white bg-black hover:bg-black hover:shadow-md active:bg-black focus:bg-black focus:border-white px-4 py-2 rounded-md font-bold mt-4 uppercase transition ease-in-out duration-100">
        Choose Plan
      </button></Link>
</motion.div>
</div>
</div>
      ),
    },
    // -------------------------------------------TAX-PLANNER------------------------------------
    {
      label: "Tax Planner",
      value: "tax-planner",
      desc: (
        <div>
        <motion.p 
initial={{y:100, opacity:0}}
whileInView={{y:0, opacity:1}}
transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
className="text-center text-black font-medium md:py-10">
        <h1 className="md:text-5xl text-2xl text-bold">TAX PLANNER</h1>
        <p  className="lg:px-20 py-2 xl:mx-40">Personalized tax planning assistance to individuals and businesses by a team of qualified and credible tax experts.
         <br />
      <ul className="itr-filing-para-points md:flex space-x-4 justify-center">
        <li>
          <i className="fas fa-arrow-circle-right text-yellow-500"></i> Expert-driven tax planning
        </li>
        <li>
          <i className="fas fa-arrow-circle-right text-yellow-500"></i> In-depth tax report
        </li>
        <li>
          <i className="fas fa-arrow-circle-right text-yellow-500"></i> Reduce tax liabilities
        </li>
      </ul>
      </p>
    </motion.p> 
  
     {/* ----------------pricing plans tax-planner----------- */}
     <h4 className="md:text-xl text-sm pt-2 font-bold text-yellow-500 text-center">PRICING PLAN</h4> 
    <h1 className="md:text-3xl text-xl font-bold text-black text-center md:py-3">Plans Based On Your Selection</h1>
    
  <div className="pricing-box-container grid md:grid-cols-3 grid-rows-1 justify-center">
    <motion.div initial={{y:100, opacity:0}}
whileInView={{y:0, opacity:1}}
transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
className="pricing-box bg-yellow-500 text-center shadow-md rounded-md p-6 m-2 min-w-sm max-w-md h-auto pt-5 pb-20">
    <h5 className="text-lg font-bold text-black uppercase">Tax Planning</h5>
      <p className="price text-4xl font-bold text-black">
        <sup className="text-base font-light text-black">₹</sup>
        999
        <sub className="font-normal text-xl">/year</sub>
      </p>
      <p className="text-black py-2">Inclusive of Taxes</p>
      <ul className="features-list list-none pl-0 mt-4">
        <li className="items-center text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>Maximize your financial potential <br className='block md:hidden'/> with GoVyapar.
        </li>
        <li className="items-center text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>Receive an in-depth tax report <br className='block md:hidden'/> tailored to your investments.
        </li>
        <li className="items-center text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>Get detailed guidance on investments that <br className='block md:hidden'/> will help reduce your tax liabilities
        </li>
        <li className="items-center text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>Receive expert guidance tailored to <br className='block md:hidden'/> your specific needs
        </li>
        <li className="items-center text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>All types of tax planning in one place <br className='block md:hidden'/> (Individual, Business, NRI, Capital Gain)
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
      <h5 className="text-lg font-bold text-white uppercase">Tax Planning For High <br/> Networth Individuals (HNI)</h5>
      <p className="price text-4xl font-bold text-white">
        <sup className="text-base font-light text-white">₹</sup>
        ₹11,999
        <sub className="font-normal text-xl">/year</sub>
      </p>
      <p className="text-white py-2">Inclusive of Taxes</p>
      <ul className="features-list list-none pl-0 mt-4">
        <li className="items-center text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i>Step by step tax planning <br className='block md:hidden'/> strategy for single taxpayer
        </li>
        <li className="items-center text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i>Extensive overview on income <br className='block md:hidden'/> sources (only for current financial year)
        </li>
        <li className="items-center text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i>Consolidated tax report  <br/> (Only for current financial year)
        </li>
        <li className="items-center text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i>Quarterly Advance Tax Calculation
        </li>
      </ul>
      <Link to ="/contact"><button className="btn-primary text-white bg-yellow-500 hover:bg-gray-800 hover:shadow-md px-4 py-2 rounded-md font-bold mt-4 uppercase transition ease-in-out duration-100">
        Choose Plan
      </button></Link>
    </motion.div>
  
  <motion.div initial={{y:100, opacity:0}}
whileInView={{y:0, opacity:1}}
transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
className="pricing-box bg-yellow-500 text-center shadow-md rounded-md p-6 m-2 min-w-sm max-w-md h-auto pt-5 pb-20">
  <h5 className="text-lg font-bold text-black uppercase">Tax Planning For High <br/> Networth Individuals (HNI) –</h5>
      <p className="price text-4xl font-bold text-black">
        <sup className="text-base font-light text-black">₹</sup>
        ₹24,999
        <sub className="font-normal text-xl">/year</sub>
      </p>
      <p className="text-black py-2">Inclusive of Taxes</p>
      <ul className="features-list list-none pl-0 mt-4">
        <li className="items-center text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>Develop a Comprehensive & Family <br className='block md:hidden'/> wide Tax Planning Strategy
        </li>
        <li className="items-center text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>Consolidated Income Analysis <br className='block md:hidden'/> & tax reports
        </li>
        <li className="items-center text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>Advisory for effective Tax <br className='block md:hidden'/> Planning for Long Term Perspective
        </li>
        <li className="items-center text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>Provide user with Innovative Ideas <br className='block md:hidden'/> & Strategy for Tax Saving
        </li>
        <li className="items-center text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>Assisting in End to End <br className='block md:hidden'/> Compliance Facilitation
        </li>
      </ul>
      <Link to ="/contact"><button className="btn-primary text-white bg-black hover:bg-black hover:shadow-md active:bg-black focus:bg-black focus:border-white px-4 py-2 rounded-md font-bold mt-4 uppercase transition ease-in-out duration-100">
        Choose Plan
      </button></Link>
</motion.div>
</div>
</div>
      ),
    },
    // --------------------------------------------------------------GST----------------------------------------------
    {
      label: "GST",
      value: "gst",
      desc: (
        <div>
        <motion.p
initial={{y:100, opacity:0}}
whileInView={{y:0, opacity:1}}
transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
 className="text-center text-black font-medium md:py-10">
        <h1 className="md:text-5xl text-2xl text-bold">GST</h1>
        <p className="lg:px-20 py-2 xl:mx-40">Offload your GST filing to our CAs and peacefully focus on your business.</p>
      <ul className="itr-filing-para-points md:flex space-x-4 justify-center">
        <li>
          <i className="fas fa-arrow-circle-right text-yellow-500"></i> CA guided filing
        </li>
        <li>
          <i className="fas fa-arrow-circle-right text-yellow-500"></i> End to end tax advisory
        </li>
        <li>
          <i className="fas fa-arrow-circle-right text-yellow-500"></i> Monthly GST credit reconciliation
        </li>
      </ul>
    </motion.p> 
    {/* ----------------pricing plans gst----------- */}
    <h4 className="md:text-xl text-sm pt-2 font-bold text-yellow-500 text-center">PRICING PLAN</h4> 
    <h1 className="md:text-3xl text-xl font-bold text-black text-center md:py-3">Plans Based On Your Selection</h1>
    
  <div className="pricing-box-container grid md:grid-cols-3 grid-rows-1 justify-center">
    <motion.div initial={{y:100, opacity:0}}
whileInView={{y:0, opacity:1}}
transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
className="pricing-box bg-yellow-500 text-center shadow-md rounded-md p-6 m-2 min-w-sm max-w-md h-auto pt-5 pb-20">
    <h5 className="text-lg font-bold text-black uppercase">GST REGISTRATION</h5>
      <p className="price text-4xl font-bold text-black">
        <sup className="text-base font-light text-black">₹</sup>
        1200
        <sub className="font-normal text-xl">/year</sub>
      </p>
      <p className="text-black py-2">Inclusive of Taxes</p>
      <ul className="features-list list-none pl-0 mt-4">
        <li className="flex items-center text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> Application for GST Registration
        </li>
        <li className="flex items-center text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> Application for Clarification
        </li>
        <li className="flex items-center text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> Any modification in GST <br className='block md:hidden'/> Registration Application
        </li>
      </ul>
      <Link to ="/contact"><button className="btn-primary text-white bg-black hover:bg-gray-800 hover:shadow-md px-4 py-2 rounded-md font-bold mt-4 uppercase transition ease-in-out duration-100">
        Choose Plan
      </button></Link>
    </motion.div>
    
    <motion.div initial={{y:100, opacity:0}}
whileInView={{y:0, opacity:1}}
transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
className="pricing-box bg-black text-center shadow-md rounded-md p-6 m-2 min-w-sm max-w-md h-auto pt-5 pb-20">
      <h5 className="text-lg font-bold text-white uppercase">GST COMPLIANCES OF <br/> ONLINE SELLER</h5>
      <p className="price text-4xl font-bold text-white">
        <sup className="text-base font-light text-white">₹</sup>
        12,000
        <sub className="font-normal text-xl">/year</sub>
      </p>
      <p className="text-white py-2">Inclusive of Taxes</p>
      <ul className="features-list list-none pl-0 mt-4">
        <li className="flex items-center text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i> GSTR-1 Return Filing
        </li>
        <li className="flex items-center text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i> GSTR-3B Return Filing
        </li>
        <li className="flex items-center text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i> Credit Reconciliation (Reconciliation <br className='block md:hidden'/> of Purchase Register and GSTR-2A)
        </li>
        <li className="flex items-center text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i> Excludes Annual Return
        </li>
      </ul>
      <Link to ="/contact"><button className="btn-primary text-white bg-yellow-500 hover:bg-gray-800 hover:shadow-md px-4 py-2 rounded-md font-bold mt-4 uppercase transition ease-in-out duration-100">
        Choose Plan
      </button></Link>
    </motion.div>
  
  <motion.div initial={{y:100, opacity:0}}
whileInView={{y:0, opacity:1}}
transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
className="pricing-box bg-yellow-500 text-center shadow-md rounded-md p-6 m-2 min-w-sm max-w-md h-auto pt-5 pb-20">
  <h5 className="text-lg font-bold text-black uppercase">GST COMPLIANCES FOR <br/> FREELANCERS</h5>
      <p className="price text-4xl font-bold text-black">
        <sup className="text-base font-light text-black">₹</sup>
        8000
        <sub className="font-normal text-xl">/year</sub>
      </p>
      <p className="text-black py-2">Inclusive of Taxes</p>
      <ul className="features-list list-none pl-0 mt-4">
        <li className="flex items-center text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> GSTR-1 Return Filing
        </li>
        <li className="flex items-center text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> GSTR-3B Return Filing
        </li>
        <li className="flex items-center text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> Credit Reconciliation (Reconciliation <br/> of Purchase Register and GSTR-2A)
        </li>
        <li className="flex items-center text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>Excludes Annual Return
        </li>
      </ul>
      <Link to ="/contact"><button className="btn-primary text-white bg-black hover:shadow-md px-4 py-2 rounded-md font-bold mt-4 uppercase transition ease-in-out duration-100">
        Choose Plan
      </button></Link>
    </motion.div>
</div>
</div>
      ),
    },
    {
      label: "Company Formation",
      value: "companyFormation",
      desc: (
        <div>
            {/* ----------------pricing plans Company Formation----------- */}
           <h1 className="text-center text-black font-medium md:pt-10 pb-7 text-2xl md:text-5xl text-bold">COMPANY FORMATION</h1>
    <h4 className="md:text-xl text-sm pt-2 font-bold text-yellow-500 text-center">PRICING PLAN</h4> 
    <h1 className="md:text-3xl text-xl font-bold text-black text-center md:py-3">Plans Based On Your Selection</h1>
    
  <div className="pricing-box-container grid md:grid-cols-3 grid-rows-1 justify-center">
    {/* -------------------------1st plan----------------------- */}
    <motion.div initial={{y:100, opacity:0}}
whileInView={{y:0, opacity:1}}
transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
className="pricing-box bg-yellow-500 text-center shadow-md rounded-md p-6 m-2 min-w-sm max-w-md h-auto pt-5 pb-20">
    <h5 className="text-lg font-bold text-black uppercase">Private Limited Company Plan</h5>
      <p className="price text-4xl font-bold text-black">
        <sup className="text-base font-light text-black">₹</sup>
        11,499
        {/* <sub className="font-normal text-xl">/year</sub> */}
      </p>
      {/* <p className="text-black py-2">Inclusive of Taxes</p> */}
      <ul className="features-list list-none pl-0 mt-4">
        <li className="items-center text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i><span className='font-semibold'>Recommended For:</span> Startup & Growing Business
        </li>
        <li className="items-center text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i><span className='font-semibold'>Limited Liability Protection:</span> Available
        </li>
        <li className="items-center text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i><span className='font-semibold'>Tax On Profit:</span> 30%
        </li>
        <li className="items-center text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i><span className='font-semibold'>Business Name Secure:</span> Yes
        </li>
        <li className="items-center text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i><span className='font-semibold'>Equity Funding:</span> Possible
        </li>
        <li className="items-center text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i><span className='font-semibold'>Loan & Borrowings:</span> Easy
        </li>
        <li className="items-center text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i><span className='font-semibold'>Audit Requirement:</span> Mandatory
        </li>
      </ul>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfjja9BAp98rOAdMYs09RaLTkL3UBhpMN7VxQ0ncO-1pfwuag/viewform?usp=sharing"><button className="btn-primary text-white bg-black hover:bg-gray-800 hover:shadow-md px-4 py-2 rounded-md font-bold mt-4 uppercase transition ease-in-out duration-100">
        Choose Plan
      </button></a>
    </motion.div>
    
    {/* --------------------2nd plan------------------------ */}
    <motion.div initial={{y:100, opacity:0}}
whileInView={{y:0, opacity:1}}
transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
className="pricing-box bg-black text-center shadow-md rounded-md p-6 m-2 min-w-sm max-w-md h-auto pt-5 pb-20">
      <h5 className="text-lg font-bold text-white uppercase">Private Limited Company (One Man Army) Plan</h5>
      <p className="price text-4xl font-bold text-white">
        <sup className="text-base font-light text-white">₹</sup>
        12,000
        {/* <sub className="font-normal text-xl">/year</sub> */}
      </p>
      {/* <p className="text-white py-2">Inclusive of Taxes</p> */}
      <ul className="features-list list-none pl-0 mt-4">
      <li className="items-center text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i><span className='font-semibold'>Recommended For:</span> One Man Army
        </li>
        <li className="items-center text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i><span className='font-semibold'>Limited Liability Protection:</span> Available
        </li>
        <li className="items-center text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i><span className='font-semibold'>Business Name Secure:</span> Yes
        </li>
        <li className="items-center text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i><span className='font-semibold'>Tax On Profit:</span> 30%
        </li>
        <li className="items-center text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i><span className='font-semibold'>Equity Funding:</span> Possible
        </li>
        <li className="items-center text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i><span className='font-semibold'>Loan & Borrowings:</span> Easy
        </li>
        <li className="items-center text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i><span className='font-semibold'>Audit Requirement:</span> Mandatory
        </li>
      </ul>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfjja9BAp98rOAdMYs09RaLTkL3UBhpMN7VxQ0ncO-1pfwuag/viewform?usp=sharing"><button className="btn-primary text-white bg-yellow-500 hover:bg-gray-800 hover:shadow-md px-4 py-2 rounded-md font-bold mt-4 uppercase transition ease-in-out duration-100">
        Choose Plan
      </button></a>
    </motion.div>
  
  {/* -----------------------3rd plan-------------------------- */}
  <motion.div initial={{y:100, opacity:0}}
whileInView={{y:0, opacity:1}}
transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
className="pricing-box bg-yellow-500 text-center shadow-md rounded-md p-6 m-2 min-w-sm max-w-md h-auto pt-5 pb-20">
  <h5 className="text-lg font-bold text-black uppercase">Private Limited Company (Partnership Firm with Legal Shield) Plan</h5>
      <p className="price text-4xl font-bold text-black">
        <sup className="text-base font-light text-black">₹</sup>
        7,999
        {/* <sub className="font-normal text-xl">/year</sub> */}
      </p>
      {/* <p className="text-black py-2">Inclusive of Taxes</p> */}
      <ul className="features-list list-none pl-0 mt-4">
      <li className="items-center text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i><span className='font-semibold'>Recommended For:</span> Partnership Firm with Legal Shield
        </li>
        <li className="items-center text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i><span className='font-semibold'>Limited Liability Protection:</span> Available
        </li>
        <li className="items-center text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i><span className='font-semibold'>Business Name Secure:</span> Yes
        </li>
        <li className="items-center text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i><span className='font-semibold'>Tax On Profit:</span> 30%
        </li>
        <li className="items-center text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i><span className='font-semibold'>Equity Funding:</span> Not Possible
        </li>
        <li className="items-center text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i><span className='font-semibold'>Loan & Borrowings:</span> Easy
        </li>
        <li className="items-center text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i><span className='font-semibold'>Audit Requirement:</span> If Annual turnover exceeds ₹40 Lacs or Capital Exceeds ₹25 Lacs
        </li>
      </ul>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfjja9BAp98rOAdMYs09RaLTkL3UBhpMN7VxQ0ncO-1pfwuag/viewform?usp=sharing"><button className="btn-primary text-white bg-black hover:shadow-md px-4 py-2 rounded-md font-bold mt-4 uppercase transition ease-in-out duration-100">
        Choose Plan
      </button></a>
    </motion.div>
    {/* --------------------------------4th plan----------------------- */}
    <motion.div initial={{y:100, opacity:0}}
whileInView={{y:0, opacity:1}}
transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
className="pricing-box bg-yellow-500 text-center shadow-md rounded-md p-6 m-2 min-w-sm max-w-md h-auto pt-5 pb-20">
    <h5 className="text-lg font-bold text-black uppercase">Partnership Firm Plan</h5>
      <p className="price text-4xl font-bold text-black">
        <sup className="text-base font-light text-black">₹</sup>
        11,499
        {/* <sub className="font-normal text-xl">/year</sub> */}
      </p>
      {/* <p className="text-black py-2">Inclusive of Taxes</p> */}
      <ul className="features-list list-none pl-0 mt-4">
      <li className="items-center text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i><span className='font-semibold'>Recommended For:</span> Business Managed by 2 or More People
        </li>
        <li className="items-center text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i><span className='font-semibold'>Limited Liability Protection:</span> Not Available
        </li>
        <li className="items-center text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i><span className='font-semibold'>Business Name Secure:</span> No
        </li>
        <li className="items-center text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i><span className='font-semibold'>Tax On Profit:</span> 30%
        </li>
        <li className="items-center text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i><span className='font-semibold'>Equity Funding:</span> Not Possible
        </li>
        <li className="items-center text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i><span className='font-semibold'>Loan & Borrowings:</span> Difficult
        </li>
        <li className="items-center text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i><span className='font-semibold'>Audit Requirement:</span> If Annual turnover exceeds ₹1 Crore
        </li>
      </ul>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfjja9BAp98rOAdMYs09RaLTkL3UBhpMN7VxQ0ncO-1pfwuag/viewform?usp=sharing"><button className="btn-primary text-white bg-black hover:bg-gray-800 hover:shadow-md px-4 py-2 rounded-md font-bold mt-4 uppercase transition ease-in-out duration-100">
        Choose Plan
      </button></a>
    </motion.div>
    
    {/* ------------------------------5th plan---------------------- */}
    <motion.div initial={{y:100, opacity:0}}
whileInView={{y:0, opacity:1}}
transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
className="pricing-box bg-black text-center shadow-md rounded-md p-6 m-2 min-w-sm max-w-md h-auto pt-5 pb-20">
      <h5 className="text-lg font-bold text-white uppercase">Sole Proprietor Plan</h5>
      <p className="price text-4xl font-bold text-white">
        <sup className="text-base font-light text-white">₹</sup>
        11,499
        {/* <sub className="font-normal text-xl">/year</sub> */}
      </p>
      {/* <p className="text-white py-2">Inclusive of Taxes</p> */}
      <ul className="features-list list-none pl-0 mt-4">
      <li className="items-center text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i><span className='font-semibold'>Recommended For:</span> Business Managed by Single Person
        </li>
        <li className="items-center text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i><span className='font-semibold'>Limited Liability Protection:</span> Not Available
        </li>
        <li className="items-center text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i><span className='font-semibold'>Business Name Secure:</span> No
        </li>
        <li className="items-center text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i><span className='font-semibold'>Tax On Profit:</span> 10-30%
        </li>
        <li className="items-center text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i><span className='font-semibold'>Equity Funding:</span> Not Possible
        </li>
        <li className="items-center text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i><span className='font-semibold'>Loan & Borrowings:</span> Difficult
        </li>
        <li className="items-center text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i><span className='font-semibold'>Audit Requirement:</span> If Annual turnover exceeds ₹1 Crore
        </li>
      </ul>
      <Link to ="/contact"><button className="btn-primary text-white bg-yellow-500 hover:bg-gray-800 hover:shadow-md px-4 py-2 rounded-md font-bold mt-4 uppercase transition ease-in-out duration-100">
        Choose Plan
      </button></Link>
    </motion.div>
</div>

          {/* ----------------------------------Company Formation table------------------------------------------- */}
        <table className="company-formation-table hidden md:block">
  <tr>
      <th>Firm Of Bussiness</th>
      <th>Private Limited Company</th>
      <th>Private Limited Company</th>
      <th>Private Limited Company</th>
      <th>Partnership Firm</th>
      <th>Sole Proprietor</th>
    </tr>
    <tr>
      <td>Recommended For</td>
      <td>Startup & Growing Business</td>
      <td>One Man Army</td>
      <td>Partnership Firm with Legal Sheild</td>
      <td>Business Manage by 2 or more people</td>
      <td>Business Manage by Single Person</td>
    </tr>
    <tr>
      <td>Limited Liability Protection</td>
      <td>Available</td>
      <td>Available</td>
      <td>Available</td>
      <td>Not Available</td>
      <td>Not Available</td>
    </tr>
  <tr>
    <td>Whether Business Name Secure?</td>
    <td>Yes</td>
    <td>Yes</td>
    <td>Yes</td>
    <td>No</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Tax On Profit</td>
    <td>25%</td>
    <td>30%</td>
    <td>30%</td>
    <td>30%</td>
    <td>10-30%</td>
</tr>
<tr>
    <td>Equity Funding</td>
    <td>Possible</td>
    <td>Not Possible</td>
    <td>Not Possible</td>
    <td>Not Possible</td>
    <td>Not Possible</td>
 </tr>
 <tr>
    <td>Loan & Borrowings</td>
    <td>Easy</td>
    <td>Easy</td>
    <td>Easy</td>
    <td>Difficult</td>
    <td>Difficult</td>
</tr>
<tr>
    <td>Audit Requirement</td>
    <td>Mandatory</td>
    <td>Mandatory</td>
    <td>If Annual turnover exceeds Rs 40 Lacs <br/> or Capital Exceeds Rs 25 Lac</td>
    <td>If Annual turnover exceeds Rs 1 Crore</td>
    <td>If Annual turnover exceeds Rs 1 Crore</td>
</tr>
</table>

<table className="max-w-full mx-0 block md:hidden">
   {/* ---------------------------------Recommended For---------------------------- */}
  <tr>
  <td className='font-bold'>Firm Of Bussiness</td>
  <td>Recommended For</td>
  </tr>

  <tr>
  <td className='font-bold'>Private Limited Company</td>
  <td>
    <ul className="list-disc">
      <li>Startup & Growing Business</li>
      <li>One Man Army</li>
      <li>Partnership Firm with Legal Sheild</li>
      </ul>
    </td>
  </tr>

  <tr>
  <td className='font-bold'>Partnership Firm</td>
  <td>Business Manage by 2 or more people</td>
  </tr>

  <tr>
  <td className='font-bold'>Sole Proprietor</td>
  <td>Business Manage by Single Person</td>
  </tr>
  <p className='w-full  border-black border-1'></p>
  <p className='w-full  border-black border-1 mt-1'></p>

    {/* ---------------------------------Limited Liability Protection---------------------------- */}
    <tr>
  <td className='font-bold'>Firm Of Bussiness</td>
  <td>Limited Liability Protection</td>
  </tr>

  <tr>
  <td className='font-bold'>Private Limited Company</td>
  <td>
    <ul className="list-disc">
      <li>Available</li>
      <li>Available</li>
      <li>Available</li>
      </ul>
    </td>
  </tr>

  <tr>
  <td className='font-bold'>Partnership Firm</td>
  <td>Not Available</td>
  </tr>

  <tr>
  <td className='font-bold'>Sole Proprietor</td>
  <td>Not Available</td>
  </tr>
  <p className='w-full  border-black border-1'></p>
  <p className='w-full  border-black border-1 mt-1'></p>

   {/* ---------------------------------Whether Business Name Secure?---------------------------- */}
   <tr>
  <td className='font-bold'>Firm Of Bussiness</td>
  <td>Whether Business Name Secure?</td>
  </tr>

  <tr>
  <td className='font-bold'>Private Limited Company</td>
  <td>
    <ul className="list-disc">
      <li>Yes</li>
      <li>Yes</li>
      <li>Yes</li>
      </ul>
    </td>
  </tr>

  <tr>
  <td className='font-bold'>Partnership Firm</td>
  <td>No</td>
  </tr>

  <tr>
  <td className='font-bold'>Sole Proprietor</td>
  <td>No</td>
  </tr>
  <p className='w-full  border-black border-1'></p>
  <p className='w-full  border-black border-1 mt-1'></p>

   {/* ---------------------------------Tax On Profit---------------------------- */}
   <tr>
  <td className='font-bold'>Firm Of Bussiness</td>
  <td>Tax On Profit</td>
  </tr>

  <tr>
  <td className='font-bold'>Private Limited Company</td>
  <td>
    <ul className="list-disc">
      <li>25%</li>
      <li>30%</li>
      <li>30%</li>
      </ul>
    </td>
  </tr>

  <tr>
  <td className='font-bold'>Partnership Firm</td>
  <td>30%</td>
  </tr>

  <tr>
  <td className='font-bold'>Sole Proprietor</td>
  <td>10-30%</td>
  </tr>
  <p className='w-full  border-black border-1'></p>
  <p className='w-full  border-black border-1 mt-1'></p>

   {/* ---------------------------------Equity Funding---------------------------- */}
   <tr>
  <td className='font-bold'>Firm Of Bussiness</td>
  <td>Equity Funding</td>
  </tr>

  <tr>
  <td className='font-bold'>Private Limited Company</td>
  <td>
    <ul className="list-disc">
      <li>Possible</li>
      <li>Not Possible</li>
      <li>Not Possible</li>
      </ul>
    </td>
  </tr>

  <tr>
  <td className='font-bold'>Partnership Firm</td>
  <td>30%</td>
  </tr>

  <tr>
  <td className='font-bold'>Sole Proprietor</td>
  <td>10-30%</td>
  </tr>
  <p className='w-full  border-black border-1'></p>
  <p className='w-full  border-black border-1 mt-1'></p>

  {/* ---------------------------------Loan & Borrowings--------------------------- */}
  <tr>
  <td className='font-bold'>Firm Of Bussiness</td>
  <td>Loan & Borrowings</td>
  </tr>

  <tr>
  <td className='font-bold'>Private Limited Company</td>
  <td>
    <ul className="list-disc">
      <li>Easy</li>
      <li>Easy</li>
      <li>Easy</li>
      </ul>
    </td>
  </tr>

  <tr>
  <td className='font-bold'>Partnership Firm</td>
  <td>Difficult</td>
  </tr>

  <tr>
  <td className='font-bold'>Sole Proprietor</td>
  <td>Difficult</td>
  </tr>
  <p className='w-full  border-black border-1'></p>
  <p className='w-full  border-black border-1 mt-1'></p>

   {/* ---------------------------------Audit Requirement--------------------------- */}
   <tr>
  <td className='font-bold'>Firm Of Bussiness</td>
  <td>Audit Requirement</td>
  </tr>

  <tr>
  <td className='font-bold'>Private Limited Company</td>
  <td>
    <ul className="list-disc">
      <li>Mandatory</li>
      <li>Mandatory</li>
      <li>If Annual turnover exceeds Rs 40 Lacs or Capital Exceeds Rs 25 Lac</li>
      </ul>
    </td>
  </tr>

  <tr>
  <td className='font-bold'>Partnership Firm</td>
  <td>If Annual turnover exceeds Rs 1 Crore</td>
  </tr>

  <tr>
  <td className='font-bold'>Sole Proprietor</td>
  <td>If Annual turnover exceeds Rs 1 Crore</td>
  </tr>
  <p className='w-full  border-black border-1'></p>
  <p className='w-full  border-black border-1 mt-1'></p>

   {/* ---------------------------------Plans--------------------------- */}
   <tr>
  <td className='font-bold'>Firm Of Bussiness</td>
  <td>Plans</td>
  </tr>

  <tr>
  <td className='font-bold'>Private Limited Company</td>
  <td>
    <ul className="list-none ">
      <li><Link to ="/companyFormation"><button className="table-plans-btn">Start from 11,499</button></Link></li><br/>
      <li><Link to ="/companyFormation"><button className="table-plans-btn">Start from 10,499</button></Link></li><br/>
      <li><Link to ="/companyFormation"><button className="table-plans-btn">Start from 7999</button></Link></li>
      </ul>
    </td>
  </tr>

  <tr>
  <td className='font-bold'>Partnership Firm</td>
  <td><Link to ="/companyFormation"><button className="table-plans-btn">Start from 10,499</button></Link></td>
  </tr>

  <tr>
  <td className='font-bold'>Sole Proprietor</td>
  <td><Link to ="/companyFormation"><button className="table-plans-btn">Start from 10,499</button></Link></td>
  </tr>
  <p className='w-full  border-black border-1'></p>
  <p className='w-full  border-black border-1 mt-1'></p>

</table>
</div>
      ),
    },
  ];

  return(
    <>
    {/* <!-- -------------------------------------------------------------Pricing----------------------------------------------------------- --> */} 
    <div><a href='https://wa.me/919808030923'>
    <img src='WhatsappIcon.png' className='fixed w-[20%] md:w-[13%] lg:w-[10%] right-0 top-[520px] cursor-pointer z-10'/></a>
    </div>
  <div className="xl:mx-40 lg:mx-20 max-w-full py-32 lg:py-36 z-[-10]">
    <motion.h1 initial={{x:-100, opacity:0}}
whileInView={{x:0, opacity:1}}
transition={{delay:0.2, x:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
className="md:text-6xl text-4xl md:pb-16 text-center font-bold text-black">PRICING</motion.h1>
<motion.div initial={{y:100, opacity:0}}
whileInView={{y:0, opacity:1}}
transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}>
   <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-3 text-white bg-black pt-10 z-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-yellow-500 shadow-none rounded-none",
        }}
      >
        {data2.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-yellow-500 font-bold" : ""}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data2.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
    </motion.div>
   </div>

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
    placeholder="Enter Phone Number" 
  maxLength={10}
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
    placeholder='Enter your Phone Number' 
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
export default Pricing