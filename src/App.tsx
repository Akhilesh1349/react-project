import React, { useState, useEffect } from 'react';
import { Container, CircularProgress, Typography } from '@mui/material';
import Header from './components/Header';
import PostList from './components/PostList';

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) throw new Error('Failed to fetch posts');
        const data: Post[] = await response.json();
        setPosts(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Container>
      <Header title="Post Viewer" />
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <PostList posts={posts} />
      )}
    </Container>
  );
};

export interface Post {
  id: number;
  title: string;
  body: string;
}

export default App;
