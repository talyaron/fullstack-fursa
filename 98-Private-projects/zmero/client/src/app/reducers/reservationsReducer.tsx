import { RootState, AppThunk } from '../store';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios'

interface Reservation {
    id: string;
    hour: number;
    min: number;
    year: number;
    month: number;
    day: number;
    restId: string;
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
    async (userId: string, thunkAPI) => {
        try {
            const response = await axios.get('/get-user-reservations', { params: { "userId": userId } })
            const data: any = response.data
            return data
        } catch (e) {
            thunkAPI.rejectWithValue(e)
        }

    }
);

export const cancelReservations = createAsyncThunk(
    'reservation/cancelReservations',
    async (reserveationID: string, thunkAPI) => {
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
            const response = await axios.post(`add-user-reservation`, Reserve)
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
                if (action.payload.log === true) {
                    state.status = 'idle';
                    state.reservations = action.payload.reservations;
                }
            });
    },
})


export const getUserReservations = (state: RootState) => state.reservation.reservations
export default reservationReducer.reducer;