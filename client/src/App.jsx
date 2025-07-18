import { useEffect, useState } from 'react';
import { fetchPosts, createPost } from './api/posts';

function App() {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({ title: '', content: '' });

  useEffect(() => {
    fetchPosts().then(res => setPosts(res.data)).catch(console.error);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.content) return;

    try {
      const res = await createPost(form);
      setPosts([...posts, res.data]);
      setForm({ title: '', content: '' });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto text-left">
      <h1 className="text-2xl font-bold mb-4">Assignment Posts</h1>

      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="w-full border p-2 rounded"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <textarea
          placeholder="Content"
          className="w-full border p-2 rounded"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Post
        </button>
      </form>

      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post._id} className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
