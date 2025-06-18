import { useState } from 'react';
import type { LoginProps } from '../types/index';
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography
} from '@mui/material';



const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username.trim() !== '') {
      localStorage.setItem('Token',`The User is ${username}`);
      onLogin();
    }
  };

  return (
    <Container maxWidth="lg">
      <Paper
        elevation={6}
        sx={{
          p: 4,
          mt: 10,
          borderRadius: 3,
          backgroundColor: '#f7f9fc'
        }}
      >
        <Typography variant="h5" align="center" gutterBottom fontWeight="bold">
          Welcome Back
        </Typography>

        <Typography variant="body2" align="center" color="text.secondary" mb={3}>
          Please enter your username to continue
        </Typography>

        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
          />

          <Button
            variant="contained"
            color="primary"
            onClick={handleLogin}
            disabled={username.trim() === ''}
            sx={{ textTransform: 'none', fontWeight: 'bold' }}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;