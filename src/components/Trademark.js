import React, { useRef, useState } from 'react'
import {easeIn, motion} from "framer-motion";
import { storage } from '../firebase.config';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { ToastContainer, Flip, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Trademark(){

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
    <div>
    <a href='https://wa.me/919808030923'>
    <img src='WhatsappIcon.png' className='fixed w-[20%] md:w-[13%] lg:w-[10%] right-0 top-[520px] cursor-pointer z-10'/></a>

    {/* ---------------------------------------------Apply for trademark-------------------------------- */}
    <motion.div initial={{x:-100, opacity:0}}
    whileInView={{x:0, opacity:1}}
    transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}} 
    className='pt-40 px-2 md:px-10 max-w-full mx-0 '>
    <div className='md:float-right px-10 sm:px-32 md:px-10 lg:px-28 pt-0 lg:pt-5'>
      <form className='shadow-md shadow-black bg-white px-5 py-4 text-center hidden md:block'>
        <h1 className='text-yellow-500 font-bold text-lg underline'>Apply Trademark Registration</h1>
        <label className='pt-2'>Email</label><br/>
        <input type='email'
         placeholder='Enter your Email'
         className='rounded-sm p-1 border-1'/>
        <br/>
        <label className='pt-2'>Mobile Number</label><br/>
        <input type='tel'
          placeholder="Enter Phone Number" 
          maxLength={10}
         className='rounded-sm p-1 border-1'/>
        <br/>
        <label className='pt-2'>City/Pincode</label><br/>
        <input type=''
         placeholder='Enter your City/Pincode'
         className='rounded-sm p-1 border-1'/>
         <br/>
         <button className='items-center bg-black text-white p-2 mt-3 rounded-md'>Get Started</button>
      </form>
    </div>
    {/* ---------------------------------------------Registration form trademark-------------------------------- */}
    <div className='px-2'>
      <h1 className="text-3xl md:text-4xl lg:txt-5xl xl:text-6xl font-bold text-black md:text-left py-4 pl-2 md:pl-10 lg:pl-16 xl:pl-28">Apply Trademark Registration Online</h1>
      <ul className='text-lg md:text-xl space-y-2 pb-3 text-justify md:text-left py-2 pl-2 md:pl-10 lg:pl-16 xl:pl-28'>
      <li><i class="fas fa-check-square text-yellow-500"></i> Start using TM in just 24 Hours with Our Guaranteed 1-Day Filing <span className='font-bold text-blue-950'>T&C*</span></li>
      <li><i class="fas fa-check-square text-yellow-500"></i> Transparent process through follow-up and regular updates. File your TM at <span className='font-bold'>₹1499 + Govt fees</span></li>
      </ul>

      <form className='shadow-md shadow-black bg-white px-5 py-4 text-center md:hidden block'>
        <h1 className='text-yellow-500 font-bold text-lg underline'>Register Your NGO Today </h1>
        <label className='pt-2'>Email</label><br/>
        <input type='email'
         placeholder='Enter your Email'
         className='rounded-sm p-1 border-1'/>
        <br/>
        <label className='pt-2'>Mobile Number</label><br/>
        <input type='tel'
        placeholder="Enter Phone Number" 
        maxLength={10}
         className='rounded-sm p-1 border-1'/>
        <br/>
        <label className='pt-2'>City/Pincode</label><br/>
        <input type=''
         placeholder='Enter your City/Pincode'
         className='rounded-sm p-1 border-1'/>
         <br/>
         <button className='items-center bg-black text-white p-2 mt-3 rounded-md'>Get Started</button>
      </form>
    </div>
    </motion.div>

    </div>

    {/* -----------------------------------Trademark Registration In India - An Overview-------------------------- */}
    <motion.section
initial={{x:-100, opacity:0}}
whileInView={{x:0, opacity:1}}
transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:1}, ease:"easeIn", duration:1}}
className='container max-w-full mx-0 pt-10 md:pt-40 md:px-20 xl:pr-56 xl:px-48 scroll-smooth overflow-hidden'>
<img src="Trademark brand.jpg" className='md:float-left md:w-[50%] xl:w-[40%]'/>
    <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight'>Trademark Registration In India - An Overview</h1>
    <p className='text-xl text-justify '>
    Trademark Registration is key for businesses to protect their Intellectual Property. Registering gives you Brand Protection and the sole Legal Rights to your symbol, logo, or name. Always do a Trademark Search before registering. This ensures no other trademarks could cause Infringement. For your application, you'll choose Trademark Classes and send it to the Trademark Office. Consulting a Trademark Attorney can make the process smoother. After registering, you can use the Trademark Symbol. Do not forget to meet Renewal deadlines to keep your rights. This whole process strengthens your Brand Identity and stops others from copying.
    </p>
