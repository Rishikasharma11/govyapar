import React, { useRef, useState } from 'react'
import {easeIn, motion} from "framer-motion";
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { ToastContainer, Flip, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function StartupFunding(){
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
    {/* -----------------------------------Startup Funding-------------------------- */}
    <motion.section
    initial={{x:-100, opacity:0}}
    whileInView={{x:0, opacity:1}}
    transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1}}
    className='container max-w-full mx-0 pt-32 md:pt-40 md:px-10 xl:px-36 scroll-smooth overflow-hidden'>
      <h1 className='pb-5 text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-500 leading-tight md:hidden block'>Startup Funding</h1>
        <img src="startup funding.jpg" className='md:float-right md:w-[58%] xl:w-[50%] px-4 md:pt-32 pt-6'/>
        <h1 className='text-4xl md:text-4xl lg:text-6xl font-bold text-yellow-500 leading-tight md:block hidden'>Startup Funding</h1>
        <p className='text-md lg:text-lg text-justify pt-4'>
        Funding refers to the money required to start and run a business. It is a financial investment in a company for product development, manufacturing, expansion, sales and marketing, office spaces, and inventory. Many startups choose to not raise funding from third parties and are funded by their founders only (to prevent debts and equity dilution). However, most startups do raise funding, especially as they grow larger and scale their operations. This page shall be your virtual guide to Startup funding. 
        </p>
    </motion.section>

    {/* --------------------------------Why Funding is Required by Startups------------------------------------ */}
    <h1 class="xl:text-4xl md:text-3xl sm:text-xl xl:px-60 pt-5 md:mt-32 text-black font-bold text-center max-w-full mx-0">Why Funding is Required by Startups</h1>
    <p className='text-md text-black md:px-10 lg:px-20 xl:px-60 md:pt-3 text-justify'>A startup might require funding for one, a few, or all of the following purposes. It is important that an entrepreneur is clear about why they are raising funds. Founders should have a detailed financial and business plan before they approach investors.</p>
    <motion.div 
    initial={{y:100, opacity:0}}
    whileInView={{y:0, opacity:1}}
    transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
    className="px-10 sm:px-20 md:px-28 lg:px-40 xl:px-80 py-4">
    <ul className="grid grid-cols-2 grid-rows-5 md:grid-cols-4 md:grid-rows-3 gap-4">

    <li class="p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
      <img src="startup funding-1.png" className='px-2 sm:px-auto'/>
      <h1 className='font-bold text-center text-sm md:text-md text-black'>Prototype Creation</h1>
    </li>

    <li class="p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
    <img src="startup funding-2.png" className='px-2 sm:px-auto'/>
      <h1 className='font-bold text-center text-sm md:text-md text-black'>Product Development</h1>
    </li>

    <li class="p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
    <img src="startup funding-3.png" className='px-2 sm:px-auto'/>
      <h1 className='font-bold text-center text-sm md:text-md text-black'>Team Hiring</h1>
    </li>

    <li class="p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
    <img src="startup funding-4.png" className='px-2 sm:px-auto'/>
      <h1 className='font-bold text-center text-sm md:text-md text-black'>Working Capital</h1>
    </li>

    <li class="p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
    <img src="startup funding-5.png" className='px-2 sm:px-auto'/>
      <h1 className='font-bold text-center text-sm md:text-md text-black'>Legal & Consulting Services</h1>
    </li>

    <li class="p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
    <img src="startup funding-6.png" className='px-2 sm:px-auto'/>
      <h1 className='font-bold text-center text-sm md:text-md text-black'>Raw Material & Equipments</h1>
    </li>

    <li class="p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
    <img src="startup funding-7.png" className='px-2 sm:px-auto'/>
      <h1 className='font-bold text-center text-sm md:text-md text-black'>Licenses & Certifications</h1>
    </li>

    <li class="p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
    <img src="startup funding-8.png" className='px-2 sm:px-auto'/>
      <h1 className='font-bold text-center text-sm md:text-md text-black'>Marketing & Sales</h1>
    </li>

    <li class="p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
    <img src="startup funding-9.png" className='px-2 sm:px-auto'/>
      <h1 className='font-bold text-center text-sm md:text-md text-black'>Office Space & Admin Expenses</h1>
    </li>

    </ul>
    </motion.div>

    {/* -----------------------------------What do investors look for in startups? ------------ */}
