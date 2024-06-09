import React, { useEffect, useState } from 'react'
import {ref, uploadBytes, getDownloadURL} from "firebase/storage";
import { storage } from '../firebase.config';
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import { TiTick } from "react-icons/ti";
import LinearStepper from "./LinaerStepper";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";


const CompanyFormation = () => {
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
// const [currentComponent, setCurrentComponent] = useState(1);
// const handleNextBottom = () => {
//       setCurrentComponent(currentComponent + 1);
//     };
//     const handlePreviousBottom = () => {
//       setCurrentComponent(currentComponent - 1);
//     };
  

  // -------------------------------1----------------------
  // const [activeStep, setActiveStep] = React.useState(0);
  // const [isLastStep, setIsLastStep] = React.useState(false);
  // const [isFirstStep, setIsFirstStep] = React.useState(false);

  // const handleNextTop = () => !isLastStep && setActiveStep((cur) => cur + 1);
  // const handlePrevTop = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  // ----------------------------------------2---------------
  // const steps = ["Company Details", "Director Details", "Shareholder Details", "Payment", ""];
  // const [currentStep, setCurrentStep] = useState(1);
  // const [complete, setComplete] = useState(false);

  // --------------------------------------3-----------------------
  // const [currentStep, setCurrentStep] = useState(1);
  // const steps = [
  //    "Company Details",
  //    "Director Details",
  //    "Shareholder Details",
  //    "Payment"
  // ];

  // const displayStep = (steps) =>{
  //   switch(step){
  //     case 1 :
  //     return <CompanyDetails/>
  //     case 2 :
  //     return <DirectorDetails/>
  //     case 3 :
  //     return <ShareholderDetails/>
  //     case 4 :
  //     return <Payment/>
  //   }
  

  // ------------------------4----------------------
  // const CHECKOUT_STEPS = [
  //   {
  //     name: "Company Details",
  //     value: () => 
  //     <div>
  //       Provide your contact details.
  //     <form method='POST' className='py-10 space-y-4 mt-10 pd:my-20 mx-0 md:px-40 md:mx-20 lg:px-[400px] pt-5 md:py-8 rounded-lg shadow-lg bg-white'>
  //     <div className=''>
  //     <div className=''>
  //     <h1 className="text-xl text-center py-3">Company Details</h1>
  //     <p className='border-dotted w-full  border-yellow-700 border-2'></p>
  //     </div>
  //     <br/>
  //     <label className=''>Email<span className='text-red-500'>*</span></label>
  //     <br/>
  //     <input 
  //     type='email' 
  //     name='Email' 
  //     value={user.Email} 
  //     className='w-80 p-1 rounded-md border mb-4' 
  //     required
  //     onChange={data}
  //     />
  //     <br/>
  //     {/* {/*----------------------------------------2-Company name desired?-------------------------------------- */}
  //     <label className=''>Company name desired? (give 3 names)<span className='text-red-500'>*</span></label>
  //     <br/>
  //     <input 
  //     type='text' 
  //     name='Company_name'  
  //     value={user.Company_name} 
  //     className='w-80 p-1 rounded-md border mb-4' 
  //     required
  //     onChange={data}/>
  //     <br/>
  //     {/* ----------------------------------------3-Company address(FILE)-------------------------------------- */}
  //     <label className=''>Company address (electricity bill)<span className='text-red-500'>*</span></label>
  //     <input 
  //     type='file' 
  //     name='Company_address' 
  //     value={user.Company_address} 
  //     className='w-full p-1 file:mr-5 file:py-1 file:rounded-md file:border file:border-black file:bg-yellow-400 hover:file:bg-yellow-600 mb-4' 
  //     // required
  //     // onChange={data}
  //     onChange = {(event) =>{
  //       setImageUpload(event.target.files[0]);
  //     }} />
  //     {/* <button onClick={uploadFile} className="inline-flex items-center text-center px-4 py-2 md:mt-10 bg-yellow-500 text-black rounded-md hover:bg-yellow-600 focus:outline-none w-full" required></button> */}

  //     {/* ----------------------------------------4-Capital contribution of company-------------------------------------- */}
  //     <label className=''>Capital  contribution of company <span className='text-red-500'>*</span></label>
  //     <br/>
  //     <input 
  //     type='number' 
  //     name='Capital_contribution_of_company' 
  //     value={user.Capital_contribution_of_company} 
  //     className=' p-1 rounded-md border mb-4' 
  //     required
  //     onChange={data}/>
  //     <br/>

  //     {/* ----------------------------------------5-Objective of company-------------------------------------- */}
  //     <label className=''>Objective of company</label>
  //     <br/>
  //     <input 
  //     type='text' 
  //     name='Objective_of_company' 
  //     value={user.Objective_of_company} 
  //     className='w-80 p-1 rounded-md border mb-4'
  //     onChange={data}/>
  //     <br/>
  //     {/* ----------------------------------------6-Number of directors in company(CHECKBOX)-------------------------------------- */}
  //     <label className=''>Number of directors in company<span className='text-red-500'>*</span></label>
  //     <div> 
  //       <input type="checkbox" 
  //              name="Number_of_directors_in_company" 
  //              value="1"
              
  //              onChange={data}/> 
  //       <label>1</label> 
  //     </div> 
  //     <div> 
  //       <input type="checkbox" 
  //                 name="Number_of_directors_in_company" 
  //                 value="2"
                 
  //                 onChange={data}/> 
  //          <label>2</label> 
  //     </div> 
  //     <div> 
  //       <input type="checkbox" 
  //                 name="Number_of_directors_in_company" 
  //                 value="3"
                 
  //                 onChange={data}/> 
  //          <label>3</label> 
  //     </div> 
  //     <div> 
  //       <input type="checkbox" 
  //              name="Number_of_directors_in_company" 
  //              value="4"
              
  //              onChange={data}/> 
  //       <label>4</label> 
  //     </div> 
  //     <div> 
  //       <input type="checkbox" 
  //              name="Number_of_directors_in_company" 
  //              value="more"
              
  //              onChange={data}/> 
  //       <label>more</label> 
  //     </div> 
  //     </div>
      
  //     </form>
  //     </div>,
  //   },
  //   {
  //     name: "Director Details",
  //     value: () => 
  //     <div>
  //           {/* ----------------------------------------7-Mobile number of directors(PHONE NUMBER)--------------------------------------  */}
  //     <form className='py-10 space-y-4 mt-10 pd:my-20 mx-0 md:px-40 md:mx-20 lg:px-[400px] pt-5 md:py-8 rounded-lg shadow-lg bg-white'>
  //     <div>
  //     <h1 className="text-xl text-center py-3">Director Details</h1>
  //     <p className='border-dotted w-full  border-yellow-700 border-2'></p>
  //     <br/>
  //     <label className=''>Mobile number of directors<span className='text-red-500'>*</span></label>
  //     <br/>
  //     <input 
  //     type='tel' 
  //     name='Mobile_number_of_directors' 
  //     value={user.Mobile_number_of_directors} 
  //     className='w-80 p-1 rounded-md border mb-4' 
  //     required
  //     onChange={data}/>
  //     <br/>

  //     {/* ----------------------------------------8-Mail id of directors(EMAIL)-------------------------------------- */}
  //     <label className=''>Mail id of directors<span className='text-red-500'>*</span></label>
  //     <br/>
  //     <input 
  //     type='email' 
  //     name='Mail_id_of_directors' 
  //     value={user.Mail_id_of_directors} 
  //     className='w-80 p-1 rounded-md border mb-4' 
  //     required
  //     onChange={data}/>
  //     <br/>

  //     {/* ----------------------------------------9-PAN CARD OF DIRECTORS(FILE)--------------------------------------*/}
  //     <label className=''>Pan Card of directors<span className='text-red-500'>*</span></label>
  //     <input 
  //     type='file' 
  //     name='Pan_card_of_directors' 
  //     value={user.Pan_card_of_directors} 
  //     className='w-full p-1 mb-4 file:mr-5 file:py-1 file:rounded-md file:border file:border-black file:bg-yellow-400 hover:file:bg-yellow-600' 
  //     // required
  //     onChange={data}/>

  //     {/* ----------------------------------------10-PROOF OF IDENTITY OF DIRECTORS(FILE)-------------------------------------- */}
  //     <label className=''>Proof of Identity of directors<span className='text-red-500'>*</span></label>
  //     <input 
  //     type='file' 
  //     name='Proof_of_identity_of_directors' 
  //     value={user.Proof_of_identity_of_directors} 
  //     className='w-full p-1 mb-4 file:mr-5 file:py-1 file:rounded-md file:border file:border-black file:bg-yellow-400 hover:file:bg-yellow-600' 
  //     // required
  //     onChange={data}/>

  //     {/* ----------------------------------------11-PROOF OF ADDRESS OF DIRECTORS(FILE)-------------------------------------- */}
  //     <label className=''>Proof of address of directors<span className='text-red-500'>*</span></label>
  //     <input 
  //     type='file' 
  //     name='Proof_of_address_of_directors' 
  //     value={user.Proof_of_address_of_directors} 
  //     className='w-full p-1 mb-4 file:mr-5 file:py-1 file:rounded-md file:border file:border-black file:bg-yellow-400 hover:file:bg-yellow-600' 
  //     // required
  //     onChange={data}/>

  //     {/* ----------------------------------------12-BANK STATEMENT OF LAST 3 MONTHS OF DIRECTORS(FILE)-------------------------------------- */}
  //     <label className=''>Bank statement of Last 3 months of directors<span className='text-red-500'>*</span></label>
  //     <input 
  //     type='file' 
  //     name='Bank_statement_of_last_3_months_of_director' 
  //     value={user.Bank_statement_of_last_3_months_of_director} 
  //     className='w-full p-1 mb-4 file:mr-5 file:py-1 file:rounded-md file:border file:border-black file:bg-yellow-400 hover:file:bg-yellow-600' 
  //     // required
  //     onChange={data}/>
  //  </div> 
    
  //  </form>  
  //       </div>,
  //   },
  //   {
  //     name: "Shareholder Details",
  //     value: () => 
  //     <div>
  //         {/* ----------------------------------------13-Number of share holders(RADIO)-------------------------------------- */}
  //     <form className='py-10 space-y-4 mt-10 pd:my-20 mx-0 md:px-40 md:mx-20 lg:px-[400px] pt-5 md:py-8 rounded-lg shadow-lg bg-white'>
  //     <div>
  //     <h1 className="text-xl text-center py-3">Shareholder Details</h1>
  //     <p className='border-dotted w-full  border-yellow-700 border-2'></p>
  //     <br/>
  //     <label className=''>Number of shareholders<span className='text-red-500'>*</span></label>
  //     <div> 
  //       <input type="radio" 
  //              name="Number_of_share_holders" 
  //              value="1"
  //              checked={radioBtn === "1"}
  //              onChange={data}/> 
  //       <label>1</label> 
  //     </div> 
  //     <div> 
  //       <input type="radio" 
  //                 name="Number_of_share_holders" 
  //                 value="2"
  //                 checked={radioBtn === "2"}
  //                 onChange={data}/> 
  //          <label>2</label> 
  //     </div> 
  //     <div> 
  //       <input type="radio" 
  //                 name="Number_of_share_holders" 
  //                 value="3" 
  //                 checked={radioBtn === "3"}
  //                 onChange={data}/> 
  //          <label>3</label> 
  //     </div> 
  //     <div> 
  //       <input type="radio" 
  //              name="Number_of_share_holders" 
  //              value="4"
  //              checked={radioBtn === "4"}
  //              onChange={data}/> 
  //       <label>4</label> 
  //     </div> 
  //     <div> 
  //       <input type="radio" 
  //              name="Number_of_share_holders" 
  //              value="more"
  //              checked={radioBtn === "more"}
  //              className=' mb-4'
  //              onChange={data}/> 
  //       <label>more</label> 
  //     </div>  

  //     {/* ----------------------------------------14-Mobile number of shareholder(PHONE NUMBER)-------------------------------------- */}
  //     <label className=''>Mobile number of shareholders<span className='text-red-500'>*</span></label>
  //     <br/>
  //     <input 
  //     type='tel' 
  //     name='Mobile_number_of_shareholder' 
  //     value={user.Mobile_number_of_shareholder} 
  //     className='w-80 p-1 rounded-md border mb-2'
  //     onChange={data}
  //     />
  //     <br/>

  //     {/* ----------------------------------------15-Proof of address of shareholders(FILE)--------------------------------------*/}
  //     <label className=''>Proof of address of shareholders<span className='text-red-500'>*</span></label>
  //     <input 
  //     type='file' 
  //     name='Proof_of_address_of_shareholders' 
  //     value={user.Proof_of_address_of_shareholders} 
  //     className='w-full p-1 mb-2 file:mr-5 file:py-1 file:rounded-md file:border file:border-black file:bg-yellow-400 hover:file:bg-yellow-600'
  //     onChange={data}
  //     />


  //     {/* ----------------------------------------16-Proof of identity of shareholders(FILE)-------------------------------------- */}
  //     <label className=''>Proof of identity of shareholders<span className='text-red-500'>*</span></label>
  //     <input 
  //     type='file' 
  //     name='Proof_of_identity_of_shareholders' 
  //     value={user.Proof_of_identity_of_shareholders} 
  //     className='w-full p-1 mb-2 file:mr-5 file:py-1 file:rounded-md file:border file:border-black file:bg-yellow-400 hover:file:bg-yellow-600'
  //     onChange={data}
  //     />

  //     {/* ----------------------------------------16-Pan card(FILE)-------------------------------------- */}
  //     <label className=''>Pan card<span className='text-red-500'>*</span></label>
  //     <input 
  //     type='file' 
  //     name='Pan_card' 
  //     value={user.Pan_card} 
  //     className='w-full p-1 mb-2 file:mr-5 file:py-1 file:rounded-md file:border file:border-black file:bg-yellow-400 hover:file:bg-yellow-600'
  //     onChange={data}
  //     />

  //     {/* ----------------------------------------18-Bank statement of last 3 month-------------------------------------- */}
  //     <label className=''>Bank statement of last 3 months<span className='text-red-500'>*</span></label>
  //     <input 
  //     type='file' 
  //     name='Bank_statement_of_last_3_month' 
  //     value={user.Bank_statement_of_last_3_month} 
  //     className='w-full p-1 mb-2 file:mr-5 file:py-1 file:rounded-md file:border file:border-black file:bg-yellow-400 hover:file:bg-yellow-600'
  //     onChange={data}
  //     />
  //   </div>
    
  //     </form>
  //     </div>,
  //   },
  //   {
  //     name: "Payment",
  //     value: () => <div> Your order has been delivered.</div>,
  //   },
  // ];
  
  

  return (
    <div className='mt-20 w-full mx-0'>
       <CssBaseline />
      <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
          <LinearStepper />
        </Paper>
      </Container>
   {/* <div><a href='https://wa.me/919808030923'>
    <img src='WhatsappIcon.png' className='fixed w-[20%] md:w-[13%] lg:w-[10%] right-0 top-[520px] cursor-pointer z-10'/></a>
    </div> */}
    {/* -----------------1--------------- */}
    

    {/* -----------------------------2--------------------- */}
{/* <div className="flex mx-0 px-20 justify-between mt-40">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>
      {!complete && (
        <button
          className="btn"
          onClick={() => {
            currentStep === steps.length
              ? setComplete(true)
              : setCurrentStep((prev) => prev + 1);
          }}
        >
          {currentStep === steps.length ? "Finish" : "Next"}
        </button>
      )} */}


    {/* ------------4---------------------- */}
    {/* <div className='mt-32'>
    <div className="w-full mt-32 px-24 py-4">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step onClick={() => setActiveStep(0)}>
          <UserIcon className="h-5 w-5" />
          <div className="text-center">
            <Typography
              variant="h6"
              color={activeStep === 0 ? "blue-gray" : "gray"}
            >
              Step 1
            </Typography>
            <Typography
              color={activeStep === 0 ? "blue-gray" : "gray"}
              className="font-normal"
            >
              <form method='POST' className='py-10 space-y-4 mt-10 pd:my-20 mx-0 md:px-40 md:mx-20 lg:px-[400px] pt-5 md:py-8 rounded-lg shadow-lg bg-white'>
      <div className=''>
      <div className=''>
      <h1 className="text-xl text-center py-3">Company Details</h1>
      <p className='border-dotted w-full  border-yellow-700 border-2'></p>
      </div>
      <br/>
      <label className=''>Email<span className='text-red-500'>*</span></label>
      <br/>
      <input 
      type='email' 
      name='Email' 
      value={user.Email} 
      className='w-80 p-1 rounded-md border mb-4' 
      required
      onChange={data}
      />
      <br/> */}
      {/* {/*----------------------------------------2-Company name desired?-------------------------------------- */}
      {/* <label className=''>Company name desired? (give 3 names)<span className='text-red-500'>*</span></label>
      <br/>
      <input 
      type='text' 
      name='Company_name'  
      value={user.Company_name} 
      className='w-80 p-1 rounded-md border mb-4' 
      required
      onChange={data}/>
      <br/> */}
      {/* ----------------------------------------3-Company address(FILE)-------------------------------------- */}
      {/* <label className=''>Company address (electricity bill)<span className='text-red-500'>*</span></label>
      <input 
      type='file' 
      name='Company_address' 
      value={user.Company_address} 
      className='w-full p-1 file:mr-5 file:py-1 file:rounded-md file:border file:border-black file:bg-yellow-400 hover:file:bg-yellow-600 mb-4' 
      // required
      // onChange={data}
      onChange = {(event) =>{
        setImageUpload(event.target.files[0]);
      }} /> */}
      {/* <button onClick={uploadFile} className="inline-flex items-center text-center px-4 py-2 md:mt-10 bg-yellow-500 text-black rounded-md hover:bg-yellow-600 focus:outline-none w-full" required></button> */}

      {/* ----------------------------------------4-Capital contribution of company-------------------------------------- */}
      {/* <label className=''>Capital  contribution of company <span className='text-red-500'>*</span></label>
      <br/>
      <input 
      type='number' 
      name='Capital_contribution_of_company' 
      value={user.Capital_contribution_of_company} 
      className=' p-1 rounded-md border mb-4' 
      required
      onChange={data}/>
      <br/> */}

      {/* ----------------------------------------5-Objective of company-------------------------------------- */}
      {/* <label className=''>Objective of company</label>
      <br/>
      <input 
      type='text' 
      name='Objective_of_company' 
      value={user.Objective_of_company} 
      className='w-80 p-1 rounded-md border mb-4'
      onChange={data}/>
      <br/> */}
      {/* ----------------------------------------6-Number of directors in company(CHECKBOX)-------------------------------------- */}
      {/* <label className=''>Number of directors in company<span className='text-red-500'>*</span></label>
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
      
      </form>
            </Typography>
          </div>
        </Step>
        <Step onClick={() => setActiveStep(1)}>
          <CogIcon className="h-5 w-5" />
          <div className="text-center">
            <Typography
              variant="h6"
              color={activeStep === 1 ? "blue-gray" : "gray"}
            >
              Step 2
            </Typography>
            <Typography
              color={activeStep === 1 ? "blue-gray" : "gray"}
              className="font-normal"
            >
              Details about yout account.
            </Typography>
          </div>
        </Step>

        <Step onClick={() => setActiveStep(2)}>
          <BuildingLibraryIcon className="h-5 w-5" />
          <div className="text-center">
            <Typography
              variant="h6"
              color={activeStep === 2 ? "blue-gray" : "gray"}
            >
              Step 3
            </Typography>
            <Typography
              color={activeStep === 2 ? "blue-gray" : "gray"}
              className="font-normal"
            >
             
            <form> */}
            {/* //  className='py-10 space-y-4 mt-10 pd:my-20 mx-0 md:px-40 md:mx-20 lg:px-[400px] pt-5 md:py-8 rounded-lg shadow-lg bg-white'> */}
      {/* <div>
      <h1 className="text-xl text-center py-3">Shareholder Details</h1>
      <p className='border-dotted w-full  border-yellow-700 border-2'></p>
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
      </div>   */}

      {/* ----------------------------------------14-Mobile number of shareholder(PHONE NUMBER)-------------------------------------- */}
      {/* <label className=''>Mobile number of shareholders<span className='text-red-500'>*</span></label>
      <br/>
      <input 
      type='tel' 
      name='Mobile_number_of_shareholder' 
      value={user.Mobile_number_of_shareholder} 
      className='w-80 p-1 rounded-md border mb-2'
      onChange={data}
      />
      <br/> */}

      {/* ----------------------------------------15-Proof of address of shareholders(FILE)--------------------------------------*/}
      {/* <label className=''>Proof of address of shareholders<span className='text-red-500'>*</span></label>
      <input 
      type='file' 
      name='Proof_of_address_of_shareholders' 
      value={user.Proof_of_address_of_shareholders} 
      className='w-full p-1 mb-2 file:mr-5 file:py-1 file:rounded-md file:border file:border-black file:bg-yellow-400 hover:file:bg-yellow-600'
      onChange={data}
      /> */}


      {/* ----------------------------------------16-Proof of identity of shareholders(FILE)-------------------------------------- */}
      {/* <label className=''>Proof of identity of shareholders<span className='text-red-500'>*</span></label>
      <input 
      type='file' 
      name='Proof_of_identity_of_shareholders' 
      value={user.Proof_of_identity_of_shareholders} 
      className='w-full p-1 mb-2 file:mr-5 file:py-1 file:rounded-md file:border file:border-black file:bg-yellow-400 hover:file:bg-yellow-600'
      onChange={data}
      /> */}

      {/* ----------------------------------------16-Pan card(FILE)-------------------------------------- */}
      {/* <label className=''>Pan card<span className='text-red-500'>*</span></label>
      <input 
      type='file' 
      name='Pan_card' 
      value={user.Pan_card} 
      className='w-full p-1 mb-2 file:mr-5 file:py-1 file:rounded-md file:border file:border-black file:bg-yellow-400 hover:file:bg-yellow-600'
      onChange={data}
      /> */}

      {/* ----------------------------------------18-Bank statement of last 3 month-------------------------------------- */}
      {/* <label className=''>Bank statement of last 3 months<span className='text-red-500'>*</span></label>
      <input 
      type='file' 
      name='Bank_statement_of_last_3_month' 
      value={user.Bank_statement_of_last_3_month} 
      className='w-full p-1 mb-2 file:mr-5 file:py-1 file:rounded-md file:border file:border-black file:bg-yellow-400 hover:file:bg-yellow-600'
      onChange={data}
      />
    </div>
    </form> 
    Details about yout account.
            </Typography>
          </div>
          
        </Step>
      </Stepper> */}

      {/* <div className="mt-32 flex justify-between">
        <Button onClick={handlePrevTop} disabled={isFirstStep}>
          Prev
        </Button>
        <Button onClick={handleNextTop} disabled={isLastStep}>
          Next
        </Button>
      </div>
    </div> */}
      {/* <CheckoutStepper stepsConfig={CHECKOUT_STEPS} class=""/> */}
      <div>
      {/* <h1>Company Formation</h1> */}
     
     
      {/* ----------------------------------------1-Email-------------------------------------- */}
      {/* <div className='grid md:grid-rows-3 md:grid-cols-3 gap-10'> */}
      {/* {currentComponent === 1 && 
      1 
      } */}
      {/* {currentComponent === 2 && 
      2
      } */}
       {/* {currentComponent === 3 && 
      3
      } */}

      {/* <div className='border-2 border-yellow-700 md:px-20'>  */}
      
  
    
     <p className='text-md text-red-500'>{errorMsg}</p>
     {/* <div className="d-flex justify-content-between">
     {currentComponent > 1 && <button onClick={handlePreviousBottom} class=" text-yellow-700 font-extrabold rounded-md shadow-black-md text-sm hover:scale-105 duration-300 ease-in md:h-14">PREVIOUS <i class="fa-solid fa-angle-right"></i><i class="fa-solid fa-angle-right"></i></button>}

     {currentComponent < 3 && <button onClick={handleNextBottom} class=" text-yellow-700 font-extrabold rounded-md shadow-black-md text-sm hover:scale-105 duration-300 ease-in md:h-14">NEXT <i class="fa-solid fa-angle-right"></i><i class="fa-solid fa-angle-right"></i></button>}
     
     {currentComponent > 2 && <button onClick={getdata} type="submit" class="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-1 px-4 rounded-full shadow-black-md text-sm hover:scale-105 duration-300 ease-in">
     SUBMIT
     </button>}

     </div> */}
     {/* </div> */}

    
      {/* </div>  */}
    </div>
    
    </div>
  )
}

export default CompanyFormation
