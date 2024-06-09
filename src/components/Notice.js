import React, { useRef, useState } from 'react'
import {easeIn, motion} from "framer-motion";
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel,} from "@material-tailwind/react";
import { ToastContainer, Flip, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Notice(){
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

  
  return(
    <>
     <div><a href='https://wa.me/919808030923'>
    <img src='WhatsappIcon.png' className='fixed w-[20%] md:w-[13%] lg:w-[10%] right-0 top-[520px] cursor-pointer z-10'/></a>
    </div>
    <div className='text-center'>
    <motion.h1 
    initial={{y:-100, opacity:0}}
  animate={{y:0, opacity:1}}
  transition={{delay:0.10, y:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1}}
  className='md:text-6xl xl:text-7xl text-xl font-bold text-yellow-500 pt-40 text-center'>Income Tax Notice</motion.h1>
    <motion.h1
     initial={{y:100, opacity:0}}
  animate={{y:0, opacity:1}}
  transition={{delay:0.10, y:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1}}
  className='text-center font-bold text-4xl md:py-3 text-black'>Got an income tax notice?</motion.h1>
  <div className='text-center'>
   <p className='text-md text-black'>You don't need to stress over it. GoVyapar is here to help.</p>
   <p className='text-md text-black'>Addressing an income tax notice couldn't get easier!</p>
   </div>
   <form class="flex w-full md:py-4 pt-2 mt-3 justify-center">
       <input 
       type="tel" 
       placeholder="xxxx-xxx-xxx" 
       pattern='[0-9]{4}-[0-9]{3}-[0-9]{3}'
       name="tel" 
       required 
       class="text-white rounded-md bg-black items-center px-4 py-2 md:w- [20%] mr-2 focus:outline-none focus:ring-1 focus:ring-yellow-500" />
       <button 
       type="submit"
       class="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-md shadow-black-md text-sm hover:scale-105 duration-300 ease-in">Submit</button>
     </form>
   </div>

   {/* ----------------------------------------Are you filing an IT return because of the following reasons?-------------- */}
    <div class='bg-black max-w-full md:my-20 my-4 pb-3 md:px-32 px-3 mx-0 '>
    <img src='it notice.png' className=' px-20 md:px-0 md:float-right'></img>
    <motion.h1 
    initial={{x:-100, opacity:0}}
    whileInView={{x:0, opacity:1}}
    transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1}}
    class="sm:text-xl md:text-3xl xl:text-5xl md:pt-20 text-white font-bold  lg:px-10">Are you filing an IT return because of the following reasons?</motion.h1>
    <motion.p 
    initial={{x:-100, opacity:0}}
    whileInView={{x:0, opacity:1}}
    transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1}}
    className='text-md text-white md:pr-10 md:pt-3 lg:px-10'>Before worrying about an income tax notice from the tax department, you should know whether you are required to file a return. Here are the reasons you should do it:</motion.p>
    <motion.ul 
    initial={{x:-100, opacity:0}}
    whileInView={{x:0, opacity:1}}
    transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1}}
    className='text-md font-semibold text-white md:space-y-5 space-2 md:pt-20 pt-3 lg:px-10'>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500 md:text-xl"></i> Income exceeding the basic exemption limit</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500 md:text-xl"></i> More than Rs. 1 crore deposited in 'current' bank account</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500 md:text-xl"></i> More than Rs. 50 lakh deposited in 'savings' bank account</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500 md:text-xl"></i> TDS or TCS is exceeding Rs. 25,000</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500 md:text-xl"></i> Business turnover exceeding Rs. 60 lakh</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500 md:text-xl"></i> Professional income exceeding Rs. 10 lakh</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500 md:text-xl"></i> Electricity expenditure exceeding Rs. 1 lakh</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500 md:text-xl"></i> Spending more than Rs. 2 lakh on international travel</li>
        {/* <li><form class="w-full md:py-4 pt-2 mt-3 justify-center">
       <input type="tel" placeholder="Enter your Phone Number" name="tel" required class="border-2 border-yellow-500 text-white rounded-md bg-black items-center px-4 py-2 md:w- [20%] mr-2 focus:outline-none focus:ring-1 focus:ring-yellow-500" />
       <button type="submit" class="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-md shadow-black-md text-sm hover:scale-105 duration-300 ease-in">Submit</button>
     </form></li> */}
    </motion.ul>
    </div>

    {/* ------------------------------------When May Tax Payers Get An Income Tax Notice----------------------------- */}
    <div className='my-20 max-w-full mx-0 md:px-20 lg:px-40 px-3'>
    <img src='it notice2.png' className='xl:w-[50%] md:w-[60%] px-20 xl:pr-40 md:pt-32 md:float-right'></img>
    <motion.h1 initial={{x:-100, opacity:0}}
    whileInView={{x:0, opacity:1}}
    transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1}}
    class="xl:text-4xl md:text-3xl sm:text-xl xl:pl-40 pt-3 md:pt-40 text-black font-bold">When May Tax Payers Get An Income Tax Notice</motion.h1>
    <motion.p 
    initial={{x:-100, opacity:0}}
    whileInView={{x:0, opacity:1}}
    transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1}}
    className='text-md text-black xl:pl-40 xl:pr-10 md:pt-3'>Did you know that you can get an income tax notice for various reasons? Here are a few possibilities you should be aware of:</motion.p>
    <motion.ul 
    initial={{x:-100, opacity:0}}
    whileInView={{x:0, opacity:1}}
    transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1}}
    className='text-md justify-center xl:pl-40 font-semibold text-black md:space-y-3 space-2 md:pt-20 pt-3'>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500 md:text-xl"></i> Failing to file your ITR</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500 md:text-xl"></i> Not disclosing income or a part of it</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500 md:text-xl"></i> Errors or discrepancies in your returns</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500 md:text-xl"></i> TDS values and filed income tax returns show a mismatch</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500 md:text-xl"></i> Need to provide specific documents or information</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500 md:text-xl"></i> Investing in the spouse's name and not mentioning it in ITR</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500 md:text-xl"></i> Potential audit under section 143(1) of the IT Act</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500 md:text-xl"></i> Not reporting high-value transactions in the return</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500 md:text-xl"></i> Failing to report capital gains/losses from equity/debt investments</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500 md:text-xl"></i> Using a wrong income tax return form</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500 md:text-xl"></i> Tax evasions in previous financial years</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500 md:text-xl"></i> Income tax notice on not reporting sale/purchase of property</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500 md:text-xl"></i> Liability for the self-assessment tax</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500 md:text-xl"></i> Another other reason an assessing officer deems fit</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500 md:text-xl"></i> Mismatch with AIS/TIS</li>
        {/* <li><form class="w-full md:py-4 pt-2 mt-3 justify-center">
       <input type="tel" placeholder="Enter your Phone Number" name="tel" required class="text-white rounded-md bg-black items-center px-4 py-2 md:w- [20%] mr-2 focus:outline-none focus:ring-1 focus:ring-yellow-500" />
       <button type="submit" class="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-md shadow-black-md text-sm hover:scale-105 duration-300 ease-in">Submit</button>
     </form></li> */}
    </motion.ul>
    </div>

    {/* --------------------------------------Income Tax Notice- Types of ITR Notices------------------------------------------ */}
    <div className='my-20 max-w-full mx-0 xl:px-20 px-3'>
    <h1 class="md:text-3xl xl:text-4xl text-center sm:text-xl xl:px-60 pt-3 md:pt-20 text-black font-bold">Income Tax Notice- Types of ITR Notices</h1>
    <p className='text-md text-black xl:px-60 md:pt-3 text-justify'>A notice from the Income Tax Department is the last thing you want to deal with. But it is more common than you imagine. Whether you are a salaried professional, self-employed individual, or business owner, knowing about the different types of ITR notices can save you from stress down the road. Awareness makes it easy to comprehend a notice and seek help from an expert. No matter how daunting the situation is, a seasoned tax expert can be your savior. Here are a few types of IT notices you may expect.</p>

 {/* ------------------------------------------------------BASIC NOTICES------------------------ */}
    <h1 class="md:text-3xl lg:text-4xl sm:text-xl md:px-20 lg:pr-[560px] pt-3 md:mt-40 text-black font-bold pl-12 text-left">BASIC NOTICES:</h1>
    <img src='it notice3.jpg' className='xl:float-right hidden xl:block w-[30%] xl:pr-32'/>
    <motion.div 
    initial={{y:100, opacity:0}}
    whileInView={{y:0, opacity:1}}
    transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
    className="xl:pr-[590px] md:px-20 px-10 py-4">
    <ul className="grid grid-rows-5 md:grid-cols-2 md:grid-rows-3 gap-4">

    <li class="bg-yellow-500 p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-2xl text-black'>Notice under section 131</h1><hr/>
      <p className='text-sm font-bold text-black text-justify'>The assessing officer may serve a notice under this section if they consider that the taxpayer has concealed their income as a whole or a part thereof.</p>
    </li>

    <li class="bg-yellow-500 p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl text-black'>Notice sent under Section 139(9)</h1><hr/>
      <p className='text-sm font-bold text-black text-justify'>Filing a defective income tax return can land you an ITR notice under section 139 (9). Beware of errors such as missing information and the selection of the wrong ITR form.</p>
    </li>

    <li class="bg-yellow-500 p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl text-black'>Notice under Section 142(1)</h1><hr/>
      <p className='text-sm font-bold text-black text-justify'>You can expect an IT notice for a preliminary investigation if the AO finds a mismatch between your ITR and the information available to them.</p>
    </li>

    <li class="bg-yellow-500 p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl text-black'>Intimation under Section 143(1)</h1><hr/>
      <p className='text-sm font-bold text-black text-justify'>YAll taxpayers get an intimation u/s 143(1) as it is a computer-generated initial assessment. Rather than being a demand notice, it may show a potential refund.</p>
    </li>

    <li class="bg-yellow-500 p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl text-black'>Notice under Section 143(2) for scrutiny assessment u/s 143(3)</h1><hr/>
      <p className='text-sm font-bold text-black text-justify'>If the Tax Department wants to scrutinize your ITR, it will send you a notice u/s 143(2). You may get it within six months from the end of the financial year.</p>
    </li>
    </ul>
