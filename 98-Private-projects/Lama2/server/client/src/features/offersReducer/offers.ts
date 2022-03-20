import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import internal from 'stream';
import { RootState, AppThunk } from '../../app/store';
import axios from "axios";

interface Offer {
    id: number;
    name: string;
    description: string;
    cost: number;
}

interface Offers {
    arrOffers: Array<Offer>,
    status: 'idle' | 'loading' | 'failed';

}

const initialState: Offers = {
    arrOffers: [],
    status: 'idle',
};

export const getOfferAsync = createAsyncThunk(
    'offers/fetchOffers',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('http://localhost:3004/offers')
            const data = response.data
            return data;

        } catch (error:any) {
            thunkAPI.rejectWithValue(error.response.data)

        }

    }
);

export const offersReducer = createSlice({
    name: 'offers',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getOfferAsync.pending, (state) => {
            state.status = 'loading';
        })
            .addCase(getOfferAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.arrOffers = action.payload;
            })
            .addCase(getOfferAsync.rejected, (state, action) => {
                state.status = 'failed';
               // state.arrProducrs = action.payload;
            })
    }

});

export const selectOffers=(state:RootState)=>state.offers

export default offersReducer.reducer