import React, { useRef, useState } from 'react'
import {motion} from "framer-motion";
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { ToastContainer, Flip, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NGO(){

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
    <>
     <div>
    <a href='https://wa.me/919808030923'>
    <img src='WhatsappIcon.png' className='fixed w-[20%] md:w-[13%] lg:w-[10%] right-0 top-[520px] cursor-pointer z-10' alt='ngo'/></a>

    {/* ---------------------------------------------Register form Ngo-------------------------------- */}
    <motion.div 
    initial={{x:-100, opacity:0}}
    whileInView={{x:0, opacity:1}}
    transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
    className='pt-40 px-2 md:px-10 max-w-full mx-0 '>
    <div className='md:float-right px-10 sm:px-32 md:px-10 lg:px-28 pt-0 lg:pt-5'>
      <form className='shadow-md shadow-black bg-white px-5 py-4 text-center hidden md:block'>
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
         <button className='items-center bg-black text-white p-2 mt-3 rounded-md'>Book an Appointment Now</button>
      </form>
    </div>
        {/* ---------------------------------------------Registration ngo-------------------------------- */}
    <div className='px-2'>
      <h1 className="text-3xl md:text-4xl lg:txt-5xl xl:text-6xl font-bold text-black md:text-left py-4 pl-2 md:pl-10 lg:pl-16 xl:pl-28">Register Your NGO with Govyapar</h1>
      <ul className='text-lg md:text-xl space-y-2 pb-3 text-justify md:text-left py-2 pl-2 md:pl-10 lg:pl-16 xl:pl-28'>
      <li><i class="fas fa-check-square text-yellow-500"></i> Get started with your NGO registration. Bylaws/Deed/MOA drafting and filing completed within 7 business days. <span className='font-bold text-blue-950'>T&C*</span></li>
      <li><i class="fas fa-check-square text-yellow-500"></i> Book a slot and consult an NGO expert, get complete guidance to set up your NGO</li>
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
         <button className='items-center bg-black text-white p-2 mt-3 rounded-md'>Book an Appointment Now</button>
      </form>
    </div>
    </motion.div>

    </div>

    {/* ---------------------------------------------------NGO Types------------------------------------------------- */}
    <div className='pt-20 md:pt-40 md:px-10 lg:px-32'>
      <h1 className='text-2xl md:text-3xl text-center font-bold'>NGO Types</h1>
      <p className='text-md md:text-lg px-2 md:px-32 text-justify'>Non-governmental organisations like Trusts, Societies, and Section 8 Companies work towards the betterment of our society. You can register your NGO through Govyapar and get a certificate soon.</p>
      <div className="px-20 sm:px-40 md:px-10 py-4">
    <motion.ul 
    initial={{y:100, opacity:0}}
    whileInView={{y:0, opacity:1}}
    transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.}, ease:"easeIn", duration:1}}
    className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-6">

    <li class="bg-transaparent p-3 border-1 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105 text-center">
     <p className="text-md lg:text-2xl font-bold">
      <img src="ngo trust.jpg" className=' w-[30%] px-2 py-1 mx-auto rounded-lg' alt='ngo'/>  
      </p>
      <h1 className='font-bold text-xl text-center text-yellow-500 py-2'>Trust Registration</h1>
      <p className='text-sm text-justify text-black'>Trust is an entity registered under the Indian Trust Act, 1882. They are created to focus on the development of science, literature and other noble causes.</p><br/>
      <button type="submit" class="bg-yellow-500 border-2 border-black text-black font-extrabold py-2 px-4 rounded-md text-sm hover:scale-105 duration-300 ease-in">Get Started</button>
    </li>

    <li class="bg-transaparent p-3 border-1 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105 text-center">
    <p className="text-md lg:text-2xl font-bold">
      <img src="ngo section.png" className='w-[28%] px-2 py-1 mx-auto rounded-lg' alt='ngo'/>  
      </p>
      <h1 className='font-bold text-xl text-center text-yellow-500 py-2'>Section 8</h1>
      <p className='text-sm text-justify text-black'>A Section 8 company registered under the Companies Act, 2013 is an organisation functioning with an objective to promote non - profit activities like education, social welfare and environmental preservation.</p><br/>
      <button type="submit" class="bg-yellow-500 border-2 border-black text-black font-extrabold py-2 px-4 rounded-md text-sm hover:scale-105 duration-300 ease-in">Get Started</button>
    </li>
    
    <li class="bg-transparent p-3 border-1 shadow-md rounded-md cursor-pointer md:hover:-translate-x-1 ease-in duration-300 hover:scale-105 text-center">
    <p className="text-md lg:text-2xl font-bold">
      <img src="ngo society.jpg" className='w-[40%] px-2 py-1 mx-auto rounded-lg' alt='ngo'/>  
      </p>
      <h1 className='font-bold text-xl text-center text-yellow-500 py-2'>Society Registration</h1>
      <p className='text-sm text-justify text-black'>A society is an organisation involved in charitable activities like education, art, religion, culture, music, and sports. It is registered under the Societies Registration Act of 1860.</p><br/>
      <button type="submit" class="bg-yellow-500 border-2 border-black text-black font-extrabold py-2 px-4 rounded-md text-sm hover:scale-105 duration-300 ease-in">Get Started</button>
    </li>
    </motion.ul>
    </div>
    </div>

    {/* -------------------------------------------------------NGO Side Navbar----------------------- */}
    {/* <div className='pt-10 px-4 lg:px-10'>
      <ul className="hidden md:block grid grid-cols-1 grid-rows-7 space-y-3 w-[30%] float-left pr-5">
              
            <li className='text-xl bg-white shadow-md p-2'><NavLink onClick={() => setOpen(!open)} to="/" className="hover:text-yellow-500 focus:text-yellow-500 active:text-yellow-500">Overview</NavLink></li>
            <li className="group md:ml-8 text-xl md:my-0 my-7"> 
             </li>
             <li className='text-xl bg-white shadow-md p-2'><NavLink onClick={() => setOpen(!open)} to="/" className="hover:text-yellow-500 focus:text-yellow-500">Benefits</NavLink></li>
             <li className='text-xl bg-white shadow-md p-2'><NavLink onClick={() => setOpen(!open)} to="/" className="hover:text-yellow-500 focus:text-yellow-500">Documents Required</NavLink></li>
             <li className='text-xl bg-white shadow-md p-2'><NavLink onClick={() => setOpen(!open)}to="/" className="hover:text-yellow-500 focus:text-yellow-500">Eligibility Criteria</NavLink></li>  
             <li className='text-xl bg-white shadow-md p-2'><NavLink onClick={() => setOpen(!open)}to="/" className="hover:text-yellow-500 focus:text-yellow-500">Checklist</NavLink></li> 
             <li className='text-xl bg-white shadow-md p-2'><NavLink onClick={() => setOpen(!open)}to="/" className="hover:text-yellow-500 focus:text-yellow-500">Process</NavLink></li> 
      </ul>
      <div className='text-justify p-2'>

        <div>
        <h1 className='text-2xl py-2 text-yellow-500 font-semibold'>Trust Registration- An Overview</h1>
        <p>Trust registration in Delhi involves establishing a trust that is managed by a person (the settlor) to a trustee. The trustee holds and manages it for the benefit of specific individuals (the beneficiaries). To register a trust in Delhi, one needs to draft a trust deed that outlines the trust's objectives. It encompasses details of trustees and beneficiaries. The trust deed should then be executed and signed by the settlor and trustees. They are registered with the local sub-registrar office where the trust's registered office. This registration helps establish the legal validity of the trust.</p>
        </div>

        <div>
        <h1 className='text-2xl py-2 text-yellow-500 font-semibold'>Benefits of Trust Registration in Delhi</h1>
        <ul>
          <li>
            <h1>Perpetual Existence</h1>
            <p>A registered trust in Delhi has perpetual existence. It can continue its operations even if there are changes in the trustees. The trust's activities and objectives can be carried forward across generations. It ensures the continuity of its charitable or religious initiatives.</p>
          </li>

          <li>
            <h1>Limited liability</h1>
            <p>One significant benefit of trust registration is limited liability protection. The trustees of a registered trust generally have limited personal liability. In case of legal disputes or debts, the personal assets of the trustees are protected. The trust's assets are used to satisfy the liabilities.</p>
          </li>

          <li>
            <h1>Enhanced Credibility</h1>
            <p>Trust registration enhances the credibility of the organisation. Especially beneficial for the eyes of donors, and government authorities. Being a registered entity demonstrates transparency and accountability. It can attract more donations, grants, and collaborations with other organisations.</p>
          </li>

          <li>
            <h1>Operational Advantages</h1>
            <p>Registered trusts are subject to certain rules and regulations that provide a framework. This framework promotes accountability, transparency, and governance within the trust. It helps streamline the trust's activities, financial management, and reporting procedures. It also ensures better operational efficiency.</p>
          </li> 
        </ul>
        </div>

        <div>
        <h1 className='text-2xl py-2 text-yellow-500 font-semibold'>Documents Required for Trust Registration in Delhi</h1>
        <p>The following documents are required for trust registration in Delhi:</p>
        <ul>
          <li>Trust deed</li>
          <li>Proof of identity and address for trustee</li>
          <li>Proof of address of the trust</li>
          <li>Bank account details of the trust</li>
          <li>A copy of the PAN card of the trust</li>
        </ul>
        </div>

        <div>
        <h1 className='text-2xl py-2 text-yellow-500 font-semibold'>Eligibility Criteria for Trust Registration in Delhi</h1>
        <ul>
          <li>Seeking a competent and willing individual or entity for property transfer</li>
          <li>Minimum requirement of two individuals or corporate entities</li>
          <li>The trust activities must be lawful</li>
          <li>The trust should function within charitable, religious, educational, or social welfare domains</li>
          <li>Operation should be non-profit, utilising income and property solely for stated objectives</li>
          <li>Execution of a trust deed to define objectives, rules, and regulations</li>
          <li>Necessary to obtain relevant authority, submit documents, and pay fees</li>
          <li>Adherence to rules, regulations, and reporting obligations is expected.</li>
        </ul>
        </div>

      </div>

    </div> */}
    {/* ----------------------------------------------NGO Structure-wise Comparison---------------------------------------- */}
    <div className='pt-20 md:pt-40 md:px-10 lg:px-32'>
      <h1 className='text-2xl md:text-3xl text-center font-bold py-2'>NGO Structure-wise Comparison</h1>
      <p className='text-md md:text-lg px-2 text-justify'>From drafting your deed, registering the NGO  and opening a bank account - Vakilsearch provides comprehensive NGO registration services in India. </p>

      {/* --------------------------------table---------------------- */}
      <table className="company-formation-table max-w-full mx-0 hidden md:block">
  <tr>
      <th></th>
      <th>Liability</th>
      <th>Taxation</th>
      <th>Formation</th>
      <th>Maintenance</th>
    </tr>

    <tr>
      <td>Section 8 Company</td>
      <td>Limited liability of members.</td>
      <td>Section 8 companies enjoy 100% tax exemption as their profits are utilised for charitable purposes, providing a significant tax advantage.</td>
      <td>Has to be registered under Section 8 of the Companies Act of 2013 with a minimum of 2 directors or shareholders.</td>
      <td>Submit annual financial statements and reports to the RoC.</td>
    </tr>

    <tr>
      <td>Trust registration</td>
      <td>Limited liability of members.</td>
      <td>For a registered trust to be fully exempt from taxes, it must furnish the certifications required by Section 12A 80G.</td>
      <td>A trust has to be registered under the Indian Trust Act of 1882 by submitting a trust deed</td>
      <td>Adhere to the rules and regulations outlined in the trust deed and relevant state laws. Maintain accurate records of financial transactions, beneficiaries, and activities</td>
    </tr>

    <tr>
      <td>Society registration</td>
      <td>Limited liability of members</td>
      <td>For tax exemption a society must get a certificate of completion from the income tax officials for each applicable exclusion, such as Section 12 A, 80G, etc.</td>
      <td>It has to be registered under the Societies Registration Act of 1986 with at least 7 members.</td>
      <td>Mandatory audit if turnover exceeds a threshold. Partners not personally liable for the LLP's debts.</td>
    </tr>

    </table>

    <table className="max-w-full mx-0 block md:hidden">
  {/* ---------------------------------Section 8 Company---------------------------- */}
  <tr>
  <td className='font-bold'></td>
  <td>Section 8 Company</td>
  </tr>

  <tr>
  <td className='font-bold'>Liability</td>
  <td>Limited liability of members</td>
  </tr>

  <tr>
  <td className='font-bold'>Taxation</td>
  <td>Section 8 companies enjoy 100% tax exemption as their profits are utilised for charitable purposes, providing a significant tax advantage.</td>
  </tr>

  <tr>
  <td className='font-bold'>Formation</td>
  <td>Has to be registered under Section 8 of the Companies Act of 2013 with a minimum of 2 directors or shareholders.</td>
  </tr>

  <tr>
  <td className='font-bold'>Maintenance</td>
  <td>Submit annual financial statements and reports to the RoC.</td>
  </tr>
  <p className='w-full  border-black border-1'></p>
  <p className='w-full  border-black border-1 mt-1'></p>