</motion.div>

    {/* ------------------------------------------------------Get Expert Guidance-------------------------------- */}
    <h1 class="xl:text-4xl md:text-3xl sm:text-xl md:px-20 xl:pl-[600px] md:pt-20 text-black font-bold text-left pt-5">Get Expert Guidance:</h1>
    <img src='it notice4.jpg' className='xl:block hidden xl:float-left w-[40%]'/>
    <motion.div 
    initial={{y:100, opacity:0}}
    whileInView={{y:0, opacity:1}}
    transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
    className="xl:pl-[560px] md:px-20 px-10 py-4">
    <ul className="grid grid-rows-8 md:grid-cols-4 md:grid-rows-2 gap-4">

    <li class="bg-yellow-500 p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1  ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl'>Notice under Section 148</h1><hr/>
      <p className='text-sm'>You may receive this type of notice if the assessing officer thinks that you have filed your ITR on a lower income or failed to file when the law mandated it.</p>
    </li>

    <li class="bg-yellow-500 p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 b ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl'>Notice under Section 156</h1><hr/>
      <p className='text-sm'>A notice under Section 156 is a reason to worry because it replicates a demand by the income tax department, such as a penalty, fine, tax, or any other dues.</p>
    </li>

    <li class="bg-yellow-500 p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl'>Notice under section 245</h1><hr/>
      <p className='text-sm'>Expect a notice under section 245 if the assessing officer finds that you have missed out on the tax payment for the previous financial year.</p>
    </li>

    <li class="bg-yellow-500 p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl'>High-Value Transaction (HVT) Notice</h1><hr/>
      <p className='text-sm'>A massive financial transaction such as a large cash deposit or property purchase can raise a red flag and lead to an IT notice.</p>
    </li>

    <li class="bg-yellow-500 p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl'>Risk Management Notice</h1><hr/>
      <p className='text-sm'>An issue like the omission of income, deductions claimed, or confirmation of refund claims causes tax authorities to serve a notice for rectification of these concerns.</p>
    </li>

    <li class="bg-yellow-500 p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl'>Form 67 Defects</h1><hr/>
      <p className='text-sm'>Have you claimed a deduction for the income of foreign companies? You may get a notice if the department finds errors in the submitted Form 67.</p>
    </li>

    <li class="bg-yellow-500 p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1  ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl'>26AS-AIS/TIS Mismatch</h1><hr/>
      <p className='text-sm'>A mismatch between 26AS and AIS/TIS can fetch you a notice because the department seeks clarification to ensure proper credit of taxes paid.</p>
    </li>

    <li class="bg-yellow-500 p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl'>RELIEF 90/90A/91</h1><hr/>
      <p className='text-sm'>Taxpayers receiving foreign income can claim relief under this provision to avoid double taxation. But they may get a notice to validate the claim.</p>
    </li>
    </ul>
