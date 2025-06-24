import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from './features/dataSlice';
import { useNavigate, Link } from 'react-router-dom';
import Navigation from './Navigation';

function Create() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, body };
    dispatch(addPost(newPost));

    const localPosts = JSON.parse(localStorage.getItem('localPosts') || '[]');
    localPosts.push(newPost);
    localStorage.setItem('localPosts', JSON.stringify(localPosts));

    setSuccess(true);
    setTimeout(() => navigate('/posts'), 1200);
  };

  return (
    <div className="container">
      <h2>Create Post</h2>

      <form onSubmit={handleSubmit} className="form">
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
            className="form-input"
          />
        </label>

        <label>
          Body:
          <textarea
            value={body}
            onChange={e => setBody(e.target.value)}
            required
            className="form-input"
          />
        </label>

        <button type="submit">Submit</button>
      </form>

      {success && <div className="success-msg">Post created! Redirecting...</div>}
    </div>
  );
}

export default Create;
