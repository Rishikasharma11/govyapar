import React, { useRef, useState } from 'react'
import {motion} from "framer-motion";
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { ToastContainer, Flip, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import RazorpayButton from './RazorpayButton';

const ItrFiling = () => {
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

      window.scrollTo(0,0);
  return (
    <div>
      <div className=' max-w-full'><a href='https://wa.me/919808030923'>
    <img src='WhatsappIcon.png' className='fixed w-[20%] md:w-[13%] lg:w-[10%] right-0 top-[520px] cursor-pointer z-10' alt='whatsapp icon'/></a>
    </div>
    <motion.div
  initial={{x:100, opacity:0}}
  animate={{x:0, opacity:1}}
  transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1}}
  className="container pt-40 mb-20  md:h-auto justify-center text-center mx-0  max-w-full scroll-smooth"> 
  <h1 className="text-4xl font-bold sm:text-7xl md:text-center text-center text-black pb-4 min-w-full">STRATEGIC TAX CONSULTING</h1>
  <h3 className="text-xl animate-bounce font-bold text-center md:text-center sm:text-4xl text-yellow-500">Trustworthy Tax Advice</h3>

  <form class="flex w-full md:py-4 pt-2 justify-center">
  <input 
  type="tel" 
  placeholder="Enter Phone Number" 
  maxLength={10}
  name="tel" 
  required 
  class="text-white rounded-md bg-black items-center px-4 py-2 md:w-[30%]  xl:w-[20%] w-full mr-2 focus:outline-none focus:ring-1 focus:ring-yellow-500" />
  <button 
  type="submit" 
  class="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-md shadow-black-md text-sm hover:scale-105 duration-300 ease-in">Start Filing</button>
  </form>

</motion.div>
{/* --------------------------------------------------------ITR FILING HEADING------------------------------- */}
      <div className=''> 
      <motion.p 
         initial={{y:100, opacity:0}}
         whileInView={{y:0, opacity:1}}
         transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
        className="text-center text-black font-medium md:py-10 max-w-full mx-0">
        <h1 className="md:text-4xl lg:text-5xl text-2xl text-bold">ITR FILING</h1>
      <p className="xl:px-80 lg:px-40 md:px-20 py-2 md:mx-0">Sit back and relax. Leave the stress of tax filing to us. Let our
      experts help you save maximum time & taxes.
     
    <div className='md:flex-col md:space-y-3 px-24 space-y-2 sm:px-16 lg:px-20 py-4'>

      <ul className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-8">

        <li class="bg-transparent p-3 cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105 border-1">
          <img src="itrfiling1.png" className='mx-auto xl:w-[50%] sm:w-[30%] md:w-[60%] lg:w-full' alt=''/>
        <h1 className='font-bold text-xl text-black'>1-1 Expert Assistance </h1>
       </li>

       <li class="bg-transparent p-3 cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105 border-1">
        <img src="itrfiling2.png" className='mx-auto xl:w-[50%] sm:w-[30%] md:w-[60%] lg:w-full' alt=''/>
      <h1 className='font-bold text-xl text-black'>Tax Return Preparation</h1>
       </li>

       <li class="bg-transparent p-3 cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105 border-1">
       <img src="itrfiling3.png" className='mx-auto xl:w-[50%] sm:w-[30%] md:w-[60%] lg:w-full' alt=''/>
      <h1 className='font-bold text-xl text-black'>Notices Management</h1>
       </li>
      </ul>
       
    </div> 
    </p> 
    </motion.p>

     {/* ----------------pricing plans itr filing----------- */}
    
     <h4 className="md:text-xl text-sm pt-4 font-bold text-yellow-500 text-center max-w-full">PRICING PLAN</h4> 
    <h1 className="md:text-3xl text-xl font-bold text-black text-center md:py-4">Plans Based On Your Selection</h1>
    
  <div className="pricing-box-container grid md:grid-cols-3 grid-rows-1 justify-center lg:mx-20 md:px-10 xl:px-60 mx-0">
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
      <li className="text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>Single & Multiple Employers
        </li>
        <li className="text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>Single & Multiple House Property
        </li>
        <li className="text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>Income from Other Sources
        </li>
        <li className="text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>Agriculture Income
        </li>
      </ul>
      <Link to = "/itrfileUpload"><button class="bg-black text-white uppercase font-bold py-2 px-4 rounded-md shadow-black-md text-sm hover:scale-105 duration-300 ease-in mt-4">
        Choose Plan
      </button></Link>
      {/* <RazorpayButton/> */}
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
      <li className="text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i>Single & Multiple Employers
        </li>
        <li className="text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i>Single & Multiple House Property
        </li>
        <li className="text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i>Business & Professional Income <br/> (Non Audit) Without B/S P/L*
        </li>
        <li className="text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i>Income from Other Sources
        </li>
      </ul>
      <Link to = "/contact"><button class="bg-yellow-500 text-white uppercase font-bold py-2 px-4 rounded-md shadow-black-md text-sm hover:scale-105 duration-300 ease-in mt-4">
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
      <li className="text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>Single & Multiple Employers
        </li>
        <li className="text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>Single & Multiple House Property
        </li>
        <li className="text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>Business & Professional Income <br/> (Non Audit) Without B/S P/L*
        </li>
        <li className="text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>Multiple Capital Gain Income
        </li>
      </ul>
      <Link to = "/contact"><button class="bg-black text-white uppercase font-bold py-2 px-4 rounded-md shadow-black-md text-sm hover:scale-105 duration-300 ease-in mt-4">
      Choose Plan
      </button></Link>
</motion.div>
</div>
</div>

    {/* ---------------------------------------------------Para-1-------------------------------------- */}
    <div class="container max-w-full xl:w-[70%] lg:relative xl:left-[18%] xl:px-20 mx-0 py-10 md:pt-20 scroll-smooth rounded-md">
      <img src='itr-filing-1.png' className='md:float-left md:pt-10 lg:pt-0 md:w-[45%]' alt=''></img>
      <h1 className="md:text-4xl text-xl text-bold text-yellow-500">Income Tax Return Filing:<br/> Streamline Your Tax Compliance</h1>
      <motion.div 
      initial={{x:-100, opacity:0}}
      whileInView={{x:0, opacity:1}}
      transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1}}
      className='md:flex-col md:space-y-3 space-y-2 lg:px-40 py-4 font-bold'>
      <div className='cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105'>
      <p><i className="fas fa-arrow-circle-right"></i> Effortless ITR filing</p>
      </div>

      <div className='cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105'>
      <p><i className="fas fa-arrow-circle-right"></i> Maximum Tax Savings</p>
       </div>
  
       <div className='cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105'>
       <p><i className="fas fa-arrow-circle-right"></i> Prompt Processing and Confirmation</p>
       </div>

       <div className='cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105'>
       <p><i className="fas fa-arrow-circle-right"></i> Enhanced Security Measures</p>
       </div>

       <div className='cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105'>
       <p><i className="fas fa-arrow-circle-right"></i> Expert Support at Your Fingertips</p>
       </div>
    </motion.div> 
      <button type="submit" class="border-yellow-500 border-2 bg-transparent hover:bg-yellow-500 text-black font-bold py-1 px-4 rounded-md shadow-black-md text-sm hover:scale-105 duration-300 ease-in">ITR Filing without delay <i className='fa fa-caret-right'></i></button>
    </div>

 {/* ----------------------Three Convenient Ways to File Your IT Return------------- */}
    <div class="md:pt-40 max-w-full justify-center md:px-10 mx-0">
    <h1 class="sm:text-xl md:text-3xl lg:text-4xl xl:px-60 pt-3 md:pt-20 text-yellow-500 font-bold text-center">Three Convenient Ways to File Your IT Return</h1>

    <motion.div 
    initial={{y:100, opacity:0}}
    whileInView={{y:0, opacity:1}}
    transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
    className="xl:px-80 px-10 py-4">
    <ul className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-4">

    <li class="bg-black p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl text-yellow-500'>Use a Digital Signature Certificate (DSC): </h1>
      <p className='text-sm text-white'>Streamline your e-filing process with a secure Digital Signature Certificate. This digital equivalent of your physical signature ensures authenticity and ease of ITR tax filing.</p>
    </li>

    <li class="bg-black p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl text-yellow-500'>E filing of income tax return without a DSC:</h1>
      <p className='text-sm text-white'>Choose the hassle-free option of e-filing without a Digital Signature Certificate. Generate an ITR-V form, print it, sign it, and send it to the Central Processing Centre (CPC), Bangalore within 30 days from e-filing. This option applies if Aadhaar details are not updated on the Income Tax site.</p>
    </li>

    <li class="bg-black p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl text-yellow-500'>E-file and Verify with Aadhaar or Bank: </h1>
      <p className='text-sm text-white'>Simplify your e-filing experience by verifying your tax return through your Aadhaar number or bank account. This eliminates the need to submit the ITR-V form to CPC.</p>
    </li>
    </ul>
    <p className='text-md text-black lg:px-20 md:pt-3 text-justify'>Ensure a smooth E filing of Income Tax Return process by having key documents readily available. These may include PAN, Aadhaar linked to PAN, bank account information, salary slips, rent receipts, Form 16, interest certificates, insurance and home loan details, investment information, and proof of additional income such as from property or capital gains.

    Relax, you don't need to stress about the process. Simply upload your necessary documents, and our team will handle the rest. We are your reliable partners, committed to guiding you at every juncture.<br/>
    <button type="submit" class="bg-yellow-500 hover:bg-yellow-400 text-black font-bold mt-3 py-2 px-4 rounded-md shadow-black-md text-sm hover:scale-105 duration-300 ease-in">Lets's Get Started <i className='fa fa-caret-right'></i></button></p>
    </motion.div>
    </div>

 {/* -------------------------------------Explore Tax-Saving Opportunities for ITR efiling----------------------------------------- */}
 <div className='container max-w-full md:pt-20 md:px-10 mx-0'> 
    <motion.div 
    initial={{x:-100, opacity:0}}
    whileInView={{x:0, opacity:1}}
    transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1}}
    className="xl:px-40 px-10 py-4 w-full mt-2 md:pt-40 md:mt-32">
  <img src='Tax-Planner4.jpg' className='lg:w-[50%] md:hidden xl:block sm:block px-20 lg:pl-40 md:float-left' alt=''></img>
 <h1 class="md:text-3xl sm:text-xl xl:px-10 pt-3 md:mt-10 text-yellow-500 font-bold">Explore Tax-Saving Opportunities for ITR efiling</h1>
    <p className='text-md text-black xl:px-20 md:pt-3 jusrify-center'>At GoVyapar, we offer reliable tax planning expertise with a few clicks.</p>
    <img src='Tax-Planner4.jpg' className='md:px-10 md:w-[60%] md:block sm:hidden xl:hidden md:float-right' alt=''></img>
    <ol className='xl:px-20 list-decimal font-semibold'>
      <li>GovVapar keeps you aligned to the ever-changing landscape of tax deductions.</li>
      <li>We offer specialized packages based on your income nature.</li>
      <li>Our solutions keep you well-informed about the latest provisions.</li>
      <li>We work aggressively to maximize your deductions effectively.</li>
      <li>With Tax Buddy, you can confidently manage your taxes, sustain the momentum of tax savings and meet demanding deadlines.</li>
      <button type="submit" class="border-yellow-500 mt-3 border-2 bg-transparent hover:bg-yellow-500 text-black font-bold py-1 px-4 rounded-md shadow-black-md text-sm hover:scale-105 duration-300 ease-in">Discover what's available for you <i className='fa fa-caret-right'></i></button>
    </ol>
   
    </motion.div>
    </div>      

