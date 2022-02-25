import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../../app/store";
import {recipeInfo} from '../../../App';

interface recipesState{
    topRecipes:Array<recipeInfo>;
}

const initialState : recipesState = {
    topRecipes:[],
};

export const getTopRecipesAsync = createAsyncThunk(
    'top10/fetchTop',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('http://localhost:3004/top10');
            const data = response.data;
            return data;
        } catch (error:any) {
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const topRecipesReducer = createSlice({
    name:'recipes',
    initialState,
    reducers:{
        addToTopRecipe : (state, action:PayloadAction<recipeInfo>) => {
            state.topRecipes = [...state.topRecipes, action.payload];
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getTopRecipesAsync.fulfilled, (state, action) => {
                state.topRecipes = action.payload;
        })
    }
})

export const { addToTopRecipe } = topRecipesReducer.actions;

export const topRecipes = (state:RootState) => state.topRecipes.topRecipes;
//export const recentRecipes = (state:RootState) => state.topRecipes.recentRecipes;

export default topRecipesReducer.reducer