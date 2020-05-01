import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import Post from './Post';
import Loader from './Loader';


const FetchedPosts = () => {
  const dispatch = useDispatch();
  const fetchedPosts = useSelector((state) => state.posts.fetchedPosts);
  const loading = useSelector((state) => state.app.loading);

  if (loading) {
      return <Loader />;
  }

  if (!fetchedPosts.length) {
    return <button
        className="btn btn-primary"
        onClick={() => dispatch(fetchPosts())}
      >Load</button>
  }
  return (fetchedPosts.map((post) => <Post post={post} key={post.id}/>));
};

export default FetchedPosts;
