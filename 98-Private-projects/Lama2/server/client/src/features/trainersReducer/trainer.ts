import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import internal from 'stream';
import { RootState, AppThunk } from '../../app/store';
import axios from "axios";

interface Trainer {
    id: number;
    description: string;
    img: string;
    name: string;
}

interface Trainers {
    arrTrainers: Array<Trainer>,
    status: 'idle' | 'loading' | 'failed';

}

const initialState: Trainers = {
    arrTrainers: [],
    status: 'idle',
};

export const getTrainersAsync = createAsyncThunk(
    'trainers/fetchTrainers',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('http://localhost:3004/trainers')
            const data = response.data
            return data;

        } catch (error:any) {
            thunkAPI.rejectWithValue(error.response.data)

        }

    }
);

export const TrainersReducer = createSlice({
    name: 'trainers',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getTrainersAsync.pending, (state) => {
            state.status = 'loading';
        })
            .addCase(getTrainersAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.arrTrainers = action.payload;
            })
            .addCase(getTrainersAsync.rejected, (state, action) => {
                state.status = 'failed';
               // state.arrProducrs = action.payload;
            })
    }

});

export const selectrainers=(state:RootState)=>state.trainers

export default TrainersReducer.reducer