import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import React, { useMemo } from 'react';
import { themeSettings } from './Theme';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignUpPage from './pages/SignUp';
import SignInPage from './pages/SignInPage';

function App() {
  const theme = useMemo(() => createTheme(themeSettings()), []);

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Navigate to="/signin" replace />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;