</motion.section>

{/* ---------------------------------------------What Can You Register As a Trademark?------------------------------ */}
<h1 class="xl:text-4xl md:text-3xl sm:text-xl xl:px-60 pt-5 md:mt-10 text-yellow-500 font-bold text-center max-w-full mx-0">What Can You Register As a Trademark?</h1>
    <p className='text-md text-black md:px-20 lg:px-32 xl:px-80 md:pt-3 text-justify'>In India, you can register diverse items as trademarks. They can include brand names, logos, words, slogans, sounds, smells, colors, or any unique sign. These trademarks should distinguish your goods or services from others. This helps maintain your business identity and protect it from misuse.</p>


{/* ----------------------------------------------------------Why Is Trademark Registration Important?------------ */}
<h1 class="xl:text-4xl md:text-3xl sm:text-xl xl:px-60 pt-5 md:mt-10 text-yellow-500 font-bold text-center max-w-full mx-0">Why Is Trademark Registration Important?</h1>
    <p className='text-md text-black md:px-20 lg:px-32 xl:px-80 md:pt-3 text-justify'>Trademark registration in India is crucial as it protects your brand and prevents others from using similar signs. It gives you legal rights to your brand, boosts your brand's value, and assures customers about the quality of your products or services. It also helps in brand recognition and trust-building among customers.</p>

