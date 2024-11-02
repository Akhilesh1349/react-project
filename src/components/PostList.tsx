import React from 'react';
import { Grid } from '@mui/material';
import PostCard from './PostCard';
import { Post } from '../App';

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => (
  <Grid container spacing={2} marginTop={2}>
    {posts.map((post) => (
      <Grid item xs={12} sm={6} md={4} key={post.id}>
        <PostCard post={post} />
      </Grid>
    ))}
  </Grid>
);

export default PostList;
