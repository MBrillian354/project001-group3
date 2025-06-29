import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Example API fetch (replace with your API endpoint)
export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();
  // Store in localStorage
  localStorage.setItem('apiData', JSON.stringify(data));
  return data;
});

export const fetchPosts = createAsyncThunk('data/fetchPosts', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=2');
  const data = await response.json();
  return data;
});

export const fetchComments = createAsyncThunk('data/fetchComments', async (postId) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  const data = await response.json();
  return { postId, comments: data };
});

const initialState = {
  value: JSON.parse(localStorage.getItem('apiData')) || null,
  status: 'idle',
  posts: [],
  postsStatus: 'idle',
  commentsByPost: {},
  commentsStatus: 'idle',
  localPosts: JSON.parse(localStorage.getItem('localPosts')) || [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.localPosts.push(action.payload);
      localStorage.setItem('localPosts', JSON.stringify(state.localPosts));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.value = action.payload;
      })
      .addCase(fetchData.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(fetchPosts.pending, (state) => {
        state.postsStatus = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.postsStatus = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.postsStatus = 'failed';
      })
      .addCase(fetchComments.pending, (state) => {
        state.commentsStatus = 'loading';
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.commentsStatus = 'succeeded';
        state.commentsByPost[action.payload.postId] = action.payload.comments;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.commentsStatus = 'failed';
      })
  },
});

export default dataSlice.reducer;
export const { addPost } = dataSlice.actions;