{/* ----------------------------------------Trust registration---------------------------------- */}
  <tr>
  <td className='font-bold'></td>
  <td>Trust registration</td>
  </tr>

  <tr>
  <td className='font-bold'>Liability</td>
  <td>	Limited liability of members.</td>
  </tr>

  <tr>
  <td className='font-bold'>Taxation</td>
  <td>For a registered trust to be fully exempt from taxes, it must furnish the certifications required by Section 12A 80G.</td>
  </tr>

  <tr>
  <td className='font-bold'>Formation</td>
  <td>A trust has to be registered under the Indian Trust Act of 1882 by submitting a trust deed</td>
  </tr>

  <tr>
  <td className='font-bold'>Maintenance</td>
  <td>Adhere to the rules and regulations outlined in the trust deed and relevant state laws. Maintain accurate records of financial transactions, beneficiaries, and activities.</td>
  </tr>
  <p className='w-full  border-black border-1'></p>
  <p className='w-full  border-black border-1 mt-1'></p>

  {/* ----------------------------------------Society registration---------------------------------- */}
  <tr>
  <td className='font-bold'></td>
  <td>Society registration</td>
  </tr>

  <tr>
  <td className='font-bold'>Liability</td>
  <td>Limited liability of members</td>
  </tr>

  <tr>
  <td className='font-bold'>Taxation</td>
  <td>For tax exemption a society must get a certificate of completion from the income tax officials for each applicable exclusion, such as Section 12 A, 80G, etc.</td>
  </tr>

  <tr>
  <td className='font-bold'>Formation</td>
  <td>It has to be registered under the Societies Registration Act of 1986 with at least 7 members.</td>
  </tr>

  <tr>
  <td className='font-bold'>Maintenance</td>
  <td>Mandatory audit if turnover exceeds a threshold. Partners not personally liable for the LLP's debts.</td>
  </tr>
  <p className='w-full  border-black border-1'></p>
  <p className='w-full  border-black border-1 mt-1'></p>

  </table>
      </div>

      {/* ------------------------------------------Post Incorporation Compliances---------------------------------------------------- */}

    <div className="xl:px-60 lg:px-40 md:px-32 px-10 py-4 ">
    <img src='ngo company.jpg' className='lg:px-10 xl:px-40' alt='ngo'/>
      <h1 className='text-2xl md:text-3xl text-center font-bold py-2'>Post Incorporation Compliances</h1>
    <p className='text-md md:text-lg text-center'>Ensuring Post Registration Legal Compliances for your NGO by experts! </p>
    <motion.ul 
    initial={{y:100, opacity:0}}
    whileInView={{y:0, opacity:1}}
    transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.}, ease:"easeIn", duration:1}}
    className="grid grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 gap-2 pt-5 ">

    <li class="p-3 shadow-lg rounded-md cursor-pointer md:hover:-translate-x-1 border-1 border-black ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-md text-yellow-500 py-2'>NGO Compliance</h1>
      <p className='text-sm text-black'>Section 12A and 80G registration, FCRA compliance and ITR filing and DARPAN Registration done.</p>
    </li>

    <li class="p-3 shadow-lg rounded-md cursor-pointer md:hover:-translate-x-1 border-1 border-black ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-md text-yellow-500 py-2'>Trust Compliance</h1>
      <p className='text-sm text-black'>PAN card and ITR filing, Shop and Establishment act registration, Accounting and Bookkeeping support done.</p>
    </li>

    <li class="p-3 shadow-lg rounded-md cursor-pointer md:hover:-translate-x-1 border-1 border-black ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-md text-yellow-500 py-2'>Section 8 Compliance </h1>
      <p className='text-sm text-black'>Auditor Appointment, Filling Financial returns to ROC , Conduct annual general meeting</p>
    </li>

    <li class="p-3 shadow-lg rounded-md cursor-pointer md:hover:-translate-x-1 border-1 border-black ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-md text-yellow-500 py-2'>Society Compliance</h1>
      <p className='text-sm text-black'>GST, Professional tax and ITR filing, Filing documents with registrar of firms, PAN card, Accounting and Book keeping  support provided.</p>
    </li>
    </motion.ul>
    </div>

      {/* ------------------------------------------Grant Service---------------------------------------------------- */}

      <div className="xl:px-60 lg:px-40 md:px-32 px-10">
      <h1 className='text-2xl md:text-3xl text-center font-bold py-2'>Grant Service</h1>
    <p className='text-md md:text-lg text-center'>We'll secure your e-ANUDAN certificate for government grant-in-aid schemes. </p>
    <motion.ul 
    initial={{y:100, opacity:0}}
    whileInView={{y:0, opacity:1}}
    transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.}, ease:"easeIn", duration:1}}
    className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 lg:grid-cols-3 gap-2 pt-5 ">

    <li class="p-3 shadow-lg rounded-md cursor-pointer md:hover:-translate-x-1 border-1 border-black ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-md text-yellow-500 py-2'>e-ANUDAN</h1>
      <p className='text-sm text-black'>Section 12A and 80G registration, FCRA compliance and ITR filing and DARPAN Registration done.</p>
    </li>

    <li class="p-3 shadow-lg rounded-md cursor-pointer md:hover:-translate-x-1 border-1 border-black ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-md text-yellow-500 py-2'>DARPAN</h1>
      <p className='text-sm text-black'>Streamline your operations, obtain NGO Darpan Unique ID, and simplify FCRA registration with centralised support.</p>
    </li>

    <li class="p-3 shadow-lg rounded-md cursor-pointer md:hover:-translate-x-1 border-1 border-black ease-in duration-300 hover:scale-105">
      <h1 className='font-bold text-md text-yellow-500 py-2'>CSR form 1</h1>
      <p className='text-sm text-black'>Section 12A and 80G registration, FCRA compliance and ITR filing and DARPAN Registration done.</p>
    </li>
    </motion.ul>
    </div>

    {/* ---------------------------------------------------FAQS------------------------------------------------------- */}
