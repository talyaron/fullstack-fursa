import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import {recipeInfo} from '../../App';

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
            const response = await axios.get('/recentRecipes/get-recent');
            const data = response.data;
            return data;
        } catch (error:any) {
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const recentRecipesReducer = createSlice({
    name:'recentRecipes',
    initialState,
    reducers:{
        addToRecentRecipe(state, action:PayloadAction<recipeInfo>){
            state.recentRecipes = [...state.recentRecipes, action.payload];
        },
        updateRecent : (state, action:PayloadAction<Array<any>>) => {
            const index = action.payload[1];
            {state.recentRecipes.filter((recipe:recipeInfo)=>{
                if(recipe.id != index)
                    return recipe
                else return action.payload[0]
            })}
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getRecentRecipesAsync.fulfilled, (state, action) => {
            state.recentRecipes = action.payload;
        })
    }
})

export const { addToRecentRecipe, updateRecent } = recentRecipesReducer.actions;

export const recentRecipes = (state:RootState) => state.recentRecipes.recentRecipes;

export default recentRecipesReducer.reducer