import { React, Fragment } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
  Box,
  Card,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Search } from "@mui/icons-material";

const Payroll = () => {
  return (
    <Fragment>
      {/* App Bar */}

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="success">
            Employees' Payroll Activity Summary
          </Typography>
          <TextField
            sx={{ marginLeft: "auto" }}
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
            label="Search User"
            size="small"
          />
        </Toolbar>
      </AppBar>

      <Paper elevation={3} style={{ padding: "20px" }}>
        {/* Employee Categories */}
        <Grid container spacing={3} sx={{ pt: 3 }}>
          {/* Full Time Non-Messaging Staff */}
          <Grid item xs={6}>
            <Typography variant="h6" gutterBottom color="primary">
              Full Time Non-Messaging Staff
            </Typography>
            <Divider />
            <List>
              {/* Employee 1 */}
              <Card>
                <ListItem>
                  <ListItemText
                    primary="Employee Name"
                    secondary="Department: HR"
                  />
                  <ListItemSecondaryAction>
                    <Typography variant="subtitle1" sx={{ color: "#28B463" }}>
                      Earnings: $3000
                    </Typography>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Government Mandated Benefits (SSS)"
                    secondary="(Cut-off Date: 2023-08-15)"
                  />
                  <Typography
                    variant="subtitle1"
                    style={{ marginLeft: "1rem", color: "#D6B4B5" }}
                  >
                    Contribution: $40
                  </Typography>
                </ListItem>
              </Card>
              {/* Employee 2 */}
              <Divider />
              <ListItem>
                <ListItemText
                  primary="Employee Name"
                  secondary="Department: HR"
                />
                <ListItemSecondaryAction>
                  <Typography variant="subtitle1" sx={{ color: "#28B463" }}>
                    Earnings: $2800
                  </Typography>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Government Mandated Benefits (PhilHealth)"
                  secondary="(Cut-off Date: 2023-08-15)"
                />
                <Typography
                  variant="subtitle1"
                  style={{ marginLeft: "1rem", color: "#D6B4B5" }}
                >
                  Contribution: $200
                </Typography>
              </ListItem>
              {/* Employee 3 */}
              <Divider />
              <Card>
                <ListItem>
                  <ListItemText
                    primary="Employee Name"
                    secondary="Department: HR"
                  />
                  <ListItemSecondaryAction>
                    <Typography variant="subtitle1" sx={{ color: "#28B463" }}>
                      Earnings: $3200
                    </Typography>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Government Mandated Benefits (Pag-IBIG)"
                    secondary="(Cut-off Date: 2023-08-15)"
                  />
                  <Typography
                    variant="subtitle1"
                    style={{ marginLeft: "1rem", color: "#D6B4B5" }}
                  >
                    Contribution: $40
                  </Typography>
                </ListItem>
              </Card>
              <Divider />
              <ListItem>
                <ListItemText
                  primary="Employee Name"
                  secondary="Department: HR"
                />
                <ListItemSecondaryAction>
                  <Typography variant="subtitle1" sx={{ color: "#28B463" }}>
                    Earnings: $3200
                  </Typography>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Government Mandated Benefits (Pag-IBIG)"
                  secondary="(Cut-off Date: 2023-08-15)"
                />
                <Typography
                  variant="subtitle1"
                  style={{ marginLeft: "1rem", color: "#D6B4B5" }}
                >
                  Contribution: $40
                </Typography>
              </ListItem>
              <Divider />
              <Card>
                <ListItem>
                  <ListItemText
                    primary="Employee Name"
                    secondary="Department: HR"
                  />
                  <ListItemSecondaryAction>
                    <Typography variant="subtitle1" sx={{ color: "#28B463" }}>
                      Earnings: $3200
                    </Typography>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Government Mandated Benefits (Pag-IBIG)"
                    secondary="(Cut-off Date: 2023-08-15)"
                  />
                  <Typography
                    variant="subtitle1"
                    style={{ marginLeft: "1rem", color: "#D6B4B5" }}
                  >
                    Contribution: $40
                  </Typography>
                </ListItem>
              </Card>
              {/* Add more Full Time Non-Messaging Staff as needed */}
            </List>
            <Divider />
          </Grid>

          {/* Messaging Staff */}
          <Grid item xs={6}>
            <Typography variant="h6" gutterBottom color="primary">
              Messaging Staff
            </Typography>
            <Divider />
            <List>
              {/* Employee 1 */}
              <Card>
                <ListItem>
                  <ListItemText
                    primary="Employee Name"
                    secondary="Department: Marketing"
                  />
                  <ListItemSecondaryAction>
                    <Typography variant="subtitle1" sx={{ color: "#28B463" }}>
                      Earnings: $2500
                    </Typography>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Government Mandated Benefits (SSS)"
                    secondary="(Cut-off Date: 2023-08-15)"
                  />
                  <Typography
                    variant="subtitle1"
                    style={{ marginLeft: "1rem", color: "#D6B4B5" }}
                  >
                    Contribution: $40
                  </Typography>
                </ListItem>
              </Card>
              {/* Employee 2 */}
              <Divider />
              <ListItem>
                <ListItemText
                  primary="Employee Name"
                  secondary="Department: Marketing"
                />
                <ListItemSecondaryAction>
                  <Typography variant="subtitle1" sx={{ color: "#28B463" }}>
                    Earnings: $2700
                  </Typography>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Government Mandated Benefits (PhilHealth)"
                  secondary=" (Cut-off Date: 2023-08-15)"
                />
                <Typography
                  variant="subtitle1"
                  style={{ marginLeft: "1rem", color: "#D6B4B5" }}
                >
                  Contribution: $40
                </Typography>
              </ListItem>
              {/* Employee 3 */}
              <Divider />
              <Card>
                <ListItem>
                  <ListItemText
                    primary="Employee Name"
                    secondary="Department: Marketing"
                  />
                  <ListItemSecondaryAction>
                    <Typography variant="subtitle1" sx={{ color: "#28B463" }}>
                      Earnings: $2600
                    </Typography>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Government Mandated Benefits (Pag-IBIG)"
                    secondary=" (Cut-off Date: 2023-08-15)"
                  />
                  <Typography
                    variant="subtitle1"
                    style={{ marginLeft: "1rem", color: "#D6B4B5" }}
                  >
                    Contribution: $40
                  </Typography>
                </ListItem>
              </Card>
              {/* Add more Messaging Staff as needed */}

              <Divider />
              <ListItem>
                <ListItemText
                  primary="Employee Name"
                  secondary="Department: Marketing"
                />
                <ListItemSecondaryAction>
                  <Typography variant="subtitle1" sx={{ color: "#28B463" }}>
                    Earnings: $2700
                  </Typography>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Government Mandated Benefits (PhilHealth)"
                  secondary=" (Cut-off Date: 2023-08-15)"
                />
                <Typography
                  variant="subtitle1"
                  style={{ marginLeft: "1rem", color: "#D6B4B5" }}
                >
                  Contribution: $40
                </Typography>
              </ListItem>
              <Divider />
              <Card>
                <ListItem>
                  <ListItemText
                    primary="Employee Name 6"
                    secondary="Department: Marketing"
                  />
                  <ListItemSecondaryAction>
                    <Typography variant="subtitle1" sx={{ color: "#28B463" }}>
                      Earnings: $2700
                    </Typography>
                  </ListItemSecondaryAction>
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary="Government Mandated Benefits (PhilHealth)"
                    secondary=" (Cut-off Date: 2023-08-15)"
                  />
                  <Typography
                    variant="subtitle1"
                    style={{ marginLeft: "1rem", color: "#D6B4B5" }}
                  >
                    Contribution: $40
                  </Typography>
                </ListItem>
              </Card>
              <Divider />
              <ListItem>
                <ListItemText
                  primary="Employee Name"
                  secondary="Department: Marketing"
                />
                <ListItemSecondaryAction>
                  <Typography variant="subtitle1" sx={{ color: "#28B463" }}>
                    Earnings: $2700
                  </Typography>
                </ListItemSecondaryAction>
              </ListItem>

              <ListItem>
                <ListItemText
                  primary="Government Mandated Benefits (PhilHealth)"
                  secondary=" (Cut-off Date: 2023-08-15)"
                />
                <Typography
                  variant="subtitle1"
                  style={{ marginLeft: "1rem", color: "#D6B4B5" }}
                >
                  Contribution: $40
                </Typography>
              </ListItem>
            </List>
            <Divider />
          </Grid>
        </Grid>
      </Paper>
    </Fragment>
  );
};

export default Payroll;
