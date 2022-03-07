import { Link } from "react-router-dom";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function AddCourse(){

    return(
        <div className="addCourse">
            <form action="">
            <TextField
            className="txtfield"
                  autoComplete="given-name"
                  name="Course Type"
                  required
                  fullWidth
                  id="courseType"
                  label="course type"
                  autoFocus
                />
                      <TextField
            className="txtfield"
                  autoComplete="given-name"
                  name="Cost"
                  required
                  fullWidth
                  id="cost"
                  label="cost"
                  autoFocus
                />

            </form>

</div>
        
    );

}

export default AddCourse;