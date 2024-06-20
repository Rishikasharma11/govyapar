import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {easeIn, motion} from "framer-motion";

//  import logo from './images/logo.png';

const Navbar = () => {
  const [nav, hideNav] = useState("");
  let [open,setOpen]=useState(false); 

  return (  
    <>
      <div className='shadow-md bg-white w-full fixed top-0 left-0 z-20'>
      <div className='md:flex items-center text-black justify-between py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins]'>
        <span className='text-3xl text-white mr-1 pt-2'>
        
        </span>
        <Link to ='/home'><img src='govyapar logo.png' className='w-30 h-16'/></Link>
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0  absolute md:static md:z-auto z-10 bg-white left-0 w-full md:w-auto md:pl-0 pl-2 transition-all duration-500 ease-in  ${open ? 'top-30 ':'top-[-800px]'}`}>
            
             <li className='md:ml-8 text-xl md:my-0 my-7'><NavLink onClick={() => setOpen(!open)} to="/home" className="hover:text-yellow-500 focus:text-yellow-500 active:text-yellow-500">Home</NavLink></li>
             <li className="group md:ml-8 text-xl md:my-0 my-7">
              
               <li className="hover:text-yellow-500 focus:text-yellow-500 cursor-pointer">Services <i className="fa fa-caret-down cursor-pointer"></i></li>
               <ul 
                 className="md:absolute right-0 md:right-40 items-center hidden group-hover:block bg-white md:px-10 md:py-3 border-1 md:border-0 shadow-md md:rounded text-black md:h-70"
               >
              <div className='container md:space-x-10 md:flex'>
              <div className='flex-col md:py-2 md:items-left'>
                 <li><NavLink onClick={() => setOpen(!open)} to="/itrFiling" className="block pt-2 px-2 text-black hover:text-yellow-500 hover:rounded-md focus:text-yellow-500">ITR Filing <i className='fa fa-caret-right'></i></NavLink>
                 <p className='text-black text-sm hidden md:block'>Assisted tax filing by qualified tax experts</p>
                 </li>
                 <hr className='block md:hidden'/>
                 <li><NavLink onClick={() => setOpen(!open)} to="/notice" className="block pt-2 px-2 text-black hover:text-yellow-500  hover:rounded-md focus:text-yellow-500">Notices <i className='fa fa-caret-right'></i></NavLink>
                 <p className='text-black text-sm hidden md:block'>Resolve notices of all types</p>
                 </li>
                 <hr className='block md:hidden'/>
                 <li><NavLink onClick={() => setOpen(!open)} to="/consultation" className="block pt-2 px-2 text-black hover:text-yellow-500  hover:rounded-md focus:text-yellow-500">Consultation <i className='fa fa-caret-right'></i></NavLink>
                 <p className='text-black text-sm hidden md:block'>Plan and reduce your tax liability</p>
                 </li>
                 <hr className='block md:hidden'/>
                 <li><NavLink onClick={() => setOpen(!open)} to="/ngo" className="block pt-2 px-2 text-black hover:text-yellow-500 hover:rounded-md focus:text-yellow-500">NGO <i className='fa fa-caret-right'></i></NavLink>
                 <p className='text-black text-sm hidden md:block'>Register Your NGO</p>
                 </li>
                 <hr className='block md:hidden'/>
                 <li><NavLink onClick={() => setOpen(!open)} to="/startupFunding" className="block pt-2 px-2 text-black hover:text-yellow-500 hover:rounded-md focus:text-yellow-500">Startup Funding <i className='fa fa-caret-right'></i></NavLink>
                 <p className='text-black text-sm hidden md:block'>Startup Funding</p>
                 </li>
                 <hr className='block md:hidden'/>
                 <li><NavLink onClick={() => setOpen(!open)} to="/businessLoans" className="block pt-2 px-2 text-black hover:text-yellow-500 hover:rounded-md focus:text-yellow-500">Business Loans <i className='fa fa-caret-right'></i></NavLink>
                 <p className='text-black text-sm hidden md:block'>Business Loans</p>
                 </li>
                 <hr className='block md:hidden'/>
              </div>

              <div className='flex-col md:py-2 md:items-right'>
                 <li><NavLink onClick={() => setOpen(!open)} to="/gstFiling" className="block pt-2 px-2 text-black hover:text-yellow-500  hover:rounded-md focus:text-yellow-500">GST Filing <i className='fa fa-caret-right'></i></NavLink>
                 <p className='text-black text-sm hidden md:block'>GST registration and timely filing</p>
                 </li>
                 <hr className='block md:hidden'/>
                 <li><NavLink  onClick={() => setOpen(!open)} to="/pricing" className="block pt-2 px-2 text-black hover:text-yellow-500 hover:rounded-md focus:text-yellow-500">Company Formation <i className='fa fa-caret-right'></i></NavLink>
                 <p className='text-black text-sm hidden md:block'>Expert guidance for seamless incorporation</p>
                 </li>
                 <hr className='block md:hidden'/>
                 <li><NavLink onClick={() => setOpen(!open)} to="/tax-planner" className="block pt-2 px-2 text-black hover:text-yellow-500 hover:rounded-md focus:text-yellow-500">Tax Planner <i className='fa fa-caret-right'></i></NavLink>
                 <p className='text-black text-sm hidden md:block'>Plan and reduce your tax liability</p>
                 </li>
                 <hr className='block md:hidden'/>
                 <li><NavLink onClick={() => setOpen(!open)} to="/trademark" className="block pt-2 px-2 text-black hover:text-yellow-500 hover:rounded-md focus:text-yellow-500">Trademark <i className='fa fa-caret-right'></i></NavLink>
                 <p className='text-black text-sm hidden md:block'>Apply Trademark Registration Online</p>
                 </li>
                 <hr className='block md:hidden'/>
                 <li><NavLink onClick={() => setOpen(!open)} to="/virtualCfo" className="block pt-2 px-2 text-black hover:text-yellow-500 hover:rounded-md focus:text-yellow-500">Virtual CFO <i className='fa fa-caret-right'></i></NavLink>
                 <p className='text-black text-sm hidden md:block'>Virtual CFO</p>
                 </li>
                 <hr className='block md:hidden'/>
                 <li><NavLink onClick={() => setOpen(!open)} to="/" className="block pt-2 px-2 text-black hover:text-yellow-500 hover:rounded-md focus:text-yellow-500">ISO Certification <i className='fa fa-caret-right'></i></NavLink>
                 <p className='text-black text-sm hidden md:block'>ISO Certification</p>
                 </li>
              </div> 
              </div>
              </ul>
            
             </li>
             <li className='md:ml-8 text-xl md:my-0 my-7'><NavLink onClick={() => setOpen(!open)} to="/pricing" className="hover:text-yellow-500 focus:text-yellow-500">Pricing</NavLink></li>
             <li className='md:ml-8 text-xl md:my-0 my-7'><NavLink onClick={() => setOpen(!open)} to="/affiliate" className="hover:text-yellow-500 focus:text-yellow-500">Affiliate Program</NavLink></li>
             {/* <li className='md:ml-8 text-xl md:my-0 my-7'><Link onClick={() => setOpen(!open)}to="/career" className="hover:text-yellow-500">Career</Link></li>   */}
             <li className='md:ml-8 text-xl md:my-0 my-7'><NavLink onClick={() => setOpen(!open)}to="/contact" className="hover:text-yellow-500 focus:text-yellow-500">Contact</NavLink></li>  
      </ul>
      
      </div>
    </div>

    
    </>

  );
};

export default Navbar;