</motion.div>

{/* --------------------------------------------------CALLING FOR INFORMATION AND SCRUTINY NOTICES----------------     */}
<h1 class="xl:text-4xl md:text-3xl sm:text-xl xl:px-60 md:pt-20 text-black font-bold text-center pt-5 max-w-full mx-0">CALLING FOR INFORMATION AND SCRUTINY NOTICES</h1>
<p className='text-md text-black xl:px-60 md:px-20 md:pt-3 text-center'>Information and scrutiny notices arise from previous filings and require verification of such claims in tax returns. These include:</p>
    <motion.div 
    initial={{y:100, opacity:0}}
    whileInView={{y:0, opacity:1}}
    transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
    className="xl:px-60 md:px-20 px-10 py-4">
    <ul className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-4">

    <li class="p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 bg-black ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl text-yellow-500'>Information Requests</h1>
      <p className='text-sm text-white'>The IT department may send a notice to taxpayers to verify certain details or claims in previous tax filings.</p>
    </li>

    <li class="p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 bg-black ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl text-yellow-500'>Limited Scrutiny</h1>
      <p className='text-sm text-white'>​Limited scrutiny refers to the in-depth checks of certain aspects of the tax return, requiring the taxpayer to provide additional documentation or explanations.</p>
    </li>

    <li class="p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 bg-black ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl text-yellow-500'>Full Scrutiny</h1>
      <p className='text-sm text-white'>A full scrutiny entails the comprehensive examination of the entire tax return to verify the accuracy and authenticity of a claim.</p>
    </li>
    </ul>
    </motion.div>

    {/* -------------------------------------------------------APPEAL AND EX-PARTE ORDER NOTICES---------------- */}
    <h1 class="xl:text-4xl md:text-3xl sm:text-xl xl:px-80 md:pt-20 text-yellow-500 font-bold text-center pt-5">APPEAL AND EX-PARTE ORDER NOTICES</h1>
    <p className='text-md text-black xl:px-80 md:pt-3 text-justify'>A disagreement between the taxpayers and tax authorities on tax-related decisions leads to an appeal. It entails a legal process to resolve the dispute and ensure fairness. Appeal cases can play a key role in interpreting tax laws and setting precedents for future cases.<br/>A taxpayer can file appeals for different reasons, such as:</p>
    <img src='notice2.jpg' className='md:w-[50%] px-20 xl:pr-60 md:float-right '></img>
    <motion.ul 
    initial={{x:-100, opacity:0}}
    whileInView={{x:0, opacity:1}}
    transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1}}
    className='text-md justify-center xl:px-80 font-semibold text-black md:space-y-3 space-2 md:pt-20 pt-3'>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500 md:text-xl"></i> Ex-Parte Orders</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500 md:text-xl"></i> Incorrect penalty raised by the IT department</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500 md:text-xl"></i> Incorrect Demand raised by department</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500 md:text-xl"></i> Rectification not considered</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500 md:text-xl"></i> Apparent mistake from record</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500 md:text-xl"></i> Any disallowance by CPC  true to the fact</li>
    </motion.ul>
    <br/>
    
    <p className='text-md text-black xl:px-80 md:pt-3 text-justify'>Appeal filing start with CIT(A). After an unfavourable outcome here, the taxpayer can file another one at the ITAT Tribunal and more at the High Court and Supreme Court if rejected every time. Once appeal is filed, you should respond to each and notice under :"E-Proceedings" Tab. Failure to respond an get you an Ex-Parte order.</p>
    {/* <form class="w-full md:py-4 pt-2 mt-3 text-center">
       <input type="tel" placeholder="Enter your Phone Number" name="tel" required class="text-white rounded-md bg-black items-center px-4 py-2 md:w- [20%] mr-2 focus:outline-none focus:ring-1 focus:ring-yellow-500" />
       <button type="submit" class="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-md shadow-black-md text-sm hover:scale-105 duration-300 ease-in">Submit</button>
     </form> */}

