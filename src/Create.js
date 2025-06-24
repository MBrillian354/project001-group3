import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from './features/dataSlice';
import { useNavigate, Link } from 'react-router-dom';

function Create() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost({ title, body }));
    const newPost = { title, body };
    dispatch(addPost(newPost));
    // Save to localStorage
    const localPosts = JSON.parse(localStorage.getItem('localPosts') || '[]');
    localPosts.push(newPost);
    localStorage.setItem('localPosts', JSON.stringify(localPosts));
    setSuccess(true);
    setTimeout(() => navigate('/posts'), 1200);
  };

  return (
    <div className="container wireframe">
      <h2>Create Post</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/data">Data</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/create">Create</Link>
      </nav>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <label>
          Title:
          <input value={title} onChange={e => setTitle(e.target.value)} required style={{ border: '1px solid #aaa', background: 'none' }} />
        </label>
        <label>
          Body:
          <textarea value={body} onChange={e => setBody(e.target.value)} required style={{ border: '1px solid #aaa', background: 'none' }} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {success && <div style={{ marginTop: 16, color: 'green' }}>Post created! Redirecting...</div>}
    </div>
  );
}

export default Create;