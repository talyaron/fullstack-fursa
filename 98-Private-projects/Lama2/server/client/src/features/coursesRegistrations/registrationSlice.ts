import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import axios from "axios";
import {CourseRegistData} from './data'



export interface registration{
    course:string;    
    start:Date;
    end:Date;
    name:string;
  }

  export interface registrationArr{
    //[x: string]: any;
    registrations:Array<registration>;
  
  }


  const initialState:registrationArr  = {
    registrations :CourseRegistData,
  };


  export const registrationSlice = createSlice({
    name: 'selectedDate',
    initialState,
    reducers: {
      addAppointment : (state,action) =>{
        state.registrations.push(action.payload);

      },
    },

  });


  export default registrationSlice.reducer;
  export const {addAppointment } = registrationSlice.actions;
  export const selectAppointment = (state: RootState) => state.registrations.registrations;
  //state.registrations.registrations;