{/* -------------------------------------------------Notices include:----------------------------------------- */}
    <h1 class="xl:text-4xl md:text-3xl sm:text-xl xl:px-60 md:pt-20 text-yellow-500 font-bold text-center pt-5">Notices include:</h1>
    <motion.div 
    initial={{y:100, opacity:0}}
    whileInView={{y:0, opacity:1}}
    transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
    className="xl:px-80 md:px-20 px-10 py-4">
    <ul className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-4">

    <li class="p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 bg-black ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl text-yellow-500'>Appellate Notices</h1>
      <p className='text-sm text-white'>When someone disagrees with a decision of the department and wishes to file an appeal, they can expect an appellate notice.</p>
    </li>

    <li class="p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 bg-black ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl text-yellow-500'>Ex-Parte Orders</h1>
      <p className='text-sm text-white'>These notices indicate that a decision has been made without a person’s individual participation or compliance.</p>
    </li>

    <li class="p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 bg-black ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl text-yellow-500'>Seeking Rectification</h1>
      <p className='text-sm text-white'>Rectification notices seek the correction of errors or omissions in previous proceedings by submitting supporting documents.</p>
    </li>
    </ul>
    </motion.div>
    </div>
    
{/* ------------------------------------------------Pricing----------------------------------------- */}
<h4 className="md:text-xl text-sm pt-4 md:mt-20 font-bold text-yellow-500 text-center max-w-full ">PRICING PLAN</h4> 
    <h1 className="md:text-3xl text-xl font-bold text-black text-center md:py-4">Plans Based On Your Selection</h1>
    
  <div className="pricing-box-container grid md:grid-cols-3 grid-rows-1 justify-center lg:mx-20 md:px-10 xl:px-60 mx-0">
  <motion.div initial={{y:100, opacity:0}}
