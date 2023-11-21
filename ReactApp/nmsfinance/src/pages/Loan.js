import React from 'react';
import { CircularProgress, Box } from '@mui/material';

const Loan = ({ 
  height = '70vh' 
}) => {

  return (
    <Box minHeight={height}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      loan
    </Box>
  );
}
export default Loan;