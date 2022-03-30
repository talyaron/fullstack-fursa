import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { AnyArray } from "immer/dist/internal";
import { RootState } from "../store";

// interface type {
//   name: String;
//   isTrue: boolean;
// }

// const types_: Array<type> = [{ name: 'Food', isTrue: false }, { name: 'Drinks', isTrue: false }, { name: 'Desserts', isTrue: false },
//                               { name: 'Healthy', isTrue: false }, {name:'Salads', isTrue: false}, {name:'Soups', isTrue: false},
//                               {name:'Pastries', isTrue: false}]

export interface RecipeState {
    _id: String;
    image: any;
    name: string;
    time: string;
    servings: string;
    calories: string;
    ingredients: string;
    method: string;
    notes: string;
    userName: String;
    types: Array<any>;
    date: string;
    likes: number;
}

interface recipesByType {
    recipes: Array<RecipeState>;
    recipesByType: Array<RecipeState>;
    allRecipes: Array<RecipeState>;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: recipesByType = {
    recipes: [],
    recipesByType: [],
    allRecipes: [],
    status: 'idle'
}

export const recipesByTypeAsync = createAsyncThunk(
    'recipesByType/fetchByType',
    async (type: any, thunkAPI) => {
        try {
            const response = await axios.post('/userRecipes/get-recipes-ByType', { type: type });
            const data = response.data;
            if (data.ok)
                return data.recipes;
            else return thunkAPI.rejectWithValue("failed");
        } catch (error: any) {
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getAllRecipes = createAsyncThunk(
    'getAllRecipes/fetchGetAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/userRecipes/get-all-recipes');
            const data = response.data;
            if (data.ok) {
                return data.recipes;
            }
            else return thunkAPI.rejectWithValue("failed");
        } catch (error: any) {
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getSearchRecipes = createAsyncThunk(
    'searchRecipes/fetchSearchRecipes',
    async (search: any, thunkAPI) => {
        try {
            console.log(search)
            const response = await axios.post('/userRecipes/get-search-recipes', search);
            const data = response.data;
            if (data.ok)
                return data.recipes;
            else return thunkAPI.rejectWithValue("failed");
        } catch (error: any) {
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const recipesReducer = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        updateRecipes(state) {
            state.recipes = [];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(recipesByTypeAsync.pending, (state, action) => {
                state.recipesByType = [];
                state.status = 'loading';
            })
            .addCase(recipesByTypeAsync.fulfilled, (state, action) => {
                state.recipesByType = action.payload;
                state.status = 'idle';
            })
            .addCase(recipesByTypeAsync.rejected, (state, action) => {
                state.recipesByType = [];
                state.status = 'failed'
            })
            .addCase(getAllRecipes.pending, (state, action) => {
                state.allRecipes = [];
                state.status = 'loading';
            })
            .addCase(getAllRecipes.fulfilled, (state, action) => {
                state.allRecipes = action.payload;
                state.status = 'idle';
            })
            .addCase(getAllRecipes.rejected, (state, action) => {
                state.allRecipes = [];
                state.status = 'failed'
            })
            .addCase(getSearchRecipes.pending, (state, action) => {
                state.recipes = [];
                state.status = 'loading';
            })
            .addCase(getSearchRecipes.fulfilled, (state, action) => {
                state.recipes = action.payload;
                state.status = 'idle';
            })
            .addCase(getSearchRecipes.rejected, (state, action) => {
                state.recipes = [];
                state.status = 'failed'
            })
    }
});

export const { updateRecipes } = recipesReducer.actions;

export const recipes = (state: RootState) => state.recipes.recipes;
export const recipesByType = (state: RootState) => state.recipes.recipesByType;
export const allRecipes = (state: RootState) => state.recipes.allRecipes;

export default recipesReducer.reducer;