import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const localPosts = [
    { id: 1, title: 'Sample Post 1', body: 'This is a sample post content for local testing.' },
    { id: 2, title: 'Sample Post 2', body: 'Another sample post for demonstration.' },
];

function PostDetail() {
    const { id } = useParams();
    const posts = useSelector((state) => state.data.posts);

    const post = localPosts.find(post => post.id === parseInt(id)) ||
                 posts?.find(post => post.id === parseInt(id));

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
            ) : (
                <p>Post not found.</p>
            )}
        </div>
    );
}

export default PostDetail;