import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchUser } from './userLoginAPI';
import axios from 'axios';

export interface userIFState {
    email: string;
    userName?: string;
}

interface userIF {
    email: string;
    pass?: string;
}


export interface LoginState {
    value: userIFState;
    status: 'idle' | 'loading' | 'failed' | 'logged';
}

// const initialState: LoginState = {
//     value: {
//         email: ""
//     },
//     status: 'idle',
// };

const initialState = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')!) :
    {
        value: {
            email: ""
        },
        status: 'idle',
    }


export const logintAsync = createAsyncThunk(
    'login/fetchUser',
    async (user: userIF, thunkAPI) => {
        try {
            const response = await axios.post('/user/login', {
                email: user.email?.toLowerCase(), pass: user.pass
            })
            const data = await response.data;
            console.log("response", data)
            if (data.ok) {
                const userData = data.user;
                localStorage.setItem('userInfo', JSON.stringify(
                    {
                        value: {
                            email: userData.email
                        },
                        status: 'logged'
                    }
                ));
                return data.user;
            }
            else {
                return thunkAPI.rejectWithValue(data)
            }
        } catch (e: any) {
            console.log("Error", e.response.data)
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

export const loginReducer = createSlice({
    name: 'login',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('userInfo');
            state.status = 'idle';
            state.value = {
                email: ""
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(logintAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(logintAsync.fulfilled, (state, action) => {
                state.status = 'logged';
                state.value.email = action.payload.email;
            })
            .addCase(logintAsync.rejected, (state) => {
                state.status = 'failed';
            })
    },
});


export const {logout} = loginReducer.actions;

export const userInfo = (state: RootState) => state.logged;

export default loginReducer.reducer;
