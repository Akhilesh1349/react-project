import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Post } from '../App';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => (
  <Card variant="outlined">
    <CardContent>
      <Typography variant="h6" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="body2">{post.body}</Typography>
    </CardContent>
  </Card>
);

export default PostCard;
