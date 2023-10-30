import axios from 'axios';

export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      dispatch(setPosts(response.data));
    } catch (error) {
      dispatch(errorFetchingPosts(error));
    }
  };
};

export const setPosts = (posts) => {
  return {
    type: 'SET_POSTS',
    payload: posts,
  };
};

export const errorFetchingPosts = (error) => {
  return {
    type: 'ERROR_FETCHING_POSTS',
    payload: error,
  };
};
