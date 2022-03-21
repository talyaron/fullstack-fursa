import { Email } from '@material-ui/icons';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface orgIF {
    orgName?: String,
    email?: String,
    password?: String,
    phone?: String,
    city?: String,
    description?: String,
    webUrl?: String | undefined,
    accidentType?: String, // the type that the organization help in . 
}

export interface orgUserState {
    value: {
        user: orgIF
    };
    status: 'idle' | 'loading' | 'failed';
}

const initialState: orgUserState = {
    value: {
        user: {}
    },
    status: 'idle',
};

export const fetchOrgUserAsync = createAsyncThunk(
    'orgUser/fetchOrgUser',
    async (sentEmailAndPassword: any, thunkAPI) => {
        try {
            console.log(sentEmailAndPassword);
            const response = await axios.post('/org/login', { email: sentEmailAndPassword.email, password: sentEmailAndPassword.password });
            const data = await response.data;
            if (data.ok) {
                return response.data;
            }
            else {
                return thunkAPI.rejectWithValue("wrong email or password!");
            }
        } catch (error: any) {
            thunkAPI.rejectWithValue(error.response.message)
        }
    }
);

export const orgUserReducer = createSlice({
    name: 'orgUser',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrgUserAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchOrgUserAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value.user = action.payload.user;
            })
            .addCase(fetchOrgUserAsync.rejected, (state) => {
                state.status = 'failed';
            })
    },
});

export default orgUserReducer.reducer;
