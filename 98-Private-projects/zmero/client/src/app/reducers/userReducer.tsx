import { RootState, AppThunk } from '../store';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios'

interface userProb {
    userinfo: {
        id: number;
        userName: string;
        email: string;
        favorite: Array<number>;
    };
    userIsLogIn: boolean;
    reservations: Array<number>;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: userProb = {
    userinfo: {
        id: -1,
        userName: "",
        email: "",
        favorite: [],
    },
    userIsLogIn: false,
    reservations: [],
    status: 'idle',
};

export const getUserInfoAsync = createAsyncThunk(
    'user/GetUserInfo',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('http://localhost:3004/Users/1')
            const data: any = response.data
            return data
        } catch (e) {
            thunkAPI.rejectWithValue(e)
        }

    }
);



export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateLogIn: (state, action) => {
            state.userIsLogIn = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserInfoAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getUserInfoAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.userinfo = action.payload;
                state.userIsLogIn = true;
            });
    },
})


export const { updateLogIn } = userReducer.actions
export const selectUser = (state: RootState) => state.user
export const selecUserName = (state: RootState) => state.user.userinfo.userName
export const checkUser = (state: RootState) => state.user.userIsLogIn
export const getReservations = (state: RootState) => state.user.reservations
export default userReducer.reducer;