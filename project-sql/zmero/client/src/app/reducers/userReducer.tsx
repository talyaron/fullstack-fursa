import { RootState } from '../store';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

interface userProb {
    userinfo: {
        fName: string;
        lName: string;
        email: string;
        type: string;
        phone: string;
        region: string;
    };
    userIsLogIn: boolean;
    status: 'idle' | 'loading' | 'complete' | 'failed';
    signUpStatus: 'idle' | 'loading' | 'failed';
    updateStatus: 'idle' | 'loading' | 'failed';
    updatePasswordStatus: 'idle' | 'loading' | 'failed' | 'completed';
}

const initialState: userProb = {
    userinfo: {
        fName: " ",
        lName: " ",
        email: "",
        type: "",
        phone: "",
        region: "Israel",
    },
    userIsLogIn: false,
    status: 'idle',
    signUpStatus: 'idle',
    updateStatus: 'idle',
    updatePasswordStatus: 'idle',
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

export const updateUserInfo = createAsyncThunk(
    'user/updateUserInfo',
    async (user: any, thunkAPI) => {
        try {
            const { fName, lName, phone, region } = user
            if (!fName || !lName || !phone || !region) throw new Error('invalid fields')
            const response = await axios.post('/users/update-info', { "fName": fName, "lName": lName, "phone": phone, "region": region })
            const data: any = response.data
            return data
        } catch (e) {
            thunkAPI.rejectWithValue(e)
        }

    }
);

export const updatePassword = createAsyncThunk(
    'user/updatePassword',
    async (user: any, thunkAPI) => {
        try {
            const { currentPass, newPass } = user
            if (!currentPass || !newPass) throw new Error('invalid fields')
            const response = await axios.post('/users/update-password', { "currentPass": currentPass, "newPass": newPass })
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
        updateSignUpState: (state, action) => {
            state.signUpStatus = action.payload
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
                try {
                    const { log } = action.payload
                    if (log == null) throw new Error('invalid fields')
                    if (log === true) {
                        state.signUpStatus = 'idle';
                    } else state.signUpStatus = 'failed';
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
                try {
                    const { log, user } = action.payload
                    if (log == null) throw new Error('invalid fields')
                    if (log === true) {
                        if (!user) throw new Error('invalid fields')
                        state.userinfo = user;
                        state.userIsLogIn = true;
                        state.status = 'complete';
                    } else {
                        state.userinfo.email = " ";
                        state.userinfo.fName = " ";
                        state.userinfo.lName = " ";
                        state.userinfo.type = " ";
                        state.userinfo.region = "Israel"
                        state.userIsLogIn = false;
                        state.status = 'idle';
                    }
                } catch (error) {
                    console.log(error)
                    state.status = 'failed';
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
            .addCase(updateUserInfo.pending, (state) => {
                state.updateStatus = 'loading';
            })
            .addCase(updateUserInfo.fulfilled, (state, action) => {
                try {
                    const { update, user } = action.payload
                    if (update == null) throw new Error('invalid fields')
                    if (update === true) {
                        if (user == null) throw new Error('invalid fields')
                        state.userinfo.fName = user.fName;
                        state.userinfo.lName = user.lName;
                        state.userinfo.phone = user.phone
                        state.userinfo.region = user.region
                        state.updateStatus = 'idle'
                    }
                } catch (error) {
                    console.log(error)
                }
            })
            .addCase(updatePassword.pending, (state) => {
                state.updatePasswordStatus = 'loading';
            })
            .addCase(updatePassword.fulfilled, (state, action) => {
                try {
                    const { update } = action.payload
                    if (update == null) throw new Error('invalid fields')
                    if (update === true) {
                        state.updatePasswordStatus = 'completed'
                    } else state.updatePasswordStatus = 'failed'
                } catch (error) {
                    console.log(error)
                }
            })
    },
})


export const { updateLogIn, updateSignUpState } = userReducer.actions
export const selectUser = (state: RootState) => state.user.userinfo
export const selectUserState = (state: RootState) => state.user.status
export const selecUserName = (state: RootState) => state.user.userinfo.fName + " " + state.user.userinfo.lName
export const checkUser = (state: RootState) => state.user.userIsLogIn
export const checkType = (state: RootState) => state.user.userinfo.type
export const signUpState = (state: RootState) => state.user.signUpStatus
export const updatePasswordState = (state: RootState) => state.user.updatePasswordStatus
export default userReducer.reducer;