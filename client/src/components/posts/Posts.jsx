import "./posts.css";
import '../post/SinglePost'
import OnePost from "../post/SinglePost";
export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p) => (
        <OnePost key={p.id} post={p} />
      ))}
    </div>
  );
}





