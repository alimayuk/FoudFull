import { Link, useLocation } from "react-router-dom";
import "./NewsCard.css";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import axios from "axios";
const NewsCard = ({ img, htext, date, desc, postId,post }) => {
  const { currentUser } = useContext(AuthContext);
  const location = useLocation().pathname;
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`/posts/${postId}`, {
        data: { username: currentUser.username },
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(post)
  return (
    <div className="NewsCard">
     {img && <img src={img} alt="" />}
      <div className="cardBody">
        <div className="CardTitle">
          <h2>
            {htext}
          </h2>
          <p className="date">{date}</p>
        </div>
        <p className="CardDesc">{desc}</p>
        <Link to={`/blogs/${postId}`} className="CardLink">
          Read More
        </Link>
        {currentUser && (
          <>
            <div>
            <Link style={{
                display: location.startsWith("/admin") ? "block" : "none",
              }} className="editBtn" to={`/adminpage?edit=2`} state={post}>Update</Link>
            </div>
            <button
              onClick={handleDelete}
              className="deleteBtn"
              style={{
                display: location.startsWith("/admin") ? "block" : "none",
              }}
            >
              Sil
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