{/* ------------------------------Leverage the Benefits of Strategic Return Filing with GoVyapar--------------------------- */}
<h1 class="md:text-4xl text-xl xl:px-72 pt-3 md:mt-20 text-yellow-500 font-bold text-center max-w-full md:px-10">Leverage the Benefits of Strategic Return Filing with GoVyapar</h1>
<p className='text-md text-black xl:px-80 lg:px-20 md:pt-3 text-justify md:px-10'>With GoVyapar, your exclusive access to tax planning information, you can maximize your financial potential. Our devoted team of experts offers tailored advice to people and enterprises, assisting you in:</p>
    <motion.div 
    initial={{x:-100, opacity:0}}
    whileInView={{x:0, opacity:1}}
    transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1}}
    className="lg:px-32 px-10 md:mt-10 py-4 xl:mx-60 rounded-md md:px-10">
    <img src="it-filing2.jpg" class="w-[50%] md:float-right" alt=''></img>
    <ul className="grid grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-4">

    <li class="bg-gradient-to-r from-yellow-400 to-yellow-700 p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 bg-black ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl'>Appellate Notices</h1>
      <p className='text-sm'>Produce a thorough tax report based on your investing activity.</p>
    </li>

    <li class="bg-gradient-to-r from-yellow-400 to-yellow-700 p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 bg-black ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl'>Ex-Parte Orders</h1>
      <p className='text-sm'>Receive thorough advice on investments that can lower your tax obligations.</p>
    </li>

    <li class="bg-gradient-to-r from-yellow-400 to-yellow-700 p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 bg-black ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl'>Seeking Rectification</h1>
      <p className='text-sm'>Obtain professional advice catered to your unique needs.</p>
    </li>

    <li class="bg-gradient-to-r from-yellow-400 to-yellow-700 p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 bg-black ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl'>Seeking Rectification</h1>
      <p className='text-sm'>One location for all tax planning (individual, business, NRI, capital gain)</p>
    </li>
    </ul>
    <div className='md:pt-10 pt-4 pb-5'>
    <button type="submit" class="border-yellow-500 border-2 bg-transparent hover:bg-yellow-500 text-black font-bold py-1 px-4 rounded-md shadow-black-md text-sm hover:scale-105 duration-300 ease-in">Begin ITR Filing <i className='fa fa-caret-right'></i></button>
    </div>
    </motion.div>

