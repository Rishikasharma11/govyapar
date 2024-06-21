import React, { useRef, useState } from 'react'
import {easeIn, motion} from "framer-motion";
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { ToastContainer, Flip, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel,} from "@material-tailwind/react";

const GstFiling = () => {
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

      // ---------------------------------------FAQS--------------------------------------
      const [activeTab, setActiveTab] = useState("Individuals"); 
      const faqsData = [
        {
      //     // --------------------------------------------------ITR FILING------------------------------------
          label: (<label className='z-0'>Individuals</label>),
          value: "Individuals",
          desc:(
            <div class="flex flex-col divide-y sm:px-8 lg:px-20 xl:px-32 divide-yellow-600">
            <details>
              <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">Can a 12th pass student file a GST return?</summary>
              <div class="px-4 pb-4 text-justify">
                <p>Yes, a 12th pass student can file a GST return, and GovVapar simplifies the process for easy compliance.</p>
              </div>
            </details>
            <details>
              <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">Can an individual file GST directly?</summary>
              <div class="px-4 pb-4 text-justify">
                <p>Certainly, individuals can file GST directly with TaxBuddy's user-friendly platform, ensuring a hassle-free filing experience.</p>
              </div>
            </details>
          </div>
          ),
        },

        {
          label: "Companies",
          value: "Companies",
          desc: (
            <div class="flex flex-col divide-y sm:px-8 lg:px-20 xl:px-32 divide-yellow-600">
            <details>
              <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">Am I not getting the aggregate turnover option in the GST file return?</summary>
              <div class="px-4 pb-4 text-justify">
                <p>If you're missing the aggregate turnover option, GovVapar can help you navigate and resolve this issue for comprehensive GST filing.</p>
              </div>
            </details>
            <details>
              <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">Can a company file GST for mobile in their company?</summary>
              <div class="px-4 pb-4 text-justify">
                <p>Yes, GovVapar can guide companies in filing GST for mobile operations within their organization, ensuring compliance and accurate record-keeping.</p>
              </div>
            </details>
            <details>
              <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">Can a regular GST taxpayer file returns in advance?</summary>
              <div class="px-4 pb-4 text-justify">
                <p>With TaxBuddy, regular GST taxpayers can proactively file returns in advance, streamlining the process and helping you stay ahead of compliance requirements.</p>
              </div>
            </details>
            <details>
              <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">Can a shopkeeper file a GST return without payment?</summary>
              <div class="px-4 pb-4 text-justify">
                <p>GovVapar can provide guidance on filing GST returns even if there's no payment involved, ensuring that shopkeepers meet their GST obligations accurately.</p>
              </div>
            </details>
            <details>
              <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">Can an amendment in GST be filed in September?</summary>
              <div class="px-4 pb-4 text-justify">
                <p>Yes, you can file GST amendments in September, and GovVapar assists you in the process to meet GST requirements and maintain compliance.</p>
              </div>
            </details>
            <details>
              <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">Can a taxpayer file GST return?</summary>
              <div class="px-4 pb-4 text-justify">
                <p>Absolutely, GovVapar is here to assist taxpayers in efficiently filing their GST returns, simplifying the process for smooth compliance with tax regulations.</p>
              </div>
            </details>
          </div>
          ),
        },

        {
          label: "Firms",
          value: "Firms",
          desc: (
            <div class="flex flex-col divide-y sm:px-8 lg:px-20 xl:px-32 divide-yellow-600">
            <details>
              <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">Are law firms exempted from filing GST?</summary>
              <div class="px-4 pb-4 text-justify">
                <p>Law firms are not exempt from GST filing. GovVapar ensures law firms meet GST obligations and maintains compliance with tax authorities.</p>
              </div>
            </details>

            <details>
              <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">Can a director file LUT (Letter of Undertaking) in GST?</summary>
              <div class="px-4 pb-4 text-justify">
                <p>Directors and firms can efficiently file Letter of Undertaking (LUT) with TaxBuddy, simplifying the process for GST compliance.</p>
              </div>
            </details>

            <details>
              <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">Can a partnership firm file GST REG-16?</summary>
              <div class="px-4 pb-4 text-justify">
                <p>Yes, partnership firms can easily file GST REG-16 with TaxBuddy's guidance, ensuring accurate and timely compliance with GST regulations.</p>
              </div>
            </details>

            <details>
              <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">Can a refund application be filed after the cancellation of GST registration?</summary>
              <div class="px-4 pb-4 text-justify">
                <p>Even after the cancellation of GST, GovVapar can help you with filing refund applications, ensuring that you maintain good standing with tax authorities.</p>
              </div>
            </details>

            <details>
              <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">Can a service provider file quarterly return in GST?</summary>
              <div class="px-4 pb-4 text-justify">
                <p>Absolutely, service providers can file quarterly returns, and GovVapar offers convenient services tailored to this requirement, ensuring seamless GST compliance.</p>
              </div>
            </details>

            <details>
              <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">Can a transporter file a nil GST return?</summary>
              <div class="px-4 pb-4 text-justify">
                <p>Yes, a transporter can file a nil GST return with TaxBuddy, simplifying the process for compliance and record-keeping.</p>
              </div>
            </details>

            <details>
              <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">Can an authorized representative file GST returns?</summary>
              <div class="px-4 pb-4 text-justify">
                <p>GovVapar provides a streamlined process for authorized representatives to file GST returns, simplifying compliance and record-keeping, ensuring an efficient filing process</p>
              </div>
            </details>
          </div>
          )
        }

        ]
        window.scrollTo(0,0);
  return (
   <>
   <div>
   <div className=' max-w-full'><a href='https://wa.me/919808030923'>
    <img src='WhatsappIcon.png' className='fixed w-[20%] md:w-[13%] lg:w-[10%] right-0 top-[520px] cursor-pointer z-10'/></a>
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

      {/* --------------------------------------------------------GST FILING HEADING------------------------------- */}
      <div className=''> 
      <motion.p 
         initial={{y:100, opacity:0}}
         whileInView={{y:0, opacity:1}}
         transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
        className="text-center text-black font-medium md:py-10 max-w-full mx-0">
        <h1 className="md:text-4xl lg:text-5xl text-2xl text-bold">GST</h1>
        <p className="xl:px-80 lg:px-40 md:px-20 py-2 md:mx-0">Offload your GST filing to our CAs and peacefully focus on your business.

        <div className='md:flex-col md:space-y-3 px-24 space-y-2 sm:px-16 lg:px-20 py-4'>

<ul className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-8">

  <li class="bg-transparent p-3 cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105 border-1">
      <img src="gstfiling1.jpg" className='mx-auto xl:w-[50%] sm:w-[30%] md:w-[60%] lg:w-full'/>
      <h1 className='font-bold text-xl text-black'>CA guided filing</h1>
      </li>

      <li class="bg-transparent p-3 cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105 border-1">
      <img src="gstfiling2.jpg" className='mx-auto xl:w-[50%] sm:w-[30%] md:w-[60%] lg:w-full'/>
      <h1 className='font-bold text-xl text-black'> End to end tax advisory</h1>
      </li>
  
       <li class="bg-transparent p-3 cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105 border-1">
       <img src="gstfiling3.jpg" className='mx-auto xl:w-[50%] sm:w-[30%] md:w-[60%] lg:w-full'/>
       <h1 className='font-bold text-xl text-black'> GST credit reconciliation</h1>
       </li>
       </ul>
    </div> 
    </p> 
    </motion.p> 

     {/* --------------------------------pricing plans gst--------------------- */}

     <h4 className="md:text-xl text-sm pt-4 font-bold text-yellow-500 text-center max-w-full">PRICING PLAN</h4> 
    <h1 className="md:text-3xl text-xl font-bold text-black text-center md:py-4">Plans Based On Your Selection</h1>
    
  <div className="pricing-box-container grid md:grid-cols-3 grid-rows-1 justify-center lg:mx-20 md:px-10 xl:px-60 mx-0">
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
      <li className="text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>Application for GST Registration
        </li>
        <li className="text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>Application for Clarification
        </li>
        <li className="text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>Any modification in GST <br/> Registration Application
        </li>
      </ul>
      <Link to ="/gstFileUpload"><button class="bg-black text-white uppercase font-bold py-2 px-4 rounded-md shadow-black-md text-sm hover:scale-105 duration-300 ease-in mt-4">
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
      <li className="text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i>GSTR-1 Return Filing
        </li>
        <li className="text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i>GSTR-3B Return Filing
        </li>
        <li className="text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i>Credit Reconciliation (Reconciliation <br/> of Purchase Register and GSTR-2A)
        </li>
        <li className="text-left text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i>Excludes Annual Return
        </li>
      </ul>
      <Link to ="/contact"><button class="bg-yellow-500 text-white uppercase font-bold py-2 px-4 rounded-md shadow-black-md text-sm hover:scale-105 duration-300 ease-in mt-4">
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
      <li className="text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>GSTR-1 Return Filing
        </li>
        <li className="text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>GSTR-3B Return Filing
        </li>
        <li className="text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>Credit Reconciliation (Reconciliation <br/> of Purchase Register and GSTR-2A)
        </li>
        <li className="text-left text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>Excludes Annual Return
        </li>
      </ul>
      <Link to ="/contact"><button class="bg-black text-white uppercase font-bold py-2 px-4 rounded-md shadow-black-md text-sm hover:scale-105 duration-300 ease-in mt-4">
        Choose Plan
      </button></Link>
    </motion.div>
</div>
</div>
   
        {/* ------------------------------------------------------------------GST PARA 1---------------------------------- */}
        <div class="container max-w-full items-center xl:px-60 mx-0 py-10 scroll-smooth rounded-md">
      {/* <img src='itr-filing-1.png' className='md:float-left md:w-[40%]'></img> */}
      <h1 className="md:text-4xl text-xl font-bold text-center">Your Trusted GST Filing<br/> Platform in India <br/>
      <button type="submit" class="border-yellow-500 border-2 bg-transparent hover:bg-yellow-500 text-black font-bold py-1 px-4 rounded-md shadow-black-md text-sm hover:scale-105 duration-300 ease-in text-center">ITR Filing without delay <i className='fa fa-caret-right'></i></button></h1>
      <div className='xl:px-60 px-20 py-4'>
        <ul className='cursor-pointer grid grid-rows-4 md:grid-cols-2 md:grid-rows-2 md:gap-10 gap-2'>

          <li class="bg-gradient-to-l from-yellow-400 to-yellow-100 p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 bg-black ease-in duration-300 hover:scale-105">
          <h1 className='font-bold text-xl'><i className="fas fa-arrow-circle-right"></i> GST Registration</h1>
             <p className='text-sm'>98.4% of our clients do not receive any GST notice</p></li>

          <li class="bg-gradient-to-r from-yellow-400 to-yellow-100 p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 bg-black ease-in duration-300 hover:scale-105">
          <h1 className='font-bold text-xl'><i className="fas fa-arrow-circle-right"></i> No GST Notice</h1>
          <p className='text-sm'>97% of our users get GST registration in one application</p></li>

          <li class="bg-gradient-to-l from-yellow-400 to-yellow-100 p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 bg-black ease-in duration-300 hover:scale-105">
          <h1 className='font-bold text-xl'> <i className="fas fa-arrow-circle-right"></i> Google Reviews</h1>
          <p className='text-sm'>4.9 ★ Google rating from 12,500+ reviews</p></li>

          <li class="bg-gradient-to-r from-yellow-400 to-yellow-100 p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 bg-black ease-in duration-300 hover:scale-105">
          <h1 className='font-bold text-xl'> <i className="fas fa-arrow-circle-right"></i> Live Chat Support</h1>
          <p className='text-sm'>Our dedicated live chat support team is here to assist you, ensuring a seamless experience.</p></li>
        </ul>
    </div> 
      
    </div>

  {/* ------------------------------------------------------------------GST PARA 2---------------------------------- */}
<motion.section 
    initial={{x:-100, opacity:0}}
    whileInView={{x:0, opacity:1}}
    transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
    className='container max-w-full mx-0 mt-10 xl:pl-40 pt-20 xl:px-60 scroll-smooth'>
    <img src="./consultant.png" className='md:float-right md:pt-40 lg:w-[40%] md:w-[45%]'/>
    <h1 className='sm:text-3xl md:text-3xl lg:text-4xl font-bold lg:px-40 text-black leading-tight md:px-10 sm:hidden block'>What do we offer as trusted <br/>GST Filing Platform:</h1>
    <h1 className='sm:text-3xl md:text-3xl lg:text-4xl font-bold xl:px-40 text-black leading-tight md:px-10 sm:block hidden text-center'>What do we offer as trusted GST Filing Platform:</h1>
    <p>
      <motion.ul
       initial={{x:-100, opacity:0}}
      whileInView={{x:0, opacity:1}}
      transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
      class="xl:px-40 text-md font-semibold text-black pt-3 text-justify md:px-10">
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500"></i> As India's trusted GST filing platform, we offer a comprehensive range of services designed to streamline your GST compliance journey. Whether you're looking for GST registration assistance, seamless GST return filing, expert advice, or reliable GST audit services, GoVyapar has you covered</li><br/>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500"></i> Our dedicated team of GST consultants is here to guide you through every step of the GST process. We understand the importance of accurate documentation and compliance, ensuring that your GST filing is completed with ease.</li><br/>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500"></i> Join our satisfied clients who have experienced the benefits of our top-notch GST services. Discover how GoVyapar can simplify GST for your business today.</li>
      </motion.ul>
    </p>
</motion.section>

{/* -------------------------------------------​Discover How GST Filing Works with GoVyapar---------------------------------------------- */}
<div class= 'max-w-full md:mt-40 mx-0 sm:mt-5'>
<h1 class="md:text-4xl text-xl xl:px-60 pt-3 md:pt-20 text-yellow-500 font-bold text-center md:px-10">​Discover How GST Filing Works with GoVyapar</h1>
<p className='text-md text-black xl:px-80 md:px-10 md:pt-3 text-center px-2'>This is a simple process. Sit back and relax. Leave the stress of GST filing to us. Let our experts help you save maximum time & taxes.</p>
<motion.div 
initial={{x:-100, opacity:0}}
whileInView={{x:0, opacity:1}}
transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1}}
className="xl:px-40 lg:px-40 px-10 py-4">
<ul className="grid grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-4">

    <li class="bg-yellow-500 p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
      <h1 className='font-bold md:text-md lg:text-xl'>Decide - Streamline Your GST Process</h1>
      <p className='text-sm'>You should understand what it means and why it has been sent in the first place</p>
    </li>
    
    <li class="bg-yellow-500  p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
      <h1 className='font-bold md:text-md lg:text-xl'>Document - Hassle-Free GST Documentation</h1>
      <p className='text-sm'>Share your documents as guided by our tax expertn</p>
    </li>
   
    <li class="bg-yellow-500 p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1  ease-in duration-300 hover:scale-105">
      <h1 className='font-bold md:text-md lg:text-xl'>GST Filing Completed - Your Compliance Partner</h1>
      <p className='text-sm'>Once you confirm, your GST filing will be completed in no time.</p>
    </li>

    <li class="bg-yellow-500  p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
      <h1 className='font-bold md:text-md lg:text-xl'>Expert Advice: Our GST Consultants Guide You</h1>
      <p className='text-sm'>Our expert will scan your documents and use them to save you the maximum tax.</p>
    </li>
    </ul>
    </motion.div>
    </div>
{/* --------------------------GST Filing: Accelerate Your GSTR-1 to GSTR-9 Process----------------------- */}
    <div class= 'w-full md:mt-20 mx-0'>
