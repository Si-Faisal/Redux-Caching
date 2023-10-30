import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../CatchSlice/cacheSlice'

const PostStore = configureStore({
  reducer: {
    posts: postReducer,
  },
});

export default PostStore;