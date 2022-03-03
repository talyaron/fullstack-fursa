import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../../app/store";
import {recipeInfo} from '../../../App';

interface recipesState{
    myRecipes:Array<recipeInfo>;
}

const initialState : recipesState = {
    myRecipes:[]
};

export const getMyRecipesAsync = createAsyncThunk(
    'myrecipe/fetchMyRecipe',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('http://localhost:3004/myRecipe');
            const data = response.data;
            return data;
        } catch (error:any) {
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const myRecipesReducer = createSlice({
    name:'recipes',
    initialState,
    reducers:{
        addToMyRecipe(state, action:PayloadAction<recipeInfo>){
            state.myRecipes = [...state.myRecipes, action.payload];
        },
        updateMyRecipe : (state, action:PayloadAction<Array<any>>) => {
            const index = action.payload[1];
            {state.myRecipes.filter((recipe:recipeInfo)=>{
                if(recipe.id != index)
                    return recipe
                else return action.payload[0]
            })}
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getMyRecipesAsync.fulfilled, (state, action) => {
            state.myRecipes = action.payload;
        })
    }
})

export const { addToMyRecipe, updateMyRecipe } = myRecipesReducer.actions;

export const myRecipes = (state:RootState) => state.myRecipes.myRecipes;

export default myRecipesReducer.reducer