<h1 class="md:text-4xl text-xl xl:px-60 pt-3 md:pt-20 text-yellow-500 font-bold text-center">GST Filing: Accelerate Your GSTR-1 to GSTR-9 Process</h1>
<div className='xl:px-80 px-10 py-4'>
        <ul className='cursor-pointer bg-black p-4 grid grid-cols-2 grid-rows-4 md:grid-cols-4 md:grid-rows-2'>

          <li class="bg-gradient-to-l from-yellow-400 to-yellow-100 p-3 shadow-md cursor-pointer md:hover:-translate-x-1 bg-black ease-in duration-300 hover:scale-105">
          <h1 className='font-bold text-xl'> GSTR-1</h1></li>

          <li class="bg-gradient-to-l from-yellow-400 to-yellow-100 p-3 shadow-md cursor-pointer md:hover:-translate-x-1 bg-black ease-in duration-300 hover:scale-105">
          <h1 className='font-bold text-xl'> GSTR-2B</h1></li>

          <li class="bg-gradient-to-l from-yellow-400 to-yellow-100 p-3 shadow-md cursor-pointer md:hover:-translate-x-1 bg-black ease-in duration-300 hover:scale-105">
          <h1 className='font-bold text-xl'> GSTR-3B</h1></li>

          <li class="bg-gradient-to-l from-yellow-400 to-yellow-100 p-3 shadow-md cursor-pointer md:hover:-translate-x-1 bg-black ease-in duration-300 hover:scale-105">
          <h1 className='font-bold text-xl'> GSTR-4</h1></li>

          <li class="bg-gradient-to-r from-yellow-400 to-yellow-100 p-3 shadow-md cursor-pointer md:hover:-translate-x-1 bg-black ease-in duration-300 hover:scale-105">
          <h1 className='font-bold text-xl'> GSTR-6</h1></li>

          <li class="bg-gradient-to-r from-yellow-400 to-yellow-100 p-3 shadow-md cursor-pointer md:hover:-translate-x-1 bg-black ease-in duration-300 hover:scale-105">
          <h1 className='font-bold text-xl'> GSTR-7</h1></li>

          <li class="bg-gradient-to-r from-yellow-400 to-yellow-100 p-3 shadow-md cursor-pointer md:hover:-translate-x-1 bg-black ease-in duration-300 hover:scale-105">
          <h1 className='font-bold text-xl'> GSTR-8</h1></li>

          <li class="bg-gradient-to-r from-yellow-400 to-yellow-100 p-3 shadow-md cursor-pointer md:hover:-translate-x-1 bg-black ease-in duration-300 hover:scale-105">
          <h1 className='font-bold text-xl'> GSTR-9</h1></li>
        </ul> 
    <div className='md:py-32 py-5 md:px-40'>
       <img src='arrow.png' className='float-left md:w-[15%] w-[10%]'/>
       <div className='md:grid md:grid-cols-1 md:grid-rows-2'>
       <p className="md:text-2xl text-xl text-bold">Start your tax journey with us today!</p>
       <form class="flex w-full pt-2">
       <input 
       type="tel" 
       placeholder="Enter Phone Number" 
       maxLength={10} 
       pattern='[0-9]{4}-[0-9]{3}-[0-9]{3}'
       name="tel" 
       required 
       class="text-white rounded-md bg-black items-center px-4 py-2 md:w- [20%] mr-2 focus:outline-none focus:ring-1 focus:ring-yellow-500" />
       <button 
       type="submit" 
       class="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-md shadow-black-md text-sm hover:scale-105 duration-300 ease-in">Submit</button>
     </form>
  </div>
