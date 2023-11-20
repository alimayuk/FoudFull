import { useState } from "react"
import NewsCard from "../NewsCard/NewsCard"
import "./AllBlogs.css"
import { useEffect } from "react";
import axios from "axios";
import moment from "moment";


const AllBlogs = () => {

  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    const fetchData = async()=>{
      const post = await axios.get("/posts")
      setPosts(post.data)
    } 
    fetchData();
  },[])
  return (
    <div className='AllBlogs'>
      <div className="container">
        <div className="title">
          <span>Blogs</span>
          <h1>All Blogs</h1>
        </div>
        <div className="NewsBody">
        {posts.map((post,i) => (
  <NewsCard
    key={i}
    img={require(`../../assets/upload/${post?.photo}`)}
    htext={post.title}
    date={`${moment(post.createdAt).format("DD")} ${moment(post.createdAt).format("MM")} ${moment(post.createdAt).format("YYYY")}`}
    desc={post.litdesc}
    postId={post._id}
  />
))}
        </div>
      </div>
    </div>
  )
}

export default AllBlogs