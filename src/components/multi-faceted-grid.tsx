import * as React from 'react';
import {
  DataGrid,
  GridColDef,
  GridColTypeDef,
  GridColumnHeaderParams,
  GridRenderCellParams,
  GridRowsProp,
} from '@mui/x-data-grid';
import {
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import { Point } from '../interfaces/point';
import { mockPoints } from '../mock-data';
import styled from '@emotion/styled';

export default function MultiFacetedGrid() {
  const [rows, setRows] = React.useState<GridRowsProp>(mockPoints);

  const handleChange = (
    event: SelectChangeEvent<string>,
    child: React.ReactNode
  ) => {
    let x = 0;
  };

  const columns: GridColDef[] = [
    {
      field: 'turnPointAndType',
      renderHeader: (params: GridColumnHeaderParams) =>
        stackedGridCell('Turn Pt', 'Type'),
      renderCell: (params: GridRenderCellParams<Point>) =>
        stackedGridCell(params.row.pointNumber, params.row.turnType),
      width: 75,
    },
    {
      field: 'fixIdAndDescription',
      renderHeader: (params: GridColumnHeaderParams) =>
        stackedGridCell('FixID', 'Description'),
      renderCell: (params: GridRenderCellParams<Point>) =>
        stackedGridCell(params.row.fixId, params.row.fixDescription),
      width: 100,
    },
    {
      field: 'latAndLong',
      renderHeader: (params: GridColumnHeaderParams) =>
        stackedGridCell('Latitude', 'Longitude'),
      renderCell: (params: GridRenderCellParams<Point>) =>
        stackedGridCell(params.row.latitude, params.row.longitude),
      width: 105,
    },
    {
      field: 'turnAndOverfly',
      width: 140,
      align: 'center',
      renderHeader: (params: GridColumnHeaderParams) =>
        stackedGridCell('Turn', 'Overfly'),
      renderCell: (params: GridRenderCellParams<Point>) => (
        <Grid
          container
          display="flex"
          direction="column"
          justifyContent="space-around"
          spacing={0.1}
          sx={{
            width: '100%',
            height: '100%',
            paddingX: '5',
          }}
        >
          <Select value={params.row.turn}>
            <MenuItem value=""></MenuItem>
            <MenuItem value="left">Left</MenuItem>
            <MenuItem value="right">Right</MenuItem>
          </Select>
          <Select value={params.row.overfly}>
            <MenuItem value=""></MenuItem>
            <MenuItem value="direct">Direct</MenuItem>
            <MenuItem value="intercept">Intercept</MenuItem>
          </Select>
        </Grid>
      ),
    },
    {
      field: 'cruiseFlightLevel',
      width: 140,
      align: 'center',
      headerName: 'Cruise FL',
      renderCell: (params: GridRenderCellParams<Point>) => (
        <TextField id="standard-search" type="search" variant="standard" />
      ),
    },
  ];

  function stackedGridCell(top: string, bottom: string): JSX.Element {
    return (
      <Grid
        container
        display="flex"
        direction="column"
        justifyContent="space-around"
        sx={{
          width: '100%',
          height: '100%',
          paddingX: '5',
        }}
      >
        <Typography>{top}</Typography>
        <Typography>{bottom}</Typography>
      </Grid>
    );
  }

  return (
    <Grid className="multi-faceted-grid">
      <Grid
        container
        alignItems={'center'}
        justifyContent={'space-between'}
        sx={{ padding: 2 }}
      >
        <Typography variant="h5" display={'inline'}>
          Some Route Name/Identifier
        </Typography>
        {/* <ToggleButtonGroup
          color="primary"
          value={gridMode}
          exclusive
          onChange={handleChange}
          aria-label="grid-mode-button-group"
        >
          <ToggleButton value="details">Details</ToggleButton>
          <ToggleButton value="point">Point Settings</ToggleButton>
          <ToggleButton value="leg">Leg Settings</ToggleButton>
        </ToggleButtonGroup> */}
      </Grid>
      <DataGrid rowHeight={130} rows={rows} columns={columns} />;
    </Grid>
  );
}
