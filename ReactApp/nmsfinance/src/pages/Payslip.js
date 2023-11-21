import { React, Fragment } from "react";
import {
  Typography,
  Grid,
  Box,
  TextField,
  InputAdornment,
  Toolbar,
  Card,
  Paper,
  Button,
} from "@mui/material";
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
  AddCircle,
} from "@mui/icons-material";
import DatePicker from "../components/DatePicker";
import BasicTable from "../components/BasicTable";
import payslip from "../images/payslip.jpg";
import logo from "../images/nms-logo.png";
import BasicCard from "../components/BasicCard";

const Payslip = () => {
  return (
    <Fragment>
      <Paper elevation={3} sx={{ padding: "20px", borderRadius: "30px" }}>
        <Typography
          variant="h6"
          color="secondary"
          style={{ display: "inline-flex", alignItems: "center" }}
        >
          My Payslip{" "}
          <StickyNote2
            style={{ width: "30px", height: "30px", verticalAlign: "middle" }}
          />
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={6} md={6} lg={6}>
            <Box display="flex" justifyContent="flex-start">
              <DatePicker />
            </Box>
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

        <Box>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid container item xs={6} md={6} lg={6} alignItems="center">
              <Typography color="secondary" sx={{ fontWeight: "bold" }}>
                Payslips
              </Typography>
              {/* <Box sx={{ marginLeft: "auto" }}>
                <Button variant="outlined" startIcon={<AddCircle />}>
                  Add Payslip
                </Button>
              </Box> */}
            </Grid>

            <Grid item xs={6} md={6} lg={6}>
              <Typography color="secondary" sx={{ fontWeight: "bold" }}>
                {" "}
                Preview
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={6} md={6} lg={6}>
              <Box sx={{ maxHeight: "65vh", overflowY: "auto" }}>
                <Box sx={{paddingLeft: "20px", paddingRight: "20px"}}>
                <BasicCard />
                <Box sx={{ mb: 2 }} />
                <BasicCard />
                <Box sx={{ mb: 2 }} />
                <BasicCard />
                <Box sx={{ mb: 2 }} />
                <BasicCard />
                <Box sx={{ mb: 2 }} />
                <BasicCard />
                <Box sx={{ mb: 2 }} />
                <BasicCard />
                <Box sx={{ mb: 2 }} />
                <BasicCard />
                <Box sx={{ mb: 2 }} />
                <BasicCard />
                <Box sx={{ mb: 2 }} />
                <BasicCard />
                <Box sx={{ mb: 2 }} />
                <BasicCard />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <Box
                sx={{
                  maxHeight: "65vh",
                  overflowY: "auto",
                  display: "flex",
                  justifyContent: "center", // Center horizontally
                  alignItems: "center", // Center vertically
                }}
              >
                <img
                  src={payslip}
                  alt="NMS Logo"
                  style={{
                    position: "static",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Fragment>
  );
};

export default Payslip;
