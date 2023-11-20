import React, { useEffect, useState } from 'react'
import "./css/AdminAllBlogs.css"
import axios from 'axios';
import moment from 'moment';
import NewsCard from '../components/NewsCard/NewsCard';
const AdminAllBlogs = () => {
    const [posts,setPosts] = useState([]);
    const [post,setPost] = useState({});
  useEffect(()=>{
    const fetchData = async()=>{
      const post = await axios.get("/posts")
      setPosts(post.data)
      setPost(post)
      console.log(posts)
    } 
    fetchData();
  },[])
  return (
    <div className='AdminAllBlogs'>
        <div className="container">
        <h1>ALL BLOGS</h1>
       <div className="blogsWrapper">
       {posts.map((post,i) => (
  
  <NewsCard
    key={post._id} 
    post={post}
    img={require(`../assets/upload/${post?.photo}`)}
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

export default AdminAllBlogs