import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export interface listState {
    lists: Array<any>;
    status: 'idle' | 'loading' | 'failed';
}

export const listAsync = createAsyncThunk(
    'list/fetchList',
    async (email: string, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:3001/meeting/getListByUser', { email: email });
            const data = await response.data;
            if (data.ok) {
                return data;
            }
        } catch (error: any) {
            thunkAPI.rejectWithValue(error.response.data)
        }
    }
)

const initialState = {
    lists: [],
    status: 'idle'
}

const listReducer = createSlice({
    name: "list",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(listAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(listAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.lists = action.payload.lists;
            })
            .addCase(listAsync.rejected, (state) => {
                state.status = 'failed';
            })
    }
})

export default listReducer.reducer;