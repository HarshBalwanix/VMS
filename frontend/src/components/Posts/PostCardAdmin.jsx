import React from "react";
import axios from "axios"; // Ensure axios is imported
import { toast } from "react-toastify"; // Ensure react-hot-toast is imported
const PostCardAdmin = ({ post }) => {
  const handleApprove = (postId) => {
    axios
      .patch(`http://localhost:8000/api/v1/posts/admin/${postId}`)
      .then((response) => {
        if (response.data.success) {
          toast.success("Post approved!");
          // Optionally, refresh the posts or update the UI to reflect the approval
        } else {
          console.error("Error approving post:", response.data.message);
        }
      })
      .catch((error) => {
        console.error("Error approving post:", error);
      });
  };

  return (
    <div className=" overflow-auto">
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Name
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Description
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Date
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Approve
            </th>
          </tr>
        </thead>
        <tbody>
          <tr key={post._id}>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              {post.fullName}
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              {post.content}
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              {new Date(post.createdAt).toLocaleString()}
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleApprove(post._id)}
              >
                Approve
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PostCardAdmin;
