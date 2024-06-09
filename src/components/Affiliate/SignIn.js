import { signInWithEmailAndPassword} from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from "../../firebase.config";

function SignIn(){
    const navigate = useNavigate();
    const [values, setValues] = useState({
      email: "",
      password: "",
    });
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  
    const handleSubmission = () => {
      if (!values.email || !values.password) {
        setErrorMsg("Fill all fields");
        return;
      }
      setErrorMsg("");
     
      setSubmitButtonDisabled(true);
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then(async (res) => {
          setSubmitButtonDisabled(false);
          
          navigate("/userLogin");
        })
        .catch((err) => {
          setSubmitButtonDisabled(false);
          setErrorMsg("Invalid username or password");
        });
    };

    return(
        <>
        <div className='text-center items-center md:mt-40 mt-20 w-full mx-0'>
    <form method='POST' class="flex flex-col space-y-2 h-screen md:h-auto max-w-xl md:my-10 pd:my-20 mx-auto px-4 pt-5 md:py-8 rounded-lg shadow-lg bg-white">
    <div className='text-center'>
    <img src='govyapar logo.png' class="md:px-56 px-32"/>
    <h1 class="text-xl font-bold">Login to your Affiliate Dashboard</h1>
    </div>

    <label className='text-black text-left'>Email</label>
    <div className='flex'>
    <i class="fa fa-envelope icontext-black p-2 rounded-l-md bg-yellow-500 border-t-2 border-l-2 border-b-2 border-black"></i>
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

    <p className='text-md text-red-500'>{errorMsg}</p>
    <button 
    onClick={handleSubmission} disabled={submitButtonDisabled}
    type="submit" 
    class="bg-yellow-500 hover:bg-yellow-600 md:mx-48 mx-28 w-[30%] text-black font-bold py-2 px-3 mt-4 rounded-md shadow-sm">
    SUBMIT
    </button>
    <h1 class="text-md text-black">Don't have an account? <Link to="/signUp"><span className='text-blue-500'>Sign Up</span></Link></h1>
    <h1 class="text-md text-black">Forgot password? Write to us at <a href='mail@gmail.com' className='text-blue-500'>govyaparemail</a></h1>
    </form>
        </div>
        </>
    )
        
}

export default SignIn