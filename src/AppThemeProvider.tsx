import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

const AppThemeProvider = ({ children }) => {
  const [theme] = useState(createTheme({
    palette: {
      primary: {
        main: '#556cd6'
      }
    }
  }));
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
