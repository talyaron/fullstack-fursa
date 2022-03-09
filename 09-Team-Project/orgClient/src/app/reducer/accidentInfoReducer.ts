import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import User from '../../../../citizenClient/src/app/reducer/userReducer'
import axios from "axios";
import { RootState } from "../store";


interface accidentInfo{
    type:String;
    emergency: Boolean;
    date: Date;
    address: String;
    call: Object;
    description: String;
    user: Object;
    org:Object;
    status: 'idle' | 'loading' | 'failed'
}

const initialState: accidentInfo = {
    type: '',
    emergency: false,
    date: new Date(),
    address: '',
    call: {},
    description: '',
    user: {},
    org:{},
    status: 'idle',
}

export const findAccidentAsync = createAsyncThunk(
    'accidentInfo',
    async (accidentId:any, thunkAPI) => {
        try {
            const response = await axios.post('/getAccidentByID', {accidentId});
            return response.data;
        } catch (error:any) {
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
)

export const accidentInfoReducer = createSlice({
    name: 'accidentInfo',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder 
        .addCase(findAccidentAsync.pending, (state:any) => {
            state.status = 'loading'
        })
        .addCase(findAccidentAsync.fulfilled, (state, action) => {
            state.address = action.payload.address;
            state.call = action.payload.call;
            state.date = action.payload.date;
            state.description = action.payload.description;
            state.emergency = action.payload.emergency;
            state.org = action.payload.org;
            state.type = action.payload.type;
            state.user = action.payload.user;
            state.status = 'idle';
        })
        .addCase(findAccidentAsync.rejected, (state:any) => {
            state.status = 'failed'
        })
    }
});

export const accident = (state:RootState) => state.accident;

export default accidentInfoReducer.reducer;