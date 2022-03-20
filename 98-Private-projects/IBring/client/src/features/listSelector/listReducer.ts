import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export interface lisrState {
    lists: {
        upComing: Array<any>;
        previous: Array<any>;
    }
    status: 'idle' | 'loading' | 'failed';
}

export const listUpComingAsync = createAsyncThunk(
    'list/fetchList/upcoming',
    async (email: string, thunkAPI) => {
        try {
            // const response = await axios.post('/meeting/getListByUser', { email: email });
            const response = await axios.post('/meeting/getListByUserUpComing', { email: email });
            const data = await response.data;
            console.log(data);
            if (data.ok) {
                return data;
            }
        } catch (error: any) {
            thunkAPI.rejectWithValue(error.response.data)
        }
    }
)

export const listPreviousAsync = createAsyncThunk(
    'list/fetchList/previous',
    async (email: string, thunkAPI) => {
        try {
            // const response = await axios.post('/meeting/getListByUser', { email: email });
            const response = await axios.post('/meeting/getListByUserPrevious', { email: email });
            const data = await response.data;
            console.log(data);
            if (data.ok) {
                return data;
            }
        } catch (error: any) {
            thunkAPI.rejectWithValue(error.response.data)
        }
    }
)

const initialState = {
    lists: {
        upComing: [],
        previous: []
    },
    status: 'idle'
}

const listReducer = createSlice({
    name: "list",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(listUpComingAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(listUpComingAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.lists.upComing = action.payload.lists;
            })
            .addCase(listUpComingAsync.rejected, (state) => {
                state.status = 'failed';
            })
            .addCase(listPreviousAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(listPreviousAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.lists.previous = action.payload.lists;
            })
            .addCase(listPreviousAsync.rejected, (state) => {
                state.status = 'failed';
            })
    }
})

export default listReducer.reducer;