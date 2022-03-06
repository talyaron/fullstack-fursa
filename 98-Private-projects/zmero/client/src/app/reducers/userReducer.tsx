import { RootState, AppThunk } from '../store';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios'

interface userProb {
    userinfo: {
        _id: string;
        fName: string;
        lName: string;
        email: string;
    };
    userIsLogIn: boolean;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: userProb = {
    userinfo: {
        _id: "-1",
        fName: " ",
        lName: " ",
        email: "",
    },
    userIsLogIn: false,
    status: 'idle',
};

export const getUserInfoAsync = createAsyncThunk(
    'user/GetUserInfo',
    async (user: any, thunkAPI) => {
        try {
            const response = await axios.get('/users/get-user', { params: user })
            const data: any = response.data
            return data
        } catch (e) {
            thunkAPI.rejectWithValue(e)
        }

    }
);

export const signUpUser = createAsyncThunk(
    'user/signUpUser',
    async (user: any, thunkAPI) => {
        try {
            const response = await axios.post('/users/sign-up', user)
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
                    state.userinfo = action.payload.user;
                    state.userIsLogIn = true;
                }
            })
            .addCase(signUpUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(signUpUser.fulfilled, (state, action) => {
                state.status = 'idle';
                if (action.payload.log == true) {
                    state.userinfo = action.payload.user;
                    state.userIsLogIn = true;
                }
            });
    },
})


export const { updateLogIn } = userReducer.actions
export const selectUser = (state: RootState) => state.user
export const selectUserId = (state: RootState) => state.user.userinfo._id
export const selecUserName = (state: RootState) => state.user.userinfo.fName + " " + state.user.userinfo.lName
export const checkUser = (state: RootState) => state.user.userIsLogIn
export default userReducer.reducer;