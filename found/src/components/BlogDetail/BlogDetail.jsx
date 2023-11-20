import React, { useContext, useEffect, useState } from "react";
import "./BlogDetail.css";
import LastNews from "../LastNews/LastNews";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import axios from "axios";
import moment from "moment";
import DOMPurify from "dompurify";

const BlogDetail = () => {
  const [post, setPost] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const postId = location.pathname.split("/")[2];
  const [photo, setPhoto] = useState("");
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    if (post?.photo) {
      const photoPath = require(`../../assets/upload/${post.photo}`);
      setPhoto(photoPath.default || photoPath);
    }
  }, [post]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="BlogDetail">
      <div className="container">
        <div className="content">
          <h1
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(post.title),
            }}
          ></h1>
          <img className="blogImg" src={photo} alt="" />
          <div className="date">
            <span>Posted {moment(post.createdAt).fromNow()}</span> -{" "}
            <span>{post.username}</span>
          </div>
          <div
            className="blogDesc"
            dangerouslySetInnerHTML={{ __html: post.desc }}
          ></div>
        </div>
        <div className="sidebar">
          <LastNews />
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
