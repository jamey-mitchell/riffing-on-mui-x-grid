import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid } from '@mui/material';
import type {} from '@mui/x-data-grid/themeAugmentation';
import MultiFacetedGrid from './components/multi-faceted-grid';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container className="base-layout-grid">
        <MultiFacetedGrid />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
