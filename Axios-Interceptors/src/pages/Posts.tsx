import { useEffect, useState } from 'react';
import api from '../api/axiosInstance';
import type { Post,PostsProps } from '../types/index';

import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Grid,
  Typography
} from '@mui/material';

const Posts: React.FC<PostsProps> = ({ onLogout }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.get<Post[]>('/posts')
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Container sx={{ mt: 6 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4" fontWeight="700">
          Posts
        </Typography>
        <Button
          variant="outlined"
          color="error"
          onClick={() => {
            localStorage.removeItem('Token');
            onLogout();
          }}
        >
          Logout
        </Button>
      </Box>

      {loading ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={3}>
          {posts.map((post) => (
            <Grid size={6} key={post.id}>
              <Card
                elevation={3}
                sx={{
                  height: '100%',
                  transition: '0.3s',
                  '&:hover': { transform: 'scale(1.02)', boxShadow: 6 }
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.body}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Posts;
