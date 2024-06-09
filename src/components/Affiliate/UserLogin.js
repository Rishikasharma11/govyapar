import React from 'react'
import { Link } from 'react-router-dom'


function UserLogin(){
    return(
        <>
        {/* -------------------------------vertical navbar-------------------------- */}
            <div className='container md:w-[18%] h-screen left-0 fixed bg-white shadow-md cursor-pointer border-1 border-r-black'>
            <img src='govyapar logo.png' class="px-24 "/>
            <ul className='text-2xl text-black space-y-4 md:pt-4 text-center'>
                <li><i class="fa fa-home" aria-hidden="true"></i> Dashboard</li>
                <li><i class='fas fa-coins'></i> Payouts</li>
                <li><i class="fas fa-users"></i> Referrals</li> <hr/>
            </ul>
        </div>

{/* -------------------------------horicontal navbar with user icon--------------------- */}
        {/* <div className='container h-screen  fixed bg-white shadow-md cursor-pointer border-1 border-r-black'>
            </div> */}
        
       
        </>
    )
        
}

export default UserLogin