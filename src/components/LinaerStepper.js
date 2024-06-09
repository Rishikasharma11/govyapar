/* eslint-disable react/prop-types */

import {useEffect, useRef, useState} from "react";
import { Typography, TextField, Button, Stepper, Step, StepLabel, } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useForm, Controller, FormProvider, useFormContext, } from "react-hook-form";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage";
import { storage } from '../firebase.config';

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));


function getSteps() {
  return [
    "Company Details",
    "Director Detail",
    "Shareholder Details",
    "Payment",
  ];
}

// -----------------------------------------------------------CompanyDetails------------------------------------------------
const CompanyDetails = () => {
  const { control } = useFormContext();

  const[imageUpload, setImageUpload] = useState();

  const uploadFile = () =>{
  
  if(!imageUpload) return; 
  const imageRef = ref(storage, 'govyapar/images/${imageUpload.name}');
  
  uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
          console.log(url);
      });
  });
  };

const [radioBtn, setRadioBtn] = useState("");
const [checkboxBtn, setcheckboxBtn] = useState([]);

const[user, setUser] = useState(
  {
   Email: '',
   Company_name:'', 
   Capital_contribution_of_company:'', 
   Objective_of_company:'',
   Mobile_number_of_directors:'',
   Mail_id_of_directors:'',
   Mobile_number_of_shareholder:'',
   //  --------radiobtn---------
   Number_of_share_holders:'',
   //  -------checkbox-----------
    // Number_of_directors_in_company:''
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
  setRadioBtn(e.target.value)
  // setcheckboxBtn({...checkboxBtn, [name]:value});
  // console.log(e.target.value)
}
const getdata = async (e) => 
{
if (!user.Email || !user.Company_name || 
  !user.Capital_contribution_of_company || !user.Objective_of_company || 
  !user.Mobile_number_of_directors  || !user.Mail_id_of_directors || 
  !user.Mobile_number_of_shareholder 
  ) 
  {
  setErrorMsg("Fill all fields");
  return;
}
  setErrorMsg("");
  const{
       Email, 
       Company_name, 
       Capital_contribution_of_company, 
       Objective_of_company, 
       Mobile_number_of_directors,
       Mail_id_of_directors,
       Mobile_number_of_shareholder,
       //  --------radiobtn---------
       Number_of_share_holders,
      //  -------checkbox-----------
      //  Number_of_directors_in_company
       } = user;
  e.preventDefault();
  const options = {
      method: 'POST',
      headers: {
          'Content-type' : 'application/json'
      },
      body: JSON.stringify({
       Email, 
       Company_name, 
       Capital_contribution_of_company, 
       Objective_of_company, 
       Mobile_number_of_directors,
       Mail_id_of_directors,
       Mobile_number_of_shareholder,
      //  --------radiobtn---------
       Number_of_share_holders,
      //  -------checkbox-----------
      //  Number_of_directors_in_company
      })
  }
  const res = await fetch(
      'https://govyapar-companyformation-default-rtdb.firebaseio.com/UserData.json',
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

  return (
    <>
     {/* <Controller
        control={control}
        name="emailAddress"
        render={({ field }) => (
          <TextField
            id="email"
            type=""
            label="E-mail"
            variant="outlined"
            placeholder="Enter Your E-mail Address"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="Company_name"
        render={({ field }) => (
          <TextField
            id="phone-number"
            label="Company name desired"
            variant="outlined"
            minLength="1"
            maxLength="10"
            // placeholder=""
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="Capital_contribution_of_company"
        render={({ field }) => (
          <TextField
            id="first-name"
            label="Company address (electricity bill)"
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="lastName"
        render={({ field }) => (
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="nickName"
        render={({ field }) => (
          <TextField
            id="nick-name"
            label="Nick Name"
            variant="outlined"
            placeholder="Enter Your Nick Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      /> */}

      
<form method='POST' className='py-10 pd:my-20 mx-0 md:px-40 lg:px-[200px] pt-5 md:py-8'>
       <div className=''>
       <div className=''>
       {/* <h1 className="text-xl text-center py-3">Company Details</h1>
       <p className='border-dotted w-full  border-yellow-700 border-2'></p> */}
       </div>
       <br/>
       <label className=''>Email<span className='text-red-500'>*</span></label>
       <br/>
       <input 
      type='email' 
      name='Email' 
      control={control}
      value={user.Email} 
      className='w-80 p-1 rounded-md border mb-4' 
      required
      onChange={data}
      />
      <br/>
      {/* {/*----------------------------------------2-Company name desired?-------------------------------------- */}
      <label className=''>Company name desired? (give 3 names)<span className='text-red-500'>*</span></label>
      <br/>
      <input 
      type='text' 
      name='Company_name'  
      value={user.Company_name} 
      className='w-80 p-1 rounded-md border mb-4' 
      // required
      onChange={data}/>
      <br/>
      {/* ----------------------------------------3-Company address(FILE)-------------------------------------- */}
      <label className=''>Company address (electricity bill)<span className='text-red-500'>*</span></label>
      <input 
      type='file' 
      name='Company_address' 
      value={user.Company_address} 
      className='w-full p-1 file:mr-5 file:py-1 file:rounded-md file:border file:border-black file:bg-yellow-400 hover:file:bg-yellow-600 mb-4' 
      // required
      // onChange={data}
      onChange = {(event) =>{
        setImageUpload(event.target.files[0]);
      }} />
      {/* <button onClick={uploadFile} className="inline-flex items-center text-center px-4 py-2 md:mt-10 bg-yellow-500 text-black rounded-md hover:bg-yellow-600 focus:outline-none w-full" required></button> */}

      {/* ----------------------------------------4-Capital contribution of company-------------------------------------- */}
      <label className=''>Capital  contribution of company <span className='text-red-500'>*</span></label>
      <br/>
      <input 
      type='number' 
      name='Capital_contribution_of_company' 
      value={user.Capital_contribution_of_company} 
      className=' p-1 rounded-md border mb-4' 
      // required
      onChange={data}/>
      <br/>

      {/* ----------------------------------------5-Objective of company-------------------------------------- */}
      <label className=''>Objective of company</label>
      <br/>
      <input 
      type='text' 
      name='Objective_of_company' 
      value={user.Objective_of_company} 
      className='w-80 p-1 rounded-md border mb-4'
      onChange={data}/>
      <br/>
      {/* ----------------------------------------6-Number of directors in company(CHECKBOX)-------------------------------------- */}
      <label className=''>Number of directors in company<span className='text-red-500'>*</span></label>
      <div> 
        <input type="checkbox" 
               name="Number_of_directors_in_company" 
               value="1"
              
               onChange={data}/> 
        <label>1</label> 
      </div> 
      <div> 
        <input type="checkbox" 
                  name="Number_of_directors_in_company" 
                  value="2"
                 
                  onChange={data}/> 
           <label>2</label> 
      </div> 
      <div> 
        <input type="checkbox" 
                  name="Number_of_directors_in_company" 
                  value="3"
                 
                  onChange={data}/> 
           <label>3</label> 
      </div> 
      <div> 
        <input type="checkbox" 
               name="Number_of_directors_in_company" 
               value="4"
              
               onChange={data}/> 
        <label>4</label> 
      </div> 
      <div> 
        <input type="checkbox" 
               name="Number_of_directors_in_company" 
               value="more"
              
               onChange={data}/> 
        <label>more</label> 
      </div> 
      </div>
      <button onClick={getdata} type="submit" class="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-1 px-4 rounded-full shadow-black-md text-sm hover:scale-105 duration-300 ease-in">
     SUBMIT
     </button>
      </form>

    </>
  );
};
// -------------------------------------------------------------DirectorDetails-----------------------------------------------
const DirectorDetails = () => {
  const { control } = useFormContext();
  const[imageUpload, setImageUpload] = useState();

  const uploadFile = () =>{
  
  if(!imageUpload) return; 
  const imageRef = ref(storage, 'govyapar/images/${imageUpload.name}');
  
  uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
          console.log(url);
      });
  });
  };
  const [radioBtn, setRadioBtn] = useState("");
