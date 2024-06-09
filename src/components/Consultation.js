import React, { Fragment, useRef, useEffect, useState } from 'react'
import {easeIn, motion} from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { ToastContainer, Flip, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
import {
   Card,
   CardHeader,
   CardBody,
   CardFooter,
 } from "@material-tailwind/react";
// import { BlogCard } from "./blog-card";
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import { Carousel, Typography, Button } from "@material-tailwind/react";
// import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


function Consultation(){
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

  
  // var settings = {
  //   loop: true,
  //   center: true,
  //   items: 3,
  //   margin: 0,
  //   autoplay: true,
  //   dots:true,
  //   autoplayTimeout: 8500,
  //   smartSpeed: 450,
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     768: {
  //       items: 2
  //     },
  //     1170: {
  //       items: 3
  //     }
  //   }
  // }
  
   var settings = {
      autoplay: true,
      autoplaySpeed: 1000,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
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

  return(
    <>
   <div><a href='https://wa.me/919808030923'>
    <img src='WhatsappIcon.png' className='fixed w-[20%] md:w-[13%] lg:w-[10%] right-0 top-[520px] cursor-pointer z-10'/></a>
    </div>
    <div className="container pt-32 mb-20 md:h-auto justify-center text-center mx-0 max-w-full scroll-smooth"> 
    <div className='max-w-full mx-0'>
    <div className='md:float-left md:px-10 xl:px-20 md:pt-10'>
    <h1 className="text-2xl hidden md:block font-bold  xl:text-5xl md:text-4xl text-left text-black pb-3">When Your <span className="text-yellow-500">Business</span> Goes Down <br/> In Number.</h1>
    <h1 className="text-2xl font-bold  sm:block md:hidden text-left text-black pb-3">When Your <span className="text-yellow-500">Business</span> Goes Down In Number.</h1>
    <h3 className="text-2xl font-bold  hidden md:block xl:text-5xl md:text-4xl text-left text-black">Arrive at <span className="text-yellow-500">GOVYAPAR </span> and do not  <br/> Wonder.</h3>
    <h3 className="text-2xl font-bold  sm:block md:hidden xl:text-5xl md:text-4xl text-left text-black">Arrive at <span className="text-yellow-500">GOVYAPAR </span> and do not  Wonder.</h3>
    <h3 className="font-bold md:text-left sm:text-md md:text-xl sm:text-center pt-10 md:pt-32 text-yellow-500">Trustworthy Financial and Legal Advice</h3>
    <form class="flex w-full md:py-4 pt-2 justify-left">
       <input 
       type="tel" 
       placeholder="xxxx-xxx-xxx" 
       pattern='[0-9]{4}-[0-9]{3}-[0-9]{3}' 
       name="tel" 
       required 
       class="text-white rounded-md bg-black items-center px-4 py-2  mr-2 focus:outline-none focus:ring-1 focus:ring-yellow-500" />
       <button 
       type="submit" 
       class="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-md shadow-black-md text-sm hover:scale-105 duration-300 ease-in">Start Filing</button>
     </form>
    </div>
    {/* -------------------------------------------------------Carousal Consultation------------------------------------------- */}
    <Slider  {...settings} transition={{ duration: 2 }} className="rounded-xl xl:px-20 max-w-full mx-0  overflow-hidden">
    <Card className="mt-6 md:hover:-translate-x-1 ease-in duration-300 hover:scale-105 md:my-20 cursor-pointer">
      <img
        src="Slider1.jpg"
        alt="image 1"
        className=''
      />
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          ITR Filing
        </Typography>
        <Typography>
        File your Income Tax Returns electronically for a faster and more convenient experience.
        </Typography>
      </CardBody>
    </Card>

    <Card className="mt-6 md:hover:-translate-x-1 ease-in duration-300 hover:scale-105 md:my-20 cursor-pointer">
      <img
        src="Slider2.jpg"
        alt="image 2"
        className=''
      />
       <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
        GST Filing
        </Typography>
        <Typography>
        Streamline your GST filing with our online platform for a hassle-free experience.
        </Typography>
      </CardBody>
    </Card>

    <Card className="mt-6 md:hover:-translate-x-1 ease-in duration-300 hover:scale-105 md:my-20 cursor-pointer">
      <img
        src="Slider3.jpg"
        alt="image 3"
        className=''
      />
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Income Tax Notice
        </Typography>
        <Typography>
        Resolve your Income Tax notices efficiently with expert guidance. We can help!
        </Typography>
      </CardBody>
    </Card>

    <Card className="mt-6 md:hover:-translate-x-1 ease-in duration-300 hover:scale-105 md:my-20 cursor-pointer">
      <img
        src="Slider4.jpg"
        alt="image 4"
        className=''
      />
       <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Compamy Formation
        </Typography>
        <Typography>
        Start your business quickly and easily. Get expert help with company formation.
        </Typography>
      </CardBody>
    </Card>

    <Card className="mt-6 md:hover:-translate-x-1 ease-in duration-300 hover:scale-105 md:my-20 cursor-pointer">
      <img
        src="Slider5.jpg"
        alt="image 5"
        className=''
      />
       <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Consultation
        </Typography>
        <Typography>
        Schedule a consultation with our tax experts for personalized advice on all your tax needs.
        </Typography>
      </CardBody>
    </Card>

    <Card className="mt-6 md:hover:-translate-x-1 ease-in duration-300 hover:scale-105 md:my-20 cursor-pointer">
      <img
        src="Slider6.jpg"
        alt="image 6"
        className=''
      />
       <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Tax Planner
        </Typography>
        <Typography>
        Optimize your tax strategy with our experienced tax planners. Save money & gain peace of mind.
        </Typography>
      </CardBody>
    </Card>
    </Slider> 
   </div>
    </div>
  
{/* --------------------------------------------------Why Govyapar---------------------------------- */}
<div className='py-12 px-2 lg:px-20 xl:px-60 max-w-full mx-0'> 
<img src="govyapar logo.png" className='md:w-[30%] md:float-right lg:pr-40 md:pr-20 px-10 md:block hidden'/>
    <div className='md:px-20 lg:px-40'>
    <h1 className="sm:text-2xl md:text-3xl xl:text-4xl font-semibold md:text-left sm:text-center text-yellow-500 min-w-full">WHY GOVYAPAR?
    <br/></h1>
    <p className="text-black uppercase font-bold sm:text-xl md:text-xl xl:text-2xl md:text-left sm:text-center">Because you are wise and you love your money</p>
    <br className='md:block hidden'/>
    <h1 className="text:md md:text-2xl text-black md:text-left min-w-full">We love to break that conventional pattern that consumes money and time, for it matters: #GoVyapar</h1>
    </div>
    
    </div>

{/* -----------------------------------how do we help------------ */}
<div className='container mx-0 max-w-full bg-black md:py-5 md:mt-10'>
<h1 class="sm:text-xl md:text-3xl xl:text-4xl xl:px-60  text-yellow-500 font-bold text-center pt-5">How Do We Help</h1>
<div className="px-20 sm:px-40 md:px-10 lg:px-32 py-4">
<ul className="grid grid-rows-4 md:grid-cols-4 md:grid-rows-1 gap-6">

   
    <li class="bg-transaparent p-3 border-1 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
    <p className="text-md lg:text-2xl font-bold"> <img src='online-meeting.png' className='px-5 placeholder:lg:px-24'/> </p>
      <h1 className='font-bold text-xl text-center text-yellow-500'>Online Meet</h1>
      <p className='text-sm text-justify text-white'>Conduct online meetings with our clients to save their commuting costs and time</p>
    </li>
    

    <li class="bg-transaparent p-3 border-1 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
    <p className="text-md lg:text-2xl font-bold"> <img src='web-security.png' className='px-5 lg:px-24'/> </p>
      <h1 className='font-bold text-xl text-center text-yellow-500'>Secured Platform</h1>
      <p className='text-sm text-justify text-white'>The whole platform is secured and safefor the users</p>
    </li>

    <li class="bg-transparent p-3 border-1 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
    <p className="text-md lg:text-2xl font-bold"> <img src='checklist.png' className='px-5 lg:px-24'/> </p>
      <h1 className='font-bold text-xl text-center text-yellow-500'>All Ears to Your Queries</h1>
      <p className='text-sm text-justify text-white'>Your feedback and queries contribute to the development of serviecs tailored to ypour needs</p>
    </li>

    <li class="bg-transparent p-3 border-1 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105">
    <p className="text-md lg:text-2xl font-bold"> <img src='notepad.png' className='px-5 lg:px-24'/> </p>
      <h1 className='font-bold text-xl text-center text-yellow-500'>With a Notebook</h1>
      <p className='text-sm text-justify text-white'>You say it. We note it immediately to get rid of any confusion</p>
    </li>
    </ul>
    </div>
    </div>
   {/* ----------------------------Consultation form------------------------ */}
  <div className='max-w-sm mx-auto pt-5'>
    <h1 className='md:text-4xl text-2xl text-center text-bold text-yellow-500 pb-5'>Consultation form</h1>
    <form class="">
  <label for="countries" class="block mb-2 text-sm font-medium text-black">Select Consultant</label>
  <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

    <option>Consultant 1</option>
    <option>Consultant 2</option>
    <option>Consultant 3</option>
    <option>Consultant 4</option>
  </select>
  <br/>
  <label for="countries" class="block mb-2 text-sm font-medium text-black">Select Service</label>
  <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

    <option>ITR Filing</option>
    <option>Gst Filing</option>
    <option>Income Tax Notices</option>
    <option>Tax Planner</option>
  </select>
  <br/>

<label for="countries" class="block mb-2 text-sm font-medium text-black">Appointment Date</label>
<input type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/>
<br/>

<div className='justify-center'>
<button type="submit" class="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-md shadow-black-md text-sm hover:scale-105 duration-300 ease-in">Book an Appointment</button>
</div>
<motion.img
  whileInView={{x:0, opacity:1}}
  animate={{ x: 100 }}
  transition={{ ease: "easeOut", duration: 2 }}
  src="tap_Consultation.png" className='md:float-left w-[20%] relative bottom-3'/>
</form>
  </div>

  {/* ---------------------------------Testimonials---------------------------- */}
   {/* <!-- Container for demo purpose --> */}
<div class="container my-24 mx-auto md:px-6">
  <section class="mb-32 text-center">
   <h1 className='text-2xl text-yellow-500 md:text-4xl text-center font-bold md:py-20'>Testimonials </h1>

    <div class="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
      <div class="mb-12 md:mb-0">
        <div class="mb-6 flex justify-center">
          <img src="employee.png"
            class="w-32 rounded-full shadow-lg dark:shadow-black/20" />
        </div>
        <h5 class="mb-2 text-lg font-bold">Maria Smantha</h5>
        <h6 class="mb-4 font-bold text-yellow-600 dark:text-primary-400">
          CA
        </h6>
        <p class="mb-4">
        GoVyapar simplified my taxes! Saved time & money.
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="inline-block w-6">
            <path fill="currentColor"
              d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
          </svg>
        </p>
        <ul class="mb-0 flex justify-center">
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
              <path fill="currentColor"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
              <path fill="currentColor"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
              <path fill="currentColor"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
              <path fill="currentColor"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
              <path fill="currentColor"
                d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
        </ul>
      </div>
      <div class="mb-12 md:mb-0">
        <div class="mb-6 flex justify-center">
          <img src="employee.png"
            class="w-32 rounded-full shadow-lg dark:shadow-black/20" />
        </div>
        <h5 class="mb-2 text-lg font-bold">Lisa Cudrow</h5>
        <h6 class="mb-4 font-bold text-yellow-600 dark:text-primary-400">
          Software Developer
        </h6>
        <p class="mb-4">
        GoVyapar helped navigate my complex tax situation. Maximized deductions!
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="inline-block w-6">
            <path fill="currentColor"
              d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
          </svg>
        </p>
        <ul class="mb-0 flex justify-center">
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
              <path fill="currentColor"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
              <path fill="currentColor"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
              <path fill="currentColor"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
              <path fill="currentColor"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
              <path fill="currentColor"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
        </ul>
      </div>
      <div class="mb-0">
        <div class="mb-6 flex justify-center">
          <img src="employee.png"
            class="w-32 rounded-full shadow-lg dark:shadow-black/20" />
        </div>
        <h5 class="mb-2 text-lg font-bold">John Smith</h5>
        <h6 class="mb-4 font-bold text-yellow-600 dark:text-primary-400">
          CA
        </h6>
        <p class="mb-4">
          GoVyapar keeps me informed & saves me money. Trusted partner!
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="inline-block w-6">
            <path fill="currentColor"
              d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
          </svg>
        </p>
        <ul class="mb-0 flex justify-center">
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
              <path fill="currentColor"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
              <path fill="currentColor"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
              <path fill="currentColor"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
              <path fill="currentColor"
                d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" class="w-5 text-warning">
              <path fill="currentColor"
                d="m323 851 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z" />
            </svg>
          </li>
        </ul>
      </div>
    </div>
  </section>
</div>


    {/* --------------------------------------------------------------------------- */}
    {/* <section class="pt-20 pb-10 lg:pt-[120px] lg:pb-20 bg-white dark:bg-dark w-full mx-0">
   <div class="container mx-auto">
      <div class="flex flex-wrap justify-center -mx-4">
         <div class="w-full px-4">
            <div class="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
               <span class="block mb-2 text-lg font-semibold text-yellow-500">
               Our Blogs
               </span>
               <h2
                  class="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px] dark:text-white"
                  >
                  Our Recent News
               </h2>
               <p class="text-base text-body-color dark:text-dark-6">
               --- - --- -- - -- - ---- - - -- -  Paragraph - --- -- --- - --- -- - -- - ---- - - -- -  -- -- - 
               </p>
            </div>
         </div>
      </div>
      <div class="flex flex-wrap -mx-4 px-20">
         <div class="w-full px-4 md:w-1/2 lg:w-1/3">
            <div class="w-full mb-10">
               <div class="mb-8 overflow-hidden rounded">
                  <img
                     src="Why Do.png"
                     alt="image"
                     class="w-[50%]"
                     />
               </div>
               <div>
                  <span
                     class="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center text-white rounded bg-yellow-500"
                     >
                  Dec 22, 2023
                  </span>
                  <h3>
                     <a
                        href="javascript:void(0)"
                        class="inline-block mb-4 text-xl font-semibold text-dark dark:text-white hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                        >
                    Heading
                     </a>
                  </h3>
                  <p class="text-base text-body-color dark:text-dark-6">
                  ------ ------ ---- ---------Matter------- ------ ---- ---- --- ----- ---
                  </p>
               </div>
            </div>
         </div>
         <div class="w-full px-4 md:w-1/2 lg:w-1/3">
            <div class="w-full mb-10">
               <div class="mb-8 overflow-hidden rounded">
                  <img
                     src="notice3.jpg"
                     alt="image"
                     class="w-[50%]"
                     />
               </div>
               <div>
                  <span
                     class="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center text-white rounded bg-yellow-500"
                     >
                  Read More
                  </span>
                  <h3>
                     <a
                        href="javascript:void(0)"
                        class="inline-block mb-4 text-xl font-semibold text-dark dark:text-white hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                        >
                     Heading
                     </a>
                  </h3>
                  <p class="text-base text-body-color dark:text-dark-6">
                     ------ ------ ---- ---------Matter------- ------ ---- ---- --- ----- ---
                  </p> 
               </div>
            </div>
         </div>
         <div class="w-full px-4 md:w-1/2 lg:w-1/3">
            <div class="w-full mb-10">
               <div class="mb-8 overflow-hidden rounded">
                  <img
                     src="notice2.jpg"
                     alt="image"
                     class="w-[50%]"
                     />
               </div>
               <div>
                  <span
                     class="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center text-white rounded bg-yellow-500"
                     >
                  Explore More 
                  </span>
                  <h3>
                     <a
                        href="javascript:void(0)"
                        class="inline-block mb-4 text-xl font-semibold text-dark dark:text-white hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                        >
                    Heading
                     </a>
                  </h3>
                  <p class="text-base text-body-color dark:text-dark-6">
                  ------ ------ ---- ---------Matter------- ------ ---- ---- --- ----- ---
                  </p>
               </div>
            </div>
         </div>
      </div>
   </div>
</section> */}

    {/* <!-----------------------------------------------------------Consultation-------------------------------------  --> */}
 {/* <motion.section  initial={{x:-100, opacity:0}}
whileInView={{x:0, opacity:1}}
transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
 className="container md:mx-20 md:pt-10 mx-0 md:px-40">

  <img  src="Tax-Consultant-2048x1639.png" alt="Tax Consultant" className="md:w-[40%] md:float-right rounded-lg object-cover consultancy-img md:mt-32 md:pr-36" /> 
  <div className="mt-8 md:pt-10 md:mx-40 md:px-20 md:mt-0 consultancy-para  rounded-md">
    <h2 className="text-xl font-bold text-black py-3 consultancy-para-h2">Solving All Your Queries With Expert Solutions</h2>
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
</motion.section> */}

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
export default Consultation