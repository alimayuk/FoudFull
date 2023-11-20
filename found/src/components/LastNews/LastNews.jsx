import { useLocation } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";
import "./LastNews.css";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const LastNews = () => {
  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    const fetchData = async()=>{
      const post = await axios.get("/posts/")
      setPosts(post.data)
    } 
    fetchData();
  },[])

  const location = useLocation().pathname;
  const lastThreePosts = posts.slice(Math.max(posts.length - 3, 0));
  return (
    <div className="LastNews">
      <div
        className="container"
        style={{ padding: location.startsWith("/blog") ? "0px" : "100px 5px" }}
      >
        <div className="title">
          <div className="span">Blogs</div>
          <h1>Latest Blogs</h1>
        </div>
        <div className="NewsBody">
          {lastThreePosts.map((post, i) => (
            <NewsCard
              key={i}
              img={require(`../../assets/upload/${post?.photo}`)}
              htext={post.title}
              date={`${moment(post.createdAt).format("DD")} ${moment(
                post.createdAt
              ).format("MM")} ${moment(post.createdAt).format("YYYY")}`}
              desc={post.litdesc}
              postId={post._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LastNews;
