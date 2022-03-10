import React from 'react'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';


export interface navtext {

    Header: string
    status: 'idle' | 'loading' | 'failed';

}

const initialState: navtext = {
    Header: "",
    status: 'idle'
};

export const NavtextSlice = createSlice({
    name: 'NavText',
    initialState,
    reducers: {
      changeNavText :(state,action)=>{
        state.Header=action.payload;
      }
    },
  });
  export const{changeNavText} =NavtextSlice.actions;
  export const ChangeNav = (state: RootState) => state.NavText;

export default NavtextSlice.reducer;