whileInView={{y:0, opacity:1}}
transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
className="pricing-box bg-yellow-500 text-center shadow-md rounded-md p-6 m-2 min-w-sm max-w-md h-auto pt-5 pb-20">
    <h5 className="text-lg font-bold text-black uppercase">Appeal Cases</h5>
      <p className="price text-4xl font-bold text-black">
        <sup className="text-base font-light text-black">₹</sup>
        25,399
        {/* <sub className="font-normal text-xl">/year</sub> */}
      </p>
      <p className="text-black py-2">Inclusive of Taxes</p>
      <ul className="features-list list-none pl-0 mt-4">
      <li className="text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>For 1st & 2nd Appeal
        </li>
        <li className="text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>Appeals that can be conducted through online tax portals, without requiring a physical visit
        </li>
        <li className="text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>ITAT Appeals will be charged separately, depending upon location & availability of tax consultant
        </li>
        <li className="text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>For cases where you cannot proceed with simple Rectification, Revise Return, Feedback
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
      <h5 className="text-lg font-bold text-white uppercase">Rectification / Revised / Defective</h5>
      <p className="price text-4xl font-bold text-white">
        <sup className="text-base font-light text-white">₹</sup>
        2,499
        {/* <sub className="font-normal text-xl">/year</sub> */}
      </p>
      <p className="text-white py-2">Inclusive of Taxes</p>
      <ul className="features-list list-none pl-0 mt-4">
      <li className="text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i>Applicable to rectifying defects, revisions, adjustments, HVT Notice, adjustments, Form 67 defects,26AS-AIS/TIS Mismatch etc.
        </li>
        <li className="text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i>Major overhauls or replacements beyond basic rectification
        </li>
        <li className="text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i>If the ITR plan fee is higher than the Notice fee, the higher of the two fees will be applicable
        </li>
        <li className="text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i>Full payment upfront
        </li>
        <li className="text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i>We aim to complete the service within 4 business days from the date of receiving the notice with all related documents
        </li>
        <li className="text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i>This pricing plan covers a two-time rectification / revise / defective service for each eligible customer.
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
  <h5 className="text-lg font-bold text-black uppercase">Routine Notice</h5>
      <p className="price text-4xl font-bold text-black">
        <sup className="text-base font-light text-black">₹</sup>
        899
        {/* <sub className="font-normal text-xl">/year</sub> */}
      </p>
      <p className="text-black py-2">Inclusive of Taxes</p>
      <ul className="features-list list-none pl-0 mt-4">
      <li className="text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>For providing a simple response and cross checking your filed ITR.
        </li>
        <li className="text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>Applicable for Risk Management Notices, Refund Re-issue, Simple Response to outstanding demands, E-Campaign Response etc
        </li>
        <li className="text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>For revise filing due to omission of income or taken incorrect deductions, plan will change accordingly
        </li>
        <li className="text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>For Agree/Disagree Responses.

        </li>
      </ul>
      <Link to ="/contact"><button className="btn-primary text-white bg-black hover:bg-black hover:shadow-md active:bg-black focus:bg-black focus:border-white px-4 py-2 rounded-md font-bold mt-4 uppercase transition ease-in-out duration-100">
        Choose Plan
      </button></Link>
</motion.div>

    <motion.div initial={{y:100, opacity:0}}
