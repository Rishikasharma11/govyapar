// import { step } from "@material-tailwind/react";
// import React, { useEffect, useState, useRef} from "react";

// const StepperControl = () =>{
 

// const Stepper = ({steps, currentStep}) =>{
//     const [newStep, setNewStep] = useState([]);
//     const stepRef = useRef();
    
//     const updateStep = (stepNumber, steps) => {
//         const newStep = [...step]
//         let count =0;

//         while(count < newSteps.length){
//             // current step
//             if(count === stepNumber){
//                 newStep[count] = {
//                     ...newSteps[count],
//                     highlighted: true,
//                     selected: true,
//                     completed: true,
//                 };
//                 count++;
//             }
//             // step completed
//             else if(count < stepNumber){
//                 newStep[count] = {
//                     ...newSteps[count],
//                     highlighted: false,
//                     selected: false,
//                     completed: false,
//                 };
//                 count++;
//             }
//             // step pending
//             else{
//                 newStep[count] = {
//                     ...newSteps[count],
//                     highlighted: false,
//                     selected: false,
//                     completed: false,
//                 };
//                 count++;
//             }
//             }
//             return newSteps;

//         }
//     };
    
//     useEffect(() =>{
//         const stepsState = steps.map((step, index) =>
//         Object.assign(
//             {},
//             {
//                 description: step,
//                 completed: false,
//                 highlighted: index === 0 ? true : false,
//                 selected: index === 0 ? true : false,
//             }
//          )
//         );

//         stepRef.current = stepsState;
//         const current = updateStep(currentStep - 1, stepRef.current);
//         setNewStep(current);

//     }, [steps, currentStep]);

//     const displaySteps = newStep.map((step, index)=>{
//         return (
//             <div key = {index}
//             className={
//                 index != newStep.length - 1 ? "w-full flex items-center" : "flex items-center"
//             }>
//             <div className="relative flex flex-col items-center text-teal-600"> 
//                       {/* --------------display number------------- */}
//                       <div className="rounded-full transition duration-100 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3">
//                           1
//                       </div>
//                       {/* --------------display description------------- */}
//                       <div className="absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase">
//                           Description
//                       </div>
//                   {/* --------------display line------------- */}
//                       <div className="flex-auto border-t-2 transition duration-500 ease-in-out">
//                       </div>
          
//                   </div>
//               </div>
//         );
//     });

// return(
//     <>
//     <div className="mx-4 p-4 flex justify-between items-center">
//         {displaySteps}

//     </div>

//     </>
//  );
// };

// export default StepperControl;