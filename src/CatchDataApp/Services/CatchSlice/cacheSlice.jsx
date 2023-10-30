import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchDataStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
     cacheData: (state, action) => {
      state.data = action.payload;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
} = postSlice.actions;

export const fetchPosts = () => async (dispatch , getState) => {

   const { data } = getState().posts;

  if (data.length > 0) {
    // Data is already in the store, no need to fetch again
    return;
  }


  dispatch(fetchDataStart());

  
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch(fetchDataSuccess(response.data));
  } catch (error) {
    dispatch(fetchDataFailure(error));
  }
};

export default postSlice.reducer;