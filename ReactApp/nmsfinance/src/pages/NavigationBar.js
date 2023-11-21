import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  AppBar,
  Toolbar,
  CssBaseline,
  IconButton,
  Menu,
  MenuItem,
  Avatar
} from "@mui/material";
import {
  Paid,
  AccountCircle,
  StickyNote2,
  CircleNotifications,
  Notifications,
  ChangeCircleRounded,
  ExpandLess,
  ExpandMore,
  ModeNight,
  AccountBox,
  Person
} from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../images/nms-logo.png";

const drawerWidth = 260;

const PermanentDrawerLeft = () => {
  const [isOpenMyLoans, setIsOpenMyLoans] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleToggleMyLoans = () => {
    setIsOpenMyLoans(!isOpenMyLoans);
  };

  const handleListItemClick = (itemName) => {
    setActiveItem(itemName === activeItem ? null : itemName);
  };

  const sideList = (
    <List>
   
   <ListItem
  button
  component={Link}
  to="/Payslip"
  selected={activeItem === "Payslip"}
  onClick={() => handleListItemClick("Payslip")}
  sx={{
    backgroundColor: activeItem === "Payslip" ? "#90323D" : "initial",
    color: activeItem === "Payslip" ? "#ffffff" : "inherit",
    boxShadow: activeItem === "Payslip" ? "0 0 10px rgba(161, 198, 234, 0.7)" : "none",
    borderRadius: "20px", // Add border radius
  }}
>
  <ListItemIcon>
    <StickyNote2 color="tertiary" />
  </ListItemIcon>
  <ListItemText primary="My Payslip" />
</ListItem>

      {/* Loans */}
      <ListItem
  button
  onClick={handleToggleMyLoans}
  selected={activeItem === "My Loans"}
  sx={{
    backgroundColor: activeItem === 'My Loans' ? '#90323D' : 'initial',
    color: activeItem === 'My Loans' ? '#ffffff' : 'inherit',
    boxShadow: activeItem === "My Loans" ? "0 0 10px rgba(161, 198, 234, 0.7)" : "none",
    borderRadius: "20px", // Add border radius
  }}
>
  <ListItemIcon>
    <Paid color="tertiary" />
  </ListItemIcon>
  <ListItemText primary="My Loans" />
  {isOpenMyLoans ? <ExpandLess /> : <ExpandMore />}
</ListItem>
{isOpenMyLoans && (
  <List component="div" disablePadding sx={{ paddingLeft: "50px" }}>
    <ListItem
      button
      component={Link}
      to="/Pagibig"
      selected={activeItem === "Pag-ibig Loans"}
      onClick={() => handleListItemClick("Pag-ibig Loans")}
      sx={{
        backgroundColor: activeItem === 'Pag-ibig Loans' ? '#90323D' : 'initial',
        color: activeItem === 'Pag-ibig Loans' ? '#ffffff' : 'inherit',
        boxShadow: activeItem === "Pag-ibig Loans" ? "0 0 10px rgba(161, 198, 234, 0.7)" : "none",
        borderRadius: "20px", // Add border radius
      }}
    >
      <ListItemText primary="Pag-ibig Loans" />
    </ListItem>
    <ListItem
      button
      component={Link}
      to="/SSS"
      selected={activeItem === "SSS Loans"}
      onClick={() => handleListItemClick("SSS Loans")}
      sx={{
        backgroundColor: activeItem === 'SSS Loans' ? '#90323D' : 'initial',
        color: activeItem === 'SSS Loans' ? '#ffffff' : 'inherit',
        boxShadow: activeItem === "SSS Loans" ? "0 0 10px rgba(161, 198, 234, 0.7)" : "none",
        borderRadius: "20px", // Add border radius
        
      }}
    >
      <ListItemText primary="SSS Loans" />
    </ListItem>
    <ListItem
      button
      component={Link}
      to="/Salary"
      selected={activeItem === "Salary Loans"}
      onClick={() => handleListItemClick("Salary Loans")}
      sx={{
        backgroundColor: activeItem === 'Salary Loans' ? '#90323D' : 'initial',
        color: activeItem === 'Salary Loans' ? '#ffffff' : 'inherit',
        boxShadow: activeItem === "Salary Loans" ? "0 0 10px rgba(161, 198, 234, 0.7)" : "none",
        borderRadius: "20px", // Add border radius
      }}
    >
      <ListItemText primary="Salary Loans" />
    </ListItem>
    <ListItem
      button
      component={Link}
      to="/Zero"
      selected={activeItem === "Zero-Interest Loans"}
      onClick={() => handleListItemClick("Zero-Interest Loans")}
      sx={{
        backgroundColor: activeItem === 'Zero-Interest Loans' ? '#90323D' : 'initial',
        color: activeItem === 'Zero-Interest Loans' ? '#ffffff' : 'inherit',
        boxShadow: activeItem === "Zero-Interest Loans" ? "0 0 10px rgba(161, 198, 234, 0.7)" : "none",
        borderRadius: "20px", // Add border radius
      }}
    >
      <ListItemText primary="Zero-Interest Loans" />
    </ListItem>
  </List>
)}
      {/* Employer */}
      <ListItem
  button
  component={Link}
  to="/Employer"
  selected={activeItem === "My Previous Employer"}
  onClick={() => handleListItemClick("My Previous Employer")}
  sx={{
    backgroundColor: activeItem === 'My Previous Employer' ? '#90323D' : 'initial',
    color: activeItem === 'My Previous Employer' ? '#ffffff' : 'inherit',
    boxShadow: activeItem === "My Previous Employer" ? "0 0 10px rgba(161, 198, 234, 0.7)" : "none",
    borderRadius: "20px", // Add border radius
  }}
>
  <ListItemIcon>
    <Person color="tertiary" />
  </ListItemIcon>
  <ListItemText primary="My Previous Employer" />
</ListItem>

<ListItem
  button
  component={Link}
  to="/Notification"
  selected={activeItem === "Notifications"}
  onClick={() => handleListItemClick("Notifications")}
  sx={{
    backgroundColor: activeItem === 'Notifications' ? '#90323D' : 'initial',
    color: activeItem === 'Notifications' ? '#ffffff' : 'inherit',
    boxShadow: activeItem === "Notifications" ? "0 0 10px rgba(161, 198, 234, 0.7)" : "none",
    borderRadius: "20px", // Add border radius
  }}
>
  <ListItemIcon>
    <Notifications color="tertiary" />
  </ListItemIcon>
  <ListItemText primary="Notifications" />
</ListItem>

<ListItem
  button
  component={Link}
  to="/Payday"
  selected={activeItem === "Payday Schedule"}
  onClick={() => handleListItemClick("Payday Schedule")}
  sx={{
    backgroundColor: activeItem === 'Payday Schedule' ? '#90323D' : 'initial',
    color: activeItem === 'Payday Schedule' ? '#ffffff' : 'inherit',
    boxShadow: activeItem === "Payday Schedule" ? "0 0 10px rgba(161, 198, 234, 0.7)" : "none",
    borderRadius: "20px", // Add border radius
  }}
>
  <ListItemIcon>
    <Paid color="tertiary" />
  </ListItemIcon>
  <ListItemText primary="Payday Schedule" />
</ListItem>

    </List>
  );

  const [anchorEl, setAnchorEl] = useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    // Implement your sign out logic here
    // For example: clear user session, redirect to login, etc.
  };

  return (
    <Fragment>
     
        <CssBaseline />
        <AppBar
         position="fixed"
         sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              backgroundImage: `url(${logo})`,
              backgroundSize: "800px 500px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right center",
              opacity: 0.2,
              zIndex: -1, // Place the background image behind other elements
              content: '""', // Required for pseudo-element
            }}
          />
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100%",
              paddingLeft: "16px",
              paddingRight: "16px",
            }}
          >
            <Typography variant="h5" color="primary" >
              NMS Finance
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton>
                <ModeNight color="primary" />
              </IconButton>
              <IconButton>
                <Notifications color="primary" />
              </IconButton>

              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                >
                <MenuItem onClick={handleSignOut} sx={{color: "#000000"}}>Sign Out</MenuItem>
              </Menu>
              <Typography sx={{paddingLeft: "10px"}}>Welcome! Potchi</Typography>
              <IconButton onClick={handleProfileMenuOpen}>
                <ExpandMore color="primary" />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,

            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "#90323D",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar>
            <img
              src={logo}
              alt="NMS Logo"
              style={{ width: "75px", height: "30px" }}
            />
            <Typography variant="h6" sx={{ paddingLeft: "10px" }}>
              Accounts
            </Typography>
          </Toolbar>
          <Box sx={{ paddingTop: "30px" }}>
            <Typography sx={{ paddingLeft: "10px" }}>NMS Finance</Typography>
            {sideList}
          </Box>

          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              overflow: "hidden",
            }}
          >
            <Box style={{ flexGrow: 1 , postion: "static",}}>{/* Content */}</Box>
            <img
              src={logo}
              alt="NMS Logo"
              style={{
                width: "550px",
                height: "250px",
                alignSelf: "center",
                marginBottom: "100px",
                opacity: 0.2,
                postion: "static",
              }}
            />
          </Box>
        </Drawer>
     
    </Fragment>
  );
};

export default PermanentDrawerLeft;
