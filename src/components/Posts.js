import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';

const Posts = ({ posts }) => {
  return !posts.length
    ? <p className="text-center">No posts yet</p>
    : posts.map((post) => <Post post={post} key={post.id}/>);
};

const mapStateToProps = (state) => state.posts;

export default connect(mapStateToProps)(Posts);
