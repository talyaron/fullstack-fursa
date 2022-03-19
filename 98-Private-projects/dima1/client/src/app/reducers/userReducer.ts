import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

interface user {
    info: {
        _id: String,
        name: String,
        email: String,
        password: String,
        phone: String,
        description: String
    }
    status: 'idle' | 'loading' | 'failed'
}

const initialState: user = {
    info: {
        _id: '',
        name: '',
        email: '',
        password: '',
        phone: '',
        description: ''
    },
    status : 'loading'
};

export const getUserAsync = createAsyncThunk(
    'getUser/fetchGetUser',
    async (name:any, thunkAPI) => {
        try {
            const response = await axios.post('/user/get-user', {name : name})
            const data = response.data;
            if(data.ok)
                return data.user;
            else return thunkAPI.rejectWithValue("failed");
        } catch (error: any) {
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser(state, action){
            state.info = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getUserAsync.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(getUserAsync.fulfilled, (state, action) => {
            state.info = action.payload;
            state.status = 'idle';
        })
        .addCase(getUserAsync.rejected, (state, action) => {
            state.status = 'failed';
        })
    }
})

export const { updateUser } = userReducer.actions;

export const user = (state:RootState) => state.user.info;

export default userReducer.reducer