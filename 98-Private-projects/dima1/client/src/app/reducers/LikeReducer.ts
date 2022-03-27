import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";


export interface likeState {
    info: {
        recipeId: String,
        users: Array<String>
    },
    status: 'idle' | 'loading' | 'failed'
}

const initialState: likeState = {
    info: {
        recipeId: '',
        users: []
    },
    status: 'idle'
}

export const getRecipeLikes = createAsyncThunk(
    'getLikes/fetchLikes',
    async (id:any, thunkAPI) => {
        try {
            const response = await axios.post('/selectRecipe/get-recipe-likes', {id : id});
            const data = response.data;
            console.log(data);
            if(data.ok)
                return data.info;
            else return thunkAPI.rejectWithValue("failed");
        } catch (error : any) {
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const likeReducer = createSlice({
    name: 'item',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getRecipeLikes.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(getRecipeLikes.fulfilled, (state, action) => {
                state.info.recipeId = action.payload.recipeId;
                state.info.users = action.payload.users;
                state.status = 'idle';
            })
            .addCase(getRecipeLikes.rejected, (state, action) => {
                state.status = 'failed';
            })
    }
});

export const recipeLikes = (state: RootState) => state.likes.info;

export default likeReducer.reducer;