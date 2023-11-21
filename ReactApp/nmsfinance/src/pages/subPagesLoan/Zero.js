import { React, Fragment } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Paper,
  Grid,
  Box,
  TextField,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  Button,
  Divider,
  Card,
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


const Zero = () => {
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
    {
      id: 4,
      col1: "₱ 533,427.44",
      col2: "₱ 477,424.44",
      col3: "₱538,42f.44",
      col4: "₱ 637,426.44",
      col5: "₱ 9,425.44",
    },
    {
      id: 5,
      col1: "₱ 533,427.44",
      col2: "₱ 477,424.44",
      col3: "₱538,42f.44",
      col4: "₱ 637,426.44",
      col5: "₱ 9,425.44",
    },
    {
      id: 6,
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
      <Paper elevation={3} sx={{ padding: "20px", height: "89vh" ,borderRadius: "30px"}}>
        
          <Typography color="secondary" variant="h6" >Zero-interest Loan{" "}
        <Paid
          style={{ width: "30px", height: "30px", verticalAlign: "middle" }}
        /></Typography>
      

        <Grid container spacing={2}>
          <Grid item xs={6} md={6} lg={6}>
            <Box>
              <Typography sx={{ color: "#ff4545" , mb: 1}}>
                Apply For a Zero-Interest Loans
              </Typography>
              <TextField
                id="outlined-uncontrolled"
                label="Max Loan"
                defaultValue="₱"
                size="small"
                fullWidth
                margin="normal"
              />

              <TextField
                id="outlined-uncontrolled"
                label="Loan Amount"
                defaultValue="₱"
                size="small"
                fullWidth
                margin="normal"
              />

              <FormControl fullWidth margin="normal" size="small">
                <InputLabel id="demo-simple-select-label">Month(s)</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                >
                  <MenuItem value={40}>1 Month</MenuItem>
                  <MenuItem value={10}>2 Months</MenuItem>
                  <MenuItem value={20}>3 Months</MenuItem>
                  <MenuItem value={30}>4 Months</MenuItem>
                </Select>
              </FormControl>

              <TextField
                id="outlined-uncontrolled"
                label="Reason"
                size="small"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                variant="outlined"
                style={{ height: "100px" }}
              />
              <Button
                variant="contained"
                style={{ marginTop: "20px", marginRight: "10px" }}
              >
                Create Loan
              </Button>

              <Button variant="outlined" style={{ marginTop: "20px" }}>
                Reset form
              </Button>
            </Box>
          </Grid>
          {/* <Divider orientation="vertical" flexItem /> */}
          <Grid item xs={6} md={6} lg={6}>
            <Box>
              <Card sx={{ p: 3 }}>
              <Typography color="primary" sx={{marginBottom: "10px" }} >Number of Amortization</Typography>
                <Typography color="secondary"  x={{marginBottom: "30px" }} >0</Typography>
                <Typography color="primary" sx={{marginBottom: "10px"}} >Total Interest</Typography>
                <Typography color="secondary" sx={{marginBottom: "30px"}} >0</Typography>
                <Typography color="primary" sx={{marginBottom: "10px"}} >Total Amount of Loan + Interest</Typography>
                <Typography color="secondary" sx={{marginBottom: "30px"}} >0</Typography>
                <Typography color="primary" sx={{marginBottom: "10px"}} >Amount to be Deducted per cut off</Typography>
                <Typography color="secondary" sx={{marginBottom: "10px"}} >0</Typography>
              
              </Card>
            </Box>
          </Grid>
        </Grid>

       
          <Typography color="secondary" variant="h6" sx={{ mt: 2, mb: 2 }}>
            Applied Zero-Interest Loans
          </Typography>
      
        <DataGrid rows={rows} columns={columns} sx={{ height: "34vh" }} />
      </Paper>
    </Fragment>
  );
};

export default Zero;