const [checkboxBtn, setcheckboxBtn] = useState([]);

const[user, setUser] = useState(
  {
   Email: '',
   Company_name:'', 
   Capital_contribution_of_company:'', 
   Objective_of_company:'',
   Mobile_number_of_directors:'',
   Mail_id_of_directors:'',
   Mobile_number_of_shareholder:'',
   //  --------radiobtn---------
   Number_of_share_holders:'',
   //  -------checkbox-----------
    // Number_of_directors_in_company:''
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
  setRadioBtn(e.target.value)
  // setcheckboxBtn({...checkboxBtn, [name]:value});
  // console.log(e.target.value)
}
const getdata = async (e) => 
{
if (!user.Email || !user.Company_name || 
  !user.Capital_contribution_of_company || !user.Objective_of_company || 
  !user.Mobile_number_of_directors  || !user.Mail_id_of_directors || 
  !user.Mobile_number_of_shareholder 
  ) 
  {
  setErrorMsg("Fill all fields");
  return;
}
  setErrorMsg("");
  const{
       Email, 
       Company_name, 
       Capital_contribution_of_company, 
       Objective_of_company, 
       Mobile_number_of_directors,
       Mail_id_of_directors,
       Mobile_number_of_shareholder,
       //  --------radiobtn---------
       Number_of_share_holders,
      //  -------checkbox-----------
      //  Number_of_directors_in_company
       } = user;
  e.preventDefault();
  const options = {
      method: 'POST',
      headers: {
          'Content-type' : 'application/json'
      },
      body: JSON.stringify({
       Email, 
       Company_name, 
       Capital_contribution_of_company, 
       Objective_of_company, 
       Mobile_number_of_directors,
       Mail_id_of_directors,
       Mobile_number_of_shareholder,
      //  --------radiobtn---------
       Number_of_share_holders,
      //  -------checkbox-----------
      //  Number_of_directors_in_company
      })
  }
  const res = await fetch(
      'https://govyapar-companyformation-default-rtdb.firebaseio.com/UserData.json',
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

  return (
    <>
      {/* <Controller
        control={control}
        name="emailAddress"
        render={({ field }) => (
          <TextField
            id="email"
            label="E-mail"
            variant="outlined"
            placeholder="Enter Your E-mail Address"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      /> */}

      {/* <Controller
        control={control}
        name="alternatePhone"
        render={({ field }) => (
          <TextField
            id="alternate-phone"
            label="Alternate Phone"
            variant="outlined"
            placeholder="Enter Your Alternate Phone"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      /> */}

        
<form method='POST' className='py-10 pd:my-20 mx-0 md:px-40 lg:px-[200px] pt-5 md:py-8'>
       <div>
       {/* <h1 className="text-xl text-center py-3">Director Details</h1>
       <p className='border-dotted w-full  border-yellow-700 border-2'></p> */}
       <br/>
       <label className=''>Mobile number of directors<span className='text-red-500'>*</span></label>
       <br/>
       <input 
      type='tel' 
      name='Mobile_number_of_directors' 
      value={user.Mobile_number_of_directors} 
      className='w-80 p-1 rounded-md border mb-4' 
      required
      onChange={data}/>
      <br/>

      {/* ----------------------------------------8-Mail id of directors(EMAIL)-------------------------------------- */}
      <label className=''>Mail id of directors<span className='text-red-500'>*</span></label>
      <br/>
      <input 
      type='email' 
      name='Mail_id_of_directors' 
      value={user.Mail_id_of_directors} 
      className='w-80 p-1 rounded-md border mb-4' 
      required
      onChange={data}/>
      <br/>

      {/* ----------------------------------------9-PAN CARD OF DIRECTORS(FILE)--------------------------------------*/}
      <label className=''>Pan Card of directors<span className='text-red-500'>*</span></label>
      <input 
      type='file' 
      name='Pan_card_of_directors' 
      value={user.Pan_card_of_directors} 
      className='w-full p-1 mb-4 file:mr-5 file:py-1 file:rounded-md file:border file:border-black file:bg-yellow-400 hover:file:bg-yellow-600' 
      // required
      onChange={data}/>

      {/* ----------------------------------------10-PROOF OF IDENTITY OF DIRECTORS(FILE)-------------------------------------- */}
      <label className=''>Proof of Identity of directors<span className='text-red-500'>*</span></label>
      <input 
      type='file' 
      name='Proof_of_identity_of_directors' 
      value={user.Proof_of_identity_of_directors} 
      className='w-full p-1 mb-4 file:mr-5 file:py-1 file:rounded-md file:border file:border-black file:bg-yellow-400 hover:file:bg-yellow-600' 
      // required
      onChange={data}/>

      {/* ----------------------------------------11-PROOF OF ADDRESS OF DIRECTORS(FILE)-------------------------------------- */}
      <label className=''>Proof of address of directors<span className='text-red-500'>*</span></label>
      <input 
      type='file' 
      name='Proof_of_address_of_directors' 
      value={user.Proof_of_address_of_directors} 
      className='w-full p-1 mb-4 file:mr-5 file:py-1 file:rounded-md file:border file:border-black file:bg-yellow-400 hover:file:bg-yellow-600' 
      // required
      onChange={data}/>

      {/* ----------------------------------------12-BANK STATEMENT OF LAST 3 MONTHS OF DIRECTORS(FILE)-------------------------------------- */}
      <label className=''>Bank statement of Last 3 months of directors<span className='text-red-500'>*</span></label>
      <input 
      type='file' 
      name='Bank_statement_of_last_3_months_of_director' 
      value={user.Bank_statement_of_last_3_months_of_director} 
      className='w-full p-1 mb-4 file:mr-5 file:py-1 file:rounded-md file:border file:border-black file:bg-yellow-400 hover:file:bg-yellow-600' 
      // required
      onChange={data}/>
   </div> 
   </form>

    </>
  );
};
// -----------------------------------------------------------------------ShareholderDetails-----------------------------------------------------
const ShareholderDetails = () => {
  const { control } = useFormContext();
  const[imageUpload, setImageUpload] = useState();

  const uploadFile = () =>{
  
  if(!imageUpload) return; 
  const imageRef = ref(storage, 'govyapar/images/${imageUpload.name}');
  
  uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
          console.log(url);
      });
  });
  };
  
  const [radioBtn, setRadioBtn] = useState("");
