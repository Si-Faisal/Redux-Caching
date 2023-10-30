import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { fetchPosts } from '../../Services/dataaction/dataAction';
import { fetchPosts } from '../../Services/CatchSlice/cacheSlice';
// import { fetchPosts } from './postSlice';

export const PostComponent = () => {
  const posts = useSelector((state) => state.posts.data);
  const loading = useSelector((state) => state.posts.loading);
  const error = useSelector((state) => state.posts.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>

  );
}
