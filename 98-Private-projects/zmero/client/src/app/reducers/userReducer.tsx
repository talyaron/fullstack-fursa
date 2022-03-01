import { RootState, AppThunk } from '../store';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios'

interface userProb {
    userinfo: {
        id: number;
        userName: string;
        email: string;
    };
    userIsLogIn: boolean;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: userProb = {
    userinfo: {
        id: -1,
        userName: "",
        email: "",
    },
    userIsLogIn: false,
    status: 'idle',
};

export const getUserInfoAsync = createAsyncThunk(
    'user/GetUserInfo',
    async (user: any, thunkAPI) => {
        console.log(user)
        try {
            const response = await axios.get('/get-user', { params: user })
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
                if (action.payload.log == true) {
                    console.log(action.payload)
                    state.userinfo = action.payload.user;
                    state.userIsLogIn = true;
                }
            });
    },
})


export const { updateLogIn } = userReducer.actions
export const selectUser = (state: RootState) => state.user
export const selecUserName = (state: RootState) => state.user.userinfo.userName
export const checkUser = (state: RootState) => state.user.userIsLogIn
export default userReducer.reducer;