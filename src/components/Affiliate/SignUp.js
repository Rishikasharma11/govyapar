import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from "../../firebase.config";

function SignUp(){
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        upi: "",
    });
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handleSubmission = () => {
        if(!values.name || !values.email || !values.password || !values.upi){
            setErrorMsg("Fill all the fields");
            return;
        }
        setErrorMsg("");
        
        setSubmitButtonDisabled(true);
        createUserWithEmailAndPassword(auth, values.email, values.password)
        .then(async(res) => {
            setSubmitButtonDisabled(false);
            const user = res.user;
            await updateProfile(user, {
                displayName: values.name,
            });
            navigate("/userLogin");   
        })
        .catch((err) => {
            setSubmitButtonDisabled(false);
            setErrorMsg("Email already in use");
        });
    };
    
    return(
        <>
        <div className='text-center items-center md:mt-24 mt-20 w-full mx-0'>
    <form method='POST' class="flex flex-col space-y-2 h-screen md:h-auto max-w-xl md:my-10 pd:my-20 mx-auto px-4 pt-5 md:py-8 rounded-lg shadow-lg bg-white">
    <div className='text-center'>
    <img src='govyapar logo.png' class="md:px-56 px-32"/>
    <h1 class="text-xl font-bold">Welcome to GoVyapar's Affiliate Program</h1>
    <h1 class="text-md font-bold">Earn Flat 30% reward for each referral</h1>
    </div>

    <label className='text-black text-left'>Name</label>
    <div className='flex'>
    <i class="fa fa-user icon text-black p-2 rounded-l-md bg-yellow-500 border-t-2 border-l-2 border-b-2 border-black"></i>
    <input type='text' 
    name='name' 
    placeholder='Enter your Name' 
    className='w-full p-1 rounded-r-md border-2 border-black' required
    onChange={(event) =>
    setValues((prev) => ({ ...prev, name:event.target.value}))
    }
    />
    </div>

    <br/>

    <label className='text-black text-left'>Email</label>
    <div className='flex'>
    <i class="fa fa-envelope icon text-black p-2 rounded-l-md bg-yellow-500 border-t-2 border-l-2 border-b-2 border-black"></i>
    <input type='email' 
    name='email' 
    placeholder='Enter your Email' 
    className='w-full p-1 rounded-r-md border-2 border-black' required
    onChange={(event) =>
    setValues((prev) => ({ ...prev, email:event.target.value}))
    }
    />
    </div>

    <br/>

    <label className='text-black text-left'>Password</label>
    <div className='flex'>
    <i class="fas fa-key text-black p-2 rounded-l-md  border-t-2 border-l-2 border-b-2 border-black bg-yellow-500"></i>
    <input type='password' 
    name='password' 
    placeholder='Enter your Password'
    className='w-full p-1 rounded-r-md border-2 border-black' required
    onChange={(event) =>
    setValues((prev) => ({ ...prev, password:event.target.value}))
    }
    />
    </div>

    <br/>

    <label className='text-black text-left'>UPI id to redeem rewards</label>
    <div className='flex'>
    <i class="fa-solid fa-id-card text-black p-2 rounded-l-md  border-t-2 border-l-2 border-b-2 border-black bg-yellow-500"></i>
    <input type='text' 
    name='password' 
    placeholder='Enter your UPI' 
    className='w-full p-1 rounded-r-md border-2 border-black' required
    onChange={(event) =>
    setValues((prev) => ({ ...prev, upi:event.target.value}))
    }
    />
    </div>

    <p className='text-md text-red-500'>{errorMsg}</p>
    <button 
    onClick={handleSubmission} disabled={submitButtonDisabled}
    type="submit" 
    class="bg-yellow-500 hover:bg-yellow-600 md:mx-48 mx-28 w-[30%] text-black font-bold py-2 px-3 mt-4 rounded-md shadow-sm">
    SUBMIT
    </button>
    <h1 class="text-md text-black">Already have an account? <Link to="/signIn"><span className='text-blue-500'>Log In</span></Link></h1>
    </form>
        </div>
        </>
        )
        
}

export default SignUp