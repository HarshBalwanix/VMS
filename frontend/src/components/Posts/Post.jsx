import { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "./PostCard"; // Ensure you have a PostCard component
import { useNavigate } from "react-router-dom"; // Assuming you are using React Router
import { backendUrl } from "../../lib/constant";

function Post() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${backendUrl}/posts/volunteer/allPosts`)
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

  const handleCreatePost = () => {
    navigate("/posts/create"); // Replace with the route to your create post page
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={handleCreatePost}
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#f2b705] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-all ease-in-out duration-300 hover:text-black"
        >
          Pending Posts
        </button>
        <h2 className="text-3xl font-bold text-gray-800 text-center flex-grow">
          Volunteer Posts
        </h2>
      </div>
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard post={post} key={post._id} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 text-xl mt-10">
          No posts available
        </div>
      )}
    </div>
  );
}

export default Post;
