import React, { useState } from 'react';
import {easeIn, motion} from "framer-motion";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel,} from "@material-tailwind/react";

function Pricing(){
  const [activeTab, setActiveTab] = useState("html");
  const data = [
    {
  //     // --------------------------------------------------ITR FILING------------------------------------
      label: (<label className='z-0'>ITR Filing</label>),
      value: "html",
      desc: (
      <div className='z-[-1]'> 
      <motion.p 
initial={{y:100, opacity:0}}
whileInView={{y:0, opacity:1}}
transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
 className="text-center text-black font-medium md:py-20">
        <h1 className="md:text-5xl text-2xl text-bold">ITR FILING</h1>
      <p className="md:px-40 py-2 md:mx-40">Sit back and relax. Leave the stress of tax filing to us. Let our
      experts help you save maximum time & taxes.
      </p>
      <br />
      <ul className="itr-filing-para-points">
        <li>
          <i className="fas fa-arrow-circle-right text-yellow-500"></i> 1-1 Expert Assistance
        </li>
        <li>
          <i className="fas fa-arrow-circle-right text-yellow-500"></i> Tax Return Preparation
        </li>
        <li>
          <i className="fas fa-arrow-circle-right text-yellow-500"></i> Notices Management
        </li>
      </ul>
    </motion.p>
     {/* ----------------pricing plans itr filing----------- */}
    
    <h4 className="md:text-xl text-sm pt-4 font-bold text-yellow-500 text-center">PRICING PLAN</h4> 
    <h1 className="md:text-3xl text-xl font-bold text-black text-center md:py-4">Plans Based On Your Selection</h1>
    
  <div className="pricing-box-container flex flex-wrap justify-center z-[-1]">
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
        <li className="flex items-center text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> Single & Multiple Employers
        </li>
        <li className="flex items-center text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> Single & Multiple House Property
        </li>
        <li className="flex items-center text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> Income from Other Sources
        </li>
        <li className="flex items-center text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> Agriculture Income
        </li>
      </ul>
      <Link to ="/continue"><button className="btn-primary text-white bg-black hover:bg-black hover:shadow-md active:bg-black focus:bg-black focus:border-white px-4 py-2 rounded-md font-bold mt-4 uppercase transition ease-in-out duration-100">
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
      <h5 className="text-lg font-bold text-white uppercase">BUSINESS & PROFESSIONAL PLAN</h5>
      <p className="price text-4xl font-bold text-white">
        <sup className="text-base font-light text-white">₹</sup>
        2,499
        <sub className="font-normal text-xl">/year</sub>
      </p>
      <p className="text-white py-2">Inclusive of Taxes</p>
      <ul className="features-list list-none pl-0 mt-4">
        <li className="flex items-center text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i> Single & Multiple Employers
        </li>
        <li className="flex items-center text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i> Single & Multiple House Property
        </li>
        <li className="flex items-center text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i> Business & Professional Income <br/> (Non Audit) Without B/S P/L*
        </li>
        <li className="flex items-center text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i> Income from Other Sources
        </li>
      </ul>
      <Link to ="/continue"><button className="btn-primary text-white bg-yellow-500 hover:shadow-md px-4 py-2 rounded-md font-bold mt-4 uppercase transition ease-in-out duration-100">
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
        <li className="flex items-center text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> Single & Multiple Employers
        </li>
        <li className="flex items-center text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> Single & Multiple House Property
        </li>
        <li className="flex items-center text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>  Business & Professional Income <br/> (Non Audit) Without B/S P/L*
        </li>
        <li className="flex items-center text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> Multiple Capital Gain Income
        </li>
      </ul>
      <Link to ="/continue"><button className="btn-primary text-white bg-black hover:bg-black hover:shadow-md active:bg-black focus:bg-black focus:border-white px-4 py-2 rounded-md font-bold mt-4 uppercase transition ease-in-out duration-100">
        Choose Plan
      </button></Link>
</motion.div>
</div>
</div>
      ),
    },
    // -------------------------------------------TAX-PLANNER------------------------------------
    {
      label: "Tax Planner",
      value: "react",
      desc: (
        <div>
        <motion.p 
initial={{y:100, opacity:0}}
whileInView={{y:0, opacity:1}}
transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
className="text-center text-black font-medium md:py-20">
        <h1 className="md:text-5xl text-2xl text-bold">TAX PLANNER</h1>
        <p  className="md:px-40 py-2 md:mx-40">Personalized tax planning assistance to individuals and businesses by a team of qualified and credible tax experts.
        </p> <br />
      <ul className="itr-filing-para-points">
        <li>
          <i className="fas fa-arrow-circle-right text-yellow-500"></i> Expert-driven tax planning
        </li>
        <li>
          <i className="fas fa-arrow-circle-right text-yellow-500"></i> In-depth tax report
        </li>
        <li>
          <i className="fas fa-arrow-circle-right text-yellow-500"></i> Reduce tax liabilities
        </li>
      </ul>
    </motion.p> 
  
     {/* ----------------pricing plans tax-planner----------- */}
     <h4 className="md:text-xl text-sm pt-4 font-bold text-yellow-500 text-center">PRICING PLAN</h4> 
    <h1 className="md:text-3xl text-xl font-bold text-black text-center md:py-4">Plans Based On Your Selection</h1>
    
  <div className="pricing-box-container flex flex-wrap justify-center">
    <motion.div initial={{y:100, opacity:0}}
whileInView={{y:0, opacity:1}}
transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
className="pricing-box bg-yellow-500 text-center shadow-md rounded-md p-6 m-2 min-w-sm max-w-md h-auto pt-5 pb-20">
    <h5 className="text-lg font-bold text-black uppercase">Tax Planning</h5>
      <p className="price text-4xl font-bold text-black">
        <sup className="text-base font-light text-black">₹</sup>
        999
        <sub className="font-normal text-xl">/year</sub>
      </p>
      <p className="text-black py-2">Inclusive of Taxes</p>
      <ul className="features-list list-none pl-0 mt-4">
        <li className="flex items-center text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> Maximize your financial potential <br/> with TaxBuddy.
        </li>
        <li className="flex items-center text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> Receive an in-depth tax report <br/> tailored to your investments.
        </li>
        <li className="flex items-center text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> Get detailed guidance on investments that <br/> will help reduce your tax liabilities
        </li>
        <li className="flex items-center text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> Receive expert guidance tailored to <br/> your specific needs
        </li>
        <li className="flex items-center text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> All types of tax planning in one place <br/> (Individual, Business, NRI, Capital Gain)
        </li>
      </ul>
      <Link to ="/continue"><button className="btn-primary text-white bg-black hover:bg-black hover:shadow-md active:bg-black focus:bg-black focus:border-white px-4 py-2 rounded-md font-bold mt-4 uppercase transition ease-in-out duration-100">
        Choose Plan
      </button></Link>
    </motion.div>
    
    <motion.div initial={{y:100, opacity:0}}
whileInView={{y:0, opacity:1}}
transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
className="pricing-box bg-black text-center shadow-md rounded-md p-6 m-2 min-w-sm max-w-md h-auto pt-5 pb-20">
      <h5 className="text-lg font-bold text-white uppercase">Tax Planning For High <br/> Networth Individuals (HNI)</h5>
      <p className="price text-4xl font-bold text-white">
        <sup className="text-base font-light text-white">₹</sup>
        ₹11,999
        <sub className="font-normal text-xl">/year</sub>
      </p>
      <p className="text-white py-2">Inclusive of Taxes</p>
      <ul className="features-list list-none pl-0 mt-4">
        <li className="flex items-center text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i> Step by step tax planning <br/> strategy for single taxpayer
        </li>
        <li className="flex items-center text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i> Extensive overview on income <br/> sources (only for current financial year)
        </li>
        <li className="flex items-center text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i> Consolidated tax report  <br/> (Only for current financial year)
        </li>
        <li className="flex items-center text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i> Quarterly Advance Tax Calculation
        </li>
      </ul>
      <Link to ="/continue"><button className="btn-primary text-white bg-yellow-500 hover:bg-gray-800 hover:shadow-md px-4 py-2 rounded-md font-bold mt-4 uppercase transition ease-in-out duration-100">
        Choose Plan
      </button></Link>
    </motion.div>
  
  <motion.div initial={{y:100, opacity:0}}
whileInView={{y:0, opacity:1}}
transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
className="pricing-box bg-yellow-500 text-center shadow-md rounded-md p-6 m-2 min-w-sm max-w-md h-auto pt-5 pb-20">
  <h5 className="text-lg font-bold text-black uppercase">Tax Planning For High <br/> Networth Individuals (HNI) –</h5>
      <p className="price text-4xl font-bold text-black">
        <sup className="text-base font-light text-black">₹</sup>
        ₹24,999
        <sub className="font-normal text-xl">/year</sub>
      </p>
      <p className="text-black py-2">Inclusive of Taxes</p>
      <ul className="features-list list-none pl-0 mt-4">
        <li className="flex items-center text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> Develop a Comprehensive & Family <br/> wide Tax Planning Strategy
        </li>
        <li className="flex items-center text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> Consolidated Income Analysis <br/> & tax reports
        </li>
        <li className="flex items-center text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> Advisory for effective Tax <br/> Planning for Long Term Perspective
        </li>
        <li className="flex items-center text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> Provide user with Innovative Ideas <br/> & Strategy for Tax Saving
        </li>
        <li className="flex items-center text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> Assisting in End to End <br/> Compliance Facilitation
        </li>
      </ul>
      <Link to ="/continue"><button className="btn-primary text-white bg-black hover:bg-black hover:shadow-md active:bg-black focus:bg-black focus:border-white px-4 py-2 rounded-md font-bold mt-4 uppercase transition ease-in-out duration-100">
        Choose Plan
      </button></Link>
</motion.div>
</div>
</div>
      ),
    },
    // --------------------------------------------------------------GST----------------------------------------------
    {
      label: "GST",
      value: "vue",
      desc: (
        <div>
        <motion.p
initial={{y:100, opacity:0}}
whileInView={{y:0, opacity:1}}
transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
 className="text-center text-black font-medium md:py-20">
        <h1 className="md:text-5xl text-2xl text-bold">GST</h1>
        <p className="md:px-40 py-2 md:mx-40">Offload your GST filing to our CAs and peacefully focus on your business.</p>
      <br />
      <ul className="itr-filing-para-points">
        <li>
          <i className="fas fa-arrow-circle-right text-yellow-500"></i> CA guided filing
        </li>
        <li>
          <i className="fas fa-arrow-circle-right text-yellow-500"></i> End to end tax advisory
        </li>
        <li>
          <i className="fas fa-arrow-circle-right text-yellow-500"></i> Monthly GST credit reconciliation
        </li>
      </ul>
    </motion.p> 
    {/* ----------------pricing plans gst----------- */}
    <h4 className="md:text-xl text-sm pt-4 font-bold text-yellow-500 text-center">PRICING PLAN</h4> 
    <h1 className="md:text-3xl text-xl font-bold text-black text-center md:py-4">Plans Based On Your Selection</h1>
    
  <div className="pricing-box-container flex flex-wrap justify-center">
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
        <li className="flex items-center text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> Application for GST Registration
        </li>
        <li className="flex items-center text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> Application for Clarification
        </li>
        <li className="flex items-center text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> Any modification in GST <br/> Registration Application
        </li>
      </ul>
      <Link to ="/continue"><button className="btn-primary text-white bg-black hover:bg-gray-800 hover:shadow-md px-4 py-2 rounded-md font-bold mt-4 uppercase transition ease-in-out duration-100">
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
        <li className="flex items-center text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i> GSTR-1 Return Filing
        </li>
        <li className="flex items-center text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i> GSTR-3B Return Filing
        </li>
        <li className="flex items-center text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i> Credit Reconciliation (Reconciliation <br/> of Purchase Register and GSTR-2A)
        </li>
        <li className="flex items-center text-white mb-2">
          <i className="fas fa-check-circle mr-2 text-white"></i> Excludes Annual Return
        </li>
      </ul>
      <Link to ="/continue"><button className="btn-primary text-white bg-yellow-500 hover:bg-gray-800 hover:shadow-md px-4 py-2 rounded-md font-bold mt-4 uppercase transition ease-in-out duration-100">
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
        <li className="flex items-center text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> GSTR-1 Return Filing
        </li>
        <li className="flex items-center text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> GSTR-3B Return Filing
        </li>
        <li className="flex items-center text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i> Credit Reconciliation (Reconciliation <br/> of Purchase Register and GSTR-2A)
        </li>
        <li className="flex items-center text-black mb-2">
          <i className="fas fa-check-circle mr-2 text-black"></i>Excludes Annual Return
        </li>
      </ul>
      <Link to ="/continue"><button className="btn-primary text-white bg-black hover:shadow-md px-4 py-2 rounded-md font-bold mt-4 uppercase transition ease-in-out duration-100">
        Choose Plan
      </button></Link>
    </motion.div>
</div>
</div>
      ),
    },
    {
      label: "Company Formation",
      value: "angular",
      desc: (
        <div>
           <h1 className="text-center text-black font-medium pt-20 pb-7 text-5xl text-bold">COMPANY FORMATION</h1>
        <table className="company-formation-table">
  <tr>
      <th>Firm Of Bussiness</th>
      <th>Private Limited Company</th>
      <th>Private Limited Company</th>
      <th>Private Limited Company</th>
      <th>Partnership Firm</th>
      <th>Sole Proprietor</th>
    </tr>
    <tr>
      <td>Recommended For</td>
      <td>Startup & Growing Business</td>
      <td>One Man Army</td>
      <td>Partnership Firm with Legal Sheild</td>
      <td>Business Manage by 2 or more people</td>
      <td>Business Manage by Single Person</td>
    </tr>
    <tr>
      <td>Limited Liability Protection</td>
      <td>Available</td>
      <td>Available</td>
      <td>Available</td>
      <td>Not Available</td>
      <td>Not Available</td>
    </tr>
  <tr>
    <td>Whether Business Name Secure?</td>
    <td>Yes</td>
    <td>Yes</td>
    <td>Yes</td>
    <td>No</td>
    <td>No</td>
  </tr>
  <tr>
    <td>Tax On Profit</td>
    <td>25%</td>
    <td>30%</td>
    <td>30%</td>
    <td>30%</td>
    <td>10-30%</td>
</tr>
<tr>
    <td>Equity Funding</td>
    <td>Possible%</td>
    <td>Not Possible</td>
    <td>Not Possible</td>
    <td>Not Possible</td>
    <td>Not Possible</td>
 </tr>
 <tr>
    <td>Loan & Borrowings</td>
    <td>Easy</td>
    <td>Easy</td>
    <td>Easy</td>
    <td>Difficult</td>
    <td>Difficult</td>
</tr>
<tr>
    <td>Audit Requirement</td>
    <td>Mandatory</td>
    <td>Mandatory</td>
    <td>If Annual turnover exceeds Rs 40 Lacs <br/> or Capital Exceeds Rs 25 Lac</td>
    <td>If Annual turnover exceeds Rs 1 Crore</td>
    <td>If Annual turnover exceeds Rs 1 Crore</td>
</tr>
<tr id="table-plans">
      <td>Plans</td>
      <td><Link to ="/continue"><button className="table-plans-btn">Start from 11,499</button></Link></td>
      <td><Link to ="/continue"><button className="table-plans-btn">Start from 10,499</button></Link></td>
      <td><Link to ="/continue"><button className="table-plans-btn">Start from 7999</button></Link></td>
      <td><Link to ="/continue"><button className="table-plans-btn">Start from 11,499</button></Link></td>
      <td><Link to ="/continue"><button className="table-plans-btn">Start from 11,499</button></Link></td>
    </tr>
</table>
</div>
      ),
    },
  ];

  return(
    <>
    {/* <!-- -------------------------------------------------------------Pricing----------------------------------------------------------- --> */} 
  <div className="md:mx-40 w-full md:w-auto py-32 md:py-40 z-[-10]">
    <motion.h1 initial={{x:-100, opacity:0}}
whileInView={{x:0, opacity:1}}
transition={{delay:0.2, x:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}
className="md:text-6xl text-4xl md:pb-20 text-center font-bold text-black">PRICING</motion.h1>
<motion.div initial={{y:100, opacity:0}}
whileInView={{y:0, opacity:1}}
transition={{delay:0.2, y:{type:"spring", stiffness:60}, opacity:{duration:0.2}, ease:"easeIn", duration:1}}>
   <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-3 text-white bg-black pt-20 z-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-yellow-500 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
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
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
    </motion.div>
   </div>

       {/* -----------------------------------------------Contact------------------------------------------------ */}
       <div class="container  bg-black w-full mt-20 pt-10 mx-0">
  <div class="md:flex justify-between items-center md:px-60 py-10 ">
    <motion.div
     initial={{x:-100, opacity:0}}
     whileInView={{x:0, opacity:1}}
     transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
     >
      <h1 class="md:text-4xl text-2xl text-yellow-500 font-bold text-center leading-tight">Subscribe to us!</h1>
      <p class="text-md text-white my-2">Subscribe to our newsletter for exclusive updates and offers.</p>
    </motion.div>
    <form>
      <motion.div  initial={{x:-100, opacity:0}}
whileInView={{x:0, opacity:1}}
transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
 class="flex">
        <input type="text" placeholder="Enter your email" name="mail" required class="rounded-md px-4 py-2 w-full mr-2 focus:outline-none focus:ring-1 focus:ring-yellow-500" />
        <button type="submit" class="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-md shadow-sm">SEND</button>
      </motion.div>
    </form>
  </div>
<div>
  <h1 className="text-2xl text-yellow-500 font-bold text-center">Contact</h1>
  <motion.form
   initial={{y:-100, opacity:0}}
   whileInView={{y:0, opacity:1}}
   transition={{delay:0.10, y:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
    className="text-xl space-y-1 rounded-md mx-3 md:pt-10 pt-2 text-center md:px-[480px]"> 
    <label className='text-white'>Name</label> <br/>
    <div className='flex'>
    <i class="fa fa-user icon text-black p-2 rounded-l-md bg-yellow-500"></i>
    <input type='text' name='name' placeholder='Enter your Name' className='w-full p-1 rounded-r-md' required/>
    </div>
    <br/>
    <label className='text-white'>Email</label><br/>
    <div className='flex'>
    <i class="fa fa-envelope icontext-black p-2 rounded-l-md bg-yellow-500"></i>
    <input type='email' name='email' placeholder='Enter your Email' className='w-full p-1 rounded-r-md' required/>
    </div>
    <br/>
    <label className='text-white'>Message</label><br/>
    <div className='flex'>
    <i class="fa fa-edit icon text-black p-2 rounded-l-md bg-yellow-500"></i>
    <textarea className='w-full p-1 rounded-r-md' placeholder='Enter your Message' required></textarea>
    </div>
    <button type="submit" class="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-3 mt-4 rounded-md shadow-sm">SUBMIT</button>
  </motion.form>
</div>
<div className='mt-10 text-center'>
<motion.ul
 initial={{x:-100, opacity:0}}
 whileInView={{x:0, opacity:1}}
 transition={{delay:0.10, x:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
  class="list-none">
      <h1 class="text-xl text-yellow-500">GET IN TOUCH</h1>
        <li className='font-semibold text-white'><i class="fa fa-phone text-yellow-500"> </i> +91-9808030923</li> 
        <li className='font-semibold text-white'><i class="fa fa-envelope text-yellow-500"> </i> govyapar@gmail.com/</li>       
</motion.ul>
<motion.ul
 initial={{y:100, opacity:0}}
 whileInView={{y:0, opacity:1}}
 transition={{delay:0.10, y:{type:"spring", stiffness:60}, opacity:{duration:0.8}, ease:"easeIn", duration:1}}
  className='flex space-x-2 justify-center mt-3 text-lg'>
        <li><i class="fa fa-linkedin text-yellow-500 hover:font-bold"></i></li>
        <li><i class="fa fa-twitter text-yellow-500 hover:font-bold"></i></li>
        <li><i class="fa fa-instagram text-yellow-500 hover:font-bold"></i></li>
        <li><i class="fa fa-facebook-f text-yellow-500 hover:font-bold"></i></li>
        <li><i class="fa fa-youtube text-yellow-500 hover:font-bold"></i></li> 
</motion.ul>
</div>
<footer className='text-white text-sm text-center mb-0 mt-2'>
  ©Copyright 2024. All Rights Reserved. Govyapar
</footer>

</div>
    </>
  )
}
export default Pricing