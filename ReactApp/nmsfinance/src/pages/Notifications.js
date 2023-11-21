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
import { Search, Notifications } from "@mui/icons-material";
import NotiCard from "../components/NotiCard";

const Notification = () => {
  return (
    <Fragment>
      <Paper elevation={3} sx={{ padding: "20px", borderRadius: "30px" }}>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={6} md={6} lg={6}>
            <Typography variant="h6" color="secondary">
              Notifications{" "}
              <Notifications
                style={{
                  width: "30px",
                  height: "30px",
                  verticalAlign: "middle",
                }}
              />
            </Typography>
          </Grid>
          <Grid item xs={6} md={6} lg={6}>
            
          </Grid>
        </Grid>
        <Box sx={{ mb: 2 }}>
          <NotiCard />
        </Box>
        <Box sx={{ mb: 2 }}>
          <NotiCard />
        </Box>

        <Box sx={{ mb: 2 }}>
          <NotiCard />
        </Box>

        <Box sx={{ mb: 2 }}>
          <NotiCard />
        </Box>

        <Box sx={{ mb: 2 }}>
          <NotiCard />
        </Box>
      </Paper>
    </Fragment>
  );
};

export default Notification;
