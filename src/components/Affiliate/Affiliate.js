import React, { useRef, useState } from 'react';
import {easeIn, motion} from "framer-motion";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import emailjs from '@emailjs/browser';
import { ToastContainer, Flip, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
   Card,
   CardHeader,
   CardBody,
   CardFooter,
 } from "@material-tailwind/react";
import { Carousel, Typography, Button } from "@material-tailwind/react";


function Affiliate(){
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

  var settings = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots:true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1170: {
        items: 3
      }
    }
  }
  
   var settings = {
      autoplay: true,
      autoplaySpeed: 1000,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
        }
    ]
    };
    window.scrollTo(0,0);
  return(
    <>
    <div><a href='https://wa.me/919808030923'>
    <img src='WhatsappIcon.png' className='fixed w-[20%] md:w-[13%] lg:w-[10%] right-0 top-[520px] cursor-pointer z-10'/></a>
    </div>
    <motion.div 
    initial={{x:-100, opacity:0}}
    whileInView={{x:0, opacity:1}}
    transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
    className='container mt-36 items-center w-full xl:px-40'>
      <h1 className='text-4xl text-black lg:text-6xl text-left font-bold'>Join Govyapar's <br/>
      <span className='text-yellow-500 text-left font-bold'> Affiliate Program </span>  
      </h1>
      <p className='text-2xl pt-4 text-left text-black font-semibold'>Earn flat 30% reward for every referral</p>
      <hr className="my-2 md:w-[45%]"/>
      <div className='space-x-2 text-left'>
      <Link to = "/signUp"><button type="submit" class="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-4 mt-4 rounded-md shadow-sm">SIGN UP</button></Link>
      <Link to = "/signIn"><button type="submit" class="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-4 mt-4 rounded-md shadow-sm">SIGN IN</button></Link>
      </div>
    </motion.div>

    {/* --------------------------------------------------How it Works----------------------------------------- */}
    <div className='container mt-5 bg-black mx-0 max-w-full'>
      <div className='py-5'>
        <h1 className='text-2xl text-yellow-500 md:text-3xl text-center pb-4 font-bold'>How it Works</h1>
      <ul className="grid grid-rows-4 md:grid-cols-4 md:grid-rows-1 text-center gap-4">
<li className='lg:space-x-6 space-y-2 px-3'>
  <i class="fa-solid fa-handshake p-4 bg-yellow-500 text-black rounded-full text-4xl"></i>
  <h1 className='font-bold text-xl text-yellow-500'>Step 1</h1>
  <p className='text-md text-white lg:px-4'>Join the affiliate program and get your unique referral link</p>
</li>

<li className='lg:space-x-6 space-y-2'>
  <i class="fas fa-hand-pointer p-4 bg-yellow-500 text-black rounded-full text-4xl"></i>
  <h1 className='font-bold text-xl text-yellow-500'>Step 2</h1>
  <p className='text-md text-white lg:px-5'>Educate people about GoVyapar and nudge them to file their ITR using your link</p>
</li>

<li className='lg:space-x-6 space-y-2'>
  <i class="fa-solid fa-link p-4 bg-yellow-500 text-black rounded-full text-4xl"></i>
  <h1 className='font-bold text-xl text-yellow-500'>Step 3</h1>
  <p className='text-md text-white lg:px-5'>Once the user files their ITR using your link, you will earn a flat 30% reward on the final invoice.</p>
</li>

<li className='lg:space-x-6 space-y-2'>
  <i class="fa-solid fa-sack-dollar p-4 bg-yellow-500 text-black rounded-full text-4xl"></i>
  <h1 className='font-bold text-xl text-yellow-500'>Step 4</h1>
  <p className='text-md text-white lg:px-5'>Our timely payments ensures instant redemption of your affiliate commissions</p>
</li>
</ul>
</div>
</div>

{/* ---------------------------------------------Who are we?----------------------------------- */}
<div className='container py-20 xl:px-40 md:py-32'>
  <img src = "affiliate_question-mark.png" class="w-[25%] float-left md:px-10"/>
  <h1 className='text-2xl text-yellow-500 md:text-3xl  text-left pb-3 font-bold'>Who are we?</h1>
  <p className='md:text-2xl text-xl text-justify text-black font-semibold'>GoVyapar is an assisted tax filing platform which ensures end to end tax compliance to taxpayers in India. We help customers reduce their tax liability up to 26%.</p>

</div>

{/* ------------------------------------How Govyapar became India’s most trusted tax filing platform------------------------ */}
<h1 className='text-2xl text-yellow-500 md:text-4xl text-center font-bold md:pt-20'>How Govyapar became India's most trusted tax filing platform </h1>
<div className="xl:px-80 px-10 py-4">
    <motion.ul 
    initial={{y:-100, opacity:0}}
    whileInView={{y:0, opacity:1}}
    transition={{delay:0.10, y:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
    className="grid grid-rows-2 grid-cols-2 md:grid-cols-4 md:grid-rows-1 gap-4">

    <li class="bg-gradient-to-r from-gray-200 to-gray-100 py-4 px-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 bg-black ease-in duration-300 hover:scale-105">
      {/* <h1 className='font-bold text-xl'>Appellate Notices</h1> */}
      <p className='text-md'>8 Lakh+ taxpayers trust us for tax compliance</p>
    </li>

    <li class="bg-gradient-to-r from-gray-200 to-gray-100 py-4 px-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 bg-black ease-in duration-300 hover:scale-105">
      {/* <h1 className='font-bold text-xl'>Ex-Parte Orders</h1> */}
      <p className='text-md'>94% users save tax during tax filing</p>
    </li>

    <li class="bg-gradient-to-r from-gray-200 to-gray-100 py-4 px-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 bg-black ease-in duration-300 hover:scale-105">
      {/* <h1 className='font-bold text-xl'>Seeking Rectification</h1> */}
      <p className='text-md'>97.4% GoVyapar users don't receive any tax notice</p>
    </li>

    <li class="bg-gradient-to-r from-gray-200 to-gray-100 py-4 px-3 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 bg-black ease-in duration-300 hover:scale-105">
      {/* <h1 className='font-bold text-xl'>Seeking Rectification</h1> */}
      <p className='text-md'>4.9 star Google rating with 11,000+ reviews</p>
    </li>
    </motion.ul>
    </div>
   
   {/* --------------------------Get a fixed 30% reward on every referral------------------------------------ */}
   <h1 className='text-2xl text-yellow-500 md:text-4xl text-center font-bold md:pt-20'>Get a fixed 30% reward on every referral </h1>
   <Slider {...settings} className='xl:px-80 space-x-2 max-w-full overflow-hidden'>
      {/* <div className="flex">  */}
      <Card className="mt-3 md:hover:-translate-x-1 ease-in duration-300 hover:scale-105 md:my-20 cursor-pointer">
      <h1 className='text-2xl font-bold text-black text-center'>₹999</h1>
      <CardBody className='bg-gray-900 m-3 rounded-md'>
        <Typography variant="h5" color="blue-gray" className="mb-2 text-2xl text-white">
          Salaried Plan (Advanced)
        </Typography>
        <Typography className='text-xl text-white'>
        Your reward per referral: <span className='text-2xl font-bold text-yellow-500'>₹299*</span>
        </Typography>
      </CardBody>
    </Card>

    <Card className="mt-3 md:hover:-translate-x-1 ease-in duration-300 hover:scale-105 md:my-20 cursor-pointer">
      <h1 className='text-2xl font-bold text-black text-center'>₹999</h1>
      <CardBody className='bg-gray-900 m-3 rounded-md'>
        <Typography variant="h5" color="blue-gray" className="mb-2 text-2xl text-white">
          Salaried Plan (Advanced)
        </Typography>
        <Typography className='text-xl text-white'>
        Your reward per referral: <span className='text-2xl font-bold text-yellow-500'>₹299*</span>
        </Typography>
      </CardBody>
    </Card>

    <Card className="mt-3 md:hover:-translate-x-1 ease-in duration-300 hover:scale-105 md:my-20 cursor-pointer">
      <h1 className='text-2xl font-bold text-black text-center'>₹999</h1>
      <CardBody className='bg-gray-900 m-3 rounded-md'>
        <Typography variant="h5" color="blue-gray" className="mb-2 text-2xl text-white">
          Salaried Plan (Advanced)
        </Typography>
        <Typography className='text-xl text-white'>
        Your reward per referral: <span className='text-2xl font-bold text-yellow-500'>₹299*</span>
        </Typography>
      </CardBody>
    </Card>

    <Card className="mt-3 md:hover:-translate-x-1 ease-in duration-300 hover:scale-105 md:my-20 cursor-pointer">
      <h1 className='text-2xl font-bold text-black text-center'>₹999</h1>
      <CardBody className='bg-gray-900 m-3 rounded-md'>
        <Typography variant="h5" color="blue-gray" className="mb-2 text-2xl text-white">
          Salaried Plan (Advanced)
        </Typography>
        <Typography className='text-xl text-white'>
        Your reward per referral: <span className='text-2xl font-bold text-yellow-500'>₹299*</span>
        </Typography>
      </CardBody>
    </Card>

    <Card className="mt-3 md:hover:-translate-x-1 ease-in duration-300 hover:scale-105 md:my-20 cursor-pointer">
      <h1 className='text-2xl font-bold text-black text-center'>₹999</h1>
      <CardBody className='bg-gray-900 m-3 rounded-md'>
        <Typography variant="h5" color="blue-gray" className="mb-2 text-2xl text-white">
          Salaried Plan (Advanced)
        </Typography>
        <Typography className='text-xl text-white'>
        Your reward per referral: <span className='text-2xl font-bold text-yellow-500'>₹299*</span>
        </Typography>
      </CardBody>
    </Card>


    <Card className="mt-3 md:hover:-translate-x-1 ease-in duration-300 hover:scale-105 md:my-20 cursor-pointer">
      <h1 className='text-2xl font-bold text-black text-center'>₹999</h1>
      <CardBody className='bg-gray-900 m-3 rounded-md'>
        <Typography variant="h5" color="blue-gray" className="mb-2 text-2xl text-white">
          Salaried Plan (Advanced)
        </Typography>
        <Typography className='text-xl text-white'>
        Your reward per referral: <span className='text-2xl font-bold text-yellow-500'>₹299*</span>
        </Typography>
      </CardBody>
    </Card>

    <Card className="mt-3 md:hover:-translate-x-1 ease-in duration-300 hover:scale-105 md:my-20 cursor-pointer">
      <h1 className='text-2xl font-bold text-black text-center'>₹999</h1>
      <CardBody className='bg-gray-900 m-3 rounded-md'>
        <Typography variant="h5" color="blue-gray" className="mb-2 text-2xl text-white">
          Salaried Plan (Advanced)
        </Typography>
        <Typography className='text-xl text-white'>
        Your reward per referral: <span className='text-2xl font-bold text-yellow-500'>₹299*</span>
        </Typography>
      </CardBody>
    </Card>

    <Card className="mt-3 md:hover:-translate-x-1 ease-in duration-300 hover:scale-105 md:my-20 cursor-pointer">
      <h1 className='text-2xl font-bold text-black text-center'>₹999</h1>
      <CardBody className='bg-gray-900 m-3 rounded-md'>
        <Typography variant="h5" color="blue-gray" className="mb-2 text-2xl text-white">
          Salaried Plan (Advanced)
        </Typography>
        <Typography className='text-xl text-white'>
        Your reward per referral: <span className='text-2xl font-bold text-yellow-500'>₹299*</span>
        </Typography>
      </CardBody>
    </Card>

    <Card className="mt-3 md:hover:-translate-x-1 ease-in duration-300 hover:scale-105 md:my-20 cursor-pointer">
      <h1 className='text-2xl font-bold text-black text-center'>₹999</h1>
      <CardBody className='bg-gray-900 m-3 rounded-md'>
        <Typography variant="h5" color="blue-gray" className="mb-2 text-2xl text-white">
          Salaried Plan (Advanced)
        </Typography>
        <Typography className='text-xl text-white'>
        Your reward per referral: <span className='text-2xl font-bold text-yellow-500'>₹299*</span>
        </Typography>
      </CardBody>
    </Card>

    {/* </div> */}
   </Slider>

   <p className='text-md text-center'>Please note: Reward will be calculated on the final invoice value</p>


        {/* -----------------------------------------------Subscribe to our newsletter------------------------------------------------ */}
        <div class="container bg-black mt-20 pt-10 max-w-full scroll-smooth">
  <div class="md:flex justify-between items-center lg:px-48 py-10 ">
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
export default Affiliate