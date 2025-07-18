// client/src/components/PostCard.jsx
const PostCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 text-left">
      <h2 className="text-xl font-bold text-gray-800">{post.title}</h2>
      <p className="text-gray-600">{post.content}</p>
      <p className="text-sm text-gray-400 mt-2">By {post.author} on {new Date(post.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

export default PostCard;
