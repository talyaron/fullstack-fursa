import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';

interface ListDetailsIF {
    imgURL?: any;
    groupName?: string;
    meetType?: string;
    date?: Date;
    time?: Date;
    reminder?: string;
    place?: string;
    fewWords?: string;
}

interface listIF {
    meetingAdmin?: any;
    whoIsThere?: Array<any>;
    bringItems?: Array<any>;
    meetingDetails?: ListDetailsIF;
}

export interface curlListState {
    list: listIF,
    status: 'idle' | 'loading' | 'failed';
}

export const curListAsync = createAsyncThunk(
    'curList/fetchList',
    async (id: any, thunkAPI) => {
        try {
            const response = await axios.post('/meeting/getListByID', { id: id });
            const data = await response.data;
            if (data.ok) {
                // localStorage.setItem('curList', JSON.stringify(data.list));
                return data.list;
            }
        } catch (error: any) {
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
)

const initialState: curlListState = {
    list: {
        meetingAdmin: "",
        whoIsThere: [],
        bringItems: [],
        meetingDetails: {}
    },
    status: 'idle'
}

const curListReducer = createSlice({
    name: "curList",
    initialState,
    reducers: {
        addMeetingDetails: (state, action: PayloadAction<any>) => {
            state.list.meetingDetails = action.payload;
        },
        addWhoIsThere: (state, action: PayloadAction<any>) => {
            state.list.whoIsThere = action.payload;
        },
        addBringItems: (state, action: PayloadAction<any>) => {
            state.list.bringItems = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(curListAsync.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(curListAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.list = action.payload;
        })
        .addCase(curListAsync.rejected, (state) => {
            state.status = 'failed';
        })
    }
})

export const { addMeetingDetails, addWhoIsThere, addBringItems } = curListReducer.actions;

export default curListReducer.reducer;