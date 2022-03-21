import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const measurment = [
    { label: 'KG' },
    { label: 'LBS' } ]

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={measurment}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="pick your measurment" />}
    />
  );
}