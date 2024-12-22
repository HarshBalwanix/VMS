import { useEffect, useState } from "react";
import axios from "axios";
import PostCardAdmin from "./PostCardAdmin";
import { backendUrl } from "../../lib/constant";

function PostAdmin() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${backendUrl}/posts/admin/pendingPosts`)
      .then((response) => {
        if (response.data.success) {
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
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Manage Posts</h2>
      {posts.length > 0 ? (
        <PostCardAdmin posts={posts} />
      ) : (
        <p className="text-gray-500">No posts available to manage.</p>
      )}
    </div>
  );
}

export default PostAdmin;
