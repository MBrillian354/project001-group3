import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchComments } from './features/dataSlice';

function PostDetail() {
    const { id } = useParams();
    const posts = useSelector((state) => state.data.posts);
    const dispatch = useDispatch();
    const comments = useSelector((state) => state.data.commentsByPost[id] || []);
    const commentsStatus = useSelector((state) => state.data.commentsStatus);

    // Get user-created posts from localStorage
    const localPosts = JSON.parse(localStorage.getItem('localPosts') || '[]');

    // Try to find the post in fetched posts (API) first, then in local posts
    let post = posts?.find(post => String(post.id) === id);
    if (!post) {
        post = localPosts.find((post, idx) =>
            String(post.id) === id || `local-${idx}` === id
        );
    }


    useEffect(() => {
        if (post && post.id && !comments.length) {
            dispatch(fetchComments(post.id));
        }
    }, [dispatch, post, comments.length]);

    return (
        <div
            className="container"
            style={{
                maxWidth: 1200,
                margin: '0 auto',
                padding: '1rem',
            }}
        >
            <h2>Post Details</h2>
            <nav>
                <Link to="/posts">Back to Posts</Link>
            </nav>
            {post ? (
                <>
                    <div
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
                        <div
                            style={{
                                color: '#6EACDA',
                                fontWeight: 600,
                                fontSize: '1.1rem',
                            }}
                        >
                            Title:
                        </div>
                        <h3
                            style={{
                                color: '#cbd5e1',
                                margin: 0,
                                fontSize: '1.2rem',
                                wordBreak: 'break-word',
                            }}
                        >
                            {post.title}
                        </h3>
                        <div
                            style={{
                                color: '#6EACDA',
                                fontWeight: 600,
                                fontSize: '1.1rem',
                                marginTop: '0.5rem',
                            }}
                        >
                            Post:
                        </div>
                        <p
                            style={{
                                color: '#cbd5e1',
                                margin: 0,
                                wordBreak: 'break-word',
                            }}
                        >
                            {post.body}
                        </p>
                    </div>
                    <div style={{ color: '#6EACDA', fontWeight: 600, fontSize: '1.1rem', marginTop: '1.5rem' }}>
                        Comments:
                    </div>
                    {commentsStatus === 'loading' && <p>Loading comments...</p>}
                    {commentsStatus === 'failed' && <p>Failed to load comments.</p>}
                    {commentsStatus === 'succeeded' && comments.length === 0 && <p>No comments found.</p>}
                    {commentsStatus === 'succeeded' && comments.length > 0 && (
                        <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
                            {comments.map((comment) => (
                                <li key={comment.id} style={{ marginBottom: '1rem', background: '#23272f', borderRadius: 6, padding: '0.75rem' }}>
                                    <div style={{ color: '#6EACDA', fontWeight: 500 }}>{comment.name}</div>
                                    <div style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>{comment.body}</div>
                                    <div style={{ color: '#8fa1b3', fontSize: '0.85rem' }}>By: {comment.email}</div>
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            ) : (
                <p>Post not found.</p>
            )}
        </div>
    );
}

export default PostDetail;