whileInView={{y:0, opacity:1}}
transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
 className="pricing-box bg-yellow-500 text-center shadow-md rounded-md p-6 m-2 min-w-sm max-w-md h-auto pt-5 pb-20">
    <h5 className="text-lg font-bold text-black uppercase">Scrutiny Cases</h5>
      <p className="price text-4xl font-bold text-black">
        <sup className="text-base font-light text-black">₹</sup>
        21,199
        {/* <sub className="font-normal text-xl">/year</sub> */}
      </p>
      <p className="text-black py-2">Inclusive of Taxes</p>
      <ul className="features-list list-none pl-0 mt-4">
      <li className="text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>Comprehensive services for scrutiny cases, including document review, preparation of responses.
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
      <h5 className="text-lg font-bold text-white uppercase">Calling For Information/Seeking Clarification</h5>
      <p className="price text-4xl font-bold text-white">
        <sup className="text-base font-light text-white">₹</sup>
        6,399
        <sub className="font-normal text-xl">/year</sub>
      </p>
      <p className="text-white py-2">Inclusive of Taxes</p>
      <ul className="features-list list-none pl-0 mt-4">
      <li className="text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i>Financial Transactions
        </li>
        <li className="text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i>Deductions
        </li>
        <li className="text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i>F&O Trades
        </li>
        <li className="text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i>Unreported Income
        </li>
        <li className="text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i>Misreported/ Underreported Income
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
  <h5 className="text-lg font-bold text-black uppercase">Scrutiny Cases (ITR Filed By GoVyapar)</h5>
      <p className="price text-4xl font-bold text-black">
        <sup className="text-base font-light text-black">₹</sup>
        12,699
        <sub className="font-normal text-xl">/year</sub>
      </p>
      <p className="text-black py-2">Inclusive of Taxes</p>
      <ul className="features-list list-none pl-0 mt-4">
      <li className="text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>Special rate for scrutiny cases where GoVyapar has already filed the Income Tax Return (ITR) on behalf of the client for that particular A.Y. only.
        </li>
      </ul>
      <Link to ="/contact"><button className="btn-primary text-white bg-black hover:bg-black hover:shadow-md active:bg-black focus:bg-black focus:border-white px-4 py-2 rounded-md font-bold mt-4 uppercase transition ease-in-out duration-100">
        Choose Plan
      </button></Link>
</motion.div>
</div>
{/* <form class="w-full md:py-4 pt-2 mt-3 text-center">
       <input type="tel" placeholder="Enter your Phone Number" name="tel" required class="text-white rounded-md bg-black items-center px-4 py-2 md:w- [20%] mr-2 focus:outline-none focus:ring-1 focus:ring-yellow-500" />
       <button type="submit" class="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-md shadow-black-md text-sm hover:scale-105 duration-300 ease-in">Submit</button>
     </form> */}

