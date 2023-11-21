import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Search from '@mui/icons-material/Search';

const theme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          fontSize: '12px',
          color: '#1C2833', // Set the desired font color
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#90323D',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&$focused $notchedOutline': {
            borderColor: '#90323D', // Set the desired border color
          },
        },
      },
    },
  },
});

export default function CustomSizeDatePicker() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']} >
          <DatePicker
            label="Cut-Off Date"
            inputFormat="MM/DD/YYYY"
            InputLabelProps={{
              color: '#90323D',
            }}
            renderInput={(props) => (
              <React.Fragment>
                <input {...props} />
                <Search color="#90323D" fontSize="small" style={{ cursor: 'pointer' }} />
              </React.Fragment>
            )}
          />
        </DemoContainer>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
