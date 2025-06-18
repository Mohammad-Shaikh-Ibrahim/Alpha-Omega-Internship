import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, clearError } from '../features/user/userSlice';
import { selectUsers, selectLoading, selectError } from '../hooks/userSelectors';
import type { AppDispatch } from '../store/store';
import { useEffect } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  CircularProgress,
  Alert,
  Button,
  Paper,
  Divider,
} from '@mui/material';

const UserList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector(selectUsers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        background: 'linear-gradient(135deg, #c5cae9, #b2dfdb)',
        py: 5,
        px: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: '100%',
          maxWidth: 600,
          p: 4,
          borderRadius: 3,
          backgroundColor: 'rgba(255,255,255,0.95)',
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          fontWeight="bold"
          textAlign="center"
          color="primary"
          gutterBottom
        >
          User List
        </Typography>

        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
            <CircularProgress color="secondary" />
          </Box>
        )}

        {error && (
          <Alert
            severity="error"
            sx={{ mb: 3 }}
            action={
              <Button color="inherit" size="small" onClick={() => dispatch(clearError())}>
                Clear
              </Button>
            }
          >
            {error}
          </Alert>
        )}

        {!loading && users.length === 0 && (
          <Typography variant="body1" color="text.secondary" textAlign="center" mt={2}>
            No users found.
          </Typography>
        )}

        <List>
          {users.map((user, index) => (
            <Box key={user.id}>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography variant="subtitle1" fontWeight="medium">
                      {user.name}
                    </Typography>
                  }
                  secondary={user.email}
                />
              </ListItem>
              {index < users.length - 1 && <Divider />}
            </Box>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default UserList;