{/* -----------------------------------------------Trademark Classes--------------------------- */}
    <motion.section 
    initial={{x:-100, opacity:0}}
    whileInView={{x:0, opacity:1}}
    transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
    className='container max-w-full mx-0 mt-5 md:mt-20 xl:pl-60 pt-20 xl:px-32 md:px-16 scroll-smooth'>
    <img src="trademark classes.jpg" className='md:float-right md:w-[50%] lg:w-[40%]'/>
    <h1 className='text-3xl md:text-3xl lg:text-4xl font-bold text-black leading-tight'>Trademark Classes</h1>
    <p className='text-lg text-justify'>
    There are 45 trademark classes and all the goods and services are categorised across these classes. You need to be very careful while picking the classes as it will determine the validity of your trademark registration for your business’ products/services. If your business operates across different goods/services that fall under different classes, you have to ensure that you can apply for a trademark online under all the applicable classes.
    </p>
    <p>
    <p className='text-xl text-justify'>Some of the popular trademark classes in India are:</p>
      <motion.ul
        initial={{x:-100, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
        class="text-xl font-semibold text-black pt-3 overflow-hidden">
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500"></i> Class 9: which includes computer software and electronics,</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500"></i> Class 25: which includes clothing,</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500"></i> Class 25: which includes clothing,</li>
        <li className='style-none'><i class="fas fa-check-circle text-yellow-500"></i> Class 25: which includes clothing,</li>
      </motion.ul>
    </p>
</motion.section>

{/* ----------------------------------------------------------Documents Required for Trademark Registration Online India------------ */}
  <motion.div
  initial={{x:-100, opacity:0}}
  whileInView={{x:0, opacity:1}}
  transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
 className='mx-0 max-w-full px-4 md:pt-20'>
<h1 class="xl:text-4xl md:text-3xl sm:text-xl xl:px-56 pt-5 md:mt-20 text-yellow-500 font-bold text-center">Documents Required for Trademark Registration Online India</h1>
    <p className='text-md text-black md:px-20 lg:px-32 xl:px-80 md:pt-3 text-justify'>The following documents should be submitted for trademark registration in India
    <ul class="text-md  text-black pt-3 list-disc pl-4">
      <li>Image of the trademark</li>
      <li>Power of Attorney(drafted by us)</li>
      <li>User affidavit ( only if prior user of trademark)</li>
      <li>TM-A form (drafted by us)</li>
      <li>Id Proof of the applicant along with Address.</li>
    </ul>
      <br/>
    <p>Apart from the documents, to start online trademark registration in India, the following preliminary details must be provided:
      <ul class="text-md text-black pt-3 list-disc pl-4">
        <li><span className='font-semibold'>Applicant name:</span>The name of the person, business, or organisation submitting an application to register a trademark</li>
        <li><span className='font-semibold'>Business Type:</span>Indicate the kind of business organisation, such as a private limited company, partnership, MSME, startup or sole proprietorship</li>
        <li><span className='font-semibold'>Objectives of the Business:</span>Give an overview of your company's nature of business and operations under the trademark</li>
        <li><span className='font-semibold'>Name of Brand/Logo/Slogan:</span>Make sure to specify the name, logo, or slogan you plan to trademark</li>
        <li><span className='font-semibold'>Registration Address:</span>Provide the official address of the organisation submitting the trademark application</li>
        <li><span className='font-semibold'>Prior User Date:</span>if the Applicant is using the brand name before the date of application of the trademark, provide that along with documents as that makes your case stronger.</li>
      </ul>
    </p>
    </p>
    </motion.div>
        {/* ---------------------------------------------------FAQS------------------------------------------------------- */}
<section class=" text-black py-32 min-h-screen">
  <div class="container flex flex-col justify-center p-4 mx-auto md:p-8">
    <h2 class="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">Frequently Asked Questions</h2>
    <div class="flex flex-col divide-y sm:px-8 lg:px-20 xl:px-32 divide-yellow-600">
      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">What might cause a Trademark application to be rejected?</summary>
        <div class="px-4 pb-4 text-justify">
          <p>There are common reasons for rejection include similarity to existing trademarks, lack of distinctiveness, trademark is descriptive of the nature of business (which it should not be!), use of derogatory terms, use of national emblems or failure to meet legal requirements. Conduct thorough research, ensure uniqueness, and adhere to guidelines for a higher chance of approval.</p>
        </div>
      </details>

      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">How do I determine the right jurisdiction for filing a trademark?</summary>
        <div class="px-4 pb-4 text-justify">
          <p>Choosing the right jurisdiction depends on your business scope. You will have to file where you operate, manufacture, or plan significant sales. Consult legal experts for precise guidance.</p>
        </div>
      </details>

      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">When is the best time for a business to Trademark its name and logo?</summary>
        <div class="px-4 pb-4 text-justify">
          <p>Ideally, trademarking your business name and logo early in the startup phase. Secure protection before significant market exposure to avoid conflicts. Timely registration enhances brand identity, safeguards assets, and mitigates legal risks.</p>
        </div>
      </details>

      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">How is a trademark registered in India?</summary>
        <div class="px-4 pb-4">
          <p>To register a trademark in India, you need to follow these steps:
            <ul>
              <li><span>Conduct a trademark search:</span>Ensure your chosen trademark isn't already registered or too similar to existing ones.</li>
              <li><span>Choose the type of trademark:</span>Identify the most relevant type (product, service, etc.) for your brand.</li>
              <li><span>File an application:</span>Submit the application form with the required fees and documents to the Trade Marks Registry.</li>
              <li><span>Examination and publication:</span>The Trademark Registry examines the application for potential conflicts and publishes it in the Trade Marks Journal.</li>
              <li><span>Opposition window:</span>Anyone can file an opposition if they believe the trademark infringes on their rights.</li>
              <li><span>Registration or hearing:</span>If no opposition is filed or resolved successfully, the trademark gets registered and a certificate is issued.</li>
            </ul>
          </p>
        </div>
      </details>

      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">What is the cost for trademark registration?</summary>
        <div class="px-4 pb-4">
          <p>The cost of trademark registration in India depends on several factors, including:
            <ul>
              <li><span>Type of applicant:</span>Individuals, startups, and MSMEs enjoy a lower fee of ₹4,500 per class per application. For other entities, the fee is ₹9,000 per class per application.</li>
              <li><span>Number of classes:</span>Each trademark applies to specific product or service categories (classes). Registering for more classes increases the cost.</li>
              <li><span>Professional fees: </span>If you hire a trademark attorney to assist with the process, there will be additional fees.</li>
            </ul>
          </p>
        </div>
      </details>

      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">What is a trademark class?</summary>
        <div class="px-4 pb-4">
          <p>The Trademark Registry has classified goods and services under 45 classes. Each class lists a host of goods/services and depending on those you are offering, you need to mention the class(es) on your trademark application. The trademark would be registered and protected under those classes only.</p>
        </div>
      </details>

      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">What trademark applications are commonly rejected?</summary>
        <div class="px-4 pb-4">
          <p>If your trademark is similar to an existing application, it would hurt religious sentiments, contain geographical names, or common words. It would also be rejected if it is likely to confuse.</p>
        </div>
      </details>

      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">When can I use the ™ symbol?</summary>
        <div class="px-4 pb-4">
          <p>As soon as you file the application and receive an acknowledgement, you can use the ™ symbol. Once the registration process is complete, you can use the ® symbol.</p>
        </div>
      </details>

      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">How can I run a trademark search?</summary>
        <div class="px-4 pb-4">
          <p>You can run a simple trademark search easily by trademark search. However, if you are serious about getting your trademark registered, it is advised to get a professional to do thorough trademark research.</p>
        </div>
      </details>

      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">What if my trademark is taken, but under a different class?</summary>
        <div class="px-4 pb-4">
          <p>If your brand name has already been registered, but under a different class, you're still in luck. Unless the brand is too well known (like McDonald's or Fiat), your application is likely to be approved.</p>
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

export default Trademark
