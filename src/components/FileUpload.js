import { useEffect, useState } from "react";
import axios from "axios";

function FileUpload() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");

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
    formData.append("file", file);
    console.log(title, file);

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
    <>
     <div className="mt-32 p-20">
     <form className="formStyle" onSubmit={submitImage}>
        <h4>Upload Documents</h4>
        <br />
        {/* <input
          type="text"
          className="form-control"
          placeholder="Enter file name"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <br /> */}
        {/* <div className="flex space-x-2">
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
        </div> */}
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Enter file name"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <div className="flex space-x-2">
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
        </div>
      </form>
    </div>
      
    </>
  )
}

export default FileUpload
