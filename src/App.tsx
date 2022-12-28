import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid } from '@mui/material';
import type {} from '@mui/x-data-grid/themeAugmentation';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const rows: GridRowsProp = [
  { id: 1, turnPoint: '1', fix: 'KCHS', type: 'STTO' },
  { id: 2, turnPoint: '2', fix: 'CAKET' },
  { id: 3, turnPoint: '3', fix: 'JEVED' },
];

const columns: GridColDef[] = [
  { field: 'turnPoint', headerName: 'Turn Pt', width: 75 },
  { field: 'fix', headerName: 'Fix/Point', width: 100 },
  { field: 'type', headerName: 'Type', width: 100 },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container className='base-layout-grid'>
        <DataGrid rows={rows} columns={columns} />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
