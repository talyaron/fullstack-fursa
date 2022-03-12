import { RootState, AppThunk } from '../store';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios'
import { faPeopleCarry } from '@fortawesome/free-solid-svg-icons';

interface Reservation {
    _id: string;
    hour: number;
    min: number;
    year: number;
    month: number;
    day: number;
    restId: string;
    userId: string;
    people: number;
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
            const response = await axios.get('/reservations/get-user-reservations')
            const data: any = response.data
            return data
        } catch (e) {
            thunkAPI.rejectWithValue(e)
        }
    }
);

export const cancelReservations = createAsyncThunk(
    'reservation/cancelReservations',
    async (obj: any, thunkAPI) => {
        try {
            const { id, restId } = obj
            if (!id || !restId) throw 'invalid fields'
            const response = await axios.delete(`/reservations/delete-user-reservation`, { data: { "id": id, "restId": restId } })
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
            const { restId, hour, year, min, day, month, people } = Reserve
            if (!restId || !hour || !year || !min || !day || !month || !people) throw "invalid fields"
            const response = await axios.post(`/reservations/add-user-reservation`, { "restId": restId, "hour": hour, "year": year, "min": min, "day": day, "month": month, "people": people })
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
            })
            .addCase(AddReservation.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(AddReservation.fulfilled, (state, action) => {
                if (action.payload.log === true) {
                    state.status = 'idle';
                    state.reservations = action.payload.reservations;
                }
            })
            .addCase(cancelReservations.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(cancelReservations.fulfilled, (state, action) => {
                if (action.payload.log === true) {
                    state.status = 'idle';
                    state.reservations = action.payload.reservations;
                }
            });
    },
})


export const getUserReservations = (state: RootState) => state.reservation.reservations
export default reservationReducer.reducer;