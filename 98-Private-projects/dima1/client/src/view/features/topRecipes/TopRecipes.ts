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
    'top10/fetchTop10',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/topRecipes/get-top10');
            return response.data;
        } catch (error:any) {
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const topRecipesReducer = createSlice({
    name:'topRecipes',
    initialState,
    reducers:{
        addToTopRecipe : (state, action:PayloadAction<recipeInfo>) => {
            state.topRecipes = [...state.topRecipes, action.payload];
        },
        updateTopRecipes : (state, action:PayloadAction<Array<any>>) => {
            const index = action.payload[1];
            {state.topRecipes.filter((recipe:recipeInfo)=>{
                if(recipe.id != index){
                    return recipe
                }   
                else{
                    return action.payload[0]
                } 
            })}
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getTopRecipesAsync.fulfilled, (state, action) => {
            state.topRecipes = action.payload;
        })
    }
})

export const { addToTopRecipe, updateTopRecipes } = topRecipesReducer.actions;

export const topRecipes = (state:RootState) => state.topRecipes.topRecipes;

export default topRecipesReducer.reducer