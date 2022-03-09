import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

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

interface userIF {
    userID?: Number,
    name?: String,
    email?: String,
    password?: String,
    phone?: String,
    location?: String,
    gender?: String,
    type?: String,
    org?: orgIF
}

interface accidentInfo {
    value: {
        type: String;
        emergency: Boolean;
        date: Date;
        address: String;
        call: Object;
        description: String;
        user: userIF;
        org: orgIF;
    }
    status: 'idle' | 'loading' | 'failed'
}

const initialState: accidentInfo = {
    value: {
        type: '',
        emergency: false,
        date: new Date(),
        address: '',
        call: {},
        description: '',
        user: {},
        org: {}
    },
    status: 'idle',
}

export const findAccidentAsync = createAsyncThunk(
    'accidentInfo/fetchAccident',
    async (accidentId: any, thunkAPI) => {
        try {
            const response = await axios.post('/accidents/getAccidentByID', { id: accidentId });
            return response.data;
        } catch (error: any) {
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
)

export const accidentInfoReducer = createSlice({
    name: 'accidentInfo',
    initialState,
    reducers: {
        removeSelected: (state) => {
            state.status = 'idle';
            state.value = initialState.value;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(findAccidentAsync.pending, (state: any) => {
                state.status = 'loading'
            })
            .addCase(findAccidentAsync.fulfilled, (state, action) => {
                state.value = action.payload.accident;
                state.status = 'idle';
            })
            .addCase(findAccidentAsync.rejected, (state: any) => {
                state.status = 'failed'
            })
    }
});

export const accident = (state: RootState) => state.accident;
export const { removeSelected } = accidentInfoReducer.actions;

export default accidentInfoReducer.reducer;