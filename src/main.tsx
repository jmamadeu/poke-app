import App from './App';
import { GlobalStyle } from './theme/global';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme.theme}>
      <App />
    </ThemeProvider>
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
