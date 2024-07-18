import { useEffect, useState } from "react";
import axios from "axios";
import PostCardAdmin from "./PostCardAdmin";

function PostAdmin() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/posts/admin/pendingPosts")
      .then((response) => {
        if (response.data.success) {
          console.log(response.data.data.posts);
          setPosts(response.data.data.posts.reverse());
        } else {
          console.error("Error fetching posts:", response.data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <div className="space-x-4 space-y-4 h-fit flex flex-row flex-wrap">
      {posts?.map((post) => {
        return <PostCardAdmin post={post} key={post._id} />;
      })}
    </div>
  );
}

export default PostAdmin;
