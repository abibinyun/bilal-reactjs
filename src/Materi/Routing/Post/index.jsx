import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  return (
    <div className="main">
      <h4> post ke-{id}</h4>
      <p>deskripsi</p>
    </div>
  );
};
export default Post;
