import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import axios from "axios"
//import { AppointmentData } from './data';


export interface appointment {
  title: string;
  start: string;
  end: string;
  name: string;
  phone: string;
}


export interface appointmentArr {
  //[x: string]: any;
  appointments: Array<appointment>;
  // status: 'idle' | 'loading' | 'failed';

}


const initialState: appointmentArr = {
  appointments: [],
  // status:'idle',
};


export const getAppointmentsAsyn = createAsyncThunk(
  'appointments/fetch',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('http://localhost:3004/AppointmentData');
      const data = response.data;
      return data;
    } catch (error: any) {
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);




export const appointmentsSlice = createSlice({
  name: 'selectedAppointmen',
  initialState,
  reducers: {
    addAppointment: (state, action) => {
      state.appointments = [...state.appointments, action.payload];


    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAppointmentsAsyn.fulfilled, (state, action) => {
        state.appointments = action.payload;
      })
  }


});


export default appointmentsSlice.reducer;
export const { addAppointment } = appointmentsSlice.actions;
export const selectAppointment = (state: RootState) => state.appointments.appointments;
