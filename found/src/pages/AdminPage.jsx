import React, { useContext, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./css/AdminPage.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment"
import { AuthContext } from "../context/authContext";

const AdminPage = () => {
  const {currentUser} = useContext(AuthContext)
  const navigate = useNavigate();
  const state = useLocation().state;

  const [value, setValue] = useState(state?.desc || "");
  const [title, setTitle] = useState(state?.title|| "");
  const [litdesc, setLitdesc] = useState(state?.litdesc|| "");
  const [cat, setCat] = useState(state?.cat || "");
  const [file, setFile] = useState(null);


  const MAX_CHARS = 300;
  const [charCount, setCharCount] = useState(MAX_CHARS); 

  const handleLitdescChange = (e) => {
    const inputText = e.target.value;
    if (inputText.length <= MAX_CHARS) {
      setLitdesc(inputText);
      setCharCount(MAX_CHARS - inputText.length);
    }
  };
  const upload = async () =>{
   try {
    const formData = new FormData();
    formData.append("file",file)
    const res = await axios.post("/upload", formData)
    return res.data
   } catch (err) {
    console.log(err)
   }
  }

  const handlSubmit = async (e) =>{
    e.preventDefault()
    const imgUrl = await upload();
    try {
      state
        ? await axios.put(`/posts/${state._id}`, {
            title,
            desc: value,
            cat,
            litdesc,
            photo: file ? imgUrl : "default.webp",
            username: currentUser.username
          })
        : await axios.post(`/posts/`, {
            title,
            desc: value,
            litdesc,
            cat,
            photo: file ? imgUrl : "default.webp",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            username: currentUser.username
          });
          navigate("/adminpage")
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="adminpage">
      <div className="container">
        <div className="content">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
         <div className="litdesc">
          <label htmlFor="textareaa">Brief Description</label>
          <textarea
            onChange={handleLitdescChange}
            className="textareaa"
            id="textareaa"
            cols="20"
            rows="10"
            value={litdesc}
            maxLength={MAX_CHARS} // Maksimum karakter sınırı
            style={{ borderColor: charCount === 0 ? "red" : "" }}
          />
           <div className="char-count">{charCount} characters left</div>
         </div>
         <h3>Detailed Description</h3>
          <div className="editorContainer">
            <ReactQuill
              className="editor"
              theme="snow"
              value={value}
              onChange={setValue}
            />
          </div>
        </div>
        <div className="menu">
          <div className="item">
            <h1>Publish</h1>
            <label htmlFor="file" className="uploadBtn">Upload Image</label>
            <input
              style={{ display: "none" }}
              type="file"
              name=""
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
              
            />
            <div className="buttons">
              <button onClick={handlSubmit}>Publish</button>
            </div>
          </div>
          <div className="item">
            <h1>Category</h1>
            <div className="cat">
            <input
              type="radio"
              checked={cat === "science"}
              name="cat"
              value="science"
              id="science"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "technology"}
              name="cat"
              value="technology" 
              id="technology"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="technology">Technology</label>
          </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
