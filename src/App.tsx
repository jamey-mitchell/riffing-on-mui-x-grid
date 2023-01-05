import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { FormControl, FormControlLabel, Grid, Radio, RadioGroup } from '@mui/material';
import type {} from '@mui/x-data-grid/themeAugmentation';
import { DataGrid, GridColDef, GridColumnVisibilityModel, GridRowsProp } from '@mui/x-data-grid';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const rows: GridRowsProp = [
  { 
    id: 1, 
    turnPoint: '1', 
    fix: 'FACT/A', 
    type: 'STTO', 
    description: 'CAPE TOWN INTL',
    latitude: 'S 33 57.89',
    longitude: 'E 018 36.10',
    elevation: '151',
    mv: '25.4W',
    altitude: '453'
   },
   { 
    id: 2, 
    turnPoint: '5', 
    latitude: 'S 32 12.92',
    longitude: 'E 016 18.36',
    mv: '22.8W',
    altitude: '20000'
   },
  { 
    id: 3, 
    turnPoint: '2', 
    type: 'ARIP',
    latitude: 'S 33 25.94',
    longitude: 'E 018 12.00',
    mv: '24.5W',
    altitude: '20000'
   },
  { 
    id: 4, 
    turnPoint: '3', 
    type: 'ARCP',
    latitude: 'S 32 48.21',
    longitude: 'E 017 40.62',
    mv: '23.8W',
    altitude: '20000'
   },
  { 
    id: 5, 
    turnPoint: '4', 
    type: 'AREX',
    latitude: 'S 32 04.00',
    longitude: 'E 017 07.10',
    mv: '22.9W',
    altitude: '20000'
   },

  { 
    id: 6, 
    turnPoint: '6', 
    latitude: 'S 34 05.48',
    longitude: 'E 018 40.76',
    mv: '25.3W',
    altitude: '20000'
   },
  { 
    id: 7, 
    turnPoint: '7',
    fix: 'FACT/A', 
    description: 'CAPE TOWN INTL',
    type: 'Landing', 
    latitude: 'S 34 05.48',
    longitude: 'E 018 40.76',
    mv: '25.3W',
    altitude: '20000'
   },
];

const detailsColumnVisibilityModel: GridColumnVisibilityModel = {
  turnDirection: false,
  overfly: false,
  flightPath: false,
  time: false,
  cruiseFlightLevel: false,
  vertRevAltitude: false,
  maxSpeed: false,
  atSpeed: false,
  slats: false,
  lowLevel: false,
  formation: false,
  cat1: false,
  iaf: false,
  tech: false,
}

const latVertColumnVisibilityModel: GridColumnVisibilityModel = {
  elevation: false,
  mv: false,
  altitude: false,
  wind: false,
  slats: false,
  lowLevel: false,
  formation: false,
  cat1: false,
  iaf: false,
  tech: false,
}

const legColumnVisibilityModel: GridColumnVisibilityModel = {
  elevation: false,
  mv: false,
  altitude: false,
  wind: false,
  turnDirection: false,
  overfly: false,
  flightPath: false,
  time: false,
  cruiseFlightLevel: false,
  vertRevAltitude: false,
  maxSpeed: false,
  atSpeed: false,
}

const columns: GridColDef[] = [
  { field: 'turnPoint', headerName: 'Turn Pt', width: 75 },
  { field: 'fix', headerName: 'Fix/Pt', width: 100 },
  { field: 'type', headerName: 'Type', width: 100 },
  { field: 'description', headerName: 'Desc', width: 100 },
  { field: 'latitude', headerName: 'Lat', width: 100 },
  { field: 'longitude', headerName: 'Long', width: 100 },
  { field: 'elevation', headerName: 'Elev(ft)', width: 100 },
  { field: 'mv', headerName: 'MV', width: 100 },
  { field: 'altitude', headerName: 'Alt(ft)', width: 100 },
  { field: 'wind', headerName: 'Wind', width: 100 },
  { field: 'turnDirection', headerName: 'Turn Direction', width: 100 },
  { field: 'overfly', headerName: 'Overfly', width: 100 },
  { field: 'flightPath', headerName: 'Flight Path', width: 100 },
  { field: 'time', headerName: 'Time', width: 100 },
  { field: 'cruiseFlightLevel', headerName: 'Cruise FL', width: 100 },
  { field: 'vertRevAltitude', headerName: 'Altitude', width: 100 },
  { field: 'maxSpeed', headerName: 'Max Speed', width: 100 },
  { field: 'atSpeed', headerName: 'At Speed', width: 100 },
  { field: 'slats', headerName: 'Slats', width: 100 },
  { field: 'lowLevel', headerName: 'Low Level', width: 100 },
  { field: 'formation', headerName: 'Formation', width: 100 },
  { field: 'cat1', headerName: 'CAT 1', width: 100 },
  { field: 'iaf', headerName: 'IAF', width: 100 },
  { field: 'tech', headerName: 'TECH', width: 100 },
  { field: 'warnings', headerName: 'Warnings', width: 100 },
];

function App() {  
  const [gridDisplayMode, setGridDisplayMode] = React.useState('details');
  const [gridColumnVisibilityModel, setGridColumnVisibilityModel] = React.useState(detailsColumnVisibilityModel);

  const handleGridDisplayModeChange = (_event: React.ChangeEvent<HTMLInputElement>, value: string) => {
    setGridDisplayMode(value);
    switch(value) {
      case 'details':
        setGridColumnVisibilityModel(detailsColumnVisibilityModel);
        break;
      case 'latVert':
        setGridColumnVisibilityModel(latVertColumnVisibilityModel);
        break;
      case 'leg':
        setGridColumnVisibilityModel(legColumnVisibilityModel);
        break;
    }
  };
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid 
        container 
        direction={'column'} 
        className='base-layout-grid'>
        <FormControl>
          <RadioGroup 
            row 
            value={gridDisplayMode}
            onChange={handleGridDisplayModeChange}>
            <FormControlLabel value="details" control={<Radio />} label="Details" />
            <FormControlLabel value="latVert" control={<Radio />} label="Lat/Vert" />
            <FormControlLabel value="leg" control={<Radio />} label="Leg" />
          </RadioGroup>
        </FormControl>
        <DataGrid 
          rows={rows} 
          columns={columns}
          columnVisibilityModel={gridColumnVisibilityModel} />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
