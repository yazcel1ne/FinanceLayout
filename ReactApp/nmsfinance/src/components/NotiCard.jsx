import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid, IconButton,Box, Toolbar } from "@mui/material";
import { Print, Download } from "@mui/icons-material";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function NotiCard() {
  return (
    <Card
      sx={{
        minWidth: 275,
        borderRadius: "30px",
        backgroundColor: "#ffffff",
        height: "130px",
        transition: "background-color 0.3s ease-in-out", // Add transition
        "&:hover": {
          backgroundColor: "#E7A4A8", // Change color on hover
        },
      }}
    >
       
      <CardContent>
     

       <Toolbar>
        <Toolbar>
       <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 56, height: 56 }}
      />
      </Toolbar>
        <Grid container spacing={2}>
       
          <Grid item xs={11}>
            <Typography variant="h5" color="primary">
              2022 Payday Schedule
            </Typography>
          </Grid>
          <Grid item xs={1} >
            <Box >
            <Typography color="primary" >2 Hours Ago</Typography>
            </Box>
          </Grid>
          <Grid item xs={11}>
            <Typography color="secondary">
             From: NMS Finance
            </Typography>
          </Grid>
          <Grid item xs={1} >
          <Typography color="secondary"> July 30, 2023 -  07:35 PM</Typography>
          </Grid>
        </Grid>
        </Toolbar>
      </CardContent>
    </Card>
  );
}
