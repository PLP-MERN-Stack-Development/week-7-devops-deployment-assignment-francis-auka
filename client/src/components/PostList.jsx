// client/src/components/PostList.jsx
import { useEffect, useState } from 'react';
import PostCard from './PostCard';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await fetch('/api/posts');
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      console.error('Failed to fetch posts', err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="mt-6">
      <h1 className="text-2xl font-bold mb-4">All Posts</h1>
      {posts.length > 0 ? (
        posts.map((post) => <PostCard key={post._id} post={post} />)
      ) : (
        <p>No posts yet.</p>
      )}
    </div>
  );
};

export default PostList;
