import React, { useEffect } from 'react';
import { Grid, ThemeProvider, Card, Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./pages/NavigationBar";
import Home from "./pages/Home";
import { createTheme } from "@mui/material/styles";
import Payroll from "./pages/Payroll";
import Employer from "./pages/Employer";
import Loan from "./pages/Loan";
import Notification from "./pages/Notifications";
import Payday from "./pages/Payday";
import Payslip from "./pages/Payslip";
import Pagibig from "./pages/subPagesLoan/Pagibig";
import SSS from "./pages/subPagesLoan/SSS";
import Salary from "./pages/subPagesLoan/Salary";
import Zero from "./pages/subPagesLoan/Zero";
import logo from "./images/nms-logo.png";

const mytheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#90323D",
    },
    secondary: {
      main: "#1C2833",
    },
    tertiary: {
      main: "#ffffff",
    },
    background: {
     
      default: "#f1f1f1",
    },
    success: {
      main: "#28B463",
    },
    error: {
      main: "#E74C3C",
    },
    info: {
      main: "#3498DB",
    },
    text: {
      primary: "#fff",
      secondary: "#90323D",
      disabled: "#C7C7C7",
    },
  },
  components: {
    MuiDataGrid: {
      defaultProps: {
        disableColumnMenu: true,
      },
      styleOverrides: {
        root: {
          border: 'none',
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
            color: '#1C2833',
          },
          '& .MuiDataGrid-row': {
            borderBottom: 'none',
          },
          '& .MuiTablePagination-root': {
            borderTop: 'none',
            color: '#1C2833',
          },
        },
        columnHeader: {
          '&.headercolor': {
            backgroundColor: '#90323D',
            color: '#ffffff',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent', // Set to transparent to see the background image
          color: '#90323D',
          boxShadow: 'none',
          height: '100px',
          position: 'relative', // To allow absolute positioning within the AppBar
        },
      },
    },
  },
});

const App = () => (
  
  <ThemeProvider theme={mytheme}>
    <BrowserRouter>
      <NavigationBar />
      <Box
        sx={{
          width: {
            xs: "vw",
            md: "83.5vw",
          },
          // margin: {
          //   xs: "0",
          //   md: "6%",
          // },
          height: "0vh",
          marginTop: "0vh",
          marginLeft: "15vw",
        }}
      >
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Payslip" element={<Payslip />} />
          <Route path="/Loan" element={<Loan />} />
          <Route path="/Employer" element={<Employer />} />
          <Route path="/Notification" element={<Notification />} />
          <Route path="/Payday" element={<Payday />} />
          <Route path="/Pagibig" element={<Pagibig />} />
          <Route path="/SSS" element={<SSS />} />
          <Route path="/Salary" element={<Salary />} />
          <Route path="/Zero" element={<Zero />} />
        </Routes>
      </Box>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