{/* ------------------------------Discover Why Early E-Filing ITR Filing is a Smart Move!--------------------------- */}
<div className='container md:mt-20 bg-black  max-w-full mx-0'>
<h1 class="md:text-4xl text-xl xl:px-60 pt-3 md:mt-20 text-yellow-500 font-bold text-center">Discover Why Early E-Filing ITR Filing is a Smart Move!</h1>
    <motion.div 
    initial={{y:100, opacity:0}}
    whileInView={{y:0, opacity:1}}
    transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
    className="md:px-20 px-10 md:mt-10 py-4 xl:mx-60 rounded-md">
    <ul className="grid grid-rows-4 md:grid-cols-4 md:grid-rows-1 gap-4">

    <li class="bg-white p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-md'>Timely E-filing for Prompt Refunds</h1>
      <p className='text-sm'>Timely e-filing expedites verification, ensuring prompt refunds.</p>
    </li>

    <li class="bg-white p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1  ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-md'>Penalty-Free Tax Filing</h1>
      <p className='text-sm'>Stay clear of penalties by filing your taxes accurately and on time.</p>
    </li>

    <li class="bg-white p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-md'>Defective Return Notice Prevention</h1>
      <p className='text-sm'>Avoid receiving a Defective Return Notice through accurate tax filing.</p>
    </li>

    <li class="bg-white p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1  ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-md'>Escape the Last-Minute Filing Rush</h1>
      <p className='text-sm'>Say goodbye to the commotion of the last-minute tax filing rush.</p>
    </li>
    </ul>
    </motion.div>
    <div className='md:py-10 pb-3 text-center'>
    <button type="submit" class="border-yellow-500 border-2 bg-white hover:bg-yellow-500 text-black font-bold py-1 px-4 rounded-md shadow-black-md text-sm hover:scale-105 duration-300 ease-in">Begin ITR Filing <i className='fa fa-caret-right'></i></button>
    </div>
    </div>