{/* ---------------------------------------------How to Deal With an Income Tax Notice---------------------------------------------- */}
<h1 class="xl:text-4xl md:text-3xl sm:text-xl xl:px-60 sm:pt-3 md:pt-10 xl:pt-20 text-yellow-500 font-bold text-center">How to Deal With an Income Tax Notice</h1>
<p className='text-md text-black xl:px-80 md:px-10 px-2 md:pt-3 text-justify md:text-center'>Have you got an income tax notification? Stay calm because a notice is not always a reason to stress about. Here are the steps to deal with a notice effectively:</p>
<div className="px-10 sm:px-32 md:px-5 lg:px-20 xl:px-40 py-4">
<motion.ul 
initial={{x:-100, opacity:0}}
whileInView={{x:0, opacity:1}}
transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1}}
className="grid grid-rows-1 md:grid-cols-5 md:grid-rows-1 gap-3 lg:gap-5">

    {/* <li className='flex space-x-6'> */}
    {/* <p className="rounded-full bg-transparent border-4 px-2 h-[40px] border-yellow-500 text-black text-2xl float-left font-bold"> 1 </p> */}
    <li class="bg-gradient-to-r from-gray-200 to-gray-100 p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 bg-black ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl'>Read the notice:</h1>
      <p className='text-sm'>You should understand what it means and why it has been sent in the first place</p>
    </li>
    {/* </li> */}

    {/* <li className='flex space-x-6'> */}
    {/* <p className="rounded-full bg-transparent border-4 px-2 h-[40px] border-yellow-500 text-black text-2xl float-left font-bold"> 2 </p> */}
    <li class="bg-gradient-to-r from-gray-200 to-gray-100 p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 bg-black ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl'>Check details:</h1>
      <p className='text-sm'>Dig deep to check if the notice has your correct name, address, PAN number, and assessment year</p>
    </li>
    {/* </li> */}

    {/* <li className='flex space-x-6'> */}
    {/* <p className="rounded-full bg-transparent border-4 px-2 h-[40px] border-yellow-500 text-black text-2xl float-left font-bold"> 3 </p> */}
    <li class="bg-gradient-to-r from-gray-200 to-gray-100 p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 bg-black ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl'>Look for discrepancies:</h1>
      <p className='text-sm'>Find out the reason for the notice being served by checking your income tax return for discrepancies</p>
    </li>
    {/* </li> */}

    {/* <li className='flex space-x-6'> */}
    {/* <p className="rounded-full bg-transparent border-4 px-2 h-[40px] border-yellow-500 text-black text-2xl float-left font-bold"> 4 </p> */}
    <li class="bg-gradient-to-r from-gray-200 to-gray-100 p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 bg-black ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl'>Respond to the ITR notice:</h1>
      <p className='text-sm'>Since there is an income tax notice time limit, responding before the deadline can save you from penalties and prosecutions</p>
    </li>
    {/* </li> */}

    {/* <li className='flex space-x-6'> */}
    {/* <p className="rounded-full bg-transparent border-4 px-2 h-[40px] border-yellow-500 text-black text-2xl float-left font-bold"> 5 </p> */}
    <li class="bg-gradient-to-r from-gray-200 to-gray-100 p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 bg-black ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl'>Seek expert help:</h1>
      <p className='text-sm'>Professional help is essential to ensure that your response is accurate and backed by adequate information</p>
    </li>
    {/* </li> */}
    </motion.ul>

    <motion.div 
    initial={{x:-100, opacity:0}}
    whileInView={{x:0, opacity:1}}
    transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1}}
    className="px-1 py-4 w-full mt-2 md:pt-40 md:mt-32 md:px-40 xl:px-60">
    <h1 class="lg:text-4xl md:text-3xl sm:text-xl pt-3 md:mt-10 text-yellow-500 font-bold text-right">Why Choose GoVyapar as Your Guide</h1>  
    <img src='notice3.jpg' className='md:w-0 w-[25%] relative top-10 float-right'/>    
    <img src='notice3.jpg' className='md:w-[50%] relative bottom-20 px-20 xl:px-32 w-0 md:float-left'></img>
    <p className='text-sm text-black md:pt-3 text-justify'>At GoVyapar, we offer reliable tax planning expertise with a few clicks.</p>
    <ol className=' list-decimal font-semibold'>

      <li>A copy of the notice</li>
      <li>TDS certificates (Form 16- Part A)</li>
      <li>Proof of Income source (Salary receipts, Form 16- Part B, etc)</li>
      <li>Investment Proof</li>
    </ol>
    </motion.div>
    <div class="grid grid-cols-1 grid-rows-1 border-1 white shadow-md rounded-md text-center p-1 md:mt-10 font-semibold">Did you a receive tax notice? Let us help you respond to the IT Department</div>
    </div>
   
     {/* ---------------------------------------------------FAQS------------------------------------------------------- */}

<section class=" text-black py-32 min-h-screen">
  <div class="container flex flex-col justify-center p-4 mx-auto md:p-8">
    <h2 class="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">Frequently Asked Questions</h2>
    <div class="flex flex-col divide-y sm:px-8 lg:px-20 xl:px-32 divide-yellow-600">
      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">What is an Income Tax Notice?</summary>
        <div class="px-4 pb-4 text-justify">
          <p>An Income Tax Notice is a communication from the Income Tax Department to the taxpayer for various reasons. The reasons may be related to: discrepancies in the ITR filed, requests for additional documents, or requests for taxpayer’s personal appearance. Income Tax Notices can be issued under various Sections of the Income Tax Act, and each Notice specifies the purpose for which it is issued, alongwith the response expected from the taxpayer.
            <br/>
            Receiving an Income Tax Notice may not always be a reason to worry. However, it does require an accurate and timely response to address the issue raised by the Income Tax Department.
          </p>
        </div>
      </details>
      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">How do I check my tax notice?
