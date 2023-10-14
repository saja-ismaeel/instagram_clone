import { createTheme } from '@mui/material/styles';

function createCustomTheme(mode) {
  return createTheme({
    palette: {
      type: mode,
      primary: {
        main: '#1976D2', 
      },
      secondary: {
        main: '#EF6C00', 
      },
      background: {
        default: mode === 'dark' ? '#121212' : '#FFFFFF',
        paper: mode === 'dark' ? '#1E1E1E' : '#F5F5F5', 
      },
    },
   
  });
}

export default createCustomTheme;
