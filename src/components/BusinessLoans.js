import React, { useRef, useState } from 'react'
import {motion} from "framer-motion";
import { storage } from '../firebase.config';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { ToastContainer, Flip, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BusinessLoans () {
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

  return (
    <>
{/* -----------------------------------Business Loan-------------------------- */}
<motion.section
    initial={{x:-100, opacity:0}}
    whileInView={{x:0, opacity:1}}
    transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1}}
    className='container max-w-full mx-0 pt-32 md:pt-40 md:px-10 xl:px-36 scroll-smooth'>
  <div className='md:float-right md:pl-10 md:w-[60%] md:block hidden'>
      <h1 className='pb-3 text-left text-xl sm:text-2xl lg:text-2xl font-bold text-yellow-500 leading-tight md:px-10'>Unlock Best Business Loan Offers for meeting your Capital Requirements</h1>
        <motion.ul
       initial={{x:-100, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
        class="text-lg font-semibold text-black space-y-2 md:px-10">
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500"></i> Best Offers from 10+ lenders</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500"></i> Hassle-Free Documentation</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500"></i> Quick Disbursal</li>
      </motion.ul>
      <form class="space-y-2 md:px-10 pt-10">
            <lable>Mobile Number</lable><br/>
      <input 
      type="text" 
      placeholder="Enter Phone Number" 
      maxLength={10}
      name="Number" 
      // value={number.Number} 
      required 
      // onChange={numberData}
      class="text-black border-1 border-black items-center py-2 w-[60%] mr-2" /><br/>
      <button 
      onClick={NumberNotify}
      type="submit" 
      class="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-md shadow-black-md text-sm hover:scale-105 duration-300 ease-in">Proceed</button>
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
      </div>
      <div className=''>
      <h1 className='pb-5 text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-500 leading-tight md:hidden block'>Business Loan</h1>
      
        <h1 className='text-4xl md:text-4xl lg:text-6xl font-bold text-yellow-500 leading-tight md:block hidden'>Business Loan</h1>
    
        <p className='text-md lg:text-lg text-justify pt-4'>
        Every business needs capital to grow and at Govyapar, we ensure you get the best of what you need. Whether you are launching or expanding your business, we pledge to give you best business loan offers.
        </p>
        <br/>
        <img src="Business Loan main.jpg" className='md:w-[40%] lg:w-[30%] px-4 pt-2'/>
  </div>

  <div className='md:float-right md:pl-10 md:w-[60%] md:hidden block'>
      <form class="space-y-2 md:px-10">
            <lable>Mobile Number</lable><br/>
      <input 
      type="text" 
      placeholder="Enter Phone Number" 
      maxLength={10}
      name="Number" 
      // value={number.Number} 
      required 
      // onChange={numberData}
      class="text-black border-1 border-black items-center py-2 w-full mr-2" /><br/>
      <button 
      onClick={NumberNotify}
      type="submit" 
      class="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-md shadow-black-md text-sm hover:scale-105 duration-300 ease-in">Proceed</button>
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
      <h1 className='text-md font-semibold text-yellow-500 md:px-10'>Features & Benefits</h1>
      <motion.ul
       initial={{x:-100, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
        class="text-sm font-semibold text-black md:px-10">
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500"></i> Both secured & unsecured loans are available</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500"></i> Loan amount: Unsecured loan - Up to Rs 1 crore; Secured loans - Up to Rs 5 crore</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500"></i> Loan tenure: Unsecured loan – Up to 5 years; Secured loans - Up to 15 years</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500"></i> Unsecured loan facilities include term loans & working capital loans</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500"></i> Secured loan facilities include Cash Credit A/c & Working Capital Loans</li>
      </motion.ul>

      <h1 className='text-md font-semibold text-yellow-500 md:px-10'>Business Loan Eligibility</h1>
      <motion.ul
       initial={{x:-100, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
        class="text-sm font-semibold text-black md:px-10">
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500"></i> Age: 21 - 60 years</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500"></i> Business Vintage:1 year & above</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500"></i> Credit Score: A credit score of 675 & above increase the chances of loan approval and at lower interest rates</li>
      </motion.ul>
      </div>
    </motion.section>

{/* ----------------------------------------Features & Benefits----------------------------- */}
<div className='container max-w-full mx-0 md:mt-20 xl:pl-60 pt-20 xl:px-60 md:px-32 scroll-smooth items-center'>
  <h1 className='text-md lg:text-xl text-center font-semibold text-yellow-500'>Features & Benefits</h1>
  <motion.ul 
    initial={{y:100, opacity:0}}
    whileInView={{y:0, opacity:1}}
    transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.}, ease:"easeIn", duration:1}}
    className="grid grid-rows-5 md:grid-cols-1 md:grid-rows-5 lg:grid-cols-1 gap-2 pt-2">

    <li class="p-3 shadow-lg rounded-md cursor-pointer md:hover:-translate-x-1 border-1 border-black ease-in duration-300 hover:scale-105">
      <p className='text-sm text-black'>Both secured & unsecured loans are available</p>
    </li>

    <li class="p-3 shadow-lg rounded-md cursor-pointer md:hover:-translate-x-1 border-1 border-black ease-in duration-300 hover:scale-105">
      <p className='text-sm text-black'>Loan amount: Unsecured loan - Up to Rs 1 crore; Secured loans - Up to Rs 5 crore</p>
    </li>

    <li class="p-3 shadow-lg rounded-md cursor-pointer md:hover:-translate-x-1 border-1 border-black ease-in duration-300 hover:scale-105">
      <p className='text-sm text-black'> Loan tenure: Unsecured loan – Up to 5 years; Secured loans - Up to 15 years</p>
    </li>

    <li class="p-3 shadow-lg rounded-md cursor-pointer md:hover:-translate-x-1 border-1 border-black ease-in duration-300 hover:scale-105">
      <p className='text-sm text-black'>Unsecured loan facilities include term loans & working capital loans.</p>
    </li>

    <li class="p-3 shadow-lg rounded-md cursor-pointer md:hover:-translate-x-1 border-1 border-black ease-in duration-300 hover:scale-105">
      <p className='text-sm text-black'>Secured loan facilities include Cash Credit A/c & Working Capital Loans</p>
    </li>
    </motion.ul>
    

    <h1 className='text-md lg:text-xl text-center font-semibold text-yellow-500 pt-10'>Business Loan Eligibility</h1>
    <motion.ul 
    initial={{y:100, opacity:0}}
    whileInView={{y:0, opacity:1}}
    transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.}, ease:"easeIn", duration:1}}
    className="grid grid-rows-3 md:grid-cols-1 md:grid-rows-3 lg:grid-cols-1 gap-2 pt-2">
        <li class="p-3 shadow-lg rounded-md cursor-pointer md:hover:-translate-x-1 border-1 border-black ease-in duration-300 hover:scale-105">
      <p className='text-sm text-black'> Age: 21 - 60 years</p>
    </li>

    <li class="p-3 shadow-lg rounded-md cursor-pointer md:hover:-translate-x-1 border-1 border-black ease-in duration-300 hover:scale-105">
      <p className='text-sm text-black'>Business Vintage:1 year & above</p>
    </li>

    <li class="p-3 shadow-lg rounded-md cursor-pointer md:hover:-translate-x-1 border-1 border-black ease-in duration-300 hover:scale-105">
      <p className='text-sm text-black'>Credit Score: A credit score of 675 & above increase the chances of loan approval and at lower interest rates</p>
    </li>
    </motion.ul>
      </div>
    {/* ------------------------------------------------Apply now in 3 easy steps:--------------------------------- */}
    <motion.section 
        initial={{x:-100, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
        className='container max-w-full mx-0 md:mt-20 xl:pl-60 pt-20 xl:px-40 md:px-16 scroll-smooth'>
        <img src="./Business mail steps.jpg" className='md:float-right md:w-[40%] lg:w-[45%] lg:px-20 xl:px-32'/>
        <h1 className='text-lg md:text-2xl font-semibold text-yellow-500'>Apply now in 3 easy steps:</h1>
        <p><motion.ul
       initial={{x:-100, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
        class="text-lg font-semibold text-black pt-3 overflow-hidden">
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500"></i> Enter your personal, business & bank details to get a fair loan offer</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500"></i> Accept the loan offer & complete your documentation & KYC</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500"></i> Choose from flexible repayment options and start receiving funds</li>
      </motion.ul>
    </p>
    </motion.section>

    {/* -------------------------------------------Why Govyapar---------------------------------- */}
    <section  className='container max-w-full mx-0 mt-5 md:mt-20 pt-10 xl:px-40 py-4 md:px-20 scroll-smooth bg-black overflow-hidden'>
             <h1 className='text-2xl md:text-3xl font-semibold text-center text-yellow-500 pb-5'>Why Govyapar</h1>
             <motion.ul 
             initial={{x:-100, opacity:0}}
             whileInView={{x:0, opacity:1}}
             transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
             className='grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-3 gap-3 md:gap-6 md:space-y-2'>

              <li className='md:flex md:space-x-5'>
                <img src='time_5843071.png' className='bg-white shadow-sm border-1 p-2 md:p-4 rounded-lg w-[40%] md:w-[25%]'/>
                <h1 className='text-lg lg:text-xl text-white pt-2'>Apply in few minutes</h1>
              </li>

              <li className='md:flex md:space-x-5'>
                <img src='charging_9148372.png' className='bg-white shadow-sm border-1 p-2 md:p-4 rounded-lg w-[40%] md:w-[25%]'/>
                <h1 className='text-lg lg:text-xl text-white pt-2'>Fast Approval</h1>
              </li>

              <li className='md:flex md:space-x-5'>
                <img src='money_12714253.png' className='bg-white shadow-sm border-1 p-2 md:p-4 rounded-lg w-[40%] md:w-[25%]'/>
                <h1 className='text-lg lg:text-md :text-xl text-white pt-2'>Tenure up to 60 months</h1>
              </li>

              <li className='md:flex md:space-x-5'>
                <img src='safe-box_2506920.png' className='bg-white shadow-sm border-1 p-2 md:p-4 rounded-lg w-[40%] md:w-[25%]'/>
                <h1 className='text-lg lg:text-md :text-xl text-white pt-2'>Get money in 2-4 working days</h1>
              </li>

              <li className='md:flex md:space-x-5'>
                <img src='placeholder_819814.png' className='bg-white shadow-sm border-1 p-2 md:p-4 rounded-lg w-[40%] md:w-[25%]'/>
                <h1 className='text-lg lg:text-md :text-xl text-white pt-2'>No Branch Visit</h1>
                </li>

                <li className='md:flex md:space-x-5'>
                <img src='certificate_9039471.png' className='bg-white shadow-sm border-1 p-2 md:p-4 rounded-lg w-[40%] md:w-[25%]'/>
                <h1 className='text-lg lg:text-md :text-xl text-white pt-2'>An ISO certified company</h1>
                </li>
             </motion.ul>

    </section>

    {/* ---------------------------------------------------FAQS------------------------------------------------------- */}

<section class=" text-black pt-20 pb-5 min-h-screen">
  <div class="container flex flex-col justify-center p-4 mx-auto md:p-8">
    <h2 class="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">Frequently Asked Questions</h2>
    <div class="flex flex-col divide-y sm:px-8 lg:px-20 xl:px-32 divide-yellow-600">
      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">What is a business loan?</summary>
        <div class="px-4 pb-4 text-justify">
          <p>At Open Capital, we understand that every business is different and has different financial needs. That's why we offer Business Loans that are designed to be flexible and customisable, so you can get the quick funding required to grow your business. Whether you're new to business, experiencing a slowdown, or need funds for any other purpose, our Business Loans can help you get the money when you need it the most.</p>
        </div>
      </details>
     
      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">Who can get business loans?</summary>
        <div class="px-4 pb-4 text-justify">
          <p>We offer business loans to sole proprietorships.</p>
        </div>
      </details>

      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">Can I get a business loan without collateral?</summary>
        <div class="px-4 pb-4">
          <p>Yes! You can get a Business Loan without any collateral or security.</p>
        </div>
      </details>

      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">Am I eligible for a business loan?</summary>
        <div class="px-4 pb-4">
          <p>You are eligible for a Business Loan if you fall under the category of sole proprietorship. However, the loan approval depends on the proper submission of documents, the basis of your financial history and our internal credit policy.</p>
        </div>
      </details>

      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">How long does it take for a business loan to be disbursed?</summary>
        <div class="px-4 pb-4">
          <p>The business loan is disbursed within 48 hours from the time of loan approval.</p>
        </div>
      </details>

      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">How much EMI do I need to pay?</summary>
        <div class="px-4 pb-4">
          <p>Your EMI depends on the loan amount and the tenure you selected for repayment.</p>
        </div>
      </details>

      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">What is the maximum amount I can take through a business loan?</summary>
        <div class="px-4 pb-4">
          <p>You can currently take a business loan for up to INR 30 Lakhs.</p>
        </div>
      </details>

      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">How long can I take to repay the loan?</summary>
        <div class="px-4 pb-4">
          <p>You can take up to 60 months to repay your business loan.</p>
        </div>
      </details>

      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">What are the documents required for a business loan?</summary>
        <div class="px-4 text-justify">
          <p>The documents required for Sole Proprietorship are listed below.<br/>Sole Proprietorship
            <ul className='list-disc text-justify'>
              <li>PAN Card</li>
              <li>Aadhaar Card</li>
              <li>Any 1 of the following business documents
                <ul className='list-disc text-sm'>
                  <li className='md:grid md:grid-cols-3 md:grid-rows-3 gap-6'>
                  <li className="text-left">
                  <li>Udyog Aadhaar</li>
                  <li>Shops and establishment certificate</li>
                  <li>Food License</li>
                  <li>Regional state registration certificate</li>
                  <li>IEC (Import exporter code) issued by the office of DGFT</li>
                  </li>

                  <li className="text-left">
                  <li>MSME Certificate</li>
                  <li>Trade License</li>
                  <li>GST Certificate</li>
                  <li>Municipal corporation department certificate or License</li>
                  <li>Registration document issued by sales/service tax authority</li>
                  </li>

                  <li className="text-left">
                  <li>Gumasta License</li>
                  <li>Labour License</li>
                  <li>Registration Proof</li>
                  <li>Sales and Income Tax returns</li>
                  </li>

                  </li>
                </ul>
              </li>
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
      <h1 class="md:text-4xl text-2xl text-yellow-500 font-bold  sm:text-center md:text-left leading-tight">Subscribe to us!</h1>
      <p class="text-md text-white my-2">Subscribe to our newsletter for exclusive updates and offers.</p>
    </motion.div>

    <form ref={form} onSubmit={sendEmail}>
      <motion.div  initial={{x:-100, opacity:0}}
      whileInView={{x:0, opacity:1}}
      transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
      class="flex">
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

export default BusinessLoans
