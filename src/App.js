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
// import Meeting from "./components/Meeting";
// import Product from "./components/Product";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "./firebase.config";
import RazorpayButton from "./components/RazorpayButton";
import BusinessLoans from "./components/BusinessLoans";
import FileUpload from "./components/FileUpload";
// import { text } from "stream/consumers";
// import StripeCheckout from "react-stripe-checkout"
// import Chatbot from 'react-chatbot-kit';
// import 'react-chatbot-kit/build/main.css';
// import config from './config';
// import ActionProvider from './ActionProvider';
// import MessageParser from './MessageParser';
// import './App.css'

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

  //   state = {
  //     text:{
  //       recipient: '',
  //       textmessage: '',
  //     }
  //   }

  //   sendText = _ => {
  //     //pass variable within the query string
  //     fetch('http://localhost:4000/send-text?recipient=${text.recipient}&textmessage=${text.textmessage}')
  //     .catch(err => console.error(err))
  //   }

   
  //     const { text } = this.state;

  //     const spacer = {
  //       margin: 8
  //     }
  //     const textArea = {
  //       borderRadius: 4
  //     }
    

// -------------------------stripe--------------------
    // const[product, setProduct] = useState({
    //   name: "React from FB",
    //   price: 10,
    //   productBy: "facebook"
    // });

    // const makePayment = token =>{
    //   const  body = {
    //     token, 
    //     product
    //   }
    // const headers = {
    //   "Content-Type" : "application/json"
    // }

    // return fetch('http://localhost:8282/payment',{
    //   method: "POST",
    //   headers,
    //   body: JSON.stringify(body)
    // }).then(response =>{
    //   console.log("RESPONSE ", response)
    //   const {status} = response;
    //   console.log("STATUS ", status)
    // })
    // .catch(error => console.log("error"));

    // };

  return (
    <>
    {/* <label>phone no.</label>
   <input value={text.recipient}
  onChange={e => this.setState({ text: { ...text, recipient: e.target.value} })}/>

  <textarea value={text.textmessage}
   onChange={e => this.setState({ ...text, textmessage: e.target.value})}></textarea>
  <button onClick={this.sendText}>Send Text</button> */}

    <Router basename = "/">
    <Navbar/>
    {/* <StripeCheckout
    stripeKey="pk_test_51PI3O4SJshWiF3MzZnyzPazxaT1RLQmbIWswNOLOAO67ZDw5V45ZdlXrchLXOosoZWP0jVen9XcXPnJsYlli3JME00kqkhaGOd"
    token={makePayment}
    amount={product.price * 100}
    >
      <button className="bg-yellow-500 p-3 rounded-full m-10">Buy Now {product.price} $</button>
    </StripeCheckout> */}

   
    <Routes>
      <Route index element={<Home />} />
      <Route path="/service" element={<Service />} />
      <Route path="/home" element={<Home />} />
      <Route path="/consultation" element={<Consultation />} />

      {/* ---------------company formation------ */}
      <Route path="/companyFormation" element={<CompanyFormation />} />
      <Route path="/companyDetails" element={<CompanyDetails />} />
      <Route path="/directorDetails" element={<DirectorDetails />} />
      <Route path="/shareholderDetails" element={<ShareholderDetails />} />
      <Route path="/payment" element={<Payment/>} />

      {/* <Route path="/meeting" element={<Meeting />} /> */}
      <Route path="/tax-planner" element={<TaxPlanner />} />
      <Route path="/notice" element={<Notice />} />
      <Route path="/itrFiling" element={<ItrFiling />} />
      <Route path="/gstFiling" element={<GstFiling />} />
      <Route path="/ngo" element={<NGO />} /> 
      <Route path="/trademark" element={<Trademark />} /> 
      <Route path="/startupFunding" element={<StartupFunding />} /> 
      <Route path="/virtualCfo" element={<VirtualCfo />} /> 
      <Route path="/razorpayButton" element={<RazorpayButton />} /> 
      <Route path="/fileUpload" element={<FileUpload />} /> 
      <Route path="/businessLoans" element={<BusinessLoans/>} />
      <Route path="/pricing" element={<Pricing />} />
      {/* -------------affiliate--------------------- */}
      <Route path="/affiliate" element={<Affiliate Program />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />

      <Route path="/contact" element={<Contact />} />
      <Route path="/career" element={<Career />} />
      <Route path="/continue" element={<Continue />} /> 
      {/* <Route path="/product" element={<Product />} />  */}
       </Routes>
       </Router> 
    </>
  );
};

export default App
// class App extends Component {

//   state = {
//     text: {
//       recipient: '',
//       textmessage: ''
//     }
//   }

//   sendText = _ => {
//     const { text } = this.state;
//     //pass text message GET variables via query string
//     fetch(`http://localhost:4000/send-text?recipient=${text.recipient}&textmessage=${text.textmessage}`)
//     .catch(err => console.error(err))
//   }

//   render() {
//     const { text } = this.state;
//     const spacer = {
//       margin: 8
//     }
//     const textArea = {
//       borderRadius: 4
//     }
//     return (
//       <div className="App">
        
//         <div style={{ marginTop: 10 }} >
//           <h2> Send Text Message </h2>
//           <label> Your Phone Number </label>
//           <br />
//           <input value={text.recipient}
//             onChange={e => this.setState({ text: { ...text, recipient: e.target.value } })} />
//           <div style={spacer} />
//           <label> Message </label>
//           <br />
//           <textarea rows={3} value={text.textmessage} style={textArea}
//             onChange={e => this.setState({ text: { ...text, textmessage: e.target.value } })} />
//           <div style={spacer} />
//           <button onClick={this.sendText}> Send Text </button>
//         </div>
//       </div>
//     );
//   }
// }
// export default App;

