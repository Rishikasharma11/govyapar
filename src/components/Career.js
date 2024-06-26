import React, { useRef,  useState } from 'react'
import { Link } from 'react-router-dom'
import {motion} from "framer-motion";
import emailjs from '@emailjs/browser';
import { ToastContainer, Flip, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Career = () => {
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


  return (
    <div className='mx-0 max-w-full'>
{/* ----------------------------------------------Career-------------------------------- */}
    <div><a href='https://wa.me/919808030923'>
    <img src='WhatsappIcon.png' className='fixed w-[20%] md:w-[13%] lg:w-[10%] right-0 top-[520px] cursor-pointer z-10' alt='' /></a>
    </div>
    <div className='container mt-36 items-center max-w-full md:px-10 xl:px-40 h-screen'>
    <img src='career.jpg' className='md:float-right md:w-[50%] lg:w-[40%] hidden md:block' alt=''/>
      <h1 className='text-2xl text-black md:text-5xl xl:text-6xl text-left font-bold md:pt-10'>Could not find your desired role?</h1>
      <p className='md:text-2xl text-md pt-4 text-left text-black font-semibold'>Let us find one for you. Drop your resume here</p>
      <button type="submit" class="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-4 mt-4 rounded-md shadow-sm md:hidden block">Drop CV</button>
      <p className='md:text-4xl text-md md:pt-10 text-left  text-black font-semibold'> Come, <span className='text-yellow-500 font-bold'>Join Us</span></p>
      <img src='career.jpg' className='float-right px-12 block md:hidden' alt=''/>
     <button type="submit" class="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-4 mt-4 rounded-md shadow-sm hidden md:block">Drop CV</button>
    
    
    </div>

    {/* ---------------------------------Govyapar matter------------------------------------- */}
     <div className='container mt-36 items-center w-full xl:px-40'>
     <h1 className='text-xl text-black md:text-5xl xl:text-6xl text-center font-bold md:pt-10'>Why you'll love working at GoVyapar</h1>
    
     <div className='xl:px-24 md:px-10'>
     <p className='md:text-2xl text-md pt-4 text-left text-yellow-500 font-semibold'>Our Core Values</p>
     <img src='career2.jpg' className='md:float-right xl:px-20 md:w-[60%] xl:w-[58%] hidden md:block' alt=''/>
     <table className='career-table'>
     <tr>
        <td>1</td>
        <td>Treat every failure as a learning oppportunity</td>
     </tr>
    <tr>
         <td>2</td>
         <td>Fertilize innovation with customer listening</td>
     </tr>
     <tr>
         <td>3</td>
         <td>Bring simplicity to all that is complex</td>
     </tr>
     <tr>
         <td>4</td>
         <td>Be bold</td>
     </tr>
     <tr>
         <td>5</td>
         <td>Build honest and transparent relationship</td>
     </tr>
     <tr>
         <td>6</td>
         <td>Be passionate </td>
     </tr>
    </table>
    </div>
     </div>

{/* -----------------------------------------Current Openings--------------------------------------- */}
     {/* <div className='container mt-40 items-center w-full md:px-20 lg:px-40'>
     <h1 className='text-xl text-black md:text-3xl text-center font-bold md:pt-10'>Current Openings</h1>
     </div> */}

{/* -----------------------------------Benefits of working with us--------------------------- */}
<div className='container mt-36 items-center w-full md:px-32 xl:px-40'>
     <h1 className='text-xl text-black md:text-4xl text-center font-bold md:pt-10'>Benefits of working with us :)</h1>
     <ul className="grid xl:px-80 md:grid-cols-1 md:grid-rows-4 md:pt-12 text-center">
<li className='space-y-2'> 
  <img src='finance.png' className='md:px-48 px-32' alt=''/>
  <h1 className='font-bold md:text-3xl text-yellow-500'>Professional development</h1>
</li>
<li className='space-y-2'>
  <img src='finance (1).png' className='md:px-52 px-32' alt=''/>
  <h1 className='font-bold md:text-3xl text-yellow-500'>Financial benefits</h1>
</li>
<li className='space-y-2'>
  <img src='finance (2).png' className='md:px-52 px-32' alt=''/>
  <h1 className='font-bold md:text-3xl text-yellow-500'>Retirement benefits</h1>
</li>
<li className='space-y-2'>
  <img src='finance (3).png' className='md:px-52 px-32' alt=''/>
  <h1 className='font-bold md:text-3xl text-yellow-500'>Cost Savings</h1>
</li>
</ul>
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
        <li><i class="fa fa-linkedin text-yellow-500 hover:font-bold"></i></li>
        <li><i class="fa fa-twitter text-yellow-500 hover:font-bold"></i></li>
        <li><i class="fa fa-instagram text-yellow-500 hover:font-bold"></i></li>
        <li><i class="fa fa-facebook-f text-yellow-500 hover:font-bold"></i></li>
        <li><i class="fa fa-youtube text-yellow-500 hover:font-bold"></i></li> 
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

export default Career
