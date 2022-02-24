import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../../app/store";

export interface recipeInfo{
    id:number;
    name:string;
    image:string;
    time:string;
    people:string;
    calories:string;
    ingredients:string;
    method:string;
}

interface recipesState{
    top10Recipes:Array<recipeInfo>;
    recentRecipes:Array<recipeInfo>;
    myRecipes:Array<recipeInfo>;
}

const initialState : recipesState = {
    top10Recipes:[],
    recentRecipes:[],
    myRecipes:[]
};

export const getRecipesAsync = createAsyncThunk(
    'recipes/fetchRecipe',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('http://localhost:3004/Recipes');
            const data = response.data;
            return data;
        } catch (error:any) {
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const recipesReducer = createSlice({
    name:'recipes',
    initialState,
    reducers:{
        addToMyRecipe(state, action:PayloadAction<recipeInfo>){
            state.myRecipes = [...state.myRecipes, action.payload];
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getRecipesAsync.fulfilled, (state, action) => {
            state.myRecipes = action.payload[2].myRecipe;
            state.top10Recipes = action.payload[0].top10;
            state.recentRecipes = action.payload[1].recent;
        })
    }
})

export const { addToMyRecipe } = recipesReducer.actions;

export const top10Recipes = (state:RootState) => state.recipesArray.top10Recipes;
export const recentRecipes = (state:RootState) => state.recipesArray.recentRecipes;
export const myRecipes = (state:RootState) => state.recipesArray.myRecipes;

export default recipesReducer.reducer