</div>
</div>
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

<li class="cursor-pointer shadow-md rounded-lg ">
  <img src="itr-for-professionals.png" className='md:px-20 px-28'/>
  <div className="p-3">
  <h1 className='text-yellow-500 font-bold text-2xl'>Understanding the Importance of ITR Filing:</h1>
  <p className='text-sm text-black text-justify p-1'>ITR filing is not just a legal obligation; it's an opportunity for individuals and businesses to assess their financial health, declare their income, and claim tax deductions and exemptions. Filing ITR accurately and on time not only helps avoid penalties and legal repercussions but also serves as a tool for financial planning and wealth management. By maintaining comprehensive records of income and expenses, taxpayers can gain valuable insights into their financial standing and make informed decisions to optimize their tax liabilities.
  </p>
  </div>
</li>

<li class="cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105 shadow-md rounded-lg bg-black">
<img src="itr-e-filing.png" className='md:px-20 px-28'/>
  <div className="p-3">
  <h1 className='text-yellow-500 text-center font-bold text-2xl'>Seeking Expert Assistance:</h1>
  <p className='text-sm text-white text-justify p-1'>While businesses can file GST returns independently, seeking expert advice from tax consultants or chartered accountants can provide added assurance and efficiency. Tax professionals have the knowledge and expertise to navigate complex GST laws, address compliance issues, and optimize tax planning strategies to minimize tax liabilities and maximize savings. By partnering with experienced tax consultants, businesses can streamline GST compliance and focus on their core operations with confidence.
  </p> 
  </div>
