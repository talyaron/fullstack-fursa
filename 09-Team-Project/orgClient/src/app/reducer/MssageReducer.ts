import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface ChatMessages {
    chatId: String,
    from: String,
    date: Date,
    type: { type: String, enum: ['video', 'picture', 'message', 'location'] },
    video: String,
    picture: String,
    message: String,
    location: { lat: String, lng: String },
    communicationType:{ type: String, enum: ['org', 'user'] }, //user = communication between org-user; org = comm.between org-org
    accidentId:String,
    orgId:String
}


export interface MessagesState {
    value: {
        MessagesChats: Array<ChatMessages>
    };
    status: 'idle' | 'loading' | 'failed';
}

const initialState: MessagesState = {
    value: {
        MessagesChats: []
    },
    status: 'idle',
};

export const fetchMssagesAsync = createAsyncThunk(
    'Mssagess/fetchMssages',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/accidents/getAllAccidents');
            return response.data;
        } catch (error: any) {
            thunkAPI.rejectWithValue(error.response.message)
        }
    }
);

export const MssageReducer = createSlice({
    name: 'Mssagees',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMssagesAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMssagesAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value.MessagesChats= action.payload.MessagesChats;
            })
            .addCase(fetchMssagesAsync.rejected, (state) => {
                state.status = 'failed';
            })
    },
});

export default MssageReducer.reducer;
