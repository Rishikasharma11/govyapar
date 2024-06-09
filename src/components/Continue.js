import React, { useState } from 'react'
// import { useFormState } from 'react-use-form-state';
import {ref, uploadBytes, getDownloadURL} from "firebase/storage";
import { storage } from '../firebase.config';
import axios from 'axios'

function Continue(){
  // const CheckoutHandler = async({name, amount})=>{
  //   const {data:{order}} = await axios.post("http://localhost:3000/payment/checkout", {
  //     name,amount
  //   })

  //   var options = {
  //     "key": "rzp_test_SDQXydWqPP1S3N", // Enter the Key ID generated from the Dashboard
  //     "amount": "order.amount", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  //     "currency": "order.currency",
  //     "name": "Acme Corp",
  //     "description": "Test Transaction",
  //     "image": "https://example.com/your_logo",
  //     "order_id": "order.id", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
  //     "handler": function (response){
  //         alert(response.razorpay_payment_id);
  //         alert(response.razorpay_order_id);
  //         alert(response.razorpay_signature)
  //     },
  //     "prefill": {
  //         "name": "Gaurav Kumar",
  //         "email": "gaurav.kumar@example.com",
  //         "contact": "9000090000"
  //     },
  //     "notes": {
  //         "address": "Razorpay Corporate Office"
  //     },
  //     "theme": {
  //         "color": "#3399cc"
  //     }
  //   };
  //     // const razor = new window.Razorpay(options);
  //     // razor.open();
  //     console.log({order})
  // }
  
const[imageUpload, setImageUpload] = useState();
// const { isValid } = formState;

const uploadFile = () =>{

if(!imageUpload) return; 
const imageRef = ref(storage, 'govyapar/images/${imageUpload.name}');

uploadBytes(imageRef, imageUpload).then((snapshot) => {
    getDownloadURL(snapshot.ref).then((url) => {
        console.log(url);
    });
});
};

const[user, setUser] = useState(
    {
        FirstName: '', LastName:'', Email:'', Plan:''
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
  if (!user.Name || !user.Email || !user.Message) {
    setErrorMsg("Fill all fields");
    return;
  }
    setErrorMsg("");
    const{FirstName, LastName, Email, Plan} = user;
    e.preventDefault();
    const options = {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            FirstName, LastName, Email, Plan
        })
    }
    const res = await fetch(
        'https://govyapar-8c016-default-rtdb.firebaseio.com/UserData.json',
        options
        )
        if(res)
        {
            alert("Application Submitted Successfully")
        }
        else
        {
            alert("Error Ocurred")
        }
}

  return(
  <>
{/* <form method='POST' class="flex flex-col space-y-4 h-screen md:h-auto max-w-2xl my-10 pd:my-20 mx-auto px-4 pt-5 md:py-8 rounded-lg shadow-lg bg-white md:mt-40">
  <h2 class="text-xl font-medium text-center mb-4">Application Form</h2>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="flex flex-col">
      <label for="firstName" class="mb-2 text-sm font-medium">First Name</label>
      <input type="text" name="FirstName" value={user.FirstName} class="shadow-sm appearance-none border rounded py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="First Name" required onChange={data} />
    </div>
    <div class="flex flex-col">
      <label for="lastName" class="mb-2 text-sm font-medium">Last Name</label>
      <input type="text" name="LastName" value={user.LastName} class="shadow-sm appearance-none border rounded py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Last Name" required onChange={data} />
    </div>
   </div>
    
    <div class="col-span-2">
      <label for="email" class="mb-2 text-sm font-medium">Email</label><br/>
      <input type="email" name="Email" value={user.Email}  class="shadow-sm appearance-none border rounded py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email" required onChange={data} />
    </div>

    <div class="col-span-2">
      <label for="Plan" value={user.Plan} class="mb-2 text-sm font-medium" required onChange={data}>Application Plan</label>
      <select name="Plan" class="block w-full shadow-sm appearance-none border rounded py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" >
        <option value={user.Plan}>ITR</option>
        <option value={user.Plan}>GST</option>
        <option value={user.Plan}>Tax-Planner</option>
      </select>
    </div>

    <div class="col-span-2 flex pr-60">
      <input type="file" name="fileInput" 
      onChange = {(event) =>{
        setImageUpload(event.target.files[0]);
      }} 
      class="block w-full text-sm text-black file:mr-5 file:py-2 file:rounded-full file:border file:border-transparent file:bg-yellow-500 hover:file:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" required/>
      <button onClick={uploadFile} className="flex items-center px-4 py-2 font-semibold text-black hover:text-yellow-600" required>
      <button onClick={getdata} type="submit" class="inline-flex items-center text-center px-4 py-2 md:mt-10 bg-yellow-500 text-black rounded-md hover:bg-yellow-600 focus:outline-none w-full">
    Submit
  </button>
  </button>

    </div>

 
  
</form> */}

  <div class="flex flex-col space-y-4 h-screen md:h-auto max-w-2xl my-10 pd:my-20 mx-auto px-4 pt-5 md:py-8 rounded-lg shadow-lg bg-white md:mt-40">
  <input type="file" name="fileInput"/>
  </div>

  </>
  )
}

export default Continue
// rzp_test_SDQXydWqPP1S3N
// AB52a4tekT3otbYIxlq9LtpO -secret

  
