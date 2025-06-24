import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './features/dataSlice';
import { Link } from 'react-router-dom';

function Posts() {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.data.posts);
    const status = useSelector((state) => state.data.postsStatus);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <div className="container" style={{ maxWidth: 1200, margin: '0 auto', padding: '1rem' }}>
            <h2>Posts</h2>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/data">Data</Link>
            </nav>
            {status === 'loading' && <p>Loading posts...</p>}
            {status === 'failed' && <p>Failed to load posts.</p>}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.5rem',
                    justifyContent: 'center',
                    marginTop: '2rem',
                }}
            >
                {posts && posts.map(post => (
                    <div
                        key={post.id}
                        style={{
                            background: '#1a1f26',
                            borderRadius: 8,
                            padding: '1.5rem',
                            minWidth: 0,
                            boxShadow: '0 2px 8px #0002',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.5rem',
                        }}
                    >
                        <div style={{ color: '#6EACDA', fontWeight: 600, fontSize: '1.1rem' }}>Title:</div>
                        <h3 style={{ color: '#cbd5e1', margin: 0, fontSize: '1.2rem', wordBreak: 'break-word' }}>{post.title}</h3>
                        <div style={{ color: '#6EACDA', fontWeight: 600, fontSize: '1.1rem', marginTop: '0.5rem' }}>Post:</div>
                        <p style={{ color: '#cbd5e1', margin: 0, wordBreak: 'break-word' }}>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Posts;
