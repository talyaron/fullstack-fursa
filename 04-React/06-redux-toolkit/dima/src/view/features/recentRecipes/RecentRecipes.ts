import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../../app/store";
import {recipeInfo} from '../../../App';

interface recipesState{
    recentRecipes:Array<recipeInfo>;
}

const initialState : recipesState = {
    recentRecipes:[],
};

export const getRecentRecipesAsync = createAsyncThunk(
    'recent/fetchRecent',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('http://localhost:3004/recent');
            const data = response.data;
            return data;
        } catch (error:any) {
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const recentRecipesReducer = createSlice({
    name:'recipes',
    initialState,
    reducers:{
        addToRecentRecipe(state, action:PayloadAction<recipeInfo>){
            state.recentRecipes = [...state.recentRecipes, action.payload];
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getRecentRecipesAsync.fulfilled, (state, action) => {
            state.recentRecipes = action.payload;
        })
    }
})

export const { addToRecentRecipe } = recentRecipesReducer.actions;

export const recentRecipes = (state:RootState) => state.recentRecipes.recentRecipes;

export default recentRecipesReducer.reducer