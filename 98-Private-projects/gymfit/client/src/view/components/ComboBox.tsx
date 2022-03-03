import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox(props:any) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={props.measurment}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="pick your measurment" />}
    />
  );
}