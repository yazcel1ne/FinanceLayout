import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("January","Monday", 6.0, 24, 4.0),
  createData("February", "Thursay", 9.0, 37, 4.3),
  createData("March", "Monday", 16.0, 24, 6.0),
  createData("April", "Tuesday", 3.7, 67, 4.3),
  createData("May", "Wednesday", 16.0, 49, 3.9),
	createData("January", "Wednesday", 6.0, 24, 4.0),
  createData("February", "Monday", 9.0, 37, 4.3),
  createData("March", "Monday", 16.0, 24, 6.0),
  createData("April", "Wednesday", 3.7, 67, 4.3),
  createData("May", "Tuesday", 16.0, 49, 3.9),
	createData("January", "Monday", 6.0, 24, 4.0),
  createData("February", "Monday", 9.0, 37, 4.3),
  createData("March", "Monday", 16.0, 24, 6.0),

];	



export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: "#90323D" }}>
          <TableRow>
            <TableCell>Month</TableCell>
            <TableCell align="right">
              Payday for 16-30 of the Previous Month
            </TableCell>
            <TableCell align="right">
              Payday for 1-15 of the Present Month
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.name}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#DDC1C4", // Alternating colors
              }}
            >
              <TableCell component="th" scope="row" sx={{ color: "#000000" }}>
                {row.name}
              </TableCell>
              <TableCell align="right" sx={{ color: "#000000" }}>
                {row.calories}
              </TableCell>
              <TableCell align="right" sx={{ color: "#000000" }}>
                {row.fat}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
