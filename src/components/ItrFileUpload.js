import React from "react";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Stepper, Step, Button } from "@material-tailwind/react";
import ItrSalaryPlan from "./RazorpayButtons/ItrSalaryPlan";
import { ToastContainer, Flip, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select';
import { Link } from 'react-router-dom';

function ItrFileUpload() {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pan_card_number, setPanCardNumber] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [assesment_year, setAssesmentYear] = useState("");
  const [uploaded, setUploaded] = useState(false);

  useEffect(() => {
    getPdf();
  }, []);

  const getPdf = async () => {
    const result = await axios.get("http://localhost:4000/get-files");
    console.log(result.data.data);
  };

  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file1", file1);
    formData.append("file2", file2);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("pan_card_number", pan_card_number);
    formData.append("phone_number", phone_number);
    formData.append("assesment_year", assesment_year);

    const result = await axios.post(
      "http://localhost:4000/upload-files",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(result);
    if (result.data.status === "ok" &&
        toast.success('Documents Uploaded Succesfully', {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Flip,
          })
    );
    else
        {
            alert("Error Ocurred")
        }
    {
      setUploaded(true);
      getPdf();
    }
  };

  // ----------------------------asssment year value------------------
  const options = [
    {value: "2021-2022", label: "2021-2022"},
    {value: "2022-2023", label: "2022-2023"},
    {value: "2023-2024", label: "2023-2024"}
  ]

// ------------------------------------Stepper----------------------------------------------
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);
 
  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  // --------------------------------------Stepper Content-------------------------
  const renderContent = () => {
    switch (activeStep) {
      case 0:
        return <div>  
          <form className="formStyle" onSubmit={submitImage}>
        <h1 className='text-xl font-semibold text-center'>Upload Documents</h1>

          {/* ------------------------------------NAME-------------------------------- */}
          <br />
          <p>Name<span className='text-red-500'>*</span></p>
          <input
            type="text"
            className="form-control"
            name="name"
            // accept="application/pdf, .jpg, .png, .jpeg"
            required
            onChange={(e) => setName(e.target.value)}
          />

          <br />
           {/* ------------------------------------EMAIL-------------------------------- */}
          <p>Email<span className='text-red-500'>*</span></p>
          <input
            type="email"
            className="form-control"
            name="email"
            // accept="application/pdf, .jpg, .png, .jpeg"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <br />
           {/* ------------------------------------PAN CARD NUMBER-------------------------------- */}
          <p>Pan Card Number<span className='text-red-500'>*</span></p>
          <input
            type="text"
            className="form-control"
            name="pan_card_number"
            // accept="application/pdf, .jpg, .png, .jpeg"
            required
            onChange={(e) => setPanCardNumber(e.target.value)}
          />

            <br />
           {/* ------------------------------------PHONE NUMBER-------------------------------- */}
          <p>Phone Number<span className='text-red-500'>*</span></p>
          <input
            type="tel"
            maxLength={10}
            className="form-control"
            name="phone_number"
            // accept="application/pdf, .jpg, .png, .jpeg"
            required
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

            <br />
           {/* ------------------------------------ASSESMENT YEAR-------------------------------- */}
          <p>Assesment Year<span className='text-red-500'>*</span></p>
          <Select options={options}
          name="assesment_year" 
          required
          onChange={(e) => setAssesmentYear(e.value)}/> 
         
          <br/>
           {/* ------------------------------------UPLOAD FORM 16-------------------------------- */}
          <p>UPLOAD FORM 16<span className='text-red-500'>*</span></p>
          <input
            type="file"
            className="form-control"
            name="file1"
            accept="application/pdf, .jpg, .png, .jpeg"
            required
            onChange={(e) => setFile1(e.target.files[0])}
          />

          <br />
            {/* ------------------------------------INVESTMENT PROOF-------------------------------- */}
          <p>INVESTMENT PROOF<span className='text-red-500'>*</span></p>
          <input
            type="file"
            className="form-control"
            name="file2"
            accept="application/pdf, .jpg, .png, .jpeg"
            required
            onChange={(e) => setFile2(e.target.files[0])}
          />
          <br />
        <button type="submit" 
         class="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-md shadow-black-md text-sm hover:scale-105 duration-300 ease-in"  
         disabled={uploaded}>
         {uploaded ? "Submitted" : "Submit"}
         </button>
              <ToastContainer
          position="top-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition= {Flip}
          />
        </form>
        </div>;

      case 1:
        return <div>
          {/* -------------------------------payment button------------------------ */}
        
        <ItrSalaryPlan/>
          </div>;

      case 2:
        return <div class="text-center">
          <h1 className="text-3xl font-bold">Thank you</h1><br/>
         <Link to="/home" class="text-yellow-500 font-bold text-xl">
            Back to home
          </Link>
        </div>;
      default:
        return <div>Unknown Step</div>;
      }
    };
 
    window.scrollTo(0,0);
  return (
    <div className="mt-28 flex flex-col h-screen md:h-auto max-w-2xl mx-auto px-4 md:py-8 md:mt-28">
      <div className="w-full px-8 text-black">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step onClick={() => setActiveStep(0)}>1</Step>
        <Step onClick={() => setActiveStep(1)}>2</Step>
        <Step onClick={() => setActiveStep(2)}>3</Step>
      </Stepper>
      <div className="mt-10">
        {renderContent()}
      </div>
      <div className="mt-16 flex justify-between">
        <Button onClick={handlePrev} disabled={isFirstStep}>
          Prev
        </Button>
        <Button onClick={handleNext} disabled={isLastStep}>
          Next
        </Button>
      </div>
    </div>
    


    </div>
  );
}

export default ItrFileUpload;