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
import { Paid, Search } from "@mui/icons-material";
import BasicTable from "../components/BasicTable";
import DatePicker from "../components/DatePicker";

const Payday = ({ height = "70vh" }) => {
  return (
    <Fragment>
      <Paper elevation={3} sx={{ padding: "20px", borderRadius: "30px" }}>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={6} md={6} lg={6}>
            <Typography variant="h6" color="secondary">
              Payday Schedule{" "}
              <Paid
                style={{
                  width: "30px",
                  height: "30px",
                  verticalAlign: "middle",
                }}
              />
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6} md={6} lg={6}><DatePicker/></Grid>
              <Grid item xs={6} md={6} lg={6}><DatePicker/></Grid>
            </Grid>
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

        <BasicTable />
      </Paper>
    </Fragment>
  );
};
export default Payday;
