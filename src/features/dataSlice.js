import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Example API fetch (replace with your API endpoint)
export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();
  // Store in localStorage
  localStorage.setItem('apiData', JSON.stringify(data));
  return data;
});

const initialState = {
  value: JSON.parse(localStorage.getItem('apiData')) || null,
  status: 'idle',
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
      });
  },
});

export default dataSlice.reducer;
