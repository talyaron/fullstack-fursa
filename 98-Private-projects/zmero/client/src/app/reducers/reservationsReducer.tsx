import { RootState, AppThunk } from '../store';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios'

interface Reservation {
    id: number;
    hour: number;
    min: number;
    year: number;
    month: number;
    day: number;
    restID: number;
}



interface Reservations {
    reservations: Array<Reservation>
    status: 'idle' | 'loading' | 'failed';
}

const initialState: Reservations = {
    reservations: [],
    status: 'idle',
};

export const fetchUserReservations = createAsyncThunk(
    'reservation/fetchUserReservations',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('http://localhost:3004/Reservations')
            const data: any = response.data
            return data
        } catch (e) {
            thunkAPI.rejectWithValue(e)
        }

    }
);

export const cancelReservations = createAsyncThunk(
    'reservation/cancelReservations',
    async (reserveationID: number, thunkAPI) => {
        try {
            const response = await axios.delete(`http://localhost:3004/Reservations/${reserveationID}`)
            const data: any = response.data
            return data
        } catch (e) {
            thunkAPI.rejectWithValue(e)
        }

    }
);

export const AddReservation = createAsyncThunk(
    'reservation/AddReservation',
    async (Reserve: any, thunkAPI) => {
        try {
            const response = await axios.post(`http://localhost:3004/Reservations/`, Reserve)
            const data: any = response.data
            return data
        } catch (e) {
            thunkAPI.rejectWithValue(e)
        }

    }
);


export const reservationReducer = createSlice({
    name: 'reservation',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserReservations.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUserReservations.fulfilled, (state, action) => {
                state.status = 'idle';
                state.reservations = action.payload;
            });
    },
})


export const getUserReservations = (state: RootState) => state.reservation.reservations
export default reservationReducer.reducer;