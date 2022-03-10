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
          console.log(res);
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
  'appointments/fetch',
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


export const appointmentsSlice = createSlice({
  name: 'selectedAppointmen',
  initialState,
  reducers: {
    addAppointment: (state, action) => {
      state.appointments = [...state.appointments, action.payload];
      try {
        const appointment = action.payload;
        //console.log(appointment.id)
        if (!appointment) throw new Error("No appointment in payload");
        axios
          .post("/appointments/add-appointment", { appointment })
          .then((res) => console.log(res))
          .catch((err) => console.error(err));
      } catch (error) {
        console.error(error);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAppointmentsAsyn.fulfilled, (state, action) => {
        if (Array.isArray(action.payload)) {
          state.appointments = action.payload;
        } else {
          //console.log("action");
          console.error("payload is not an array");
          console.log(action.payload);
        }
      })
  }
});


export default appointmentsSlice.reducer;
export const { addAppointment } = appointmentsSlice.actions;
export const selectAppointment = (state: RootState) => state.appointments.appointments;
