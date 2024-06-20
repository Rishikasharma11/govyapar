import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const GstRegistration = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.setAttribute('data-payment_button_id', 'pl_ONxpRo0wDMz4Bb');
    script.async = true;
    document.getElementById('razorpay-button-container').appendChild(script);
  }, []);

  return (
    <>
    <div className="items-center text-center">
     {/* <div className="text-center items-center justify-center mx-auto py-10 md:py-16 max-w-xl px-2"> 
    <div className='mt-32 md:mt-28 text-center justify-center rounded-xl shadow-lg border-1 bg-white border-black py-10'>  */}
    <form id="razorpay-button-container">
      <img src='govyapar logo.png' class="md:px-56 px-28"/>
    <h5 className="text-lg font-bold text-black uppercase">GST REGISTRATION</h5>
      
      <h1 className='text-xl font-semibold p-2 text-center'>Step 1- Proceed to pay:-</h1>
      {/* The script will dynamically add the payment button here */}
    </form>

     {/* <h1 className='text-xl font-semibold px-2 text-center'>Step 2- Fill out the form by clicking the button below:-</h1>
        <Link to = "https://docs.google.com/forms/d/e/1FAIpQLSdd9q2O6XhxeUL_nSJdOr20X_ZKEOdkARfxr5q0aGWR9zEYRA/viewform?vc=0&c=0&w=1&flr=0">
        <button class="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 mb-3 text-sm hover:scale-105 duration-300 ease-in">Upload Documents</button>
        </Link>
        </div> */}

    {/* <h1 className='text-black text-lg pt-2'>Contact us</h1>
    <ul>
    <li className='font-semibold text-black text-md'><i class="fa fa-phone text-black"> </i> +91-9808030923</li> 
       <a href= "mailto: support@govyapar.com"><li className='font-semibold text-black text-md'><i class="fa fa-envelope text-black"> </i> support@govyapar.com</li> </a>       
    </ul>
    <br/>
    <h1 className='text-black text-lg'>Terms & Conditions:</h1>
    <p className='text-black text-sm'>You agree to share information entered on this page with govyapar (owner of this page) and Razorpay, adhering to applicable laws.</p>
    </div> 
    </div> */}

     {/* <div className='md:pt-32 lg:pt-40 md:px-8 lg:px-20 md:w-[50%]'>
    <h1 className='text-black text-center font-bold uppercase text-lg lg:py-2 underline'>Instructions</h1>
      <ul className=' text-justify md:px-5'>
      <li className='text-md md:text-lg px-2'><span className='text-lg md:text-xl font-bold'>Step 1:-</span> In this step, you'll start the payment process. You'll be asked to provide your name and email address to ensure you receive a payment receipt. We offer various payment methods through Razorpay, making it convenient for you to choose the one that suits you best.</li>
      <br/>

      <li className='text-md md:text-lg px-2'><span className='text-lg md:text-xl font-bold'>Step 2:-</span> After completing the payment, you'll need to fill out a form by clicking the button below. This form will ask for additional information and allow you to upload necessary documents. The documents and forms are required to keep your records and ensure we have all the information needed to provide you with the best service.</li>
      </ul> */}
    </div> 
    </>

  );
};

export default GstRegistration;