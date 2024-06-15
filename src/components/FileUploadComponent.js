import React, { useState , useEffect} from 'react';
import axios from "axios";

function FileUploadComponents() {
  const [currentComponent, setCurrentComponent] = useState(1);

  const handleNext = () => {
    setCurrentComponent(currentComponent + 1);
  };
  const handlePrevious = () => {
    setCurrentComponent(currentComponent - 1);
  };


  const [title, setTitle] = useState("");
  // const [title1, setTitle1] = useState("");
  const [file, setFile] = useState("");
  // const [file1, setFile1] = useState("");

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
    formData.append("title", title);
    // formData.append("title", title1);
    formData.append("file", file);
    // formData.append("file", file1);
    console.log(title, file);
    // console.log(title1, file1);

    const result = await axios.post(
      "http://localhost:4000/upload-files",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(result);
    if (result.data.status == "ok") {
      alert("Uploaded Successfully!!!");
      getPdf();
    }
  };

  return (
    <div>
      {currentComponent === 1 && <Component1 />}
      {currentComponent === 2 && <Component2 />}
      {currentComponent === 3 && <Component3 />}
      {currentComponent > 1 && <button onClick={handlePrevious}>previous</button>}
      {currentComponent < 3 && <button onClick={handleNext}>Next</button>}
    </div>
  );

function Component1() {
  return <>Component 1
     <form className="formStyle" onSubmit={submitImage}>
        <h4>Upload Documents</h4>
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Enter file name"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          type="file"
          class="form-control"
          accept="application/pdf, .jpg, .png, .jpeg"
          required
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br />
        <button class="btn btn-primary" type="submit">
          Submit
        </button>
        </form>
  </>
}

function Component2() {
  return <div>Component 2</div>;
}

function Component3() {
  return <div>Component 3</div>;
}
}
export default FileUploadComponents;