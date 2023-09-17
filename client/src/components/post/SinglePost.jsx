import { Link } from "react-router-dom";
import "./post.css";

export default function OnePost({post}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={post.photo}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
            {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
            </Link>
          </span>
          
        </div>
        <span className="postTitle">
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        </span>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">
        {post.desc}
      </p>
    </div>
  );
}