import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface orgIF {
    orgName: String,
    email: String,
    password: String,
    phone: String,
    city: String,
    description: String,
    webUrl: String | undefined,
    accidentType: String, // the type that the organization help in . 
}

interface userIF {
    userID: Number,
    name: String,
    email: String,
    password: String,
    phone: String,
    location: String,
    gender: String,
    type: String,
    org: orgIF
}

interface mediaIF {
    src: String,
    type: String
}

interface Accident {
    type: string;
    emergency: Boolean | null;
    date: string;
    address: string;
    media: Array<mediaIF>;
    call: Object;
    description: string;
    user: userIF;
    org: orgIF;
}

export interface AccidentsState {
    value: {
        accidents: Array<Accident>
    };
    status: 'idle' | 'loading' | 'failed';
}

const initialState: AccidentsState = {
    value: {
        accidents: []
    },
    status: 'idle',
};

export const fetchAccidentsAsync = createAsyncThunk(
    'accidents/fetchAccidents',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/accidents/getAllAccidents');
            return response.data;
        } catch (error: any) {
            thunkAPI.rejectWithValue(error.response.message)
        }
    }
);

export const AccidentsReducer = createSlice({
    name: 'accidents',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAccidentsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAccidentsAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value.accidents = action.payload.accidents;
            })
            .addCase(fetchAccidentsAsync.rejected, (state) => {
                state.status = 'failed';
            })
    },
});

export default AccidentsReducer.reducer;