</summary>
        <div class="px-4 pb-4 text-justify">
          <p>An IT notice is delivered to the taxpayer’s registered email. It can also be checked through the income tax notification portal. However, the portal offers information only on some of the notices. For others, you have to visit the IT department. Remember to check the authenticity of the notices by using a quick link for “Authenticate notice/order issued by ITD” on the Income Tax website. At this point, it is also crucial to know your DIN to facilitate communication with the IT department.</p>
        </div>
      </details>

      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">Does a salaried person get an income tax notice?</summary>
        <div class="px-4 pb-4 text-justify">
          <p>Salaried professionals can also get an income tax notice. Most notices come up when there is a mismatch with 26AS/AIS/TIS or any omission of income.</p>
        </div>
      </details>

      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">What to do if I get a tax notice?</summary>
        <div class="px-4 pb-4">
          <p>Although an income tax notification can be stressful, you should stay calm and understand why it has been sent. If you have received it for missing out on information, you need to provide the details. Conversely, you will have to rectify errors if they are the reason for getting a notice. You must respond to the notice within the stipulated time to avoid possible penalties.</p>
        </div>
      </details>

      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">What happens if you don't respond to the tax notice?</summary>
        <div class="px-4 pb-4">
          <p>Not responding to the income tax notice may have different consequences according to the type of notice. Such consequences include penalties of up to INR 10,000 and imprisonment for up to one year.</p>
        </div>
      </details>

      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">What happens if I don't respond to the notice within 30 days?</summary>
        <div class="px-4 pb-4">
          <p>Failing to respond to the notice within 30 days can get you in trouble. The IT department will adjust the outstanding demand without giving you an opportunity to respond.</p>
        </div>
      </details>

      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">How do you reply to notice?</summary>
        <div class="px-4 pb-4">
          <p>Replying to an income tax notice is easy as you can do it online by visiting the official website of the income tax department. Log in, navigate to the compliance section, and respond to the notice.</p>
        </div>
      </details>

      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">What is an intimation letter from income tax?</summary>
        <div class="px-4 pb-4">
          <p>An intimation order/notice is issued by the income tax department under section 143(1) after the successful processing of your return. It includes the details of the information submitted at the time of tax filing and a corresponding column of the details available with the tax department. This intimation is sent within a year from the end of the financial year.</p>
        </div>
      </details>

      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">What does the code EXC 001 mean?</summary>
        <div class="px-4 pb-4">
          <p>EXC -001 means transactions beyond the permission of the IT Act. It is for monthly cash transactions higher than INR 10 lakh.</p>
        </div>
      </details>

      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">Do I get notices for current account transactions?</summary>
        <div class="px-4 pb-4">
          <p>Yes, you may get ITR notices for current account transactions. For example, any current bank account transaction exceeding Rs 50 lakhs in a financial year has to be disclosed. If you fail to do it, you may get notice for it.</p>
        </div>
      </details>

      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">What is the communication of the proposed adjustment u/s 143(1)(a)?</summary>
        <div class="px-4 pb-4">
          <p>It refers to any information by the IT department regarding adjustment against refund claimed in your income tax return, such as incorrect claim, arithmetical error, or disallowance of loss claimed. Such adjustment could relate to the outstanding demands of previous assessment years.</p>
        </div>
      </details>

      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">How can you rectify the discrepancy in u/s 143(1)?</summary>
        <div class="px-4 pb-4">
          <p>If any demand raised in the discrepancy in notice u/s 143(1) is correct, you should pay it. Conversely, you should file rectification u/s 154 (1) or a revised return if a mistake is apparent from the record. For a revision, click ‘e-file’ and choose ‘file income tax return’. For rectification, click ‘services’ and select the ‘rectification’ option from the menu.</p>
        </div>
      </details>

      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">How do I pay my tax on demand?</summary>
        <div class="px-4 pb-4">
          <p>Paying online is an easy way to clear your tax on demand. You can do it by accessing the e-filing website of the IT department and logging into your account. Check the amount of outstanding tax demand and pay directly under the "Response to Outstanding Tab" on the web portal.</p>
        </div>
      </details>

      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">How do you correct outstanding tax demand?</summary>
        <div class="px-4 pb-4">
          <p>Once again, you can do it by logging in to the official efiling website, going to the pending actions section, and selecting Response to Outstanding Tax Demand.</p>
        </div>
      </details>

      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">How long after filing tax returns can you expect an assessment notice?</summary>
        <div class="px-4 pb-4">
          <p>You can get a scrutiny assessment notice u/s 143(2) only up to six months from the end of the financial year.</p>
        </div>
      </details>

      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">How do I get my CPC income tax return?</summary>
        <div class="px-4 pb-4">
          <p>You get an ITRV (acknowledgment) on your registered mail ID soon after filing the ITR. You can also download it from your account on the official website.</p>
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
export default Notice