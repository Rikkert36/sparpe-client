import React from 'react';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routing/Routes';

import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000', // blue[900],
    },
    secondary: {
      main: '#f44336',
    },
  },
  overrides: {
    MuiCheckbox: {
      colorSecondary: {
        '&$checked': {
          color: '#356ef1',
        },
      },
    },
  },
});
const styles = (theme2: any) => ({
  '@global': {
    body: {
      backgroundImage: "url('./static/background.jpg')",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      height: '100%',
    },
    html: {
      height: '100%',
    },
    '#componentWithId': {
      height: '100%',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Router>
          <Routes />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default withStyles(styles)(App);
