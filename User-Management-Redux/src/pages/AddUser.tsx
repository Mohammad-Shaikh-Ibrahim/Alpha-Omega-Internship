import { useDispatch } from 'react-redux';
import { addUser } from '../features/user/userSlice';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';
import type { AppDispatch } from '../store/store';

interface UserFormData {
  name: string;
  email: string;
}

const AddUser: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<UserFormData>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<UserFormData> = (data) => {
    dispatch(addUser(data));
    reset();
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #e0f7fa 0%, #e1bee7 100%)',
        py: 4,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          maxWidth: 420,
          width: '100%',
          p: 4,
          borderRadius: 4,
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          fontWeight={700}
          textAlign="center"
          color="primary"
          gutterBottom
        >
          Add New User
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            label="Full Name"
            fullWidth
            variant="outlined"
            margin="normal"
            {...register('name', {
              required: 'Name is required',
              minLength: { value: 2, message: 'Name must be at least 2 characters' },
            })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />

          <TextField
            label="Email Address"
            fullWidth
            variant="outlined"
            margin="normal"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Invalid email address',
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <Button
            type="submit"
            variant="contained"
            color="secondary"
            fullWidth
            sx={{
              mt: 3,
              py: 1.2,
              borderRadius: 2,
              fontWeight: 'bold',
              textTransform: 'none',
            }}
            disabled={!isValid}
          >
            Add User
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default AddUser;