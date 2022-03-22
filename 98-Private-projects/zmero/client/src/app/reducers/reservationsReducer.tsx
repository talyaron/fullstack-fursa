import { RootState, AppThunk } from '../store';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface Reservation {
    _id: string;
    date: Date;
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
        } catch (e: any) {
            console.log(e.message)
        }
    }
);

export const cancelReservations = createAsyncThunk(
    'reservation/cancelReservations',
    async (obj: any) => {
        try {
            const { id, restId } = obj
            if (!id || !restId) new Error('invalid fields')
            const response = await axios.delete(`/reservations/delete-user-reservation`, { data: { "id": id, "restId": restId } })
            const data: any = response.data
            return data
        } catch (e: any) {
            console.log(e.message)
        }

    }
);

export const AddReservation = createAsyncThunk(
    'reservation/AddReservation',
    async (Reserve: any, thunkAPI) => {
        try {
            const { restId, date, people } = Reserve
            if (!restId || !date || !people) throw new Error('invalid fields')
            const response = await axios.post('/reservations/add-user-reservation', { "restId": restId, "date": date, "people": people })
            const data: any = response.data
            return data
        } catch (e: any) {
            console.log(e.message)
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
                try {
                    const { reservations } = action.payload;
                    if (reservations == null) throw new Error('invalid fields')
                    state.reservations = reservations;
                } catch (error) {
                    console.log(error)
                }
            })
            .addCase(AddReservation.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(AddReservation.fulfilled, (state, action) => {
                state.status = 'idle';
                try {
                    const { add, reservations } = action.payload;
                    if (add == null) throw new Error('invalid fields')
                    if (add === true) {
                        if (!reservations) throw new Error('invalid fields')
                        state.reservations = reservations;
                    }
                } catch (error) {
                    console.log(error)
                }
            })
            .addCase(cancelReservations.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(cancelReservations.fulfilled, (state, action) => {
                state.status = 'idle';
                try {
                    const { del, reservations } = action.payload;
                    if (del == null) throw new Error('invalid fields')
                    if (del === true) {
                        if (!reservations) throw new Error('invalid fields')
                        state.reservations = reservations;
                    }

                } catch (error) {

                }
            });
    },
})


export const getUserReservations = (state: RootState) => state.reservation.reservations
export default reservationReducer.reducer;