</li>

<li class="cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105 shadow-md rounded-lg ">
<img src="itr-for-traders.png" className='md:px-20 px-28'/>
  <div className="p-3">
  <h1 className='text-yellow-500 font-bold text-2xl'>Utilizing Technology for GST Compliance:</h1>
  <p className='text-sm text-black text-justify p-1'>With the advent of technology, filing ITR has become more convenient and accessible than ever before. Online platforms and e-filing portals provided by the Income Tax Department offer a user-friendly interface for taxpayers to file their returns from the comfort of their homes. These platforms also provide guidance and assistance at every step of the filing process, making it easier for individuals and businesses to comply with tax laws and regulations.
  </p>
  </div>
</li>
</ul>
  </div>
</motion.div>

{/* ---------------------------------------------------FAQS------------------------------------------------------- */}
<h2 class="mb-12 text-4xl font-bold leadi text-center pt-32 lg:pt-40 sm:text-5xl">Frequently Asked Questions</h2>
<div className=" lg:mx-40 max-w-full z-[-10]">
<div>
   <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-3 text-black pt-20 z-0 lg:pr-[590px] md:mx-20 md:pr-80" 
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-yellow-500 shadow-none rounded-none",
        }}
      >
        {faqsData.map(({ label, value }) => (
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
        {faqsData.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
    </div>
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
</div> 
   </>
  )
}

export default GstFiling
