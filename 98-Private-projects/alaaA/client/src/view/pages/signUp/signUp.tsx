import './signUp.scss';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';



const signUp = () => {
    function handelSubmit(ev:any){

    }
    function MyFormHelperText() {
        const { focused } = useFormControl() || {};
      
        const helperText = React.useMemo(() => {
          if (focused) {
            return 'please add your uosername';
          }
      
          return 'username';
        }, [focused]);
      
        return <FormHelperText>{helperText}</FormHelperText>;
      }
    return (
        <div className='warpper'>

            <div>
                <div >
                    <h1> Sign Up</h1>
                </div>   
                  <br /><br />
                  <form onSubmit={handelSubmit}>
                {/* <div>
                    Username  
                    <input type="text" required />
                </div> */}

    
                <div>
                    <Box component="form" noValidate autoComplete="off">
      <FormControl sx={{ width: '25ch' }}>
        <OutlinedInput placeholder="Please enter text" />
        <MyFormHelperText />
      </FormControl>
    </Box>
    <Box component="form" noValidate autoComplete="off">
      <FormControl sx={{ width: '25ch' }}>
        <OutlinedInput placeholder="Please enter text" />
        <MyFormHelperText />
      </FormControl>
    </Box>
                </div>
                <div>
                <br />
                    Username  
                    <input type="text"  required/>
                </div>
                <div>
                <br />
                    Username  
                    <input type="text" required />
                </div>
                <div>
                <br />
                    Password  
                    <input type="password" required />
                </div>
                <div>
                <br />
                    re-Password  
                    <input type="password" required />
                </div>
                <div>
                <br />
                    Byer/seler  
                    <input type="radio" id="html" name="fav_language" value="HTML" />
                    <label>Byer</label>
                    <input type="radio" id="html" name="fav_language" value="HTML" />
                    <label>S</label>
                </div>

                <Link type='submit' to="/Group">signUp</Link>
                <br />
                </form>
                <Link to="/HomePage">cancle</Link>

                 
            </div>
        </div>
    )
}


export default signUp;