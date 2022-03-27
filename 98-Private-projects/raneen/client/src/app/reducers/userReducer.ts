import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

interface user {
    details: {
        _id: String,
        name: String,
        email: String,
        password: String,
    }
    status: 'idle' | 'loading' | 'failed'
}

const initialState: user = {
   
    details: {
        _id: '',
        name: '',
        email: '',
        password: '',
    },
    status : 'loading'
};

export const getUserAsync = createAsyncThunk(
    'getUser/fetchGetUser',
    async (name:any, thunkAPI) => {
        try {

           
            const response = await axios.post('/users/get-user', {name : name})
            const data = response.data;
            if(data.ok){
                return data.user;
            }
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
            state.details = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getUserAsync.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(getUserAsync.fulfilled, (state, action) => {
            state.details = action.payload;
            state.status = 'idle';
        })
        .addCase(getUserAsync.rejected, (state, action) => {
            state.status = 'failed';
        })
    }
});

export const { updateUser } = userReducer.actions;

export const selectUser = (state:RootState) => state.user.details;

export default userReducer.reducer