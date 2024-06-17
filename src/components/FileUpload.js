// import { useEffect, useState } from "react";
// import axios from "axios";

// function FileUpload() {

//   const [title, setTitle] = useState("");
//   // const [title2, setTitle2] = useState("");
//   const [file1, setFile1] = useState("");
//   const [file2, setFile2] = useState("");

//   useEffect(() => {
//     getPdf();
//   },[title,file1, file2]);

//   const getPdf = async () => {
//     const result = await axios.get("http://localhost:4000/get-files");
//     console.log(result.data.data);
//   };

//   const submitImage = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("title", title);
//     // formData.append("title2", title2);
//     formData.append("file1", file1);
//     formData.append("file2", file2);
//     console.log(title, file1);
//     console.log(title, file2);

//     const result = await axios.post(
//       "http://localhost:4000/upload-files",
//       formData,
//       {
//         headers: { "Content-Type": "multipart/form-data" },
//       }
//     );
//     console.log(result);
//     if (result.data.status == "ok") {
//       alert("Uploaded Successfully!!!");
//       getPdf();
//     }
//   };

//   return (
//      <div className="mt-32 p-20">
//      <form className="formStyle" onSubmit={submitImage}>
//         <h4>Upload Documents</h4>
//         <br />
//        <input
//           type="text"
//           // name="title1"
//           className="form-control"
//           placeholder="Enter file name"
//           required
//           onChange={(e) => setTitle(e.target.value)}
//         /> 
//         <br />
//         <div className="flex space-x-2">
//         <input
//           type="file"
//           class="form-control"
//           name="file1"
//           accept="application/pdf, .jpg, .png, .jpeg"
//           required
//           onChange={(e) => setFile1(e.target.files[0])}
//         />
//         <br />
//         {/* <button class="btn btn-primary" type="submit">
//           Submit
//         </button> */}
//         </div> 
//         <br />
//         <input
//           type="text"
//           // name="title2"
//           className="form-control"
//           placeholder="Enter file name"
//           required
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <br />
//         <div className="flex space-x-2">
//         <input
//           type="file"
//           class="form-control"
//           name="file2"
//           accept="application/pdf, .jpg, .png, .jpeg"
//           required
//           onChange={(e) => setFile2(e.target.files[0])}
//         />
//         <br />
//         <button class="btn btn-primary" type="submit">
//           Submit
//         </button>
//         </div>
//         </form>
//         </div>
 
//   )
// };

// export default FileUpload;



import { useEffect, useState } from "react";
import axios from "axios";

function FileUpload() {
  const [title1, setTitle1] = useState("");
  const [title2, setTitle2] = useState("");
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);

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
    formData.append("title1", title1);
    formData.append("title2", title2);
    formData.append("file1", file1);
    formData.append("file2", file2);

    const result = await axios.post(
      "http://localhost:4000/upload-files",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(result);
    if (result.data.status === "ok") {
      alert("Uploaded Successfully!!!");
      getPdf();
    }
  };

  return (
    <div className="mt-32 p-20">
      <form className="formStyle" onSubmit={submitImage}>
        <h4>Upload Documents</h4>
        <br />
        {/* <input
          type="text"
          className="form-control"
          placeholder="Enter file 1 name"
          required
          onChange={(e) => setTitle1(e.target.value)}
        /> */}
        <p>upload 1</p>
        <br />
        <input
          type="file"
          className="form-control"
          name="file1"
          accept="application/pdf, .jpg, .png, .jpeg"
          required
          onChange={(e) => setFile1(e.target.files[0])}
        />
        <br />
        {/* <input
          type="text"
          className="form-control"
          placeholder="Enter file 2 name"
          required
          onChange={(e) => setTitle2(e.target.value)}
        /> */}
        <p>upload 2</p>
        <br />
        <input
          type="file"
          className="form-control"
          name="file2"
          accept="application/pdf, .jpg, .png, .jpeg"
          required
          onChange={(e) => setFile2(e.target.files[0])}
        />
        <br />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FileUpload;