const [checkboxBtn, setcheckboxBtn] = useState([]);

const[user, setUser] = useState(
  {
   Email: '',
   Company_name:'', 
   Capital_contribution_of_company:'', 
   Objective_of_company:'',
   Mobile_number_of_directors:'',
   Mail_id_of_directors:'',
   Mobile_number_of_shareholder:'',
   //  --------radiobtn---------
   Number_of_share_holders:'',
   //  -------checkbox-----------
    // Number_of_directors_in_company:''
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
  setRadioBtn(e.target.value)
  // setcheckboxBtn({...checkboxBtn, [name]:value});
  // console.log(e.target.value)
}
const getdata = async (e) => 
{
if (!user.Email || !user.Company_name || 
  !user.Capital_contribution_of_company || !user.Objective_of_company || 
  !user.Mobile_number_of_directors  || !user.Mail_id_of_directors || 
  !user.Mobile_number_of_shareholder 
  ) 
  {
  setErrorMsg("Fill all fields");
  return;
}
  setErrorMsg("");
  const{
       Email, 
       Company_name, 
       Capital_contribution_of_company, 
       Objective_of_company, 
       Mobile_number_of_directors,
       Mail_id_of_directors,
       Mobile_number_of_shareholder,
       //  --------radiobtn---------
       Number_of_share_holders,
      //  -------checkbox-----------
      //  Number_of_directors_in_company
       } = user;
  e.preventDefault();
  const options = {
      method: 'POST',
      headers: {
          'Content-type' : 'application/json'
      },
      body: JSON.stringify({
       Email, 
       Company_name, 
       Capital_contribution_of_company, 
       Objective_of_company, 
       Mobile_number_of_directors,
       Mail_id_of_directors,
       Mobile_number_of_shareholder,
      //  --------radiobtn---------
       Number_of_share_holders,
      //  -------checkbox-----------
      //  Number_of_directors_in_company
      })
  }
  const res = await fetch(
      'https://govyapar-companyformation-default-rtdb.firebaseio.com/UserData.json',
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
  return (
    <>
      {/* <Controller
        control={control}
        name="address1"
        render={({ field }) => (
          <TextField
            id="address1"
            label="Address 1"
            variant="outlined"
            placeholder="Enter Your Address 1"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="address2"
        render={({ field }) => (
          <TextField
            id="address2"
            label="Address 2"
            variant="outlined"
            placeholder="Enter Your Address 2"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="country"
        render={({ field }) => (
          <TextField
            id="country"
            label="Country"
            variant="outlined"
            placeholder="Enter Your Country Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      /> */}
       <form method='POST' className='py-10 pd:my-20 mx-0 md:px-40 lg:px-[200px] pt-5 md:py-8'>
       <div>
       <br/>
       <label className=''>Number of shareholders<span className='text-red-500'>*</span></label>
       <div> 
         <input type="radio" 
               name="Number_of_share_holders" 
               value="1"
               checked={radioBtn === "1"}
               onChange={data}/> 
        <label>1</label> 
      </div> 
      <div> 
        <input type="radio" 
                  name="Number_of_share_holders" 
                  value="2"
                  checked={radioBtn === "2"}
                  onChange={data}/> 
           <label>2</label> 
      </div> 
      <div> 
        <input type="radio" 
                  name="Number_of_share_holders" 
                  value="3" 
                  checked={radioBtn === "3"}
                  onChange={data}/> 
           <label>3</label> 
      </div> 
      <div> 
        <input type="radio" 
               name="Number_of_share_holders" 
               value="4"
               checked={radioBtn === "4"}
               onChange={data}/> 
        <label>4</label> 
      </div> 
      <div> 
        <input type="radio" 
               name="Number_of_share_holders" 
               value="more"
               checked={radioBtn === "more"}
               className=' mb-4'
               onChange={data}/> 
        <label>more</label> 
      </div>  

      {/* ----------------------------------------14-Mobile number of shareholder(PHONE NUMBER)-------------------------------------- */}
      <label className=''>Mobile number of shareholders<span className='text-red-500'>*</span></label>
      <br/>
      <input 
      type='tel' 
      name='Mobile_number_of_shareholder' 
      value={user.Mobile_number_of_shareholder} 
      className='w-80 p-1 rounded-md border mb-2'
      onChange={data}
      />
      <br/>

      {/* ----------------------------------------15-Proof of address of shareholders(FILE)--------------------------------------*/}
      <label className=''>Proof of address of shareholders<span className='text-red-500'>*</span></label>
      <input 
      type='file' 
      name='Proof_of_address_of_shareholders' 
      value={user.Proof_of_address_of_shareholders} 
      className='w-full p-1 mb-2 file:mr-5 file:py-1 file:rounded-md file:border file:border-black file:bg-yellow-400 hover:file:bg-yellow-600'
      onChange={data}
      />


      {/* ----------------------------------------16-Proof of identity of shareholders(FILE)-------------------------------------- */}
      <label className=''>Proof of identity of shareholders<span className='text-red-500'>*</span></label>
      <input 
      type='file' 
      name='Proof_of_identity_of_shareholders' 
      value={user.Proof_of_identity_of_shareholders} 
      className='w-full p-1 mb-2 file:mr-5 file:py-1 file:rounded-md file:border file:border-black file:bg-yellow-400 hover:file:bg-yellow-600'
      onChange={data}
      />

      {/* ----------------------------------------16-Pan card(FILE)-------------------------------------- */}
      <label className=''>Pan card<span className='text-red-500'>*</span></label>
      <input 
      type='file' 
      name='Pan_card' 
      value={user.Pan_card} 
      className='w-full p-1 mb-2 file:mr-5 file:py-1 file:rounded-md file:border file:border-black file:bg-yellow-400 hover:file:bg-yellow-600'
      onChange={data}
      />

      {/* ----------------------------------------18-Bank statement of last 3 month-------------------------------------- */}
      <label className=''>Bank statement of last 3 months<span className='text-red-500'>*</span></label>
      <input 
      type='file' 
      name='Bank_statement_of_last_3_month' 
      value={user.Bank_statement_of_last_3_month} 
      className='w-full p-1 mb-2 file:mr-5 file:py-1 file:rounded-md file:border file:border-black file:bg-yellow-400 hover:file:bg-yellow-600'
      onChange={data}
      />
    </div>
    
      </form>

    </>
  );
};
// ------------------------------------------------Payment--------------------------------------------
// const PaymentForm = () => {
//   const { control } = useFormContext();
//   return (
//     <>
//       <Controller
//         control={control}
//         name="cardNumber"
//         render={({ field }) => (
//           <TextField
//             id="cardNumber"
//             label="Card Number"
//             variant="outlined"
//             placeholder="Enter Your Card Number"
//             fullWidth
//             margin="normal"
//             {...field}
//           />
//         )}
//       />
//       <Controller
//         control={control}
//         name="cardMonth"
//         render={({ field }) => (
//           <TextField
//             id="cardMonth"
//             label="Card Month"
//             variant="outlined"
//             placeholder="Enter Your Card Month"
//             fullWidth
//             margin="normal"
//             {...field}
//           />
//         )}
//       />
//       <Controller
//         control={control}
//         name="cardYear"
//         render={({ field }) => (
//           <TextField
//             id="cardYear"
//             label="Card Year"
//             variant="outlined"
//             placeholder="Enter Your Card Year"
//             fullWidth
//             margin="normal"
//             {...field}
//           />
//         )}
//       />
//     </>
//   );
// };

function getStepContent(step) {
  switch (step) {
    case 0:
      return <CompanyDetails />;

    case 1:
      return <DirectorDetails />;
    case 2:
      return <ShareholderDetails />;
    // case 3:
    //   return <PaymentForm />;
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      Email: "",
      Company_name: "",
      Capital_contribution_of_company: "",
      nickName: "",
      phoneNumber: "",
      alternatePhone: "",
      address1: "",
      address2: "",
      country: "",
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (data) => {
    console.log(data);
    if (activeStep == steps.length - 1) {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
          setActiveStep(activeStep + 1);
        });
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  const[imageUpload, setImageUpload] = useState();

  const uploadFile = () =>{
  
  if(!imageUpload) return; 
  const imageRef = ref(storage, 'govyapar/images/${imageUpload.name}');
  
  uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
          console.log(url);
      });
  });
  };
  
    
    const [radioBtn, setRadioBtn] = useState("");
    const [checkboxBtn, setcheckboxBtn] = useState([]);
    // const [first, setFirst] = useState(true);
    // const [second, setSecond] = useState(true);
    // const [third, setThird] = useState(true);
    // const [fourth, setFourth] = useState(true);
    // const [more, setMore] = useState(true);
    // useEffect(() => {
    //   setcheckboxBtn()
    // },[]);
  
    const[user, setUser] = useState(
      {
       Email: '',
       Company_name:'', 
       Capital_contribution_of_company:'', 
       Objective_of_company:'',
       Mobile_number_of_directors:'',
       Mail_id_of_directors:'',
       Mobile_number_of_shareholder:'',
       //  --------radiobtn---------
       Number_of_share_holders:'',
       //  -------checkbox-----------
        // Number_of_directors_in_company:''
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
      setRadioBtn(e.target.value)
      // setcheckboxBtn({...checkboxBtn, [name]:value});
      // console.log(e.target.value)
  }

  const getdata = async (e) => 
    {
      if (!user.Email || !user.Company_name || 
        !user.Capital_contribution_of_company || !user.Objective_of_company || 
        !user.Mobile_number_of_directors  || !user.Mail_id_of_directors || 
        !user.Mobile_number_of_shareholder 
        ) 
        {
        setErrorMsg("Fill all fields");
        return;
      }
        setErrorMsg("");
        const{
             Email, 
             Company_name, 
             Capital_contribution_of_company, 
             Objective_of_company, 
             Mobile_number_of_directors,
             Mail_id_of_directors,
             Mobile_number_of_shareholder,
             //  --------radiobtn---------
             Number_of_share_holders,
            //  -------checkbox-----------
            //  Number_of_directors_in_company
             } = user;
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
             Email, 
             Company_name, 
             Capital_contribution_of_company, 
             Objective_of_company, 
             Mobile_number_of_directors,
             Mail_id_of_directors,
             Mobile_number_of_shareholder,
            //  --------radiobtn---------
             Number_of_share_holders,
            //  -------checkbox-----------
            //  Number_of_directors_in_company
            })
        }
        const res = await fetch(
            'https://govyapar-companyformation-default-rtdb.firebaseio.com/UserData.json',
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

  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                
              </Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
              {getStepContent(activeStep)}

              <Button
                className={classes.button}
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                back
              </Button>
              {/* {isStepOptional(activeStep) && (
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                >
                  skip
                </Button>
              )} */}
              <Button
                className={classes.button}
                variant="contained"
                color="yellow"
                // onClick={handleNext}
                onClick={getdata}
                type="submit"
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};
export default LinaerStepper;







// import React, { useState } from "react";

// const Stepper = ({ list }) => {
//   const [currentStep, setCurrentStep] = useState(0);
//   const stepsCount = list.length;
//   const steps = [];

//   for (let i = 0; i < stepsCount; i++) {
//     steps.push(
//       <div
//         onClick={() => setCurrentStep(i)}
//         className={`steps ${currentStep >= i ? "active" : ""}`}
//         key={i}
//       >
//         {i + 1}
//       </div>
//     );
//   }

//   const progressLineWidth = (100 / (list.length - 1)) * currentStep;

//   const onPrev = () => {
//     if (currentStep !== 0) {
//       setCurrentStep(currentStep - 1);
//     }
//   };

//   const onNext = () => {
//     if (currentStep !== list.length - 1) {
//       setCurrentStep(currentStep + 1);
//     }
//   };

//   return (
//     <section className="stepper">
//       <div className="steps-container">
//         <div className="steps-wrapper">{steps}</div>
//         <div
//           className="progress-line"
//           style={{ width: `${progressLineWidth}%` }}
//         ></div>
//       </div>
//       <div>{React.cloneElement(list[currentStep], { onPrev, onNext })}</div>
//     </section>
//   );
// };

// export default Stepper;
   