{/* ------------------------------------Leverage the Benefits of Strategic Return Filing with GoVyapar------------------------------------------ */}
<h1 class="md:text-4xl text-xl xl:px-80 pt-3 md:mt-20 text-yellow-500 font-bold text-center max-w-full mx-0 md:px-10">Leverage the Benefits of Strategic Return Filing with GoVyapar</h1>
    <motion.div 
    initial={{x:-100, opacity:0}}
    whileInView={{x:0, opacity:1}}
    transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1}}
    className="xl:px-[200px] px-10 md:mt-10 py-4 xl:mx-80 lg:mx-60 md:mx-32 rounded-md">
    <ul className="grid grid-rows-5 gap-4">

    <li className='flex space-x-6'>
    <p className="rounded-full bg-transparent border-4 px-2 h-[40px] border-yellow-500 text-black text-2xl float-left font-bold"> 1 </p>
    <li class="bg-gradient-to-r from-yellow-400 to-yellow-700 p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 bg-black ease-in duration-300 hover:scale-105 float-right">
      <h1 className='font-bold text-xl'>Assuredly maximize your returns</h1>
      <p className='text-sm'>By filing your income tax return (ITR) on time, you can ensure that you claim all eligible deductions and exemptions, optimizing your potential tax savings.</p>
    </li>
    </li>

    <li className='flex space-x-6'>
    <p className="rounded-full bg-transparent border-4 px-2 h-[40px] border-yellow-500 text-black text-2xl float-left font-bold"> 2 </p>
    <li class="bg-gradient-to-r from-yellow-400 to-yellow-700 p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 bg-black ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl'>Build financial credibility</h1>
      <p className='text-sm'>Filing your ITR regularly establishes a record that can enhance your credibility when applying for loans or seeking better financial opportunities.</p>
    </li>
    </li>
    
    <li className='flex space-x-6'>
    <p className="rounded-full bg-transparent border-4 px-2 h-[40px] border-yellow-500 text-black text-2xl float-left font-bold"> 3 </p>
    <li class="bg-gradient-to-r from-yellow-400 to-yellow-700 p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 bg-black ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl'>Avoid penalties consistently</h1>
      <p className='text-sm'>Timely ITR filing helps you steer clear of penalties and legal complications.</p>
    </li>
    </li>

    <li className='flex space-x-6'>
    <p className="rounded-full bg-transparent border-4 px-2 h-[40px] border-yellow-500 text-black text-2xl float-left font-bold"> 4 </p>
    <li class="bg-gradient-to-r from-yellow-400 to-yellow-700 p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 bg-black ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl'>Track your financial progress</h1>
      <p className='text-sm'>Filing your ITR provides valuable insights into your income, expenses, and investments, allowing you to make informed decisions.</p>
    </li>
    </li>

    <li className='flex space-x-6'>
    <p className="rounded-full bg-transparent border-4 px-2 h-[40px] border-yellow-500 text-black text-2xl float-left font-bold"> 5 </p>
    <li class="bg-gradient-to-r from-yellow-400 to-yellow-700 p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 bg-black ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl'>Expedite visa processing</h1>
      <p className='text-sm'>Consistent ITR filing history can expedite processing of your visa applications, expanding your chances of obtaining international travel opportunities.</p>
    </li>
    </li>
    </ul>
    </motion.div>
    <div className='md:pt-10 pb-5 text-center'>
    <button type="submit" class="border-yellow-500 border-2 bg-transparent hover:bg-yellow-500 text-black font-bold py-1 px-4 rounded-md shadow-black-md text-sm hover:scale-105 duration-300 ease-in">Begin ITR Filing <i className='fa fa-caret-right'></i></button>
    </div>