<section class=" text-black py-32 min-h-screen">
  <div class="container flex flex-col justify-center p-4 mx-auto md:p-8">
    <h2 class="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">Frequently Asked Questions</h2>
    <div class="flex flex-col divide-y sm:px-8 lg:px-20 xl:px-32 divide-yellow-600">
      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">Can an NGO work in multiple states or districts after registration?</summary>
        <div class="px-4 pb-4 text-justify">
          <p>Yes, after registration, an NGO can expand its operations to multiple states or districts, with the requirement to inform relevant authorities and comply with specific regulations in each region.</p>
        </div>
      </details>

      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">Can an individual register more than one NGO?</summary>
        <div class="px-4 pb-4 text-justify">
          <p>Yes, an individual can register more than one NGO, provided they meet legal requirements for each registration and can manage the responsibilities associated with multiple organisations.</p>
        </div>
      </details>

      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">How can I change the name of my society?</summary>
        <div class="px-4 pb-4 text-justify">
          <p>To change the name of a society in the process of society registration, the following procedure must be followed:Convene a general meeting to discuss the name changePass a resolution on the name change with the approval of the majority of membersSubmit a notice of the name change signed by the secretary and members of the society to the registrar.</p>
        </div>
      </details>

      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">How do I convert my company to a Section 8 Company?</summary>
        <div class="px-4 pb-4">
          <p>Converting an existing company into a Section 8 Company involves the alteration of the company's Memorandum and Articles of Association and obtaining approval from the Registrar of Companies (RoC). You will need to meet the eligibility criteria, prepare the necessary documents, and follow the prescribed procedure as per the Companies Act, 2013.</p>
        </div>
      </details>

      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">Is an office required for starting a Section 8 Company?</summary>
        <div class="px-4 pb-4">
          <p>Yes, a registered office address is required for starting a Section 8 Company in India. You must provide a physical location where official communications can be received.</p>
        </div>
      </details>

      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">How Can I Register an NGO Online?</summary>
        <div class="px-4 pb-4">
          <p>To register an NGO online in India, follow the guidelines provided by the government and use platforms like NGO Darpan to submit your application and required documents.</p>
        </div>
      </details>

      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">How is a trust registered?</summary>
        <div class="px-4 pb-4">
          <p>To register a trust, you typically need to draft a trust deed specifying the trust's objectives, trustees, beneficiaries, and rules. The deed must be signed and executed by the settlor and trustees. It should then be registered with the local Sub-Registrar or the office of the Charity Commissioner, depending on the jurisdiction.</p>
        </div>
      </details>

      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">Where can I register my trust in Tamil Nadu?</summary>
        <div class="px-4 pb-4">
          <p>In Tamil Nadu, you can register your trust with the office of the Inspector General of Registration or with the office of the Charity Commissioner, depending on the nature and purpose of the trust.</p>
        </div>
      </details>

      <details>
        <summary class="py-3 outline-none cursor-pointer text-lg md:text-2xl font-semibold focus:text-yellow-500">Who is eligible for society registration?</summary>
        <div class="px-4 pb-4">
          <p>Foreigners, Company, Partnership Firm, and Registered Society are eligible for society registration.</p>
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

export default NGO
