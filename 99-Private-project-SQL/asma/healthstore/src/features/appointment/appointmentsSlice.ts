import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import axios from "axios"

export interface appointment {
  title: string;
  start: Date,
  end: Date,
  name: string;
  phone: string;
}

export interface appointmentArr {
  appointments: Array<any>;
  // status: 'idle' | 'loading' | 'failed';
}


const initialState: appointmentArr = {
  appointments: [],
  // status:'idle',
};


export function getAppointments(): Promise<any> {
  return new Promise((resolve, reject) => {
    try {
      axios.get("/appointments/get-appointments")
        .then((res) => {
          const data = res.data;
          console.log(data);
          if (data) {
            resolve(data);
          }
        })
        .catch((err) => {
          reject(err.message);
        });
    } catch (err: any) {
      reject(err.message);
    }
  });
}


export const getAppointmentsAsyn = createAsyncThunk(
  'getAppointments/fetch',
  async (_, thunkAPI) => {
    try {
      const appointmentDB = await getAppointments();
      if (Array.isArray(appointmentDB))
        return appointmentDB;
      thunkAPI.rejectWithValue("No appointments");
      return;
    } catch (error: any) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addAppointmentAsyn = createAsyncThunk(
  'addAppointment/fetch',
  async (appointment:any, thunkAPI) => {
    try {
        const response = await axios.post("/appointments/add-appointment", { appointment })
        return response.data;
    } catch (error: any) {
        thunkAPI.rejectWithValue(error.response.message)
    }
}
);


export const appointmentsSlice = createSlice({
  name: 'selectedAppointmen',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAppointmentsAsyn.fulfilled, (state, action) => {
        if (Array.isArray(action.payload)) {
          //console.log(action.payload);
          state.appointments = action.payload;
          console.log(action.payload);
        } else {
          console.error(state.appointments,"state");
        }
      })
      .addCase(addAppointmentAsyn.fulfilled, (state, action) => {
        console.log(action.payload.appointment);
        state.appointments = [...state.appointments, action.payload.appointment];
      })
  }
});


export default appointmentsSlice.reducer;
export const selectAppointment = (state: RootState) => state.appointments.appointments;
