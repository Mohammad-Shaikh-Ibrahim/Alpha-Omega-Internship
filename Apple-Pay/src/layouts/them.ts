import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', 
      dark: '#1C1C1E', 
      light: 'rgba(255, 255, 255, 1)', 
    },
    secondary: {
      main: '#dc004e', 
      dark:'rgba(44, 44, 46, 1)',
      light: 'rgba(235, 235, 235, 1)',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    fontSize: 14,

    caption: {
      fontFamily: '"SF Mono", monospace',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '24px',
      letterSpacing: '0.38px',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;
