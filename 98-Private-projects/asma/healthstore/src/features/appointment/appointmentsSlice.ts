import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import axios from "axios"
import {AppointmentData} from './data';


export interface appointment{
    title:string;    
    start:Date;
    end:Date;
    name:string;
    phone:string;
  }


  export interface appointmentArr{
    //[x: string]: any;
    appointments:Array<appointment>;
    // status: 'idle' | 'loading' | 'failed';
  
  }


  const initialState:appointmentArr  = {
    appointments :AppointmentData,
    // status:'idle',
  };


  export const appointmentsSlice = createSlice({
    name: 'selectedAppointmen',
    initialState,
    reducers: {
      addAppointment : (state,action) =>{
        state.appointments.push(action.payload);

      },
    },

  });


  export default appointmentsSlice.reducer;
  export const {addAppointment } = appointmentsSlice.actions;
  export const selectAppointment = (state: RootState) => state.appointments.appointments;
