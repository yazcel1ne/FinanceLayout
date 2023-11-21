import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid, IconButton } from "@mui/material";
import { Print, Download } from "@mui/icons-material";

export default function BasicCard() {
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
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h5" color="primary">
              July
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography color="primary">$34,325</Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography color="secondary">
              July 1, 2023 - July 30, 2023
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <IconButton>
              <Print color="primary" />
            </IconButton>
            <IconButton>
              <Download color="primary" />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
