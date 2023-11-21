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
  Button
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import {
  Search,
  Notifications,
  AccountCircle,
  Person,
  TypeSpecimenOutlined,
} from "@mui/icons-material";
import NotiCard from "../components/NotiCard";

const Notification = () => {
  return (
    <Fragment>
      <Paper elevation={3} sx={{ padding: "20px", borderRadius: "30px" }}>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={6} md={6} lg={6}>
            <Typography variant="h6" color="secondary">
              My Previous Employer{" "}
              <Person
                style={{
                  width: "30px",
                  height: "30px",
                  verticalAlign: "middle",
                }}
              />
            </Typography>
          </Grid>
          <Grid item xs={6} md={6} lg={6}></Grid>
        </Grid>

        <Typography color="secondary" sx={{ mb: 1, mt: 4 }}>
          13 Month pay and other benefits
        </Typography>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          size="small"
          fullWidth
          sx={{ mb: 3 }}
        />

        <Typography color="secondary" sx={{ mb: 1 }}>
          De Minimis Benefit
        </Typography>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          size="small"
          fullWidth
          sx={{ mb: 3 }}
        />

        <Typography color="secondary" sx={{ mb: 1 }}>
          SSS. GSIS, PHIC & Pag-ibig Cont... & Union Dues
        </Typography>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          size="small"
          fullWidth
          sx={{ mb: 3 }}
        />

        <Typography color="secondary" sx={{ mb: 1 }}>
          Total Taxable Compensation Income
        </Typography>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          size="small"
          fullWidth
          sx={{ mb: 3 }}
        />

        <Button
          variant="contained"
          sx={{ mb: 1 }}
        >
          Save
        </Button>
      </Paper>
    </Fragment>
  );
};

export default Notification;
