import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const CompanyDetails = () =>{
const CompanyDetails = ({ onPrev, onNext }) => {
    return (
      <>
        <h1>Hello 1</h1>
        <div>
          <button onClick={onPrev}>Prev</button>
          <button onClick={onNext}>Next</button>
        </div>
      </>
    );
  };
};

export default CompanyDetails
