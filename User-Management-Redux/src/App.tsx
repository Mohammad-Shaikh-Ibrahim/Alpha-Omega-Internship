import { Routes, Route } from 'react-router-dom';
import UserList from './pages/UserList';
import AddUser from './pages/AddUser';
import { Box, Typography, Paper, Divider, useTheme, useMediaQuery } from '@mui/material';

const App: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #e1f5fe, #ede7f6)',
        py: 5,
        px: 2,
      }}
    >
      <Box sx={{ maxWidth: 800, mx: 'auto' }}>
        <Typography
          variant={isMobile ? 'h5' : 'h4'}
          fontWeight="bold"
          color="primary"
          textAlign="center"
          gutterBottom
        >
          User Management With Redux
        </Typography>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Paper
                  elevation={3}
                  sx={{ p: 3, borderRadius: 3, mb: 4, backgroundColor: '#ffffffdd' }}
                >
                  <AddUser />
                </Paper>

                <Divider sx={{ mb: 4 }} />

                <Paper
                  elevation={3}
                  sx={{ p: 3, borderRadius: 3, backgroundColor: '#ffffffdd' }}
                >
                  <UserList />
                </Paper>
              </>
            }
          />
        </Routes>
      </Box>
    </Box>
  );
};

export default App;
