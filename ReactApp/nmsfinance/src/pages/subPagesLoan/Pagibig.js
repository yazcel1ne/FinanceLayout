import { React, Fragment } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Paper,
  Grid,
  Box,
  TextField,
  InputAdornment,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import {
  Paid,
  AccountCircle,
  StickyNote2,
  CircleNotifications,
  ChangeCircleRounded,
  ExpandLess,
  ExpandMore,
  ModeNight,
  AccountBox,
  Search,
} from "@mui/icons-material";

const Pagibig = () => {
  const rows: GridRowsProp = [
    {
      id: 1,
      col1: "₱ 33,427.44",
      col2: "₱ 43,424.44",
      col3: "₱53,42f.44",
      col4: "₱ 63,426.44",
      col5: "₱ 33,425.44",
    },
    {
      id: 2,
      col1: "₱ 343,427.44",
      col2: "₱ 5,424.44",
      col3: "₱99,42f.44",
      col4: "₱ 7,426.44",
      col5: "₱ 83,425.44",
    },
    {
      id: 3,
      col1: "₱ 533,427.44",
      col2: "₱ 477,424.44",
      col3: "₱538,42f.44",
      col4: "₱ 637,426.44",
      col5: "₱ 9,425.44",
    },
  ];

  const columns: GridColDef[] = [
    {
      field: "col1",
      headerClassName: "headercolor",
      headerName: "Loan Amount",
      flex: 1,
      align: "right",
      headerAlign: "right",
    },
    {
      field: "col2",
      headerClassName: "headercolor",
      headerName: "Balance",
      flex: 1,
      align: "right",
      headerAlign: "right",
    },
    {
      field: "col3",
      headerClassName: "headercolor",
      headerName: "Amount Deducted per cut off",
      flex: 1,
      align: "right",
      headerAlign: "right",
    },
    {
      field: "col4",
      headerClassName: "headercolor",
      headerName: "Amount Deducted per month",
      flex: 1,
      align: "right",
      headerAlign: "right",
    },
    {
      field: "col5",
      headerClassName: "headercolor",
      headerName: "Paid",
      flex: 1,
      align: "right",
      headerAlign: "right",
    },
  ];

  return (
    <Fragment>
      <Paper elevation={3} sx={{ padding: "20px", borderRadius: "30px" }}>
      <Grid container spacing={2} sx={{  mb: 2}}>
        <Grid item xs={6} md={6} lg={6}>
          <Typography variant="h6" color="secondary">
            Pag-ibig Loans{" "}
        <AccountBox
          style={{ width: "30px", height: "30px", verticalAlign: "middle" }}
        />
          </Typography>
        </Grid>
        <Grid item xs={6} md={6} lg={6}>
        <Box display="flex" justifyContent="flex-end">
            <Box style={{ width: "50%" }}>
              <TextField
                id="Search"
                type="Search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search color="primary" />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                label="Search"
                size="small"
                fullWidth
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
      
        <DataGrid rows={rows} columns={columns} />
      </Paper>
    </Fragment>
  );
};

export default Pagibig;
