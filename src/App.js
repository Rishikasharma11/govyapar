import "./App.css";
import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Service from "./components/Service";
import Affiliate from "./components/Affiliate/Affiliate";
import SignIn from "./components/Affiliate/SignIn";
import SignUp from "./components/Affiliate/SignUp";
import UserLogin from "./components/Affiliate/UserLogin";
import Notice from "./components/Notice";
import Contact from "./components/Contact";
import Consultation from "./components/Consultation";
import CompanyFormation from "./components/CompanyFormation";
import CompanyDetails from "./components/CompanyDetails";
import DirectorDetails from "./components/DirectorDetails";
import ShareholderDetails from "./components/ShareholderDetails";
import Payment from "./components/Payment";
import Pricing from "./components/Pricing";
import TaxPlanner from "./components/TaxPlanner";
import Continue from "./components/Continue";
import ItrFiling from "./components/ItrFiling";
import GstFiling from "./components/GstFiling";
import NGO from "./components/NGO";
import Trademark from "./components/Trademark";
import StartupFunding from "./components/StartupFunding";
import VirtualCfo from "./components/VirtualCfo";
import Career from "./components/Career";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "./firebase.config";
import ItrSalaryPlan from "./components/RazorpayButtons/ItrSalaryPlan";
import GstRegistration from "./components/RazorpayButtons/GstRegistration";
import BusinessLoans from "./components/BusinessLoans";
import FileUpload from "./components/FileUpload";
import TestMail from "./components/TestMail";

  function App(){
    const [userName, setUserName] =  useState("");
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if(user){
          setUserName(user.displayName);
        }else setUserName("");
        console.log(user);
      });
    }, []);

  return (
    <>

    <Router basename = "/">
    <Navbar/>
  
    <Routes>
      {/* --------------------------------------------Navbar------------------------------------ */}
      <Route index element={<Home />} />
      <Route path="/service" element={<Service />} />
      <Route path="/home" element={<Home />} />
      <Route path="/consultation" element={<Consultation />} />

              {/* -------company formation------ */}
      <Route path="/companyFormation" element={<CompanyFormation />} />
      <Route path="/companyDetails" element={<CompanyDetails />} />
      <Route path="/directorDetails" element={<DirectorDetails />} />
      <Route path="/shareholderDetails" element={<ShareholderDetails />} />
      <Route path="/payment" element={<Payment/>} />

                 {/* --------services----- */}
      <Route path="/tax-planner" element={<TaxPlanner />} />
      <Route path="/notice" element={<Notice />} />
      <Route path="/itrFiling" element={<ItrFiling />} />
      <Route path="/gstFiling" element={<GstFiling />} />
      <Route path="/ngo" element={<NGO />} /> 
      <Route path="/trademark" element={<Trademark />} /> 
      <Route path="/startupFunding" element={<StartupFunding />} /> 
      <Route path="/virtualCfo" element={<VirtualCfo />} /> 
      <Route path="/fileUpload" element={<FileUpload />} /> 
      <Route path="/businessLoans" element={<BusinessLoans/>} />
      <Route path="/pricing" element={<Pricing />} />

            {/* --------affiliate--------- */}
      <Route path="/affiliate" element={<Affiliate Program />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />

      <Route path="/contact" element={<Contact />} />
{/* --------------------------------------------Navbar End------------------------------------ */}

      <Route path="/career" element={<Career />} />
      <Route path="/continue" element={<Continue />} /> 
      <Route path="/testMail" element={<TestMail />} /> 

      {/* -----------------------RazorpayButtons----------------- */}
      <Route path="/itrSalaryPlan" element={<ItrSalaryPlan />} /> 
      <Route path="/gstRegistration" element={<GstRegistration />} /> 
       </Routes>
       </Router> 
    </>
  );
};

export default App
