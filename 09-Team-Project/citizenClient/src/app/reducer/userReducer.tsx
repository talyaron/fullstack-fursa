import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import axios from 'axios'
export interface UserInfo {
    status: 'idle' | 'loading' | 'failed';
}

const initialState: UserInfo = {
    status: 'idle',
};


export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async () => {
        try {
            const response = await axios.get('/user/get-user')
            return response.data;
        }
        catch (err: any) {
            console.log(err.message)
        }
    }
);

export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.status = 'idle';
            });
    },
});



export default userReducer.reducer;