{/* ----------------------------------Access Valuable Benefits by Filing Your Income Tax Return--------------------------------- */}
<h1 class="md:text-4xl text-xl xl:px-80 pt-3 md:mt-20 text-yellow-500 font-bold text-center md:px-10">Access Valuable Benefits by Filing Your Income Tax Return</h1>
    <motion.div 
    initial={{y:100, opacity:0}}
    whileInView={{y:0, opacity:1}}
    transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
    className="lg:px-32 px-10 md:mt-10 py-4 xl:mx-60 rounded-md md:px-10">
    <ul className="grid grid-rows-6 md:grid-cols-3 md:grid-rows-2 gap-4 text-white">

    <li class="bg-black p-4 shadow-md rounded-l-lg cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl text-yellow-500'>Acts as Legal Proof:</h1>
      <p className='text-sm text-justify'>Income Tax Return serves as a legal document, serving as proof in two ways: a) Identity Proof: It can be used as identity proof, accepted by the government for various purposes, including obtaining an AADHAAR card. b) Income Proof: The ITR form contains detailed information on incomes and expenses, serving as income proof for transactions like property purchases.</p>
    </li>

    <li class="bg-black p-4 shadow-md  cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl text-yellow-500'>Claim Deductions:</h1>
      <p className='text-sm text-justify'>Filing an income tax return allows you to claim deductions, reducing the tax burden. These deductions can be availed through investments and can include TDS and rebates.</p>
    </li>

    <li class="bg-black p-4 shadow-md rounded-r-lg cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl text-yellow-500'>Document for Loans:</h1>
      <p className='text-sm text-justify'>Income tax returns are essential when applying for loans. Banks and credit card companies require ITR as proof of income and financial stability before approving loans or issuing credit cards.</p>
    </li>

    <li class="bg-black p-4 shadow-md rounded-l-lg cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl text-yellow-500'>Requirement for Going Abroad:</h1>
      <p className='text-sm text-justify'>Filing ITR is necessary when planning to go abroad. Many countries require ITR as part of the documentation process for visa approval, as it showcases financial history and provides details to the embassy.</p>
    </li>

    <li class="bg-black p-4 shadow-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl text-yellow-500'>Avoid Penalties:</h1>
      <p className='text-sm text-justify'>Failure to file Income Tax Returns, despite being eligible to pay taxes, can lead to penalties and punishments. The Income Tax Act 1961 allows for penalties of up to Rs 5000 and other serious consequences for non-compliance.</p>
    </li>

    <li class="bg-black p-4 shadow-md rounded-r-lg cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl text-yellow-500'>Carry Forward Losses:</h1>
      <p className='text-sm text-justify'>The Income-tax Act 1961 allows for the carrying forward of losses from one year to the next (under Sections 70 and 71). This provision enables taxpayers to offset losses against future income.</p>
    </li>
    </ul>
    </motion.div>
    <div className='md:pt-10 pb-5 text-center'>
    <button type="submit" class="border-yellow-500 border-2 bg-transparent hover:bg-yellow-500 text-black font-bold py-1 px-4 rounded-md shadow-black-md text-sm hover:scale-105 duration-300 ease-in">Begin ITR Filing <i className='fa fa-caret-right'></i></button>
    </div>

