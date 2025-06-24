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
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  const data = await response.json();
  return data;
});

const initialState = {
  value: JSON.parse(localStorage.getItem('apiData')) || null,
  status: 'idle',
  posts: [],
  postsStatus: 'idle',
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
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
      });
  },
});

export default dataSlice.reducer;
