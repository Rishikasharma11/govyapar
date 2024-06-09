import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const DirectorDetails = () =>{
const DirectorDetails = ({ onPrev, onNext }) => {
    return (
      <>
        <h1>DirectorDetails </h1>
        <div>
          <button onClick={onPrev}>Prev</button>
          <button onClick={onNext}>Next</button>
        </div>
      </>
    );
  };
};

  export default DirectorDetails