{/* -----------------------------------------------------Articles----------------------------------------------------- */}
<motion.div 
initial={{y:100, opacity:0}}
whileInView={{y:0, opacity:1}}
transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
class="container max-w-full mt-20 pt-10 mx-0 scroll-smooth">
  <h1 className='text-3xl md:text-4xl text-center py-5 font-bold text-black leading-tight'>Articles</h1>
  <div className='md:px-10'>
  <ul className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-4 xl:px-40">

<li class="cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105 shadow-md rounded-lg ">
  <img src="itr-for-professionals.png" className='md:px-20 px-28' alt=''/>
  <div className="p-3">
  <h1 className='text-yellow-500 font-bold text-2xl'>Understanding the Importance of ITR Filing:</h1>
  <p className='text-sm text-black text-justify p-1'>ITR filing is not just a legal obligation; it's an opportunity for individuals and businesses to assess their financial health, declare their income, and claim tax deductions and exemptions. Filing ITR accurately and on time not only helps avoid penalties and legal repercussions but also serves as a tool for financial planning and wealth management. By maintaining comprehensive records of income and expenses, taxpayers can gain valuable insights into their financial standing and make informed decisions to optimize their tax liabilities.</p>
  </div>
</li>

<li class="cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105 shadow-md rounded-lg bg-black">
<img src="itr-e-filing.png" className='md:px-20 px-28' alt=''/>
  <div className="p-3">
  <h1 className='text-yellow-500 font-bold text-2xl'>Utilizing Online Platforms for ITR Filing:</h1>
  <p className='text-sm text-white text-justify p-1'>With the advent of technology, filing ITR has become more convenient and accessible than ever before. Online platforms and e-filing portals provided by the Income Tax Department offer a user-friendly interface for taxpayers to file their returns from the comfort of their homes. These platforms also provide guidance and assistance at every step of the filing process, making it easier for individuals and businesses to comply with tax laws and regulations.
  </p> 
  </div>