<div className='container mx-0 max-w-full bg-black md:py-5 md:mt-10'>
<h1 class="sm:text-xl md:text-3xl xl:text-4xl xl:px-60  text-yellow-500 font-bold text-center pt-5">What do investors look for in startups? </h1>
<div className="sm:px-10 md:px-20 xl:px-60 py-4">
<motion.ul 
initial={{y:100, opacity:0}}
whileInView={{y:0, opacity:1}}
transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.}, ease:"easeIn", duration:1}}
className="grid grid-rows-9 sm:grid-rows-5 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-3 gap-4">

   
    <li class="bg-transaparent p-3 border-1 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-md md:text-xl text-center text-yellow-500'>Objective and Problem Solving</h1>
      <p className='text-sm text-justify text-white'>The offering of any startup should be differentiated to solve a unique customer problem or to meet specific customer needs. Ideas or products that are patented show high growth potential for investors.</p>
    </li>
    

    <li class="bg-transaparent p-3 border-1 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-md md:text-xl text-center text-yellow-500'>Management & Team</h1>
      <p className='text-sm text-justify text-white'>The passion, experience, and skills of the founders as well as the management team to drive the company forward are equally crucial in addition to all the factors mentioned above.</p>
    </li>

    <li class="bg-transparent p-3 border-1 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-md md:text-xl text-center text-yellow-500'>Market Landscape</h1>
      <p className='text-sm text-justify text-white'>Market size, obtainable market share, product adoption rate, historical and forecasted market growth rates, macroeconomic drivers for the market your plans to target.</p>
    </li>

    <li class="bg-transparent p-3 border-1 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-md md:text-xl text-center text-yellow-500'>Scalability & Sustainability</h1>
      <p className='text-sm text-justify text-white'>Startups should showcase the potential to scale in the near future, along with a sustainable and stable business plan. They should also consider barriers to entry, imitation costs, growth rate, and expansion plans.</p>
    </li>

    <li class="bg-transparent p-3 border-1 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-md md:text-xl text-center text-yellow-500'>Customers & Suppliers</h1>
      <p className='text-sm text-justify text-white'>Clear identification of your buyers and suppliers. Consider customer relationships, stickiness to your product, vendor terms as well as existing vendors.</p>
    </li>

    <li class="bg-transparent p-3 border-1 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-md md:text-xl text-center text-yellow-500'>Competitive Analysis</h1>
      <p className='text-sm text-justify text-white'>Consider the number of players in a market, the market share, obtainable share in the near future, product mapping to highlight similarities as well as differences between different competitor offerings.</p>
    </li>

    <li class="bg-transparent p-3 border-1 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-md md:text-xl text-center text-yellow-500'>Sales & Marketing</h1>
      <p className='text-sm text-justify text-white'>No matter how good your product or service may be, if it does not find any end-use, it is no good. Consider things like a sales forecast, targeted audiences, product mix, conversion and retention ratio, etc.</p>
    </li>

    <li class="bg-transparent p-3 border-1 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-md md:text-xl text-center text-yellow-500'>Financial Assessment</h1>
      <p className='text-sm text-justify text-white'>A detailed financial business model that showcases cash inflows over the years, investments required key milestones, break-even points, and growth rates. Assumptions used at this stage should be reasonable and clearly mentioned.</p>
    </li>

    <li class="bg-transparent p-3 border-1 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-md md:text-xl text-center text-yellow-500'>Exit Avenues</h1>
      <p className='text-sm text-justify text-white'>A startup showcasing potential future acquirers or alliance partners becomes a valuable decision parameter for the investor. Initial public offerings, acquisitions, subsequent rounds of funding are all examples of exit options.</p>
    </li>
    </motion.ul>
    </div>
    </div>
{/* --------------------------------------Why do investors invest in startups?------------------- */}
    <h1 class="xl:text-4xl md:text-3xl sm:text-xl xl:px-60 md:mt-20 text-yellow-500 font-bold text-center pt-5">Why do investors invest in startups?</h1>
    <p className='text-md text-black md:px-10 lg:px-20 xl:px-60 md:pt-3 text-justify'>Investors essentially buy a piece of the company with their investment. They are putting down capital, in exchange for equity: a portion of ownership in the startup and rights to its potential future profits. Investors form a partnership with the startups they choose to invest in - if the company turns a profit, investors make returns proportionate to their amount of equity in the startup; if the startup fails, the investors lose the money they've invested.
    <br/>
    Investors realize their return on investment from startups through various means of exit. Ideally, the VC firm and the entrepreneur should discuss the various exit options at the beginning of investment negotiations. A well-performing, high-growth startup that also has excellent management and organizational processes is more likely of being exit-ready earlier than other startups. Venture Capital and Private Equity funds must exit all their investments before the end of the fund’s life.
    </p>
    <motion.div 
    initial={{y:100, opacity:0}}
    whileInView={{y:0, opacity:1}}
    transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
    className="xl:px-60 md:px-20 px-10 py-4">
    <ul className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-4">

    <li class="p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 border-1 border-black ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl text-yellow-500'>Mergers and Acquisitions</h1>
      <p className='text-sm text-black'>The investor may decide to sell the portfolio company to another company in the market. In essence, it entails one company combining with another, either by acquiring it (or part of it) or by being acquired (in whole or in part).</p>
    </li>

    <li class="p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 border-1 border-black ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl text-yellow-500'>IPO</h1>
      <p className='text-sm text-black'>Initial Public Offering is the first time that the stock of a private company is offered to the public. Issued by private companies seeking capital to expand. It is one of the most preferred methods by investors to exit a startup organization</p>
    </li>

    <li class="p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 border-1 border-black ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl text-yellow-500'>Buybacks</h1>
      <p className='text-sm text-black'>Founders of the startup may also buy back their shares from the fund/investors if they have liquid assets to make the purchase and wish to regain control of their company.</p>
    </li>

    <li class="p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 border-1 border-black ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl text-yellow-500'>Selling shares</h1>
      <p className='text-sm text-black'>Investors may sell their equity or shares to other venture capital or private equity firms.</p>
    </li>

    <li class="p-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 border-1 border-black ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-xl text-yellow-500'>Distressed Sale</h1>
      <p className='text-sm text-black'>Under financially stressed times for a startup company, the investors may decide to sell the business to another company or financial institution..</p>
    </li>

    </ul>
    </motion.div>

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
        placeholder="xxxx-xxx-xxx" 
        pattern='[0-9]{4}-[0-9]{3}-[0-9]{3}'
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

export default StartupFunding
