import React, { useEffect, useState } from 'react';
import './css/AdminAllBlogs.css';
import axios from 'axios';
import moment from 'moment';
import NewsCard from '../components/NewsCard/NewsCard';

const AdminAllBlogs = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/posts/');
        setPosts(response.data);
      } catch (error) {
        console.error('Veri getirme hatası:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="AdminAllBlogs">
      <div className="container">
        <h1>TÜM BLOGLAR</h1>
        <div className="blogsWrapper">
          {posts.length > 0 ? (
            posts.map((post) => (
              <NewsCard
                key={post._id}
                post={post}
                img={post.photo}
                htext={post.title}
                date={`${moment(post.createdAt).format('DD')} ${moment(post.createdAt).format('MM')} ${moment(post.createdAt).format('YYYY')}`}
                desc={post.litdesc}
                postId={post._id}
              />
            ))
          ) : (
            <p>Henüz bir blog gönderisi bulunmamaktadır.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminAllBlogs;