</li>

<li class="cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105 shadow-md rounded-lg ">
<img src="itr-for-traders.png" className='md:px-20 px-28' alt=''/>
  <div className="p-3">
  <h1 className='text-yellow-500 font-bold text-2xl'>Utilizing Online Platforms for ITR Filing:</h1>
  <p className='text-sm text-black text-justify p-1'>With the advent of technology, filing ITR has become more convenient and accessible than ever before. Online platforms and e-filing portals provided by the Income Tax Department offer a user-friendly interface for taxpayers to file their returns from the comfort of their homes. These platforms also provide guidance and assistance at every step of the filing process, making it easier for individuals and businesses to comply with tax laws and regulations.
  </p>
  </div>
</li>
</ul>
  </div>
</motion.div>

{/* ---------------------------------------------------FAQS------------------------------------------------------- */}

<section class=" text-black py-32 min-h-screen">
  <div class="container flex flex-col justify-center p-4 mx-auto md:p-8">
    <h2 class="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">Frequently Asked Questions</h2>
    <div class="flex flex-col divide-y sm:px-8 lg:px-20 xl:px-32 divide-yellow-600">
      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">What is Income Tax e-Filing?</summary>
        <div class="px-4 pb-4 text-justify">
          <p>Income tax e-filing refers to the facility through which taxpayers can electronically file their Income Tax Returns (ITR) using the internet. This can be attributed to the convenience whereby taxes can be filed from home or elsewhere using the internet. One does not need to move from one place to another, thus eliminating the need to visit the physical tax office, with the respective paperwork. This will quicken the whole process because the tax details will be uploaded directly to the Income Tax Department website. This will, in turn, ensure timely processing of your return. In effect, may ensure quicker processing and earlier issuance of any tax refunds due.</p>
        </div>
      </details>
      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">Who is Required to File an Income Tax Return?</summary>
        <div class="px-4 pb-4 text-justify">
          <p>Filing an income tax return is mandatory for some, but not all individuals. This quick checklist will help you determine whether you must file one or not.
            <ul className='list-disc text-justify'>
              <li>If your total income before deductions is more than the exemption limit, you are supposed to file a tax return. Exemption limit is a predetermined income threshold which is not subject to tax.</li>
              <li>Senior citizens are benefited with a higher exemption limit. Thus, they are not supposed to file an ITR till they exceed their threshold limit.</li>
              <li>If you're an NRI (Non-Resident Indian), you must file a tax return if your income generated in India is above the exemption limit. </li>
              <li>Even if the income is below the income tax limit, filing a tax return is fruitful to take loans or get visas.</li>
            </ul>
          </p>
        </div>
      </details>
      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">What are the Steps to File an Income Tax Return?</summary>
        <div class="px-4 pb-4 text-justify">
          <p>Filing your Income Tax Return online, also known as ITR filing online, is simple. You'll need to use the income tax portal and might need Form 16 if you're employed. Here's how:
            <br/>
            <br/>
            <h3 className="font-bold">Step 1: Register or Log In</h3>
            <ul className='list-disc text-justify'>
              <li>Visit the Income Tax e-filing portal.</li>
              <li>If you're new, register using your PAN (Permanent Account Number). If you already have an account, just log in.</li>
            </ul>
            <br/>
            <h3 className="font-bold">Step 2: Prepare Your Documents</h3>
            <ul className='list-disc text-justify'>
              <li>Get your documents ready. This includes your PAN, Aadhaar, bank account details, and Form 16 (if you have one). Form 16 is given by your employer and has details about the tax deducted from your salary.</li>
            </ul>
            <br/>
            <h3 className="font-bold">Step 3: Choose the Right ITR Form</h3>
            <ul className='list-disc text-justify'>
              <li>Select the ITR form that fits your income situation. There are different forms for different types of income.</li>
            </ul>
            <br/>
            <h3 className="font-bold">Step 4: Fill in Your Details</h3>
            <ul className='list-disc text-justify'>
              <li>Once you have the right form, start filling in your details. This includes personal information, income details, deductions, and taxes paid.</li>
            </ul>
            <br/>
            <h3 className="font-bold">Step 5: Double-Check Your Information</h3>
            <ul className='list-disc text-justify'>
              <li>It's really important to make sure all the information you entered is correct. Double-check to avoid any mistakes.</li>
            </ul>
            <br/>
            <h3 className="font-bold">Step 6: Submit Your ITR</h3>
            <ul className='list-disc text-justify'>
              <li>After checking, submit your ITR. You can do this directly on the portal.</li>
            </ul>
            <br/>
            <h3 className="font-bold">Step 7: E-Verify</h3>
            <ul className='list-disc text-justify'>
              <li>The last step is to e-verify your return. You can do this through the portal using different methods like Aadhaar OTP, net banking, or a digital signature.</li>
            </ul>
            </p>
        </div>
      </details>
      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">What is the Difference Between TDS Filing and ITR Filing</summary>
        <div class="px-4 pb-4">
          <p>TDS (Tax Deducted at Source) is a system where tax is deducted by the payer at the time of making payments. It is applicable to various payment types such as salaries, interest, rent, and professional fees. After deducting TDS, the payer has to file the TDS return. By filing the TDS return, the payer provides all the details of TDS deductions, PAN of deductees, and tax deposited to the government.

          ITR filing involves submission of the income tax return to the Income Tax Department, mentioning the details of income, deductions, and tax liability for the specified period. The Income Tax Return can be filed through the e-filing portal of the Income Tax Department or through other online tax filing portal. It is important to file the ITR within the timeline to ensure legal compliance and avoid penalties.</p>
        </div>
      </details>
      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">What Documents Are Required for ITR Filing?</summary>
        <div class="px-4 pb-4">
          <p>When you're getting ready to file your Income Tax Return (ITR filing), having the right documents by your side makes everything smoother. Here’s a checklist to help you prepare:
          <ul className='list-disc text-justify'>
            <li>PAN (Permanent Account Number): Your identity proof for all things tax.</li>
            <li>Aadhaar Card: Needed for linking with your PAN and for verification.</li>
            <li>Bank Account Details: To process any refunds you might get.</li>
            <li>Form 26AS: Shows the tax that's been deducted from your income and paid to the government on your behalf. It helps you know how much tax you've already paid.</li>
            <li>TDS Certificates: If tax was deducted from your income, like from your salary or interest earnings, you'd get these certificates. They’re also known as Form 16 (for salary) and Form 16A (for other incomes).</li>
            <li>Income Proof: This could be salary slips, interest certificates from banks, or income statements if you’re self-employed.</li>
            <li>Deductions and Exemptions Proof: Documents showing investments or expenses that can reduce your taxable income, like insurance, educational loans, or house rent.</li>
            </ul>
            Gathering these documents before you start your ITR filing can save you time and help avoid errors.
          </p>
        </div>
      </details>
      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">What Are the Benefits of eFiling Income Tax?</summary>
        <div class="px-4 pb-4">
          <p>eFiling Income Tax means sending your tax details to the Government of India online. This way is super easy and saves a lot of time. Let's look at why it's great:
          <ul className='list-disc text-justify'>
            <li>Quick and Easy: You can do it from home, anytime. No need to stand in long lines!</li>
            <li>Faster Refunds: Get your tax refund quicker. The system processes online forms faster than paper ones.</li>
            <li>Safe and Secure: The Income Tax Department makes sure your information is protected.</li>
            <li>Always Open: You can file your taxes day or night, any day of the week.</li>
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
        <li className='font-semibold text-white text-lg'><i class="fa fa-envelope text-yellow-500"> </i> govyapar@gmail.com/</li>       

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
    </div>
  )
}

export default ItrFiling
