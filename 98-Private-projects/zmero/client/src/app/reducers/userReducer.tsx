import { RootState } from '../store';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

interface userProb {
    userinfo: {
        fName: string;
        lName: string;
        email: string;
        type: string;
        region: string;
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
        region: "Israel",
    },
    userIsLogIn: false,
    status: 'idle',
};

export const getUserInfoAsync = createAsyncThunk(
    'user/GetUserInfo',
    async (user: any, thunkAPI) => {
        try {
            const { email, password } = user
            if (!email || !password) throw new Error('invalid fields')
            const response = await axios.get('/users/log-in', { params: { "email": email, "password": password } })
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
            const { fName, lName, email, phone, region, password } = user
            if (!fName || !lName || !email || !phone || !region || !password) throw new Error('invalid fields')
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
            console.log("hi")
            const { fName, lName, email, password, phone } = user;
            if (!fName || !lName || !email || !password || !phone) throw new Error('invalid fields')
            const response = await axios.post('/users/add-restaurateur', user)
            console.log(response.data)
            const data: any = response.data
            return data
        } catch (e) {
            thunkAPI.rejectWithValue(e)
        }

    }
);

export const logOutUser = createAsyncThunk(
    'user/logOutUser',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/users/log-out')
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
                try {
                    const { log, user } = action.payload
                    if (log == null) throw new Error('invalid fields')
                    if (log === true) {
                        if (user == null) throw new Error('invalid fields')
                        state.userinfo = user;
                        state.userIsLogIn = true;
                    }
                } catch (error) {
                    console.log(error)
                }
            })
            .addCase(signUpUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(signUpUser.fulfilled, (state, action) => {
                state.status = 'idle';
                try {
                    const { log, user } = action.payload
                    if (log == null) throw new Error('invalid fields')
                    if (log === true) {
                        if (!user) throw new Error('invalid fields')
                        state.userinfo = user;
                        state.userIsLogIn = true;
                    }
                }
                catch (error) {
                    console.log(error)
                }
            }).addCase(signUpRestaurateur.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(signUpRestaurateur.fulfilled, (state, action) => {
                state.status = 'idle';
                try {
                    const { add, user } = action.payload
                    if (add == null) throw new Error('invalid fields')
                    if (add === true) {
                        if (!user) throw new Error('invalid fields')
                    }
                } catch (error) {

                }
            })
            .addCase(getAuthentication.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAuthentication.fulfilled, (state, action) => {
                state.status = 'idle';
                try {
                    const { log, user } = action.payload
                    if (log == null) throw new Error('invalid fields')
                    if (log === true) {
                        if (!user) throw new Error('invalid fields')
                        state.userinfo = user;
                        state.userIsLogIn = true;
                    } else {
                        state.userinfo.email = " ";
                        state.userinfo.fName = " ";
                        state.userinfo.lName = " ";
                        state.userinfo.type = " ";
                        state.userinfo.region = "Israel"
                        state.userIsLogIn = false;
                    }
                } catch (error) {
                    console.log(error)
                }
            })
            .addCase(logOutUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(logOutUser.fulfilled, (state, action) => {
                state.status = 'idle';
                try {
                    const { log } = action.payload
                    if (log == null) throw new Error('invalid fields')
                    if (log === false) {
                        state.userinfo.email = " ";
                        state.userinfo.fName = " ";
                        state.userinfo.lName = " ";
                        state.userinfo.type = " ";
                        state.userIsLogIn = false;
                    }
                }
                catch (error) {
                    console.log(error)
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