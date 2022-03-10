import { RootState, AppThunk } from '../store';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios'

interface userProb {
    userinfo: {
        fName: string;
        lName: string;
        email: string;
        type: string;
    };
    userIsLogIn: boolean;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: userProb = {
    userinfo: {
        fName: " ",
        lName: " ",
        email: "",
        type: "",
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

export const getAuthentication = createAsyncThunk(
    'user/GetAuth',
    async (_, thunkAPI) => {
        try {
            console.log("ok")
            const response = await axios.get('/users/get-authentication')
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

export const signUpRestaurateur = createAsyncThunk(
    'user/signUpRestaurateur',
    async (user: any, thunkAPI) => {
        try {
            const response = await axios.post('/users/add-restaurateur', user)
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
            }).addCase(signUpRestaurateur.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(signUpRestaurateur.fulfilled, (state, action) => {
                state.status = 'idle';
            })
            .addCase(getAuthentication.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAuthentication.fulfilled, (state, action) => {
                state.status = 'idle';
                if (action.payload.log == true) {
                    state.userinfo = action.payload.user;
                    state.userIsLogIn = true;
                }
            })
    },
})


export const { updateLogIn } = userReducer.actions
export const selectUser = (state: RootState) => state.user
export const selecUserName = (state: RootState) => state.user.userinfo.fName + " " + state.user.userinfo.lName
export const checkUser = (state: RootState) => state.user.userIsLogIn
export const checkType = (state: RootState) => state.user.userinfo.type
export default userReducer.reducer;