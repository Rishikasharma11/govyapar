import React from "react";

const StepperControl = () =>{

    
    
return(
    <>
    <div className="container flex justify-around mt-4 mb-4">
{/* -----------------back button---------- */}
<button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-1 px-4 rounded-full shadow-black-md text-sm hover:scale-105 duration-300 ease-in">
  Back
</button>

{/* -----------------next button---------- */}
<button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-1 px-4 rounded-full shadow-black-md text-sm hover:scale-105 duration-300 ease-in">
  Next
</button>
    </div>
    </>
  );
};

export default StepperControl;