import React, { useState } from 'react';
import { Link } from 'react-router-dom';


//  import logo from './images/logo.png';

const Navbar = () => {
  let Links =[
    {name:"HOME",link:"/home"},
    {name:"SERVICE",link:"/service"},
    {name:"PRICING",link:"/pricing"},
    {name:"AFFILIATE PROGRAM",link:"/affiliate"},
    {name:"NOTICE",link:"/notice"},
    {name:"CONTACT",link:"/contact"},
  ];
  let [open,setOpen]=useState(false);
  return (  
    <>
      <div className='shadow-md w-full fixed top-0 left-0 z-10'>
      <div className='md:flex items-center bg-black justify-between bg-white py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <span className='text-3xl text-indigo-600 mr-1 pt-2'>
        
        </span>
        GoVyapar
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-10 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <Link to = {link.link} className='text-black hover:text-yellow-500 duration-500'>{link.name}</Link>
            </li>
          ))
        }  
      </ul>
      </div>
    </div>
    <home/>
    {/* <header className='bg-black w-full fixed left-0 top-0 h-80 pt-3 px-10'>
      <nav className='flex items-center justify-between text-white'>
        <a href='#' className='text-2xl font-bold border-2px-2 py-1'>Govyapar</a>
        <div className='absolute top-[64px] flex flex-col gap-6  items-center  py-2'>
        <ul className='items-center flex flex-col'>
          <li>Home</li>
          <li>Services</li>
          <li>Affiliate Program</li>
          <li>Notices</li>
          <li>Contact</li>
        </ul>
        </div>
        <div className=''>
          <i>Login</i>
        </div>
      </nav>
    </header>
     */}

        

    
    </>
//     <div className="bg-black absolute w-full font-semibold">
//   <nav className="flex justify-between items-center px-4 py-2">
//     <Link to="/" className="text-white text-2xl font-bold"></Link>
//     {/* <img src={logo} alt='logo'/> */}
//     <ul className="flex justify-center items-center space-x-14 text-white">
//       <li><Link to="/home" className="hover:text-yellow-500">Home</Link></li>
//       <li className="relative group">
//         <li><Link to="/service" className="hover:text-yellow-500">
//           Services <i className="fa fa-caret-down ml-2"></i></Link>
//         </li>
//         <ul 
//           className="absolute top-full left-0 hidden group-hover:block bg-white px-3 py-3 shadow-md rounded"
//         >
//           <li><Link to="/consultation" className="block py-2 px-2 text-black hover:bg-yellow-500 hover:text-black hover:rounded-md">Consultation</Link></li>
//           <li><Link to="/pricing" className="block py-2 px-2 text-black hover:bg-yellow-500 hover:text-black hover:rounded-md">Pricing</Link></li>
//           <li><Link to="/tax-planner" className="block py-2 px-2 text-black hover:bg-yellow-500 hover:text-black hover:rounded-md">Tax Planner</Link></li>
//         </ul>
//       </li>
//       <li><Link to="/affiliate" className="hover:text-yellow-500">Affiliate Program</Link></li>
//       <li><Link to="/about" className="hover:text-yellow-500">About</Link></li>
//       <li><Link to="/contact" className="hover:text-yellow-500">Contact</Link></li>
//     </ul> 
//     <Link to="/" className="flex items-center text-white">
//       <i className="fa fa-user mr-2  hover:text-yellow-500"></i>
//     </Link>
//   </nav>
// </div> 
  );
};

export default Navbar;