import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ShareholderDetails = () =>{
const ShareholderDetails = ({ onPrev, onNext }) => {
    return (
      <>
        <h1>ShareholderDetails page </h1>
        <div>
          <button onClick={onPrev}>Prev</button>
          <button onClick={onNext}>Next</button>
        </div>
      </>
    );
  };
};

  export default ShareholderDetails